---
permalink: sql-server-database-recovery-models
audit_date: '2020-04-28'
title: 'SQL Server database recovery models'
type: article
created_date: '2020-04-28'
created_by: Karoline Mills
last_modified_date: '2020-04-29'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article outlines the three different database recovery models available in Microsoft &reg; SQL Server&reg;.
It also briefly describes the most common backup options. The recovery models offer different recovery options
as well as different transaction logging, and users can switch between the models at any point. When you change to a new recovery model, you always need to take a full database backup before you can take differential and log backups.

### Common backup options

Common backup options for SQL Server databases include the following types:

- **Full database backup**: As the name suggests, this is a backup of the whole database as well as parts of the
  transaction log. This backup enables you to restore the database from a full backup alone. The Event Viewer also
  refers to this backup as a database backup.

- **Differential database backup**: Based on the most recent full database backup, this backup includes all changes
   made to the database since the last full backup.

- **Log backup**: This backup covers the transaction log files, including all logs since the last log backup. Log
  backups ensure the least amount of data loss in case of failure.

### Recovery models

This section describes the recovery models.

#### Simple

The simple recovery model is the most basic one and requires the least amount of administration
of the three models.

- It only supports full and differential database backups, and log backups are not possible.
- If a failure occurs, you lose all changes made since the last full or differential backup.
- You should not use this recovery model for production databases.
- The system writes new data points to the transaction log file. However, after writing the data to the file, the
  system can reuse that space. Therefore, the transaction log file does not grow indefinitely and never becomes full. 

+ **Advantages**: Low administrative effort
+ **Disadvantages**: Risk of data loss


#### Full

The full recovery model enables you to restore to a specific point in time without data loss. To ensure a
successful recovery without any data loss, use transaction log backups.

- The transaction log file stores all transaction data.
- The log file grows until a log backup completes, or the log file truncates. Therefore, you need to set up
  transaction log backups to keep the log file from growing indefinitely. 
- If the transaction log gets damaged, you lose all changes since the last full or differential backup.

+ **Advantages**: Supports point-in-time restores, no data loss in case of failure
+ **Disadvantages**: Higher administrative effort

#### Bulk-logged

Use the bulk-logged recovery model to perform large bulk-copy operations. Similar to the full recovery model,
bulk-log uses log backups. 

- This model uses minimal logging when writing transactions to the transaction log file. While this saves time
  and disk space, minimal logging can prevent point-in-time restores. 
- You can still recover to a specific time, as long as the most recent transaction log does not include bulk
  operations. 
- You need to set up transaction log backups to keep the log file from growing indefinitely. If the transaction
  log gets damaged, you lose all changes since the last full or differential backup.

+ **Advantages**: Minimal logging allows for high-volume bulk operations
+ **Disadvantages**: Higher administrative effort, limited point-in-time restores
