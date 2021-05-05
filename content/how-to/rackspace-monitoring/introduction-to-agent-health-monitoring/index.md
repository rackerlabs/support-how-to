---
permalink: introduction-to-agent-health-monitoring
audit_date: '2020-11-27'
title: Introduction to Agent Health Monitoring
type: article
created_date: '2015-08-30'
created_by: Constanze Kratel
last_modified_date: '2020-11-27'
last_modified_by: Rose Morales
product: Rackspace Monitoring
product_url: rackspace-monitoring
---

Agent Health Monitoring is a feature within Rackspace Monitoring that helps you
check your monitgoring agents' performance and ensure that they are working
as expected.

You can use Agent Health Monitoring to monitor the states of all your Rackspace
monitoring agents on your servers by using checks, alarms, and notification
plans, all of which are familiar concepts of monitoring. As a result, you can
quickly alert the appropriate person or team when any agent has an issue.

For more information, see the
[Working with alarms](/support/how-to/working-with-alarms),
[Working with checks](/support/how-to/working-with-checks),
and [Working with Rackspace Intelligence notification plans](/support/how-to/working-with-rackspace-intelligence-notification-plans)
articles.

### How does agent health monitoring work?

When an agent first connects to the Rackspace monitoring server, the server
creates an *agent.health* check and alarm. The check and alarm are associated with
the server to which the agent is attached. Each time the agent sends a heartbeat
to the monitoring server, the monitoring server produces a metric that includes
the heartbeat event's timestamp.

Periodically, the monitoring server triggers event processing on the
agent.health alarm. The criteria that you set for the alarm evaluate the timestamp
that the server created. If the time stamp is older than five
minutes, the alarm changes to a Critical state and triggers the alert.

The agent.health check and alarm work just like any other check and alarm. You
can configure the alarm to send alerts to the appropriate teams or individuals
by modifying the default notification plan. You can also use the suppression
feature on the agent.health check and alarm, or disable the alarm if you don't
want to receive any alerts.

When you delete the monitoring entity, such as a Cloud Server, all the checks on
that entity are deleted. The deletion of entities is handled automatically when
you integrate Rackspace monitoring with other products, such as Cloud Servers.

### Respond to an alert

Alerts occur when the monitoring server stops receiving the
heartbeat metrics periodically submitted by the agent. To
investigate the cause of an alert, perform the following troubleshooting
procedures:

1. Connect to the server to verify that the server is up and running.
2. After you successfully connect to the server, verify whether
    the server can connect to one of the monitoring agent endpoints. The
    SRV records of the endpoints are as follows:
    - \_monitoringagent.\_tcp.ord1.prod.monitoring.api.rackspacecloud.com
    - \_monitoringagent.\_tcp.dfw1.prod.monitoring.api.rackspacecloud.com
    - \_monitoringagent.\_tcp.lon3.prod.monitoring.api.rackspacecloud.com

3. After you confirm that your server and the
    connection work, verify whether the agent has stopped running
    or is experiencing issues. For information about debugging the
    agent, see
    [Troubleshooting the Rackspace Monitoring Agent](/support/how-to/troubleshooting-the-rackspace-monitoring-agent).

For a summary of the concepts mentioned in this article, read the
[Getting Started with Rackspace Intelligence](/support/how-to/rackspace-intelligence) article.

### Start using agent health monitoring

The Agent Health Monitoring feature is initially offered at Limited
Availability (LA). If you are interested in using this feature, submit a support
ticket to express your interest for this feature. The Rackspace Monitoring
team will contact you with detailed information.

The agent.health check and alarm are created automatically on all
the connected agents when the feature releases. The notification plan
that is configured for this alarm varies based on your service level
and the monitored product.
