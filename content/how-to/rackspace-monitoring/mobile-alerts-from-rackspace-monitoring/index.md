---
permalink: mobile-alerts-from-rackspace-monitoring
audit_date: '2020-11-27'
title: Mobile alerts from Rackspace Monitoring
type: article
created_date: '2014-08-13'
created_by: Bekki Bolthouse
last_modified_date: '2020-11-27'
last_modified_by: Rose Morales
product: Rackspace Monitoring
product_url: rackspace-monitoring
---

Sometimes, an email alert isn't enough. If you are on call, on the go, or far
from Wi-Fi, mobile alerts are a necessity. For the most critical problems, you
can set up notifications from multiple form factors, combining SMS with
our other [notification types](/support/how-to/rackspace-monitoring-checks-and-alarms/).

{{<image src="CMSMS1.png" alt="" title="">}}

### Get notified with SMS

As a Rackspace Monitoring customer, you can now leverage unlimited SMS
worldwide at no additional cost. SMS alerting has the following advantages:

- Ensures that you never miss a major incident.
- Adds another layer of redundancy to your alerting.
- Pushes alerts to your device so that you don't need to pull them down from a
  mail server.
- Supports the most basic devices and doesn't require an expensive data
  plan. (*Standard text messaging rates from your carrier apply.*)
- Delivers alerts anywhere you have a cell signal.

### Set up alerts

You configure SMS alerts for your account by adding one or more new
notifications through the [raxmon CLI](https://docs.rackspace.com/docs/rackspace-monitoring/v1/getting-started/). You can add SMS alerts to an existing notification plan, or you can create a new one. Be
sure to attach the notification plan to one or more alarms. For step-by-step
guidance, see the tutorial on setting up notifications and notification plans in
the Rackspace Monitoring [Getting Started Guide](https://docs.rackspace.com/docs/rackspace-monitoring/v1/getting-started/create-first-monitor#setting-up-notifications).

**Note:** You can create alarms and notifications in any order, but to create a
new notification plan, you need to create a notification first.

### Tune out unwanted alerts

If you receive too many texts, or you don't want to get alerts during a
maintenance period, you can perform the following actions:

- Set up suppressions to mute alerts during planned events.
- Reconfigure your alerting preferences in the Cloud Control Panel or use the
  raxmon CLI.
- Tune your notification plans to ensure that the system sends only the most important
  notifications by SMS.
- Reply `STOP` to any text. This action stops all SMS alerts for that phone number
  for all alarms.

The SMS alerting functionality is available to US and UK Rackspace Monitoring
customers.

### Additional resources

Complete API reference documentation for [Rackspace Monitoring](https://docs.rackspace.com/docs/rackspace-monitoring/v1/api-reference/)
