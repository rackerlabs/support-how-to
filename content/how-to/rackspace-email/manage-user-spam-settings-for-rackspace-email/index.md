---
permalink: manage-user-spam-settings-for-rackspace-email/
audit_date: '2021-03-15'
title: Manage user spam settings for Rackspace Email
type: article
created_date: '2011-03-18'
created_by: Rackspace Support
last_modified_date: '2021-03-15'
last_modified_by: Carlos Arriaga
product: Rackspace Email
product_url: rackspace-email
---

This article describes how to manage individual user spam settings and how to save your configuration.

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com/).
2. Click **Domains**.
3. In the **Spam Settings** section, click the **Spam Settings**.
4. If you have multiple domains, select a domain name. Or, to change domains at any time, click the **dropdown arrow**.
5. In the **Status** section, turn spam filtering on or off. Or, select **Exclusive** to receive email only from senders on the safelist.
6. If you turned spam filtering on, indicate how messages should be handled for Rackspace Email:

    - **Deliver to Spam folder** - Spam messages are sent to the user's Spam folder. If you want to automatically delete messages from this folder, select the **Delete after *n* days or *n* total email** check box and enter a specified number of days or total emails.
    - **Delete the email immediately** - Spam email will be deleted automatically and not delivered to the user's mailbox. Email will be permanently deleted and will not be retrievable.
    -   **Include "\[SPAM\]" at the beginning of the subject line** - Spam email
    will be delivered to the user's Inbox, but will include the text "\[SPAM\]" in the Subject line.
    - **Deliver to the email address** - Spam messages are sent to an address in your domain that you specify.

7. If you turned spam filtering on, indicate how messages should be handled for Microsoft Exchange:

    - **Send spam to recipient junk folder (and non-user spam to recipient quarantine)** - Spam emails
    will be directed to the recipient's junk email folder unless sent to a non-user object such as an
    Exchange contact, reaource, etc. 
    - **Send spam to domain quarantine** - Spam will be directed to the
    domain-level quarantine, rather than to the individual Quarantine Manager for the mailbox.

      **Note:** To log in to the domain-level Quarantine Manager, click the **Log into the Quarantine Manager** link. Email that is filtered as spam will be directed to the domain-level Quarantine Manager, where the administrator can then view and delete quarantined emails, or mark them as **Not Spam**.

    - **Send quarantine notifications to** - If you choose to send spam to the
    user's quarantine, they will receive quarantine updates by default.
    To receive email updates at an additional address, enter an email
    address in the **Send quarantine notifications to** box.

8. Set override options by choosing one of the following options:

   - **Set preferences only for users who have not set their own** - This default selection manually toggles the settings on this page and does not affect any current ongoing spam filter settings for other mailboxes.
   - **Override preferences for all users regardless of their own preferences** - This option manually toggles the settings on this page when you select the radio button and click **Save**. It does not stay enabled, and it only serves as a one-time update for the preferences.

9. Click the **Save** button.

Use the Feedback tab to make any comments or ask questions. You can also click **Let's Talk** to [start the conversation](https://www.rackspace.com/). 