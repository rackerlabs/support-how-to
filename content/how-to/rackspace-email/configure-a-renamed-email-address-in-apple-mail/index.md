---
permalink: configure-a-renamed-email-address-in-apple-mail
audit_date: '2017-09-12'
title: Configure a renamed email address in Apple Mail
type: article
created_date: '2017-08-23'
created_by: William Loy
last_modified_date: '2018-12-06'
last_modified_by: Stephanie Fillmon
product: Rackspace Email
product_url: rackspace-email
---

After you have renamed a Rackspace Email address, your email client will receive
new mail after you configure it to connect to the new email address. This
article describes how to configure a renamed email address in Apple Mail.

### Prerequisites

- **Applies to:** User
- **Difficulty:** Easy
- **Time needed:** 20 minutes
- **Tools required:**  Mailbox password and access to the email client that you
  want to receive mail in

For more information about prerequisite terminology, see
[Cloud Office support terminology](/support/how-to/cloud-office-support-terminology/).

**Warning:** If the old email address connects via POP, you must migrate the POP
data to an IMAP account to avoid data loss.

### Configure mail settings

1. Launch the Mail app.

   If Mail is not in your dock, open search by pressing **Command (⌘) + Space**,
   and then type **Mail** in the search bar. Press enter to launch the Mail
   application.

2. In the upper-left corner of the menu bar, select **Mail > Add Account**.

3. In the pop-up window, select **Other Mail Account**, and then click **Continue**.

4. Enter the following information:

   - **Name:** Your first and last name
   - **Email Address:** Your renamed Rackspace Email address
   - **Password:** Your mailbox password

5. Click **Sign In**.

6. An alert will state the mail client cannot verify your account name or
   password. Enter the following information:

   - **Email Address:** Your renamed Rackspace Email address
   - **User Name:** Your renamed Rackspace Email address
   - **Password:** Your mailbox password
   - **Account Type:** IMAP
   - **Incoming Mail Server:** secure.emailsrvr.com
   - **Outgoing Mail Server:** secure.emailsrvr.com

   **Note:** Apple Mail typically clears the **User Name** field after entering
   new values in the **Incoming Mail Server** and **Outgoing Mail Server**
   fields. Ensure that the **User Name** field has content *after* you enter the
   server information and *before* you click **Sign in**.

7. Click **Sign in**.
8. Select the appropriate synchronization options, and then click **Done**.

   **Note:** You can use the default settings.

**Warning:** Configure your Mac to synchronize more than one IMAP folder,
**Folder Mapping**, and prevent duplicate folder creation. For instructions, see
[Sync IMAP folders for new accounts in Apple Mail](/support/how-to/synchronize-imap-folders-for-new-accounts-in-apple-mail/)
for instructions.
