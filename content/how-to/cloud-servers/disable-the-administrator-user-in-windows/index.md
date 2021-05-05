---
permalink: disable-the-administrator-user-in-windows
audit_date: '2020-05-14'
title: 'Disable the administrator user in Windows'
type: article
created_date: '2020-05-13'
created_by: Travis Cook
last_modified_date: '2020-05-14'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

Many hackers know about the default Microsoft&reg; Windows&reg; administrator user. So
we recommend that you assign administrative rights to one or more other users and disable the
administrator user. Taking this step helps protect your server from attacks by bad actors.

**WARNING:** If you disable the administrator user by using the steps in this article,
make sure at least one user with administrative rights remembers his or her password. Otherwise,
you aren't be able to regain full control of your server.

### Disable the built-in administrator account or other users

To disable the built-in administrator account or any user, remotely access the server and perform the
following steps:

1. Open up the **Local Users and Groups** by using one of the following methods:

    - Open PowerShell&reg;, enter `lusrmgr.msc`, and click **Enter**.
       
      or
       
    - If you are running Windows 2012 R2, click the Windows icon at the bottom left of the screen and
      type `lusrmgr.msc` into the Windows search field.

2. Double-click **Users**.

3. Right-click the user that you want to enable or disable.

4. Click **Properties**.

5. To disable the user, select the **Account is Disabled** check box.

6. Click **Apply**.

The preceding process immediately revokes access for the user.

**Note:** If you need to enable a user, perform the preceding steps, but uncheck the
**Account is diasbled** check box.
