---
permalink: connect-to-azure-sql/
audit_date:
title: Connect to Azure SQL
type: article
created_date: '2017-05-31'
created_by: Juan Garza
last_modified_date: '2017-05-31'
last_modified_by: Nate Archer
product: Managed Operations
product_url: managed-operations
---

This article describes how to connect to Azure SQL.

### Prerequisite

- Your login credentials for the Azure portal. For information about how to log in to the Azure portal, see [Sitecore Cloud portals and account management](/how-to/sitecore-cloud-portals-and-account-management/).

### Install the latest version of SQL Server Management Studio

When working with SQL Database, you should always use the most recent version of SQL Server Management Studio (SSMS). The latest version of SSMS is continually updated and optimized to work with Azure and SQL Database. The latest version of SSMS works for all supported versions of SQL Server. To download and install the latest version, see the Microsoft documentation [Download SQL Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms).

In the **Connect to Server** dialog box, enter the necessary information to connect to your SQL server using SQL Server Authentication.
To stay up-to-date, the latest version of SSMS prompts you when there is a new version available to download.

### Create a server level firewall rule

By default, an Azure SQL Database firewall prevents external connectivity to your logical server and its databases. To enable you to connect to your server, you need to create a firewall rule for the IP address of the computer from which you connect.

1. Log in to the [Azure portal](https://portal.azure.com/).

2. In the left side navigation pane, select **SQL server**.

3. On the SQL server pane, click **Firewall** to open the **Firewall pane** for your server. The IP address is displayed on your client computer.

4. Click **Add client IP** on the toolbar to create a firewall rule for your current IP address. You can create a firewall rule for a single IP address or an entire range of addresses. Opening the firewall enables SQL administrators and users to log in to any database on the server for which they have valid credentials.

5. Click **Save** on the toolbar save this server level firewall rule, and then select **Ok** to close the Success dialog box.

### Connect to the server with SSMS

1. Open the SQL Server Management Studio.

2. In the "Connect to Server" dialog box, enter your server name and then select **SQL Server Authentication**. Provide the username and password that you specified when creating your server level Firewall rule.

3. Click **Connect** to start the connection, and then open **Object Explorer** in SSMS.

### Backing up Azure SQL

SQL Database automatically performs a combination of full database backups weekly, differential database backups hourly, and transaction log backups every five minutes to protect your business from data loss. These backups are stored in geo-redundant storage for 35 days for databases in the Standard and Premium service tiers. If you need  to recover data from a period older than 35 days, consider archiving your database regularly to a BACPAC file (a compressed file containing your database schema and associated data) stored either in Azure blob storage or in another location of your choice.
