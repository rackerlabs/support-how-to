---
permalink: troubleshooting-sql-log-shipping/
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

This article describes how to check your SQL Transaction Logs Shipping status in Microsoft SQL Server.

1. Open SQL Server Management Studio (SSMS) and login
2. Right-click the Primary Instance name (it will be the top level folder)
3. Click **Reports**
4. Click **Standard Reports**
5. Select **Transaction Log Shipping Status**
6. Find the **Transaction Log**
7. Make sure the **Transaction Log** has responded recently
8. No other work is required as it is running normally, if the **Transaction log** has responded.

If the **Transaction log** has not responded recently, further troubleshooting is required to find the root cause. We have listed some of the reasons below for your reference.

#### Causes/Solutions for Log Shipping Failures

There are several reasons why log shipping might trigger an alert. Any one of these can cause log shipping to go into an **ALERT** status due to the last backup, copy, or restore being past its threshold. Please note that this is not an exhaustive list of causes but it does cover the most common ones.

1. **Recovery model change**

The recovery model was changed from **Full** to **Simple** and possibly back to *Full* to clear a full log file.

- Because the backup is in alert, right-click on the **LSBackup_<databaseName>** job and select **View History**. The highlighted area shows where the log backup could not be taken because there is no current full database backup. Because of this, a full backup/restore will need to be done to re-sync the database.

2. **Transaction Log backups outside of normal schedule (backup chain disrupted)**

A log backup has been taken without using the log shipping backup job and it was not written to the same directory used by log shipping. Someone has created a log backup maintenance plan that backs up log shipped databases. Both of these actions can cause a break in the log chain.

- Because the **Restore** is in alert, right-click on the **LSRestore_<Source>_<databaseName>** job and select **View History**
- Expand the oldest error and look for *** Error to get more details on the cause of the error

3. **Unable to run restore / copy job due to low disk space on source or destination server**

- You will need to clear out any unneeded files from the affected disk.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 




