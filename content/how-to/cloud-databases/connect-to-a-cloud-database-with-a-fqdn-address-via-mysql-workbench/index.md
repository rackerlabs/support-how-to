---
permalink: connect-to-a-cloud-database-with-a-fqdn-address-via-mysql-workbench/
audit_date: '2020-09-14'
title: Connect to a Cloud Database with a FQDN Address via MySQL Workbench
type: article
created_date: '2012-08-02'
created_by: Rae D. Cabello
last_modified_date: '2020-09-14'
last_modified_by: Rose Morales
product: Cloud Databases
product_url: cloud-databases
---

### Prerequisites

- A cloud server
- A cloud database

Use the following steps to connect to cloud databases by using MySQL Workbench.

1. Go to <https://www.mysql.com/products/workbench/> and install MySQL
    WorkBench.

    **Note:** WorkBench supports the following platforms: Windows&reg;,
    Fedora&reg;, Ubuntu&reg;, Oracle&reg;, Redhat&reg;, and Mac OS X&reg;.
    Registration is required before you download.

2. Launch MySQL Workbench, and select **New Server Instance** under **Server
    Administration**.

3. Select **Remote Host** and enter the URL from the database instance and click
    **Continue**.

4. From the **Connection Method** menu, select **Standard TCP/IP over SSH**.

5. Replace the value for **SSH HostName** to the name or IP address of a cloud
    server in the same data center as the database instance. For example, if the
    database instance that you created is in the DFW data center, select a cloud
    server in the DFW data center.

6. On **SSH Username**, enter the user name to log in to the cloud server.

7. On **MySQL Hostname**, enter the host name for the database instance.

8. For **Username**, enter the username for the database instance.

9. Click **Continue**. You are prompted for the database instance password. If
    everything is correct, the following information is displayed:

     - Confirmation of open database connection
     - Server version
     - Server operating system
     - Statement that database connection tested successfully

After the database connection is tested, the Server Administration screen is
displayed. You can now work with your database instance.

**Note:** If you did not save your password, when you perform any actions, you
will be prompted for the password to either the instance or the server.
