---
permalink: install-php-on-windows-server-2012-and-later/
audit_date:
title: Install PHP on Windows Server 2012 and later
type: article
created_date: '2013-04-22'
created_by: Rackspace Support
last_modified_date: '2016-07-01'
last_modified_by: Stephanie Fillmon
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to install, test, and configure PHP on Microsoft&reg;
Windows Server 2012 and later. The article uses the Microsoft Web Platform
Installer (Web PI) method of installation and does not cover installing PHP from
the source.

### Prerequisites

Before installing PHP on a Windows Server 2012 or later, you should install
the [IIS framework](https://docs.microsoft.com/en-us/dynamics-nav/how-to--install-and-configure-internet-information-services-for-microsoft-dynamics-nav-web-client).

You should also install the
[Microsoft Windows Cache extension for PHP](https://docs.microsoft.com/en-us/iis/application-frameworks/install-and-configure-php-on-iis/use-the-windows-cache-extension-for-php).

### Install PHP with Web PI

1. Open the Web PI application from the following location on your
file system.

       C:\Program Files\Microsoft\Web Platform Installer\WebPlatformInstaller.exe

   **Note**: If the Web PI application is not currently installed, you can download
   it by using the following link: [Web PI](http://www.microsoft.com/web/downloads/platform.aspx).

2. Click the **Products** tab, click **Frameworks**, and then scroll down the
PHP choices.

3. Select **Add** next to the version of PHP you want to install and
click **Install**.

   <img src="{% asset_path cloud-servers/install-php-on-windows-server-2012-and-later/php_webpi.png %}" width="854" height="584" />

4. When prompted to accept the license terms, review them and click **I Accept**.

5. Click **Finish** after the installation completes. The PHP runtime
environment is stored on your local file system at the following
location:

       C:\Program Files (x86)\PHP\%version

### Test PHP

After you have successfully installed PHP, you can test its functionality
with the following steps:

1. Create a file by using a text editor and insert the following code
snippit.

       <?php phpinfo(); ?>

2. This code, when run, presents detailed information about the
current PHP configuration of the local system. Save the
file as **info.php** in the IIS root directory.

   **Note**: The default IIS root directory is **C:\\inetpub\\wwwroot**.

3. Open a Web browser and go to the following URL:

    http://localhost/info.php

   With PHP successfully installed, a screen displays, which details the PHP configuration.

   **Note**: This information can be sensitive so be sure to delete
   the **info.php** file after the installation is successfully tested.

   <img src="{% asset_path cloud-servers/install-php-on-windows-server-2012-and-later/php_info.png %}" width="861" height="611" />

### Customize PHP

Configuration parameters for PHP are stored in **php.ini**, which
resides in the root of the local installation.

1. Open the File Explorer and set the path to the PHP configuration file, **php.ini**.

   **Note**: The currently loaded configuration file can be found by leveraging the `phpinfo();` script in the preceding section.

2. Open the file with a text editor and perform any necessary modifications.

   **Note**: For more information on PHP directives, see the official
   [PHP Manual](http://php.net/manual/en).

3. Save the file after you have completed modifications.

4. Next, restart the IIS service to load any configuration changes. Open the
  **Server Manager** from the task bar. From the **Tools** menu select
  **Internet Information Services(IIS)** Manager. Select the server on the
  right-hand screen and click **Restart** in the **Manage Server** section.

### Modify the Default Document settings

To ensure that php content is served as the first option, you should modify
the default document setting within the IIS Manager by using the following steps:

1. Open the **Server Manager** from the task
bar.

2. From the **Tools** menu click **Internet Information Services
(IIS) Manager**.

3. In the Internet Information Services (IIS) Manager select the
server homepage.

4. Double-click the **Default Document** option.

5. Select the **index.php** option and move it to the top of the
list.

   <img src="{% asset_path cloud-servers/install-php-on-windows-server-2012-and-later/php_top.png %}" width="876" height="624" />

6. IIS will now serve **index.php** files from the **wwwroot** folder
before all other document types.
