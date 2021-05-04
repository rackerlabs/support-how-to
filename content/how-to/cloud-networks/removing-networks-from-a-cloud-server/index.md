---
permalink: removing-networks-from-a-cloud-server
audit_date: '2021-04-21'
title: Removing Networks from a Cloud Server
type: article
created_date: '2012-09-25'
created_by: David Hendler
last_modified_date: '2021-04-21'
last_modified_by: Carlos Arriaga
product: Cloud Networks
product_url: cloud-networks
---

Rackspace Cloud Networks lets you attach an isolated network to a Rackspace
Cloud Server. You can choose to attach or remove the
following networks to or from a Cloud Server:

-  **PublicNet**: Provides access to the Internet and Rackspace services such as Cloud
Monitoring, Managed Cloud Support, RackConnect, Cloud Backup, and
certain operating system updates.

-  **ServiceNet**: Provides access to Rackspace services such as Cloud Files, Cloud
Databases, Cloud Backup, and certain packages and patches through an
internal only, multi-tenant network connection within each Rackspace
data center.

-  **Isolated**: Provides a virtual Layer 2 network that keeps your server separate from
PublicNet, ServiceNet, or both.

### Limitations

You cannot remove PublicNet or ServiceNet from Cloud Servers with an
account on the **Managed Operations** service level. 

If you remove your Cloud Server from PublicNet, it no longer has access
to the Internet and some Rackspace products and services. If you remove
ServiceNet from your Cloud Server, it cannot access certain Rackspace
products and services. The following image depicts the services that are
not available when you remove these networks from a Cloud Server:

{{<image alt="Removing Networks from a Cloud Server" src="cloud-networks-infographic-revised4.png" title="Removing Networks from a Cloud Server">}}

### More information on Cloud Networks

-  [Create an isolated network and attach it to a server](/support/how-to/create-an-isolated-cloud-network-and-attach-it-to-a-server)
-  [Attach a Cloud Network to an Existing Cloud Server](/support/how-to/attach-a-cloud-network-to-an-existing-cloud-server)
-  [Using CIDR notation in Cloud Networks](/support/how-to/using-cidr-notation-in-cloud-networks)
-  [Cloud Networks Developer Guide]( https://docs.rackspace.com/docs/cloud-networks/v2/)

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 
