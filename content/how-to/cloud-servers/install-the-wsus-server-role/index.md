---
permalink: install-the-wsus-server-role
audit_date: '2020-09-21'
title: 'Install the WSUS server role'
type: article
created_date: '2020-09-18'
created_by: Travis Cook
last_modified_date: '2020-09-21'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

Windows&reg; Server Update Services (WSUS), previously known as Software Update Services (SUS), is a computer
program that enables administrators to manage the distribution of updates and hotfixes released for Microsoft&reg;
products to computers in an environment.

WSUS uses the following services:

- Update Service (wsusservice.exe)
- Reporting Web Service
- API Remoting Web Service
- Client Web Service
- Simple Web Authentication Web Service
- Server Synchronization Service
- DSS Authentication Web Service

This article describes how to install the WSUS role on your server by using the following steps:

1. Open **Server Manager**.

2. Click **Manager** -> **add Roles and Features**.
	
3. Click **Next** on the **Before you Begin** page.
	
4. On the next page, make sure you select the **Role-base or feature-base installation** option and then click **Next**.
	
5. On the **select destination server** page, choose where to install the WSUS role and click **Next**.
	
6. On the **select server roles** page, select the **Windows Server Update Services**.
	
7. After the **Add features that are required for Windows Server Update Services** window opens, click 
   **Add Features** and then click **Next**.
	
8. On the **select features** page, keep the default selections. Click **Next**.
	
9. On the **Windows Server Update Services** page, click **Next**.
	
10. On the **Select Role Services** page, keep the default selections and click **Next**.
	
11. On the **Content location selection** page, type in a valid location to store the updates then click **Next**.
    For example, you could name the folder **WSUSDatabase** on your **C:** Drive (**C:\WSUSDatabase**).
	
12. On the **Web Server Role (IIS)** page, review the information and click **Next**. On the next page, select
    the role services to install for Web Server (IIS), keep the **defaults**, and click **Next**.
	
13. Review the selected options on the **Confirm installation selections** page. The WSUS installation wizard
    runs and might take several minutes to complete.
	
14. After the WSUS installation completes, the summary window opens. Click **Launch Post-Installation tasks**.
    After the tasks finish, the text changes to **Configuration Successfully Completed**.
	
15. Click **Close**.


After this process, you might need to restart the device to get the role up and running.
