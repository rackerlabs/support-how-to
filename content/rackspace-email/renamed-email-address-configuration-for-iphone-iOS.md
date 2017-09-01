---
permalink: renamed-email-address-configuration-for-iphone-iOS/
audit_date: '2017-08-24'
title: Renamed email address configuration for iPhone iOS
type: article
created_date: '2017-08-24'
created_by: William Loy
last_modified_date: '2017-08-24'
last_modified_by: William Loy
product: Rackspace Email
product_url: rackspace-email
---

After you have renamed a Rackspace Email address, your devices will not receive new email until you configure them to connect to the new email address. This article describes how to configure a renamed email address on iPhone iOS.

### Prerequisites

- **Applies to:** User
- **Difficulty:** Easy
- **Time needed:** Approximately 10 minutes
- **Tools required:**  Mailbox password and access to the devices you want to configure

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology/).

### Configure mail settings

The following steps use  general settings for iPhone iOS and may vary across iOS versions.

**Important:** For IMAP folders to sync properly on your iPhone, follow the instructions in the **Configure IMAP folder sync settings** section.

1. On the home screen, tap the **Settings** icon.
2. In the **Settings** menu, tap **Mail**, and then tap **Accounts**.

    <img src="{% asset_path rackspace-email/renamed-email-address-configuration-for-iphone-iOS/accounts.png %}" />

3. Tap **Add Account**

    <img src="{% asset_path rackspace-email/renamed-email-address-configuration-for-iphone-iOS/addaccount.png %}" />

4. In the list of mail types, tap **Other**.

    <img src="{% asset_path rackspace-email/renamed-email-address-configuration-for-iphone-iOS/mail-type.png %}" />

5. Tap **Add Mail Account**.

    <img src="{% asset_path rackspace-email/renamed-email-address-configuration-for-iphone-iOS/addmailaccount.png %}" />

6. Enter your account information, and then tap **Next**.

    - **Name:** Your first and last name
    - **Email:** Your renamed Rackspace Email address
    - **Password:** Your mailbox password
    - **Description:** A brief description of the mailbox

    <img src="{% asset_path rackspace-email/renamed-email-address-configuration-for-iphone-iOS/iphone-logindetails.png %}" />

7. Verify that IMAP is selected and enter the following settings:

    - **Name:** Your first and last name
    - **Email:** Your renamed Rackspace Email address
    - **Description:** A brief description of the mailbox
    - **Password:** Your mailbox password

    - Incoming Server Settings
    
        - **Host Name:** secure.emailsrvr.com
        - **User Name:** Your renamed Rackspace Email address
        - **Password:** Your mailbox password

    - Outgoing Server Settings
    
        - **Host Name:** secure.emailsrvr.com
        - **User Name:** Your renamed Rackspace Email address
        - **Password:** Your mailbox password

    <img src="{% asset_path rackspace-email/renamed-email-address-configuration-for-iphone-iOS/imap-serversettings.png %}" />

    **Warning:** Before you enter any information, the outgoing server settings fields display *Optional*. Do **not** skip this step. For your outgoing email to function, you must enter the outgoing server information.

8. Tap **Next**.
9. Select the desired settings and tap **Save**.

**Note:** You can sync only **Mail** with Rackspace Email. If you need to sync **Mail**, **Contacts**, and **Calendar** items to your mobile device consider upgrading to [Rackspace Email Plus](/how-to/upgrade-to-rackspace-email-plus/).

### Configure IMAP folder sync settings

1. In the **Mail** settings, select the account that you added in the previous section.
2. Under **IMAP**, tap **Account**.
3. In the account settings, select **Advanced**.
4. Under **MAILBOX BEHAVIORS**, select **Sent Mailbox**.

    <img src="{% asset_path rackspace-email/renamed-email-address-configuration-for-iphone-iOS/mapping-folderlist.png %}" />

5. Select the appropriate folder under **ON THE SERVER**.

    <img src="{% asset_path rackspace-email/renamed-email-address-configuration-for-iphone-iOS/mapping-ontheserver.png %}" />

6. Repeat the previous step for **Deleted Mailbox**. Ignore the Archive Mailbox, it won't be used.
7. Verify that **Deleted Mailbox** is selected under **MOVE DISCARDED MESSAGES INTO**. This ensures that deleted messages go to the Deleted Mailbox folder.

Go back to the home screen and launch the Mail app. Your email should appear within a few minutes, depending on the amount of items to sync.

**Note:** If you have a large mailbox, it may take several minutes before email appears. Please wait at least 15 minutes before troubleshooting.
