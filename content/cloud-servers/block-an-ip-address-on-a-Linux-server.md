---
permalink: block-an-ip-address-on-a-Linux-server/
audit_date:
title: 'Block an ip address on a Linux server'
type: article
created_date: '2020-06-1*'
created_by: Morgan Marion
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

# Block an ip address on a Linux server
Excessive amounts of requests from one ip address can deplete the server of available resources. This article goes over the basic commands for blocking an ip address on three common Linux software firewalls.

#### Prerequisites

- Basic understanding of working with and running commands in a Linux operating system.
- Basic understanding of logging on to your server via Secure Shell (SSH).
- Sudo or administrative access to your server.

**NOTE**: These steps are only for non-RackConnected Cloud servers. If you are utilizing RackConnect these changes will likely be made on your dedicated firewall. 

Log on to your server by using SSH and then complete the steps in the following sections for your preferred setup method.

# firewallD

##### Available on Red Hat Enterprise Linux 7 and newer, CentOS 7 and newer, Fedora 18 and newer.

1. Ensure that `firewallD` is running on your server by running the following command. If it is not, please scroll down to the `iptables` section.
```
sudo systemctl status firewalld
````
2. Use this command to block the ip address and add the rule to the permanent set.
```
sudo firewall-cmd --permanent --add-rich-rule="rule family='ipv4' source address='xxx.xxx.xxx.xxx' reject"
````
3. Now run the following command to reload the firewallD rules:
```
sudo firewall-cmd --reload
```
4. You can then use this command to list and verify the new rule:
```
sudo firewall-cmd --list-all
```

# Uncomplicated Firewall (UFW)
##### Available on Ubuntu 8.04 LTS and newer

1. Ensure that `UFW` is running on your server by running the following command. If it is not, please scroll down to the `iptables` section.
```
sudo systemctl status ufw
````
1. Use this command to block the ip address.
```
sudo ufw deny from xxx.xxx.xxx.xxx to any
````
2. You can then use this command to list and verify the new rule.
```
sudo ufw status
```

# iptables

##### Commonly pre-installed on any Linux operating system

1. First use this command to block the ip address:
```
sudo iptables -I INPUT -s xxx.xxx.xxx.xxx -j DROP
````
2. Then use this command to save the settings so they will persist following a reboot:
```
sudo service iptables save
````
3. You can then use this command to list and verify the new rule:
```
sudo iptables -L
```
