---
permalink: installing-ftp-on-windows-server-2012-r2/
audit_date: '2020-10-16'
title: Install FTP on Windows Server 2012 (R2)
type: article
created_date: '2013-04-09'
created_by: Rackspace Support
last_modified_date: '2020-10-16'
last_modified_by: Stephanie Fillmon
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to install the File Transfer Protocol (FTP)
on Windows&reg; Server&reg; 2012 (R2).

### Installation Requirements

Before you install FTP, you must add the IIS 8.x role to the Windows
Server 2012 (R2) instance. If you have previously installed the IIS role
without FTP support, this article walks you through setting it up.

### Installing FTP on Windows Server 2012 (R2)

Use the following steps to install FTP:

1. Open the **Server Manager** from the taskbar.

2. From the **Server Manager** Dashboard, click **Add Roles and Features**.

3. From the **Installation Type** section, select **Role-based or feature-based installation** and click **Next**.

   **Note**: Roles are the major feature sets of the server, such as IIS, and
   features provide additional functionality for a given role.

4. The current server is selected by default. Click **Next**
to move to the Server Roles selection tab.

5. From the **Server Roles** tab, expand the **Web Server (IIS)**
dropdown and place a check in the box for **FTP Server**. Click
**Next** to move to the Features selection tab.

   {{<image src="server_roles_ftp.png" alt="" title="">}}

6. Select any additional features desired for your IIS deployment and
click **Next.**

   **Note**: You can also add these features at any point in the future
   through the setup wizard. A brief description of each feature displays on
   the right-hand pane of the wizard. Select a feature to read its
   description. See official Microsoft&reg; documentation to learn more about
   each feature.

7. Review your installation and click **Install**.

8. A progress bar shows you the status of the installation. When the
   installation is complete, the wizard displays a success notification.
