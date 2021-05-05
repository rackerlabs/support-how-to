---
permalink: rackspace-neutron-based-networking-api-faq
audit_date:
title: Rackspace Neutron-based Networking API FAQ
type: article
created_date: '2014-02-26'
created_by: Sameer Satyam
last_modified_date: '2015-03-17'
last_modified_by: Kyle Laffoon
product: Cloud Networks
product_url: cloud-networks
---

Neutron is an OpenStack project that will be the basis for all upcoming
networking services in the Rackspace Public Cloud. If you deploy
Rackspace Cloud Servers, you can use Rackspace Networking API based on
OpenStack Neutron in order to create and manage [Cloud Networks](https://www.rackspace.com/cloud/networks/) and perform other
Networking operations.

{{<accordion title="Where are the docs?" col="in" href="accordion1">}}

-  [Security Groups concepts and introduction](https://docs.rackspace.com/docs/cloud-networks/v2/developer-guide/#document-concepts/concepts-security-groups)
-  [Cloud Networks Developer Guide](https://docs.rackspace.com/docs/cloud-networks/v2/developer-guide)
-  [Cloud Networks Getting Started Guide](https://docs.rackspace.com/docs/cloud-networks/v2/developer-guide/#document-getting-started)
{{</accordion>}}
{{<accordion title="Why are you introducing Rackspace Networking based on the OpenStack Neutron API?" col="in" href="accordion2">}}

At Rackspace we have been using the /os-networksv2 Cloud Servers
extension to provision networking capabilities in the public cloud. This
extension was based on nova-network API and could be used primarily to
take advantage of Rackspace [Cloud Networks](https://www.rackspace.com/cloud/networks/). Since we introduced
the existing API, the Neutron OpenStack project has become the primary
Networking service in OpenStack. Moving forward, Rackspace Networking
API will be based on OpenStack Neutron API that is more granular than
the nova-network API and offers richer functionality and flexibility to
consume networking services.
{{</accordion>}}
{{<accordion title="What new capabilities are being introduced with the new API?" col="in" href="accordion3">}}

The API provides three primary top level resources (networks , ports and
subnets). Users can now:

-   Create and manage [Cloud Networks](https://www.rackspace.com/cloud/networks/) using the new API
-   Assign routes to Cloud Servers at boot-time (Host routes)
-   Configure allocation pools for subnets (CIDRs) on Cloud Networks to
    control the dynamic IP address assignment on your Cloud Servers
-   Provision an IP address of your choice on Isolated Networks ports
-   Dual stack your Isolated networks so that you have IPv4 and IPv6
    addresses on the same port
{{</accordion>}}
{{<accordion title="Will I still be able to use the old Networking API based on nova-network?" col="in" href="accordion4">}}

The existing Networking API (/osnetworksv2 servers extension) will
still function. However, we encourage you to move to the new Networking
API to take advantage of some of the new capabilities.
{{</accordion>}}
{{<accordion title="Can I attach and detach networks from servers using the new API?" col="in" href="accordion5">}}

Currently, you still have to use the Cloud Networks virtual interfaces
extension to attach and detach networks from a Cloud Server.
{{</accordion>}}
{{<accordion title="Is this API available to RackConnect customers?" col="in" href="accordion6">}}

RackConnect v2.0 customers can use this API. However, RackConnect v3.0
users will not be able to take advantage of this API yet. We are
planning to address this shortly.
{{</accordion>}}
{{<accordion title="Can I perform the API functions using the Neutron client?" col="in" href="accordion7">}}

Neutron client is not currently supported. We plan to make the
client available very soon.
{{</accordion>}}
{{<accordion title="Where is my XML?" col="in" href="accordion8">}}

The Networking API returns JSON exclusively, there is no option to
receive responses in XML.
{{</accordion>}}
{{<accordion title="How do I create Networks with the new API?" col="in" href="accordion9">}}

You need to create a network and add a subnet to that network . This is
different from the older way of creating networks which was a one step
process. Please see the Getting Started guide for examples.
{{</accordion>}}
{{<accordion title="How many subnets can be provisioned on a network" col="in" href="accordion10">}}

We have a limit of one IPV4 subnet and one IPv6 subnet per network.
{{</accordion>}}
{{<accordion title="Can I create, update or delete subnets on Public and ServiceNet?" col="in" href="accordion11">}}

No, These networks are Rackspace Provider networks and cannot be
modified. You cannot control subnetting and IP addressing on these
networks.
{{</accordion>}}
{{<accordion title="Can I modify allocation pools on the subnet?" col="in" href="accordion12">}}

You can specify allocation pools for the subnet when you create a subnet
but you cannot modify it.

When I change attributes on subnets will they take effect on ports that
are using it ?

No, the changes to the attributes will only take effect on any new ports
and servers that are created
{{</accordion>}}
{{<accordion title="Can I create ports on Public and ServiceNet ?" col="in" href="accordion13">}}

No, ports can be created only on Isolated Networks (cloud networks).
{{</accordion>}}
{{<accordion title="Can I have both an IPv4 and an IPv6 address on the same Isolated network port?" col="in" href="accordion14">}}

Yes, you can provision both an IPv4 address and an IPv6 address on the
same port using the fixed_ips attribute.
{{</accordion>}}