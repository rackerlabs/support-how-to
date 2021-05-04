---
permalink: rackspace-auto-scale-overview
audit_date: '2020-09-28'
title: Rackspace Auto Scale overview
type: article
created_date: '2013-11-15'
created_by: Maria Abrahms
last_modified_date: '2020-09-28'
last_modified_by: Rose Morales
product: Rackspace Autoscale
product_url: rackspace-auto-scale
---

Rackspace Auto Scale automatically scales resources allocated to your
application up or down based on user-defined needs. You can base scaling events
on scaling rules that you define through your monitoring system or on a simple
schedule that you configure.

### How Is Auto Scale used?

Scaling is triggered either by webhooks that are placed in monitoring services
or by a schedule. An Auto Scale group, or *scaling group*, consists of the
following items:

- Scaling group configuration: Includes the group name, cooldown time limit, and minimum
    and maximum number of needed servers.
- Launch configuration: Determines the server creation actions to take after an Auto Scale trigger event
    by specifying which image to start and which load balancer to attach to the server.
- Scaling policy: Defines the action of the policy (for example, scale up by 5
    servers).
- Webhook (capability-based URL): Triggers a scaling policy (for example, "When
    this URL is hit, execute this scaling policy.").

### Use cases

- **eCommerce sale** Customer W has a one-day sale on their site on Monday, that
    begins at 12:01 a.m. Monday and ending at 12:00 a.m. Tuesday. The
    customer predicts substantially increased traffic due to this sale. The customer
    can create a schedule-based policy to add ten servers to its pool starting at
    11:45 p.m. Sunday, giving the system enough time to create, configure, and add the
    servers to the load balancer. The customer can create a second
    schedule to decrease the number of servers by ten starting at 12:00 a.m.
    Tuesday morning, after the sale has ended.
- **Marketing campaign** Similar to the preceding use case, Customer X is
    running a week-long marketing campaign and expects 20 percent more traffic
    to its website. The campaign begins at 7:00 a.m. EST on Monday and ends at
    7:00 p.m. EST on Friday. The customer can create a schedule-based policy to
    increase the number of servers in their pool by 20 percent starting at 6:30
    a.m. EST on Monday, giving the system enough time to create, configure, and add
    the servers to the load balancer. The customer can create a second
    schedule-based policy to decrease the number of servers by 20 percent at
    7:00 p.m. EST on Friday.
- **Known traffic fluctuations** Customer Y notices that traffic to their
    website decreases by 15 percent every weekend. That is, traffic decreases
    every Friday night and returns to normal on Monday morning. The customer can
    create a recurring schedule-based policy to decrease the number of servers
    by 15 percent, starting at 6:00 p.m. every Friday. The customer can also
    create a second schedule-based policy to increase the number of servers by
    15 percent every Monday at 6:00 a.m.
- **Integration with Monitoring** Customer Z has unpredictable traffic when
    publishing blog posts. The customer already monitors the environment with
    Nagios&reg;. The customer creates a scaling policy to add ten percent more servers
    with a webhook. The customer then creates a Nagios alert to trigger the
    webhook when traffic exceeds 6000 requests per minute. The customer creates
    a second policy to return the servers to the baseline when the spike
    decreases.

### Additional resources

- To learn about using Auto Scale in the Cloud Control Panel, see the [Rackspace
    Auto Scale Getting Started page](/support/how-to/rackspace-auto-scale).
- To learn more about the Rackspace Auto Scale API, see the [Rackspace Auto
    Scale API Getting Started
    Guide](https://docs.rackspace.com/docs/autoscale/v1/developer-guide/#document-getting-started).
