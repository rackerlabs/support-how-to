---
permalink: administrator-guide-for-rackspace-webmail-multifactor-authentication/
audit_date: '2020-10-05'
title: Administrator guide for Rackspace Webmail multifactor authentication
type: article
created_date: '2020-10-05'
created_by: Daniel Boyle
last_modified_date: '2020-10-05'
last_modified_by: Stephanie Fillmon
product: Rackspace Email
product_url: rackspace-email
---

This article describes the types of multifactor authentication available
to Rackspace Webmail administrators in the
[Cloud Office Control Panel](https://cp.rackspace.com/), how to manage
multifactor authentication settings, and how to reset multifactor
authentication for a user.

### Prerequisites

- **Applies to:** Administrator
- **Difficulty:** Easy
- **Tools required:** Cloud Office Control Panel access

For more information on prerequisite terminology, see
[Cloud Office support terminology](/support/how-to/cloud-office-support-terminology).

### Multifactor authentication options

There are three options for multifactor authentication in the Cloud Office
Control Panel:

1. **Force-On**: The user must set up multifactor authentication before they
   can access webmail.
2. **Optional**: The user can decide if or when to set up multifactor
   authentication.
3. **Off**: The user doesn't have the option to set up multifactor
   authentication.

The default setting is **Off**, and it applies to all new domains. You must
configure multifactor authentication for each individual domain. The
settings don't cascade from the parent domain to child domains.

### Manage multifactor authentication settings

Use the following steps to manage multifactor authentication for your domains:

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com/).
2. In the Rackspace Email section, click **Mailboxes**.

   If you have multiple domains in your account, you must select the domain for
   which you want to manage multifactor authentication.

3. In the left-side menu, click **Settings** and then click
   **Webmail Settings**.
4. In the **Admin-Only Settings** section, select the desired multifactor
   authentication option and then save the setting.  

{{<image src="admin-only-settings.png" alt="" title="">}}

### Reset multifactor authentication for a user

If you need to reset multifactor authentication for a user, use the following
steps:

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com/).
2. In the Rackspace Email section, click **Mailboxes**.

   **Note:** You must select the appropriate domain if your account has more
   than one.

3. Find the mailbox that requires the reset and click **Manage**.
4. Click **More** and then select **Reset Multifactor Authentication**.

{{<image src="reset-mfa.png" alt="" title="">}}
