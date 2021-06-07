---
permalink: cloud-backup-basic-troubleshooting-on-windows-server-2012-2016-and-2019
audit_date: 
title: Cloud Backup&mdash;Basic troubleshooting on Windows Server 2012, 2016, and 2019
type: article
created_date: '2018-08-10'
created_by: Shaun Crumpler
last_modified_date: '2021-06-04'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

This article provides basic troubleshooting steps for Cloud Backup on Windows
Server&reg; 2012, 2016, and 2019 if you are experiencing the following issues:

- Backups are not running.
- Backups take too long to complete.
- Cloud Backup uses all of the server’s resources.

As a Managed Infrastructure customer who administers your own servers, this
article helps you diagnose if the server is experiencing an issue that you can
remedy or escalate to a member of Rackspace Support.
This article provides instructions and helpful information that you can
include when you create a ticket.

### Check for open issues

Before you restart the DriveClient service, check
[status.rackspace.com](https://status.rackspace.com) to ensure there are no
Cloud Backup open issues that could be impacting your server instance. In
addition, check the current support tickets to ensure that no
incident is causing the lack of server access.

Use the following steps to check your open support tickets:

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).
2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.
3. Select **Tickets > Ticket List**.

If there are no open support tickets about the server in question, try to
establish a connection, as shown in the next section.

### Establish connection

Use the following steps to establish a connection:

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).
2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.
3. Select **Backups > Systems**.
4. From the list of Cloud Backup Systems, click the backup server name.
   This action displays the following details about the backup system:

   - The Internet Protocol (IP) address of the server
   - The system type
   - The backup vault size
   - If encryption is enabled
   - The server region
   - The backup region
   - If service net is enabled
   - The agent version

5. To the right of the system name, review the status of the backup agent. The
   backup status is **connected** or **disconnected**.
6. Wait ten seconds to ensure that the status is accurate because it can change
   quickly.
7. After 10 seconds, perform one of the following actions:

   - If the status is **connected**, contact Rackspace Support.
   - If the status is **disconnected**, restart the DriveClient service, as
     shown in the next section.

### Restart the DriveClient service

1. Log in to the server through RDP and click the **Windows&reg;** symbol in the
   bottom-left corner.
2. Click the **Search** icon in the top-right corner.
3. Enter **services.msc** in the search field.
4. Locate the DriveClient service, right-click it, and select **Restart**. A
   pop-up window shows the status of the restart.
5. After the restart completes, find the DriveClient service again in the
   **Services (Local)** list, and ensure that its status is **Running**.
6. Ensure that you have the **DriveClient** configured to start at bootup:

   a. Right-click the DriveClient service and click **Properties**.
   b. Click the drop-down list next to **Startup type** and select **Automatic**.
   c. Click **OK** at the bottom of the page.
   d. After the service restarts, check the Cloud Control Panel to ensure the
   service is running.

7. Perform one of the following:
   - If the agent is connected, contact Rackspace Technical Support.
   - If the agent is not connected, attach the backup log to a technical support
     ticket. The backup log is located at
     **C:\ProgramData\Driveclient\log\driveclient.log**. Rackspace Support uses
     the log file to expedite a response to the issue.
