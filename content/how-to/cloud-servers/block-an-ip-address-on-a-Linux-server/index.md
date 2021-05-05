---
permalink: block-an-ip-address-on-a-Linux-server/
audit_date: '2021-05-05'
title: 'Block an IP address on a Linux server'
type: article
created_date: '2020-06-23'
created_by: Morgan Marion
last_modified_date: '2021-05-05'
last_modified_by: Ana Corpus
product: Cloud Servers
product_url: cloud-servers
---


A large number of requests from one IP address can deplete
the server of available resources. This article provides 
the commands to block an IP address on three common Linux&reg; software firewalls.

### Prerequisites

- Basic understanding of commands in a Linux operating
system.
- Basic understanding of Secure Shell (SSH).
- Administrative access to your server by using the `sudo` command.

**NOTE**: These steps are for servers that are not RackConnect&reg; cloud servers. For RackConnect, make changes in the dedicated firewall. 

Log on to the server by using SSH and then complete the steps in the following sections.

### firewalld tool

**firewalld** is available on the following Linux versions:

- Red Hat&reg; Enterprise Linux 7 and later.

- CentOS&reg; 7 and later.

- Fedora&reg; 18 and later.

1. To ensure that `firewalld` is running on your server, run the following command. If `firewalld`
   is not running, go to the `iptables` section.

       sudo systemctl status firewalld

2. Run the following command to block the IP address and to add the rule to the permanent set:

       sudo firewall-cmd --permanent --add-rich-rule="rule family='ipv4' source address='xxx.xxx.xxx.xxx' reject"

3. Run the following command to reload the `firewalld` rules:

       sudo firewall-cmd --reload

4. Run the following command to list and verify the new rule:

       sudo firewall-cmd --list-all

### Uncomplicated Firewall (UFW)

The UFW tool is available on the Ubuntu operating system 8.04 LTS and later.

1. To ensure that `UFW` is running on your server, run the following command. If `UFW` is not running,
   go to the `iptables` section below.

       sudo systemctl status ufw

2. Run the following command to block the IP address.

       sudo ufw deny from xxx.xxx.xxx.xxx to any

3. Run the following command to list and verify the new rule.

       sudo ufw status

### iptables tool

`iptables` is commonly pre-installed on all Linux operating systems.

1. Run the following command to block the IP address.

       sudo iptables -I INPUT -s xxx.xxx.xxx.xxx -j DROP

2. Run the following command to save the settings. The settings will persist after performing a reboot.

       sudo service iptables save

3. Run the following command to list and verify the new rule:

       sudo iptables -L
Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/).
