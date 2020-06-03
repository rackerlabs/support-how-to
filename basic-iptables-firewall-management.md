---
permalink: basic-iptables-firewall-management/
audit_date: 
title: 'Basic iptables Firewall Management'
type: article
created_date: '2020-06-03'
created_by: Chris Silva
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

This article goes over some basic information about how to use your `iptables` software firewall. This is the default firewall solution for RHEL 6 and CentOS 6 based distributions. 

**Note**: The steps in this article are not intended for use on Rackconnected servers. If you need to make changes to your firewall on a Rackconnected server, you will need to do this through your Dedicated Firewall Manager. 

### Prerequisites

You need to have the following prerequisites:
- Basic understanding of Secure Shell (SSH)
- Sudo or administrative access to your server
- A non-Rackconnected Cloud Server running RHEL 6 or CentOS 6.

### What is `iptables` and how does it work?

`iptables` is the default Linux software firewall solution. By use of the netfilter kernel module, `iptables` is able to handle the incoming and outgoing network traffic. `iptables` utilizes Chains of Rules that are configured as part of a Table on the server. A Table groups similar Chains that accomplish a specific task. 

## Tables, Chains, and Rules

Each Table has a set of default Chains. For the purposes of this document, we'll be discussing the **filter** Table which contains the **INPUT**, **FORWARD**, and **OUTPUT** Chains. The rules in these chains are read and processed from top to bottom. 

      INPUT - This chain handles incoming traffic that is destined for the server.

      FORWARD -	This chain handles traffic that comes to the server but is destined for another device.

      OUTPUT -	This chain is used for outgoing packets that originate on the server. 

## Targets, Actions, and Filters

The following table goes over some basic Targets and Actions in `iptables` when traffic is sent to the server.

| Name  | Description  |
|:-:|:-:|---|---|
| ACCEPT  | Traffic is accepted and no further rules are processed. |
|  DROP | The packet is blocked and no further rules are processed. No response sent to sender.  |
|  LOG | The packet information is logged on the server and iptables continues processing rules  |
|  REJECT | Similar to the DROP packet, but will send a response to the sender.  |

| Filter  | What it does  |
|:-:|:-:|---|---|
| -p (protocol)  | The protocol of the packet.  The specified protocol can be one of tcp, udp, icmp, or the special keyword "all”. |
|  -s, --source | The source IP address of the packet.  |
|  -d --destination | The destination for the packet. |
|  -sport | The source port to match. |
|  -dport | The destination port to match. |
|  -i | The interface the packet is received |

## The anatomy of a rule

Below is an example of an `iptables` rule:

       iptables -I INPUT -i eth0 -s 192.168.1.1 -p tcp --dport 22 -j ACCEPT

In this example, traffic that comes from the source IP `192.168.1.1` over the **tcp** protocol will be accepted on the **eth0** interface at the destination port **22**. This rule is being added to the top of the INPUT chain


### How do `iptables` rules work?

One way to limit incoming and outgoing network traffic on server is by implementation of firewall rules. On a RHEL/CentOS 6 server, the default software firewall solution is `iptables`. `iptables` allows a user to setup configuration similar to that of a dedicated firewall that is running on your server. These rules are configured in a `CHAIN` depending on the rule. For the purposes of this guide, we'll be discussing the `INPUT` chain. This is the default `CHAIN` to accept traffic through `iptables`. 

### Enabling and checking status of `iptables`

Before adding new rules in `iptables` it's a good idea to check if the service is running and list out the current rules. This can be accomplished with the following commands. 

To check the status of `iptables` run the following command:

      service iptables status

You should get output indicating that the service is `Active` on the server. If not, you can start the service with `service iptables start`.

Once the service is started, you can list out the rules using the following command:

       iptables -L

If you haven't configured any rules yet, you will see the following output:

```
Chain INPUT (policy ACCEPT)
target     prot opt source               destination

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
```


### `iptables` examples

Below are a few examples of some rules in `iptables` and their functionality within `iptables`. 

**INSERT vs APPEND**: With iptables, the `-I` flag will add the rule to the top of the selected chain while the `-A` flag will add the new rule to the bottom of the selected chain. This is important because the rules are read from top to bottom. This can cause problems because if there is a rule at the top that blocks ALL incoming traffic and you use `-A` to add a rule that accepts traffic from an IP, it will be blocked by the first rule. It's important to consider the configuration to determine if -A or -I is the better option for the change being made on the server, so you should always review the current rules before making changes.
A good rule is to APPEND all rules that end in a DROP and to INSERT all rules which ACCEPT a packet.


| Example Command  | What it does  |
|:-:|:-:|---|---|
|  iptables -L | This command will list out all all of the iptables rules.  |
|  iptables -L --line-numbers | This command will list out all of the iptables rules and provide a line number by each rule.  |
|  iptables -D INPUT 2 | When used in conjunction with iptables -L --line-numbers, this command will remove the second rule in the INPUT chain. This is the best method to ensure the correct rule is removed.  |
| iptables -A INPUT -m tcp -p tcp -s 12.345.67.89 --dport=22 -j DROP  | This rule will DROP traffic on PORT 22 from the source IP through the INPUT chain via TCP. This rule is APPENDED to the top of the INPUT chain. |
|  iptables -A INPUT -s 12.345.67.89 -j DROP | This rule will DROP all incoming connections from the source IP. This example is APPENDED to the top of the input chain. |
|  iptables -D INPUT -m tcp -p tcp -s 12.345.67.89 --dport=22 -j ACCEPT | This command will DELETE the specified rule from the INPUT table. The -D flag can be used with any chain/rule, but the best way to be certain would be removing by line number as shown above.  |
|  iptables -I INPUT -m tcp -p tcp -s 12.345.67.89 --dport=22 -j ACCEPT | This rule will ACCEPT traffic on PORT 22 from the source IP through the INPUT chain via TCP. This rule is INSERTED to the INPUT chain.  |
|  iptables -I INPUT -s 12.345.67.89 -j ACCEPT | This rule will ACCEPT all incoming connection from the source IP via any protocol on any port. This rule is INSERTED to the INPUT chain.  |
|  service iptables save | By default, iptables does not provide persistence. These commands allow for saving the rules.  |
|  service iptables reload | Reloads the iptables service to allow for processing of new rules.  |


## Further reading

This guide only touches on the basics of `iptables` and there are several other tasks and rules that can be configured to limit access to your server. For more information on `iptables` you can review the man page for iptables at this link: [iptables - Linux man page](https://linux.die.net/man/8/iptables) 
