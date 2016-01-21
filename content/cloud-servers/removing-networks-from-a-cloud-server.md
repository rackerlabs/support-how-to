---
node_id: 2250
title: Removing Networks from a Cloud Server
type: article
created_date: '2012-09-25'
created_by: David Hendler
last_modified_date: '2016-01-10'
last_modified_by: Renee Rendon
product: Cloud Servers
product_url: cloud-servers
---

Cloud Networks lets you attach an isolated network to new next
generation Cloud Servers (or to existing servers via the [Cloud Servers
API](http://docs.rackspace.com/servers/api/v2/cs-devguide/content/section_virt_ext.html)). You
can choose to attach or remove the following networks to or from a Cloud
Server:

**PublicNet**

Provides access to the Internet, Rackspace services such as Cloud
Monitoring, Managed Cloud Service Level support, RackConnect, and Cloud
Backup, and certain operating system updates.

**ServiceNet**

Provides access to Rackspace services such as Cloud Files, Cloud
Databases, Cloud Backup, and certain packages and patches through an
internal only, multi-tenant network connection within each Rackspace
data center.

**Isolated**

Provides a virtual Layer 2 network that keeps your server separate from
PublicNet, ServiceNet, or both.

<span>**Limitations**</span>
----------------------------

If you remove your Cloud Server from PublicNet, it no longer has access
to the Internet and some Rackspace products and services. If you remove
ServiceNet from your Cloud Server, it cannot access certain Rackspace
products and services. The graphic below depicts the services that are
not available when these networks are removed from a Cloud Server:

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Cloud-Networks-graphic-v2.png" width="438" height="722" />

### More Information on Cloud Networks

[Attach an Isolated Network to a New Cloud
Server](/how-to/create-an-isolated-cloud-network-and-attach-it-to-a-server "Attach an Isolated Network to a New Cloud Server")

[Attach an Isolated Network to an Existing Cloud
Server](/how-to/attach-a-cloud-network-to-an-existing-cloud-server "Attach an Isolated Network to an Existing Cloud Server")

[Create an Isolated Cloud Network and attach it to a
server](/how-to/create-an-isolated-cloud-network-and-attach-it-to-a-server-and-attach-it-to-a-server)

[CIDR
Notation](/how-to/using-cidr-notation-in-cloud-networks "CIDR Notation")

[Cloud Networks Developer Guide](https://developer.rackspace.com/docs/)



