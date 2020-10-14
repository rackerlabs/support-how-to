---
permalink: configuring-log-shipping-for-mssql-server/
audit_date: '2020-10-14'
title: Configuring Log Shipping for MSSQL Server
type: article
created_date: '2020-10-12'
created_by: Dave Myers
last_modified_date: '2020-10-14'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

# What is 'Log Shipping’?

Log shipping is a Recovery Model technique. There are three recovery models available in MS-SQL simple, full, and bulk-logged. Full and Simple are the commonly used recovery models. Log Shipping can only use `full recovery` mode. You can switch to `recovery mode` at any time. 

### Prerequisites - Administrative Rights

Use the _full recovery_ mode for the primary database. The _simple recovery_ model will cause log shipping to fail.

Create a share to make the transaction log backups available to the secondary server, before you configure log shipping. This is a share of the directory that generates the transaction log backups. For example, if you back up your transaction logs to the directory `c:\data\tlogs\`, you could create the `\\primaryserver\tlogs` share of that directory.

### Configure Log Shipping

1. Configure **Log Shipping** by right-clicking the **database** and selecting **Properties**, this opens the properties on the database you wish to configure. 

2. Click **Transaction Log Shipping** under the **Select a page** window.

3. Click the **Transaction Shipping Log** and check the **Enable** box to enable the _primary database_model in the **log shipping configuration**.

4. Select to store the backup _locally_ or to a _network folder_ by opening the **Backup Settings** under the **Transaction log backups** field. Select your destination with the path to the directory where you will create the backup. You can add parameters for **Deleting** old files and **Alert** conditions if the backup fails within a specified amount of time. 

5. Create a **Name** for the backup file in the **Backup Job** field, you can also set the frequency in the **Scheduling** field. Leave the **Compression** as default and click **OK**.

6. Select the instance you wish to use as a secondary server by clicking **Add** under the **Secondary server instances and databases** and clicking **Connect**. A second column will add next to the primary.

7. Open the **Initialize Secondary Database** by selecting **Generate full backup of the primary database and restore it into the secondary database** option and clicking **OK**. 

8. Select the **Copy Files** tab and enter the path for the backup directory and file. Enter the information as in step 4.

9. Click the **Restore Transaction Log** tab to verify the selection of **Standby Mode**. You can disconnect users from the secondary database during restores here. You can delay the restore job and alert thresholds here. Click **OK** once the configured options are to your needs.

10. Schedule restore operations in the **Restore Job** field.
