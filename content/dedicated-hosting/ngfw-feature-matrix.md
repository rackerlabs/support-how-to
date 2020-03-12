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

<table>
  <tr>
    <th colspan="4">NGFW Support and Feature Matrix</th>
  </tr>
  <tr>
    <td colspan="2">NetSec Support for Palo Alto Networks</td>
    <td colspan="2">NetSec Support for Cisco (FTD)</td>
  </tr>
  <tr>
    <td colspan="4">Standard Firewall Features</td>
  </tr>
  <tr>
    <td>Interfaces</td>
    <td>Supported</td>
    <td>Supported</td>
    <td>Interfaces</td>
  </tr>
  <tr>
    <td>IPv4 Routing</td>
    <td>Supported</td>
    <td>Supported</td>
    <td>IPv4 Routing</td>
  </tr>
  <tr>
    <td>IPv6 Routing</td>
    <td>Supported</td>
    <td>Supported</td>
    <td>IPv6 Routing</td>
  </tr>
  <tr>
    <td>NAT</td>
    <td>Supported</td>
    <td>Supported</td>
    <td>NAT</td>
  </tr>
  <tr>
    <td>Packet filtering</td>
    <td>Supported</td>
    <td>Supported</td>
    <td>Packet filtering</td>
  </tr>
  <tr>
    <td>Site-to-Site VPN</td>
    <td>Supported</td>
    <td>Supported</td>
    <td>Site-to-Site VPN</td>
  </tr>
  <tr>
    <td>Global Protect Basic (Client VPN)</td>
    <td>Supported</td>
    <td>Supported</td>
    <td>Global Protect Basic (Client VPN)</td>
  </tr>
  <tr>
    <td>Management</td>
    <td>Supported</td>
    <td>Supported</td>
    <td>Management</td>
  </tr>
  <tr>
    <td>High Availability (HA - Active/Standby</td>
    <td>Supported</td>
    <td>Supported</td>
    <td>High Availability (HA - Active/Standby</td>
  </tr>
  <tr>
    <td>Routed Mode</td>
    <td>Supported</td>
    <td>Supported</td>
    <td>Routed Mode</td>
  </tr>
  <tr>
    <td>TFA (DUO</td>
    <td>Supported</td>
    <td>Supported</td>
    <td>TFA (DUO) - FDM Only</td>
  </tr>
  <tr>
    <td>RackConnect</td>
    <td>Version 3 Only</td>
    <td>Version 3 Only</td>
    <td>RackConnect</td>
  </tr>
</table>


<table>
  <tr>
    <th colspan="4">NGFW Features - Threat Intelligence Feeds</th>
  </tr>
  <tr>
    <td>Threat Prevention (IPS)</td>
    <td>NetSec - Configure Only</td>
    <td>NetSec - Configure Only</td>
    <td>Threat Prevention (IPS)</td>
  </tr>
  <tr>
    <td>Geo Fencing</td>
    <td>Supported</td>
    <td>Supported</td>
    <td>Geo Fencing *updates included with any advanced license</td>
  </tr>
  <tr>
    <td>Anti-Virus</td>
    <td>Supported (Deafult template)</td>
    <td>Roadmap item</td>
    <td>Umbrella</td>
  </tr>
  <tr>
    <td>Anti-Spyware</td>
    <td>Supported (Deafult template)</td>
    <td></td>
    <td>Security Intelligence DNS Security</td>
  </tr>
  <tr>
    <td>Vulnerability Protection</td>
    <td>Supported (Deafult template)</td>
    <td>Supported</td>
    <td>Security Intelligence for IP and URL</td>
  </tr>
  <tr>
    <td>URL Filtering</td>
    <td>Supported</td>
    <td>Supported</td>
    <td>URL Filtering (URL)</td>
  </tr>
  <tr>
    <td>SSL Inbound Decryption</td>
    <td>Supported</td>
    <td>Supported</td>
    <td>SSL Inbound Decryption</td>
  </tr>
  <tr>
    <td>SSL Outbound Decryption (requires PKI infrastructure)</td>
    <td>Roadmap Item</td>
    <td>Roadmap Item</td>
    <td>SSL Outbound Decryption (requires PKI infrastructure)</td>
  </tr>
  <tr>
    <td>SSH Decryption</td>
    <td>Roadmap Item</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>DNS Sinkhole</td>
    <td>Supported</td>
    <td>Supported</td>
    <td>DNS Sinkhole</td>
  </tr>
  <tr>
    <td>DDOS Profies</td>
    <td>Supported (Deafult template)</td>
    <td>Roadmap item</td>
    <td>Rate-Based Attack Prevention</td>
  </tr>
  <tr>
    <td>Profiles</td>
    <td>Supported (Deafult template)</td>
    <td>Roadmap item</td>
    <td>Profiles (Based on Server OS)</td>
  </tr>
</table>



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
