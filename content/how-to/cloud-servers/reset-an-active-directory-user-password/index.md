---
permalink: reset-an-active-directory-user-password
audit_date: '2020-06-09'
title: 'Reset an Active Directory user password'
type: article
created_date: '2020-03-06'
created_by: Derek Benson
last_modified_date: '2020-06-09'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to reset an Active Directory&reg; user password.

**Note:** This article only applies to custom Active Directory domains configured on customer devices.

### Access the Active Directory domain

Use the following steps to access the Active Directory domain:

1. Log in to a domain controller for the Active Directory domain to which the user belongs. The user must have permissions to modify users on the domain.

2. To access **Active Directory users and computers**, use one of the following options: 

   **Option 1**
    
   a. Click **Start > Run**.
   
   b. Enter **dsa.msc** in the box and click **OK**.

   **Option 2**
    
   a. Open PowerShell&reg;.
   
   b. Enter **dsa.msc** and press **Enter**.

   **Option 3**
    
   Use the Windows&reg; search function to search for **Active Directory Users and Computers**.

3. In the console, expand **Active Directory Users and Computers** and confirm that the correct domain is listed. If not, you might be on the incorrect domain controller.


### Reset the user password

Use the following instructions to reset the user password:

1. Verify that the domain listed is the domain in which the user is located. To change the domain to a different one located on the same domain controller, use the following steps:

    a. Right-click the current domain.
    
    b. Click **Change Domain**.
    
    c. Select the appropriate domain by using the dialog box.

    **Note:** If you do not see the correct domain, you might be on the incorrect domain controller.

2. Click the icon that looks like a magnifying glass on a notepad. This action takes you into the search function. Alternatively, you can right-click the domain and click **Find**.

3. Enter the username in the **Name** field, and click **Find Now**.

4. Right-click the appropriate user in the list at the bottom and click **Reset Password**.

5. Enter the new password, confirm it, and select the desired options related to password expiration and change requirements.

6. Click **Reset Password** to save the changes. You might see **Set Password** on some older versions of Windows.
