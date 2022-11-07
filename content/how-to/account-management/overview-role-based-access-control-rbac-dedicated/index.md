---
permalink: overview-role-based-access-control-rbac-dedicated
audit_date: '2022-08-25'
title: Overview Role Based Access Control for Dedicated
type: article
created_date: '2022-08-25'
created_by: Asmita Nakwa
last_modified_date: '2022-11-07'
last_modified_by: Asmita Nakwa
product: Account Management
product_url: account-management
---

**Previous Section:** [Rackspace Cloud](/support/how-to/overview-role-based-access-control-rbac-cloud)

This article answers basic questions about the Role-Based Access Control (RBAC) service.

**Note:** The RBAC service is currently unavailable for RackConnect.

### Overview
RBAC is a secure method of restricting account access to authorized users. This method enables account owners to add users and assign roles. Each role has specific permissions that Rackspace has defined. RBAC enables users to perform actions based on the scope of their assigned roles.

Account owners can create up to 100 users, each with their own password and API key.

### Implementation of RBAC
RBAC gives customers a greater degree of control over cloud resource use, with an additional layer of system security.

### Types of Users
RBAC has the following types of users:
-   **Account owner** - The account owner, who serves as the main point of contact for the account, is fully authorized to use all available product features. Each account has a single account owner.
-   **Account user** - A user added by the account owner and has all the access of particular products or account roles.

### Actions Performed by Account Owner
The account owner is the only user who can perform the following actions:
-   Create new users, modify existing users, and delete users.
-   Make changes to contacts, including the billing contact.

### Role
The term *role* describes the level of access that is associated with a user's account. RBAC limits risk by ensuring that users do not have access to features that extend beyond their areas of expertise or responsibility.

A role can grant access to all of the resources relating to a single product or to multiple products. RBAC does not restrict access to specific files, directories, or servers.

### Roles Available Through RBAC
This section describes the roles that are available through RBAC.

#### **Multiple-product Roles**
Multiple-product roles grant access to resources that are associated with multiple products.
RBAC has the following multiple-product roles:
-   **Full Access** - The Full Access role has permissions to create, read, update, and delete resources within multiple designated products.
-   **Read-only Access** - The Read-only Access role has permissions to view resources within multiple designated products.

These permissions apply to products that are RBAC-enabled.

**Note**: Users with Full Access and Read-Only Access roles have automatic access to all new products that become RBAC-enabled, with the exception of account administration tasks such as billing. Product roles do not include account roles.

#### **Account Roles**

Assign the following account roles to the users who manage your Rackspace customer account:
-   **Billing:admin** - The Billing Admin role has permissions to create, read, update, and delete billing and payment resources for the designated product.
-   **Billing:observer** - The Billing Observer role has permissions to read billing and payment resources for the designated product. This role is read-only.

##### **Custom Roles**

Two types of permissions are available for Rackspace Dedicated hosting accounts:
- **Direct Permissions**: These grant the user direct access to account permissions, linked cloud accounts, devices, or services.
- **Effective Permissions**: Users inherit these because of their memberships in user and product groups.

**Account Permissions for Rackspace Dedicated Users**
To give a user account permissions without product permissions, use the following steps for dedicated users:

**Step 1.** Log in to the [Rackspace Dedicated](https://login.rackspace.com) as shown in below image.
<img width="533" alt="Enter credentials of dedicated users" src="/support/how-to/overview-role-based-access-control-rbac-dedicated/rbac1.png">

**Step 2.** In the top navigation bar, click **Account > User Management**.
<img width="379" alt="Select user management from Account tab" src="/support/how-to/overview-role-based-access-control-rbac-dedicated/rbac2.png"> 

**Step 3.** In the top navigation bar, click **Account > Permissions**.
<img width="689" alt="Select permissions under Account tab" src="/support/how-to/overview-role-based-access-control-rbac-dedicated/rbac6.png">

**Note:** You can give a user a combination of direct and effective permissions. MyRackspace uses the highest level of permission. 

<img width="928" alt="Assign user direct and effective permissions" src="/support/how-to/overview-role-based-access-control-rbac-dedicated/rbac7.png">

To assign permissions you can use the following way as listed below:
- Assign By User
- Assign By Product
- Manage Groups
- Global Permissions

**Assign By User**

**Step 1.** To assign permission **By User**, select a user/user group from the column. 

<img width="931" alt="rbac8" src="/support/how-to/overview-role-based-access-control-rbac-dedicated/rbac8.png">

**Step 2.** Select the checkbox under **Direct** permissions you want to assign to that user/user group.

<img width="928" alt="rbac9" src="/support/how-to/overview-role-based-access-control-rbac-dedicated/rbac9.png">

**Step 3.** Click **Save Changes** button.

**Assign By Product**

**Step 1.** To assign permission **By Product**, select product/product group from the column.

<img width="810" alt="Assign permission by product" src="/support/how-to/overview-role-based-access-control-rbac-dedicated/rbac10.png">

**Step 2.** Select a check box under **Direct** permissions you want to assign to that product/product group.

<img width="942" alt="Select checkbox to assign product/product group permissions" src="/support/how-to/overview-role-based-access-control-rbac-dedicated/rbac11.png">

**Step 3.** Click **Save Changes** button.

**Manage Groups**

**Step 1.** To add new User Groups/Product Groups, click **Manage Groups**.

<img width="925" alt="Add new user groups or product groups" src="/support/how-to/overview-role-based-access-control-rbac-dedicated/rbac12.png">

**Step 2.** Enter a name for the new group and select the green plus sign.

<img width="918" alt="Enter name of the new group" src="/support/how-to/overview-role-based-access-control-rbac-dedicated/rbac13.png">

**Step 3.** Click **Save Changes** button.

### Activation of RBAC
RBAC is automatically activated when the account owner adds users to an account. Account owners can add dedicated users through the [Dedicated Users](https://login.rackspace.com/) or the API.

#### **Future RBAC-enabled Products**
New products are RBAC-enabled as they are launched.

### Product Without RBAC
The following Rackspace products will not have RBAC:
- RackConnect

### Next Section
[Use Role-Based Access Control (RBAC)](/support/how-to/use-role-based-access-control-rbac)
