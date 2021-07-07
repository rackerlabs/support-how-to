---
permalink: manage-local-users-in-the-myrackspace-portal
audit_date: '2019-12-12'
title: Manage local users in the MyRackspace portal
type: article
created_date: '2019-12-12'
created_by: Chad Sterling
last_modified_date: '2021-07-07'
last_modified_by: Cat Lookabaugh
product: Dedicated Hosting
product_url: dedicated-hosting
---

This article explains how to use a ticket template to manage local users.

### Create a ticket in the MyRackspace portal

1. Log in to the [MyRackspace portal](https://login.rackspace.com/login) with
   your username and password.

2. In the top navigation bar, choose **Select a Product** > **Rackspace Dedicated**.

3. Select **Tickets** > **Create Ticket**. The **Create New Ticket** page displays.

4. Select the **Subject** field.

5. From the drop-down menu, select **Local User Management.**

   {{<image src="localuser1.png" alt="" title="">}}

6. Select the affected **Device(s)** and **Action Type**.

#### Create a user

1. Enter the **Username**, **Password**, and **Full Name** of the user you want
   to create on the selected devices.

   The **Password** should be at least eight characters, with at least three
   character types (uppercase, lowercase, numeric, and symbol).

2. You can also assign the following attributes to the user:

    - User cannot change their password
    - Password never expires
    - User login is disabled
    - User has admin privileges (This option adds the newly created user to the
      Administrators group on Windows&reg; and gives the user sudo privileges on
      Linux&reg;.)

3. Select **Create Ticket**.

   {{<image src="localuser2.png" alt="" title="">}}

#### Delete, Enable or Disable/lock a user

1. Select the desired action from the **Action Type** drop-down menu.

2. Enter the username.

   Deleting a user completely removes them from the selected devices.

3. Select **Create Ticket**.

   {{<image src="localuser3.png" alt="" title="">}}

#### Change a user password

1. Specify the **Username** and **Password** to reset on the selected devices.

   The **Password** should be at least eight characters, with at least three
   character types (uppercase, lowercase, numeric, and symbol).

2. Select **Create Ticket**.

   {{<image src="localuser4.png" alt="" title="">}}

#### Audit users or user groups  

These actions provide a list of users or user groups on each selected server and
require no additional input.

{{<image src="localuser5.png" alt="" title="">}}

  After the ticket generates, you see your ticket list in the MyRackspace Portal.
  It typically takes a few minutes for the ticket creation process to complete.
