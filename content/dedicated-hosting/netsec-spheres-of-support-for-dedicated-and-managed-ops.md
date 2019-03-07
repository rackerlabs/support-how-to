---
permalink: netsec-spheres-of-support-for-dedicated-and-managed-ops
title: NetSec Spheres of Support
type: article
created_date: '2019-02-25'
created_by: NetSec Standardization Group
last_modified_date: '2019-02-25'
last_modified_by: Adrian Bekele
product: Dedicated Hosting
product_url: dedicated-hosting
---

The Spheres of Support lists the technologies and features in the network security domain and defines support level for each item. 
 
### Firewall support

Firewall support contains the following elements:

* Monitoring and management of network firewalls
* Customized patching, rollback capabilities, and iOS Updates
* Problem, incident, and change management
* Configuration changes on behalf of the customer
* Performance monitoring and tuning
* Configuration and support of IPsec-compliant VPNs
* Configuration and maintenance of firewall policies to restrict access to environments
* Provision VLANs and private IP space
* Managed VPN access
* SSL certificate installation and troubleshooting

The following table shows which features are supported in Cisco&reg; and Juniper&reg; firewalls:

|   | Feature | Cisco ASA | Juniper SRX |
| :---: |:--- | :---: | :---: |
| **Interfaces** |VLAN tagged (Cisco trunk)| ✓ | ✓ |
||VLAN untagged (Cisco access)| ✓ | ✓ |
||LACP bundling with a number of interfaces is a power of 2| ✓ | ✓ |
| **Routing** |Static routing| ✓ | ✓ |
||Static routing with IP SLA tracking| ✓ |  |
| **IPv6** |Static routing| ✓ | ✓ |
||Static routing with IP SLA tracking| ✓ |  |
| **NAT** |Static (one-to-one)| ✓ | ✓ |
||PAT (NAT overloading)| ✓ | ✓ |
||Policy NAT/PAT| ✓ | ✓ |
||DNS Doctoring| ✓ | ✓ |
||Connection limits via static NAT| ✓ |  |
| **Packet filtering** |Layer 3/4 filtering ingress/egress| ✓ | ✓ |
||FQDN based filtering| ✓ ASA 8.3+| ✓ |
||Outbound ACL| ✓ |  |
| **DDoS Mitigation** |Connection limiting (Embryonic and/or established)  |✓| ✓|
||Connection timeouts |✓| ✓|
||TCP normalization modification  || ✓|
||Application inspection  || ✓|
| **VPN** |Route-based VPNs - BGP  |✓| ✓|
||Route-based VPNs - Static |✓| ✓|
||IPsec - IKEv2 L2L with PSK  |✓| ✓|
||IPsec LAN-to-LAN Layer 3/4 filtering  |✓| ✓|
||IPsec LAN-to-LAN Pre-shared keys authentication |✓| ✓|
||IPsec LAN-to-LAN Hub and spoke configuration  |✓| ✓|
||IPsec remote access with group authentication |✓| |
||IPsec remote access with group and user authentication  |✓| |
||IPsec remote access with two-factor authentication  |✓| |
||IPsec remote access - Multiple VPN groups |✓| |
||IPsec remote access with layer 3/4 filtering  |✓| |
||IPsec remote access - Split-tunneling |✓| |
||IPsec remote access - all traffic through VPN (tunnel all)  |✓| |
||IPsec remote access - DNS server assignment |✓| |
||SSL VPN AnyConnect Plus |✓||
||SSL VPN - Mobile client (Plus license feature)  |✓||
||SSL VPN - Two-factor authentication |✓||
| **Management** |  Buffered Logging  |✓| ✓|
||Log shipping to log correlation device within the customer's account  |✓| ✓|
||SNMP read-only for customer |✓| ✓|
| **High Availability (HA)** |  Active/Standby (stateful and non-stateful) (clustering - SRX)<Br/>ASA 5510 and above, ASA-X 5508, 5515 and above |✓|✓|
| **Modes and modules** | Mode - Multi-Context Routed |✓||
||Mode - Routed |✓| ✓|
| **RackConnect** | RackConnect VLANs termination |✓| |
| **RackConnect Global** |  RackConnect Global Classic Static |✓| ✓|
||RackConnect Global 2.0 Static - BGP |✓| |
||RackConnect Global 2.1 Static - BGP (with TOR)  |✓| |

### Load balancer support

Load balancer support contains the following elements:

* Monitoring and management of Load balancers
* Problem, incident, and change management
* Configuration changes on behalf of the customer
* Performance monitoring and tuning

