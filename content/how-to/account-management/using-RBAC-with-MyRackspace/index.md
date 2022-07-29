---
permalink: using-rbac-with-myrackspace
audit_date: '2022-07-28'
title: Using RBAC with MyRackspace
type: article
created_date: '2013-06-28'
created_by: Asmita Nakwa
last_modified_date: '2022-07-28'
last_modified_by: Asmita Nakwa
product: Account Management
product_url: account-management
---

**Previous section:** [Use Role-Based Access Control (RBAC)](/support/how-to/use-role-based-access-control-rbac)

The account owner implements Role Based Access Control (RBAC) by adding users to the account and assigning roles. This article is intended to guide account owners through this process by using the [Rackspace Dedicated](https://login.rackspace.com/).

For information about setting up RBAC through the API, see the [Rackspace Identity API Guide](https://docs.rackspace.com/docs/cloud-identity/v2/developer-guide/).

**Note:** It is possible to assign a mix of multiple-product roles and per-product roles to one user through the API. The most permissive role determines the user's level of access.

### Account Credentials

Rackspace recommends that you can change the account password before adding new users to the account.

When new users are created, a temporary password is assigned to them. They should change the temporary password at their first login.

Also, new users receive an email from Rackspace notifying them that they have been added to the account. They receive information on how to sign up for an account in the email.

### Create New Users

To create a new user, follow below steps:

1. Log in to the [Rackspace Dedicated Account](https://login.rackspace.com/).

<img width="508" alt="myrack-account-RBAC-login1" src="/support/how-to/using-rbac-with-myrackspace/myrack-account-RBAC-login1.png">

2. In the upper-right corner of the control panel, click **Account > User Management.**

<img width="461" alt="myrack-account-RBAC2" src="/support/how-to/using-rbac-with-myrackspace/myrack-account-RBAC2.png">

3. On the **Account/User List** page, click **Create New User**.

<img width="483" alt="myrack-account-RBAC3" src="/support/how-to/using-rbac-with-myrackspace/myrack-account-RBAC3.png">

4. Enter information in the **Create a User** section as shown in below image.

<img width="793" alt="myrack-account-RBAC4" src="/support/how-to/using-rbac-with-myrackspace/myrack-account-RBAC4.png">

5. Click **Create User**.

<img width="947" alt="myrack-account-RBAC5" src="/support/how-to/using-rbac-with-myrackspace/myrack-account-RBAC5.png">

6. To Manage permissions in the [Rackspace Dedicated Account](https://login.rackspace.com/) portal select **Account**>**Permissions**.

<img width="560" alt="myrack-account-RBAC6" src="/support/how-to/using-rbac-with-myrackspace/myrack-account-RBAC6.png">

**Note**: To access the **Permissions** area in the MyRackspace Portal and modify another user’s permissions, you must have either **Account Administrator** permission or **Admin permission**. Account Administrator permission grants the user unlimited access to all sections of the MyRackspace Portal. Admin permission (on a device or service) grants the user the ability to access and manage the device or service.

### Permission Types
There are two types of permissions available for Rackspace Dedicated Hosting accounts:
- **Direct permissions**: These grant the user direct access to account permissions, linked cloud accounts, devices, or services.

- **Effective permissions**:Users inherit these because of their memberships in user and product groups.

<img width="939" alt="myrack-account-RBAC8" src="/support/how-to/using-rbac-with-myrackspace/myrack-account-RBAC8.png">

You can use the four tabs as shown in below image to assign permissions in the following ways:

<img width="781" alt="myrack-account-RBAC7" src="/support/how-to/using-rbac-with-myrackspace/myrack-account-RBAC7.png">

- **Assign by user**
- **Assign by product**
- **Manage groups**
- **Global permissions**

#### Assign By User:
Using this method, you can choose a person and give them account-level **Direct** or **Effective Permissions**. By choosing the tabs on the **Assign By User** page, you can also restrict a user's access to any connected cloud accounts, devices, services, product groups, and group membership.

**Assign by Users**

To asign permissions by user, select a user and select from one of the tabs to update the user permissions as shown in below image.

<img width="459" alt="myrack-account-RBAC9" src="/support/how-to/using-rbac-with-myrackspace/myrack-account-RBAC9.png">

**Assign by User Groups**
This method enables you to select a group of users and grant them:

- Permissions at the account level
- Access to linked cloud accounts, devices, services, or product groups

<img width="449" alt="myrack-account-RBAC10" src="/support/how-to/using-rbac-with-myrackspace/myrack-account-RBAC10.png">

#### Assign By Products
This method enables you to manage user access to an individual product or product group.

To assign permissions by product or product group, perform the following steps:
1. Select Assign By Product.
<img width="467" alt="myrack-account-RBAC11" src="/support/how-to/using-rbac-with-myrackspace/myrack-account-RBAC11.png">

2. Make a selection from the Product or Product Group column, then below screen appears.

<img width="915" alt="myrack-account-RBAC12" src="/support/how-to/using-rbac-with-myrackspace/myrack-account-RBAC12.png">

3. Update the user, user group, or Group membership permission.

4. Select **Save** Changes.


#### Manage Group
The Manage Groups tab enables you to create new User and Product groups and update members.

**Create User Groups**

1. Select Manage Groups.

<img width="477" alt="myrack-account-RBAC13" src="/support/how-to/using-rbac-with-myrackspace/myrack-account-RBAC13.png">

2. At the top of the User Groups column, enter a name for the new group and select the green plus sign as shown in below image.

<img width="477" alt="myrack-account-RBAC14" src="/support/how-to/using-rbac-with-myrackspace/myrack-account-RBAC14.png">

3. Select the Group Members to add and select Save Changes.

**Create Product Group**

1. Select Manage Groups

2. At the top of the User Product column, enter a name for the new group and select the green plus sign as shown in below image.

<img width="452" alt="myrack-account-RBAC15" src="/support/how-to/using-rbac-with-myrackspace/myrack-account-RBAC15.png">

3. Select the Product to add and select Save Changes.

**Grant Access to a User Group or Product Group**

Use the following steps to grant access to a user group or product group:

1. Select Manage Groups.

2. Select an existing group from the User Groups or Product Groups column.

<img width="470" alt="myrack-account-RBAC16" src="/support/how-to/using-rbac-with-myrackspace/myrack-account-RBAC16.png">

3. Select the member to add.

<img width="404" alt="myrack-account-RBAC17" src="/support/how-to/using-rbac-with-myrackspace/myrack-account-RBAC17.png">

4. Select Save Changes.


**Delete a User or Product Group**
Use the following steps to delete a user or product group:

1. Select Manage Groups.

2. Select an existing group from the User Groups or Product Groups column.

<img width="908" alt="myrack-account-RBAC18" src="/support/how-to/using-rbac-with-myrackspace/myrack-account-RBAC18.png">

3. Select the Actions dropdown in the upper-right corner as shown in above image.

4. Select Delete Group**.

### Global Permissions
The Global Permissions section lets you to make changes across your entire account.

Ticketing Settings enable you to control the tickets that your users have permission to see when those tickets include one or more devices.

The following table shows the ticketing settings that you need for common actions or views:

{{< table "table  table-striped table-bordered" >}}
| **Ticket Setting**  | **Functionality** |
|---------|--------|
| Flexible Ticket Viewing (default setting) | Enables users to see tickets that include a device that they have permission to view. For example, if a user has access to device A, they see all of the tickets that include device A, even if the ticket has other devices. If device C is later added to the ticket, the user can still see the ticket, even if the user does not have access to device C. |
| Strict Ticket Viewing | Requires users to have access to all the devices on a ticket to see that ticket. For example, if a ticket includes device A and device B, the user must have permissions to both devices to see the ticket. If a ticket the user could see later includes device C, to which the user has no access, the user can no longer see the ticket. |