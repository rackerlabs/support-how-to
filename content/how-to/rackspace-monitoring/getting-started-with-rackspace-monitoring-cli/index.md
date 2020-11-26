---
permalink: getting-started-with-rackspace-monitoring-cli/
audit_date: '2020-11-25'
title: Get Started with Rackspace Monitoring CLI
type: article
created_date: '2012-04-04'
created_by: Rackspace Support
last_modified_date: '2020-11-25'
last_modified_by: Rose Morales
product: Rackspace Monitoring
product_url: rackspace-monitoring
---

Rackspace Monitoring is an API-driven cloud service built for infrastructure
monitoring.  It offers a simple yet powerful feature set, allowing
extreme flexibility in configuration and execution.

This guide serves as a supplement to the
[Rackspace Monitoring Developer Guide](https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/).

Getting started with an API-based monitoring system can be daunting when
trying to scale infrastructure rapidly. To get your feet wet with the
API, we have created **Raxmon**, a Command Line Interface (CLI) tool.

### Step One: Setup

#### Install the Raxmon CLI

To avoid repeating the raxmon installation on each new Cloud Server,
install it on your workstation and not your server.

**Note**: raxmon requires Python 2.5, 2.6, or 2.7. Be sure to install Python
before proceeding.

The Rackspace-Monitoring CLI tool is available here as open source:
<https://github.com/racker/rackspace-monitoring-cli>.

