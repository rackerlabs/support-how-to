---
permalink: disable-maintenance-mode-in-magento/
audit_date:
title: Disable Maintenance Mode in Magento
type: article
created_date: '2020-09-21'
created_by: James Andrade
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

# Disable Maintenance Mode in Magento

In this article, we will show how to disable maintenance mode in Magento.

It is simple to do this:

1. Log in to server

2. Go to the document root containing your Magento installation (check vhost to see where this is)
    ```
    cd <path_to_magento_root>/public_html/
    ```
    If you are not sure what the document root is, you can check the vhost. To check which vhost is for your domain/webstie:
    CentOS/RHEL:
    httpd -S | grep domainname
    
    Ubuntu/Debian:
    apache2ctl -S | grep domainname
    
    Then you can check what the documentroot is:
    grep -i documentroot /path/to/vhost.conf     (<- this is whatever path you get from the previous command)
    
3. Look for a file called "maintenance.flag"

4. Remove this file

Magento 1:
```
rm maintenance.flag
```

Magento 2:

```
rm var/.maintenance.flag
```
