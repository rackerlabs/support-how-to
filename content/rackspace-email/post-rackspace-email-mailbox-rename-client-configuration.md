---
permalink: post-rackspace-email-mailbox-rename-client-configuration/
audit_date: '2017-08-17'
title: Connect to a renamed Rackspace Email mailbox
type: article
created_date: '2017-08-17'
created_by: William Loy
last_modified_date: '2017-08-17'
last_modified_by: William Loy
product: Rackspace Email
product_url: rackspace-email
---

Once you have renamed a Rackspace Email mailbox, your devices will no longer connect to the mailbox. This is because they are trying to connect to the old mailbox name.

This article outlines the steps to connect your devices to your newly renamed Rackspace Email mailbox. If you have not yet renamed the mailbox and require instructions, see [Rename a Rackspace Email mailbox](/how-to/rename-a-rackspace-email-mailbox/).

### Prerequisites

- **Applies to:** User or administrator
- **Difficulty:** Easy
- **Time needed:** Approximately 20 minutes
- **Tools required:**  Mailbox password and access to the devices you want to connect

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology/).

### Backing up the mailbox

It is always best practice to export a copy of your mailbox from your [local mail client](/how-to/cloud-office-support-terminology/) when making configuration changes. This is a precaution to avoid losing any data.

### Connect to the newly renamed mailbox

Once you have backed up the mail data locally, you are ready to connect to the renamed mailbox. Click on your mail client below for instructions.

