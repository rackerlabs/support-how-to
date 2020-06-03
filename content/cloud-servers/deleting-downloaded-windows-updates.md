---
permalink: deleting-downloaded-windows-updates/
audit_date:
title: ‘Deleting Downloaded Windows Updates’
type: article
created_date: '2020-06-03’
created_by: Karoline Mills
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---


### Deleting downloaded Windows Updates

This article describes the steps to delete downloaded but not yet installed Windows update files. This can be helpful if update files are incomplete or corrupted.  This guide is applicable to Windows Server 2012 R2, Windows Server 2016, Windows Server 2019, as well as Windows 10. Please keep in mind that you might need administrator permissions to delete certain files. 

Follow the following steps to delete these files:

1.	Open the Start menu by clicking on the **Start** button

2.	Type **Services** to bring up the Services application

3.	Right-click on the result and select **Run as administrator**

4.	Click **Name** to sort all services alphabetically

5.	Find the **Windows Update service** and stop it by right-clicking and selecting **Stop**

6.	Open the file explorer and navigate to C:\WINDOWS\SoftwareDistribution\Download

7.	If you do not see files in this folder, you need to enable viewing of hidden files first:
	    - Click on **View** -> **Options** -> **Change folder and search options**
	    - In folder options, click on **View** and select **Show hidden files, folders and drives**
        - Remove the checkmark from **Hide protected operating system files** and click **OK**

8.	Select all files and right-click to delete 

9.	Go back to the Services window

10.	Right-click on the **Windows Update service**, and select **Start**
