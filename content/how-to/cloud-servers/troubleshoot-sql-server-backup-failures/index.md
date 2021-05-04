---
permalink: troubleshoot-sql-server-backup-failures
audit_date: '2020-03-24'
title: Troubleshoot SQL Server backup failures by using Windows Event Viewer
type: article
created_date: '2020-03-24'
created_by: Karoline Mills
last_modified_date: '2020-04-10'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article covers a few basic steps to troubleshoot database and log backup failures for Microsoft&reg; SQL Server&reg;. It covers common causes for backup failures at a high level. Because of the complexity of SQL Server backup actions, this guide serves as a starting point for troubleshooting and helps to identify the cause for backup failures by using Microsoft Windows&reg; Event Viewer.

### Common backup types

The most common backup types in SQL Server include the following types:

-  **Full database backup**: As the name suggests, this is a backup of the whole database as well as parts of the transaction log. This backup enables you to restore the database from a full backup alone. The Event Viewer also refers to this backup as a *database backup*.

- **Differential database backup**: Based on the most recent full database backup, this backup includes all changes that you made to the database since the last full backup.

- **Log backup**: This backup covers the transaction log files, including all logs since the last log backup. Log backups ensure the least amount of data loss in case of failure.

### Access the Event Viewer

The following sections provide instructions for accessing the Event Viewer in different versions of Windows.

#### Windows Server 2008 R2

1. Click **Start -> Control Panel -> System and Security -> Administrative Tools**.
2. Double-click **Event Viewer**.

#### Windows Server 2012

1. Hover your mouse over the bottom-left corner of the desktop to make the **Start** button appears.
2. Right-click **Start**, select **Control Panel -> System Security**, and double-click **Administrative Tools**.
3. Double-click **Event Viewer**.

#### Windows Server 2012 R2 and Windows Server 2016

1. Right-click **Start**, select **Control Panel -> System & Security**, and double-click **Administrative Tools**.
2. Double-click **Event Viewer**.

### Locate the event log for backup failure in the Event Viewer

After you access the Event Viewer, use the following steps to review the error logs to establish the cause for the backup failure:

1. In the Event Viewer, navigate to **Windows Logs -> Application**. 
2. On the right-hand side in the **Actions** menu, navigate to **Find**. 
3. Type in the name of the database for which the failure occurred, and click **Find Next**. 

   Every time you click **Find Next**, the previous event log for the database displays.
   Continue clicking **Next** until you find the error log, labeled as *Error*, containing
   the backup failure.  If the error log itself does not include the cause for the failure,
   look for logs shortly before or after the error. Refer to the following section,
   **Common reasons for backup failures**, to learn more about the different errors.

If you encounter a log for a successful backup before getting to the failure, you know that a subsequent backup attempt succeeded. If you want to investigate the root cause for the failure, you can continue until you find the backup error log and determine the issue.

### Common reasons for backup failures

- **No available disk space**: The event log entry provides details regarding the drive and file path on which you attempted the backup. To address this issue, free up disk space.

- **Networking issue or invalid file path**: When you review the event error log, take note of the physical path and verify that the location exists on the server or network share. If you do backups across a network share, you might have to do more networking troubleshooting.

- **Insufficient permissions**: The fixed server role, **Sysadmin**, and the fixed database roles, **db_owner** and **db_backupoperator**, have **BACKUP DATABASE** and **BACKUP LOG** permissions by default. Permission issues on the backup device's physical file can interfere with a backup. SQL Server must be able to read and write to the device, so the account under which the SQL Server service runs needs write permissions.

- **High server load**: The resource usage on the system was high at the time you attempted the backup. Check for a successful subsequent backup. If the resource usage is still high, open the Task Manager (right-click on the task bar and select **Task Manager**) and identify resource-intensive processes under the **Processes** tab.

- **Database recovery model and state**: Not all database recovery models allow for all types of backups. Only databases in the FULL and BULK LOGGED recovery model permit log backups. Databases in the SIMPLE recovery model cannot perform log backups. The database must be ONLINE to accept backups. Backup actions do not succeed if a database is in one of the following modes:

     - OFFLINE
     - EMERGENCY
     - SUSPECT
     - RECOVERING
     - RECOVERY PENDING
     - RESTORING
     - SINGLE USER mode
     
- **Full database backup does not exist**: Differential and log backups only succeed if you have taken at least one full database backup. This error also applies to changes regarding the recovery model of the database. After you switch a database to a different recovery model, you must take a full database backup to allow for differential and log backups.
