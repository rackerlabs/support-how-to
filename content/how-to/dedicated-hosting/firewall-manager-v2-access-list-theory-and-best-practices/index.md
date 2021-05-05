---
permalink: firewall-manager-v2-access-list-theory-and-best-practices
audit_date: '2018-03-20'
title: Firewall Manager v2 access list theory and best practices
type: article
created_date: '2017-03-23'
created_by: Trevor Becker
last_modified_date: '2019-05-07'
last_modified_by: Cat Lookabaugh
product: Dedicated Hosting
product_url: dedicated-hosting
---

Before you modify your environment's access control list (ACL) rules in Firewall Manager v2, you should be familiar with ACL theory and best practices.

Firewall Manager v2 is a tool within the MyRackspace Portal. To learn more about the tool, see [Firewall Manager v2](/support/how-to/firewall-manager-v2).

### Firewall Manager v2 ACL process

To learn more about the ACL process, see [Firewall Manager v2 access-list rules](/support/how-to/firewall-manager-v2-access-list-rules).

### What is an ACL?

ACLs enable Cisco&reg; firewalls to filter traffic. They provide environments with network access control (NAC) by filtering network traffic and controlling whether packets are forwarded or blocked at the firewall's interfaces. As an aspect of the deep packet inspection (DPI) process, Cisco firewalls perform this access control lookup for each packet that attempts to traverse one of its interfaces.

The ACLs control the traffic that attempts to enter the internal networks from an external, unsecured network. If you do not use ACLs, the Cisco firewall's default security policy of _security-levels_ is active, which does not provide the highest level of network security.

### What is an access control entry?

An access control entry (ACE) is an individual entry in an ACL. ACEs are referred to as _rules_ in Firewall Manager v2. The Cisco firewall allows you to configure only one ACL per interface per direction. This ACL can contain as many ACEs, or rules, as necessary.

### ACL best practices and recommendations

The security of your Rackspace environment begins at your Cisco firewall. Misconfigurations in network access policies on your firewall can lead to unwanted network exposure and potential compromise. To remain secure and follow compliance requirements, use the following best practices and recommendations:

   - Be as specific as possible when setting up ACLs. Minimize the size of the source and destination traffic in your ACL rules when possible.

   - Do not define the destination as **any** (your entire Rackspace environment) when only one destination server needs to be accessed.

   - Do not allow traffic from any source to any destination of the Internet Protocol (IP), Transmission Control Protocol (TCP), or User Datagram Protocol (UDP). Allowing traffic to these destinations effectively turns your security platform into a router because it does not block any packets from reaching any destination in your environment over those protocols.

   - Do not allow all traffic to a destination or group of destinations. (Do not use **permit ip any [host]** or **permit ip any [object-group]**).

   - Open globally only ports (defining source of **any**) that are considered a generally accepted best practice. Examples of ports that **should not be opened globally** are **22 - SSH**, **1433 - Microsoft&reg; SQL**, **3306 - MySQL&reg;**, and **3389 - Remote Desktop Protocol (RDP)**.
   
   - If you received an alert from Rackspace regarding a firewall rule that is permissive, consider whether the rule was added inadvertently. If this rule was added intentionally, you don't need to take any action. However, you might make the rule more accurate by defining the host IPs or networks allowed in your environment. If the rule was added by accident or is not necessary, remove it.


### Rule order and execution

Cisco firewalls use line numbers attached to ACEs to identify the execution order of the ACL. When you create a new ACL rule in Firewall Manager v2, the rule is added to the end of the ACL by default. Depending on the content of the ACL, this default action might or might not be what you intend to configure. You often need to place an ACL rule in a customized location within the ACL.

Cisco firewalls process traffic by first-match, from top down within the ACL applied to the interface. When a connection that is being inspected matches an ACL rule, the processing for that lookup ends. For example, if an encompassing deny rule is above a newly created rule, that deny rule prevents the new rule from triggering.

Cisco firewalls also use a fail-close approach that means that there is an implicit deny all rule at the end of each ACL. If traffic is not explicitly permitted, then it is implicitly denied.

### ACL for DMZs and other back-end segments

A demilitarized zone (DMZ) is a separate network segment that is used to physically and logically separate networks. Our Cisco firewalls use ACLs to perform NAC on DMZs and other back-end segments.

