---
permalink: using-cidr-notation-in-cloud-networks
audit_date: '2021-04-21'
title: Using CIDR notation in Cloud Networks
type: article
created_date: '2012-09-17'
created_by: David Hendler
last_modified_date: '2021-04-21'
last_modified_by: Carlos Arriaga
product: Cloud Networks
product_url: cloud-networks
---

### What is CIDR?

Classless Inter-Domain Routing (CIDR) is a range of IP addresses a network
uses. A CIDR address looks like a normal IP address, except that
it ends with a slash followed by a number. The number after the slash
represents the number of addresses in the range.

Here's an example CIDR IP address in IPv4:

    192.0.2.0/24

Because IPv4 has a 32-bit address space, the 24-bit prefix in the preceding example
means that the address range is the 8 bits (256 addresses) after 192.0.2.0.

And here's an example in IPv6:

    2001:db8::/32

IPv6 has a 128-bit address range, so the 32-bit network prefix
refers to 96 bits worth of addresses following 2001:db8::, about 76
octillion addresses.

### CIDR notation in the Cloud Control Panel

If you're using the [Cloud Control Panel](https://mycloud.rackspace.com)
to create a Cloud Network, you don't need to worry about calculating the
IP address. The system automatically populates the CIDR field with an IP block
on the Rackspace Network. You need only to supply a name for the network
and click **Create Network**.

For complete instructions on creating a Cloud Network by using the
Cloud Control Panel, see [Create an Isolated Cloud Network and attach it
to a server](/support/how-to/create-an-isolated-cloud-network-and-attach-it-to-a-server "Create an Isolated Cloud Network and attach it to a server").

### CIDR notation in the Cloud Networks API

If you're using the Cloud Networks API to create a network, you must
specify the CIDR and a name for the new network.

The nova client command looks like the following example:

    nova network-create <network_label> <cidr>

In this case, **network\_label** is the name of the network, such as
`my_new_network`, and **cidr** is the IP block from which to allocate, such as
`172.16.0.0/24` or `2001:DB8::/64`.

The following example shows a cURL command that creates the network:

    curl -s https://dfw.servers.api.rackspacecloud.com/v2/010101/os-networksv2 <br>
             -X POST -H "X-Auth-Project-Id: 010101" -H "Content-Type: application/json" <br>
             -H "Accept: application/json" <br>
             -H "X-Auth-Token: 574c5763-86ab-431e-8b6c-5f7cf84c30ca" <br>
             -d '{"network": {"cidr": "192.168.0.0/24", "label": "superprivate"}}' | python -m json.tool

The JSON-format response would look similar to this:

    {
     "network": {
     "cidr": "192.168.0.0/24",
     "id": "aaa77608-bae2-4eed-840e-896a7dd345d4",
     "label": "superprivate"
     }
    }

**Note**: To help calculate a subnet, you might use a tool like this: <https://www.subnet-calculator.com/cidr.php>

For more information on using the Cloud Networks API see the
[Rackspace Cloud Networks Developers Guide](https://docs.rackspace.com/docs/cloud-networks/v2/).

### More Information on Cloud Networks

[Attach an Isolated Network to a New Cloud
Server](/support/how-to/create-an-isolated-cloud-network-and-attach-it-to-a-server "Attach an Isolated Network to a New Cloud Server")

[Attach an Isolated Network to an Existing Cloud
Server](/support/how-to/attach-a-cloud-network-to-an-existing-cloud-server "Attach an Isolated Network to an Existing Cloud Server")

[Removing Networks from a Cloud
Server](/support/how-to/removing-networks-from-a-cloud-server "Removing Networks from a Cloud Server")

[Cloud Networks Developer Guide](https://docs.rackspace.com/docs/cloud-networks/v2/)

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact). 
