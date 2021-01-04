---
permalink: rackspace-monitoring-automation-integrate-monitoring-with-chef/
audit_date: '2020-11-30'
title: Rackspace Monitoring Automation&mdash;Integrate monitoring with Chef
type: article
created_date: '2012-08-14'
created_by: Rae D. Cabello
last_modified_date: '2020-11-30'
last_modified_by: Rose Morales
product: Rackspace Monitoring
product_url: rackspace-monitoring
---

Do you leverage data center automation to build products faster? Do you want a
seamless way to define thresholds? Do you want to leverage some of the easiest,
most reliable technology to make monitoring a breeze? Learn how to leverage the
power of a full-featured and hosted monitoring system with Rackspace Monitoring!

### How?

- Leverage all the primitives built as a lightweight resource in Chef. This
     means you have complete control.
- You're in total control. We run the monitoring system. However, it's a
    platform, and this code bootstraps the integration. It's up to you to define
    what you want to monitor and how you want to be alerted.
- We enhance this internally, continuing to improve the tool as we
    find new and interesting ways to use it.
- This is only the beginning. We continue to improve this cookbook as
    Rackspace Monitoring grows in functionality.

To get started, you should be familiar with Chef and Ruby and want to 
reduce the time to monitor your infrastructure.

### Prerequisites

Getting started requires downloading the cookbook. We host the Rackspace
Monitoring git repo on GitHub, but it is an official cookbook.
Get the cookbook here:
[https://github.com/racker/cookbook-cloudmonitoring](https://github.com/racker/cookbook-cloudmonitoring).

Install it into a Chef repo, and then you're ready to get started.

**Note:** If you are unfamiliar with Chef, read the
[Opscode Getting Started Guide](https://docs.opscode.com/#getting-started). This particular
recipe uses data bags that assumes a chef version
greater than 0.8.  Also, make sure and brush up on *knife* and how it works.

### Step 1: Create the initial encrypted data bag

To manage the Rackspace Monitoring API, you need to addauthentication credentials
to the node. There are various ways to handle this. This recipe uses the
encrypted data bag approach. Create a data bag with the following
initial values:

    $ knife data bag create --secret-file <secret-file> rackspace cloud
    { "id": "cloud", "username": "", "apikey": "", "region": "" }

This creation makes it painless to use the recipes because yuou don't need to
include the API key and Rackspace Cloud account username for every call. For
information about how to find your API key, see
[View and reset your API key](/support/how-to/view-and-reset-your-api-key).

### Step 2: Add the default recipe to the runlist

Next, add the **cloud\_monitoring::default** recipe to the run list for
the servers that you need to monitor. This addition identifies the servers that
interact with the Rackspace Monitoring API. It also installs all the gem
dependencies needed to make calls with the Rackspace Monitoring Gem. Use the
`knife` command to add the default recipe to the runlist:

    $ knife node run_list add <NODE> cloud_monitoring::default

Chef's runlist inheritance also serves the same purpose.  If, for
instance, you aspply the **cloud\_monitoring::default** recipe to the
production environment, then all production nodes inherit the recipe.

### Step 3: Configure the initial node setup

The approach on this cookbook focuses on flexibility for users to use it as
they please. These particular instructions use the recipe in an opinionated
way. As an example, the label of the entity is the hostname. This is a
recommendation on how to leverage this recipe but not the only way. Creating an
entity is the first step of actually using the API from Chef. The entity maps
to the target of what you're monitoring.

The entity, in most cases, represents a server, load balancer, or website. However,
there is some advanced flexibility, which you use only in rare cases. This
use-case highlights populating your chef nodes in Rackspace Monitoring.
Learn more about all these concepts in the docs, specifically the **Concepts**
section of the Developer Guide:

    cloud_monitoring_entity "#{node.hostname}" do
      ip_addresses        'default' => node[:ipaddress]
      metadata            'environment' => 'dev', :more => 'meta data'
      action :create
    end

The Chef run creates an entity with that label or updates it if it already
exists.  If the chef server ever goes away, the label of the entity is
matched up with the hostname (in this case).

### Step 4: Create the first check

After creating an entity, this next step describes one or more checks for that target
entity. It prescribes how often to poll a website or which piece of HTML to
perform a regular expression match against. The documentation goes into more
depth in the **Concepts** section. A ping, which is simple to configure, is the first
check created in this Guide. 

After performing a Chef run, the Rackspace Monitoring API should begin pinging
the specified entity. Because this snippet uses the **target\_alias** feature, it
points to the IP address specified node\[:ipaddress\]. If that ever changes the check
automatically updates. This is an important feature of the Rackspace Monitoring API:

    cloud_monitoring_check  "ping" do
      target_alias          'default'
      type                  'remote.ping'
      period                30
      timeout               10
      monitoring_zones_poll ['mzord']
      action :create
    end

### Step 5: Create an alarm

An alarm describes how a user gets an alert based on a check.  It matches the
criteria to alert with a destination to send the notifications. The alarm
leverages our Javascript-like language to create criteria based on metrics for a
particular check. You can read in-depth about the alarm language here:
<https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#alarm-language>.

Next, create an Alarm for a ping either not returning (which would
happen by default) or one that is below 80% or 95% on the number of returned pings. By
default, the *remote.ping* check sends out 5 pings. If only three came back, it would be
marked as `CRITICAL`. If four came back, it would be a `WARNING`. If five came back. it would
be marked as `OK`:

    cloud_monitoring_alarm  "ping alarm" do
      check_name            'ping'
      example_id            'remote.ping_packet_loss'
      notification_plan_id  'npTechnicalContactsEmail'
      action :create
    end

Three important events are happening in this example:

1. Since the entity recipe was placed before this stanza, it implicitly selects
   the `entityId` for this or any check in scope.

2. **npTechnicalContactsEmail** is a default notification plan that sends to the
   technical contacts on the account, if there is none it sends to the primary
   contact on the account. If there is no one on the account, it sends the
   Rackspace Monitoring team an email, which will in turn file a ticket.

3. This uses the alarm example API detailed here. This particular example uses
   the snippet below:

    ...
        {
            "id": "remote.ping_packet_loss",
            "label": "Ping packet loss",
            "description": "Alarm which returns WARNING if the packet loss is greater than 5% and CRITICAL if it's greater than 20%",
            "check_type": "remote.ping",
            "criteria": "if (metric['available'] < 80) {\n  return CRITICAL, \"Packet loss is greater than 20%\"\n}\n\nif (metric['available'] < 95) {\n  return WARNING, \"Packet loss is greater than 5%\"\n}\n\nreturn OK, \"Packet loss is normal\"\n",
            "fields": []
        }
    ...

### Conclusion

We now have monitoring for each server in your infrastructure with at
least ping checking. As you add servers, Rackspace Monitoring automatically
scales with you. To build on this, consider adding more complex checks like SSH and
HTTP. We also support CPU, Disk, and other host-based metrics.
