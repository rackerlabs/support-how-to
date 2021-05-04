---
permalink: using-configure-as-a-gateway-for-virtual-net-devices
audit_date: '2019-05-16'
title: Using Configure as a Gateway for virtual net devices
type: article
created_date: '2019-05-16'
created_by: Brian King
last_modified_date: '2019-05-16'
last_modified_by: William Loy
product: Cloud Networks
product_url: cloud-networks
---

This article describes the results of selecting the option to **Configure as a Gateway** in the **Advanced Options** section of a Cloud Server network configuration. The article also discusses the possible errors you might experience and how best to address those errors.

**Note:** The option to configure as a gateway is only available for virtual net devices and is enabled by default.

#### Enable or disable the Configure as a Gateway option

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).
2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.
3. At the top of the page, click **Servers** > **Cloud Servers**. 
4. Click the **Create Server** button.
5. After you select your operating system and flavor, expand the **Advanced Options** section.
6. Select your preferred network settings and then check or uncheck the **Configure as a Gateway** option.
7. Click the **Create Server** button.


#### Cloud Network configuration and possible errors

The following table lists the steps taken by the automated process that is used to set up a Cloud Network, along with steps to take if the automation encounters an issue.

| Configuration step | What could go wrong? | What state is the device left in? | Recommended solution |
|--------|----------------------|-----------------------------------|------------------------|
|Build a server by using the **Configure as a Gateway** option. | The server build failed. | The server is now stuck in an error state. | Delete the server and build a new one.|
|Create a Cloud Network with the name `$servername-net`. | Network creation can fail due to exceeding the Cloud Networks quota of 10 networks per region. Response from API: `409 OverQuotaClient: Quota exceeded for resources: ['network']`	| The server is built, but the Cloud Network configuration is not complete.| Delete unused Cloud Networks in the region, or open a support ticket to request a quota increase (subject to approval). Next, delete the server and build a new one.|
|Create a subnet.| It is unlikely anything will go wrong at this point in the build.| The server is built, but the Cloud Network configuration is not complete.| Delete the server and Cloud Network, and build a new server.|
| Create a fixed Internet Protocol (IP) port by using the device ID of the server.| It is unlikely anything will go wrong at this point in the build.| The server is built, but the Cloud Network configuration is not complete. Also, the Cloud Network cannot be deleted until the port is deleted.| Delete the server, Cloud Network port, and Cloud Network, and then build a new server.|
| Attach a fixed IP port to the server.| A sync issue between the Cloud Servers and Cloud Networks APIs leads to the Cloud Servers API assigning the wrong IP. | The IP is wrong in the API, but it works.| You can  ignore this situation in the short term. If it becomes a problem, you need to detach the network, wait 15 minutes, make a new fixed IP port, and attach to the server.|


#### Fortigate virtual machine image configuration and possible errors

The following table lists the steps taken by the automated process that is used to set up a Cloud Network, along with steps to take if the automation encounters an issue.

| Configuration step | Command to perform action | What could go wrong? | What state is the device left in? | Recommended solution |
|--------------------|---------------------------|----------------------|-----------------------------------|----------------------|
| Set the IP in Cloud Networks interface. | `config system interface`<br> `edit port3`<br> `set vdom root`<br> `set type physical`<br> `set alias $cloudnetwork`<br> `set ip $gatewayip 255.255.255.0`<br> `end`|  - There is a temporary network issue. <br> - The admin password was changed before automation completed. | Servers built behind the Fortigate-VM are unable to reach the Internet, as the gateway IP is not yet assigned to the Fortigate-VM. | Log in via HTTPS or SSH and set the port3 (Cloud Networks) interface manually.|
| Configure NAT between Cloud Networks and PublicNet (Internet access). | `config firewall policy` <br> `edit 1`<br> `set name "allow outbound internet access"`<br> `set srcintf "port3"` <br> `set dstintf "port1"` <br> `set srcaddr "all"`<br> `set dstaddr "all"` <br>`set action accept` <br> `set schedule "always"` <br> `set service "ALL"` <br> `set nat enable` <br> `set comments "nat by ServerMill"` <br> `next` <br >`end` |   - There is a temporary network issue. <br> - The admin password was changed before automation completed. | Servers built behind the Fortigate-VM are unable to reach the Internet, as NAT is unconfigured. | Servers built behind the Fortigate-VM are unable to reach the Internet, as NAT is unconfigured. | Log in via HTTPS or SSH and set the NAT configuration manually exactly as shown at left. |
