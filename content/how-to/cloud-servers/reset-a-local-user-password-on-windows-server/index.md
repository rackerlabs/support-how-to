---
permalink: reset-a-local-user-password-on-windows-server
audit_date: '2020-04-14'
title: 'Reset a local user password on Windows Server'
type: article
created_date: '2020-03-30'
created_by: Derek Benson
last_modified_date: '2020-04-14'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

*This article applies to the following Windows Server&reg; versions: 2012, 2012 R2, 2016, 2019*

This article describes how to reset local user passwords on Windows Server.

### Access Local Users and Groups

1. Log in to the server where you want to add or remove the user.

2. Click **Start > Run**.

3. Enter **lusrmgr.msc** in the box and click **OK** or use the Windows&reg; search to search for **Local Users and Groups**.

4. In the console, double-click **Users** to display a list of users on the right.

### Reset the user's password

1. Click **Users** in the left-hand pane.

2. Right-click the appropriate user in the list and click **Set Password**.

3. Enter the new password, confirm it, and then select the desired options related to password expiration and change requirements.

4. Click **OK** to save the changes. An older version might have **Set Password** or **Reset Password** buttons instead of **OK**.
