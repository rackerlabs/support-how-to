---
permalink: allow-web-traffic-in-firewalld/
audit_date: 
title: 'Allow web traffic in firewalld software firewall'
type: article
created_date: '2020-03-17'
created_by: Chris Silva
last_modified_date: 
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to configure your `firewalld` software firewall to allow web traffic on port 80 (HTTP) and port 443 (HTTPS). `firewalld` is the default software firewall for RHEL 7 based distributions. 

### Prerequisites
You need to have the following prerequisites:
- Basic understanding of Secure Shell (SSH)
- Sudo or administrative access to your server
- A Cloud Server with RHEL 7 or CentOS 7 running `firewalld`
**IMPORTANT**: These steps are only for non-RackConnected Cloud servers. If you are utilizing RackConnect these changes will likely be made on your dedicated firewall. 

Log in to your server by using SSH and then complete the steps in the following sections for
your preferred setup method.

**NOTE**: While `firewalld` is the default software firewall solution for RHEL 7 based distributions, it's important to note that it acts as a wrapper for iptables and can be disabled. Before proceeding with the following steps, ensure that `firewalld` is running on your server. You can check by running the following command:
        systemctl status firewalld

#### One-line command method
Use the following steps for the one-line command method:

1. Use the following one-line command for an expedient set up of your LAMP stack on your server:
         sudo sh -c "firewall-cmd --permanent --zone=public --add-service=http && firewall-cmd --permanent --zone=public --add-service=https && firewall-cmd --reload"
         
#### Individual commands method
If you prefer to configure the software firewall using discrete steps instead of by using the
one-line command, perform the following steps:

1.  Run the following command to allow traffic on port 80:
        sudo firewall-cmd --permanent --zone=public --add-service=http

2.  Run the following command to allow traffic on port 443:
        sudo firewall-cmd --permanent --zone=public --add-service=https

3.  Run the following command to save the `iptables` rules:
        sudo firewall-cmd --reload

If you've followed the steps above, you've now configured your server to allow HTTP and HTTPS web traffic through your `firewalld` software firewall. If you've configured your website to accept traffic on 80/443, you should be able to visit both the http and https version of your website. 
