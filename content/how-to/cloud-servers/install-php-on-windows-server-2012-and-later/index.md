---
permalink: install-php-on-windows-server-2012-and-later
audit_date: '2019-04-11'
title: Install PHP on Windows Server 2012 and later
type: article
created_date: '2013-04-22'
created_by: Rackspace Support
last_modified_date: '2019-04-11'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to install, test, and configure PHP on Microsoft&reg;
Windows Server&reg; 2012 and later. The article uses the Microsoft Web Platform
Installer (WebPI) for installation and does not cover installing PHP from
the source.

### Prerequisites

Before installing PHP on Windows Server 2012 and later, you should install
the [Internet Information Services (IIS) framework](https://docs.microsoft.com/en-us/dynamics-nav/support/how-to--install-and-configure-internet-information-services-for-microsoft-dynamics-nav-web-client).

You should also install the
[Microsoft Windows Cache extension for PHP](https://docs.microsoft.com/en-us/iis/application-frameworks/install-and-configure-php-on-iis/use-the-windows-cache-extension-for-php).

### Install PHP with WebPI

1. Open the WebPI from the following location on your
file system:

       C:\Program Files\Microsoft\Web Platform Installer\WebPlatformInstaller.exe

   **Note**: If the WebPI is not currently installed, you can download
   it from [WebPI](https://www.microsoft.com/web/downloads/platform.aspx).

2. Click the **Products** tab, click **Frameworks**, and then scroll down the
PHP choices.

3. Select **Add** next to the version of PHP you want to install and
click **Install**.

   {{<image src="php_webpi.png" alt="" title="">}}

4. When prompted to accept the license terms, review them and click **I Accept**.

5. Click **Finish** after the installation completes. The PHP runtime
environment is stored on your local file system at the following
location:

       C:\Program Files (x86)\PHP\%version

### Test PHP

After you have successfully installed PHP, you can test its functionality
with the following steps:

1. Create a file by using a text editor and insert the following code
snippit:

       <?php phpinfo(); ?>

2. When you run this code, it presents detailed information about the
current PHP configuration of the local system. Save the
file as **info.php** in the IIS root directory.

   **Note**: The default IIS root directory is **C:\\inetpub\\wwwroot**.

3. Open a web browser and go to the following URL:

    https://localhost/info.php

   With PHP successfully installed, a screen displays that details the PHP configuration.

   **Note**: This information can be sensitive so be sure to delete
   the **info.php** file after the installation is successfully tested.

   {{<image src="php_info.png" alt="" title="">}}

### Customize PHP

The **php.ini** file that resides in the root of the local installation stores
the configuration parameters for PHP. To customize PHP, use the following
steps:

1. Open the File Explorer and set the path to the **php.ini** file.

   **Note**: You can find the currently loaded **php.ini** file by leveraging the `phpinfo();` script used in the preceding section.

2. Open the file with a text editor and perform any necessary modifications.

   **Note**: For more information on PHP directives, see the official
   [PHP Manual](https://php.net/manual/en).

3. Save the file after you complete your modifications.

4. Next, restart the IIS service to load any configuration changes.

5. Open the **Server Manager** from the task bar.

6. From the **Tools** menu, select **Internet Information Services(IIS) Manager**.

7. Select the server in the right-hand screen and click **Restart** in the **Manage Server** section.

### Modify the default document settings

To ensure that PHP content is served as the first option, you should modify
the default document setting within the IIS Manager by using the following steps:

1. Open the **Server Manager** from the task bar.

2. From the **Tools** menu, click **Internet Information Services(IIS) Manager**.

3. In the Internet Information Services (IIS) Manager, select the
server homepage.

4. Double-click the **Default Document** option.

5. Select the **index.php** option and move it to the top of the
list.

   {{<image src="php_top.png" alt="" title="">}}

IIS now serves **index.php** files from the **wwwroot** folder before all other document types.
