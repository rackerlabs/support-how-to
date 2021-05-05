---
permalink: rackspace-monitoring-checks-and-alarms
audit_date: '2017-03-30'
title: Rackspace Monitoring checks and alarms
type: article
created_date: '2013-08-16'
created_by: Jim Culbreath
last_modified_date: '2017-03-30'
last_modified_by: Shane Duan
product: Rackspace Monitoring
product_url: rackspace-monitoring
---
A *check* specifies the parts of a server that you want to collect metrics about and how you want to collect them. In other words, a check collects a group of related metrics. For example, you can use the **agent.cpu** check to collect all the metrics related to CPU utilization of your server.

Because a check does not trigger any alerts by itself, collecting more data is almost always a good option. We recommend setting up as many checks as relevant to your server even before you know what alerts you want.

Rackspace Monitoring uses *alarms* to analyze the data that is collected by a check. The alarm criteria contains the logic to process this data and convert the alarm into one of the following states: OK, WARNING, and CRITICAL.

### Where to configure checks and alarms

You can configure monitoring checks and alarms in the following web portals:

- Common checks are displayed with cloud servers in the Cloud Control panel.  For more information, see [Create a monitoring check using the Cloud Control Panel](/support/how-to/creating-a-monitoring-check-using-the-cloud-control-panel/)
- The complete list of checks can be configured in Rackspace Intelligence. For more information, see [Understand and work with checks](/support/how-to/working-with-checks/)

The major groups of checks are remote checks, agent checks, and Hostinfo checks. The following sections describe each type of remote check. For more information about all the check types, see the [Check types reference](https://docs.rackspace.com/docs/rackspace-monitoring/v1/tech-ref-info/check-type-reference/) section of the Rackspace Monitoring API documentation.

### Poll-based Remote checks

Remote monitoring continually checks your systems and platforms for external availability by testing connectivity from regional zones deployed in our global data centers. These regional zones are called *monitoring zones*. You can choose to perform a remote check from any zone. Each zone that you select performs the configured remote check, and the collected data from each zone is used to evaluate the alarm criteria. You receive notifications only if the observations from the monitoring zones reach a quorum on the resulting alarm state. As a result, you can filter out cases where a single monitoring zone is having an isolated issue connecting to your server.

For complete list of remote checks, see the [Remote check types](https://docs.rackspace.com/docs/rackspace-monitoring/v1/tech-ref-info/check-type-reference/#remote-check-type-ref) section of the Rackspace Monitoring API documentation.

#### Recommended monitoring zones

You should choose the right monitoring zones for your server. The monitoring zones initiate remote checks from the data center in which they are deployed. Checks are not executed from your users' browsers, so this function is different from real user monitoring (RUM). However, the checks are fairly accurate in detecting cross-region connectivity.

From the metrics that Rackspace has collected in the system, we noticed that the three data centers in the US (IAD, DFW, and ORD) generally have better connections among themselves. This is also generally the case for the three non-US data centers (HKG, LON, and SYD). The following table shows our recommendations for how to determine which monitoring zones to choose for servers deployed in each data center.

| Data center where server is deployed | Recommended monitoring zones |
| --- | --- |
| DFW | ORD, IAD, DFW |
| IAD | IAD, ORD, DFW |
| ORD | ORD, IAD, DFW |
| HKG | HKG, SYD, ORD |
| LON | LON, IAD, HKG |
| SYD | SYD, HKG, DFW |

### Agent-based performance Checks

You can get deep insight into your resources—including servers and database instances (anything with a standard OS and outgoing network connectivity)—by using the Rackspace Monitoring agent. The agent is lightweight with a small memory footprint, using about 5 MB of memory and rarely consuming more than 2 percent of CPU time. In addition, automatic upgrades keep the agent up-to-date with the latest features, enhancements, bug fixes, and security patches. Lastly, Agent Health monitoring automatically monitors the connectivity of all your monitoring agents

For complete list of agent checks, see the [Agent check types](https://docs.rackspace.com/docs/rackspace-monitoring/v1/tech-ref-info/check-type-reference/#agent-check-types) section of the Rackspace Monitoring API documentation.

### On-demand Hostinfo checks

Through the API and CLI, you can conduct advanced host interrogation from wherever you are, without the need to log in to the server. You can push this data into an indexing service stack and get an instant view of everything you need to know about your infrastructure.

* **System configurations**: Confirm the operating system version, and check available network and disk devices, the mounted file system, and available CPU and memory.
* **System performance**: Retrieve current information for compute, memory, disk, and networking.
* **Processes and users**: Retrieve detailed information about currently running processes and logged-in users.

For a complete list of Hostinfo checks, see the [Hostinfo checks](https://docs.rackspace.com/docs/rackspace-monitoring/v1/tech-ref-info/check-type-reference/#hostinfo-checks) section of the Rackspace Monitoring API documentation.

### Alarms and notifications

Rackspace Monitoring uses alarms to evaluate the metrics of a check and decide if a notification plan should be executed. Alarms are the primary way to describe exactly what you want to be alerted on.

This section provides some high-level information ab out alarms and notifications. For details about alerting, including an explanation of the alert flow, the alarm language, the policies that you can create using alarms, and example best practices, see the [Alert Triggering and Alarms](https://docs.rackspace.com/docs/rackspace-monitoring/v1/tech-ref-info/alert-triggers-and-alarms/) documentation.


#### Consistency level

The system determines the alarm state through quorum-based voting from the monitoring zones. This is specified in the alarm criteria as **consistencyLevel**, an important attribute that is typically left with a value of **QUORUM** (the default) unless there is a specific reason to change it. The other two values for this setting are **ONE** and **ALL**. For more information about alerting policies and consistency levels, see [Alert policies](https://docs.rackspace.com/docs/rackspace-monitoring/v1/tech-ref-info/alert-triggers-and-alarms/#alert-policies).

#### Consecutive count

You can tune the sensitivity level of the alarms by setting the **consecutiveCount** attribute. For example, if you want to run the check every minute, but you want to be notified only if the monitoring zones can't ping the server three times in a row (which is three minutes if your check period is 60 seconds), you can add `":set consecutiveCount=3"` to the beginning of the alarm criteria to achieve that result.

#### Email notifications

Email notifications are designed to be actionable and readily understandable. In the notifications, older observations not included in the calculation are dimmed. As a result, you always see the number of observations that is consistent with the configuration of the checks, and can identify the ones that contributed to the notification.

The time window in which an observation is included is determined based on the consecutive count defined in the alarm and the period configured on the check. The formula is `period x 1.5 x consecutiveCount`. Because the default period is 60 seconds and the default consecutive count is 1, only the observations from the configured monitoring zones within the past 90 seconds would contribute to the decision of the resulting alarm state.

Remote checks are generally noisier than agent checks because of external factors that can’t be controlled by Rackspace Monitoring. With the combination of these settings, we believe you can tune your monitoring configuration to the level that suits you.

For other notification types, see the [Notification types](https://docs.rackspace.com/docs/rackspace-monitoring/v1/api-reference/notification-type-operations/) documentation.
