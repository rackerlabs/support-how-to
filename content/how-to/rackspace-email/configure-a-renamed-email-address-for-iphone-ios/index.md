---
permalink: configure-a-renamed-email-address-on-iphone-ios
audit_date: '2021-06-15'
title: Configure a renamed email address on iPhone iOS
type: article
created_date: '2017-08-24'
created_by: William Loy
last_modified_date: '2021-06-15'
last_modified_by: Rose Morales
product: Rackspace Email
product_url: rackspace-email
---

After renaming a Rackspace Email address, your devices receive new
email after you configure them to connect to the new email address. This
article describes how to configure a renamed email address on iPhone iOS.

### Prerequisites

- **Applies to:** User
- **Difficulty:** Easy
- **Time needed:** 10 minutes
- **Tools required:**  Mailbox password and access to the devices that you want to configure

For more information about prerequisite terminology, see
[Cloud Office support terminology](/support/how-to/cloud-office-support-terminology/).

### Configure mail settings

The following steps use  general settings for iPhone iOS and might vary across iOS versions.

**Important:** For IMAP folders to sync properly on your iPhone, follow the instructions
in the **Configure IMAP folder sync settings** section after completing the following steps:

1. On the home screen, tap the **Settings** icon.
2. In the **Settings** menu, tap **Mail**, and then tap **Accounts**.
3. Tap **Add Account**
4. In the list of mail account types, tap **Other**.
5. Tap **Add Mail Account**.
6. Enter your account information, and then tap **Next**.

    - **Name:** Your first and last name
    - **Email:** Your renamed Rackspace Email address
    - **Password:** Your mailbox password
    - **Description:** A brief description of the mailbox

7. Select IMAP and verify that the name, email address, and
   mailbox description fields have content.

8. Enter the following settings:

   - **Incoming server settings**:

     - **Host Name:** `secure.emailsrvr.com`
     - **User Name:** Your renamed Rackspace Email address
     - **Password:** Your mailbox password

   - **Outgoing server settings**:

     - **Host Name:** `secure.emailsrvr.com`
     - **User Name:** Your renamed Rackspace Email address
     - **Password:** Your mailbox password

      {{<image src="imap-serversettings.png" title="" alt="">}}

    **Warning:** Before you enter any information, the outgoing server fields
    display *Optional*. Do *not* skip this step. For your outgoing email to
    function, you must enter the outgoing server information.

9. Tap **Next**.
10. Select the appropriate settings and tap **Save**.

**Note:** Rackspace Email can synchronize mail. If you need to synchronize
Contacts and Calendar items to your mobile device, consider upgrading to
[Rackspace Email Plus](/support/how-to/upgrade-to-rackspace-email-plus/).

### Configure IMAP folder sync settings

1. On the **Settings > Mail > Accounts** screen, tap the account that you added
   in the previous section.
2. Under **IMAP**, tap **Account**.
3. In the account settings, tap **Advanced**.
4. Under **MAILBOX BEHAVIORS**, tap **Sent Mailbox**.
5. Under **ON THE SERVER**, tap the **Sent** folder.
6. Repeat steps 4 and 5 for **Deleted Mailbox**.

   You do not have to repeat the steps for the **Archive Mailbox** because you
   don't use it.

7. On **Advanced**, select the **Deleted Mailbox** under
   **MOVE DISCARDED MESSAGES INTO**. This ensures that deleted messages go to
   the **Deleted Mailbox** folder.

   Go back to the home screen and launch the Mail app. Your email should appear
   within minutes, depending on the number of items.

**Note:** If you have a large mailbox, it might take longer before the email
appears. Wait at least 15 minutes before troubleshooting.
