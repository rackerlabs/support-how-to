---
node_id: 3648
title: 'Known Issues and Suggested Workarounds: Role-Based Access Control (RBAC)'
type: article
created_date: '2013-08-16'
created_by: Renee Rendon
last_modified_date: '2016-01-15'
last_modified_by: Stephanie Fillmon
product: Cloud Servers
product_url: cloud-servers
---

<span>This is a list of known issues with Role-based Access Control
(RBAC). We are diligently working to resolve these issues. If you are
experiencing an issue that is not listed, please contact customer
support at 1-800-961-4454.</span>

### <span><span>Custom Role </span></span>

<span><span>**Known Issue:** After a user has been assigned the custom
role, the account owner cannot change this role to a multiproduct role
by using the Cloud Control Panel. </span></span>

<span><span>**Workaround:** The account owner can simulate the full
access role by assigning to the user the admin role for all available
products. To simulate the read-only access role, the account owner can
assign to the user the observer role for all available
products. </span></span>

<span><span>     **Note:** The custom role will not be updated
automatically when new Rackspace products become RBAC enabled. The
account owner must update custom roles to include the new
products.</span></span>

<span><span>You can also change the custom role to a multiproduct role
by contacting Support at 1-800-961-4454.    </span></span>

### <span>Multiple Roles for One User</span>

<span>**Known Issue:** Multiple roles for one user can only be assigned
through the [API](http://docs.rackspace.com/). The Cloud Control Panel
displays only the first role assigned to users that have multiple
roles. </span>

**<span>Workaround:</span>**<span> A user's multiple roles can be viewed
through the [API](http://docs.rackspace.com/).</span>

### <span>Suspended Account</span>

<span>**Known Issue:** When an account is suspended, all users of the
account are disabled. Users are not automatically re-enabled when the
account is reactivated.</span>

<span>**Workaround:** When the account is reactivated, the account owner
must re-enable users through the API or by contacting support at
1-800-961-4454. </span>

 [&lt; RBAC FAQ](/how-to/faq-role-based-access-control-rbac)    -    [Getting Started with RBAC &gt;](/how-to/getting-started-with-role-based-access-control-rbac-0)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

