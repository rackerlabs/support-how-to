---
permalink: install-iis-and-configure-a-website
audit_date: '2020-05-15'
title: 'Install IIS and configure a website'
type: article
created_date: '2020-05-15'
created_by: Karoline Mills
last_modified_date: '2020-05-15'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article shows you how to install the Internet Information Services (IIS) role on your Windows&reg;
server. It also explains how to configure a website in IIS. The steps shown in this article are the same
for Windows Server&reg; 2012 R2, Windows Server 2016, and Windows Server 2019.

### IIS

IIS is a web server available for Windows operating systems. Use it to host websites, FTP sites, and other
applications on the Internet. It offers a graphic user interface to configure and manage these services.

### Install the IIS role

Use the following steps to install the IIS role on your Windows server. Keep in mind that you need
administrator permissions to perform these tasks.

1.	To open the **Server Manager**, click on the **Server Manager** icon in the taskbar.

2.	On the upper right-hand side, click **Manage** -> **Add Roles and Features**.

3.	Advance through the installation wizard until you reach the **Server Roles** section.

4.	Select **Web Server (IIS)**, select **Add Features**, and click **Next**.

5.	In the **Features** section, you can select any additional features that you want to install.
    Because you do not have to select additional features to install IIS, click **Next**.

6.	In the **Role Services** section, choose all the roles you want to install. You can keep the default
    selection or add additional roles, such as the **FTP server** and **HTTP redirection**. If needed, you can add
    roles after you install IIS.

7.	On the **Confirmation** page, you can opt to restart the server automatically, if needed. After you
    verify the roles and features, click **Install**.

8.	To confirm that the installation succeeded, open the **Internet Explorer** and enter **localhost**. A
    default generic website displays.

### Configure a website in IIS

Use the following steps to configure a website in IIS. Keep in mind that you need administrator permissions
to perform these tasks.

1.	To open IIS, click the Windows **Start** button on the lower left-hand side and type in **IIS**.

2.	Click the arrow next to your server name to expand the **Sites** menu.

3.	Right-click **Sites** and select **Add Website**.

4.	Fill in the following information for your website:

    - **Site name:** This is the name that displays in IIS.

    - **Application pool:** By default, the process creates a new application pool with the site name.

    - **Physical path:** This is the physical location where your website files are stored on the server.
    By default, website files are stored under **C:\inetpup\wwwroot**.

    - **Binding:** Choose HTTP (port 80), or if you have an SSL certificate for your website, choose HTTPS
    (port 443). You can keep the default IP address as **All Unassigned** or assign a specific IP to this
    website. Finally, select the host name for your site.

    - If you want to start the website right away, click **Start Website immediately**.

Now, your website displays under **Sites** in IIS. To further configure the settings, right-click on the site.
