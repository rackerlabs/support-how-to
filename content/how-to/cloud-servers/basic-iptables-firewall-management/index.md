---
permalink: basic-iptables-firewall-management
audit_date: '2020-06-09'
title: 'Basic iptables firewall management'
type: article
created_date: '2020-06-03'
created_by: Chris Silva
last_modified_date: '2020-06-09'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article provides some basic information about how to use your `iptables` software firewall. This firewall is the default firewall solution for Red Hat® Enterprise Linux® (RHEL&reg;) 6 and CentOS&reg; 6 based distributions. 

**Note**: The steps in this article are not intended for use on RackConnect&reg; servers. If you need to make changes to your firewall on a RackConnect server, you need to use your Dedicated Firewall Manager. 

### Prerequisites

You need to have the following prerequisites:

- Basic understanding of SecureShell&reg; (SSH)
- Sudo or administrative access to your server
- A non-RackConnect Cloud Server running RHEL 6 or CentOS 6.

### What is "iptables" and how does it work?

`iptables` is the default Linux software firewall solution. By using the netfilter kernel module, `iptables` can handle the incoming and outgoing network traffic. `iptables` uses the chains of rules configured as part of a table on the server. A table groups similar chains that accomplish a specific task. 

### Tables, chains, and rules

Each table has a set of default chains. This article refers to the **filter** table, which contains the **INPUT**, **FORWARD**, and **OUTPUT** chains. The rules in these chains are read and processed from top to bottom. 

- **INPUT**: This chain handles incoming traffic that is destined for the server.

- **FORWARD**: This chain handles traffic that comes to the server but is destined for another device.

- **OUTPUT**: This chain is used for outgoing packets that originate on the server. 

### Targets, actions, and filters

The following table shows some basic targets and actions in `iptables` when traffic is sent to the server:

| Name  | Description  |
|---|---|
| ACCEPT  | Traffic is accepted, and no further rules are processed. |
|  DROP | The packet is blocked, and no further rules are processed. No response sent to sender.  |
|  LOG | The packet information is logged on the server, and iptables continues processing rules.  |
|  REJECT | Similar to the DROP packet, but sends a response to the sender.  |

| Filter  | What it does  |
|---|---|
| `-p (protocol)`  | The protocol of the packet. The specified protocol can be one of `tcp`, `udp`, `icmp`, or the special keyword `all`. |
|  `-s, --source` | The source IP address of the packet.  |
|  `-d --destination` | The destination for the packet. |
|  `-sport` | The source port to match. |
|  `-dport` | The destination port to match. |
|  `-i` | The interface the packet is received. |

### The anatomy of a rule

The following rule is an example of an `iptables` rule:

       iptables -I INPUT -i eth0 -s 192.168.1.1 -p tcp --dport 22 -j ACCEPT

In this example, traffic that comes from the source IP address, `192.168.1.1`, over the `tcp` protocol is accepted on the `eth0` interface at the destination port `22`. This rule is added to the top of the `INPUT` chain.

### How do "iptables" rules work?

One way to limit incoming and outgoing network traffic on server is to implement firewall rules. On a RHEL or CentOS 6 server, the default software firewall solution is `iptables`. `iptables` allows you to setup a configuration similar to that of a dedicated firewall that is running on your server. You configure these rules in a `CHAIN` depending on the rule. This article discusses the `INPUT` chain, which is the default chain to accept traffic through `iptables`. 

### Enable and check the status of "iptables"

Before you add new rules in `iptables`, you should verify that the service is running and list the current rules.  

To check the status of `iptables`, run the following command:

      service iptables status

You should get output indicating that the service is `Active` on the server. If not, you can start the service with the `service iptables start` command.

After the service starts, you can list the rules by using the following command:

       iptables -L

If you haven't configured any rules yet, the output looks similar to the following example:


```
Chain INPUT (policy ACCEPT)
target     prot opt source               destination

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
```


### "iptables" examples

The following examples show some rules in `iptables` and their functionality within `iptables`. 

#### INSERT versus APPEND

With `iptables`, the `-I` flag inserts the rule to the top of the selected chain, and the `-A` flag appends the new rule to the bottom of the selected chain. This is important because the rules are read from top to bottom. Therefore, if there is a rule at the top that blocks all incoming traffic and you use `-A` to append a rule that accepts traffic from an IP, the rule you appended is blocked by the first rule. You should consider the configuration to determine if `-A` or `-I` is the better option for the change being made on the server. Always review the current rules before making changes.

A good rule is to append all rules that end in a drop and to insert all rules that accept a packet.


| Example command  | What it does  |
|---|---|
|  `iptables -L` | This command lists all of the `iptables` rules.  |
|  `iptables -L --line-numbers` | This command lists all of the `iptables` rules and provides a line number by each rule.  |
|  `iptables -D INPUT 2` | When used in conjunction with `iptables -L --line-numbers`, this command removes the second rule in the `INPUT` chain. This is the best method to ensure the correct rule is removed.  |
| `iptables -A INPUT -m tcp -p tcp -s 12.345.67.89 --dport=22 -j DROP`  | This rule drops traffic on port 22 from the source IP through the INPUT chain via TCP. This rule is appended to the top of the INPUT chain. |
|  `iptables -A INPUT -s 12.345.67.89 -j DROP` | This rule drops all incoming connections from the source IP. This example is appended to the top of the `INPUT` chain. |
|  `iptables -D INPUT -m tcp -p tcp -s 12.345.67.89 --dport=22 -j ACCEPT` | This command deletes the specified rule from the `INPUT` table. You can use the `-D` flag with any chain or rule, but we recommend removing by line number as shown above.  |
|  `iptables -I INPUT -m tcp -p tcp -s 12.345.67.89 --dport=22 -j ACCEPT` | This rule accepts traffic on port 22 from the source IP through the `INPUT` chain via TCP. This rule is inserted to the `INPUT` chain.  |
|  `iptables -I INPUT -s 12.345.67.89 -j ACCEPT` | This rule accepts all incoming connection from the source IP via any protocol on any port. This rule is inserted to the `INPUT` chain.  |
|  `service iptables save` | By default, `iptables` does not provide persistence. This command allows you to save the rules.  |
|  `service iptables reload` | This command reloads the iptables service to allow for processing of new rules.  |



### Further reading

This article touches on only the basics of `iptables`. There are several other tasks and rules that you can configure to limit access to your server. For more information on `iptables`, you can review the `man` page for iptables at [iptables - Linux man page](https://linux.die.net/man/8/iptables).
