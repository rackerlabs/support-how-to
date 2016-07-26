---
permalink: understand-ip-options/
audit_date: '2016-07-25'
title: Understand IP options
type: article
created_date: '2016-07-25'
created_by: Kyle Laffoon
last_modified_date: '2016-07-25'
last_modified_by: Kyle Laffoon
product: Cloud Networks
product_url: cloud-networks
---

Internet protocol (IP) assigns standardized structure to data packets transmitted online between computers or servers. The IP addresses used with Rackspace services depend on the following:

- Data Traffic (inbound vs outbound)

- Access levels (internal vs external)

- Intended use (internet vs within same data center)

- Connected services

The following presents the available IPs, the differences between them, when and why each is used, and documents explaining how to use them.


IP type | Differences | Role | Related article
--- | --- | :---: | ---
Virtual IP | Distributes incoming connections to back-end nodes based on the configuration of the load balancer. | Use the virtual IP to connect to a service that is load balanced. | [Configure a load balancer](https://support.rackspace.com/how-to/configure-a-load-balancer/)
Floating IP | A floating IP address is a static IP address (typically public) used to move or “float” between cloud resources, typically Cloud Servers. |  Use floating IP addresses to associate the IP address to the tenant level rather than to the instance level (for example, a Cloud Server). You can also create a floating IP without provisioning any compute, networking or storage infrastructure. | During EA use Floading IP section of [Cloud Networks FAQ - Early Access (EA) release of floating IP addresses](https://support.rackspace.com/how-to/cloud-networks-faq/#early-access-ea-release-of-the-floating-ip-addresses)
PublicNet IP |Public address that provides access to/from the Internet. | Provide access to the Internet, Rackspace services such as Cloud Monitoring, Managed Cloud Support, RackConnect, Cloud Backup, and certain operating system updates. |[Attach a Cloud Network to an exisiting cloud server](https://support.rackspace.com/how-to/attach-a-cloud-network-to-an-existing-cloud-server/)
ServiceNet IP | nternal address that provides access to/from the Rackspace network known as ServiceNet. | Provide access to Rackspace services through an internal only, multi-tenant network connection within each Rackspace data center. | [Attach a Cloud Network to an exisiting cloud server](https://support.rackspace.com/how-to/attach-a-cloud-network-to-an-existing-cloud-server/)
Private Network IP (from existing user network) | Private address that provides access to/from a network that you create. | Use to isolate network traffic on your own private network within the Rackspace Cloud. | [Attach a Cloud Network to an exisiting cloud server](https://support.rackspace.com/how-to/attach-a-cloud-network-to-an-existing-cloud-server/)
RackConnect public IP | References a public IP address that has been provided from an IP address block assigned exclusively to your dedicated environment. | Use to assign public IP addresses to dedicated servers. | [Rackconnect v3.0 retained public IP addreses](https://support.rackspace.com/how-to/rackconnect-v30-retained-public-ip-addresses/)
