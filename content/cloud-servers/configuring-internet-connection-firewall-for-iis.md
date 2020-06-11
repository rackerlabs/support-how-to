---
permalink: configuring-internet-connection-firewall-for-iis/
audit_date:
title: 'Configuring Internet Connection Firewall (ICF) for IIS'
type: article
created_date: '2020-06-11'
created_by: Travis Cook
last_modified_date: 
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

# How to configure Internet Connection Firewall (ICF) for IIS

The Internet Connection Firewall (ICF) is a software based firewall that prevents unauthorized connections to your server from remote computers. The following steps will go over how to configure ICF to allow clients to initiate Web and other IIS related connections to your server.

1. Click on **Start** and select **Control Panel**

2. Double-click **Network Connections**

3. Right-click **Local Area Connection**, then click **Properties**

4. Select the **Advanced** tab

5. If you **do not** want to use ICF, make sure the **Protect my computer and network by limiting or preventing access to this computer from the Internet** check box is not available and click **Ok**

6. If you **do** want to use ICF make sure the **Protect my compter and network by limiting or preventing access to this computer from the internet** checkbox is selected then click **Settings**

7. Navigate to the **Services** tab and enable the service to which you want to allow access to client

8. Within the **Service Settings** dialog box, that appears after enabling a service, proceed with one of the following:
   - If you are enabling a service on the same computer you are working on, the correct computer name is already filled in, click **Ok**.
   - If you are enabling a service on a different computer on your network, type the name or IP address of the computer hosting the service you are enabling, and click **Ok**.

9. **Repeat** steps **7** and **8** until all the services you want accessible to clients are enabled

If you have any further questions, feel free to reach out to our support team via ticket or phone.
