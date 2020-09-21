---
permalink: schedule-reboots-in-ubuntu/
audit_date:
title: Schedule Reboots in Ubuntu
type: article
created_date: '2020-09-21'
created_by: James Andrade
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

# Schedule reboots in Ubuntu

In this article, we will show how to schedule reboots in Ubuntu.

You can schedule a nightly reboot by using crontab:


```
sudo crontab -e
```
Insert the following (or adjust to your specific reboot time)

```
0 2   *   *   *    /sbin/shutdown -r +5
```
This will reboot the server every day at 2:05 am.

You can exit crontab by pressing "ESC" and then ":wq" to save and quit.

Crontab Example:

```
# Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  * user-name  command to be executed
```

Note: This shouldn't be used as a fix for any issues you are having on your system. We recommend troubleshooting the actual issue instead of relying on a server re-boot, however this can be a temporary fix.
