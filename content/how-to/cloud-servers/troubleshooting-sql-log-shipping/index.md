---
permalink: troubleshooting-sql-log-shipping
audit_date: '2021-04-23'
title: 'Basic Troubleshooting of SQL Log Shipping'
type: article
created_date: '2021-03-10'
created_by: Travis Cook
last_modified_date: '2021-04-23'
last_modified_by: Carlos Arriaga
product: SQL, Cloud Product
product_url: cloud servers
---

This article describes how to check your SQL Transaction Log Shipping status in Microsoft&reg; SQL Server&reg;.

1. Open SQL Server Management Studio (SSMS) and log in.
2. Right-click the Primary Instance name in the top-level folder.
3. Click **Reports**.
4. Click **Standard Reports**.
5. Select **Transaction Log Shipping Status**.
6. Find the **Transaction Log**.
7. Make sure the **Transaction Log** has responded recently.

If the **Transaction log** has responded, it is running normally, and you don't need to do
anything else. If the **Transaction log** has not responded recently, use the following
section to troubleshoot the root cause.

### Causes and solutions for log shipping failures

There are several reasons why log shipping might trigger an alert. Any one of these can cause
log shipping to go into an **ALERT** status due to the last backup, copy, or restore being
past its threshold. Note that this is not an exhaustive list of causes, but it does cover the
most common ones.

#### Recovery model change

**Possible cause**: The recovery model was changed from **Full** to **Simple** and possibly
back to **Full** to clear a full log file.

**Solution**: Because the backup is in *alert*, right-click on the **LSBackup\_\<databaseName\>**
job and select **View History**. The highlighted area shows where the system could not take the
log backup because there is no current full database backup. You need to do a full backup or
restore to re-sync the database.

#### Transaction Log backups occurred outside of the normal schedule (backup chain disrupted)

**Possible causes**: When a log backup ran without using the **log shipping backup** job,
the log did not write to the same directory used by log shipping. Or, someone created a log
backup maintenance plan that backed up log-shipped databases. Both of these actions can cause
a break in the log chain.

**Solution**: Because the restore is in *alert*, right-click on the **LSRestore\_\<Source\>\_\<databaseName\>**
job and select **View History**. Then, expand the oldest error and look for **Error** to get
more details on the root cause.

#### Unable to run a restore or copy job 

**Possible cause**: The source or destination server is running out of disk space.

**Solution**: You need to clear out any unneeded files from the affected disk.

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact). 
