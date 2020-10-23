---
permalink: password-change-logs-in-linux/
audit_date: '2020-10-23'
title: Password Change Logs in Linux
type: article
created_date: '2020-10-21'
created_by: James Andrade
last_modified_date: '2020-10-23'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

Password changes are logged in the following files:

For Ubuntu&reg;/Debian&reg; systems:

    /var/log/auth.log

For CentOS&reg;/RHEL&reg; systems:

    /var/log/secure

To check for root password changes, look for lines that mention:

    password changed for root
    Password for root was changed
