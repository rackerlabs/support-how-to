---
permalink: truncate-and-shrink-log-files-in-sql-server
audit_date: '2020-06-18'
title: 'Truncate and shrink log files in SQL Server'
type: article
created_date: '2020-06-16'
created_by: Karoline Mills
last_modified_date: '2020-06-18'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes the difference between shrinking and truncating the transaction log in Microsoft&reg; SQL Server&reg;. It outlines the different use scenarios and walks you through how to perform these tasks. 

### Understand truncating the log

If a database is a simple recovery model, the system truncates the transaction log automatically after every transaction. For databases with a full or bulk-logged recovery model, the system truncates the transaction log only after a successful transaction log backup. 

A full database backup does not truncate the log. If you don't take regular transaction log backups, the log file continues to grow until it runs out of space. While truncating the log makes the space available for use again, it does not decrease the transaction log file size. To reduce the size of the transaction log file, you need to shrink the log file.

### Truncate the transaction log

Use the following steps to truncate the transaction log file in SQL Server Management Studio (SQL Server 2008 and later). Keep in mind that following these steps might result in data loss. You should not need to manually truncate the log because regular log backups should automatically perform this task. 

**Note**: You need the `sysadmin` fixed server role or the `db_owner` fixed database role to truncate the log.

1.	Right-click the database and select **Properties -> Options**.

2.	Set the recovery model to `Simple` and exit the menu.

3.	Right-click the database again and select **Tasks -> Shrink -> Files**.

4.	Change the type to `Log`.

5.	Under **Shrink action**, select **Reorganize pages before releasing unused space** and click **OK**.

6.	When the process completes, switch the recovery model back to `Full` or `Bulk-Logged` and take a full database backup.

### Understand shrinking the log

If you need to recover disk space from the transaction log file, consider shrinking the log file.  Shrinking recovers space by moving data from the end of the file to unoccupied space at the front of the file. After the process creates enough space at the end of the file, it can be deallocated and returned to the file system. Shrinking logs helps after you perform an action that creates a large number of logs. You can only shrink the log if there is free space on the log file. 

### Shrink the transaction log

Use the following steps to truncate the transaction log file:

**Note**: You need the `sysadmin` fixed server role or the `db_owner` fixed database role to shrink the log.

1.	Right-click the database and select **Tasks -> Shrink -> Files**.

2.	Change the type to `Log`.

3.	Under **Shrink action**, select **Release unused space** and click **OK**.

**Related Articles:**

[SQL Server database recovery models](/support/how-to/sql-server-database-recovery-models/)
