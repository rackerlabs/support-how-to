---
permalink: configure-log-shipping-for-mssql-server
audit_date: '2020-10-14'
title: Configure Log Shipping for MSSQL Server
type: article
created_date: '2020-10-12'
created_by: Dave Myers
last_modified_date: '2020-10-14'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

### What is *log shipping*?

Log shipping is a Recovery Model technique with three recovery models available in MS-SQL *simple*, *full*,
and *bulk-logged*. Full and simple are the commonly used recovery models. Log shipping can only use
full recovery mode. You can switch to `recovery mode` at any time. 

### Prerequisites

You must have administrative rights.

Use the full recovery mode for the primary database. The simple recovery model causes log shipping to fail.

Create a share of the directory that generates the transaction log backups to make those log backups available
to the secondary server before you configure log shipping. For example, if you back up your transaction logs to
the directory **c:\\data\\tlogs\\**, you could create the **\\primaryserver\\tlogs** share of that directory.

### Configure log shipping

1. To configure **Log Shipping**, right-click **database** and select **Properties**. This opens the properties
on the database you want to configure. 

2. Click **Transaction Log Shipping** under the **Select a page** window.

3. Click the **Transaction Shipping Log** and check the **Enable** box to enable the primary database_model in
the **log shipping configuration**.

4. Select to store the backup locally or to a network folder by opening the **Backup Settings** under the **Transaction log backups** field. Select your destination with the path to the backup directory. You can add parameters for deleting old files and alert conditions if the backup fails to complete within a specified amount of time. 

5. Create a name for the backup file in the **Backup Job** field. You can also set the frequency in the **Scheduling** field. Leave the **Compression** as default and click **OK**.

6. Select the instance to use as a secondary server by clicking **Add** under the **Secondary server instances and databases** and clicking **Connect**. A second column displays next to the primary.

7. Open **Initialize Secondary Database** by selecting the **Generate full backup of the primary database and restore it into the secondary database** option and clicking **OK**. 

8. Select the **Copy Files** tab and enter the path for the backup directory and file. Enter the information from step 4.

9. Click the **Restore Transaction Log** tab to verify the selection of **Standby Mode**. You can disconnect users from the secondary database during restores and delay the restore job and alert thresholds here. Click **OK** after you configure the options.

10. Schedule restore operations in the **Restore Job** field.
