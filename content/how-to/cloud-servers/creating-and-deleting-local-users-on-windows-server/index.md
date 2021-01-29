---
permalink: creating-and-deleting-local-users-on-windows-server/
audit_date: '2021-01-29'
title: 'Create and delete local users on Windows Server'
type: article
created_date: '2020-03-06'
created_by: Derek Benson
last_modified_date: '2021-01-29'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to add and remove local users on Windows Server&reg; 2012, 2012 R2, 2016, and 2019.


### Access Local users and groups

1. Log in to the server from which you are removing the user.

2. To access **Local users and groups**:

    1. Click **Start > Run**.
    2. Enter **lusrmgr.msc** in the box and click **OK**.
    3. Alternatively, you can use Windows search to search for **Local Users and Groups**.

3. In the console, double click on **Users**, and a list of users displays on the right.

### Add a new user

1. Click **More Actions** and select **New User**.

2. At a minimum, enter a username, a new password, and confirm that password. You should also enter the name under
   **Full Name** and a description of the account in the **Description** field.

    * To allow users to set their password, check the **User must change password at next login** box. Otherwise, uncheck it.
    * To prevent the user from setting a new password, check the **User cannot change password** box. You cannot select this
      if you have checked **User must change password at next login**.
    * If you are creating the user but the user should not yet have login rights, check the **Account is disabled** box. You
      can undo this when you want.
    * Optionally, you can set the password to never expire by checking the **Password never expires** box. However, you should
      rarely use this option because aged passwords pose a security risk.

3. After you fill out the form, click **Create** to save the new user and close the **New User** dialog. The newly created
   user now shows in the list of users.

### Remove an existing user

1. Right-click on the user that you want to delete.

2. Click **Delete**.

3. Click **Yes** to confirm when the warning prompt that the deletion can't be undone displays.

**Warning:** If the user is associated with any services, those services might stop functioning after the user is deleted.
You can disable, instead of deleting, a user to avoid any issues.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 
