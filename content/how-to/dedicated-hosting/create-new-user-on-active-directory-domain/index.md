---
permalink: create-new-user-on-active-directory-domain
audit_date: '2019-12-12'
title: Create new user on Active Directory domain
type: article
created_date: '2019-12-12'
created_by: Chad Sterling
last_modified_date: '2021-07-07'
last_modified_by: Cat Lookabaugh
product: Dedicated Hosting
product_url: dedicated-hosting
--- 

This article explains how to use a ticket template to add a new Microsoft&reg;
Active Directory user.

### Create a ticket in the MyRackspace portal

1. Log in to the [MyRackspace portal](https://login.rackspace.com/login) with
   your username and password.

2. In the top navigation bar, choose **Select a Product** > **Rackspace Dedicated**.

3. Select **Tickets** > **Create Ticket**. The **Create New Ticket** page displays.

4. Select the **Subject** field.

5. From the drop-down menu, select **Create New User on Active Directory Domain**.

   {{<image src="newuser1.png" alt="" title="">}}

6. Specify a username for the account you want to create.

   After the request completes, the system generates a secure password automatically for
   this user and provides it in the ticket. You can change this password later.

7. Specify a domain for the user.

   Use the **Give this user Administrative or sudo permissions** checkbox to
   grant the user administrative or sudo permissions. This automatically adds
   the user to Domain Administrator groups.

   Use the **Additional Instructions** box to provide additional information,
   such as user details or group membership permissions.

8. Select **Create Ticket**.

   After the ticket generates, you see your ticket list in the MyRackspace Portal.
   It typically takes a few minutes for the ticket creation process to complete.

  {{<image src="newuser2.png" alt="" title="">}}
