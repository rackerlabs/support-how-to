---
node_id: 1373
title: Getting Started With Rackspace Monitoring CLI
type: article
created_date: '2012-04-04'
created_by: Rackspace Support
last_modified_date: '2015-12-31'
last_modified_by: Stephanie Fillmon
product: Cloud Monitoring
product_url: cloud-monitoring
---

Cloud Monitoring is an API driven cloud service built for infrastructure
monitoring.  It offers a simple yet powerful feature-set, allowing
extreme flexibility in configuration and execution.

This guide is intended to be a supplement to the [official technical
documentation](https://developer.rackspace.com/docs/cloud-monitoring/v1/developer-guide/),
not a replacement for it.

Getting started with an API-based monitoring system can be daunting when
trying to rapidly scale infrastructure. To get your feet wet with the
API, we have created ***Raxmon***, a Command Line Interface (CLI) tool.

------------------------------------------------------------------------

Step One: Setup
----------------

####
Install RaxmonCLI

To avoid repeating the raxmon installation on each new Cloud Server,
install it on your workstation and not your server.

**Note**: raxmon requires Python 2.5, 2.6 or 2.7. Be sure that Python is
installed before proceeding.

The Rackspace-Monitoring CLI tool is available here as open source:
<https://github.com/racker/rackspace-monitoring-cli>

The utility can be installed via
[PIP](http://www.pip-installer.org/en/latest/installing.html):

    sudo pip install rackspace-monitoring-cli

#### Getting your API Key

You will need to [get your API
key](/how-to/view-and-reset-your-api-key)
in order to be able to administer Cloud Monitoring.

Once you've obtained your API key, go to your Home folder (you can use
**cd \~/**) and create a file named **.raxrc**, and add the following
text:

    [credentials]
    username=MY_USERNAME
    api_key=MY_API_KEY

An additional section is required in order to make use of the UK
authentication endpoint (the default URL points to the US endpoint):

    [auth_api]
    url=https://lon.identity.api.rackspacecloud.com/v2.0/tokens

Now run raxmon to see that you can connect properly.

    $ raxmon-entities-list

If the output includes a Trackback of most recent calls,
Congratulations! It works!

------------------------------------------------------------------------

Step Two: Getting Familar
-------------------------

Raxmon CLI has a variety of commands and abilities at its disposal. This
section walks you through generating one of the most used checks, an
HTTP check.

HTTP checks continually submit GET requests to your webpage and make
sure that it responds and doesn't timeout or get connection refused, and
triggers an alert if the response is something like a 404.

Raxmon mostly follows CRUD methodology, Create, Read (list), Update,
Delete with five types:

-   [Checks](http://docs.rackspace.com/cm/api/v1.0/cm-devguide/content/service-checks.html)
-   [Entities](http://docs.rackspace.com/cm/api/v1.0/cm-devguide/content/service-entities.html)
-   [Alarms](http://docs.rackspace.com/cm/api/v1.0/cm-devguide/content/service-alarms.html)
-   [Notifications](http://docs.rackspace.com/cm/api/v1.0/cm-devguide/content/service-notifications.html)
-   [Notification
    Plans](http://docs.rackspace.com/cm/api/v1.0/cm-devguide/content/service-notification-plans.html)

Type \$ **raxmon --help** to see all of the commands available to
raxmon.

You will need to update multiple items in one go, so let's review how to
input lists and dictionaries in the terminal:

> **List**
> Use a comma delimited string. For example:
> raxmon-checks-create --monitoring-zones=mzA,mzB,mzC
>
> **Dictionary**
> Use a comma delimited string of key=value pairs. For example
> raxmon-entities-create --metadata="location=server room,tag=foobar"

------------------------------------------------------------------------

Step Three: Monitoring an HTTP Page
------------------------------------

#### Create an Entity

[Entities](http://docs.rackspace.com/cm/api/v1.0/cm-devguide/content/service-entities.html)
are Cloud Monitoring's name for server-like objects. Anything that has
an IP address is defined as an entity. Currently Cloud Monitoring has no
concept of our environment, so lets create an entity. <span>The
option </span><span> </span><span>--ip-addresses="alias=10.10.10.10"</span><span> </span><span>specifies
the IP address and an alias for the target. You can have multiple
targets per node.</span>

    $ raxmon-entities-create --label my_first_server --ip-addresses="alias=10.10.10.10"

    Resource created. ID: entZ4JPIfA

Now we need to create a
[check](http://docs.rackspace.com/cm/api/v1.0/cm-devguide/content/service-checks.html)
. To create a check we'll need a few things.

-   Check Type - In this case,
    [remote.HTTP](http://docs.rackspace.com/cm/api/v1.0/cm-devguide/content/service-check-types.html#section-check-types-remote.http).
-   A Label
-   Entity ID - In this case 'entZ4JPIfA' as returned in the example
    above
-   [Monitoring
    Zone](http://docs.rackspace.com/cm/api/v1.0/cm-devguide/content/service-monitoring-zones.html) -
    The data center we're going to monitor from
-   Target Alias - A key in the entity's 'ip\_addresses' hash used to
    resolve this check to an IP address.
-   Any check specific details.

We have all of these, except the [monitoring
zone](http://docs.rackspace.com/cm/api/v1.0/cm-devguide/content/service-monitoring-zones.html).
Lets grab that now.

    $ raxmon-monitoring-zones-list

    <MonitoringZone: id=mzdfw label=dfw provider=Rackspace Monitoring ...>
    <MonitoringZone: id=mzhkg label=hkg provider=Rackspace Monitoring ...>
    <MonitoringZone: id=mzlon label=lon provider=Rackspace Monitoring ...>
    <MonitoringZone: id=mzord label=ord provider=Rackspace Monitoring ...>
    Total: 4

Now lets create that check. You'll use the Entity ID returned above, and
the name of the Target Alias we created before.

    $ raxmon-checks-create --type remote.http --label http --entity-id entZ4JPIfA --monitoring-zones mzord --details="url=www.example.com,method=GET" --target-alias eth0

    Resource created. ID: chNbqDaZrJ

#### Notification Addresses and Alarms

Checks are great, but you also need to be able to receive
[notifications](http://docs.rackspace.com/cm/api/v1.0/cm-devguide/content/service-notifications.html).
Lets create an e-mail address notification type now.

    $ raxmon-notifications-create --label example-email --type email --details="address=user@email.com"
    Resource created. ID: ntYgMnnipC

You also need to create a [notification
plan](http://docs.rackspace.com/cm/api/v1.0/cm-devguide/content/service-notification-plans.html).
This allows cloud monitoring to emit different types of alerts on
different states.

    $ raxmon-notification-plans-create --label notification_plan_1 --critical-state ntYgMnnipC --warning-state ntYgMnnipC --ok-state ntYgMnnipC
    Resource created. ID: npzwIZKV6o

Notifications are ONLY emitted when state changes. When a plan moves
from OK state to Critical state, it will notify the "Critical State
Notification." When it then changes from Critical to OK the "OK State
Notification" will be used.

Now that you have a notification address and plan, you also need to
create the
[alarm](http://docs.rackspace.com/cm/api/v1.0/cm-devguide/content/service-alarms.html)
itself. Rackspace Cloud Monitoring uses alarms to evaluate the metrics
of a check and decide if a notification plan should be executed.

    $ raxmon-alarms-create --check-id=chNbqDaZrJ --criteria "if (metric[\"code\"] regex \"^[23]..$\") { return OK } return WARNING" --notification-plan npzwIZKV6o --entity-id entZ4JPIfA

Great! That's it. You now have a check, notification, and alarm. Lets
look at the details:

    raxmon-alarms-list --entity entZ4JPIfA --details
    {'criteria': u'if (metric["code"] regex "^[23]..$") { return OK } return WARNING', 'driver': <rackspace_monitoring.drivers.rackspace.RackspaceMonitoringDriver object at 0x101d66710>, 'entity_id': u'entZ4JPIfA', 'id': u'albuOSvLjf', 'notification_plan_id': u'npzwIZKV6o','type': u'remote.http'}

Now anything but a 2XX or 3XX will return an error and you will be
notified via e-mail.

Conclusion
----------

With these simple principles, you'll be able to create a robust and
scalable monitoring system that gives you better insight into
your infrastructure.  For more information, be sure to consult the
[Development Guide for Cloud
Monitoring](http://docs.rackspace.com/cm/api/v1.0/cm-devguide/content/overview.html)
as well as the [Cloud Monitoring
FAQ](/how-to/rackspace-monitoring-faq).

