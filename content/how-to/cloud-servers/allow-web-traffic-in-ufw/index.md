---
permalink: allow-web-traffic-in-ufw
audit_date: '2020-03-11'
title: 'Allow web traffic in ufw software firewall'
type: article
created_date: '2020-03-17'
created_by: Chris Silva
last_modified_date: '2020-03-18'
last_modified_by: Chris Silva
product: Cloud Servers
product_url: cloud-servers
---
This article describes how to configure your Uncomplicated Firewall (`ufw`) software firewall to allow web traffic on port 80 (HTTP) and port 443 (HTTPS). `ufw` is the default software firewall for Debian&reg;-based distributions. 

### Prerequisites

You need to have the following prerequisites:

- Basic understanding of Secure Shell (SSH)

- Sudo or administrative access to your server

- A cloud server with Debian or Ubuntu&reg; running `ufw`

**IMPORTANT**: These steps are only for non-RackConnected Cloud servers. If you are using RackConnect, you can make similar changes on your dedicated firewall. 

Log in to your server by using SSH and then complete the steps in the following sections for
your preferred setup method.

**NOTE**: While `ufw` is the default software firewall solution for most Debian-based distributions, you should note that `ufw` acts as a wrapper for `iptables` and you can disable the firewall. Before proceeding with the following steps, ensure that `ufw` is running on your server by running ``systemctl status ufw``.

#### One-line command method

Use the following one-line command to open the open the firewall ports:

        sudo sh -c "ufw allow http && ufw allow https"
        
#### Individual commands method

If you prefer to configure the software firewall by using discrete steps instead of by using the
one-line command, perform the following steps:

1.  Run the following command to allow traffic on port 80:

        sudo ufw allow http
        
2.  Run the following command to allow traffic on port 443:

        sudo ufw allow https

After you complete the preceding steps, you have configured your server to allow HTTP and HTTPS web traffic through your `ufw` software firewall. If you've configured your website to accept traffic on ports 80 and 443, you should be able to visit both the HTTP and HTTPS versions of your website. 
