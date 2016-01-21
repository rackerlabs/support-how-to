---
node_id: 3150
title: Removing Networks from a Cloud Server
type: article
created_date: '2012-10-30'
created_by: Susan Million
last_modified_date: '2016-01-10'
last_modified_by: Renee Rendon
product: Cloud Servers
product_url: cloud-servers
---

Cloud Networks lets you attach an isolated network to new next
generation Cloud Servers. You can choose to attach or remove the
following networks to or from a Cloud Server:

**PublicNet**

Provides access to the Internet, Rackspace services such as Cloud
Monitoring, Managed Cloud Support, RackConnect, Cloud Backup, and
certain operating system updates.

**ServiceNet**

Provides access to Rackspace services such as Cloud Files, Cloud
Databases, Cloud Backup, and certain packages and patches through an
internal only, multi-tenant network connection within each Rackspace
data center.

**Isolated**

Provides a virtual Layer 2 network that keeps your server separate from
PublicNet, ServiceNet, or both.

<span>Limitations</span>
------------------------

If you remove your Cloud Server from PublicNet, it no longer has access
to the Internet and some Rackspace products and services. If you remove
ServiceNet from your Cloud Server, it cannot access certain Rackspace
products and services. The graphic below depicts the services that are
not available when these networks are removed from a Cloud Server:

<img src="http://www.rackspace.com/knowledge_center/sites/default/files/field/image/cloud-networks-infographic-revised4.png" alt="Removing Networks from a Cloud Server" width="438" height="722" />

### More Information on Cloud Networks

[Attach an Isolated Network to a New Cloud
Server](/how-to/create-an-isolated-cloud-network-and-attach-it-to-a-server "Attach an Isolated Network to a New Cloud Server")

[Attach a Cloud Network to an Existing Cloud
Server](/how-to/attach-a-cloud-network-to-an-existing-cloud-server "Attach an Isolated Network to an Existing Cloud Server")

[Using CIDR notation in Cloud
Networks](/how-to/using-cidr-notation-in-cloud-networks "CIDR Notation")

[Cloud Networks Developer Guide](https://developer.rackspace.com/docs/)



