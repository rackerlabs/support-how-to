---
permalink: spam-preferences-safelists-and-blocklist-in-rackspace-email/
audit_date: '2021-01-28'
title: 'Spam preferences, safelists, and blocklists in Rackspace Email'
type: article
created_date: '2012-05-25'
created_by: Rackspace Support
last_modified_date: '2021-01-28'
last_modified_by: Carlos Arriaga
product: Rackspace Email
product_url: rackspace-email
---

Rackspace Technology gives you the flexibility to set your own spam preferences. This includes editing and managing
domain-wide spam settings, safelists, and blocklists. YOu can also override the spam filtering for the entire domain.
This article describes how to accomplish these tasks in the [Cloud Office Control Panel](https://cp.rackspace.com).

### Manage domain spam settings

To manage your domain-level spam settings, go to the **Domains** section of the Control Panel and select **Spam Settings**,
**Blocklists**, or **Safelists**.

**Note:** If you have multiple domains, select the domain you intend to make changes to.

### Manage individual user spam settings

1. To manage an individual user's spam settings, go to the **Rackspace Email** section of the Control Panel and select
**Spam Settings**, **Blocklists**, or **Safelists**.

2. Select the user for which you want to update spam settings.

#### Set spam filtering options

1. For individual mailboxes, click **Spam Settings** in the **Rackspace Email** section. For the domain, click
   **Spam Settings** in the **Domains** section.

2. In the Status section, turn the spam filtering on or off. You can also select **Exclusive** to receive email
   from only senders on your domain's safelist.

3. Select the preferred settings for Rackspace Email in your domain. Following is a description of each option:

    - **Deliver to the Spam folder**: The sysrem sends spam messages to the user's Spam folder. To automatically
      delete messages from this folder, select the **Delete after *n* days or *n* total email** check box and enter
      a specified number of days, total emails, or both.

    - **Delete the email immediately**: The system deletes spam email automatically and does not deliver messages to
      the user's mailbox.

    - **Include "\[SPAM\]" at the beginning of the subject line**: The system delviers spam email to the user's Inbox,
      but it adds the text **"\[SPAM\]"** to the subject line.

    - **Deliver to the email address**: The system sends spam messages to an email address of your choice that resides
      on your domain.

4. In the **Override Options** section, indicate whether to apply these settings to users who have not already set their
   spam preferences or whether these settings should override spam preferences for all users.

**Note:** If you chose to set options for an individual Rackspace Email mailbox, you won't see the override options.

5. Click **Save**.

### Manage safelists

Safelists allow you to add a sender's email address, domains, or IP address to deliver directly to the mailbox. This
is useful when the system flags a sender as spam, but you don't want it to deliver the sender's email to the Spam
or Junk Folder.

1. For individual mailboxes, click **Safelists** in the **Rackspace Email** section. For the domain, click **Safelists**
   in the **Domains** section.

2. To add a domain name or email address to the safelist, enter the domain or email address in the box and click **Add**.

3. To remove a domain or email address, select the name in the list and click **Remove**. To remove all domain names or
   email addresses listed in the window, click **Clear**.

   **Note:** If you have multiple domain names or email addresses to add, use the bulk import option to upload a **.csv**
   or **.txt** file containing the information.

4. To add an IP address to the safelist, enter the IP address (or range) in the box and click **Add**.

5. To remove an IP address, select the address in the list and click **Remove**. To remove all IP addresses listed in the
   window, click **Clear**.

   **Note:** If you have multiple IP addresses to add, use the bulk import option to upload a **.csv** or **.txt** file
   containing the information.

6.  Click **Save**.

### Manage blocklists

Blocklists allow you to block a sender's email address, domain, or IP address, preventing the system from delivering the
messages to your mailbox.

1. For individual mailboxes, click **Blocklists** in the **Rackspace Email** section. For the domain, click **Blocklists**
   in the **Domains** section.

2. To add a domain name or email address to the blocklist, enter the domain or email address in the box, and click **Add**.

3. To remove a domain or email address, select the name in the list and click **Remove**. To remove all domain names or
   email addresses listed in the window, click **Clear**.

    **Note:** If you have multiple domain names or email addresses to add, use the bulk import option to upload a **.csv**
    or **.txt** file containing the information.

4. To add an IP address to the blocklist, enter the IP address (or range) in the box and click **Add**.

5. To remove an IP address, select the address in the list and click **Remove**. To remove all IP addresses listed in the
   window, click **Clear**.

   **Note:** If you have multiple IP addresses to add, use the bulk import option to upload a **.csv** or **.txt** file
   containing the information.

6.  Click **Save**.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/).
