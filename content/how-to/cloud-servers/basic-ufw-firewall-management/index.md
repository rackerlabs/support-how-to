---
permalink: basic-ufw-firewall-management
audit_date: '2020-06-09'
title: 'Basic ufw firewall management'
type: article
created_date: '2020-06-03'
created_by: Chris Silva
last_modified_date: '2020-06-09'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article provides some basic information about how to use the Uncomplicated Firewall (`ufw`) software firewall. This firewall is the default firewall solution for the Ubutu&reg; operating system and Debian&reg;-based distributions. 

**Note**: The steps in this article are not intended for use on RackConnect&reg; servers. If you need to make changes to your firewall on a RackCconnect server, you need to use your Dedicated Firewall Manager. 

### Prerequisites

You need to have the following prerequisites:

- Basic understanding of SecureShell&reg; (SSH)
- Sudo or administrative access to your server
- A non-RackConnect Cloud Server running a Debian-based system

### What is "ufw"?

The Uncomplicated Firewall (`ufw`) is the default software firewall solution for Debian-based operating systems. It is essentially a wrapper on top of `iptables` that allows for a more streamlined approach to managing the access on your server. 

### Anatomy of a rule

The following example shows the format for rules within `ufw`: 

       ufw [allow/deny] from [ip] to [dest/any] port [port]

**Note**: You can also specify ranges of ports by separating the ports by a colon, such as `2222:3333`. Additionally, you can specify a subnet mask for IP addresses, such as `1.2.3.4/32`. Furthermore, `ufw` allows for common service whitelisting by name. This means you can you specify `ssh` in the rule rather than specifying port 22. 

### Enabling and checking status of "ufw"

To check the status of `ufw` on your server, run the following command:

       systemctl status ufw

If it's active, you should get a message showing `Status: active` along with a listing of the rules on the server. If not, you can start the service by running the `systemctl start ufw` command.

After the service starts, list the rules that are active in `ufw` before you add new rules. Use the following command to list the rules:

       ufw status

This lists the active rules in `ufw` on the server. If you haven't added any rules yet, you should see output similar to the following:


```
# ufw status
Status: active

To                         Action      From
--                         ------      ----
22                         ALLOW       Anywhere 
```


**Note**: There might be additional rules in place for Managed Operations customers to allow Rackspace support access to the server from the Rackspace network. 


### "ufw" rule examples

The following examples show some basic rules and their function in `ufw`:

| Command  | What it does  |
|---|---|
| `ufw allow from 12.34.56.78 to any port 22`  | This command allows access from the specified IP address on port 22. |
|  `ufw allow from 12.34.56.78` | This command allows access from the specified IP.  |
|  `ufw deny from 12.34.56.78` | The packet information is logged on the server and `iptables` continues processing rules.  |
|  `ufw allow 3200:3205` | This command allows connection to ports 3200 through 3205.  |
|  `ufw deny 22/tcp` | This command denies connections via `tcp` on port 22.  |
|  `ufw allow in on eth1` | This command allows all connections on the `eth1` interface. This interface may also be called `em1`. You can verify the interface name by running `ifconfig` on your server.  |
|  `ufw status numbered` | This command displays the active rules with a number for each line.  |
|  `ufw delete 2` | When used in conjunction with `ufw status numbered`, this command removes the second line in the `ufw` rules list.  |


### Further reading

This article covers only the basics of `ufw`. There are several other tasks and rules that you can configure to limit access to your server. For more information on `ufw`, see [ufw - Linux man page](https://manpages.ubuntu.com/manpages/precise/en/man8/ufw.8.html).
