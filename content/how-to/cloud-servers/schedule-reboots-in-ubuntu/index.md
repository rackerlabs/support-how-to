---
permalink: schedule-reboots-in-ubuntu/
audit_date: '2020-09-24'
title: Schedule Reboots in Ubuntu
type: article
created_date: '2020-09-21'
created_by: James Andrade
last_modified_date: '2020-09-24'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

# Schedule reboots in Ubuntu

This article shows how to schedule reboots in `Ubuntu`.

###You can schedule a reboot using `crontab`

Use this command to schedule a reboot:

```
$ sudo crontab -e
```
Use ths command to set the desired daily time:

```
$ 0 2   *   *   *    /sbin/shutdown -r +5
```

This command reboots the server at 2:05 am every day, adjust the command to fit your requirements.

Press 'ESC' to exit `crontab` and then type in ":wq" to save and quit.

`Crontab` Example:

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

Note: This is a temporary fix. Troubleshoot the actual issue instead of relying on a server re-boot.
