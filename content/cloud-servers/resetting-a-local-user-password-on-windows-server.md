---
permalink: resetting-a-local-user-password-on-windows-server/
audit_date:
title: 'Resetting a Local User Password on Windows Server'
type: article
created_date: '2020-03-30'
created_by: Derek Benson
last_modified_date: 
last_modified_by: Derek Benson
product: Cloud Servers
product_url: cloud-servers
---

*This article is applicable to the following Windows Server versions: 2012, 2012 R2, 2016, 2019*

This article describes the process of resetting local user passwords on Windows server.


## Access Local Users and Groups

1. Log into the server the customer is looking to have the user added or removed from.

2. To access **Local users and groups**: 

    * Click **Start > Run**.
    * Enter **lusrmgr.msc** in the box and click **OK**.
    * Alternatively, you can use Windows search to search for **Local Users and Groups**.

3. In the console, double click on **Users**, and a list of users should be displayed on the right.

## Reset the user's password

1. Click **Users** in the left hand pane.

2. Right click the appropriate user in the list at and click **Set Password**.

3. Enter the new password, confirm it, and then select the desired options related to password expiration and change requirements.

4. Click **OK** to save the changes (This may be listed as **Set Password** or **Reset Password** on some older versions of Windows).
