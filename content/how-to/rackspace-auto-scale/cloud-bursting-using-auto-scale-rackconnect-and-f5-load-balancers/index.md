---
permalink: cloud-bursting-using-auto-scale-rackconnect-and-f5-load-balancers/
audit_date: '2020-09-28'
title: Cloud Bursting using Auto Scale, RackConnect, and F5 Load Balancers
type: article
created_date: '2014-04-30'
created_by: Maria Abrahms
last_modified_date: '2020-09-28'
last_modified_by: Rose Morales
product: Rackspace Autoscale
product_url: rackspace-auto-scale
---

Bursting, or Cloud Bursting, is a technique used to dynamically scale more
rapidly than what a dedicated environment might be able to based on a need for
resources. For example, if you have an eCommerce application running on a
dedicated infrastructure, if it reaches peak capacity due to a high traffic
event, an option would be to then *burst* and provision servers in the
public cloud infrastructure so as to handle the additional load and ensure all
orders can be processed on time. This is made possible thanks to the elastic and
on-demand nature of public cloud computing. Also, in Cloud you are only paying
for the provisioned servers while you need them during the burst.

You can use Auto Scale and RackConnect for “cloud bursting” by adding Rackspace
Cloud Servers dynamically in response to demand and removing them after they are
no longer needed. This article provides information about configuring Auto Scale
to use RackConnect to perform cloud bursting with an F5® BIG-IP® Local Traffic
Manager (LTM) load balancer. Using these technologies together, you can
automatically scale your dedicated infrastructure to the Rackspace cloud by
using scaling policies. In this way, RackConnect and Auto Scale enable you to
realize the power of the Hybrid Cloud.

The following diagram shows the path that inbound (and return) load balancer
pool traffic follows to your cloud servers when you use Auto Scale with a F5
BIG-IP load balancer and RackConnect.

The following diagram shows the path that inbound (and return) load balancer
pool traffic follows to your cloud servers when you use Auto Scale with an F5
BIG-IP load balancer and RackConnect.

{{<image src="F5_AS-5-13-14B1D.jpg" alt="" title="">}}
[View image at full
resolution](https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/F5_AS-5-13-14%5B1%5D.jpg)

### Configure RackConnect cloud bursting on Auto Scale

You can configure cloud bursting by setting a metadata key for a RackConnect load balancer
pool in Auto Scale. Set up this key on the **metadata** option of the **server**
argument in the **launchConfiguration** parameter for scaling groups. When Auto Scale
uses a scaling group with properly set metadata, RackConnect
modifies new servers to disable their public interface and enable receiving
private cloud traffic from the RackConnect load balancer pool. When Auto Scale removes
a server, the system automatically removes cloud servers from the load balancer pool.

The metadata key must be **RackConnectLBPool**, and the value for that
key must be the exact name of the pool, as defined on the
load balancer. Use a semicolon-separated list for more than one pool. The following
example shows a RackConnect metadata key/value pair for Auto Scale:

    "metadata": {
    "RackConnectLBPool": "MyRCPoolName"
     }

For more information, see the [Auto Scale API Developer Guide: Set Launch
Configuration.](https://docs.rackspace.com/docs/autoscale/v1/developer-guide/#document-api-operations/configurations)

### Important notes

When setting metadata for servers created by Auto Scale, consider the following
requirements:

- You must configure a health check for members of the load balancer pools
  and confirm that the website or application is ready to accept end-user traffic.
  Auto Scale might add the cloud server immediately after creation but before
  your application is ready to accept traffic, depending on the timing of the automation.
  Consider using a URL content check instead of a TCP port check to confirm that a
  web application is ready to accept end-user requests.
- The service port must match each member of the load balancer pool, or the
  automation cannot determine which service port to use. For this same reason,
  always have at least one member in the pool. If the system cannot determine a common
  service port, it routes a notification to your Support team for manual intervention.
- To learn more about cloud bursting, see [Using Dedicated Load Balancers with
  RackConnect](/support/how-to/using-dedicated-load-balancers-with-rackconnect-v20).

To get the name of one or more load balancer pools, contact your Support team.
