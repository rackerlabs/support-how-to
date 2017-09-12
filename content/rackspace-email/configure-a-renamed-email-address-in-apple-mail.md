---
permalink: configure-a-renamed-email-address-in-apple-mail/
audit_date: '2017-09-12'
title: Configure a renamed email address in Apple Mail
type: article
created_date: '2017-08-23'
created_by: William Loy
last_modified_date: '2017-09-12'
last_modified_by: Stephanie Fillmon
product: Rackspace Email
product_url: rackspace-email
---

After you have renamed a Rackspace Email address, your email client will receive new mail only after you configure it to connect to the new email address. This article describes how to configure a renamed email address in Apple Mail.

### Prerequisites

- **Applies to:** User
- **Difficulty:** Easy
- **Time needed:** Approximately 20 minutes
- **Tools required:**  Mailbox password and access to the email client that you want to receive mail in

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology/).

**Warning:** If the old email address connects via POP, you must migrate the POP data to an IMAP account so that no data is lost in the rename configuration.

### Configure mail settings

1. Launch the **Mail** app.

   If **Mail** is not in your dock, open search by pressing *Command (⌘) + Space Bar*, and then type **Mail** in the search bar. Press enter to launch the **Mail** application.

2. In the upper-left corner of the navigation bar, click **Mail**, and then **Add Account**.

   <img src="{% asset_path rackspace-email/configure-a-renamed-email-address-in-apple-mail/mail_addaccountdropdown.png %}" />

3. In the pop-up window, click **Other Mail Account**, and then click **Continue**.

   <img src="{% asset_path rackspace-email/configure-a-renamed-email-address-in-apple-mail/accounttype_imap.png %}" />

4. Enter the following information:

   - **Name:** Your first and last name
   - **Email Address:** Your renamed Rackspace Email address
   - **Password:** Your mailbox password

   <img src="{% asset_path rackspace-email/configure-a-renamed-email-address-in-apple-mail/imap_logindetails.png %}" />

5. Click **Sign In**.

   An alert displays that the mail client cannot verify your account name or password, and requires additional information.

6. Enter the following information:

   - **Email Address:** Your renamed Rackspace Email address
   - **User Name:** Your renamed Rackspace Email address (even though it says automatic, fill it in as shown)
   - **Password:** Your mailbox password
   - **Account Type:** IMAP
   - **Incoming Mail Server:** secure.emailsrvr.com
   - **Outgoing Mail Server:** secure.emailsrvr.com

   <img src="{% asset_path rackspace-email/configure-a-renamed-email-address-in-apple-mail/imap_serversettings.png %}" />

   **Note:** Apple Mail typically clears the *User Name* field after entering the *Incoming and Outgoing Mail Server* fields. Ensure that your *User Name* is filled in with your email address *after* entering the server information and *before* clicking **Sign in**.

7. Click **Sign in**.
8. Select the appropriate syncing options, and then click **Done**.

   **Note:** You can use the default settings.

**Warning:** You must configure your Mac to synchronize various IMAP folders and prevent duplicate folder creation. This is called **Folder Mapping**. See [Sync IMAP folders for new accounts in Apple Mail](/how-to/sync-imap-folders-for-new-accounts-in-apple-mail/) for instructions.
