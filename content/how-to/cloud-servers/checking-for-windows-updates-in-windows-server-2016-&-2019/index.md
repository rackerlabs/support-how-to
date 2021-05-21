---
permalink: /checking-for-windows-udpates-in-windows-server-2016-&-2019/
audit_date:
title: ‘Checking for Windows Updates in Windows Server 2016-2019’
type: article
created_date: ‘2021-03-05’
created_by: Karoline Mills
last_modified_date: '2021-04-06’
last_modified_by: Karoline Mills
product: Cloud Servers
product_url: cloud-servers
---

This article explains how to check for new Windows Updates without installing them. This guide is applicable to Windows Server 2016 and 2019.

#### Checking, downloading and installing new Windows Updates
You can do this by navigating to **Settings** -> **Update & Security** -> **Windows Updates**. Click the **Check for Updates** button, and Windows will download and install all available updates. The update statuses are **Downloading** -> **Pending Install** -> **Pending Restart**. The server will be rebooted outside of the active hours, which are 8:00am – 5:00pm, unless otherwise specified. You also have the option to schedule the reboot.
#### Checking for new Windows Updates *without* downloading
You can check for Windows Updates without downloading/installing them by using one of the following methods:

##### SCONFIG
1.	Open Powershell, and type **sconfig**
2.	Type **6** to open the Windows Updates menu
3.	Type **a** to look for all available updates, or **r** to only search for recommended updates
4.	All available updates will now be listed
5.	Type **n** to close the menu without installing any updates
##### Powershell cmdlet PSWindowsUpdate
1.	Open Powershell, and type **Install-Module -Name PSWindowsUpdate -RequiredVersion 2.1.1.2** (this requires Administrator permissions)
2.	Confirm that you want to install the cmdlet by typing **Y**
3.	Once installed, type **get-windowsupdate** to see a list of all available updates
