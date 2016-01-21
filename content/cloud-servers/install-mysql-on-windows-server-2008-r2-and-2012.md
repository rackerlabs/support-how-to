---
node_id: 3626
title: Install MySQL on Windows Server 2008 R2 and 2012
type: article
created_date: '2013-07-22'
created_by: Rackspace Support
last_modified_date: '2014-08-04'
last_modified_by: Kyle Laffoon
product: Cloud Servers
product_url: cloud-servers
---

<span
style="color: #292929; font-family: Arial; font-size: 14px; line-height: 18px;"><span
style="line-height: 20.50347328186035px; color: #000000; font-family: 'Lucida Grande', 'Lucida Sans Unicode', sans-serif; font-size: 13.333333969116211px;">This
article provides instructions for installing MySQL on Windows Server
2008 R2 or Windows Server 2012 by using the Microsoft Web Platform
Installer (Web PI). Web PI makes it simple to install a variety of
applications to your Windows Server 2008 R2 or 2012
server. </span></span>

**<span style="color: #292929; font-family: Arial; font-size: 14px; line-height: 18px;">Download Web PI</span>**
----------------------------------------------------------------------------------------------------------------

<span
style="color: #292929; font-family: Arial; font-size: 14px; line-height: 18px;">Download
the most recent version of Web PI on your Windows Server from
[http://www.microsoft.com/web/downloads/platform.aspx](http://www.microsoft.com/web/downloads/platform.aspx.).
</span>

<span
style="color: #292929; font-family: Arial; font-size: 14px; line-height: 18px;"><img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/pi_download.png" width="623" height="467" /></span>

**<span style="color: #292929; font-family: Arial; font-size: 14px; line-height: 18px;">Install MySQL </span>**
---------------------------------------------------------------------------------------------------------------

1.  <span
    style="color: #292929; font-family: Arial; font-size: 14px; line-height: 18px;">Launch
    the Web PI application by running the **wpilauncher.exe** file that
    you downloaded in the preceding  section.</span>
2.  <span
    style="color: #292929; font-family: Arial; font-size: 14px; line-height: 18px;">
    In the Web Platform Installer window, search for **MySQL** in the
    search box. </span>
3.  <span
    style="color: #292929; font-family: Arial; font-size: 14px; line-height: 18px;">Select
    **MySQL Windows 5.1** (or currrent version), click **Add**, and then
    click **Install** to start the installation.
    </span>

    <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/install.png" width="629" height="471" />

4.  Provide a password for the **root **account of the MySQL server.

    <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/password.png" width="624" height="429" />

5.  Review the licensing agreement and click **I Accept**.

    <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/license.png" width="623" height="427" />
    The MySQL Windows 5.1 application is downloaded and installed on
    your Windows Server 2008R2 and 2012 server.

6.  After the installation is completed, click **Finish**.

**Note**: You can launch MySQL by running the `mysqld.exe` command from
the installation directory. By default this is set to **C:\\Program
Files\\MySQL\\MySQL Server 5.1\\bin**.

