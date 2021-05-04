---
permalink: install-a-lamp-stack-on-debian-or-ubuntu-based-distributions
audit_date: '2020-03-11'
title: 'Install a LAMP stack on Debian or Ubuntu-based distributions'
type: article
created_date: '2020-03-11'
created_by: Chris Silva
last_modified_date: '2020-03-17'
last_modified_by: Chris Silva
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to install a LAMP (Linux&reg;, Apache&reg;, MySQL&reg;, PHP) stack
on your Debian&reg; or Ubuntu&reg; server. Linux is your operating system, and Apache is
your web daemon, which serves information stored in your MySQL database through PHP scripting
for your users. By the end of this article, you have a fully operational LAMP server,
ready to serve multiple virtual hosts.

### Prerequisites

You need to have the following prerequisites:

- Basic understanding of Secure Shell (SSH)
- Sudo or administrative access to your server
- A Cloud Server with Ubuntu 16.04 or later or Debian 9 or later

**IMPORTANT**: Before moving forward with the LAMP installation, ensure that you've applied system updates
to ensure you're installing the latest versions of the LAMP components.

### Install the LAMP stack

Log in to your server by using SSH and then complete the steps in the following sections for
your preferred setup method.

#### One-line command method

Use the following steps for the one-line command method:

1. Use the following one-line command for an expedient set up of your LAMP stack on your server:

        sudo sh -c "apt install apache2 mysql-server php -y; systemctl start mysql && mysql_secure_installation && systemctl restart mysql && systemctl start apache2 && systemctl enable apache2 && systemctl enable mysql && ufw allow http && ufw allow https"
        
2.  Provide answers to the following system prompts:

    **IMPORTANT**: During the initial setup, MySQL provides the option to use the
       **VALIDATE PASSWORD** plug-in, which allows you to set acceptable password parameters based
       on length and complexity. If you want to enable this feature, select **YES** and choose the
       level of security to implement. 

    - **Set root password**: Make your choice a strong and secure password.
    - **Do you wish to continue with the password provided?**: Only shows if you implemented the **VALIDATE PASSWORD** plug-in.
    - **Remove anonymous users? [Y/n]**: Select **Yes**.
    - **Disallow root login remotely? [Y/n]**: Select **Yes**.
    - **Remove test database and access to it? [Y/n]**: Select **Yes**.
    - **Reload privilege tables now? [Y/n]**: Select **Yes**.

The installation is complete. To test it, browse to **https://serverIpAddress/**.

#### Individual commands method

If you prefer to install the LAMP stack by using discrete steps instead of by using the
one-line command, perform the following steps:

1.  Run the following command to install the necessary packages:

        apt install apache2 mysql-server php -y
        
2.  Run the following command to start and secure the MySQL server:

        sudo sh -c "systemctl start mysql && mysql_secure_installation"

3.  Provide answers to the following system prompts:

    **IMPORTANT**: During the initial setup, MySQL provides the option to use the
       **VALIDATE PASSWORD** plug-in, which allows you to set acceptable password parameters based
       on length and complexity. If you want to enable this feature, select **YES** and choose the
       level of security to implement. 

    - **Set root password**: You decide, but make it secure.
    - **Do you wish to continue with the password provided?**: Only shows if you implemented the **VALIDATE PASSWORD** plug-in.
    - **Remove anonymous users? [Y/n]**: Select **Yes**.
    - **Disallow root login remotely? [Y/n]**: Select **Yes**.
    - **Remove test database and access to it? [Y/n]**: Select **Yes**.
    - **Reload privilege tables now? [Y/n]**: Select **Yes**.
    
4.  Run the following command to restart `mysqld`, start `httpd`, and
    configure `httpd` and `mysqld` to start on boot.
    
        sudo sh -c "systemctl restart mysql && systemctl start apache2 && systemctl enable apache2 && systemctl enable mysql"
        
5.  Allow web traffic through the firewall:
    
        sudo sh -c "ufw allow http && ufw allow https"
    
    This command allows port 80 (web) and port 443 (secure web) inbound traffic through the
    firewall, and saves the rule for reboots.

The installation is complete. To test it, browse to **https://serverIpAddress/**.
