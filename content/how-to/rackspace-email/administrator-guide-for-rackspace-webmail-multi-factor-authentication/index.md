---
permalink: administrator-guide-for-rackspace-webmail-multi-factor-authentication
audit_date: '2020-10-05'
title: Administrator guide for Rackspace Webmail multi-factor authentication
type: article
created_date: '2020-10-05'
created_by: Daniel Boyle
last_modified_date: '2020-10-05'
last_modified_by: Stephanie Fillmon
product: Rackspace Email
product_url: rackspace-email
---

This article describes the types of multi-factor authentication available
to Rackspace Webmail administrators in the
[Cloud Office Control Panel](https://cp.rackspace.com/), how to manage
multi-factor authentication settings, and how to reset multi-factor
authentication for a user.

### Prerequisites

- **Applies to:** Administrator
- **Difficulty:** Easy
- **Tools required:** Cloud Office Control Panel access

For more information on prerequisite terminology, see
[Cloud Office support terminology](/support/how-to/cloud-office-support-terminology).

### Multi-factor authentication options

There are three options for multi-factor authentication in the Cloud Office
Control Panel:

1. **Force-On**: The user must set up multi-factor authentication before they
   can access webmail.
2. **Optional**: The user can decide if or when to set up multi-factor
   authentication.
3. **Off**: The user doesn't have the option to set up multi-factor
   authentication.

The default setting is **Off**, and it applies to all new domains. You must
configure multi-factor authentication for each individual domain. The
settings don't cascade from the parent domain to child domains.

### Manage multi-factor authentication settings

Use the following steps to manage multi-factor authentication for your domains:

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com/).
2. In the Rackspace Email section, click **Mailboxes**.

   If you have multiple domains in your account, you must select the domain for
   which you want to manage multi-factor authentication.

3. In the left-side menu, click **Settings** and then click
   **Webmail Settings**.
4. In the **Admin-Only Settings** section, select the desired multi-factor
   authentication option and then save the setting.  

{{<image src="admin-only-settings.png" alt="" title="">}}

### Reset multi-factor authentication for a user

If you need to reset multi-factor authentication for a user, use the following
steps:

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com/).
2. In the Rackspace Email section, click **Mailboxes**.

   **Note:** You must select the appropriate domain if your account has more
   than one.

3. Find the mailbox that requires the reset and click **Manage**.
4. Click **More** and then select **Reset Multifactor Authentication**.

{{<image src="reset-mfa.png" alt="" title="">}}
