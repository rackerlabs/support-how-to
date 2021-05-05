---
permalink: cloud-backup-basic-troubleshooting-on-window-2008-servers
audit_date: '2018-08-30'
title: Troubleshoot Cloud Backup on Windows 2008 servers
type: article
created_date: '2018-08-30'
created_by: Shaun Crumpler
last_modified_date: '2020-01-15'
last_modified_by: Brett Johnson
product: Cloud Backup
product_url: cloud-backup
---

**Note:** If your server is running a Linux&reg; operating system, see [Cloud backup troubleshooting on Linux](/support/how-to/cloud-backup-basic-troubleshooting-on-linux-servers). 

This article is to assist you if you are experiencing Cloud Backup issues that
are caused by the backup agent being disconnected on the Windows&reg; instance,
including the following items:

* Backups aren't running.
* Backups take too long to complete.
* Cloud Backup uses all of the server’s resources.

As a Managed Infrastructure customer who administers your own servers, this
article helps you to diagnose if the server is experiencing an issue that you
can remedy, or if the issue should be escalated to a member of
Rackspace Support. This article provides helpful information that you
can include when you create a ticket that might expedite the response.

## Check for open issues

Before you restart the DriveClient service, check
[status.rackspace.com](https://status.rackspace.com)
to ensure that there are no Cloud Backup open issues that could be impacting
your server instance.
In addition, check the current support tickets to ensure that there has not
been an incident that is causing the lack of accessibility of the server.

Use the following steps to check your open support ticket:

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).
2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.
3. Select **Tickets > Ticket List**.

If there is no open support ticket about the server in question, attempt to
establish a connection, as shown in the next section.

## Establish connection

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).
2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.
3. Select **Backups > Systems**.
4. From the list of Cloud Backup systems, click the backup server name.
   This action displays the following details about the backup system:

   - The Internet Protocol (IP) address of the server
   - The system type
   - The server region
   - If encryption is enabled
   - The backup region
   - The agent version

5. To the right of the system name, review the status of the backup agent. The
   backup status is **connected** or **disconnected**.

6. Wait 10 seconds to ensure that the status is accurate because it can change
   after a few seconds.

7. After 10 seconds, perform one of the following actions:

   - If the status is **connected**, try to run the backup again, and if it
     fails, contact Rackspace Support.
   - If the status is **disconnected**, restart the DriveClient service as
     shown in the next section.

## Restart the DriveClient service

Use the following steps to restart the DriveClient service:

1. To restart the DriveClient service, log in to the server by using Remote
   Desktop (RDP) and click the **Start** button in the bottom-left corner of
   the Windows desktop.

2. In the **Search** field, search for **services.msc**.

3. Click **services** in the **Programs** field.

4. Locate the **Driveclient Service** in the **Services (Local)** list.

5. Right-click on **Driveclient Service** and then choose the **Restart**
   option.

6. A pop-up displays the status of the restart.

7. After the restart is complete, find the **DriveClient Service** again in
   the **Services (Local)** list, and ensure that its status is **Started**.

8. A common reason for the driveclient not showing as started is that it is
   not set to start after a reboot. To resolve this problem, right-click on
   the **DriveClient Service** and choose **Properties**.

9. Click the drop-down menu next to **Startup type** and select (if not
   already selected) **Automatic**.

10. Click **OK** at the bottom of the page.

11. After the service restarts, go to the [Cloud Control
    Panel](https://login.rackspace.com) again to check the backup status.

    - If the status is **connected**, try to run the backup again.
    - If the status is **disconnected**, download the backup log from within
      Windows on the server. If it fails again, contact Rackspace Support.
      The log is located at C:\ProgramData\Driveclient\log\driveclient.log. To
      expedite the issue response, attach this log to a ticket for Rackspace
      Support.
