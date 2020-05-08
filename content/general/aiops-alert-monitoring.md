---
permalink: aiops-alert-monitoring/
audit_date: '2020-04-10'
title: AIOps alert monitoring
type: article
created_date: '2020-03-23'
created_by: JP Gonzalez
last_modified_date: '2020-05-06'
last_modified_by: Alex Juarez
product: undefined
product_url: undefined
---

To improve upon your **Fanatical Experience®**, Rackspace is integrating AIOps and event correlation into our ticketing, monitoring, and alert notification system.

This article offers a high-level overview of how AIOps and event correlation improves upon the Rackspace monitoring and alert notification system and highlights what changes you can expect to see.

Contact Rackspace Sales or your account representative for more information regarding AIOps or other features Rackspace supports.

### What is AIOps?

AIOps stands for Artificial Intelligence for IT Operations. It is the practice of using automation to enhance IT operations through analytics and machine learning (ML).

At Rackspace, this means we are using deterministic alert clustering algorithms based on the relationships between alerts to group one or more related alerts into Situations.

### What is changing

As a Rackspace customer, you can expect to see a reduction in the number of tickets you receive when a single event triggers multiple alerts.

For example, if a disk is full and causes your database and your website to stop responding, this could potentially generate three separate tickets.

With AIOps and event correlation, these three alerts would be combined into a single ticket and routed to a Racker who can quickly see all the alerts in one place.

To summarize, the new features provide the following improvements to Rackspace’s monitoring system:

- Identification of whether a situation is related to a single device or multiple devices.
- Improved routing to the Rackspace team best suited to provide support
- Enhanced alert reporting via *situation* notices, which aggregate related alerts into a single notification

### Why it is changing

Rackspace continually seeks to reduce resolution time, decrease ticket noise, and create a better overall customer experience.

We believe adopting AIOps helps us meet these growing demands.

### Change details

MyRackspace RNS notifications and Situation tickets have the following characteristics:

- Alerts are grouped into correlated situations.
- A Rackspace support ticket is created for each situation.
- Situations might contain one or more alerts
- Situation tickets will be updated if new alerts come in after the initial alert
- The subject of a ticket contains the Device and Alert count
- Individual alert notifications are sent to the Rackspace Notification system (RNS)
- In the situation ticket a link will be provided to related notifications

### Situation ticket information

A Situation ticket is created when an alert is triggered.

This Situation ticket will contain one or more alerts from one or more devices, depending on the grouping logic.

What is new is that Situation tickets are not static. They are updated whenever the severity, subject, number of devices, or number of alerts changes.

### Sample situation ticket

In this section we will cover

1. How to identify a Situation ticket in the MyRackspace portal
2. How to identify how many devices and alerts associated with a situation
3. How to identify the information in a Situation ticket

#### Identify a Situation ticket

In the MyRackspace portal, situation tickets will start the with SITUATION followed by a description of the grouping.

<img src="https://5190c7d0c790dd6a46c5-c6926f0c34f49651f083091aa08ad521.ssl.cf1.rackcdn.com/aiops_images/situation-ticket-example-1.png" />

#### Identify how many devices and alerts associated with a situation

TODO: Need Image for Subject Line

#### Identify the information in a Situation ticket

In the situation ticket all of the correlated alerts will be listed under CLUSTERED ALERTS:

<img src="https://94699ff2b15c95457dd6-c6926f0c34f49651f083091aa08ad521.ssl.cf1.rackcdn.com/aiops_images/situation-ticket-text.png" />

### RNS alert notification information

Information about individual alerts is reported through the Rackspace Notification System (RNS). It is accessed by clicking on Notifications in the upper right-hand corner of the MyRackspace portal.

Following is a sample of an alert in the Rackspace Notification System (RNS)

<img src="https://94699ff2b15c95457dd6-c6926f0c34f49651f083091aa08ad521.ssl.cf1.rackcdn.com/aiops_images/RNS-Notifications.jpg" />