When you create multiple segments behind Cisco firewalls, a best practice is to explicitly deny traffic from lower-trusted segments to higher-trusted segments. This best practice enables your firewall to isolate your inside segment from not only the traffic coming from the Internet, but also the traffic coming from other segments behind the firewall that lie within your Rackspace environment.

An example is an environment that has both a DMZ segment and an INSIDE segment. You need to create an ACL rule that denies traffic sourcing from the DMZ segment destined to the INSIDE segment. Any exceptions to this (for example, Active Directory ports) are configured above the deny line. This technique allows you to deny all traffic by default, and then specify the individual access required as you find business needs for resources in the two segments to communicate.

### ACL standard rule names and functions

Each environment at Rackspace is unique. However, we have implemented the following standards in each firewall environment to make some aspects of the ACL configuration uniform.

#### 101 ACL

The 101 ACL is applied to the outside interface for traffic ingressing, or coming in, from the Internet. The 101 ACL defines what traffic from the Internet is allowed to enter into the environment. This ACL is your Rackspace environment's first line of defense. If traffic is not explicitly permitted, traffic is implicitly denied by default.

**Warning:** The 101 ACL is the gatekeeper for the network security of your environment. Do not open more access than is required. See the preceding best practices section for details.

#### 100, inside, or FW-INSIDE ACL

The name of this ACL is less standardized. Although the name varies, the purpose is completely standardized. This ACL is applied to the inside segment for egressing traffic, which means that it is applied for traffic sourcing from the inside segment (your Rackspace servers) that is destined to go anywhere, whether it is the Internet or another segment in your environment. The default for this ACL is **permit ip any any**.

This ACL gives your Rackspace servers unfiltered outbound communication, but only if the Rackspace server initiated the traffic. This access is useful when servers need outbound communication for software updates.

We recommend that you lock down the outbound filtering when possible. If you want to do that, send a request to Rackspace Support and mention this part of the article.

#### 200 and up ACLs

The Rackspace standard for site-to-site Virtual Private Networks (VPNs) is to use a cryptographic map ACL name starting at 200. Each site-to-site VPN configuration increments by 1. Be cautious if you update a VPN ACL. The firewall's cryptographic engine uses this ACL as its means to build the encryption domains and SPIs for VPN tunnels. If you update the ACL with IP space that overlaps with another VPN tunnel, you can cause network degradation for these VPN tunnels.

#### FW-DMZ-SVRS, DMZ, or 99 ACL

This ACL is dedicated to your DMZ segment. If you have a DMZ, you must have a deny statement that prevents the DMZ from communicating with the INSIDE segment. The deny statement prevents intersegment communication. If intersegment communication is required, you must create a permit ACL rule and move it to above the encompassing deny statement.

#### nonat or 102 ACL

This ACL is dedicated to Network Address Translation (NAT) bypass, or the feature called NAT0, and is used in Cisco firewall code versions earlier than 8.3. On code versions earlier than 8.3, the Rackspace standard for Cisco firewalls requires NAT to occur as a packet moves from one interface to another.

Occasionally, you might not want this action to occur. An example is when two internal segments are communicating with each other or VPN traffic. If your firewall is on a code version later than 8.3, this NAT bypass ACL is no longer needed, and you can remove it. This syntax is likely the remnant of unused configuration after a mass code upgrade.

#### CLIENTVPN, ANYCONNECT-VPN, or 103 ACL

This ACL is dedicated to your AnyConnect&reg; or IP security (IPsec) client VPN's access. This ACL determines what traffic is sent across your client VPN. You can have a second ACL applied to individual access further filtering this VPN traffic.

#### RackConnect ACL

This ACL is dedicated to your RackConnect v2 configuration. RackConnect v2 ACL updates can occur only through the **Network Policies** section of the RackConnect v2 portal. Currently, the Firewall Manager v2 does not permit ACL rules that contain the RackConnect subnet ranges of 10.76.0.0/12 or 10.208.0.0/12.

#### 300 or PNAT ACL

This ACL is dedicated to policy NAT ACLs on Cisco firewall code versions earlier than 8.3.

#### CLOUD-PAT ACL

This ACL is used for Port Address Translation (PAT) for your Cloud Servers environment.

#### "cap"-in "cap"-out ACLs

These "cap" variation ACLs set up captures on the firewall. Such ACLs are typically used to help with troubleshooting. When troubleshooting is complete, the best practice is to remove these ACLs to help keep your configuration clean. If you see one left behind, it is safe to remove it.
