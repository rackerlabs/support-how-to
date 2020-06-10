---
permalink: basic-firewalld-firewall-management/
audit_date: '2020-06-10'
title: 'Basic firewalld Firewall Management'
type: article
created_date: '2020-06-03'
created_by: Chris Silva
last_modified_date: '2020-06-10'
last_modified_by: William Loy
product: Cloud Servers
product_url: cloud-servers
---

This article goes over basic information about how to use your `firewalld` software firewall. This is the default firewall solution for RHEL 6&reg; and CentOS 6&reg; based Linux&reg; distributions. 

**Note**: If you need to make changes to your firewall on a Rackconnect server, you need to do this through your Dedicated Firewall Manager. 

### Prerequisites

You require the following prerequisites:

- Basic understanding of Secure Shell (SSH)
- Sudo or administrative access to your server
- A non-Rackconnect Cloud Server running RHEL 7 or CentOS 7.

### What is firewalld?

The `firewalld` service is the default and most common software firewall solution used in RHEL and CentOS 7. It is a wrapper on `iptables` that uses different syntax to apply new rules.

### How does firewalld work?

The `firewalld` service uses zones to control the firewall access. Zones are pre-constructed rulesets for various trust level. You would likely have a zone for a given location or scenario such as home,  public, or trusted. Different zones enable different network services and incoming traffic types while denying everything else. After enabling `firewalld` for the first time, `Public` is the default zone.

Here are some examples of zones:

| Zone  | What it does  |
|:-:|:-:|---|---|
| public  | This is the *external* zone or Internet facing zone. You don't trust connections originating from the outside world and allows only specific services. |
|  internal | This is traditionally the *inside* of the network behind the firewall.  |
|  dmz | For use on computers located in a DMZ (demilitarized zone). Only certain incoming connections can access the restricted internal network.  |
|  drop | Traffic destined for the drop zone is dropped without any reply. Use this as a *blackhole* for malicious IP's |
|  trusted | Accepts all connections. Use sparingly.  |


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


Putting all that together, you'd get something like the following example:

       firewall-cmd --zone=public --add-source=127.0.0.1 --permanent

This command enables access from the IP `127.0.0.1` to the public zone. There are other available flags, but this is the basic construction of a `firewalld` rule. 


### Permanent flag and rich rules

The **permanent flag** can set rule persistence and enable fine tuning of rules by using **rich rules**.

#### Permanent flag

Using the **permanent flag** doesn't activate the rule in the running configuration. In order to ensure the rule persists, you need to add the rule a second time with the permanent flag. 

Permanent flag example:

       firewall-cmd --add-source=12.345.67.89 --zone=trusted --permanent


#### Rich Rules

Rich rules offer more control by having custom granular options. Rich rules can configure logging, masquerading, port forwarding, and rate limiting.

Rich rules example:

       firewall-cmd --add-rich-rule='rule family=ipv4 source address="123.45.69.78" port port="11" protocol=tcp accept' --permanent


**Note**: A mixture of rich rules and regular rules can lead to a messy configuration. Using only rich rules for certain rules such as SSH access, can help keep your setup clean.


### Example commands

Finally, here are a few examples of `firewalld` commands. 

| Command  | What it does  |
|:-:|:-:|---|---|
| `firewall-cmd --add-source=12.345.67.89 --zone=trusted`  | This command accepts traffic from the specified IP to the trusted zone. |
|  `firewall-cmd --zone=drop --add-source=12.345.67.89/24` | This command drops traffic from the specified IP range. |
|  `firewall-cmd --zone=public --add-service=ssh`	 | This command allows traffic via SSH on the public zone. |
|  `firewall-cmd --zone=public --list-all` | This lists out all of the specifications set for the zone such as sources, services, rich rules, etc. |
|  `firewall-cmd --add-rich-rule='rule family=ipv4 source address="123.456.789.123" port port="22" protocol=tcp accept' --permanent` | Rich rule to allow access from the specified IP on port 22 over TCP on the public zone.  |


### Further reading

This document only scratches the surface of the possibilities with `firewalld`. You can review the man page for `firewalld` or review the official documentation for `firewalld` at this link: [https://firewalld.org/documentation/man-pages/firewall-cmd.html](https://firewalld.org/documentation/man-pages/firewall-cmd.html)
