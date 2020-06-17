---
permalink: truncating-and-shrinking-log-files-in-sql-server/
audit_date:
title: ‘Truncating and shrinking log files in SQL Server'
type: article
created_date: '2020-06-16’
created_by: Karoline Mills
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

## Truncating and shrinking log files in SQL Server

This article explains the difference between shrinking and truncating the transaction log in SQL Server. It outlines the different use scenarios and walks you through how to perform these tasks. 

### Truncating

If a database is in simple recovery model, the transaction log will be truncated automatically after every transaction. For databases in full and bulk-logged recovery model, the transaction log will not be truncated after every transaction. However, the log file is truncated automatically after a successful transaction log backup has taken place. A full database backup, on the other hand, will not truncate the log. If no regular transaction log backups are taken, the log file will continue to grow until it runs out of space. While truncating the log makes the space available for use again, it does not decrease the size of the transaction log file. To reduce the size of the transaction log file, you need to shrink the log file.

Below are the steps to truncate the transaction log file in SQL Server Management Studio (SQL Server 2008 and later). Please keep in mind that following these steps can incur data loss. It should not be necessary to manually truncate the log as regular log backups should automatically perform this task. Keep in mind that you will need *sysadmin* fixed server role or the *db_owner* fixed database role to truncate the log.

1.	Right-click the database and select *Properties* -> *Options*

2.	Set the recovery model to *Simple*, and exit the menu

3.	Right-click the database again and select *Tasks* -> *Shrink* -> *Files*

4.	Change the type to *Log*

5.	Under *Shrink action*, select *Reorganize pages before releasing unused space*, and click *OK*

6.	Once this has been completed, switch the recovery model back to *Full* or *Bulk-Logged* and take a full database backup

### Shrinking

If you need to recover disk space from the transaction log file, you want to consider shrinking the log file.  Shrinking recovers space by moving data from the end of the file to unoccupied space at the front of the file. Once enough space is created at the end of the file, it can be deallocated and returned to the file system. Shrinking can be helpful after performing an action that creates a large number of logs. The log can only be shrunk if there is free space on the log file. Keep in mind that you will need *sysadmin* fixed server role or the *db_owner* fixed database role to shrink the log.

1.	Right-click the database and select *Tasks* -> *Shrink* -> *Files*

2.	Change the type to *Log*

3.	Under *Shrink action*, select *Release unused space*, and click *OK*

Related Articles:
[SQL Server database recovery models](https://support.rackspace.com/how-to/sql-server-database-recovery-models/)
