---
permalink: use-rackspace-network-effectively
audit_date: '2020-10-02'
title: Use Rackspace network effectively
type: article
created_date: '2012-07-24'
created_by: Rackspace Support
last_modified_date: '2020-10-02'
last_modified_by: Rose Morales
product: Cloud Load Balancers
product_url: cloud-load-balancers
---

The Rackspace Network is the internal network in each Rackspace region (Data
Center).

### Use the Rackspace Network internal IP address

When you create a new Cloud Server, Cloud Load Balancer, or Cloud Database, the
newly created infrastructure is automatically assigned a Rackspace Network
Internet Protocol (IP) address. This IP address is not visible on the public
internet. However, if you have other assets (Cloud Servers, Cloud Load
Balancers, and Cloud Databases) located in the same region, you can use the
internal IP address to connect the infrastructure. For example, you can
create a Cloud Load Balancer for two or more Cloud Servers in the same region by
using the Rackspace Network internal IP addresses.

**Note**: Any traffic or communication between cloud infrastructure in the same
region is free of charge. If traffic goes from one region to another
(Dallas-Fort Worth to Chicago, for example), it accrues normal bandwidth charges.

Another benefit of using the internal Rackspace Network is that it can offer the
first level of network security. For example, if you're not expecting external
traffic to your Cloud Servers, you can create a firewall around them and reduce
their exposure to outside threats. Note that while Rackspace creates all new servers
with basic security settings, you should follow the instructions
in [Configuring Basic Security](/support/how-to/configuring-basic-security) to
protect your data further.

### Finding a Rackspace IP address

You can find all of the IP addresses for a Cloud Server, Cloud Load Balancer, or
 Cloud Database in the [Cloud Control Panel](https://login.rackspace.com) by
 selecting the device and viewing its details.

#### Related Information

- [Learn More About Cloud
  Servers](/support/how-to/learn-more-about-cloud-servers)
