---
permalink: password-change-logs-in-linux/
audit_date:
title: Password Change Logs in Linux
type: article
created_date: '2020-10-21'
created_by: James Andrade
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

# How root password changes are logged

Password changes are logged in the following files:

For Ubuntu/Debian systems:
```
/var/log/auth.log
```
For CentOS/RHEL systems:
```
/var/log/secure
```
To check for root password changes, look for lines that mention:
```
password changed for root
Password for root was changed
```
