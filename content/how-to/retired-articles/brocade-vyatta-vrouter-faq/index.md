---
permalink: brocade-vyatta-vrouter-faq/
audit_date:
title: Brocade Vyatta vRouter FAQ
type: article
created_date: '2013-11-18'
created_by: Sameer Satyam
last_modified_date: '2021-01-29'
last_modified_by: Rose Morales
---
{{<accordion title="What is the network throughput on the Brocade Vyatta vRouter?" col="in" href="accordion1">}}

Since the Brocade Vyatta vRouter is a network appliance deployed on a
Cloud Server, the network throughput is dictated by the size of the
Cloud Server. Refer to [Cloud Servers Pricing](https://www.rackspace.com/cloud/servers/pricing/) for the network throughput for different flavors of Cloud Servers.
{{</accordion>}}
{{<accordion title="What is the minimum amount of RAM needed to run a Vyatta?" col="in" href="accordion2">}}
The minimum RAM size needed to run a vRouter is 1 GB.
{{</accordion>}}
{{<accordion title="Can you assign more than one IP address to the Vyatta's public interface?" col="in" href="accordion3">}}

Each Vyatta appliance comes with one public IPv4 address assigned. Up to
four additional public IPv4 addresses can be allocated (for a total of
5) . Please see this article for more details: [Requesting Additional IPv4 Addresses for Cloud Servers](/support/how-to/requesting-additional-ipv4-addresses-for-cloud-servers)
{{</accordion>}}
{{<accordion title="Can Vyatta be used along with RackConnect?" col="in" href="accordion4">}}

No. RackConnect users may not use the vRouter at this time.
{{</accordion>}}
{{<accordion title="Is Vyatta available for Managed Operations service level accounts?" col="in" href="accordion5">}}

Yes. The vRouter is available for the Managed Operations service level.
{{</accordion>}}
{{<accordion title="Can the Vyatta be configured in a redundant mode (active/backup Highly available configuration)?" col="in" href="accordion6">}}

The Vyatta appliance supports VRRP for High-availability. However,
Rackspace cannot support High Availability of Vyatta over the Public Net
interface because "Shared IP address" is not available over PublicNet at
this time. You can, however, setup Vyatta to be Highly Available on the
Cloud Networks interface since Shared IP addresses are supported on
Cloud Networks.
{{</accordion>}}
{{<accordion title="Can I add or remove interfaces from a live Vyatta device?" col="in" href="accordion7">}}

No. Do not add/disconnect networks . This will cause serious issues with
networking on the Vyatta and the only recourse will be to rebuild the
Vyatta.
{{</accordion>}}
{{<accordion title="I cannot log in to the Vyatta using username 'root' and the password that was set when the Vyatta was created. What is wrong?" col="in" href="accordion8">}}

Please log in with username 'vyatta' to login to the appliance.
{{</accordion>}}
{{<accordion title="What actions are supported on Vyatta through the control panel?" col="in" href="accordion9">}}

Control panel actions and limitations are described at the following
link: [Vyatta Network Appliance: Supported Actions Through Cloud Control Panel](/support/how-to/brocade-vyatta-vrouter-supported-actions-through-the-cloud-control-panel)
{{</accordion>}}