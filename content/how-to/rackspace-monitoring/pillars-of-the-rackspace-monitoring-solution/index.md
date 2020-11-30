---
permalink: pillars-of-the-rackspace-monitoring-solution/
audit_date: '2020-11-27'
title: Pillars of the Rackspace monitoring solution
type: article
created_date: '2016-03-03'
created_by: Shane Duan
last_modified_date: '2020-11-27'
last_modified_by: Rose Morales
product: Rackspace Monitoring
product_url: rackspace-monitoring
---

Rackspace offers its monitoring solution through three pillar products:
**Rackspace Monitoring, Rackspace Metrics, and Rackspace Intelligence**&mdash;the MMI
products. Through seamless integration, the MMI products enable customers to
improve system performance and availability through a single pane of
glass and an enterprise-grade platform.

{{<image src="monitoring-mmi.svg" alt="Monitoring and Intelligence improve data gathering, alert generation, and data storage." alt="" title="">}}

- Rackspace Monitoring offers reliable data gathering and accurate alert
  generation. For details, see the following concepts section.
- Rackspace Metrics provides economical and reliable data storage at scale.
  For details, see the [Rackspace Metrics overview](/support/how-to/rackspace-metrics-overview/).
- Rackspace Intelligence delivers an intuitive interface that gives users a transparent view into
  their infrastructure health along with actionable insights. For details, see the 
  [Rackspace Intelligence Introduction](/support/how-to/rackspace-intelligence/).

### Monitoring concepts

The following diagram illustrates the key concepts of the Rackspace Monitoring product.

{{<image src="rackspace-monitoring-concepts.png" alt="" title="">}}

- **Entities** represent any object or resource, often used when referring to
  servers. You can create entities, which can be servers or non-server
  objects, through the UI, API, or CLI. As you create new
  cloud servers, cloud databases, or dedicated devices, entities are created
  automatically. For more information, see the API operations reference for the
  [entity's resource](https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#entities-operations).
- **Checks** return a group of related metrics of an entity. Checks of different
  types return different sets of metrics that help you figure out how to collect
  the data you want. For a complete list of check types, see the
  [Check types documentation](https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#document-tech-ref-info/check-type-reference).
- **Alarms**  contain the rules that determine the state of an alarm as OK, WARNING,
  or CRITICAL. The state change of an alarm triggers an alert. For details of the alarm,
  see [Alert Triggering and Alarms](https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#document-tech-ref-info/alert-triggers-and-alarms).
- **Notifications** and **Notification** plans describe how Rackspace Monitoring
  sends alerts to you when an alarm state changes.
  - Each  notification specifies two things: to whom the alert should be sent
    (the target) and how it should be delivered (the type). For a complete list
    of notification types, see the [Notification types article](https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#document-api-operations/notification-type-operations).

    **Note**: A notification plan is a group of notifications used by alarms.

For other terms and concepts in Rackspace Monitoring, see [Monitoring key terms and concepts](https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#monitoring-key-terms-and-concepts).
