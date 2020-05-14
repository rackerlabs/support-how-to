---
permalink: disable-or-enable-the-administrator-user-in-windows/
audit_date: '2020-05-14'
title: 'Disable or enable the administrator user in Windows'
type: article
created_date: '2020-05-13'
created_by: Travis Cook
last_modified_date: '2020-05-14'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

**WARNING:** Password resets within the Cloud Control Panel only apply to the `Administrator` user.
If you disable the `Administrator` user on the server and forget the password, you won't be able to
regain access to your server.

### Enable or disable the built-in administrator account or other users

To enable or disable the administrator account or any user in Microsoft&reg; Windows&reg;, remote
into the server and preform the following steps:

1. Open up the **Local Users and Groups** by using one of the following methods:

       - Open PowerShell&reg;, enter `lusrmgr.msc`, and click **Enter**.
       
       or
       
       - If you are running Windows 2012 R2, click the Windows icon at the bottom left of the screen and
         type the `lusrmgr.msc` into the Windows search field.

2. Double-click **Users**.

3. Right-click the user that you want to enable or disable.

4. Click **Properties**.

5. To disable the user, select **Account is Disabled** check box. To enable the user, uncheck the
   **Account is Disabled** check box.

6. Click **Apply**.

The preceding process immediately grants or revokes access for the user.

