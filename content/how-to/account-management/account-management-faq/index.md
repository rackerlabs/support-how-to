---
permalink: account-management-faq/
audit_date:
title: Account Management FAQ
type: article
created_date: '2019-05-16'
created_by: Stephanie Fillmon
last_modified_date: '2020-09-08'
last_modified_by: Stephanie Fillmon
product: Account Management
product_url: account-management
---

### Access control

{{< accordion title="What is the cost to opt in to RBAC?" col="in" href="accordion16" >}}

RBAC is a no-cost feature that is available to selected public cloud services
with an API.
{{</ accordion >}}

{{< accordion title="Can a customer opt out of RBAC?" col="in" href="accordion17" >}}

Customers can opt out by simply removing the account users.
{{</ accordion >}}

{{< accordion title="Is RBAC available internationally?" col="in" href="accordion18" >}}

Yes, RBAC is available to all Rackspace customers.
{{</ accordion >}}

{{< accordion title="When I add a user login to an existing contact, can I configure custom role assignments?" col="in" href="accordion19" >}}

Yes, you can. For instructions, see [Use Role-Based Access Control
(RBAC)](/support/how-to/managing-role-based-access-control-rbac).
{{</ accordion >}}

{{< accordion title="How do I query the capability of a given user?" col="in" href="accordion20" >}}

You can query the roles for a given user by using the [List global roles assigned to a user](https://docs.rackspace.com/docs/cloud-identity/v2/api-reference/role-operations/#list-global-roles-assigned-to-a-user) API operation described in the *Identity API Guide*. Additionally, you can view the roles that a user has through the [Cloud Control Panel](https://login.rackspace.com).
{{</ accordion >}}

{{< accordion title="Can I view multiple accounts in the Cloud Control Panel?" col="in" href="accordion21" >}}

You can view only one account at a time in the Cloud Control Panel.
{{</ accordion >}}

{{< accordion title="Can Rackspace display usage per billing or per user?" col="in" href="accordion22" >}}

Per-billing and per-user usage are not offered at this time.
{{</ accordion >}}

{{< accordion title="Which users can create support tickets?" col="in" href="accordion22" >}}

All users can create support tickets. However, only the account owner is
updated on the ticket status.
{{</ accordion >}}

{{< accordion title="Can I delegate all functionality as an account owner?" col="in" href="accordion23" >}}

Not at this time, but we are working on developing and delivering that
functionality.
{{</ accordion >}}

{{< accordion title="Does RBAC provide fine-grained access control for specific servers, directories, or files?" col="in" href="accordion24" >}}

RBAC is limited to granting a user access to a given product. RBAC is
not granular enough to restrict access to individual servers, files, or
directories.
{{</ accordion >}}

{{< accordion title="Does the API offer more features for RBAC than the Cloud Control Panel offers?" col="in" href="accordion25" >}}

Yes, at this time more features are available through the API. For more
information about using the API for RBAC, see the [Rackspace API Documentation](https://docs.rackspace.com/docs/).
{{</ accordion >}}

{{< accordion title="Do account users automatically inherit the RackConnect and Managed Cloud features?" col="in" href="accordion26" >}}

Yes.
{{</ accordion >}}

{{< accordion title="How does RBAC work with MyRackspace?" col="in" href="accordion27" >}}

With RBAC, account owners can leave permissions as
they are in MyRackspace or set up restricted access to specific products
for users through the Cloud Control Panel. For more detailed information,
see [Learn about Role-Based Access Control (RBAC)](/support/how-to/overview-role-based-access-control-rbac/).
{{</ accordion >}}

{{< accordion title="Can I link dedicated, hybrid, and cloud permissions?" col="in" href="accordion28" >}}

You cannot link these permissions at this time. Having a common
permission scheme among dedicated, hybrid, and cloud customers will be
addressed in the future.
{{</ accordion >}}

{{< accordion title="Are servers, containers, files, databases, and load balancers shared, or do users each have their own set of resources?" col="in" href="accordion29" >}}

All resources for an account are shared across users that have the
correct roles. In other words, account users do not have their own set
of resources but share a pool of resources that other users of the
account might have access to.
{{</ accordion >}}

{{< accordion title="Where can I view the pop-up window that appeared when I initially enabled RBAC?" col="in" href="accordion30">}}

Following is the initial pop-up window that appears when you enable RBAC.

<img class="fig-img" src="/support/how-to/account-management-faq/RBAC.png" alt="">

For information about additional products that will be RBAC-enabled in
the future, see [Learn about Role Based Access Control (RBAC)](/support/how-to/overview-role-based-access-control-rbac).

For information about changing your admin credentials, see [Use Role-Based Access Control (RBAC)](/support/how-to/managing-role-based-access-control-rbac).

For access to the Cloud Control Panel, log in at [https://login.rackspace.com/](https://login.rackspace.com/).

{{</ accordion >}}

{{< accordion title="What happens if I do not supply a VAT ID number?" col="in" href="accordion31" >}}

If you do not have a VAT ID number, or choose not to supply one,
Rackspace will apply the appropriate tax handling to your invoice. It is
in your best interest to supply your VAT ID number because the tax
handling for a registered entity is beneficial in most circumstances.

{{< /accordion >}}
