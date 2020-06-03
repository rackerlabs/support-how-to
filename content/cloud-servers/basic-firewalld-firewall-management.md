---
permalink: basic-firewalld-firewall-management/
audit_date:
title: 'Basic firewalld Firewall Management'
type: article
created_date: '2020-06-03'
created_by: Chris Silva
last_modified_date: 
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

This article goes over some basic information about how to use your `firewalld` software firewall. This is the default firewall solution for RHEL 6 and CentOS 6 based distributions. 

**Note**: The steps in this article are not intended for use on Rackconnected servers. If you need to make changes to your firewall on a Rackconnected server, you will need to do this through your Dedicated Firewall Manager. 

### Prerequisites

You need to have the following prerequisites:
- Basic understanding of Secure Shell (SSH)
- Sudo or administrative access to your server
- A non-Rackconnected Cloud Server running RHEL 7 or CentOS 7.

### What is firewalld?

FirewallD is the default and most common software firewall solution used in RHEL/CentOS 7. FirewallD is a wrapper on iptables that uses different syntax to apply new rules.

### How does firewalld work?

The `firewalld` service uses zones to control the firewall access. Zones are pre-constructed rulesets for various trust levels, you would likely have a zone for a given location or scenario (e.g. home, public, trusted, etc.). Different zones allow different network services and incoming traffic types while denying everything else. After enabling `firewalld` for the first time, `Public` will be the default zone.

Here are some examples of zones:

| Zone  | What it does  |
|:-:|:-:|---|---|
| public  | This is the ‘external’ zone or internet facing zone. You do not trust connections originating from the outside world so only certain services will be allowed. |
|  internal | This is traditionally the ‘inside’ of the network behind the firewall.  |
|  dmz | Used for computers located in a DMZ (demilitarized zone). Only certain incoming connections are allowed and access to the internal network is heavily restricted.  |
|  drop | Traffic destined for the drop zone will be silently dropped without any reply. Use this as a ‘blackhole’ for malicious IPs |
|  trusted | All connections are accepted. Used sparingly.  |


### Enabling and checking the status of firewalld

Before getting started, you need to make sure that `firewalld` is running on your server. This can be checked with the following command:

       firewall-cmd --state

If the service is started, you should receieve output indicating the service is running. 

If the service is not running, you can start the service by running the following command:

       systemctl start firewalld

You can also enable `firewalld` to start on boot by running the following command:

       systemctl enable firewalld


### Zones in firewalld

Before you add rules, you'll need to review your default settings in firewalld. 

To check the default zone in `firewalld` you can run the following command:

       firewall-cmd --get-default-zone

By default, this zone should be set to `public`. You can see other zones using the following command:

       firewall-cmd --get-zones

This will list out the available zones in firewalld. 

As noted previously, the different zones in  `firewalld` have different functionality. You can specify the zone and ethernet controller connections to get more control over the access to you server, but for our purposes, we will be using the default configuration and modifying the public zone. 


### Basic firewalld rule anatomy

When writing a firewalld rule, there are a few basic items you need in the rule. 

1. Specify the command.

2. Specify the zone and change.

3. Set persistence.


Putting that together, you'd get something like the following example:

       firewall-cmd --zone=public --add-source=127.0.0.1 --permanent

This command will allow access from the IP `127.0.0.1` to the public zone. 


There are other flags that can be used, but this is the basic construction of a firewalld rule. 


### Permanent Flag and Rich Rules

In `firewalld` there are additional flags that can be used to set persistence for rules by using the **permanent** flag as well as allowing a bit more fine tuning of your rules by use of **rich rules**. 

## Permanent Flag

Firewalld utilizes the --permanent flag to allow persistent rules. Using this flag will not activate the rule in the running config. In order to ensure the rule persists, you need to add the rule a second time with the --permanent flag. In most cases, adding the permanent flag is recommended. 

Example:

       firewall-cmd --add-source=12.345.67.89 --zone=trusted --permanent


## Rich Rules

Rich rules provide a much greater level of control through more custom granular options. Rich rules can also be used to configure logging, masquerading, port forwarding, and rate limiting.

Example:

       firewall-cmd --add-rich-rule='rule family=ipv4 source address="123.45.69.78" port port="11" protocol=tcp accept' --permanent


**Note**: While Rich Rules can be very useful and can allow for greater control of your server, a mixture of Rich Rules and regular rules can lead to a messy configuration. In most cases, using one or the other or only using rich rules for certain rules (such as SSH access) can help keep your setup clean.


### Example commands

Finally, here are a few examples of `firewalld` commands. 

| Command  | What it does  |
|:-:|:-:|---|---|
| firewall-cmd --add-source=12.345.67.89 --zone=trusted  | This command will accept traffic from the specified IP to the trusted zone. |
|  firewall-cmd --zone=drop --add-source=12.345.67.89/24 | This command will drop traffic from the specified IP range. |
|  firewall-cmd --zone=public --add-service=ssh	 | This command will allow traffic via SSH on the public zone. |
|  firewall-cmd --zone=public --list-all | This will list out all of the specifications set for the zone such as sources, services, rich rules, etc. |
|  firewall-cmd --add-rich-rule='rule family=ipv4 source address="123.456.789.123" port port="22" protocol=tcp accept' --permanent | Rich rule to allow access from the specified IP on port 22 over TCP on the public zone.  |


### Further reading

This document only scratches the surface of the possibilities with `firewalld`. You can review the man page for `firewalld` or review the official documentation for `firewalld` at this link: [https://firewalld.org/documentation/man-pages/firewall-cmd.html](https://firewalld.org/documentation/man-pages/firewall-cmd.html)
