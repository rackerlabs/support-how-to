---
permalink: overview-role-based-access-control-rbac
audit_date: '2018-02-16'
title: Learn about Role-Based Access Control (RBAC)
type: article
created_date: '2013-04-14'
created_by: Renee Rendon
last_modified_date: '2019-10-08'
last_modified_by: Catherine Richardson
product: Account Management
product_url: account-management
---

**Previous section:** [Getting started with Role-Based Access Control
(RBAC)](/support/how-to/getting-started-with-role-based-access-control-rbac)

This article answers basic questions about the Role-Based Access Control
(RBAC) service.

**Note:** The RBAC service is currently unavailable for RackConnect.

### What is RBAC?

RBAC is a secure method of restricting account access to authorized
users. This method enables account owners to add users and assign roles.
Each role has specific permissions that Rackspace has defined.
RBAC enables users to perform actions based on the scope of their
assigned roles.

Account owners can create up to 100 users, each with
their own password and API key.

### Why implement RBAC?

RBAC gives customers a greater degree of control over cloud resource use,
with an additional layer of system security.

### What types of users does RBAC have?

RBAC has the following types of users:

-   **Account owner** - The account owner is the primary contact for the
    account and has full permissions to execute all capabilities for
    every product available. Each account has a single account owner.

-   **Account user** - The account user is a user who has been added by
    the account owner and has been assigned to specific product or
    account roles.

### What actions are restricted to the account owner?

The account owner is the only user who can perform the following actions:

-   Create new users, modify existing users, and delete users.
-   Make changes to contacts, including the billing contact.

### What is a role?

The term *role* describes the level of access that is associated with a user's
account. RBAC limits risk by ensuring that users do not have access to
features that extend beyond their areas of expertise or responsibility.

A role can grant access to all of the resources relating to a single product
or to multiple products. RBAC does not restrict access to specific files,
directories, or servers.

### What roles are available through RBAC?

This section describes the roles that are available through RBAC.

#### Multiple-product roles

Multiple-product roles grant access to resources that are associated with
multiple products.

RBAC has the following multiple-product roles:

-   **Full Access** - The Full Access role has permissions to
    create, read, update, and delete resources within multiple
    designated products.

-   **Read-only Access** - The Read-only Access role has permissions to
    view resources within multiple designated products.

These permissions apply to products that are RBAC-enabled.

**Note**: Users with Full Access and Read-Only Access roles have
automatic access to all new products that become RBAC-enabled, with the
exception of account administration tasks such as billing. Product roles
do not include account roles.

#### Custom roles

Custom roles enable account owners to assign users different permissions for
different products. After a user is assigned custom roles, those roles can
only be changed on a per-product basis.

RBAC has the following custom roles:

-   **Product:admin** - The Product Admin role has permissions to
    create, read, update, and delete resources for the designated
    product.

-   **Product:creator** - The Product Creator role has permissions to
    create, read, and update resources for the designated product. This
    role cannot delete a resource. All destructive actions are prohibited.

-   **Product:observer** - The Product Observer role has permissions to
    read given resources for the designated product. This role is read-only.

#### Account roles

Assign the following account roles to the users who manage your Rackspace
customer account:

-   **Billing:admin** - The Billing Admin role has
    permissions to create, read, update, and delete billing and
    payment resources for the designated product.

-   **Billing:observer** - The Billing Observer role has
    permissions to read billing and payment resources for the
    designated product. This role is read-only.

To give a user account permissions without product permissions, use the
following steps:

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).
2. In the top navigation bar, click **Account > User Management**.
3. Click on the user for whom you want to assign permissions.
4. In the **Product Permissions** area under **Rackspace Cloud Product
   Permissions** and then under **PRODUCT ACCESS**, click **Edit**.

   The **Rackspace Cloud Permissions** window opens.

5. Under **Cloud Access**, choose the type of global access you want the 
   user to have, including a **Custom** option, or select the individual
   product and select from the options available for it, usually **ADMIN**,
   **CREATOR, or **OBSERVER**.
6. Then click **Save**.

**Note**: A user may be assigned both a product role and an account role.

### What are the contact types in the Cloud Control Panel?

Contact types are similar to tags. Using contact types can help account owners
manage users. The Cloud Control Panel offers the following contact types:

-   **Administrative** - This contact type is assigned to users who
    primarily handle administrative duties such as billing
    and payments. Administrative contacts do not receive technical
    alerts from our automated systems. No specific account implications
    come with this role. For example, when an administrative user changes
    their address, the change does not affect the billing address for the
    account.

-   **Technical** - This contact type is assigned to users who
    primarily perform technical tasks. These users receive monitoring
    alerts by default.

### When do I need to implement RBAC?

Implement RBAC when you want to achieve the following results:

-   Minimize downtime and accidental changes to cloud resources by restricting
    account access to only a few people.

-   Help prevent unauthorized access to cloud products by assigning each user
    their own credentials.

-   Synchronize cloud product access with the functions of an employee's job.

### Who can use RBAC?

RBAC is available to all Rackspace customers.

### How can I get RBAC?

RBAC is automatically activated when the account owner adds users to an
account. Account owners can add users through the
[Cloud Control Panel](https://login.rackspace.com/) or the API.

For more information about specific RBAC-related APIs, see the [Rackspace
API documentation](https://docs.rackspace.com/docs/).

### Which products are currently RBAC-enabled?

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

### Which products will be RBAC-enabled in the future?

New products are RBAC-enabled as they are launched.

### Which products will not have RBAC?

The following Rackspace products will not have RBAC:

-   RackConnect

### Next section

[Use Role-Based Access Control
(RBAC)](/support/how-to/managing-role-based-access-control-rbac)
