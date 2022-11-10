---
permalink: overview-role-based-access-control-rbac-cloud
audit_date: '2018-02-16'
title: Overview Role Based Access Control for Cloud
type: article
created_date: '2013-04-14'
created_by: Renee Rendon
last_modified_date: '2022-11-07'
last_modified_by: Asmita Nakwa
product: Account Management
product_url: account-management
---

**Previous Section:** [Getting started with Role-Based Access Control (RBAC)](/support/how-to/getting-started-with-role-based-access-control-rbac)

This article provides generic information about Role-Based Access Control (RBAC) service.

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

#### **Custom Roles**

Custom roles enable account owners to assign users different permissions for different products. After a user is assigned custom roles, those roles can only be changed on a per-product basis.

RBAC has the following custom roles:
-   **Product: Admin** - The Product Admin role has permissions to create, read, update, and delete resources for the designated product.
-   **Product: Creator** - The Product Creator role has permissions to create, read, and update resources for the designated product. This role cannot delete a resource. All destructive actions are prohibited.
-   **Product: Observer** - The Product Observer role has permissions to read given resources for the designated product. This role is read-only.

#### **Account Roles**

Assign the following account roles to the users who manage your Rackspace customer account:
-   **Billing:admin** - The Billing Admin role has permissions to create, read, update, and delete billing and payment resources for the designated product.
-   **Billing:observer** - The Billing Observer role has permissions to read billing and payment resources for the designated product. This role is read-only.

**Account Permissions for Cloud Users**

To give a user account permissions without product permissions, use the following steps for cloud users:

**Step 1.** Log in to the [Cloud Control Panel](https://login.rackspace.com) as shown in below image.

<image width="533" alt="Enter Cloud credentials" src="/support/how-to/overview-role-based-access-control-rbac-cloud/rbac1.png">

**Step 2.** In the top navigation bar, click **Account > User Management**.

<image width="379" alt="Select User Management from Account tab" src="/support/how-to/overview-role-based-access-control-rbac-cloud/rbac2.png">

**Step 3.** Select the user for whom you wish to set permissions.

<image width="919" alt="Select user to set the permission" src="/support/how-to/overview-role-based-access-control-rbac-cloud/rbac3.png">

**Step 4.** Under the Rackspace Cloud** option in the **Product Permissions** section, click **Edit** next to the **PRODUCT ACCESS** tab.

<image width="900" alt="Click Edit to edit product access" src="/support/how-to/overview-role-based-access-control-rbac-cloud/rbac4.png">

The **Rackspace Cloud Permissions** window opens as shown below.

<image width="203" alt="Displays rackspace cloud permission" src="/support/how-to/overview-role-based-access-control-rbac-cloud/rbac5.png">

**Step 5.** Under **Cloud Access**, choose the type of global access you want the user to have including a **Custom** option, or select the individual product and select from the options available for it, usually **ADMIN**, **CREATOR, **OBSERVER**, or **None**.

**Step 6.** Click **Save** or **Update**.

**Note**: A user may be assigned both a product role and an account role.

**Manage Global Permissions**

The Global Permissions section lets you make changes across your entire account.

### Types of Contact in Cloud Control Panel
Contact types are similar to tags. Using contact types can help account owners to manage users. The Cloud Control Panel offers the following contact types:

-   **Administrative** - Users that primarily perform administrative tasks, such as billing and payments, are given this contact category. Our automated systems do not send technical notifications to administrative contacts. This role has no particular significance for your accounts. For instance, the billing address for the account remains unaffected when an administrative user changes their address.

-   **Technical** - Users that accomplish mostly technical tasks are assigned this contact type. These users automatically get monitoring alerts.

### Need for Implementation of RBAC

Implement RBAC when you want to achieve the following results:
-   Minimize downtime and accidental changes to cloud or dedicated resources by restricting account access to only a few people.
-   Help prevent unauthorized access to cloud products by assigning each user their own credentials.
-   Synchronize cloud product access with the functions of an employee's job.

### Use of RBAC
RBAC is available to all Rackspace customers.

### Activation of RBAC
RBAC is automatically activated when the account owner adds users to an account. Account owners can add cloud users through the [Cloud Control Panel](https://login.rackspace.com/) or the API.

For more information about specific RBAC-related APIs, see the [Rackspace API documentation](https://docs.rackspace.com/docs/).

### RBAC-enabled Products
The following Rackspace products are RBAC-enabled:

-   [Cloud Servers](/support/how-to/cloud-servers)
-   [Cloud Files](/support/how-to/cloud-files)
-   [Cloud Databases](/support/how-to/cloud-databases)
-   [Cloud Load Balancers](/support/how-to/cloud-load-balancers)
-   [Cloud Queues](/support/how-to/cloud-queues)
-   [Rackspace Monitoring](/support/how-to/rackspace-monitoring)
-   [Rackspace Metrics](/support/how-to/rackspace-metrics)
-   [Cloud Backup](/support/how-to/cloud-backup)
-   [Cloud Networks](/support/how-to/cloud-networks)
-   [Cloud Block Storage](/support/how-to/cloud-block-storage)
-   [Auto Scale](/support/how-to/rackspace-auto-scale)
-   [Cloud Images](/support/how-to/cloud-images)
-   [Cloud Orchestration](/support/how-to/cloud-orchestration)
-   [Cloud DNS](/support/how-to/cloud-dns)
-   [Cloud Feeds](/support/how-to/cloud-feeds-overview)
-   [Rackspace CDN](/support/how-to/rackspace-cdn)
-   [Rackspace billing FAQ](/support/how-to/rackspace-billing-faq)

#### **Future RBAC-enabled Products**
New products are RBAC-enabled as they are launched.

### Product Without RBAC
The following Rackspace products will not have RBAC:
- RackConnect

### Next Section
[Use Role-Based Access Control (RBAC)](/support/how-to/use-role-based-access-control-rbac)
