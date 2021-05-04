---
permalink: add-a-user-to-the-local-administrators-group-in-windows-server-2012
audit_date: '2020-04-17'
title: 'Add a user to the local administrators group in Windows Server 2012'
type: article
created_date: '2020-04-13'
created_by: Benji Ivey
last_modified_date: '2020-04-17'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

Use the following instructions to add a user to the local administrators group in Microsoft&reg; Windows Server&reg; 2012:

**Note:** The administrator role automatically gives you Remote Desktop Protocol (RDP) access to the server. You do not need to assign the `Remote Desktop` group or role to someone that is an administrator.

1. Open the **Start** menu and navigate to the run command (or press **Windows** **Key+R**).

2. Type in **lusrmgr.msc** to open the **Local User Management** window.

3. Select the **Users** folder to display the list of users.

4. Right-click on the user you want to add to the local administrators group and click **Properties**.

5. Switch to the **Member of** tab and click **Add**.

6. In the text box, enter **Administrators** and click **Check names**. This action finds, highlights, and underlines the  administrators group. After you review the information, click **Ok**.

7. Click **Ok** on the **Properties** window to save the change.

For the best possible security for your administrators, we strongly recommend that you change the passwords frequently to reduce any malicious attempts to access either your devices or services.
