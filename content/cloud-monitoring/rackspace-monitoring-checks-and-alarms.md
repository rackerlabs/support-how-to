---
node_id: 3647
title: Rackspace Monitoring Checks and Alarms
type: article
created_date: '2013-08-16'
created_by: Jim Culbreath
last_modified_date: '2016-01-22'
last_modified_by: Constanze Kratel
product: Rackspace Monitoring
product_url: cloud-monitoring
---
A Check specifies the parts or pieces of the server that you want to collect metrics on and how you want to do it. In other words, a check returns a group of related metrics. Metrics groups help you figure out how to collect any data you want. For example, you can use `agent.cpu` check to collect the CPU utilization related metrics from your server.

Since a check does not trigger any alerts by itself, collecting more data is almost always a good option. Our recommendation is to set up as many checks as relevant to your server even before you know what you want to be alerted on.

Rackspace Monitoring uses Alarms to analyze the data that is collected by a check. The alarm criteria contain the logic to process this data and convert the alarm into one of the three states: OK, WARNING, CRITICAL.

There are two web portals where you can configure monitoring checks and alarms:

     - The common checks are surfaced along with the Cloud Servers in MyCloud Control panel.  You can find the documentation here:  [https://support.rackspace.com/how-to/creating-a-monitoring-check-using-the-cloud-control-panel/](https://support.rackspace.com/how-to/creating-a-monitoring-check-using-the-cloud-control-panel/)
     - The complete list of checks can be configured at Rackspace Intelligence. You can find the documentation here:  [https://support.rackspace.com/how-to/working-with-checks/](https://support.rackspace.com/how-to/working-with-checks/)

There are three major groups of checks: Remote Check, Agent Check and Host Info check. The following section describes the useful details of the remote checks. For the official definitions, see the Rackspace Monitoring Developer guide [Available Check Types and Fields.](http://docs.rackspace.com/cm/api/v1.0/cm-devguide/content/appendix-check-types.html)

#### Remote checks

[](https://b9002618969a676fa5e9-329656694c46da9401f89a96a819e8df.ssl.cf5.rackcdn.com/cloud-monitoring/rackspace-monitoring-checks-and-alarms-remote-checks.png)

Remote checks are performed from multiple zones. There are six monitoring zones, deployed in the six data centers around the globe, to choose from for each remote check. Each monitoring zone performs the configured remote check and the collected data from each monitoring zone is used to evaluate the alarm criteria. You receive notifications if and only if the observations from the monitoring zones reach quorum on the resulting alarm state. In this way, you can filter out cases where a single monitoring zone is having an isolated issue connecting to your server. As needed, default zones can be changed.

The system determines the alarm state through quorum-based voting from the monitoring zones. This is specified in the alarm criteria as **consistencyLevel** , an important setting that is typically left as **QUORUM** (the default) unless there is a specific reason to change it. The other two values for this setting are ONE and ALL. For more information about alerting policies and consistency levels, see [Alert Policies (Consistency Level)](http://docs.rackspace.com/cm/api/v1.0/cm-devguide/content/alerts-language.html#concepts-alarms-alert-policies).

In addition to the consistency level, you can also tune the sensitivity level of the alarms by setting the **consecutiveCount**. For example, if you want to run the check every minute, but want to be notified only if the monitoring zones cannot ping the server three times in a row (which is three minutes if your check period is 60 seconds), you can add ":set consecutiveCount=3" to the beginning of the alarm criteria to achieve the desired result.

You should also think about choosing the right monitoring zones for your server. The monitoring zones initiate remote checks from the data center they are deployed in. They are not executed from your users' browser, so it is still different from Real User Monitoring (RUM). On the other hand, they are fairly accurate in detecting cross-region connectivity. Rackspace Monitoring allows you to think separately about what you want to measure and what you want to be alerted on. Again, it is up to you to tweak and determine the configuration that works best for you.

Email notifications are designed to be actionable (something that you can do something about) and readily understandable. In the notification, older observations not included in the calculation are greyed out. In this way, you will always see the number of observations that is consistent with the configuration of the checks, and be able to identify the ones contributed to the notification.

[](https://b9002618969a676fa5e9-329656694c46da9401f89a96a819e8df.ssl.cf5.rackcdn.com/cloud-monitoring/rackspace-monitoring-list-of-observations.png)

With that said, from the metrics that we collect in the system, we did notice that three data centers in the US (IAD, DFW and ORD) generally have better connections among themselves, and so is the case for the other three data centers (HKG, LON, and SYD). Recently, we talked to the team that manages the Cloud Monitoring configuration and responds to the alerts, a service to our Managed Operations customers, and it provided the following table they use to determine which monitoring zones to choose for servers deployed in each data center.

[](https://b9002618969a676fa5e9-329656694c46da9401f89a96a819e8df.ssl.cf5.rackcdn.com/cloud-monitoring/rackspace-monitoring-data-center-list.png)

Remote checks are generally noisier than agent checks because of external factors that are out of Cloud Monitoring's control. With the combination of these settings, we believe you can tune your monitoring configuration to the level that suits you.

**How is the timeout being determined?**

The time window in which an observation will be included is determined based on the consecutive count defined in the alarm and the period configured on the check. In case you are curious, the formula is (period \* 1.5 \* `consecutiveCount`). Since the default period is 60 seconds and the default `conecutiveCount` is 1, only the observations from the configured monitoring zones within the past 90 seconds would contribute to the decision of the resulting alarm state.

