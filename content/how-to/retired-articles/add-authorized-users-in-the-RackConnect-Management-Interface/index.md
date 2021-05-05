---
permalink: add-authorized-users-in-the-rackconnect-management-interface
audit_date:
title: Add authorized users in the RackConnect Management Interface
type: article
created_date: '2016-08-09'
created_by: Kyle Laffoon
last_modified_date: '2016-08-09'
last_modified_by: Kyle Laffoon
---

Access the RackConnect Management Interface from the
[MyRackspace Portal](https://my.rackspace.com/). To view your
RackConnect users, click **Account > User List**.

On the RackConnect **User List** page, you can view active or invited users
and create or deactivate users.
   **Note:** You wil also see Inactive users and Invited Users listed.
   - Inactive user has not been invited.
   - Invited user has been sent activation information and is in a pending type of status.

### Create a new user

Complete the following steps to create and authorize new user.

1. Click **Create New User**.
2. In the **Users/New** screen, enter information for the new user in the
   **First Name**, **Last Name**, **Email Address** and **Phone Number** fields and click **Create New User** when finished.
   **Note:** This generates an email to the new user to register.
3. After the new user is registered, open the  **Account > Permissions** page
   to assign authorization for the user.
   **Note:** If you already have a user whose authorization profile would be suitable for the user currently being assigned authorities, you can use the **Clone** option from the *User List** page.
4. On the **Permissions / Assign By User** page, click on the name of the user
   to assign authorization.
   **Note:** Review the [Permission Guide](https://racker.my.rackspace.com/portal/downloads/csx-docs/PermissionsGuide.pdf), linked on the **Permissions / Assign By User** for information on assignment and permission management options.
5. Under the **Account Permissions** tab, select the checkboxes for the
   authorizations to assign.
   **Note:** Assigning Account Administrator authorization grants the same permissions as you have. If you don't want to assign that much authority, but are setting up a technical contact, be sure to assign at least the following:
    - Manage My Contact info
    - Manage SSL Certs
    - View Reports
    - View and Edit Account Tickets
    - View and Edit Domains
6. Under the **Cloud Accounts** tab, assign **Edit** or **Admin** authority.
7. Under the **Devices** or **Firewall** tab, assign **Edit** or **Admin**
   authority.
8. Click **Save Changes** when you are finished.
