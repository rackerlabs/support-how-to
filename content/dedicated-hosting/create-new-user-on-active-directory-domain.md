---
permalink: create-new-user-on-active-directory-domain/
audit_date:
title: Create new user on Active Directory domain
type: article
created_date: '2019-12-11'
created_by: Chad Sterling
last_modified_date: '2019-12-11'
last_modified_by: Chad Sterling
product: Dedicated Hosting
product_url: dedicated-hosting
---

### MyRackspace Portal 

This article explains how to use a ticket template to add a new Active Directory user.

#### Create a ticket in the MyRackspace Portal

1. Log in to the [MyRackspace Portal](https://login.rackspace.com/login) with your username and password.

2. In the top navigation bar, choose **Select a Product** > **Dedicated Hosting**.

3. Select **Tickets** > **Create Ticket**. The Create New Ticket page displays. 

4. Select the Subject field.

 <img src="{% asset_path cloud-load-balancers/reset-user-password-on-active-directory-domain/password1.png %}" />

5. Fro the dropdown menu, Select **Create New User on Active Directory Domain**. 

 <img src="{% asset_path cloud-load-balancers/reset-user-password-on-active-directory-domain/password2.png %}" />

5. Specify a username for the account you would like to have created. 

    **Note:**Once the request has been completed, a secure password will be automatically generated for this user and provided in the ticket. You can change this password later if desired.

6. Specify the domain this user will be created in.

7. Use the "Give this user Administrative or sudo permissions" check box to grant the user administrative or sudo permissions upon creation. This will automatically add the user to Domain Administrator groups.

8. Use the "Additional Instructions" box to provide any other details needed for the user creation such as user details or group membership permissions

9. Select **Create Ticket**.

    **Note:**After the ticket is created, you will be redirected to your ticket list in the MyRackspace Portal. It typically takes a few minutes for the ticket creation process to complete. 