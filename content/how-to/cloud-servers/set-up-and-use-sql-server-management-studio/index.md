---
permalink: set-up-and-use-sql-server-management-studio/
audit_date: '2020-09-22'
title: Set up and use SQL Server Management Studio (SSMS)
type: article
created_date: '2020-09-17'
created_by: Karoline Mills
last_modified_date: '2020-09-22'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to install, configure, and use SQL Server Management Studio&reg; (SSMS). SSMS is a
free Microsoft&reg; application that enabless you to manage and configure all the components of SQL Server.

#### Install SSMS

Download the most recent version of SSMS directly from [Microsoft’s download page](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15#download-ssms). 
You can also review the supported versions of SQL Server, current system requirements, and supported hardware.

**Note:** If you create a Rackspace Cloud Server that includes SQL Server version, SSMS comes pre-installed. You can
find the **sa** user password in a **.txt** file on your desktop. The system configures the Windows administrator
user for SSMS login.


#### Configure and use SSMS

When you open SSMS for the first time, the application prompts you to select a server and database instance to which
you want to connect. If you installed SQL Server locally on your machine, you can select **localhost**. When you
connect to SQL Server installed on a remote device, you need to specify the remote device’s IP address and database
instance, such as **123.123.123.123\sqltest**. SSMS uses the default SQL port `1433` to establish the connection.
However, you can specify a custom port with a comma and the port number after the server name, such as
**123.123.123.123\sqltest,555**.

For the authentication type, you can either use **SQL Server Authentication** or **Windows Authentication**. Windows
Authentication uses the same credentials that you used to login to your workstation, whereas SQL Server Authentication
uses the user credentials set up in SQL Server. For both authentication methods, you must configure the Windows or SQL
user for remote login within the database instance first. 

After you connect, you can expand your database instance on the left side of the window by clicking the **+** to see
the following sections:

-	**Databases**
       - Create and manage databases

-	**Security**
       - Configure logins, server roles, audits, and credentials

-	**Server Objects**
       - Manage backup devices, endpoints, linked servers, and triggers

-	**Replication** 
       - Configure Polybase and AlwaysOn High Availability groups

-	**Management**
       - Review SQL Server logs and manage maintenance plans

-	**SQL Server Agent**
       - Configure and review SQL Server jobs, alerts, and error logs
