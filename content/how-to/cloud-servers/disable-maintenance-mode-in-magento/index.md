---
permalink: disable-maintenance-mode-in-magento/
audit_date: '2020-09-21'
title: Disable Maintenance Mode in Magento
type: article
created_date: '2020-09-21'
created_by: James Andrade
last_modified_date: '2020-09-21'
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

In this article provides instructions for disabling maintenance mode in Magento.

# Disable Maintenance Mode in Magento

Disable Maintenance Mode in Magento by using the following steps:

1. Log in to your server.

2. Navigate to the document root containing your Magento installation. 

    1. Locate your domain or website by using one of the following commands:
    
        CentOS/RHEL:
    
        `httpd -S | grep domainname`
    
        Ubuntu/Debian:
    
        `apache2ctl -S | grep domainname`
    
    2. Next, locate the document root:
    
        `grep -i documentroot /path/to/vhost.conf`
    
3. Now locate the file called **maintenance.flag**.

4. Remove the file **maintenance.flag** by using one of the following commmands:

    Magento 1:

    `rm maintenance.flag`

    Magento 2:

    `rm var/.maintenance.flag`

