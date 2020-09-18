---
permalink: install-the-wsus-server-role/
audit_date:
title: Install the WSUS Server Role
type: article
created_date: '2020-09-18’
created_by: Travis Cook
last_modified_date:
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

# How to Install the WSUS server role:

Windows Server Update Services (WSUS), previously known as Software Update Services (SUS), is a computer program and network service developed by Microsoft Corporation that enables administrators to manage the distribution of updates and hotfixes released for Microsoft products to computers in an environment.

WSUS uses seven services. They are the Update Service (wsusservice.exe), the Reporting Web Service, the API Remoting Web Service, the Client Web Service, the Simple Web Authentication Web Service, the Server Synchronization Service, and the DSS Authentication Web Service.

This article will go over the basics of installing the WSUS Role onto your server. The steps are listed below.


	1. Open **Server Manager**.

	2. Click **Manager** then **add Roles and Features**.
	
	3. Click **Next** on the **Before you Begin** page.
	
	4. On the next page make sure the **Role-base or feature-base installation** option is selected and then click **Next**.
	
	5. Once on the **select destination server** page you will choose were to install the WSUS role. Once you make the selection click **Next**.
	
	6. On the **select server roles** page select the **Windows Server Update Services**.
	
	7. The **Add features that are required for Windows Server Update Services** should open. Click **Add Features** then click **Next**.
	
	8. Once on the **select features** page keep the default selections. Click **Next**.
	
	9. On the **Windows Server Update Services** page, click **Next**.
	
	10. On the **Select Role Services** page keep the default selections and click **Next**.
	
	11. Once on the **Content location selection** page, type in a valid location to store the updates then click **Next**. For example you could name the folder "WSUSDatabase" within your C: Drive. This would look like this "C:\WSUSDatabase".
	
	12. On the **Web Server Role (IIS)** page, review the information and click **Next**. On the next page select the role services to install for Web Server (IIS), keep the **defaults** and click **Next**.
	
	13. Review the selected options on the **Confirm installation selections** page. The WSUS installation wizard will run and might take several minutes to complete.
	
	14. Once  WSUS completes the installation the summary window will pop up. Click **Launch Post-Installation tasks**. Once done the text will change to **Configuration Successfully Completed**.
	
	15. Click **Close**.


After this process you may need to perform a restart on the device to get the role up and running.
