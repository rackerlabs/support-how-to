---
permalink: sql-server-database-recovery-models/
audit_date:
title: 'SQL Server Database Recovery Models’
type: article
created_date: '2020-04-28'
created_by: Karoline Mills
last_modified_date: 
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

### SQL Server Database Recovery Models

This article outlines the three different database recovery models available in SQL Server. It also briefly describes the most common backup options. The recovery models offer different recovery options as well as different transaction logging. Users can switch between the models at any point. A change to a new recovery model always requires a full database backup before differential and log backups are possible.

#### Common backup options

The most common backup types in SQL Server are as follows:
- **Full database backup**: As the name suggests, this is a backup of the whole database as well as parts of the transaction log. This backup enables you to restore the database from a full backup alone. The Event Viewer also refers to this backup as a database backup.
- **Differential database backup**: Based on the most recent full database backup, this backup includes all changes that you made to the database since the last full backup.
- **Log backup**: This backup covers the transaction log files, including all logs since the last log backup. Log backups ensure the least amount of data loss in case of failure.

#### Recovery Models

##### Simple

The simple recovery model is the most basic recovery model and requires the least amount of administration out of the three models. It only supports full and differential database backups. Log backups are not possible. This means, in the event of a failure, all changes made since the last full or differential backup are lost. This recovery model is not recommended for production databases. New datapoints are still written to the transaction log file, however, once data has been written to the file, the space becomes re-usable. Therefore, the transaction log file will not grow indefinitely and will never become full. 

+ **Advantanges**: low administrative effort
+ **Disadvantages**: risk of data loss


##### Full

This recovery model enables restores to a specific point in time without data loss. To ensure a successful recovery without any data loss, transaction log backups are utilized. All transaction data is stored in the transaction log file. The log file grows until a log backup is completed or the log file is truncated. Therefore, transaction log backups need to be set up to keep the log file from growing indefinitely. If the transaction log gets damaged, all changes since the last full or differential backup are lost.

+ **Advantanges**: supports point-in-time restores, no data loss in case of failure
+ **Disadvantages**: higher administrative effort

##### Bulk Logged

The bulk logged recovery model is used to perform large bulk-copy operations. Similarly to the full recovery model, it also uses log backups. Minimal logging is used when writing transactions to the transaction log file. While saving time and disk space, minimal logging can prevent point-in-time restores. You can still recover to a specific time, as long as the most recent transaction log does not include bulk operations. Transaction log backups need to be set up to keep the log file from growing indefinitely. If the transaction log gets damaged, all changes since the last full or differential backup are lost.

+ **Advantanges**: minimal logging allows for high-volume bulk operations
+ **Disadvantages**: higher administrative effort, limited point-in-time restores
