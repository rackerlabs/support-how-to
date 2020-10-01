---
permalink: configuring-ip-security-in-iis/
audit_date:
title: Configuring IP Security in IIS
type: article
created_date: '2020-09-23'
created_by: Karoline Mills
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---


This article walks you through installing the Windows Server Role **IP and Domain Restrictions** and explains how to add and edit domain and IP restrictions in In-ternet Information Services (IIS). This feature allows you to restrict or grant ac-cess to web content based on IP addresses or domain names.

### Installing the Server Role

First, you will need to check if the Server Role has already been installed on your server. Open **Internet Information Services (IIS)**, by clicking on the Windows button in the task bar and typing **IIS**. Click on your server name in the right-hand panel to view all available features. Look for a module called **IP and Domain Restrictions**. If it is already installed, proceed to the next section *How to add and edit IP restrictions*. If you cannot find the module, install it by following these steps (keep in mind that you will administrator permissions to do this):

1.	Open Server Manager by clicking the icon in the task bar

2.	Select **Manage** -> **Add Roles and Features** on the upper right-hand side

3.	Click **Next** until you reach the **Server Roles** section

4.	Select **Web Server (IIS)** -> **Web Server** -> **Security** -> **IP and Domain Restrictions**, click **Next** and finish the installation

### How to add and edit IP restrictions

In IIS, double-click on the module **IP and Domain Restrictions**. You now have the option to add *allow* and *deny* entries, edit feature settings and edit dynamic restriction settings.

Click on **Edit Feature Settings…** to specify the following general settings that apply to all rules:

-	**Default behavior for all unspecified clients (allow or deny)**

o	If this is set to allow, all IP addresses have access to the server unless specifically denied by a rule

o	If this is set to deny, all IP addresses will be denied access to the serv-er unless specifically allowed by a rule. You will need to add an allow rule for the loopback address 127.0.0.1 to browse sites locally on the server.

-	**Enable domain name restrictions**

o	If enabled, access can be restricted by domain names or IP addresses. This requires a DNS lookup for every request and can greatly impact server performance.

-	**Enable Proxy Mode**

o	If enabled, IIS will examine the x-forwarded-for HTTP header in addition to the client IP address in order to determine which requests to block. This can be helpful if client requests come through a firewall, load balander or proxy server.

-	**Deny action type sent to clients**

o	Abort (Response code 0)

o	Unauthorized (Response code 401)

o	Forbidden (Response code 403)

o	Not Found (Response code 404)

All rules are processed in the order they are listed in IIS, from top to bottom. It is best practice to list the *deny* rules first. You can change the order at any time by clicking on **View Ordered List…** in the right-hand panel. Simply click on a rule and select **Move Up** or **Move Down**.

**Note**: These rules can be applied to all sites or to specific sites. To add re-strictions  to all sites, select your server in the left-hand panel in IIS and dou-ble-click **IP and Domain Restrictions**. Rules that are specified here will apply to all sites within IIS. For site-specific rules, expand the **Sites** section in the left-hand panel and click on the desired site. Select **IP and Domain Re-strictions** to add new rules. You will see all applicable rules here, site-specific and IIS-wide.
