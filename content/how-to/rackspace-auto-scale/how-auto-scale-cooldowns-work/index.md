---
permalink: how-auto-scale-cooldowns-work
audit_date: '2020-09-28'
title: Auto Scale Cooldowns
type: article
created_date: '2013-12-21'
created_by: Maria Abrahms
last_modified_date: '2020-09-28'
last_modified_by: Rose Morales
product: Rackspace Autoscale
product_url: rackspace-auto-scale
---

Cooldowns enforce a period of time between possible actions. Auto Scale has the
following types of cooldowns:

- Group Cooldowns
- Policy Cooldowns

    **Note**: Cooldowns are mainly relevant to event-based scaling policies
    because those policies are triggered by events that could occur before a
    required minimum cooldown period ends. However, a schedule-based policy does
    not override a cooldown and does not run during a cooldown period.

### Use a group cooldown

When you set a group **Minimum Cooldown**, you restrict the group's ability
to change in response to a policy. If you have configured event-based
policies, one or more events to scale up or scale down could happen
before enough time has elapsed for the servers to deploy fully (for a
scale-up) or for all transactions to finish (for a scale-down). A
group cooldown ensures that at least a minimum amount of time passes before a
scale-up or scale-down triggered by an event-based policy can occur.

For example, suppose you have three separate monitoring alerts for a server, and
each alert is configured with a webhook to your Auto Scale group to trigger a
scale-up event if the alarm state goes critical. If all three monitoring alerts
go critical simultaneously, there could be three separate but near-simultaneous
requests to scale up. A minimum cooldown of 30 minutes would allow only
one of the scale-up events to occur within 30 minutes. The other two alerts would
not be acted upon and would not iterate.

This feature is mostly used to ensure that servers added in a scale-up
have enough time to deploy fully. The required minimum cooldown is not about how
many servers you can add at once&mdash;Auto Scale adds all servers at the same time. It is
about the complexity of the servers that you are adding. If the servers you
add are very complex, they need a longer minimum cooldown period to
deploy fully. You should set the group minimum cooldown to the length of time
it takes for one server to deploy fully.

### Use a policy cooldown

When you set a policy **Cooldown**, you restrict the policy's executability
by requiring a period of time to pass before the policy can be reexecuted&mdash;even
if an event triggers it. A policy cooldown controls how
often Auto Scale can execute a a single, specific policy. For example, a scale-up policy
cooldown restricts how often the scale-up is executed despite being triggered by
an event. This restriction allows one scale-up to deploy fully before another scale-up can
occur. Conversely, a scale-down policy cooldown allows for the graceful
removal of servers by restricting the removal of too many servers at once, even
if multiple scale-downs are rapidly triggered. Policy cooldowns allow you to
scale up fast and scale down slowly.

### Cooldowns graph

The following graphs illustrate how cooldowns affect policy execution:

{{<image src="Slide6.png" alt="" title="">}}

{{<image src="Slide7.png" alt="" title="">}}
