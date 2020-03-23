---
permalink: enable-services-in-linux/
audit_date: '2020-03-23'
title: Enable Services in Linux
type: article
created_date: '2020-03-17'
created_by: Evan Benavides
last_modified_date: '2020-03-23'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---
This article shows you how to set services to start up on boot in Linux&reg; operating systems. This
practice ensures that critical services start automatically when the server reboots.

**Ubuntu and Debian-based systems**

With Ubuntu@reg; and Debian&reg;-based systems, use the following command:

    systemctl enable apache2

To stop the service from starting on boot, use the following command:

    systemctl disable apache2

**CentOS and RHEL-based systems**

With CentOS&reg; and RHEL&reg;-based systems, use the following command:

    chkconfig httpd on

To stop the service from starting on boot, use the following command:

    chkconfig httpd off

**Note**: With CentOS/RHEL 7 systems you can use either the `systemctl` or `chkconfig` commands.
