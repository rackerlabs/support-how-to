---
permalink: adding-a-user-to-the-local-administrators-group-in-windows-server-2012/
audit_date:
title: 'Adding a User to the Local Administrators Group in Windows Server 2012'
type: article
created_date: '2020-04-13'
created_by: Benji Ivey
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

## Adding a user to the Local Administrators Group in Windows Server 2012

**Note:** The Administrator role will automatically give you RDP access to the server. You do not need to assign the Remote Desktop Group or Role to someone that is an Administrator.

1. Open the start menu and navigate to the run command (or press Windows Key+R).

2. Type in **lusrmgr.msc** which will bring you to the Local User Management window.

3. Select the "Users" folder where you will be brought to your list of users.

4. Right-click on the User you wish to add to the Local Administrators group and click **Properties**.

5. Switch to the "Member of" tab and click "Add".

6. In the box you are presented with, type in "Administrators" and then hit check names, you'll notice it highlights and underlines Administrators, which means it has found the Group and you can now click **Ok**.

7. Click **Ok** on the properties Window to save the change.

For the best possible security for your Administrators it is strongly recommended to rotate the passwords frequently as to reduce any malicious attempts upon either your devices or services.
