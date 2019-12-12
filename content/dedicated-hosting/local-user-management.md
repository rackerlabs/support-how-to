---
permalink: reset-user-password-on-active-directory-domain/
audit_date: '2019-12-12'
title: Add RAM to server or hypervisor
type: article
created_date: '2019-12-12'
created_by: Chad Sterling
last_modified_date: '2019-12-12'
last_modified_by: Chad Sterling
product: Dedicated Hosting
product_url: dedicated-hosting
---

This article explains how to use a ticket template to manage local users.

### Create a ticket in the MyRackspace portal

1. Log in to the [MyRackspace Portal](https://login.rackspace.com/login) with your username and
   password.

2. In the top navigation bar, choose **Select a Product** > **Dedicated Hosting**.

3. Select **Tickets** > **Create Ticket**. The Create New Ticket page displays. 

4. Select the Subject field.

5. From the dropdown menu, Select **Local User Management.**

    <img src="{% asset_path %}" />

6. Select the affected Device(s) and Action Type.

7. Create user
Specify the Username, Password, and Full Name of the user to create on the selected device(s). The Password should be at least 8 characters, with at least 3 character types (Upper, Lower, Numeric, and Symbol).
Optionally, you can select to have this user have the following attributes
User cannot change their password
Password never expires
User login is diabled
User has admin privileges (This option will add the newly created user to the Administrators group on Windows and will give the user sudo privileges on Linux


Delete user
Specify the Username to delete from the selected device(s). This action will completely remove the user from the selected device(s).

Enable user
Specify the Username to enable on the selected device(s).

Disable/lock user
Specify the Username to disable/lock on the selected device(s).

Change user password
Specify the Username and Password to reset on the selected device(s). The Password should be at least 8 characters, with at least 3 character types (Upper, Lower, Numeric, and Symbol).

Audit users
This action will provide a list of users on each server selected, no additional input is required.

Audit user groups
This action will provide a list of groups on each server selected and the respective members of the groups, no additional input is required.

8. Click Create Ticket at the bottom of the page.
After the ticket is created, you are redirected back to your ticket list in the MyRackspace Portal. Automation runs in the background while the ticket is created, which typically takes a few minutes to complete.

