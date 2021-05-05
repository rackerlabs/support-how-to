---
permalink: connect-to-a-cloud-database-with-a-fqdn-address-via-mysql-workbench
audit_date: '2020-09-14'
title: Connect to a cloud database with a FQDN address via MySQL Workbench
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

### Connect to a Cloud Database

Use the following steps to connect to a cloud database by using MySQL&reg; Workbench:

1. Go to <https://www.mysql.com/products/workbench/> and install MySQL WorkBench.

    **Note:** WorkBench supports the following platforms: Windows&reg;,
    Fedora&reg;, Ubuntu&reg;, Oracle&reg;, Redhat&reg;, and Mac OS X&reg;.
    You must register before you download it.

2. Launch MySQL Workbench and select **Server Administration -> New Server Instance**.

3. Select **Remote Host**, enter the URL from the database instance, and click **Continue**.

4. From the **Connection Method** menu, select **Standard TCP/IP over SSH**.

5. Replace the value for **SSH HostName** with the name or IP address of a cloud
    server in the same data center as the database instance. For example, if the
    database instance that you created is in the DFW data center, select a cloud
    server in the DFW data center.

6. In **SSH Username**, enter the user name to log in to the cloud server.

7. In **MySQL Hostname**, enter the hostname for the database instance.

8. For **Username**, enter the username for the database instance.

9. Click **Continue**. Enter the database instance password when prompted. If
    everything is correct, the following information displays:

     - Confirmation of open database connection
     - Server version
     - Server operating system
     - Statement that database connection tested successfully

When the **Server Administration** screen displays, you can work with your database instance.

**Note:** If you did not save your password, the system prompts you to enter the password
for the instance or server when you perform any actions.
