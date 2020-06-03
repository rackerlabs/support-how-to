---
permalink: basic-ufw-firewall-management/
audit_date:
title: 'Basic ufw Firewall Management'
type: article
created_date: '2020-05-03'
created_by: Chris Silva
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

This article goes over some basic information about how to use your  Uncomplicated Firewall (`ufw`) software firewall. This is the default firewall solution for The Ubutu Operating system and Debian based distributions. 

**Note**: The steps in this article are not intended for use on Rackconnected servers. If you need to make changes to your firewall on a Rackconnected server, you will need to do this through your Dedicated Firewall Manager. 



### Prerequisites

You need to have the following prerequisites:

- Basic understanding of Secure Shell (SSH)
- Sudo or administrative access to your server
- A non-Rackconnected Cloud Server running a Debian based system


### What is `ufw`?

The Uncomplicated Firewall (`ufw`) is the default software firewall solution for Debian based operating systems. It is essentially a wrapper on top of `iptables` that allows for a more streamlined approach to managing the access on your server. 

### Anatomy of a rule

Below is the format for rules within `ufw`. 

       ufw [allow/deny] from [ip] to [dest/any] port [port]

**Note**: You can also specify ranges of ports by separating the ports by a colon. (Ex: 2222:3333) Additionally, you can specify a subnet mask for IP addresses. (Ex: 1.2.3.4/32) Furthermore, `ufw` allows for common service whitelisting by name. This means you can you specify `ssh` in the rule rather than specifying port 22. 

### Enabling and checking status of `ufw`

To check the status of `ufw` on your server, run the following command

       systemctl status ufw

If active, you should get a message showing `Status: active` as a response along with a listing of the rules on the server. If not, you can start the service by running `systemctl start ufw`.

Once the service is started, it's a good idea to list out the rules that are active in `ufw` before adding new rules. This can be done with the following command.

       ufw status

This will list out the active rules in `ufw` on the server. If you haven't added any rules yet, you should see output similar to the following:

```
# ufw status
Status: active

To                         Action      From
--                         ------      ----
22                         ALLOW       Anywhere 
```

**Note**: There may be additional rules in place for Managed Opeartions customers to allow Rackspace support access to the server from the Rackspace network. 


### `ufw` rule examples

Below are some basic examples and their function in `ufw`

| Command  | What it does  |
|:-:|:-:|---|---|
| ufw allow from 12.34.56.78 to any port 22  | Allows access from the specified IP on port 22 |
|  ufw allow from 12.34.56.78 | Allows access from the specified IP.  |
|  ufw deny from 12.34.56.78 | The packet information is logged on the server and iptables continues processing rules  |
|  ufw allow 3200:3205 | This command will allow connection to ports 3200 - 3205  |
|  ufw deny 22/tcp | This command will deny connections via tcp on port 22.  |
|  ufw allow in on eth1 | This command will allow all connections on the eth1 interface. This interface may also be called em1. You can verify the interface name by running `ifconfig` on your server.  |
|  ufw status numbered | This will display the active rules with a number for each line.  |
|  ufw delete 2 | When used in conjunction with 'ufw status numbered' this will remove the second line in the ufw rules list.  |


## Further reading

This guide only covers the basics of `ufw` but there are several other tasks and rules that can be configured to limit access to your server. For more information on `ufw` please see the following link: [ufw - Linux man page](https://manpages.ubuntu.com/manpages/precise/en/man8/ufw.8.html)
