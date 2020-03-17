---
permalink: enabling-services-in-linux/
audit_date:
title: Enabling Services in Linux
type: article
created_date: '2020-03-17'
created_by: Evan Benavides
last_modified_date: 
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---
This article is meant to assist with enabling services to start on boot on Linux operating systems. This is a good practice as it'll ensure critical services are configured to start when the server is rebooted.

**Ubuntu and Debian-based systems**
With Ubuntu and Debian-based systems the systemctl command will be used. For example:
`systemctl enable apache2`

In order to disable the service from starting on boot the following command can be used:
`systemctl disable apache2`

**CentOS and RHEL-based systems**
With CentOS and RHEL-based systems the chkconfig command will be used. For example:
`chkconfig httpd on`

In order to disable the service from starting on boot the following command can be used:
`chkconfig httpd off`

**Note**: With CentOS/RHEL 7 systems you can use either the systemctl or chkconfig commands.
