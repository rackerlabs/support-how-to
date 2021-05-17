---
permalink: cloud-networks-faq
audit_date: '2021-05-14'
title: Cloud Networks FAQ
type: article
created_date: '2013-10-02'
created_by: Sameer Satyam
last_modified_date: '2021-05-14'
last_modified_by: Ana Corpus
product: Cloud Networks
product_url: cloud-networks
---

### Getting Started

{{<accordion title="What are the different networks in the Rackspace Cloud?" col="in" href="accordion1">}}

The Rackspace Cloud contains the following networks:

- **PublicNet** (public)

    PublicNet connects a cloud server to the Internet. When you create cloud
    servers with PublicNet, your servers get an IPv4 address and an IPv6 address.
    Rackspace bills outbound public traffic according to
    [published rates](https://www.rackspace.com/cloud/public-pricing/#bandwidth).
    You can create a server without a public network. However, you might not be
    able to access to operating system updates, and Cloud Monitoring remote checks
    and so on might not work. For more information about the limitations of not
    having a public network, see
    [Removing Networks from a Cloud Server](/support/how-to/removing-networks-from-a-cloud-server).

    **Note**: RackConnect and Managed Operations service level customers must use
    PublicNet.

- **ServiceNet** (Private)

    ServiceNet is an internal, multi-tenant network within each Rackspace Cloud
    region. It provides cloud servers access to regional services, such as Cloud
    Files, Cloud Load Balancers, Cloud Databases, and Cloud Backup, at no cost.
    ServiceNet is currently IPv4 only. Historically, ServiceNet was used for
    server-to-server communication, but we now recommend Cloud Networks for
    this purpose. We also requires ServiceNet for Windows cloud server activation.
    We recommend that you connect cloud servers to ServiceNet and that you configure
    a software firewall, such as iptables or Windows Firewall, to deny all new inbound
    connections to the server. For more information, see
    [Removing Networks from a Cloud Server](/support/how-to/removing-networks-from-a-cloud-server).

    **Note**: RackConnect and Managed Operations service level customers must use
    ServiceNet.

- **Cloud networks** (isolated)

    Cloud networks are isolated networks that you can use for secure communication
    between your cloud servers. Cloud networks are completely private and single
    tenant and can be either IPv4 or IPv6. We recommend cloud networks for all
    communication between cloud servers. Like ServiceNet, we provide all bandwidth
    on cloud networks at no charge.  
{{</accordion>}}
{{<accordion title="What are the different networking APIs in the Rackspace Cloud?" col="in" href="accordion2">}}

The Rackspace Cloud has two networking APIs - Neutron and Nova-Network.

Rackspace first introduced networking services based on the OpenStack
Nova-Network API. This version of the service is now superseded by the current
networking API, based on OpenStack Neutron, which offers a richer suite of
networking services. Both APIs continue to function, but the Neutron API is
the base for all new networking services that Rackspace offers. For more information,
see [Networking: Neutron versus Nova-Network](https://docs.rackspace.com/docs/cloud-networks/v2/developer-guide/#networking-neutron-versus-nova-network)
in the Cloud Networks Developer Guide.
{{</accordion>}}
{{<accordion title="How many cloud networks can I create?" col="in" href="accordion3">}}

Every Rackspace Managed Infrastructure account has a default limit of 10 cloud
networks per region. To request an increase, submit a ticket in the Cloud
Control Panel with details about how you intend to use the additional networks.
{{</accordion>}}
{{<accordion title="Is there a limit on the number of servers that can be attached to a single cloud network?" col="in" href="accordion4">}}

Yes. You can attach a maximum of 250 servers to a single cloud network.
{{</accordion>}}
{{<accordion title="What are the other limits in the Cloud Networks service?" col="in" href="accordion5">}}

The following list shows all the limits defined for the service:

-   Cloud networks per region: 10
-   Subnets per network: 2 (one IPv4 and one IPv6)
-   DNS name servers per subnet: 2
-   Host routes per subnet: 3
-   Allocation pools per subnet: 5
-   Number of fixed IP addresses per port: 4
-   Ports (hosts) per network: 250
-   Security groups per port: 5
-   Security group rules per security group: 20
-   Security group rules per user: 100
{{</accordion>}}
{{<accordion title="Can I add or remove existing networks from a cloud server?" col="in" href="accordion6">}}

Yes. You can add or remove any network (PublicNet, ServiceNet, or cloud network)
from a server that is in a Managed Infrastructure service level account. However,
Managed Operations service level and RackConnect customers are required to have
PublicNet and ServiceNet interfaces. This capability means that you can freely
make networking changes to your existing deployments without having to rebuild
Cloud Servers.

For more information, see the
[Virtual Interfaces extension](https://docs.rackspace.com/docs/cloud-servers/v2/developer-guide/#virtual-interfaces-extension)
in the Cloud Servers Developer Guide (using the nova-network API) or
[Boot a new server with your cloud network](https://docs.rackspace.com/docs/cloud-networks/v2/developer-guide/#document-getting-started/managing-networks/boot-server)
in the Cloud Networks Getting Started Guide (using the neutron API).

**Note**: Be aware that removing PublicNet or ServiceNet interfaces might impact
certain Rackspace services and capabilities.
{{</accordion>}}
{{<accordion title="Can I transfer Cloud Networks IP addresses from one Rackspace cloud server to another?" col="in" href="accordion7">}}

Yes. Any other cloud server on that network can use IP addresses on Cloud Networks.
{{</accordion>}}
{{<accordion title="Can I transfer a PublicNet or ServiceNet IP address from one Rackspace cloud server to another?" col="in" href="accordion8">}}

No. At this time, you cannot transfer a PublicNet or ServiceNet IP address between cloud servers.
{{</accordion>}}
{{<accordion title="What is the network throughput on Cloud Servers?" col="in" href="accordion9">}}

The amount of network throughput varies based on the Cloud Server flavor. For
more details, see the [Cloud Servers pricing information](https://www.rackspace.com/cloud/public-pricing/#cloud-servers).
{{</accordion>}}
{{<accordion title="What is the scope of a cloud network?" col="in" href="accordion10">}}

Cloud networks are regional in scope, and you can attach them to any of your cloud servers in a given region.
{{</accordion>}}

---------

### Security groups

{{<accordion title="What are security groups?" col="in" href="accordion38">}}

Security groups are containers for a set of inbound and outbound traffic rules
that you directly apply to a Neutron port (PublicNet, ServiceNet or Cloud
Network). After you launch an instance, you can assign one or more security
groups to ports on that instance. Security groups act as a stateful firewall
for your Cloud Server instances.
{{</accordion>}}
{{<accordion title="What is the difference between security groups and a firewall?" col="in" href="accordion39">}}

Security groups act as a distributed firewall for your Cloud Server instances.
After you launch an instance, you can assign one or more security groups to
ports on that instance.
{{</accordion>}}
{{<accordion title="Where is the documentation?" col="in" href="accordion11">}}

[Cloud Networks Developer Guide](https://docs.rackspace.com/docs/cloud-networks/v2/developer-guide/#document-api-operations/floating-ip-address-operations)

[Cloud Networks API Reference](https://docs.rackspace.com/docs/cloud-networks/v2/developer-guide/#document-api-operations/sec-group-operations)
{{</accordion>}}
{{<accordion title="What are the benefits of using security groups?" col="in" href="accordion12">}}

Security groups enable users to manage the flow of traffic across a group of
instances without manually configuring firewall settings. Security groups
provide a whitelist style of allowing traffic. After you apply a security
rule, such as restricting IPv4 addresses, port 8080, or all IP addresses, the
only traffic allowed to reach the instance must comply with the security rule.
The security groups stop all other traffic.
{{</accordion>}}
{{<accordion title="Is this feature available to all Rackspace Cloud customers?" col="in" href="accordion13">}}

Yes, the security groups feature is available to all customers.
{{</accordion>}}
{{<accordion title="What limitations does the feature currently have?" col="in" href="accordion14">}}

You can't add a security group as a child of another security group. You also
can't edit a security group rule&mdash;you must add a new security group to replace
the old one.

You can only create outbound security group rules by using the API. You can use the 
following cURL command, but be sure to substitute the variables with
the appropriate values for your account:

    curl -XPOST https://<region>.networks.api.rackspacecloud.com/v2.0/security-group-rules <br>
      -H "Content-type: application/json" <br>
      -H "X-Auth-Token: <yourAuthToken>" <br>
      -H "User-Agent: python-novaclient" <br>
      -H "Accept: application/json" <br>
      -d '{"security_group_rule":{"direction":"egress","port_range_min":"<portNumber or null>","port_range_max":"<portNumber or null>","ethertype":"<IPv4 or IPv6>","protocol":"<desiredProtocol>","security_group_id":"<yourSGID>"}}' 
      | python -m json.tool
    
The following list provides descriptions of the variables in the command:   

- `region`: The region in which you are working such as `DFW`.

- `X-Auth-Token`: The authentication token for your user account.
   For more information, see 
   [How cURL commands work](https://docs.rackspace.com/docs/cloud-networks/v2/getting-started/send-request-ovw/#how-curl-commands-work).
   
- `direction`: The traffic direction for the rule. In this case, use `egress` for outbound traffic.

- `port_range_min`: The minimum port number for the range of ports you want to add to the
   rule to, such as `22`, `80`, or `443`. This can be the same as the maximum value.

- `port_range_max`: The maximum port number for the range of ports you want to add to the
   rule to, such as `22`, `80`, or `443`. This can be the same as the minimum value.

- `IPv4` or `IPv6`: The IP version you want to use.

- `protocol`: The protocol you want to use, such as `tcp`, `icmp`, `udp`, or `null`.

- `security_grouo_id`: The security group UUID that you want to apply the tule to.  Find this
   on the Control Panel **Security Group Details** page next to **Group ID**.

After you run the cURL command, you get output that outlines the rule that
you just added in a JSON block. Take note of the `securityGroupRuleID`
field in the output because you use this value if you delete the rule.
{{</accordion>}}
{{<accordion title="Do you support security groups through the neutron client?" col="in" href="accordion15">}}

Yes. Users can provision security groups through the neutron client.
{{</accordion>}}
{{<accordion title="Is this functionality integrated with and available from the Cloud Control Panel?" col="in" href="accordion16">}}

Yes, but only inbound PublicNet and ServiceNet security groups are currently
available in the Control Panel. To access additional features, you can use
either the neutron client or the API.
{{</accordion>}}
{{<accordion title="Are security groups supported for OnMetal users?" col="in" href="accordion17">}}

No. We currently support security groups only for virtual cloud servers.
{{</accordion>}}
{{<accordion title="Do my instance get a default security group?" col="in" href="accordion18">}}

Cloud Networks does not apply a default security group. Users must create
a security group themselves and apply it to ports on an instance.
{{</accordion>}}
{{<accordion title="Can I apply security groups to ports on an instance at boot time?" col="in" href="accordion19">}}

No. You can apply security groups only after you start the instance.
{{</accordion>}}
{{<accordion title="What happens when I add a security group rule to the security group?" col="in" href="accordion20">}}

When you add a rule, it allows traffic that matches the new security group rule to go through.
{{</accordion>}}
{{<accordion title="Can traffic be blocked or denied based on a security group rule?" col="in" href="accordion21">}}

Traffic that matches a rule is permitted. Any traffic that is not part of the
ruleset for that security group is denied or blocked. There is no way to specify
that traffic matching a rule should be denied. OpenStack designed their security
groups API as a whitelist. The system automatically blacklists any traffic that
doesn't match any of the rules in the whitelist.
{{</accordion>}}
{{<accordion title="Do security groups allow any traffic by default?" col="in" href="accordion22">}}

Rules that match very basic network operations, such as DNS responses from
Rackspace Provider DNS servers (UDP source port `53`), can pass by default even
if a security group does not explicitly allow them. Security groups also permit
the TCP flags `ACK` and `RST` by default.
{{</accordion>}}
{{<accordion title="What kinds of traffic can security group rules match?" col="in" href="accordion23">}}

Rules can match the following types of traffic (for both IPv4 and IPv6 addresses):

- TCP traffic
- UDP traffic
- ICMP traffic
- Traffic from a Source IP address
- Traffic from a CIDR
{{</accordion>}}
{{<accordion title="Can I have a security group with no rules?" col="in" href="accordion24">}}

Yes. Such a security group denies or blocks all traffic.
{{</accordion>}}
{{<accordion title="Are security groups applied to instances?" col="in" href="accordion25">}}

Yes, you apply security groups to instances. You can associate a security group
with one or more instances, and those instances automatically
inherit all security group rules associated with that security group.
{{</accordion>}}
{{<accordion title="What are the available quotas for security groups and rules?" col="in" href="accordion26">}}

- You can apply up to 5 security groups per port.
- You can have up to 20 security group rules per security group
- You can have up to 100 security group rules (aggregate) per user during the
  limited availability release.
{{</accordion>}}

---------

### Shared IP
{{<accordion title="What is a shared IP?" col="in" href="accordion27">}}

A shared IP allows for active/passive high availability platforms to share a
single IP address between two instances in our cloud. The IP then moves between
the two instances based on instance state (up or down) through the configuration
of a high availability protocol, such as heartbeat or corosync. Active-standby
applications can then achieve full redundancy in our cloud.
{{</accordion>}}
{{<accordion title="Where is the documentation?" col="in" href="accordion28">}}

[Cloud Networks API Guide](https://docs.rackspace.com/docs/cloud-networks/v2/developer-guide/)

The Shared IP sections are:

- [Concepts](https://docs.rackspace.com/docs/cloud-networks/v2/developer-guide/#shared-ip-addresses)

- [API operations](https://docs.rackspace.com/docs/cloud-networks/v2/developer-guide/#document-api-operations/shared-ip-address-operations)

- [Getting started](https://docs.rackspace.com/docs/cloud-networks/v2/developer-guide/#sharing-ip-address-between-servers)
{{</accordion>}}
{{<accordion title="What features are supported?" col="in" href="accordion29">}}

Shared IP supports the ability to create, associate, disassociate, and delete shared IP addresses.
{{</accordion>}}
{{<accordion title="Is this feature supported for all Rackspace Cloud customers?" col="in" href="accordion30">}}

This feature is supported for all customers except RackConnect customers.
{{</accordion>}}
{{<accordion title="Is this feature available from the Cloud Control Panel?" col="in" href="accordion31">}}

No, this feature is not yet available in the Cloud Control Panel.
{{</accordion>}}
{{<accordion title="Is there a limit on the number of shared IP addresses that a tenant can have?" col="in" href="accordion32">}}

The default limit is ten shared IP addresses per tenant. We currently do not support
requests to increase the quota per tenant.
{{</accordion>}}
{{<accordion title="Which high availability protocols do you support?" col="in" href="accordion33">}}

Some high availability protocols depend on an interface floating MAC address
to move with the shared IP during an impacting event, such as activating the standby
instance in a passive state. Our cloud does not support hese protocols because
our underlying data plane implementation doesn't support MACs moving between
instances. Therefore, our cloud favors high availability protocols such as heartbeat,
corosync, and other similar protocols over protocols requiring a floating MAC address.
{{</accordion>}}
{{<accordion title="How is a shared IP address different from a floating IP address?" col="in" href="accordion34">}}

You would use a shared IP address for active/passive high availability (HA), where one
IP address is needed between two or more servers for redundancy (active-standby). One
server owns the IP address at any given time, and clients or other servers use this
IP address for communication with the HA pair.

Although you can use a floating IP address to solve the active/passive HA problem,
the solution would require monitoring and API calls to achieve the same result. Thus, a
shared IP address is the preferred method to solve the active or passive HA problem.
{{</accordion>}}
{{<accordion title="Can existing cloud servers’ public IP addresses be used as a shared IP address?" col="in" href="accordion35">}}

No, the shared IP address is an additional public IP assigned to an instance port.
The existing public IP must also reside on each instance for active-standby detection
from high availability protocols such as heartbeat and corosync.
{{</accordion>}}
{{<accordion title="Do you support shared IP addresses for OnMetal users?" col="in" href="accordion36">}}

No, we currently support shared IP addresses for only virtual cloud servers.
{{</accordion>}}
{{<accordion title="Do you support shared IP addresses for RackConnect v3.0 users?" col="in" href="accordion37">}}

No, shared IP addresses do not work with a RackConnect v3.0 cloud network.
{{</accordion>}}
