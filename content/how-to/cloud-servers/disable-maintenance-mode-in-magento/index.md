---
permalink: disable-maintenance-mode-in-magento
audit_date: '2020-09-21'
title: Disable maintenance mode in Magento
type: article
created_date: '2020-09-21'
created_by: James Andrade
last_modified_date: '2020-09-21'
last_modified_by: William Loy
product: Cloud Servers
product_url: cloud-servers
---

You can use maintenance mode in Magento&reg; when you need to take your site offline to perform maintenance,
updgrades, or configuration changes. This article describes how to *disable* maintenance mode after
you finish making your offline changes.

### Disable maintenance mode

Use the following steps to disable maintenance mode:

1. Log in to your server.

2. Navigate to the document root that contains your Magento installation. 

   Locate your domain or website by using one of the following commands:
    
   **CentOS/RHEL:**
    
       httpd -S | grep domainname
    
   **Ubuntu/Debian:**
    
       apache2ctl -S | grep domainname
    
   Next, locate the document root:
    
       grep -i documentroot /path/to/vhost.conf
    
3. Now locate the file called **maintenance.flag**.

4. Remove the file **maintenance.flag** by using one of the following commmands:

    **Magento 1:**

        rm maintenance.flag

    **Magento 2:**

        rm var/.maintenance.flag