The following table shows which features are supported in F5&reg; LTM&reg;, Brocade&reg; ADX, 
NetScaler&reg; VPX, and NetScaler MPX load balancers:

**Note**: Citrix has made the VPX software platform available in early access and will soon 
release it in limited access. They have not released the MPX hardware platform yet but 
currently are planning support for it.

| | Feature | F5 LTM | Brocade ADX | NetScaler VPX | NetScaler MPX|
| :---: |:--- | :---: | :---: | :---: | :---: |
| **Interfaces** |  VLAN tagged (Cisco trunk) |✓|✓||✓|
||VLAN untagged (Cisco access)  |✓|✓|✓|✓|
| **Routing** | Static Routes |✓|✓|Default route|✓|
| **IPv6** |  Static Routes |✓|✓| Default route|✓|
| **Packet filtering** |  Layer 3/4 Ingress/Egress |US - ✓ <Br/>Intl - X|✓|||
| **NAT** | Static (one-for-one)  |✓|✓|||
||PAT (NAT overload)  |✓|✓|||
||Source NAT pools on Virtual Servers |✓|✓|✓|✓|
| **Load balancing** |  Local Servers Servers behind the LB |✓|✓||✓|
||Remote Servers in front of the LB |✓|✓|✓|✓|
||Parallel Servers sitting as a neighbor to the LB  |✓|✓|✓|✓|
||Algorithms - Static (Round Robin or Weighted Round Robin) |✓|✓|✓|✓|
||Algorithms - Dynamic (Least Connections)  |✓|✓|✓|✓|
||Healthchecks - ICMP echo  |✓|✓|✓|✓|
||Healthchecks - Layer 4 TCP (Port Socket Check) and UDP (Port Rejection) |✓|✓|✓|✓|
||Healthchecks - Layer 7 HTTP (Response Code, String Search, Checks on non well-known ports)  |✓|✓|✓|✓|
||Healthchecks - Layer 7 HTTPS (SSL hello, Response Code, String Search, Checks on non-well-known ports)  |✓|✓|✓|✓|
||TCP/UDP Virtual Servers (Catchall, Single Port) |✓|✓|✓|✓|
||SNAT  |✓|✓|✓|✓|
||HTTP Redirects  |✓|✓|✓|✓|
||URI Load Balancing  |✓|✓|✓|✓|
||SSL Offloading  |✓|✓|✓|✓|
||Pools - Single Node: port combination (multiple ports on a server)  |✓|✓|✓|✓|
||Pools - Connection Limits (Pool, Node)  |✓|✓|✓|✓|
||Pools - Priority Group Activation |✓||||
||LB - Pools - Group monitor applied to all pool members  |✓||✓|✓|
||LB - Pools - Individual monitors applied to each pool member  |✓|✓|✓|✓| 
||LB - Pools - Combination of individual and group monitors across different pool members |✓||✓|✓|
||LB - Application Profiles - HTTP (OneConnect, Custom HTTP Profile settings) |✓||✓|✓|
||LB - Application Profiles - SSL (Client and Server) |✓|✓|✓|✓|
||LB - Application Profiles - FTP (Active and Passive)  |✓||✓|✓|
||Persistence - TCP - Source IP |✓|✓|✓|✓|
||Persistence - HTTP cookie: LB generated, server generated |✓|✓|✓|✓|
||Persistence - HTTP Custom cookie name |✓||✓|✓|
||Persistence - Cookie encryption |✓||✓|✓|
||Persistence - UDP - Source IP |✓|✓|✓|✓|
||LB - Virtual Servers - SNAT Pools |✓|✓|✓|✓|
| **Scripting** | iRules  |✓ (Limited)||||
| **Management** |  Logging - Local Buffered Logging  |✓|✓|✓|✓|
||Logging - Log shipping to log correlation device (Within customer's account)  |✓|✓|✓|✓|
||Management - SNMP read-only for customer  |✓|✓|✓|✓|
| **High availability (HA)** |  High availability |✓ |✓ ADX 1000 only |✓|✓|
||HA - Active/Standby |✓|✓|✓|✓|
| **Modes and Modules** | Routed (Single and Multiple Route Domains) Default gateway for back end servers |✓|✓||✓|
||Mode - Edge Net Device|✓ with AFM||||
||Multiple Segments behind LB |✓|✓||✓<Br/>Interface filtering is |
| **RackConnect** | RackConnect VLANs termination |✓|RCV2 - X<Br/>RCv3 - ✓|||
| **RackConnect Global** |  RackConnect Global Classic Static |✓(AFM only)||||
| **SSL VPNs** |  SSL Client VPN on edge Big-IPs using APM module |✓||||
| **SNI** | Server Name Indication  |✓|✓|✓|✓|

### Global load balancer

The following table shows which global load balancer features are supported in F5 LTM, Brocade ADX, NetScaler VPX, and NetScaler MPX load balancers:

|| Feature | F5 GTM |  ADX GSLB | NetScaler VPX | NetScaler MPX|
| :--- |:--- | :---: | :---: | :---: | :---: |
| **Interfaces** |  VLAN tagged (Cisco trunk)|✓||||
||VLAN untagged (Cisco access)  |✓| |||     
||LACP bundling with the number of interfaces is a power of 2 |✓|||| 
| **Routing** | Static routes |✓||||
| **IPv6** |  Static routes |✓||||
| **Load balancing** |  Single Listener Address |✓||||
||Servers - BIG-IP System (Single)  |✓||||
||Servers - BIG-IP System (Redundant pair)  |✓||||
||Virtual Servers - Manual Configuration  |✓||||
||Wide IPs - Standard FQDN Names  |✓||||
||Wide IPs - Standard FQDN Alias Names  |✓||||
||Wide IPs - Single Pool, Multiple Virtual Server Members |✓||||
||Algorithms - Static - Round Robin, Ratio (Weighted Round Robin), Global Availability  |✓||||
||Algorithms - Dynamic - Least Connections  |✓||||
| **DNS** | Authoritative Name Server for Specific Subdelegated Domains |✓||||
| **Management** |  Buffered Logging  |✓||||
||Log shipping to log correlation device (Within customer's account)  |✓||||
| **High availability (HA)** |  Synchronization Groups  |✓||||
||Redundant GTM Devices specified as primary and secondary DNS servers  |✓||||
| **Modes and modules** | Serial configuration  |✓||||
||Paralled configuration  |✓||||
||Standalone BigIP with GTM License |✓||||

### Cisco CSS support

End of support for Cisco Content Service Switches (CSS) occured on September 30, 2014. Customers 
that continue to use the platform fall under the Extended Lifecycle Support agreement. Any 
support is considered a reasonable endeavor.

### Redhill&reg; WebMux support

End of support for the Redhill MebMux load balancer occured on September 1, 2014. Customers that 
continue to use the platform fall under the Extended Lifecycle Support agreement. Any support 
is considered a reasonable endeavor.

**Note:** Rackspace makes every effort to align our support dates for operating systems with the 
manufacturer’s support dates. If a manufacturer decides to shorten the support life of an operating 
system, Rackspace might be forced to end support sooner than originally anticipated. For full details 
on support life, see the [Rackspace EOL Terms](https://www.rackspace.com/information/legal/eolterms?_ga=2.83585110.1185508516.1551714471-1563606307.1544215242)

### DDoS mitigation

Be aware that Rackspace does support the mitigation of Distributed Denial of Service (DDoS) feature.

### Disclaimer
### The information contained in this document is a general introduction to the Rackspace Services and does not include any legal commitment on the part of Rackspace.

You should not rely solely on this document to decide whether to purchase the service. Rackspace states the detailed services descriptions and legal commitments in its services agreements. Rackspace services’ features and benefits depend on system configuration and may require enabled hardware, software, or additional services activation.

Except as set forth in Rackspace general terms and conditions, cloud terms of services, and/or other agreements you sign with Rackspace, Rackspace assumes no liability whatsoever, and disclaims any express or implied warranty, relating to its services including, but not limited to, the implied warranty of merchantability, fitness for a particular purpose, and no infringement.

Although part of the document explains how Rackspace services may work with third-party products, the information contained in the document is not designed to work with all scenarios. Any use or changes to third-party products and configurations should be made at the discretion of your administrators and are subject to the applicable terms and conditions of such third party. Rackspace does not provide technical support for third-party products, other than specified in your hosting services or other agreement you have with Rackspace, and Rackspace accepts no responsibility for third-party products.

Rackspace cannot guarantee the accuracy of any information presented after the date of publication. Copyright &copy; 2016 Rackspace | Rackspace&reg;, Fanatical Experience&reg;, and other Rackspace marks are either registered service marks or service marks of Rackspace US, Inc. in the United States and other countries. All other trademarks, service marks, images, products, and brands remain the sole property of their respective holders and do not imply endorsement or sponsorship.

