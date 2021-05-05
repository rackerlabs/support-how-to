---
permalink: faq-role-based-access-control-rbac
audit_date: '2018-02-12'
title: 'Role-Based Access Control (RBAC) FAQ'
type: article
created_date: '2013-04-12'
created_by: Renee Rendon
last_modified_date: '2019-01-25'
last_modified_by: Cat Lookabaugh
---

Get quick answers to common questions about Role-Based Access Control (RBAC).

#### What is the cost to opt in to RBAC?

RBAC is a no-cost feature that is available to selected public cloud services
with an API.

#### Can a customer opt out of RBAC?

Customers can opt out by simply removing the account users.

#### Is RBAC available internationally?

Yes, RBAC is available to all Rackspace customers.

#### When I add a user login to an existing contact, can I configure custom role assignments?

Yes, you can. For instructions, see [Use Role-Based Access Control
(RBAC)](/support/how-to/managing-role-based-access-control-rbac).

#### How do I query the capability of a given user?

You can query the roles for a given user by using the [List global roles assigned to a user](https://docs.rackspace.com/docs/cloud-identity/v2/api-reference/role-operations/#list-global-roles-assigned-to-a-user) API operation described in the *Identity API Guide*. Additionally, you can view the roles that a user has through the [Cloud Control Panel](https://login.rackspace.com).

#### Can I view multiple accounts in the Cloud Control Panel?

You can view only one account at a time in the Cloud Control Panel.

#### Can Rackspace display usage per billing or per user?

Per-billing and per-user usage are not offered at this time.

#### Which users can create support tickets?

All users can create support tickets. However, only the account owner is
updated on the ticket status.

#### Can I delegate all functionality as an account owner?

Not at this time, but we are working on developing and delivering that
functionality.

#### Does RBAC provide fine-grained access control for specific servers, directories, or files?

RBAC is limited to granting a user access to a given product. RBAC is
not granular enough to restrict access to individual servers, files, or
directories.

#### Does the API offer more features for RBAC than the Cloud Control Panel offers?

Yes, at this time more features are available through the API. For more
information about using the API for RBAC, see the [Rackspace API Documentation](https://docs.rackspace.com/docs/).

#### Do account users automatically inherit the RackConnect and Managed Cloud features?

Yes.

#### How does RBAC work with MyRackspace?

With RBAC, account owners can leave permissions as
they are in MyRackspace or set up restricted access to specific products
for users through the Cloud Control Panel. For more detailed information,
see [Learn about Role-Based Access Control (RBAC)](/support/how-to/overview-role-based-access-control-rbac/).

#### Can I link dedicated, hybrid, and cloud permissions?

You cannot link these permissions at this time. Having a common
permission scheme among dedicated, hybrid, and cloud customers will be
addressed in the future.

#### Are servers, containers, files, databases, and load balancers shared, or do users each have their own set of resources?

All resources for an account are shared across users that have the
correct roles. In other words, account users do not have their own set
of resources but share a pool of resources that other users of the
account might have access to.

#### Where can I view the pop-up window that appeared when I initially enabled RBAC?

Following is the initial pop-up window that appears when you enable RBAC.

{{<image src="RBAC.png" alt="" title="">}}(https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/RBACInitialPDF_0.png" alt="" title="">}}

For information about additional products that will be RBAC-enabled in
the future, see [Learn about Role Based Access Control (RBAC)](/support/how-to/overview-role-based-access-control-rbac).

For information about changing your admin credentials, see [Use Role-Based Access Control (RBAC)](/support/how-to/managing-role-based-access-control-rbac).

For access to the Cloud Control Panel, log in at [https://login.rackspace.com/](https://login.rackspace.com/).

#### Additional resources

-  [Permissions Matrix for Role-Based Access Control (RBAC)](/support/how-to/permissions-matrix-for-role-based-access-control-rbac)
-  [Known issues and suggested workarounds for RBAC](/support/how-to/known-issues-and-suggested-workarounds-role-based-access-control-rbac)
