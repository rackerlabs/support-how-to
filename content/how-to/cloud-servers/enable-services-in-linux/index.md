---
permalink: enable-services-in-linux
audit_date: '2020-03-23'
title: Enable services in Linux
type: article
created_date: '2020-03-17'
created_by: Evan Benavides
last_modified_date: '2020-03-23'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---
This article describes how to set services to start up when you start up your Linux&reg; operating systems. This
practice ensures that critical services start automatically when the server reboots.

**Ubuntu and Debian systems**

With Ubuntu&reg; and Debian&reg; systems, use the following command:

    systemctl enable apache2

To stop the service from starting on start up, use the following command:

    systemctl disable apache2

**CentOS and RHEL systems**

With CentOS&reg; and RHEL&reg; systems, use the following command:

    chkconfig httpd on

To stop the service from starting on start up, use the following command:

    chkconfig httpd off

**Note**: With CentOS and RHEL 7 systems, you can use either the `systemctl` or `chkconfig` commands.
