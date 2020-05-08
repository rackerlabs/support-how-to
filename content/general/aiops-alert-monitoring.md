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

MyRackspace RNS notifications and alert tickets have the following characteristics:

- Alerts are grouped into correlated situations.
- A Rackspace support ticket is created for each situation.
- Situations might contain one or more alerts.
- Individual alerts notifications are sent to the Rackspace Notification system along with each situation ticket created.

### Situation ticket information

When an alert is triggered, a Situation ticket is created. This Situation ticket
can contain one or more related alerts depending on the grouping logic.

### Sample situation ticket

In the MyRackspace portal, situation tickets will start the with SITUATION followed by a description of the grouping.

<img src="https://5190c7d0c790dd6a46c5-c6926f0c34f49651f083091aa08ad521.ssl.cf1.rackcdn.com/aiops_images/situation-ticket-example-1.png" />

In the situation ticket all of the correlated alerts will be listed under CLUSTERED ALERTS:

<img src="https://94699ff2b15c95457dd6-c6926f0c34f49651f083091aa08ad521.ssl.cf1.rackcdn.com/aiops_images/situation-ticket-text.png" />

### RNS alert notification information

Information about individual alerts is reported through the Rackspace Notification System (RNS). It is accessed by clicking on Notifications in the upper right-hand corner of the MyRackspace portal.

Following is a sample of an alert in the Rackspace Notification System (RNS)

<img src="https://94699ff2b15c95457dd6-c6926f0c34f49651f083091aa08ad521.ssl.cf1.rackcdn.com/aiops_images/RNS-Notifications.jpg" />
