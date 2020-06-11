---
permalink: 'troubleshoot-copy-and-paste-errors-with-remote-desktop/'
audit_date: '2020-06-11'
title: 'Troubleshoot copy and paste errors with Remote Desktop'
type: article
created_date: '2020-06-010'
created_by: Benji Ivey
last_modified_date: '2020-06-11'
last_modified_by: Cat Lookabaugh#
product: Cloud Servers
product_url: cloud-servers
---

This article shows you how to troubleshoot copy and paste errors with Remote Desktop. 

*This article applies to Windows 2008, 2012, and 2016.*

### Check client settings

Before going into OS-specific troubleshooting, you should first check your own client settings by using
the following steps:

1. Open the Microsoft&reg; Remote Desktop Protocol (RDP) client that you use to connect to your server.
2. Navigate to the **Local Resources** tab.
3. Make sure that you check the **Clipboard** option because this allows you to copy and paste text.
4. Click More, and check the Drives option, hit ok and then ok again.

Checking the **Clipboard** option enables only copying an pasting for text and not for files. If you only
need text and not files copy and paste, you can stop here.

### Windows 2008

For Windows 2008, use the following steps:

1. Launch **Remote Desktop Host Configuration"** from the server.
2. Under **Connections**, right click the connection and select **Properties**.
3. Click on the **Client Settings** tab.
4. Un-check **Clipboard** for copy and paste for text and, for files, make sure **Drive** is un-checked.

### Windows 2012

For Windows 2012, use the following steps:

1. Open **Server Manager**.
2. Select **Remote Desktop Services**.
3. Select **Collections**.
4. Select **Tasks** and then choose **Edit Properties**.
5. Under the **Client Settings** Tab, make sure both **Clipboard** and **Drive** are enabled.

### Windows 2016

For Windows 2016, you need to control these settings within the **Group Policy** instead of using
the **Server Manager**.

1. Launch **gpedit.msc**.
2. Navigate to **Computer Configuration** > **Administrative Templates** > **Windows Components** > **Remote Desktop Services** > **Remote Desktop Session Host**.
3. Ensure **Do not allow Clipboard redirection** is set to **Not Configured** or **Disabled**.

After you try all these troubleshooting steps, you might need to restart the server or open the 
**Task Manager** and end the **rdpclip** process.
