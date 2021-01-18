---
permalink: centos-7-apache-and-php-install/
audit_date: '2021-01-15'
title: Install Apache and PHP on CentOS 7
type: article
created_date: '2011-03-09'
created_by: Rackspace Support
last_modified_date: '2021-01-15'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

This article demonstrates how to install Apache&reg; and PHP&reg; on CentOS&reg; 7.
The default CentOS 7 image doesn't have access to repositories that support PHP
version 5.6 and higher, so you should enable a repository that does. Install
this repository by using the default CentOS package manager, `yum`. The advantage
of using `yum` to perform the installation is that `yum` automatically installs
future security updates and handles dependencies.

**NOTE**: This guide enables the Inline with Upstream Stable (IUS) repository, which provides
newer versions of some software found in the official CentOS and Red Hat&reg; repositories.
For more information about the IUS repository, see the 
[Install EPEL and IUS repositories on CentOS and Red Hat] (/support/how-to/install-epel-and-additional-repositories-on-centos-and-red-hat/)
article.

### Install Apache

Use the following steps to install Apache:

1. Run the following command:

        yum install httpd

2. Use the systemd `systemctl` tool to start the Apache service:

        systemctl start httpd

3. Enable the service to start automatically on boot:

        systemctl enable httpd.service

4. Open up port 80 for web traffic:

        firewall-cmd --add-service=http --permanent

5. Reload the firewall:

        firewall-cmd --reload

Confirm successful installation by entering your server's IP address in a browser to view the default Apache test page.

### Install PHP 7.3

Use `yum` to install a repository that supports PHP 7.3:

1. Run the following command:

        sudo yum install https://repo.ius.io/ius-release-el7.rpm

2. Install PHP and some popular PHP modules:

        yum install mod_php73 php73-bcmath php73-cli php73-gd php73-ldap php73-mbstring php73-mysqlnd php73-soap

3. Confirm your server is using PHP 7.3 by running the following command:

        php -v

You should see the following output:

        PHP 7.3.25 (cli) (built: Dec 1 2020 21:50:13) ( NTS )
