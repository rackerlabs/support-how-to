---
permalink: disabling-the-admin-user-in-windows/
audit_date:
title: 'Disabling the Admin User in Windows'
type: article
created_date: '2020-05-13'
created_by: Travis Cook
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

**WARNING:** Password resets within the Cloud Control Panel only apply to the Administrator user. If you Disable the Administrator user on the server and forget the password to your other users you won't be able to regain access to your server.

## Disabling and Enabling the Built-in Administrator Account

When Disabling or Enabling Administrator, or any user, all you need to do is the following after Remoting into the server:

1. Open up the Local Users and Groups by one of two quick ways:

- Open Powershell and type: lusrmgr.msc (Hit Enter)
- If you are running Windows 2012 R2 You can type the same lusrmgr.msc into the Windows search at the bottom left of the desktop by clicking on the Windows Icon

2. Double-Click "Users"

3. Right-Click the User in question you wish to Enable/Disable

4. Click "Properties"

5. Select the check box "Account is Disabled"

6. Click "Apply"

**WARNING** Password resets within the Cloud Control Panel only apply to the Administrator user. If you Disable the Administrator user on the server and forget the password to your other users you won't be able to regain access to your server.

Once this is done the user will no longer be able to login. If you wish to Enable the user, the only way to Enable them is to repeat the process and uncheck the "Account is Disabled" box.
