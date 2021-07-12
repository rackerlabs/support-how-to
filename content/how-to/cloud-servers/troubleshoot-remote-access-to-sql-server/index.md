---
permalink: troubleshoot-remote-access-to-sql-server
audit_date: '2021-07-09'
title: Troubleshoot remote access to SQL Server
type: article
created_date: '2011-08-16'
created_by: Rackspace Support
last_modified_date: '2021-07-09'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

When you can't connect to a [Microsoft&reg; SQL server&reg;](https://www.rackspace.com/managed-hosting/database-services/microsoft-sql)
instance remotely through ODBC, Visual Studio&reg;, or a SQL Server Management Studio&reg;
connection, the Windows&reg; firewall is usually blocking access. Use the
resolutions in this article to troubleshoot the issue.

### Verify port traffic

Verify the Windows firewall allows traffic over port `1433`:

1. Open PowerShell&reg; on your remote workstation.
2. Run the following command:

         test-netconnection <public IP address> -port 1433

### Open TCP ports

To troubleshoot this issue, open TCP port `1433` for the service itself. If you
need to use the SQL Browser service, also open port `1434`. This resolution
applies to SQL Server&reg; versions 2005, 2008, 2008 R2, and 2012.

1. Open the **Run** window by pressing the keys **Windows** + **R**, type
   **cliconfig**, and make sure to enable the TCP/IP protocol if it isn't
   enabled.

2. Verify that the SQL Server service is running.

   - *SQL Server 2005, 2008, and 2008 R2*:
     
     Select **Start > Administrative Tools > Services** and verify that the
     **SQL Server (MSSQLSERVER)** service is running.

   - *SQL Server 2012, 2014, and 2016*:
      
     Use the Windows key or hover the mouse pointer over the lower-left
     corner of the desktop, select **Administrative Tools > Services** and
     verify that the **SQL Server (MSSQLSERVER)** service is running.

3. Ensure that you are using the correct credentials to authenticate. The
   default SQL Server administrator account is named **sa**. If you built the
   server from a server image with SQL Server pre-installed, the password is in
   a text file on the root of the C partition.

4. From a command prompt, run **netstat -an**.

5. In the output, verify whether the server is listening for SQL Server traffic
   on ports `1433` and optionally `1434`. If not, proceed with the following
   steps to use the SQL Server Configuration Manager to change the ports.

6. Open the SQL Server Configuration Manager as follows:

   - *SQL Server 2005, 2008, and 2008 R2*:
     
     Go to **Start > All Programs > Microsoft SQL Server 2005 (or 2008 or
     2008 R2) > Configuration Tools > SQL Server Configuration Manager**.

   - *SQL Server 2012, 2014, and 2016*:
     
     Use the Windows key or hover the mouse pointer over the lower-left
     corner of the desktop and select **All Programs > Microsoft SQL Server
     2012 (or 2014 or 2016) > Configuration Tools > SQL Server Configuration
     Manager**.

7. In the navigation pane, expand **SQL Server Network Configuration** and
   select the protocols for your SQL Server instance.

8. In the right pane, right-click **TCP/IP** and select **Properties**.

9. Select the **IP Addresses** tab.

10. Ensure that all TCP port mentioned on all interfaces is `1433`.

11. Click **OK**.

12. Restart the SQL Server service.

### Specify the SQL Server instance name when using named instances

Named instances let you host SQL Server versions or service
types. If you are using named instances when installing SQL Server, you must
specify the name of the SQL Server instance when connecting rather than using
the server name or IP address. Append a backslash and the SQL Server instance
name to theserver name or IP address. For example,
**12.34.56.78\\sqlInstanceName** or **sqlServerName\\sqlInstanceName**.
