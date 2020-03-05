---
permalink: centos-7-apache-and-php-install/
audit_date: '2019-11-19'
title: Install Apache and PHP on CentOS 7
type: article
created_date: '2011-03-09'
created_by: Rackspace Support
last_modified_date: '2020-03-05'
last_modified_by: Chris Silva
product: Cloud Servers
product_url: cloud-servers
---

This article demonstrates how to install Apache&reg; and PHP on CentOS&reg; 7.
The default CentOS 7 image does not have access to repositories that support PHP
version 5.6 and higher, so we need to enable a repository that does. We install
this repository by using the default CentOS package manager, yum. The advantages
of using yum to perform the installation (instead of the source code) is that yum
also automatically installs future security updates and handles dependencies.

**NOTE**
This guide enables the IUS repository which provides newer versions of some software in the official CentOS and Red Hat repositories.
For more information on the IUS repository, please see the following link: [Install EPEL and IUS repositories on CentOS and Red Hat] (https://support.rackspace.com/how-to/install-epel-and-additional-repositories-on-centos-and-red-hat/)

### Install Apache

Use the following steps to install Apache:

1. Run the following command:

        yum install httpd

2. Use systemd's systemctl tool to start the Apache service:

        systemctl start httpd

3. Enable the service to start automatically on boot:

        systemctl enable httpd.service

4. Open up port 80 for web traffic:

        firewall-cmd --add-service=http --permanent

5. Reload the firewall:

        firewall-cmd --reload

Confirm successful installation by entering your server's IP address in a browser to view the default Apache test page.

### Install PHP 7.3

Use yum to install a repository that supports PHP 7.3:

1. Run the following command:

        sudo yum install https://$(rpm -E '%{?centos:centos}%{!?centos:rhel}%{rhel}').iuscommunity.org/ius-release.rpm

2. Install PHP and some popular PHP modules:
        
        yum install mod_php73 php73-bcmath php73-cli php73-gd php73-ldap php73-mbstring php73-mysqlnd php73-soap

3. Confirm your server is using PHP 7.3 by running the following command:

        php -v 

You should see the following output: 
        
        PHP 7.3.14 (cli) (built: Feb  9 2020 00:01:37) ( NTS ) 
