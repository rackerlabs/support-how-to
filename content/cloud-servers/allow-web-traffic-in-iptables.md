---
permalink: allow-web-traffic-in-iptables/
audit_date: 
title: 'Allow web traffic in iptables software firewall'
type: article
created_date: '2020-03-17'
created_by: Chris Silva
last_modified_date: 
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to configure your `iptables` software firewall to allow web traffic on port 80 (HTTP) and port 443 (HTTPS). `iptables` is the default software firewall for RHEL 6 based distributions. 

### Prerequisites
You need to have the following prerequisites:
- Basic understanding of Secure Shell (SSH)
- Sudo or administrative access to your server
- A Cloud Server with RHEL 6 or CentOS 6 running `iptables`
**IMPORTANT**: These steps are only for non-RackConnected Cloud servers. If you are utilizing RackConnect these changes will likely be made on your dedicated firewall. 

Log in to your server by using SSH and then complete the steps in the following sections for
your preferred setup method.

#### One-line command method
Use the following steps for the one-line command method:

1. Use the following one-line command for an expedient set up of your LAMP stack on your server:
        sudo sh -c "iptables -I INPUT -p tcp -m tcp --dport 80 -j ACCEPT && iptables -I INPUT -p tcp -m tcp --dport 443 -j ACCEPT && service iptables save"
        
#### Individual commands method
If you prefer to configure the software firewall using discrete steps instead of by using the
one-line command, perform the following steps:

1.  Run the following command to allow traffic on port 80:
        sudo iptables -I INPUT -p tcp -m tcp --dport 80 -j ACCEPT

2.  Run the following command to allow traffic on port 443:
        sudo iptables -I INPUT -p tcp -m tcp --dport 443 -j ACCEPT

3.  Run the following command to save the `iptables` rules:
        sudo service iptables save

If you've followed the steps above, you've now configured your server to allow HTTP and HTTPS web traffic through your `iptables` software firewall. If you've configured your website to accept traffic on 80/443, you should be able to visit both the http and https version of your website. 
