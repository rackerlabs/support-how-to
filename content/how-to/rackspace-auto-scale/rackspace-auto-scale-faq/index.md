---
permalink: rackspace-auto-scale-faq
audit_date: '2020-09-23'
title: Rackspace Auto Scale FAQ
type: article
created_date: '2015-12-09'
created_by: Stephanie Fillmon
last_modified_date: '2020-09-23'
last_modified_by: Rose Morales
product: Rackspace Autoscale
product_url: rackspace-auto-scale
---

### Getting started

{{<accordion title="Is there an easy path to migrate from other autoscaling products such as Rightscale?" col="in" href="accordion1">}}
No. You cannot migrate your configurations from other providers.
{{</accordion>}}

{{<accordion title="Is authentication required for Auto Scale?" col="in" href="accordion2">}}
Authentication is required to create a scaling group; you must send
an **X-Auth-Token** header with most API requests. Authentication is not
required to execute policies via anonymous webhooks.
{{</accordion>}}

{{<accordion title="What do I need to do to get started using Auto Scale?" col="in" href="accordion3">}}
Auto Scale works by horizontally scaling a particular tier of an
application, such as the web tier. You need to know which servers
you want to scale. To get started, you need to configure a server image
with all needed applications and settings. You should also configure the image
to be ready when the server starts. You can ensure your
servers deploy fully ready for service by using various programs such as
Chef, Puppet, and Salt.
{{</accordion>}}

{{<accordion title="How do I know what actions are taken by Auto Scale on my behalf?" col="in" href="accordion4">}}
Some of the actions Auto Scale takes on your behalf are deferred, such as
when you set a schedule to create additional servers.
{{</accordion>}}

{{<accordion title="How much does the Rackspace Auto Scale service cost?" col="in" href="accordion5">}}
Auto Scale is available at no cost to Rackspace Cloud customers,
although you do pay for the servers created by a scale-up until they are
removed.
{{</accordion>}}

{{<accordion title="Can I add an existing server to an Auto Scale group?" col="in" href="accordion6">}}
No. Even if you add the **autoscale-group-id** metadata to the server,
the Auto Scale back end service does not know the server belongs in the
group. Auto Scale manages only servers created by Auto Scale.
{{</accordion>}}

{{<accordion title="What happens if I delete an Auto Scale server through the API or the Cloud Control Panel?" col="in" href="accordion7">}}
Auto Scale currently does not track what happens to servers outside of
the Auto Scale system. If you delete a server outside of the system,
Auto Scale continues to treat the server as if it still exists. If
you try to delete the server through Auto Scale (for example, by
scaling down), no problems should occur.

