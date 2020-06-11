---
permalink: active-directory-creating-managing-and-deleting-users-and-groups/
audit_date:
title: 'Active Directory: Creating, Managing, and Deleting Users and Groups'
type: article
created_date: '2020-06-11'
created_by: Andy Donaldson
last_modified_date: 'yyyy-mm-dd'
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

This article descibes the processes involved in creating, managing and deleting users and groups within Active Directory.

*This article applies only to those customers using their own Active Directory setup. Those customers wishing to manage Active Directory users within the Rackspace Shared Active Directory domain, please raise a support ticket in your portal*

Prerequisites:
 - Must have Active Directory Domain Services installed
 - Must have access to the Domain Controller to make changes
 - Must have Domain Admin access to the Domain Controller

### Create a New User Within Active Directory

1. Log into your Domain Controller via Remote Desktop
2. Open Active Directory Users and Computers
 a. You can right-click the start menu, select **Run**, and type in *dsa.msc* and click OK
 b. You can use the Windows Serach function by clicking on Start and just typing *dsa.msc*
 c. You can use Server Manager by clicking on **Server Manager**, clicking on **Tools** and selecting **Active Directory Users and Computers** from the menu

3. Expand your domain from the left-hand menu

 ![alt text](https://06fe3e7311236ff62dbe-d4017dd5ead273e8a0712213f23fea23.ssl.cf3.rackcdn.com/example_domain.PNG)

4. Depending upon whether you are using Organisational Units or not, find the appropriate object to place the user in. By default, you can user the **Users** object if you do not have an Organisational Unit or you do not plan on creating Organisational Units
5. Once you have found the appropriate object to place the new user in, right-click it, select **New** from the menu, and select **User**

 ![alt text](https://06fe3e7311236ff62dbe-d4017dd5ead273e8a0712213f23fea23.ssl.cf3.rackcdn.com/new_user.png)

6. A wizard will appear called *New Object - User*. Fill in the details as necessary. Entering a *First Name* and *Last Name* will auto populate the *Full Name*. Enter a **User logon name**. Note: If you are using the **User logon name (pre-Windows 2000)** this will limit the number of characters to 20 characters only.

 ![alt text](https://06fe3e7311236ff62dbe-d4017dd5ead273e8a0712213f23fea23.ssl.cf3.rackcdn.com/new_user_details.png)

7. Once you have entered the relevant details, click on **Next**. You will now be required to enter a new password for the user. For this we recommend using a complex password that includes three of the four following categories below:
 a. English uppercase characters (A through Z)
 b. English lowercase characters (a through z)
 c. Base 10 digits (0 through 9)
 d. Non-alphabetic characters (for example, !, $, #, %)
You can also use online tools to generate a random password for you to use.
8. Select any of the options below the area to input the password. When finished, click **Next**

 ![alt text](https://06fe3e7311236ff62dbe-d4017dd5ead273e8a0712213f23fea23.ssl.cf3.rackcdn.com/new_user_password.png)

9. You will now see a summary of the user you have created. Click **Finish**. Your new user has now been created.

 ![alt text](https://06fe3e7311236ff62dbe-d4017dd5ead273e8a0712213f23fea23.ssl.cf3.rackcdn.com/new_user_summary.png)

### Delete/Remove a User Within Active Directory

1. Log into your Domain Controller via Remote Desktop
2. Open Active Directory Users and Computers
 a. You can right-click the start menu, select **Run**, and type in *dsa.msc* and click OK
 b. You can use the Windows Serach function by clicking on Start and just typing *dsa.msc*
 c. You can use Server Manager by clicking on **Server Manager**, clicking on **Tools** and selecting **Active Directory Users and Computers** from the menu

3. Expand your domain from the left-hand menu

 ![alt text](https://06fe3e7311236ff62dbe-d4017dd5ead273e8a0712213f23fea23.ssl.cf3.rackcdn.com/example_domain.PNG)

4. Use the **Find** function within Active Directory. Right-click your domain and select **Find**. Ensure that **Users, Contacts, and Groups** is selected from the **Find** drop-down menu in the windows that pops up. You can then type the **Name** of the user you wish to delete.

 ![alt text](https://06fe3e7311236ff62dbe-d4017dd5ead273e8a0712213f23fea23.ssl.cf3.rackcdn.com/find.png)

*You may want to consider disabling the user in the first instance as deleting the user is not reversible. Follow the next step, but select **Disable Account** from the menu rather than delete.*

5. Once the user appears from the Find function, right-click the user and select **delete**. A pop-up will appear asking you for confirmation to delete the user. Click **Yes** if you are sure.

 ![alt text](https://06fe3e7311236ff62dbe-d4017dd5ead273e8a0712213f23fea23.ssl.cf3.rackcdn.com/delete_user.png)

### Create a New Group Within Active Directory

1. Log into your Domain Controller via Remote Desktop
2. Open Active Directory Users and Computers
 a. You can right-click the start menu, select **Run**, and type in *dsa.msc* and click OK
 b. You can use the Windows Serach function by clicking on Start and just typing *dsa.msc*
 c. You can use Server Manager by clicking on **Server Manager**, clicking on **Tools** and selecting **Active Directory Users and Computers** from the menu

3. Expand your domain from the left-hand menu

 ![alt text](https://06fe3e7311236ff62dbe-d4017dd5ead273e8a0712213f23fea23.ssl.cf3.rackcdn.com/example_domain.PNG)

4. Depending upon whether you are using Organisational Units or not, find the appropriate object to place the new group into. By default, the built-in Microsoft default groups will be under the **Users** OU. You may place User Groups under a custom OU, should you wish.
5. Once you have found the appropriate object to place the new group in, right click it, select **New** from the menu, and select **Group**.

 ![alt text](https://06fe3e7311236ff62dbe-d4017dd5ead273e8a0712213f23fea23.ssl.cf3.rackcdn.com/new_group.png)

6. A wizard will now open in which you can type in your group name. By default, the option **Global** will be selected under Group Scope, and **Security** will be selected under Group Type. Do not change the group type to **Distribution** as this is to create distribution groups for Microsoft Exchange / E-mail.

 ![alt text](https://06fe3e7311236ff62dbe-d4017dd5ead273e8a0712213f23fea23.ssl.cf3.rackcdn.com/new_group_wizard.png)

7. The group is now created and you may add users to the group.

### Adding/Removing Users to/from a Group

1. Log into your Domain Controller via Remote Desktop
2. Open Active Directory Users and Computers
 a. You can right-click the start menu, select **Run**, and type in *dsa.msc* and click OK
 b. You can use the Windows Serach function by clicking on Start and just typing *dsa.msc*
 c. You can use Server Manager by clicking on **Server Manager**, clicking on **Tools** and selecting **Active Directory Users and Computers** from the menu

3. Expand your domain from the left-hand menu

 ![alt text](https://06fe3e7311236ff62dbe-d4017dd5ead273e8a0712213f23fea23.ssl.cf3.rackcdn.com/example_domain.PNG)

4. You can either add a user to a group via the group itself, or you can add the user to a group via the user itself.
5. To add the user via a group itself:
 a. Right-click your domain and select **Find**. Ensure that **Users, Contacts, and Groups** is selected from the **Find** drop-down menu in the window that pops up. You can then type the **Name** of the group to find, and then click **Find Now**.

 ![alt text](https://06fe3e7311236ff62dbe-d4017dd5ead273e8a0712213f23fea23.ssl.cf3.rackcdn.com/find_group.png)

 b. When the group is found, right-click it and select **Properties**.
 c. Click on the **Members** tab. From here, you can add and remove users by using the appropriate action from the window.
 d. To remove a user, simply click the user to highlight it and then click **Remove**.

 ![alt text](https://06fe3e7311236ff62dbe-d4017dd5ead273e8a0712213f23fea23.ssl.cf3.rackcdn.com/remove_user.png)

 e. To add a user, click **Add...**. Clicking add will bring up a Window in which you can simply type the username into the **Enter the object names to select**. After typing in the user, you can click **Check Names** and it will underline the username you just entered if it exists. Click **OK**. The user is now a member of the group.

 ![alt text](https://06fe3e7311236ff62dbe-d4017dd5ead273e8a0712213f23fea23.ssl.cf3.rackcdn.com/add_user_group.png)

6. To add a user to a group via the user itself:
 a. Right-click your domain and select **Find**. Ensure that **Users, Contacts, and Groups** is selected from the **Find** drop-down menu in the window that pops up. You can then type the **Name** of the user to find, and then click **Find Now**.

 ![alt text](https://06fe3e7311236ff62dbe-d4017dd5ead273e8a0712213f23fea23.ssl.cf3.rackcdn.com/find_user.png)

 b. When the user is found, right-click it and select **Properties**. This will open a new window.
 c. Click on the **Member Of** tab. From here, you can add and remove the user to/from a group.

 ![alt text](https://06fe3e7311236ff62dbe-d4017dd5ead273e8a0712213f23fea23.ssl.cf3.rackcdn.com/user_properties.png)

 d. To remove the user from a group, simply click the group to highlight it and then click **Remove**.

 ![alt text](https://06fe3e7311236ff62dbe-d4017dd5ead273e8a0712213f23fea23.ssl.cf3.rackcdn.com/user_remove.png)

 e.To add the user to a group click **Add...**. Clicking Add will bring a up Window where you can simply type the group name into the **Enter the object names to select**. After typing in the group name, you can click **Check Names** and it will underline the group name you just entered if it exists. Click **OK**. The user is now a member of the group.

 ![alt text](https://06fe3e7311236ff62dbe-d4017dd5ead273e8a0712213f23fea23.ssl.cf3.rackcdn.com/user_add.png)

### Delete a Group Within Active Directory

1. Log into your Domain Controller via Remote Desktop
2. Open Active Directory Users and Computers
 a. You can right-click the start menu, select **Run**, and type in *dsa.msc* and click OK
 b. You can use the Windows Serach function by clicking on Start and just typing *dsa.msc*
 c. You can use Server Manager by clicking on **Server Manager**, clicking on **Tools** and selecting **Active Directory Users and Computers** from the menu

3. Expand your domain from the left-hand menu

 ![alt text](https://06fe3e7311236ff62dbe-d4017dd5ead273e8a0712213f23fea23.ssl.cf3.rackcdn.com/example_domain.PNG)

4. Use the **Find** function within Active Directory. Right-click your domain and select **Find**. Ensure that **Users, Contacts, and Groups** is selected from the **Find** drop down menu in the windows that pops up. You can then type the **Name** of the group you wish to delete.

 ![alt text](https://06fe3e7311236ff62dbe-d4017dd5ead273e8a0712213f23fea23.ssl.cf3.rackcdn.com/find_group.png)

5. Once the group appears from the find function, right-click the group and select **delete**. A pop-up will appear asking you for confirmation to delete the group. Click **Yes** if you are sure.

 ![alt text](https://06fe3e7311236ff62dbe-d4017dd5ead273e8a0712213f23fea23.ssl.cf3.rackcdn.com/delete_group.png)

### Related articles
- [Group Policy fundamentals in Active Directory](/how-to/group-policy-fundamentals-in-active-directory/)
- [Reset an Active Directory user password](/how-to/reset-an-active-directory-user-password/)
- [Install Active Directory on Windows Server 2012](https://support.rackspace.com/how-to/installing-active-directory-on-windows-server-2012/)
- [Reset user password on Active Directory domain - Rackspace Shared Domain](/how-to/reset-user-password-on-active-directory-domain/)
- [Create new user on Active Directory domain - Rackspace Shared Domain](/how-to/create-new-user-on-active-directory-domain/)
