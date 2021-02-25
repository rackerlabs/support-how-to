---
permalink: examining-the-log-of-alerts-suppressed-by-rackspace-intelligence/
audit_date: '2021-02-25'
title: Examining the log of alerts suppressed by Rackspace Intelligence
type: article
created_date: '2015-07-16'
created_by: Rose Coste
last_modified_date: '2018-10-25'
last_modified_by: Rose Morales
product: Rackspace Intelligence
product_url: rackspace-intelligence
---

You can use the **Suppressed Alerts** log to review alerts that were muted but
ordinarily would have prompted notifications.

It is good practice to check the **Suppressed Alerts** list after a suppression
period ends to confirm that everything that was suppressed relates to the
purpose of the suppression. For example, if all device alerts were suppressed during a
scheduled maintenance period, alerts related to servers that were not expected
to be disrupted should be investigated.

{{<image src="intelligence-suppression-log.png" alt="" title="">}}

To learn more about an entity, notification plan, or suppression in the log,
click its name. If it has not been deleted, you can then see its detailed
description.

{{<image src="intelligence-suppression-inactive.png" alt="" title="">}}
