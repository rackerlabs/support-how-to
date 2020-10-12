---
permalink: configuring-log-shipping-for-mssql-server/
audit_date:
title: Configuring Log Shipping for MSSQL Server
type: article
created_date: '2020-10-12'
created_by: Dave Myers
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

# What is 'Log_Shipping'

Log shipping is a Recovery Model technique. There are three recovery models available in MS-SQL simple, full, and bulk-logged. Full and Simple are the commonly used recovery models. Log Shipping can only be used Full recover model, however the recovery model can be switched at any time. 

### Prerequisites - Administrative Rights

The primary database must use the full recovery model; Changing the database to simple recovery will cause log shipping to fail.

Before you configure log shipping, you must create a share to make the transaction log backups available to the secondary server. This is a share of the directory where the transaction log backups will be generated. For example, if you back up your transaction logs to the directory c:\data\tlogs\, you could create the \\primaryserver\tlogs share of that directory.

### Configuring Log Shipping

1. Open the properties on the database you wish to configure **Log Shipping** by right clicking the database and selecting **Properties** 

2. Under the **Select a page** window, click **Transaction Log Shipping**

3. Select **Transaction Shipping Log** and check the **Enable** box to **Enable this as a primary database in a log shipping configuration**

4. Open the **Backup Settings** under the **Transaction log backups** field is where you can select to store the backup locally or to a network folder. Select your destination with path to the directory in which the backup will be created. Then you can add parameters for **Deleting** old files and **Alert** conditions if the backup fails within a specified amount of time. 

5. In the **Backup Job** field you will create a **Name** for the backup file and **Scheduling** for frequecy. Leave the **Compression** as default and click **OK**.

6. Click **Add** under the **Secondary server instances and databases**, **Select** the instance you wish to use as a Secondary Server and click **Connect** A second column will be added next to the primary.

7. Open the **Initialize Secondary Database** by selecting **Generate full backup of the primary database and restore it into the secondary database** option and click **OK**. 

8. Select the **Copy Files** tab and enter the path for the backup directory and file. Enter the information as in step 4.

9. Click the **Restore Transaction Log** tab verify that **Standby Mode** is selected. You can select to disconnect users from the Secondary database during restores here. There will also be an option to delay the restore job and alerting thresholds here. Click **OK** once the configured options are to your needs.

10. The **Restore Job** field can be used for scheduling restore operations.