#### Desktop clients
- [Outlook 2016, 2013 and 2010 for Windows](#outlook-2016-and-2013-for-windows)
- [Outlook 2016 for Mac](#outlook-2016-for-mac)
- [Outlook 2011 for Mac](#outlook-2011-for-mac)
- [Apple Mail](#apple-mail)

#### Mobile clients

- [Iphone iOS](#)
- [Android](#)
- [Windows](#)


#### Outlook 2016, 2013 and 2010 for Windows

1. Open the **Start** menu for Windows in the lower left hand corner of the desktop screen and open the **Control Panel**.
2. Once the Windows **Control Panel** is open, change the **View By** setting in the upper right hand corner to **Small Icons**.
3. Click **Mail(Microsoft Outlook 2016)** from the **Control Panel** menu which will bring up the **Mail Setup** menu.

   <!--insert OL16windowsSC1.png-->

4. From the **Mail Setup** menu, click the **Show Profiles** button which will bring up the current profile list were you will see your current profile.

   <!--insert OL16windowsSC2.png-->

5. We will click the **Add** button to create a profile to connect to the new mailbox name. A box will appear asking you to name the new profile.

    <!--insert OL16windowsSC3.png-->

6. Name the new profile. We recommend you use your new email address for the profile name to clearly identify it. Once you name the profile click **OK** and the **Add Account** setup box will appear.

7. Click **Manual setup or additional server types** at that bottom of the **Add Account** setup box. Then click **Next**.

8. Select **POP or IMAP** from the options presented and click **Next**. You will be taken to the **POP and IMAP Account Settings Screen**.

    Note: In Outlook 2010 you will select **Internet Email** on this step.

9. Enter the following settings to connect to the renamed mailbox:

    - **Your Name:**  The name email recipients will see in the *From* field.
    - **Email Address:** renamed@yourdomainexample.com   (*Use the new mailbox address here*)
    - **Account Type**: IMAP
    - **Incoming mail server**: secure.emailsrvr.com
    - **Outgoing mail server (SMTP):** secure.emailsrvr.com
    - **Logon Information:**

        - **Username:** renamed@yourdomainexample.com (*Use the new mailbox address here*)
        - **Password:** Your mailbox password

10. Click the **More Settings** button in the lower right hand corner.

    - Select the **Outgoing Server** tab and check the box next to *My outgoing server (SMTP) requires authentication* and click the bubble next to *Use same settings as my incoming mail server*
    - Select the **Advanced** tab  and change *Use the following type of encrypted connection:* to **SSL** for both **Incoming server(IMAP):** and **Outgoing Server(SMTP):**.
    - Set the **Incoming server(IMAP)** to port: 993
    - Set the **Outgoing server(SMTP)** to port: 465
    - Click **OK**.

11. When you are back at the at the **POP and IMAP Account Settings Screen**, click the **Next** button in the lower right hand corner. You will then be taken to the **Test Account Settings** screen.

12. When both *Log onto incoming mail server(IMAP)* and *Send test e-mail message* show a Status of **Completed**, click the **Close** button. You will be taken back to the list of profiles.

    <!--insert OL16windowsSC3.png-->

13. Under *When starting Microsoft Outlook, use this profile:* check the bubble next to *Always use this profile*. Next, open the drop down list and select the profile we just created. Lastly click **Apply** and then **OK** and open Outlook.

Warning: If you see items missing in the new Outlook account, you will need to import the data from the old profile. See [Migrate from a POP server to Rackspace Email IMAP using Outlook](/how-to/migrating-from-a-pop-server-to-rackspace-email-imap-using-outlook/).


#### Outlook 2016 for Mac

1. Quit **Outlook 2016** by right-clicking the icon and selecting *Quit*.

2. Open **Finder** and select **Applications**.

3. Highlight **Outlook 2016** in the application menu, and right-click the icon.

4. Click **Show Package Contents** then click **Shared Support**.

5. Open **Outlook Profile Manager**. You will be taken to a list of existing profiles. Click the **+** sign and name the new profile.

6. Close **Outlook Profile Manager** and open **Outlook 2016**. You will be prompted to set up your email in the new profile.

7. Enter the renamed email address and click **Continue**.

    Note: Outlook 2016 might default to selecting Exchange as the account type. Select **Not Exchange?** if this happens.

8. Select **IMAP/POP** and enter the following details:

    - **Type:** IMAP
    - **Email address:** renamed@yourdomainexample.com (*Use the new mailbox address here*)
    - **Username:** renamed@yourdomainexample.com (*Use the new mailbox address here*)
    - **Password:** Your mailbox password

    - **Incoming Server:** secure.emailsrvr.com
    - **Port:** 993
    - **Use SSL to connect:** Checked

    - **Outgoing Server:** secure.emailsrvr.com
    - **Port:** 465
    - **Use SSL to connect:** Checked

9. Click **Add Account** and click **Done**.

You have now successfully configured Outlook 2016 to connect to the renamed mailbox.

Warning: If you see items missing in the new Outlook account, you will need to import the data from the old profile. See [Migrate from a POP server to Rackspace Email IMAP](/how-to/migrating-from-a-pop-server-to-rackspace-email-imap-using-outlook-2011-mac/).

#### Outlook 2011 for Mac


1. Quit **Outlook 2011** by right-clicking the icon and selecting *Quit*.

2. Open **Outlook 2011** while holding down the **Option** key. This will open the **Microsoft Database Utility**.

3. We will now create a new identity by click the **+** sign.

4. Once you have named the new identity, be sure to set it as the default identity. Highlight the new identity, then click the **Settings Gear**, and select **Set as Default**.

5. Close the **Microsoft Database Utility** and open **Outlook 2011**.

6. Once **Outlook 2011** is open, select **Outlook** in the upper right-hand corner and select **Preferences** from the drop down menu.

7. In the next prompt, select **Accounts**.

8. Within the Accounts dialog, select **Other Email**.

9. Enter the following requested settings:

    - **Email Address:** renamed@yourdomainexample.com (*Use the new mailbox address here*)
    - **Password:** Enter your mailbox password.
    - **User name:** renamed@yourdomainexample.com (*Use the new mailbox address here*)

    - **Type:** IMAP
    - **Incoming Server:** secure.emailsrvr.com
    - **Override default port:** Checked
    - **Use SSL to connect (recommended):** Checked
    - **Incoming Server Port:** 993

    - **Outgoing Server:** secure.emailsrvr.com
    - **Override default port:** Checked
    - **Use SSL to connect (recommended):** Checked
    - **Outgoing Server Port:** 465

10. Click the **More Options** button, and enter the following settings:

    - **Authentication:** Use Incoming Server information
    - **Unqualified domain:** Leave this field blank
    - Click **OK**
11. Close the accounts window and click **Send/Receive** in Outlook.

You have now successfully configured Outlook 2011 to connect to the renamed mailbox.

Warning: If you see items missing in the new Outlook account, you will need to import the data from the old profile. See [Migrate from a POP server to Rackspace Email IMAP](/how-to/migrating-from-a-pop-server-to-rackspace-email-imap-using-outlook-2011-mac/).

#### Apple Mail


1. Launch **Mail**. If **Mail** is not in your dock, *Command (⌘) + Space Bar*. Then type **Mail** in the Spotlight search. Press enter to launch the **Mail** application.
2. Within **Mail**, click **Mail** on the top left. Then select **Add Account**.
3. In the pop-up window, select **Other Mail Account** and click **Continue**.
4. Enter the following:

    - **Name:** Enter your first and last name
    - **Email Address:** Enter the renamed mailbox email address
    - **Password:** Your mailbox password
    - Click **Sign In**

5. You will see an alert which says Unable to verify account name or password. Along with this alert, you will see more fields that require additional info. Fill in the following details:

        - **Email Address:** Enter the renamed mailbox email address
        - **User Name:** Enter the rename mailbox email address (even though it says automatic, fill it in as shown)
        - **Password:** Your mailbox password
        - **Account Type:** IMAP
        - **Incoming Mail Server:** secure.emailsrvr.com
        - **Outgoing Mail Server:** secure.emailsrvr.com

    Note: Apple Mail will usually clear the *User Name* field after entering the *Incoming and Outgoing Mail Server* fields. Ensure your *User Name* is filled in with your email address *after* entering the server information and *before* clicking *Sign in*

6. Select the desired syncing options. You can leave the defaults on and click **Done**.

#### Iphone iOS

These are general settings for Iphone iOS and may vary across iOS versions.

1. On the home screen, tap the **Settings** icon.
2. Within **Settings**, scroll down and tap **Mail**.
3. Now tap **Accounts**
4. Tap **Add Account**
5. Tap **Other**, at the bottom
6. Tap **Add Mail Account**.
7. The next screen will ask for basic account information:
    - **Name:** Your first and last name
    - **Email:** renamed@yourdomainexample.com (*Use the new mailbox address here*)
    - **Password:** Your mailbox password
    - **Description:** Anything you'd like!

8. Tap **Next**.
9. Make sure IMAP is selected and enter the following settings:

    - **Name:** Your first and last name
    - **Email:** renamed@yourdomainexample.com (*Use the new mailbox address here*)
    - **Description:** Should already be prefilled from last section
    - **Password:** Your mailbox password

    - Incoming Server Settings
        - **Host Name:** secure.emailsrvr.com
        - **User Name:** renamed@yourdomainexample.com (*Use the new mailbox address here*)
        - **Password:** Your mailbox password

    - Outgoing Server Settings
        - **Host Name:** secure.emailsrvr.com
        - **User Name:** renamed@yourdomainexample.com (*Use the new mailbox address here*)
        - **Password:** Your mailbox password

Warning: Even though it says optional, they are NOT optional. If you skip these fields, you will NOT be able to send out email.

10. Tap **Next**.
11. Select the desired settings and tap **Save**.

You have now successfully configured your Iphone to connect to the renamed mailbox. When you have confirmed your mail data is synced to the phone, you can remove the old account using the previous mailbox name from your phone.

#### Android

These are general settings for Android and may vary across Android versions.

1. Launch the Settings app on your device.
2. Once it launches, tap on Accounts.
3. Tap on Add Account.
4. Select Email as the Account Type  and enter the following:
    - **Email Address:** renamed@yourdomainexample.com (*Use the new mailbox address here*)
    - **Password:** You mailbox Password
5. Tap **Sign In**
6. Tap **IMAP account**
7. Enter the following server details:

    - **Email address:** renamed@yourdomainexample.com (*Use the new mailbox address here*)
    - **Username:** renamed@yourdomainexample.com (*Use the new mailbox address here*)
    - **Password:** Your mailbox password

    - **IMAP Server:** secure.emailsrvr.com
    - **Security Type:** SSL
    - **Port:** 993

    - **SMTP Server:** secure.emailsrvr.com
    - **Security Type:** SSL
    - **Port:** 465

    - **Authentication required before sending emails:** On
    - **Username:** renamed@yourdomainexample.com (*Use the new mailbox address here*)
    - **Password:** Your mailbox password

10. Tap Next and enter the following:

    **Account Name:** Used to distinguish the account in your device
    **Your Name:** Name shown on outgoing emails

You have now successfully configured your Android to connect to the renamed mailbox. When you have confirmed your mail data is synced to the phone, you can remove the old account using the previous mailbox name from your phone.


#### Windows

1. Tap the **Windows** button and locate the **Settings** option from the Application Menu.
2. Tap **email+accounts**.
3. Tap **add an account**.
4. Tap **other account (POP and IMAP)**.
5. Enter the following details:

    **Email Address:** renamed@yourdomainexample.com (*Use the new mailbox address here*)
    **Password:** Your mailbox password

6. Tap **sign in**.
7. The phone likely will be unable to determine your settings. Tap **advanced**.
8.  Enter the following details:

    **Incoming email server:** secure.emailsrvr.com
    **Account type**: IMAP4
    **Username**: renamed@yourdomainexample.com (*Use the new mailbox address here*)
    **Password:** Your mailbox password
    **Outgoing (SMTP) email server:** secure.emailsrvr.com
    **Outgoing server requires authentication:** Checked
    **Use the same user name and password for sending email:** Checked

9. Tap **sign in**.

You have now successfully configured your Windows phone to connect to the renamed mailbox. When you have confirmed your mail data is synced to the phone, you can remove the old account using the previous mailbox name from your phone.
