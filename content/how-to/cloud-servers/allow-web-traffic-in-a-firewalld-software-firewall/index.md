---
permalink: allow-web-traffic-in-a-firewalld-software-firewall
audit_date: '2020-03-17'
title: 'Allow web traffic in a firewalld software firewall'
type: article
created_date: '2020-03-17'
created_by: Chris Silva
last_modified_date: '2020-03-27'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to configure your `firewalld` software firewall to allow web traffic on port 80 (HTTP) and port 443 (HTTPS). `firewalld` is the default software firewall for RHEL&reg; 7-based distributions. 

### Prerequisites

You need to have the following prerequisites:

- Basic understanding of Secure Shell (SSH)
- Sudo or administrative access to your server
- A cloud server with RHEL 7 or CentOS&reg; 7 running `firewalld`

**IMPORTANT**: These steps are only for non-RackConnected cloud servers. If you are using RackConnect, you can make similar changes on your dedicated firewall. 

Log in to your server by using SSH and then complete the steps in the following sections for
your preferred setup method.

**NOTE**: While `firewalld` is the default software firewall solution for RHEL 7-based distributions, you should note that `firewalld` acts as a wrapper for iptables and you can disable the firewall. Before proceeding with the following steps, ensure that `firewalld` is running on your server. 

You can verify that `firewalld` is running on your server by executing the following command:
        
        systemctl status firewalld

### One-line command method

Use the following one-line command to open the open the firewall ports:

         sudo sh -c "firewall-cmd --permanent --zone=public --add-service=http && firewall-cmd --permanent --zone=public --add-service=https && firewall-cmd --reload"
         
### Individual commands method

If you prefer to configure the software firewall by using discrete steps instead of by using the
one-line command, perform the following steps:

1.  Run the following command to allow traffic on port 80:

        sudo firewall-cmd --permanent --zone=public --add-service=http

2.  Run the following command to allow traffic on port 443:

        sudo firewall-cmd --permanent --zone=public --add-service=https

3.  Run the following command to save the `firewalld` rules:

        sudo firewall-cmd --reload

After you complete the preceding steps, you have configured your server to allow HTTP and HTTPS web traffic through your `firewalld` software firewall. If you configured your website to accept traffic on ports 80 and 443, you should be able to visit both the HTTP and HTTPS versions of your website. 
