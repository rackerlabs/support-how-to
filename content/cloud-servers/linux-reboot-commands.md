---
permalink: linux-reboot-commands/
audit_date:
title: Linux Reboot Commands
type: article
created_date: '2020-05-12'
created_by: John Garcia
last_modified_date: '2020-05-12'
last_modified_by: John Garcia
product: Cloud Servers
product_url: cloud-servers
---

This article shows basic uses for the Shutdown command in Linux.

# Shutdown Command

The **shutdown** command in Linux is used to shutdown a device in a safe manner.  When using this command, it can be modified to notify users that the system is being shutdown, specify a time arguments for shutdown, and can also prevent any further logins.  The **shutdown** command can be used by root and users with sudo privileges. 

## shutdown [OPTIONS] [TIME] [MESSAGE]

**Options**- Can be used to specify reboot, halt system, cancel request, displaying messages, and disabling logins.

**Time**- Can be used to specify a Time Argument to schedule a reboot at a specified time, schedule a reboot after a designated time period, or direct an immediate shutdown.

**Message**- Can be used to notify logged-in users of any "Specified Message".  Note that Custom Messages need to follow a Time Argument.

Example:  Using of the shutdown command to begin shutdown process.  By default, this process will begin after a  1 minute time interval.
```
[root@server-01 ~]# shutdown
Shutdown scheduled for Wed 2020-05-13 00:21:08 UTC, use 'shutdown -c' to cancel.
```

## Specifying a Shutdown Time

Time Arguments can be added in two formats: **hh:mm** to schedule a specific time or **+m** to indicate a number of minutes until shutdown.

Example:  Using the **hh:mm** format to schedule a shutdown at 11:30 AM Server Time.

```
[root@server-01 ~]# shutdown 11:30
Shutdown scheduled for Wed 2020-05-13 11:30:00 UTC, use 'shutdown -c' to cancel. 
```
Example:  Using the **+m** format to schedule  a shutdown in 30 minutes.

```
[root@server-01 ~]# shutdown +30
Shutdown scheduled for Wed 2020-05-13 01:03:13 UTC, use 'shutdown -c' to cancel.
```

Example:  Using **+0** or **now** for an Immediate shutdown.

```
[root@server-01 ~]# shutdown +0
Shutdown scheduled for Wed 2020-05-13 00:48:11 UTC, use 'shutdown -c' to cancel.
```
```
[root@server-01 ~]# shutdown now
```

## Adding a Custom Message for Logged-In Users

**Note:**  As previously mentioned, the custom message must follow a time argument.

Example:  Using a custom wall message to display to logged-in users information about shutdown

```
[root@server-01 ~]# shutdown +5 "Shutdown in 5 Minutes for Updates"
Shutdown scheduled for Wed 2020-05-13 01:14:11 UTC, use 'shutdown -c' to cancel.
```

Example:   Custom Message Displayed to Logged-In User.

```
Broadcast message from root@server-01 on pts/0 (Wed 2020-05-13 01:09:11 UTC):

Shutdown in 5 Minutes for Updates
The system is going down for poweroff at Wed 2020-05-13 01:14:11 UTC!
```

## Rebooting a System

The **-r** option can be used to initiate a reboot on the device as opposed to a shutdown.

Example:  Using the reboot option to initiate reboot.
```
[root@server-01 ~]# shutdown -r
Shutdown scheduled for Wed 2020-05-13 01:44:17 UTC, use 'shutdown -c' to cancel.
```

Example: Using the reboot option with a Time Argument and adding a Custom Message.
```
[root@server-01 ~]# shutdown -r  +10 "Rebooting in 10 Minutes for Updates"
Shutdown scheduled for Wed 2020-05-13 01:52:37 UTC, use 'shutdown -c' to cancel.
```
Example:  Message Displayed to Logged-In User.

```
Broadcast message from root@server-01 on pts/0 (Wed 2020-05-13 01:44:40 UTC):

Rebooting in 10 Minutes for Updates

The system is going down for reboot at Wed 2020-05-13 01:54:40 UTC!
```  

## Cancelling a Shutdown

As shown in the previous examples, the use of the **-c** option will cancel a scheduled shutdown.

Example:  Using **-c** to cancel a scheduled shutdown.

```
[root@server-01 ~]# shutdown -c
```
Example:  Message Displayed to Logged-In User.

```
Broadcast message from root@server-01 on pts/1 (Wed 2020-05-13 01:21:37 UTC):

The system shutdown has been cancelled
```
