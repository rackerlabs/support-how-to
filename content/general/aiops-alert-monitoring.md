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
- Individual alert notifications are sent to the Rackspace Notification system (RNS)

### Situation ticket information

A Situation ticket is created when an alert is triggered.

This Situation ticket will contain one or more alerts from one or more devices, depending on the grouping logic.

What is new is that Situation tickets are not static. They are updated whenever the severity, subject, number of devices, or number of alerts changes.

Starting out there are three major situation groupings

* Device Level - Alerts from a single device
* Multi-device Level - Alerts from multiple devices
* Account Level - Alerts from a Custom Monitor

The ticket subject will display different situation names based on the type of grouping. In the table below we see some examples of what you will see in the subject of the ticket and what it means about the grouping of the alerts.

<table>
<tr>
<th>Grouping</th>
<th>Situation / Ticket Subject</th>
<th>Description</th>
</tr>
<tr>
<td>Device Level</td>
<td>Alerts with similar names / descriptions</td>
<td>Alerts from the same device with similar names or descriptions are grouped together. Some examples of this could be multiple low-disk space alerts or SQL job failures.</td>
</tr>

<tr>
<td>Device Level</td>
<td>Alerts with the same classification</td>
<td>Alerts from the same device that are of the same type. Some examples of this could be Base OS Service Failed.</td>
</tr>

<tr>
<td>Device or Multi-device</td>
<td>URL-Port-Ping failures and connected device alerts</td>
<td>This situation contains alerts from one or more devices due to inaccessible URLs, ports (22, 3306, etc) or unresponsive to pings.</td>
</tr>

<tr>
<td>Multi-device</td>
<td>Situation for associated devices</td>
<td>Tickets with this subject indicate that the situation contains similar alerts from multiple devices.</td>
</tr>

<tr>
<td>Multi-device</td>
<td>Situation for clustered device</td>
<td>Groups alerts together with common cluster devices.</td>
</tr>

<tr>
<td>Account Level</td>
<td>Situation for generic alerts per tenant</td>
<td>The monitoring agent labels some alerts as "generic". These alerts are grouped together and details about the individual alerts are in listed in the ticket.</td>
</tr>

<tr>
<td>Account Level</td>
<td>Situation for custom monitor alerts or monitoring device per tenant</td>
<td>Customized monitors generate alerts based on a specific criteria. Alerts from these monitors are grouped together into a single situation.</td>
</tr>

</table>


### Sample situation ticket

In this section we will cover

1. How to identify a Situation ticket in the MyRackspace portal
2. How to identify how many devices and alerts associated with a situation
3. How to identify the information in a Situation ticket

#### Identify a Situation ticket

In the MyRackspace portal, situation tickets will start the with SITUATION followed by a description of the grouping.

<img src="https://5190c7d0c790dd6a46c5-c6926f0c34f49651f083091aa08ad521.ssl.cf1.rackcdn.com/aiops_images/situation-ticket-example-1.png" />

#### Identify the information in a Situation ticket

In the situation ticket all of the correlated alerts will be listed under CLUSTERED ALERTS:

<img src="https://94699ff2b15c95457dd6-c6926f0c34f49651f083091aa08ad521.ssl.cf1.rackcdn.com/aiops_images/situation-ticket-text.png" />

### RNS alert notification information

Information about individual alerts is reported through the Rackspace Notification System (RNS). It is accessed by clicking on Notifications in the upper right-hand corner of the MyRackspace portal.

Following is a sample of an alert in the Rackspace Notification System (RNS)

<img src="https://94699ff2b15c95457dd6-c6926f0c34f49651f083091aa08ad521.ssl.cf1.rackcdn.com/aiops_images/RNS-Notifications.jpg" />
