---
permalink: tiered-configuration-using-cloud-load-balancers
audit_date: '2016-05-24'
title: Tiered configuration using Cloud load balancers
type: article
created_date: '2015-05-24'
created_by: Nate Archer
last_modified_date: '2016-05-24'
last_modified_by: Nate Archer
product: Cloud Load Balancers
product_url: cloud-load-balancers
---

There are many ways to configure your [deployment environment](how-to/rackspace-open-cloud-reference-architecture/) at Rackspace. However, many configurations use a single cloud server. In this case, if your server fails, your application also fails.

The easiest method to optimize your infrastructure is to split your single server into a tiered configuration. This can reduce potential downtime due to server failure while balancing traffic to your application.

### Tiered configuration diagram

Tiered configurations augment a single server with a cloud load balancer and at least one web server. The following diagram provides an example of a tiered configuration:

<!---Insert diagram here--->

The size *Web 1* and *Web 2* are half the size of the single server. For example, if your single server is 4GB, the size of your web servers will be 2GB.

### Additional Information 

This configuration can be set up with [Cloud Orchestration](how-to/cloud-orchestration/).

For an example of how to set up a tiered configuration, watch the tutorial [Rackspace Cloud Servers - Building a LAMP using Orchestration](https://www.youtube.com/watch?v=9tk7NrR7tYo&feature=youtu.be).
