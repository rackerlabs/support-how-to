---
permalink: schedule-reboots-in-the-ubuntu-operating-system
audit_date: '2020-09-24'
title: Schedule reboots in the Ubuntu operating system
type: article
created_date: '2020-09-21'
created_by: James Andrade
last_modified_date: '2020-09-24'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to schedule reboots in the Ubuntu&reg; operating system.

### Schedule a reboot by using `crontab`

Suppose you want to reboot the server at 2:05 am every day.  Perform the following steps,
adjusting the details to fit your requirements:

1. Use the following command to edit the crontab file:

       $ sudo crontab -e
       
2. To enter **insert mode** and add a new line at the end of the file, move the cursor to the last line and press the letter **o**.

3. In the blank line, add the following line to the file to set the desired daily execution time and command to execute:

       05 02   *   *   *    /sbin/shutdown -r +5

4. Press **Esc** to exit insert mode and then enter **:wq** to save the file and quit `crontab`.

### `Crontab` example:

The following example shows the possible values for each element of a line in `crontab`.

```
# Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0, Monday=1, and so on)
# |  |  |  |  |
# *  *  *  *  * user-name  command-to-be-executed
```

**Note:** Rebooting your server periodically might be a temporary fix. Troubleshoot the actual issue instead of
relying on a server re-boot to mask the issue.
