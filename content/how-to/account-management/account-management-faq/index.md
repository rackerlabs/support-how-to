---
permalink: account-management-faq
audit_date:
title: Account Management FAQ
type: article
created_date: '2019-05-16'
created_by: Stephanie Fillmon
last_modified_date: '2023-02-23'
last_modified_by: Asmita Nakwa
product: Account Management
product_url: account-management
---

### Access Control

{{< accordion title="What is the cost to opt in to RBAC?" col="in" href="accordion16" >}}

RBAC is a no-cost feature which is available to selected public cloud services with an API.
{{</ accordion >}}

{{< accordion title="Can a customer opt out of RBAC?" col="in" href="accordion17" >}}

Customers can opt out by simply removing the account users.
{{</ accordion >}}

{{< accordion title="Is RBAC available internationally?" col="in" href="accordion18" >}}

Yes, RBAC is available to all Rackspace customers.
{{</ accordion >}}

{{< accordion title="When I add a user login to an existing contact, can I configure custom role assignments?" col="in" href="accordion19" >}}

Yes, you can. For instructions, see [Use Role-Based Access Control (RBAC)](/support/how-to/use-role-based-access-control-rbac).
{{</ accordion >}}

{{< accordion title="How can I find out a user's roles and responsibilities?" col="in" href="accordion20" >}}

You can query the roles for a given user by using the [List global roles assigned to a user](https://docs.rackspace.com/docs/cloud-identity/v2/api-reference/role-operations/#list-global-roles-assigned-to-a-user) API operation described in the *Identity API Guide*. Additionally, you can view the roles that a user has through the [Cloud Control Panel](https://login.rackspace.com).
{{</ accordion >}}

{{< accordion title="Can I view multiple accounts in the Cloud Control Panel?" col="in" href="accordion21" >}}

You can view only one account at a time in the Cloud Control Panel.
{{</ accordion >}}

{{< accordion title="Can Rackspace display usage per billing or per user?" col="in" href="accordion22" >}}

Per-billing and per-user usage are not offered at this time.
{{</ accordion >}}

{{< accordion title="Which users can create support tickets?" col="in" href="accordion22" >}}

All users with account administration permissions are allowed to create support tickets related to account or device changes. Users limited to device permissions are only allowed to create tickets for the specific devices they are granted permissions on. For further information about Ticket Creation, please visit the [Fabric Ticketing section](https://docs.rackspace.com/support/how-to/fabric-ticketing/).
{{</ accordion >}}

{{< accordion title="Can I delegate all functionality as an account owner?" col="in" href="accordion23" >}}

Yes, an account owner can delegate all functionality.
{{</ accordion >}}

{{< accordion title="Does RBAC provide fine-grained access control for specific servers, directories, or files?" col="in" href="accordion24" >}}

RBAC is limited to grant a user access to a given product. RBAC is not granular enough to restrict access to individual servers, files, or directories.
{{</ accordion >}}

{{< accordion title="Does the API offer more features for RBAC than the Cloud Control Panel?" col="in" href="accordion25" >}}

Yes, at this time more features are available through the API. For more information about using the API for RBAC, refer to [Rackspace API Documentation](https://docs.rackspace.com/docs/).
{{</ accordion >}}

{{< accordion title="Do account users automatically inherit the RackConnect and Managed Cloud features?" col="in" href="accordion26" >}}

Yes, account users can automatically inherit the RackConnect and Managed Cloud features.
{{</ accordion >}}

{{< accordion title="How does RBAC work with MyRackspace?" col="in" href="accordion27" >}}

With RBAC, account owners can leave permissions as they are in MyRackspace or set up restricted access to specific products for users through the Cloud Control Panel. For more detailed information, refer to Learn about Role-Based Access Control (RBAC) for [Rackspace Cloud](/support/how-to/overview-role-based-access-control-rbac-cloud/) and [Rackspace Dedicated](/support/how-to/overview-role-based-access-control-rbac-dedicated/).
{{</ accordion >}}

{{< accordion title="Can I link dedicated, hybrid, and cloud permissions?" col="in" href="accordion28" >}}

Currently it is not possible to have one user credential for all accounts. A Dedicated account requires one set of user credentials, and Cloud accounts require a different set of user credentials. We do provide an Account Linking feature that allows a Dedicated account to link Cloud Accounts, and you can manage the Dedicated users that are allowed to click and access a Cloud Account to perform either Administrative, Editing, or Viewing functions. Refer the following article to configure this feature.
[Rackspace Cloud](/support/how-to/overview-role-based-access-control-rbac-cloud/) and [Rackspace Dedicated](/support/how-to/overview-role-based-access-control-rbac-dedicated/)
{{</ accordion >}}

{{< accordion title="Are servers, containers, files, databases, and load balancers shared, or does each user have their own set of resources?" col="in" href="accordion29" >}}

All resources for an account are shared across users that have the correct roles. In other words, account users do not have their own set of resources but share a pool of resources that other users of the account might have access to.
{{</ accordion >}}

{{< accordion title="Where can I view the pop-up window that appeared when I initially enabled RBAC?" col="in" href="accordion30">}}

Following is the initial pop-up window that appears when you enable RBAC.

<img class="fig-img" src="/support/how-to/account-management-faq/RBAC.png" alt="">

For information about additional products that will be RBAC-enabled in the future, refer to [Rackspace Cloud](/support/how-to/overview-role-based-access-control-rbac-cloud) and [Rackspace Dedicated](/support/how-to/overview-role-based-access-control-rbac-dedicated).

For information about changing your admin credentials, refer to [Use Role-Based Access Control (RBAC)](/support/how-to/use-role-based-access-control-rbac).

For access to the Cloud Control Panel, log in at [https://login.rackspace.com/](https://login.rackspace.com/).
{{</ accordion >}}

{{< accordion title="What happens if I do not supply a VAT ID number?" col="in" href="accordion31" >}}

If you do not have a VAT ID number or choose not to supply one, Rackspace applies the appropriate tax handling to your invoice. It is in your best interest to supply your VAT ID number because the tax handling for a registered entity is beneficial in most circumstances.
{{< /accordion >}}
