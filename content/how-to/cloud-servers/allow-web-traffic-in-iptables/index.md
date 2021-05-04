---
permalink: allow-web-traffic-in-iptables
audit_date: '2020-03-27'
title: 'Allow web traffic in iptables software firewall'
type: article
created_date: '2020-03-17'
created_by: Chris Silva
last_modified_date: '2020-03-27'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to configure your `iptables` software firewall to allow web traffic on port 80 (HTTP) and port 443 (HTTPS). `iptables` is the default software firewall for RHEL&reg; 6-based distributions. 

### Prerequisites

You need to have the following prerequisites:

- Basic understanding of Secure Shell (SSH)
- Sudo or administrative access to your server
- A cloud server with RHEL 6 or CentOS&reg; 6 running `iptables`

**IMPORTANT**: These steps are only for non-RackConnected Cloud servers. If you are using RackConnect, you can make these changes on your dedicated firewall. 

Log in to your server by using SSH and then complete the steps in the following sections for
your preferred setup method.

### One-line command method

Use the following one-line command to open the open the firewall ports:

        sudo sh -c "iptables -I INPUT -p tcp -m tcp --dport 80 -j ACCEPT && iptables -I INPUT -p tcp -m tcp --dport 443 -j ACCEPT && service iptables save"
        
### Individual commands method

If you prefer to configure the software firewall by using discrete steps instead of by using the
one-line command, perform the following steps:

1.  Run the following command to allow traffic on port 80:

        sudo iptables -I INPUT -p tcp -m tcp --dport 80 -j ACCEPT

2.  Run the following command to allow traffic on port 443:

        sudo iptables -I INPUT -p tcp -m tcp --dport 443 -j ACCEPT

3.  Run the following command to save the `iptables` rules:

        sudo service iptables save

After you complete the preceding steps, you have configured configured your server to allow HTTP and HTTPS web traffic through your `iptables` software firewall. If you've configured your website to accept traffic on ports 80 and 443, you should be able to visit both the HTTP and HTTPS versions of your website. 