You can install the utility by using the following
[PIP](https://www.pip-installer.org/en/latest/installing.html) command:

    sudo pip install rackspace-monitoring-cli

#### Getting your API Key

You need to [get your API key](/support/how-to/view-and-reset-your-api-key) to administer
Rackspace Monitoring.

After you get your API key, go to your Home folder (you can use **cd
\~/**) and create a file named **.raxrc**, and add the following configuration
information:

    [credentials]
    username=MY_USERNAME
    api_key=MY_API_KEY

You need an additional section to use the UK authentication
endpoint (the default URL points to the US endpoint):

    [auth_api]
    url=https://lon.identity.api.rackspacecloud.com/v2.0/tokens

Now run the following command to see that you can connect properly:

    $ raxmon-entities-list

If the output includes a *trackback* of the most recent calls, it
works.

### Step Two: Familiarize yourself with Raxmon

The raxmon CLI has a variety of commands and abilities at its disposal. This section
walks you through generating one of the most used checks: an HTTP check.

HTTP checks continually submit **GET** requests to your webpage to make sure
that it responds and doesn't time out. If the response is something like a 
`404`, the connection gets refused and triggers an alert.

Raxmon has the following five types and mostly uses CRUD methodology: Create, Read (list), Update, Delete:

- [Checks](https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#document-api-operations/check-operations)
- [Entities](https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#document-api-operations/entities-operations)
- [Alarms](https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#document-api-operations/alarms-operations)
- [Notifications](https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#document-api-operations/notifications-operations)
- [Notification Plans](https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#document-api-operations/notification-plans-operations)

Type the following command to see all of the commands available to raxmon:

    $ **raxmon --help**

You may need to update multiple items in one go, so let's review how to input
lists and dictionaries in the terminal:

- For **lists**, use a comma-delimited string. For example: 

      $ raxmon-checks-create --monitoring-zones=mzA,mzB,mzC

- For **dictionaries**, see a comma-delimited string of key=value pairs. For
  example:

      $ raxmon-entities-create --metadata="location=server room,tag=foobar"

### Step Three: Monitor an HTTP page

#### Create an entity

[Entities](https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#document-api-operations/entities-operations)
are the Rackspace Monitoring name for server-like objects. Anything that has an IP
address is defined as an entity. Currently, Rackspace Monitoring has no concept
of our environment, so let's create an entity. The option
`--ip-addresses="alias=10.10.10.10"` specifies the IP address and an alias for
the target. You can have multiple targets per node.

    $ raxmon-entities-create --label my_first_server --ip-addresses="alias=10.10.10.10"

If the operation was successful, the following message displays:

    Resource created. ID: entZ4JPIfA

Now we need to create a
[check](https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#checks). To create a check, you need the following info:

- **Check Type**: In this case,
    [remote.HTTP](https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#remote-http).
- A **Label**
- **Entity ID**: In this case `entZ4JPIfA` as returned in the example above
- **Monitoring Zone**: The data center we're going to monitor from
- **Target Alias**: A key in the entity's `ip_addresses` hash used to resolve
    this check to an IP address.
- Any check-specific details.

We have all of these, except for the monitoring zone. Run teh followng command to get that information:


    $ raxmon-monitoring-zones-list

If the operation was successful, the following message displays:

    <MonitoringZone: id=mzdfw label=dfw provider=Rackspace Monitoring ...>
    <MonitoringZone: id=mzhkg label=hkg provider=Rackspace Monitoring ...>
    <MonitoringZone: id=mzlon label=lon provider=Rackspace Monitoring ...>
    <MonitoringZone: id=mzord label=ord provider=Rackspace Monitoring ...>
    Total: 4

Now, let's create a check. Use the Entity ID returned previously and
the name of the Target Alias we created before.

    $ raxmon-checks-create --type remote.http --label http --entity-id entZ4JPIfA --monitoring-zones mzord --details="url=www.example.com,method=GET" --target-alias eth0

If the operation was successful, the following message displays:

    Resource created. ID: chNbqDaZrJ

#### Notification addresses and alarms

Checks are great, but you also need to be able to receive
[notifications](https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#document-api-operations/notifications-operations).
Create an e-mail address notification type now.

    $ raxmon-notifications-create --label example-email --type email --details="address=user@email.com"

If the operation was successful, the following message displays:

    Resource created. ID: ntYgMnnipC

You also need to create a [notification
plan](https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#document-api-operations/notification-plans-operations).
This allows Rackspace Monitoring to emit different types of alerts on different states.

    $ raxmon-notification-plans-create --label notification_plan_1 --critical-state ntYgMnnipC --warning-state ntYgMnnipC --ok-state ntYgMnni

If the operation was successful, the following message displays:

    Resource created. ID: npzwIZKV6o

Notifications are only emitted when the state changes. When a plan moves
from `OK` state to `Critical` state, it notifies the `Critical State
Notification`. When it then changes from `Critical` to `OK`, it uses the
`OK State Notification`.

Now that you have a notification address and plan, you also need to
create the
[alarm](https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#document-api-operations/alarms-operations)
itself. Rackspace Monitoring uses alarms to evaluate the metrics
of a check and decide if a notification plan should be executed.

    $ raxmon-alarms-create --check-id=chNbqDaZrJ --criteria "if (metric[\"code\"] regex \"^[23]..$\") { return OK } return WARNING" --notification-plan npzwIZKV6o --entity-id entZ4JPIfA

That's it. You now have a check, notification, and alarm. Run teh following command to
look at the details:

    $ raxmon-alarms-list --entity entZ4JPIfA --details

This returns the following information:

    {'criteria': u'if (metric["code"] regex "^[23]..$") { return OK } return WARNING', 'driver': <rackspace_monitoring.drivers.rackspace.RackspaceMonitoringDriver object at 0x101d66710>, 'entity_id': u'entZ4JPIfA', 'id': u'albuOSvLjf', 'notification_plan_id': u'npzwIZKV6o','type': u'remote.http'}

Now anything but a 2XX or 3XX returns an error and you are notified via e-mail.

### Conclusion

With these simple principles, you can create a robust and
scalable monitoring system that gives you better insight into
your infrastructure.  For more information, consult the
[Development Guide for Rackspace Monitoring](https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#developer-guide)
as well as the [Rackspace Monitoring FAQ](/support/how-to/rackspace-monitoring-faq).
