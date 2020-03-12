---
permalink: ngfw-support-and-feature-matrix/
audit_date: '2020-03-12'
title: NGFW Feature Matrix
type: article
created_date: '2020-03-12'
created_by: Chad Sterling
last_modified_date: '2020-03-12'
last_modified_by: Chad Sterling
product: Dedicated Hosting
product_url: dedicated-hosting
---

### NGFW Support and Feature Matrix

NGFW Support and Feature Matrix
---
| **Netsec Support for Palo Alto Networks** | **NetSec Support for Cisco (FTD)** |
---| ---|
**Standard Firewall Features**
---
 |  |  |  |  |
 --- |--- |--- | ---|
|   Interfaces | Supported  | Supported  | Interfaces  |
|  IPv4 Routing | Supported  | Supported  |  IPv4 Routing   |
|  IPv6 Routing | Supported  | Supported  | IPv6 Routing  |
|  NAT          | Supported  | Supported  | NAT           |
| Packet Filtering | Supported | Supported | Packet Filtering |
| Site-to-Site VPN | Supported | Supported | Site-to-Site VPN|
| Global Protect Basic (Client VPN) | Supported | Supported | Anyconnect Plus|
| Management | Supported | Supported | Management|
| High Availability (HA - Active/Standby) | Supported | Supported | High Availability (HA - Active/Standby)|
| Routed Mode | Supported | Supported | Routed Mode|
| TFA (DUO) | Supported | Supported | TFA (DUO) - FDM Only|
| RackConnect | Version 3 Only | Version 3 Only | RackConnect|


NGFW Features - Threat Intelligence Feeds
---
 |  |  |  |  |
 --- |--- |--- | ---|
|  Threat Prevention (IPS) | NetSec - Configure Only | NetSec - Configure Only  | Threat Prevention (IPS)  |
| Geo Fencing  | Supported  | Supported  |  Geo Fencing *updates included with any advanced license  |
|  Anti-Virus | Supported (Default Template)  | Roadmap Item   | Umbrella   |
|  Anti-Spyware          | Supported (Default Template)  |   | Security Intelligence DNS Security          |
| Vulnerability Protection | Supported (Default Template) | Supported | Security Intelligence for IP and URL |
| URL Filtering| Supported | Supported | URL Filtering (URL)|
| SSL Inbound Decryption | Supported | Supported | SSL Inbound Decryption|
| SSl Outbound Decryption (requires PKI infrastructure) | Roadmap Item| Roadmap Item | SSl Outbound Decryption (requires PKI infrastructure)|
| SSH Decryption | Roadmap Item| | |
| DNS Sinkhole | Supported | Supported | DNS Sinkhole|
| DDoS Profiles| Supported (Default Template)  | Roadmap Item | Rate-Based Attack Prevention|
| Profiles| Supported (Default Template) | Roadmap Item| Profiles (Based on Server OS)|



MALWARE Protection
---
| **Wildfire** | **Threat Grid Cloud** |
---| ---|
 |  |  |  |  |
 --- |--- |--- | ---|
|  Wildfire basic | Supported (Default Template) | Supported on Firepower hardware only | Anti-Malware Protection (AMP for Networks) |
| Wildfire Signature Updates (24-48 hours)  | Supported  | Not supported on ASA-X hardware  |  Anti-Malware Protection (AMP for Networks)  |
|  Instant Signature Updates (Less than 5 minutes) | Supported |   |  |
|  Wildfire API        | Roadmap Item |   |  |
|  Wildfire Appliance | Roadmap Item | Roadmap Item | Threat Grid Appliance |
| Autofocus | Roadmap Item |  |  |  |
| Wildfire Advanced file support | Roadmap Item | | |
| Data filtering and File Blocking | Supported (Default Template) | Supported | File Type Filtering and Blocking |


Endpoint Protection
---
 |  |  |  |  |
 --- |--- |--- | ---|
|  Traps | Roadmap Item| Roadmap Item | Anti-Malware Protection (AMP for Endpoints)  |

Endpoint Protection
---
 |  |  |  |  |
 --- |--- |--- | ---|
|  Global Protect Advanced | Professional Services Required| Professional Services Required | Anti-Malware Protection (AMP for Endpoints) |
|  Global Protect HIP checks | Professional Services Required |  |  |
|  Global Protect Mobile Support| Professional Services Required |  |  |
|  Global Protect IPv6 Support| Professional Services Required |  |  |
|  Global Protect Clientless Mode| Professional Services Required |  |  |

Features not supported:
---
 |  |  |  |  |
 --- |--- |--- | ---|
| Dynamic routing protocols OSPF/OSPFv3 are reasonable endeavor. |
| Active/Active Failover and Clustering are not supported. |
| IPsec DMVPN is not supported. |