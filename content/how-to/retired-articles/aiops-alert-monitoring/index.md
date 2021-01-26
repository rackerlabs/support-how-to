---
permalink: aiops-alert-monitoring/
audit_date: '2020-04-10'
title: AIOps alert monitoring
type: article
created_date: '2020-03-23'
created_by: JP Gonzalez
last_modified_date: '2021-01-21'
last_modified_by: Rose Morales
---

To improve your Fanatical Experience&trade;, Rackspace integrated artificial intelligence
for IT operations (AIOps) and event correlation into our ticketing, monitoring, and alert
notification system.

This article presents a high-level overview of how AIOps and event correlation improve on the
Rackspace monitoring and alert notification system. It also highlights the changes you can expect
to see.

Contact Rackspace Sales or your account representative for more information regarding AIOps or other
features Rackspace supports.

### What is AIOps?

AIOps is the practice of using automation to enhance IT operations through analytics and machine
learning (ML).

At Rackspace, we use deterministic alert clustering algorithms, based on the relationships between alerts,
to group one or more related alerts into *situations*.

### What is changing?

As a Rackspace customer, you can expect to see a reduction in the number of tickets you receive when a
single event triggers multiple alerts.

For example, when a disk is full, causing your database and your website to stop responding, the system
could potentially generate three separate tickets.

With AIOps and event correlation, these three alerts are combined into a single ticket and routed to a
Racker who can quickly see all the alerts in one place.

The new features provide the following improvements to the Rackspace monitoring system:

- Determine if a situation is related to a single device or multiple devices.
- Improve routing to the Rackspace team best suited to provide support.
- Enhance alert reporting via *situation* notices, which aggregate related alerts into a single notification.

### Why it is changing?

Rackspace continually seeks to reduce resolution time, decrease ticket noise, and create a better
overall customer experience.

We believe adopting AIOps helps us meet these growing demands.

### Change details

The MyRackspace Rackspace Notification System (RNS) notifications and situation tickets have the
following characteristics:

- Alerts are grouped into correlated situations.
- A Rackspace support ticket is created for each situation.
- Situations might contain one or more alerts.
- Situation tickets are updated if new alerts come in after the initial alert.
- Individual alert notifications are sent to the RNS.

### Situation ticket information

The system creates a situation ticket when an alert occurs.

This situation ticket contains one or more alerts from one or more devices, depending on the grouping logic.

However, situation tickets are not static. The system updates situation tickets whenever the severity,
subject, number of devices, or number of alerts changes.

Initially, the following major situation groupings exist:

- **Device level**: Alerts from a single device
- **Multi-device level**: Alerts from multiple devices
- **Account level**: Alerts from a custom monitor

The ticket subject displays different situation names based on the type of grouping. The following table
shows some ticket subject and alert group samples:

<table>
<tr>
<th>Grouping</th>
<th>Situation / Ticket subject</th>
<th>Description</th>
</tr>
<tr>
<td>Device level</td>
<td>Alerts with similar names or descriptions</td>
<td>Alerts from the same device with similar names or descriptions are grouped together. Examples include multiple low-disk space alerts or SQL job failures.</td>
</tr>

<tr>
<td>Device level</td>
<td>Alerts with the same classification</td>
<td>Alerts from the same device that are of the same type. An example is **Base OS Service Failed**.</td>
</tr>

<tr>
<td>Device or Multi-device</td>
<td>URL-Port-Ping failures and connected device alerts</td>
<td>This situation contains alerts from one or more devices due to inaccessible URLs, ports (22, 3306, and so on), or being unresponsive to pings.</td>
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
<td>Account level</td>
<td>Situation for generic alerts per tenant</td>
<td>The monitoring agent labels some alerts as generic. These alerts are grouped together, and details about the individual alerts are listed in the ticket.</td>
</tr>

<tr>
<td>Account level</td>
<td>Situation for custom monitor alerts or monitoring device per tenant</td>
<td>Customized monitors generate alerts based on specific criteria. Alerts from these monitors are grouped together into a single situation.</td>
</tr>

</table>

<br>

### Sample situation ticket

This section covers the following tasks:

- How to identify a situation ticket in the MyRackspace portal.
- How to identify the information in a situation ticket.

#### Identify a situation ticket

In the MyRackspace portal, situation tickets start with **SITUATION** followed by a description of the grouping.

{{<image src="situation-ticket-example-1.png" alt="" title="">}}

#### Identify the information in a situation ticket

In the situation ticket, all of the correlated alerts are listed under **CLUSTERED ALERTS**:

{{<image src="situation-ticket-text.png" alt="" title="">}}

### RNS alert notification information

The Rackspace Notification System (RNS) reports information about individual alerts. Access this information
by clicking on **Notifications** in the upper right-hand corner of the MyRackspace portal.

The following image shows a sample of an alert in the Rackspace Notification System (RNS):

{{<image src="RNS-Notifications.jpg" alt="" title="">}}
