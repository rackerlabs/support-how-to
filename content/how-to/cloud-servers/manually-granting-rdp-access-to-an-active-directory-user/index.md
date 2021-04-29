---
permalink: manually-grant-rdp-access-to-an-active-directory-user/
audit_date: '2021-03-10'
title: Manually grant RDP access to an Active Directory user
type: article
created_date: '2021-03-02'
created_by: Travis Cook
last_modified_date: '2021-03-10'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

This article explains how to give Remote Desktop Protocol (RDP) access to an Active Directory (AD)
user on a domain server.

If a AD-domain user cannot log in to a server, you can follow the same steps to verify RDP permissions.
You need administrator rights to make any changes.

1. Log in to the server.

2. Right-click the Windows&reg; icon and select **System**. 

3. Select the remote settings depending on your Windows version:

   - 2012 R2: Click on **Remote Settings**. 
   - 2016: Click **Remote Desktop** > **Select users that can remotely access this PC**. 

4. Click on **Select Users**.

5. Click **Add**.

6. Type the username you wish to add.

7. Click **Check Names**.

   **Note**: If you enter the domain user correctly, the name is underlined.

8. After you add the user, click **Apply** and **OK**.
