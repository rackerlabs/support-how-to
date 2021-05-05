---
permalink: log-in-to-your-server-via-rdp-windows
audit_date: '2020-10-16'
title: Log in to your server via RDP (Windows)
type: article
created_date: '2011-03-16'
created_by: Rackspace Support
last_modified_date: '2020-10-16'
last_modified_by: Stephanie Fillmon
product: Cloud Servers
product_url: cloud-servers
---

This article addresses how to connect and log in to your Windows&reg;
Server&reg; by using Microsoft&reg; Remote Desktop Protocol.

### Windows and Mac versions

The following instructions describe how to use RDP on Windows XP. Different
versions of Windows, such as Windows 7 and Windows 8, vary slightly,
but the operation of Remote Desktop remains the same across all
versions of Windows.

On MacOS&reg;,
[download](https://apps.apple.com/us/app/microsoft-remote-desktop/id1295203466?mt=12)
and install the Remote Desktop Connection Client for
Mac. The steps to connect to your server are very similar.

For more information on configuring and running `Remote Desktop Connection for Mac`, see
[Get started with the macOS client](https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-mac).

### Run the Remote Desktop Connection client

1. Open the Remote Desktop Connection Client by clicking **Start** >
   **All Programs** > **Accessories** > **Communications** >
   **Remote Desktop Connection**.

2. Enter the IP address of the server in the **Computer** field and click
   **Connect**.

3. *(Optional)* To set up file transfer or enable your clipboard for
   copy/paste, click **Options**.

4. Click the **Local Resources** tab, select the **Clipboard** option, click **More**,
   and then click **Drives**.

Save your session by clicking the **General** tab and clicking **Save As**.

### Log in to your server

After you have connected, the Windows login screen displays. To log
in for the first time, enter the Computer Name\\Administrator and the
corresponding password (this is the password that was emailed to you
when your server build completed).

Congratulations, you have successfully connected and logged in to your
new server!
