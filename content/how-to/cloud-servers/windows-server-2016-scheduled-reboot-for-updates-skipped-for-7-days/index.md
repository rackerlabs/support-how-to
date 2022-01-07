---
permalink: /windows-server-2016-scheduled-reboot-for-updates-skipped-for-7-days
audit_date: '2022-01-07'
title: 'Windows Server 2016: Scheduled reboot for updates skipped for 7 days'
type: article
created_date: '2022-01-07'
created_by: Daniel Manriquez
last_modified_date: '2022-01-07'
last_modified_by: Jorge Garcia
product: Cloud Servers  
product_url: cloud-servers
---
# Windows Server 2016: Scheduled reboot for updates skipped for 7 days
Our clients noticed 2016 servers were regularly rebooting exactly one week after they were scheduled to after automatic updates were applied.

Working with Microsoft to find out this is due to the **"Limit restart delays"** feature:

> After an update is installed, Windows 10 attempts automatic restart outside of active hours. If the restart does not succeed after 7 days (by default), the user will see a notification that restart is required. You can use the Specify deadline before auto-restart for update installation policy to change the delay from 7 days to a number of days between 2 and 14.

The server somehow thought it was busy even though there were no users logged in and would continue checking in until the 7 day limit was reached then force a reboot.

### Resolution:

- Our most recommended solution is to apply the "AlwaysAutoRebootAtScheduledTimeMinutes" registry key in combination with the "AlwaysAutoRebootAtScheduledTime" key. 

The AlwaysAutoRebootAtScheduledTimeMinutes key allows you to specify a value between 15-180.  We have tried setting a value of 15 and the servers started auto rebooting exactly 15 minutes after the scheduled install time which was good enough to keep everyone happy.
### Reference
- [Manage device restarts after updates](https://docs.microsoft.com/en-us/windows/deployment/update/waas-restart)



<br>

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
