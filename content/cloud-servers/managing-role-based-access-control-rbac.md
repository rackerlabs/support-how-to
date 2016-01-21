---
node_id: 3567
title: 'Managing: Role-Based Access Control (RBAC)'
type: article
created_date: '2013-06-28'
created_by: Renee Rendon
last_modified_date: '2016-01-15'
last_modified_by: Stephanie Fillmon
product: Cloud Servers
product_url: cloud-servers
---

### Implementing RBAC through the Cloud Control Panel

The account owner implements RBAC by adding users to the account and
assigning roles. This article will guide the account owner through this
process using the [Cloud Control
Panel](https://mycloud.rackspace.com/).

For information about setting up RBAC through the API, see the [Cloud
Identity Admin Developer
Guide](http://docs.rackspace.com/auth/api/v2.0/auth-client-devguide/content/Overview-d1e65.html).

     **Note:** It is possible to assign a mix multiple-product roles and
per-product roles to one user through the API. The most permissive role
will determine the user's level of access.

### Account Credentials

Rackspace recommends that the account owner change the account password
and secret question before adding new users to the account.

<span>When new users are created, a temporary password is assigned to
them, which they should change at their first login.</span>

Also, new users must be informed that they have been added to the
account. Rackspace does not notify them automatically. Account owners
may use the following text to notify their users:

**Your access to this account has changed. You have been added as a new
user, and you must update your credentials (password and secret
question) as soon as possible. See &lt;Insert Name&gt; for your
temporary access information.**

### Creating New Users

<span>1.</span> <span> In the upper-right corner o</span><span>f
the</span> [Cloud Control Panel](https://mycloud.rackspace.com/)<span>,
click</span> <span> userName (accountNumber)</span><span>.</span>

2\. From the menu, select **User Management.**

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/UserManagement_1.png" width="289" height="221" />

<span>3. In the</span> **User Management**<span> box, click</span>
**Create User**<span>.</span>

4\. Complete the **Username**, **Password**, **Security Question**, and
**Security Answer** fields.

     **Note:**<span> Username must be unique. You cannot recover the
username of a deleted user.</span>

5\. Select a role to assign to the user.

-   <span>If the</span> **Custom** <span>role is chosen, go to
    step 6.</span>
-   <span>If the **Full Access** or **Read-only Access** role is chosen,
    skip to step 7.</span>

6\. In the **Product Access** section, select a role for each user. For
optimal product interaction see [Suggested Role
Configurations.](#configuration)

**     Note: **<span>Once a user has been assigned the custom role, this
role cannot be changed to a multi-product role through the Cloud Control
Panel. For more information about changing a custom role to a full
access or read-only access role see[ custom
role](/how-to/known-issues-and-suggested-workarounds-role-based-access-control-rbac).</span>

7\. In the **Contact Information** section, select the contact type.

8\. Specify the contact&rsquo;s name and email address.

9\. If the primary contact&rsquo;s details will be used for the user, slect
the **Use Primary Contact Details check box**. Otherwise, specify the
user's contact details.

10\. Click **Create User**.

**     Note:** The Control Panel view is different for each user
depending on the roles assigned.

### Suggested Role Configurations

Rackspace recommends the following custom role configurations for
optimal product interaction.

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">PRODUCT</th>
<th align="left">IF:</th>
<th align="left">AND:</th>
<th align="left">THEN:</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><strong>First Generation Cloud Servers</strong></td>
<td align="left"><p>A user has been assigned any First Generation Cloud Server role</p></td>
<td align="left"><p> </p></td>
<td align="left"><p>In First Generation<span> Cloud Servers, g</span><span>ive the user the Observer role</span><span> </span><span>(minimum action)</span></p></td>
</tr>
<tr class="even">
<td align="left"><strong>First Generation Cloud Servers</strong> </td>
<td align="left">A user needs to backup an image</td>
<td align="left">The user has been assigned any First Generation Cloud Server <span>role </span></td>
<td align="left">In First Generation Cloud Servers &amp; Cloud Files, give the user the Admin role </td>
</tr>
<tr class="odd">
<td align="left"><strong>Cloud Load Balancers</strong></td>
<td align="left"><p>A user has been assigned any Cloud Load Balancers role</p></td>
<td align="left"><p> </p></td>
<td align="left"><p>In First Generation and Next Generation Cloud Servers, g<span>ive the user the Observer role</span><span> </span><span>(minimum action)</span></p></td>
</tr>
<tr class="even">
<td align="left"><strong>Cloud Load Balancers </strong></td>
<td align="left">A user wants to add a node by using &quot;Add Nodes: Add Cloud Server ...&quot; in the Cloud Control Panel</td>
<td align="left">The user has been assigned any Cloud Load Balancers role</td>
<td align="left">In First Generation or Next Generation Cloud Servers, give the user any role </td>
</tr>
<tr class="odd">
<td align="left"><p><strong>Cloud Databases</strong></p></td>
<td align="left"><p>A user wants to create a backup in Cloud Databases</p></td>
<td align="left"><p> </p></td>
<td align="left"><p>In Cloud Files, give the user the Admin role</p></td>
</tr>
</tbody>
</table>

### **Adding a User Login and Custom Role to an Existing Contact**

1\. In the **User Management** box, click the actions cog next to the
contact's name.

2\. Click **Add Login...**

3\. Complete the **Username**, **Password**, **Security Question**, and
**Security Answer** fields.

<span>4. Click **Save User Information** after choosing the custom
role.</span>

<span>5. Click the actions cog next to that user's name and configure
the custom role.</span>

### <span>Rackspace Customers with Multiple Accounts</span>

Rackspace customers with more than one account may want to allow the
same user to access to each account. In this situation, the account
owner will need to configure that user with a different username for
each account. The following graphic illustrates this scenario.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/MutiAccountsRBAC.png" width="534" height="250" />



[&lt; Overview of RBAC ](/how-to/overview-role-based-access-control-rbac)  -   [Using RBAC with MyRack &gt;](/how-to/using-rbac-with-myrackspace)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



