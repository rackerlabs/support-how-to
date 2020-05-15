---
permalink: installing-iis-and-configuring-a-website/
audit_date:
title: ‘Installing IIS and configuring a website’
type: article
created_date: '2020-05-15’
created_by: Karoline Mills
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

### Installing IIS and configuring a website

This article walks you through the steps of installing the IIS role on your Windows server. It also explains how to configure a website in IIS. The steps shown in this article will be the same on Windows Server 2012 R2, Windows Server 2016 and Windows Server 2019.

#### IIS (Internet Information Services)

IIS is a web server available for Windows operating systems. It is used to host websites, FTP sites and other applications on the internet. It offers a graphic user interface to configure and manage these services.

#### Installing the IIS role

Follow these steps to install the IIS role on your Windows Server. Keep in mind that you need administrator permissions to perform these tasks.

1.	Open **Server Manager** by clicking on the Server Manager icon in the taskbar

2.	On the upper right-hand side, click on **Manage** -> **Add Roles and Features**

3.	Advance through the installation wizard until you reach the section **Server Roles**

4.	Select **Web Server (IIS)**, select **Add Features** and click **Next**

5.	In the **Features** section, you can select any additional features that you would like to install. For the purpose of installing IIS, you do not have to select additional features, simply click **Next**

6.	In the **Role Services** section, you can choose all roles you would like to install. You can keep the default selection or add additional roles such as *FTP server* and *HTTP redirection*. If needed, roles can also be added once IIS is installed.

7.	On the Confirmation page, you can opt to restart the server automatically if needed. After verifying the roles and features to be installed, click on **Install**

8.	Confirm that the installation was successful by opening **Internet Explorer** and typing in *localhost*. The following default website should be displayed:

### Configuring a website in IIS

Follow these steps to configure a website in IIS. Keep in mind that you need administrator permissions to perform these tasks.

1.	Open IIS by clicking on the Windows start button on the lower left-hand side and typing in *IIS*

2.	Click on the arrow next to your server name to expand the **Sites** menu

3.	Right-click on **Sites** and select **Add Website**

4.	Fill in the necessary information for your website:

- **Site name:** This is the name that will be displayed in IIS

- **Application pool:** By default, a new application pool with the site name will be created

- **Physical path:** This is the physical location of where your website files are stored on the server. By default, website files are stored under C:\inetpup\wwwroot

- **Binding:** Choose http (port 80) or https (port 443) if you have an SSL certificate for your website. You can keep the default IP address as *All Unassigned* or assign a specific IP to this website. Finally, select the host name for your site.

- If you would like to start the website right away, click *Start Website immediately*

Now your website will be displayed under **Sites** in IIS. You can further configure settings by right-clicking on the site.
