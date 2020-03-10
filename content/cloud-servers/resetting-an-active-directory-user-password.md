---
permalink: resetting-an-active-directory-user-password/
audit_date:
title: 'Resetting an Active Directory User Password'
type: article
created_date: '2020-03-06'
created_by:
last_modified_date:
last_modified_by: Derek Benson
product: Cloud Servers
product_url: cloud-servers
---

This article describes the process of resetting an Active Directory user's password.

*This article only applies to custom active directory domains configured on customer devices*

## Access the Active Directory users and computers snap in

1. Log into a domain controller for the Active Directory domain the user belongs to with a user that has permissions to modify users on the domain.

2. To access **Active Directory users and computers**: 

    ### Option 1
    * Click **Start > Run**.
    * Enter **dsa.msc** in the box and click **OK**.

    ### Option 2
    * Open Powershell.
    * Enter **dsa.msc** and press enter.

    ### Option 3
    * Use the Windows search function to search for **Active Directory Users and Computers**.

3. In the console, expand **Active Directory Users and Computers**, and confirm the correct domain is listed. If not, you may not be on the correct domain controller.


## Reset the user's password

1. Verify that the domain listed is the domain in which the user is located. To change domains to a different one located on the same domain controller:

    * Right Click the current domain.
    * Click **Change Domain**
    * Select the appropriate domain using the dialog box.

    **Note:** If you do not see the correct domain, you may be on the incorrect domain controller.

2. Click the icon that looks like a magnifying glass on a notepad. This will take you into the search function. Alternatively, you can right click the domain and click **Find**.

3. Enter the username in the **Name** field and click **Find Now**.

4. Right click the appropriate user in the list at the bottom of the and click **Reset Password**.

5. Enter the new password, confirm it, and then select the desired options related to password expiration and change requirements.

6. Click **Reset Password** to save the changes (This may be listed as **Set Password** on some older versions of Windows).
