---
permalink: configuring-ip-security-in-iis
audit_date: '2020-10-02'
title: Configuring IP Security in IIS
type: article
created_date: '2020-10-02'
created_by: Karoline Mills
last_modified_date: '2020-10-02'
last_modified_by: William Loy
product: Cloud Servers
product_url: cloud-servers
---


This article instructs you on installing the Windows Server&reg; Role **IP and Domain Restrictions**. It also instructs you on how to add and edit domain and IP restrictions in Internet Information Services (IIS). This feature allows you to restrict or grant access to web content based on IP addresses or domain names.

### Installing the Server Role

First, you need to check if the Server Role has already been installed on your server. 

1. Open **Internet Information Services (IIS)**, by clicking on the Windows button in the task bar and typing **IIS**. 

2. Click on your server name in the right-hand panel to view all available features. 

3. Look for a module called **IP and Domain Restrictions**. If it is already installed, proceed to the next section *How to add and edit IP restrictions*. 

If you cannot find the **IP and Domain Restrictions** module, install it by using the following steps:

1. Verify that you have adminstrator permissions.	
    
2. Open Server Manager by clicking the icon in the task bar.

3. Select **Manage** and then select **Add Roles and Features**.

4. Click **Next** until you reach the **Server Roles** section.

5. Navigate through the following options in the following options:

    1. **Web Server (IIS)** 
    2. **Web Server**
    3. **Security**
    4. **IP and Domain Restrictions**

6. Click **Next** and finish the installation. 

### How to add and edit IP restrictions

1. In IIS, double-click on the module named **IP and Domain Restrictions**. You now have the option to add **allow** and **deny** entries, edit feature settings, and edit dynamic restriction settings.

2. Click on **Edit Feature Settings…** to specify the following general settings that apply to all rules:

    **Default behavior for all unspecified clients (allow or deny)**:

     - Setting to **allow** means all IP addresses have access to the server unless specifically denied by a rule.

     - Setting to **deny** blocks server access for all IP addresses unless specifically allowed by a rule. 
     
        **Note:** You must add an allow rule for the loopback address `127.0.0.1 to browse sites locally on the server.

   **Enable domain name restrictions**:

     - You can restrict access by domain names or IP addresses if you enable this setting. This requires a DNS lookup for every request and can greatly impact server performance.

   **Enable Proxy Mode**

     - If enabled, IIS examines the `x-forwarded-for` HTTP header in addition to the client IP address to determine which requests to block. This is helpful if client requests come through a firewall, load balander or proxy server.

   **Deny action type sent to clients**:

     - Abort (Response code 0)

     - Unauthorized (Response code 401)

     - Forbidden (Response code 403)

     - Not Found (Response code 404)

IIS rules process in order from top to bottom. It is best practice to list the **deny** rules first. You can change the order at any time by clicking on **View Ordered List…** in the right-hand panel. Simply click on a rule and select **Move Up** or **Move Down**.

### Add restrictions to all site

Rules can be applied to all sites or to specific sites. Add restrictions to all sites by using the following steps:

1. Select your server in the left-hand panel in IIS and double-click **IP and Domain Restrictions**. 

2. Select rules that you want to apply to all sites within IIS. 

3. For site-specific rules, expand the **Sites** section in the left-hand panel and click on the desired site. 

4. Select **IP and Domain Re-strictions** to add new rules. You will see all applicable rules here, site-specific and IIS-wide.
