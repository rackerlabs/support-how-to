---
permalink: setup-and-use-of-sql-server-management-studio/
audit_date:
title: Setup and use of SQL Server Management Studio (SSMS)
type: article
created_date: '2020-09-17’
created_by: Karoline Mills
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---


This article walks you through the steps of installing, configuring and using SQL Server Management Studio (SSMS). SSMS is a free Microsoft application that allows you to manage and configure all components of SQL Server.

#### Installing SSMS

You can download the most recent version of SSMS directly from [Microsoft’s download page](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15#download-ssms). There you can also review the supported versions of SQL Server as well as current system requirements and supported hardware.

> Note: If you create a Rackspace Cloud Server that includes any version of SQL Server, SSMS is already pre-installed. You can find the **sa** user password in a .txt file on your desktop. The Windows administrator user is already configured for SSMS login.


#### Configuring and using SSMS

When opening SSMS for the first time, you are asked to select a server and database instance to which you want to connect to. If SQL Server is installed locally on your machine, you can select **localhost**. When connecting to SQL Server installed on a remote device, you need to specify the remote device’s IP address and database instance, for example, **123.123.123.123\sqltest**. SSMS uses the default SQL port 1433 to establish the connection, however, you can specify a custom port with a comma and the port number after the server name, for example, **123.123.123.123\sqltest,555**.
For the authentication type, you can either use **SQL Server Authentication** or **Windows Authentication**. Windows Authentication uses the same credentials that you used to login to your workstation, whereas SQL Server Authentication uses user credentials as set up in SQL Server. For both authentication methods, the Windows or SQL user has to be configured for remote login within the database instance first. 
Once connected, you can expand your database instance on the left-hand side by clicking the **+** and you will see the following sections:

-	**Databases**
       - Create and manage databases

-	**Security**
       - Configure logins, server roles, audits and credentials

-	**Server Objects**
       - Manage backup devices, endpoints, linked servers and triggers

-	**Replication** 
       - Configure Polybase and Always On High Availability groups

-	**Management**
       - Review SQL Server logs and manage maintenance plans

-	**SQL Server Agent**
       - Configure and review SQL Server jobs, alerts and error logs
