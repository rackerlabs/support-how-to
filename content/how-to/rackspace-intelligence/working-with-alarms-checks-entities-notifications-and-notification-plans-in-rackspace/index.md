---
permalink: working-with-alarms-checks-entities-notifications-and-notification-plans-in-rackspace/
audit_date: '2021-03-01'
title: 'Work with alarms, checks, entities, notifications, and notification plans in Rackspace Intelligence for dedicated accounts'
type: article
created_date: '2015-10-14'
created_by: Constanze Kratel
last_modified_date: '2021-03-01'
last_modified_by: Rose Morales
product: Rackspace Intelligence
product_url: rackspace-intelligence
---

Rackspace Intelligence provides a user interface that displays configuration
information about the following items:

### Entities

To view the configuration information for a specific item, you typically start
with a list of all the entities that you have set up and configured for
your system.

To obtain a list of entities on the Rackspace Intelligence interface, perform
the following steps:

1. Click **Monitor** and then click the **Entities** tab.
2. To view details about a specific entity, click the link for the entity. The
    top of the **Details** page shows information about the  entity.

### Checks

Rackspace Intelligence lets you view configuration of an entity's checks.
Customers with dedicated accounts can use remote checks.
Remote checks monitor an entity's Internet connectivity. Remote checks are
performed by attempting to contact the entity from outside the entity. For more
information, see 
[Remote check types](https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#remote-check-type-ref).

Rackspace Intelligence for dedicated accounts supports the following remote
checks:

- [ping](https://docs.rackspace.com/docs/rackspace-monitoring/v1/tech-ref-info/check-type-reference/#remote-ping)
- [TCP](https://docs.rackspace.com/docs/rackspace-monitoring/v1/tech-ref-info/check-type-reference/#remote-tcp)
- [HTTP](https://docs.rackspace.com/docs/rackspace-monitoring/v1/tech-ref-info/check-type-reference/#remote-http)

To view a check on the Intelligence interface, perform the following steps:

1. Click **Monitor** > **Entities**.
2. Click the desired entity.
3. On the **Entity Details** page, scroll to the **Monitoring Checks** section and
    click the link for the check that you want to view.

### Alarms

Rackspace Intelligence supports alarms that analyze the data that a check
collects.

The alarm criteria contain the logic to process this data and convert the alarm
into one of the following states: `OK`, `WARNING`, `CRITICAL`.

To view an alarm, perform the following steps:

1. Click on the **Details** page for an entity
2. Click the check for which you want
    to view the alarm
3. Scroll to the **Monitoring Alarms** section.
4. Select the alarm for which you
    want to view details.

### Open alerts

Open alerts report statuses that you have asked Rackspace Intelligence to
monitor.

You can view a list of all open alerts by clicking **Monitor** at the top of the
Rackspace Intelligence interface and then clicking **Open Alerts**.

### Notifications

Rackspace Intelligence lets you view notifications created for your entities.
You need to define notifications before you can set up a notification plan for an
entity. For example, you can define a method for contacting a support engineer by
SMS and a manager by email.

To view the notifications configured for you:

1. Click **Notify** at the top of the Rackspace Intelligence interface.
2. Click the **Notifications** tab.

### Notification plans

You can have notification plans defined that work with your monitoring
checks and alarms. You can specify several ways to notify members of your team
(notifications) and then assemble those notifications into notification plans.

To view the notification plans:

1. Select **Notify** at the top of the Rackspace Intelligence interface.
2. Click the **Notification Plans** tab.
