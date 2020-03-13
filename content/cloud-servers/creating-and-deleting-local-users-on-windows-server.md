---
permalink: creating-and-deleting-local-users-on-windows-server/
audit_date:
title: 'Creating and deleting local users on windows server'
type: article
created_date: '2020-03-06'
created_by: Derek Benson
last_modified_date: 
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---


This article describes the process of adding and removing local users on Windows Server&reg; 2012, 2012 R2, 2016, and 2019.


## Access Local Users and Groups

1. Log in to the server from which you are removing the user.

2. To access **Local users and groups**: 

    1. Click **Start > Run**.
    2. Enter **lusrmgr.msc** in the box and click **OK**.
    3. Alternatively, you can use Windows search to search for **Local Users and Groups**.

3. In the console, double click on **Users**, and a list of users is displayed on the right.

## Adding a new user

1. Click **More Actions** and select **New User**.

2. At a minimum, enter a username, a new password, and confirm that password. It is also recommended to enter the name under **Full Name**, and a description of the account if any in the **Description** field.
    * To allow a user to set their own password, ensure the box for **User must change password at next login** is checked. Otherwise, uncheck it.
    * To prevent the user from setting a new password, check the box labeled **User cannot change password**. Keep in mind, this cannot be selected if **User must change password at next login** is checked.
    * If the user is being created but should not yet have log in rights, check the box labeled **Account is disabled**. This can be undone at a later time if desired.
    * Optionally, the password can be set to never expire by checking the box labeled **Password never expires**, although this should rarely be used as aged passwords pose a security risk.
    
3. Once the form is filled out, click **Create** to save the new user and then close the **New User** dialog. The newly created user now shows in the list of users.


## Removing an Exisiting user

1. Right-click on the user that should be deleted.

2. Click **Delete**. 

3. There is a prompt warning that this cannot be undone. Click **Yes** to confirm.

**Warning:** If the user is associated with any services, those services may stop functioning once the user is deleted. If unsure, it is best to disable a user to avoid any issues.
