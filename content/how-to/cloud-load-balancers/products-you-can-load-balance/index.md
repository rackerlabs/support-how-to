---
permalink: products-you-can-load-balance
audit_date: '2020-10-02'
title: Products you can load balance
type: article
created_date: '2012-07-24'
created_by: Rackspace Support
last_modified_date: '2020-10-02'
last_modified_by: Rose Morales
product: Cloud Load Balancers
product_url: cloud-load-balancers
---

You can apply load balancing to anything with an Internet Protocol (IP) address
that's accessible on the Internet. Thus, you can load balance your
Rackspace Cloud Servers, as well as any external server or IP address. For
example, you can load balance an external mail server, database server, website,
or your personal webserver at home. In load balancing terminology, the
resources that you can load balance are called *nodes*.

### Adding nodes

When you create a load balancer by using the [Cloud Control
Panel](https://login.rackspace.com), you see the **Add Nodes** is part of the
configuration process, as shown in the following image:

{{<image alt="add nodes to load balancer in control panel" src="load-balancer-add-nodes.png" title="add nodes to load balancer in control panel">}}

Here, you specify the product you want to load balance. You can add an
existing Rackspace Cloud Server or an external IP address.

Note that the distance between the node being load balanced and the region of
the load balancer can impact the performance of the load balancer. We recommend
creating the load balancer in the region that is closest to your external nodes.

For more information, see [Load Balancing Internal IPs in the same
region](/support/how-to/load-balancing-internal-ips-in-the-same-region).
