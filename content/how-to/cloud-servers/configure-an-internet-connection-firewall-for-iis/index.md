---
permalink: configure-an-internet-connection-firewall-for-iis
audit_date: '2020-06-15'
title: 'Configure an Internet Connection Firewall for IIS'
type: article
created_date: '2020-06-11'
created_by: Travis Cook
last_modified_date: '2020-06-15'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

Internet Connection Firewall (ICF) is a software based firewall that prevents unauthorized connections to your server from remote computers. Use the following steps to configure ICF to allow clients to initiate web and other IIS-related connections to your server.

1. Click on **Start** and select **Control Panel**.

2. Double-click **Network Connections**.

3. Right-click **Local Area Connection**, and click **Properties**.

4. Select the **Advanced** tab.

5. Choose the appropriate protection setting:

      - If you do not want to use ICF, make sure the **Protect my computer and network by limiting or preventing access to this computer from the Internet** check box is unchecked and click **Ok**. Skip the remaining steps.

      - If you want to use ICF, make sure the **Protect my compter and network by limiting or preventing access to this computer from the internet** checkbox is selected then click **Settings**.

6. Navigate to the **Services** tab and enable the service to which you want to allow the client access.

7. Within the **Service Settings** dialog box, which appears after you enable a service, proceed with one of the following:

     - If you are enabling a service on the same computer you are working on, the correct computer name should be filled in. Click **Ok**.

     - If you are enabling a service on a different computer on your network, type the name or IP address of the computer hosting the service you are enabling, and click **Ok**.

8. **Repeat** Steps **6** and **7** until all the services you want accessible to clients are enabled.

