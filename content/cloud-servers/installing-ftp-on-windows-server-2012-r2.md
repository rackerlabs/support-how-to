---
node_id: 3385
title: Installing FTP on Windows Server 2012 (R2)
type: article
created_date: '2013-04-09'
created_by: Rackspace Support
last_modified_date: '2016-01-14'
last_modified_by: Stephanie Fillmon
product: Cloud Servers
product_url: cloud-servers
---

<span>Installation Requirements</span>
--------------------------------------

Prior to installing FTP the IIS 8.x role must be added to the Windows
Server 2012 (R2) instance. If you have previously installed the IIS role
without FTP support this article will walk you through setting it up.

Installing FTP on Windows Server 2012 (R2)
------------------------------------------

<span>1. Open the **Server Manager** from the task bar. </span>

2\. From the Server Manager Daskboard click **Add Roles and Features**.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/server_manager_iis1.png" width="746" height="560" />

<span>3. From the Installation Type section select **Role-based or
feature-based installation **and click **Next**.</span>

*Note: Roles are the major feature sets of the server, such as IIS, and
features provide additional functionality for a given
role.*<span> </span>

<span><img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/role_based_0.png" width="749" height="531" /></span>

<span>4. The current server will be selected by default. Click **Next**
to move to the Server Roles selection tab.</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/server_selection_0.png" width="749" height="531" />

<span>5. From the Server Roles tab expand the **Web Server
(IIS)** dropdown and place a check in the box for **FTP Server**. Click
**Next** to move to the Features selection tab.</span>

<span><img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/server_roles_ftp.png" width="751" height="563" /></span>

6\. Select any additional features desired for your IIS deployment and
click **Next.**

*Note: These Features can also be added at any point in the future
through the setup wizard. A brief description of each feature is show on
the right hand pane of the Wizard. Select a feature to read its
description. See official microsoft documentation to learn more about
each feature*

*<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/features_ftp.png" width="755" height="567" />*

<span>7. Review your installation and click **Install**.</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/install_ftp.png" width="755" height="566" />

8\. A progress bar will show you the status of the installion. Once the
installation is complete the Wizard will present a notification.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/ftp_install_success.png" width="755" height="566" />

**Congratulations on installing FTP on your Windows Server 2012 (R2).**

