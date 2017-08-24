---
permalink: renamed-email-address-configuration-for-iphone-iOS/
audit_date: '2017-08-24'
title: Renamed email address configuration for Iphone iOS
type: article
created_date: '2017-08-24'
created_by: William Loy
last_modified_date: '2017-08-24'
last_modified_by: William Loy
product: Rackspace Email
product_url: rackspace-email
---

Once you have renamed a Rackspace Email address, your devices will not receive new email until you configure them to connect to the new email address.

### Prerequisites

- **Applies to:** User
- **Difficulty:** Easy
- **Time needed:** Approximately 20 minutes
- **Tools required:**  Mailbox password and access to the devices you want to configure

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology/).



#### Iphone iOS renamed email address configuration

These are general settings for Iphone iOS and may vary across iOS versions.

Note: There are additional instructions after initial configuration that must be followed in order for the IMAP folders on your Iphone to sync properly.

1. On the home screen, tap the **Settings** icon.
2. Within **Settings**, scroll down and tap **Mail**.

    <img src="{% asset_path rackspace-email/renamed-email-address-configuration-for-iphone-iOS/iphone-settings.png %}" />

3. Now tap **Accounts**

    <img src="{% asset_path rackspace-email/renamed-email-address-configuration-for-iphone-iOS/accounts.png %}" />

4. Tap **Add Account**

    <img src="{% asset_path rackspace-email/renamed-email-address-configuration-for-iphone-iOS/addaccount.png %}" />

5. Tap **Other**, at the bottom

    <img src="{% asset_path rackspace-email/renamed-email-address-configuration-for-iphone-iOS/mail-type.png %}" />

6. Tap **Add Mail Account**.

    <img src="{% asset_path rackspace-email/renamed-email-address-configuration-for-iphone-iOS/addmailaccount.png %}" />

7. The next screen will ask for basic account information:
    - **Name:** Your first and last name
    - **Email:** renamedaddress@yourdomainexample.com (*Use the new email address here*)
    - **Password:** Your mailbox password
    - **Description:** Anything you'd like!

    <img src="{% asset_path rackspace-email/renamed-email-address-configuration-for-iphone-iOS/iphone-logindetails.png %}" />

8. Tap **Next**.
9. Make sure IMAP is selected and enter the following settings:

    - **Name:** Your first and last name
    - **Email:** renamedaddress@yourdomainexample.com (*Use the new email address here*)
    - **Description:** Should already be prefilled from last section
    - **Password:** Your mailbox password

    - Incoming Server Settings
        - **Host Name:** secure.emailsrvr.com
        - **User Name:** renamedaddress@yourdomainexample.com (*Use the new email address here*)
        - **Password:** Your mailbox password

    - Outgoing Server Settings
        - **Host Name:** secure.emailsrvr.com
        - **User Name:** renamedaddress@yourdomainexample.com (*Use the new email address here*)
        - **Password:** Your mailbox password

    <img src="{% asset_path rackspace-email/renamed-email-address-configuration-for-iphone-iOS/imap-serversettings.png %}" />

Warning: Even though it says optional, they are NOT optional. If you skip these fields, you will NOT be able to send out email.

10. Tap **Next**.
11. Select the desired settings and tap **Save**.
12. Continue to **Iphone IMAP folder sync settings**.

Note: You will only be able to sync **Mail** with Rackspace Email. If you need to sync **Mail**, **Contacts**, and **Calendar** items to your mobile device consider upgrading to [**Rackspace Email Plus**](/how-to/upgrade-to-rackspace-email-plus/).


#### Iphone IMAP folder sync settings

1. Within the **Mail** settings window, select the account that you just added.
2. Under **IMAP**, tap **Account**.
3. Within the account settings, select **Advanced** at the bottom.
4. Under **MAILBOX BEHAVIORS**, select **Sent Mailbox**.

    <img src="{% asset_path rackspace-email/renamed-email-address-configuration-for-iphone-iOS/mapping-folderlist.png %}" />

5. Select the appropriate folder under **ON THE SERVER**.

    <img src="{% asset_path rackspace-email/renamed-email-address-configuration-for-iphone-iOS/mapping-ontheserver.png %}" />

6. Now repeat the previous step for **Deleted Mailbox**. Ignore the Archive Mailbox, it won't be used.
7. Last step! Make sure **Deleted Mailbox** is selected under **MOVE DISCARDED MESSAGES INTO**. This will ensure deleted messages go to the Deleted Mailbox folder.
8. Now you're done! Go back to the home screen and launch the Mail app. Your email should appear within a few minutes, depending on the amount of items to sync.

Note: If you have a large mailbox, it may take several minutes before email appears. Please wait at least 15 minutes before troubleshooting.
