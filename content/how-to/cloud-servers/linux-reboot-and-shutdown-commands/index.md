---
permalink: linux-reboot-and-shutdown-commands
audit_date: '2020-06-30'
title: Linux reboot and shutdown commands
type: article
created_date: '2020-05-12'
created_by: John Garcia
last_modified_date: '2020-05-14'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes basic uses for the `shutdown` command in Linux&reg;.

### Shutdown command

Use the `shutdown` command in Linux to shut down a device in a safe manner. You can modify the command
to notify users of the system shutdown, specify time arguments for the shutdown, and prevent any further
logins.  Users must have `root` or `sudo` privileges to use `shutdown`. The command uses the following
structure:

    shutdown [OPTIONS] [TIME] [MESSAGE]

**Explanation of command elements:**

- **OPTIONS**: Use OPTIONS to specify reboot, halt system, cancel request, display messages, and disable
  logins.

- **TIMEe**: Use TIME to specify a time argument to schedule a reboot at a specified time, schedule a reboot
  after a designated time, or specify an immediate shutdown.

- **MESSAGE**: Use MESSAGE to notify logged-in users of any specified message or instructions. Custom messages
  must follow a time argument.

The following example uses the `shutdown` command to begin the shutdown process.  By default, this process
starts after a one-minute time interval.

    [root@server-01 ~]# shutdown
    Shutdown scheduled for Wed 2020-05-13 00:21:08 UTC, use 'shutdown -c' to cancel.

### Specify a shutdown time

You can add a time argument in the following formats:

- **hh:mm**: Schedule a specific time.

- **+m**: Indicate the number of minutes until the shutdown.

The following example uses the **hh:mm** format to schedule a shutdown at 11:30 AM server time:

    [root@server-01 ~]# shutdown 11:30
    Shutdown scheduled for Wed 2020-05-13 11:30:00 UTC, use 'shutdown -c' to cancel.

The following example uses the **+m** format to schedule  a shutdown in 30 minutes:

    [root@server-01 ~]# shutdown +30
    Shutdown scheduled for Wed 2020-05-13 01:03:13 UTC, use 'shutdown -c' to cancel.

The following examples use **+0** or **now** for an immediate shutdown:

    [root@server-01 ~]# shutdown +0
    Shutdown scheduled for Wed 2020-05-13 00:48:11 UTC, use 'shutdown -c' to cancel.

    [root@server-01 ~]# shutdown now

### Add a custom shutdown message for logged-in users

**Note:**  Remember that the custom message must follow a time argument.

The following example uses a custom wall message to display information about the shutdown to logged-in users:

    [root@server-01 ~]# shutdown +5 "Shutdown in 5 Minutes for Updates"
    Shutdown scheduled for Wed 2020-05-13 01:14:11 UTC, use 'shutdown -c' to cancel.

The following custom message displays to logged-in users:

    Broadcast message from root@server-01 on pts/0 (Wed 2020-05-13 01:09:11 UTC):

    Shutdown in 5 Minutes for Updates
    The system is going down for poweroff at Wed 2020-05-13 01:14:11 UTC!

### Reboot a system

You can use the `-r` option to initiate a reboot on the device instead of a shutdown.

The following example uses the reboot option to initiate a reboot:

    [root@server-01 ~]# shutdown -r
    Shutdown scheduled for Wed 2020-05-13 01:44:17 UTC, use 'shutdown -c' to cancel.

The following example uses the reboot option with a time argument and adds a custom message:

    [root@server-01 ~]# shutdown -r  +10 "Rebooting in 10 Minutes for Updates"
    Shutdown scheduled for Wed 2020-05-13 01:52:37 UTC, use 'shutdown -c' to cancel.

The following custom message displays to logged-in users:

    Broadcast message from root@server-01 on pts/0 (Wed 2020-05-13 01:44:40 UTC):

    Rebooting in 10 Minutes for Updates

    The system is going down for reboot at Wed 2020-05-13 01:54:40 UTC!

### Cancel a shutdown

You can use the `-c` option to cancel a scheduled shutdown.

The following example uses `-c` to cancel a scheduled shutdown:

    [root@server-01 ~]# shutdown -c

The following system message displays to logged-in users:

    Broadcast message from root@server-01 on pts/1 (Wed 2020-05-13 01:21:37 UTC):

    The system shutdown has been cancelled