Rackspace added a new API endpoint to Auto Scale, **DELETE server**, that
allows you to remove a specific server from a scaling group. You can use
this endpoint to bring Auto Scale back in sync with the correct number
of servers in a group when a server has been deleted through the API or
the Cloud Control Panel. For more information, see the Rackspace Auto
Scale Developer's Guide [Delete server from scaling
group](https://docs.rackspace.com/docs/autoscale/v1/developer-guide/#delete-server-from-scaling-group)
section.
{{</accordion>}}

{{<accordion title="Can I suspend servers and restore them quickly to the same IP address?" col="in" href="accordion8">}}
You can remove a server from an Auto Scale group and keep it on your Cloud
account for observation. Auto Scale will automatically replace it with a new
server.

Newly created servers have different IP addresses unless they are created in a
scaling group with a load balancer.
{{</accordion>}}

{{<accordion title="Why might I see a server get created and then immediately destroyed?" col="in" href="accordion9">}}
A server may be created for a scale-up operation and then be immediately
deleted if there is a problem with the load balancer associated with the
scaling group. The load balancer problems that can cause this are:

- The load balancer is mis-configured.
- The load balancer is at its limit.
- The load balancer has been deleted.

If any of these problems are present, Auto Scale immediately deletes the
newly-created server so that the customer doesn't get billed for servers not
in the load balancers.
{{</accordion>}}

{{<accordion title="I got a 403 \"Cannot execute policy - no change in servers\" error when I tried to execute the policy. What does this mean?" col="in" href="accordion10">}}
One possibility is that you tried to scale up or down beyond the
configured minimum or maximum value. As a result, no servers could be
created or destroyed. The error message could also mean that you are
trying to set the needed capacity equal to what Auto Scale thinks is
already there.
{{</accordion>}}

{{<accordion title="Does Auto Scale drain connections on a node behind a load balancer as a server (LBaaS) before removing it from a pool?" col="in" href="accordion11">}}
No. The server is removed from the load balancer before the delete
command is sent. At present, connections are not drained.
{{</accordion>}}

{{<accordion title="What is the maximum amount of time you can set for a cooldown timer?" col="in" href="accordion12">}}
The maximum is 86400 seconds, equal to 24 hours.
{{</accordion>}}

{{<accordion title="What is the minimum amount of time you can set for a cooldown time?" col="in" href="accordion13">}}
Zero seconds. We recommend having the group cooldown being around 5
minutes (300 seconds) by default.
{{</accordion>}}

{{<accordion title="How does Auto Scale moderate conflicting events?" col="in" href="accordion14">}}
Cooldown timers are built into the scaling group and the individual
scaling policies so that you can prevent too many servers from being
created or deleted too quickly.
{{</accordion>}}

{{<accordion title="Multiple scaling policies can be associated with the same scaling group. How is the \"correct\" policy selected when servers are generated?" col="in" href="accordion15">}}
The system triggers scheduled policies at the scheduled time. It triggers other
policies by a webhook. A webhook is a construct that defines the name or "handle" for each
policy, which is a unique URL endpoint you call to invoke the policy execution.
{{</accordion>}}

{{<accordion title="What are the different configuration parameters for scaling groups?" col="in" href="accordion16">}}
For information on the parameters used with the Auto Scale API, see the
[Scaling group
configurations](https://docs.rackspace.com/docs/autoscale/v1/developer-guide/#document-api-operations/autoscale-groups)
and [Launch
configuration](https://docs.rackspace.com/docs/autoscale/v1/developer-guide/#document-api-operations/configurations)
sections in the Auto Scale API Developer's Guide.

For information on the parameters used with the Auto Scale Control
Panel, see the [Create a scaling
group](/support/how-to/rackspace-auto-scale-control-panel-user-guide-create-a-scaling-group)
section in the Rackspace Auto Scale Control Panel User Guide.
{{</accordion>}}

{{<accordion title="Are monitoring rules for the entire scaling group or can I monitor specific servers in the scaling group?" col="in" href="accordion17">}}
No. There are no specific rules within Auto Scale for monitoring
specific servers. However, you can do this through Monitoring
configurations, which are documented in the [Cloud Monitoring API
Developer's Guide](https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/).
{{</accordion>}}

{{<accordion title="Can I have multiple load balancers in a scaling group?" col="in" href="accordion18">}}
Yes. However, if you need to scale beyond 25 servers with a Cloud Load
Balancer, we recommend creating multiple Auto Scale groups and creating
a tree of load balancers.
{{</accordion>}}

{{<accordion title="Is there a limit to the number of servers I can have in a scaling group?" col="in" href="accordion19">}}
There is no maximum number of servers in a scaling group. However, a
scaling group used with a Cloud Load Balancer instance is limited to 50
servers per load balancer group. You might have overall Cloud Servers
limits on the number of servers you can create without having
your quota bumped up. If you reach Cloud Load Balancer limits, Auto
Scale will fail to add additional servers. If you are running up against
limits with Cloud Load Balancer instances, you should consider creating
multiple scaling groups and a tree of load balancers to service requests
or using RackConnect to use a higher capacity hardware load balancer
solution. For more information on RackConnect, see [How do I get started
with
RackConnect?](/support/how-to/introducing-rackconnect-v30/)
{{</accordion>}}

{{<accordion title="Do the servers that I'm going to automatically scale up have to be associated with a group? If so, why?" col="in" href="accordion20">}}
Yes. A scaling policy is associated with a specific group. The system manages
all of the scaled-up servers for health and monitoring in aggregate, so
they need to be part of a group.
{{</accordion>}}

{{<accordion title="Can I create a scaling group with no servers in it?" col="in" href="accordion21">}}
Yes. You can add servers later.
{{</accordion>}}

{{<accordion title="What is a scaling group?" col="in" href="accordion22">}}
A scaling group is a construct that contains the configuration for
creating individual servers, has zero or more servers associated with
it, and has one or more associated scaling policies that describe what
actions to take when the policy is activated.
{{</accordion>}}

{{<accordion title="Can I scale up servers in a particular order? For example, can I create a database server before creating a web server?" col="in" href="accordion23">}}
No. Auto Scale does not scale up servers or load balancers in a
particular order.
{{</accordion>}}

{{<accordion title="Is it possible for Auto Scale to create servers that are not attached to a load balancer?" col="in" href="accordion24">}}
Yes. You don't need a load balancer as part of the launch
configuration. However, you do need to configure how your servers get
requests.
{{</accordion>}}

{{<accordion title="Can Auto Scale add a server in ORD to a load balancer in the DFW data center, or use an image in DFW?" col="in" href="accordion25">}}
No, all resources must be in the same data center. There is a different
Auto Scale endpoint for each data center, and each endpoint orchestrates
only within that data center. The Auto Scale Control Panel refers to data
centers as **Regions**.
{{</accordion>}}

{{<accordion title="Can I use Auto Scale across data centers?" col="in" href="accordion26">}}
No, you must create separate scaling groups for different data centers.
{{</accordion>}}

{{<accordion title="How does Auto Scale integrate with image services or other automation services, such as Chef or Puppet?" col="in" href="accordion27">}}
Auto Scale is service agnostic and API based, so it works well with
these services but does not explicitly integrate with them.
{{</accordion>}}
