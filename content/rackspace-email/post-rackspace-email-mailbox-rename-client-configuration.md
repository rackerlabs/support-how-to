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

This article outlines the steps to connect your devices to your newly rename Rackspace Email mailbox. If you have not yet renamed the mailbox and require instructions, see [Rename link].

### Prerequisites

- **Applies to:** User or administrator
- **Difficulty:** Easy
- **Time needed:** Approximately 20 minutes
- **Tools required:**  Mailbox password and access to the devices you want to connect

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology/).

### Backing up the mailbox

It is always best practice to export a copy of your mailbox from your [local mail client](/how-to/cloud-office-support-terminology/) when making configuration changes. This is a precaution to avoid losing any data.

### Connect to the newly renamed mailbox

Once you have backed up the mail data locally, you are ready to connect to the renamed mailbox. See the instructions for your mail client below.

#### Desktop clients
- [Outlook 2016, 2013 and 2010 for Windows](#outlook-2016-and-2013-for-windows)
- [Outlook 2016 for Mac](#)
- [Outlook 2011 for Mac](#)
- [Apple Mail](#)

#### Mobile clients

- [Iphone IOS](#)
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
    - **Email Address:** renamed@newmailboxname.com   (*Use the new mailbox address here*)
    - **Account Type**: IMAP
    - **Incoming mail server**: secure.emailsrvr.com
    - **Outgoing mail server (SMTP):** secure.emailsrvr.com
    - **Logon Information:**

        - **Username:** renamed@newmailboxname.com (*Use the new mailbox address here*)
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


#### Outlook 2016 for Mac

1. Open **Finder** and select **Applications**.

2. Highlight **Outlook 2016** in the application menu, and right-click the icon.

3. Click **Show Package Contents** then click **Shared Support**.

4. Open **Outlook Profile Manager**. You will be taken to a list of existing profiles. Click the **+** sign and name the new profile.

5. Close **Outlook Profile Manager** and open **Outlook 2016**. Once **Outlook 2016** is open, set up your email account using the new mailbox address.


#### Outlook 2011 for Mac

1. Open **Outlook 2011** while holding down the **Option** key. This will open the **Microsoft Database Utility**.

2. We will now create a new identity by click the **+** sign.

3. Once you have named the new identity, be sure to set it as the default identity. Click the **Settings Gear**, then select **Set as Default**.

4. Close the **Microsoft Database Utility** and open **Outlook 2011**.


#### Apple Mail


1. Launch Mail. If Mail is not in your dock, Command (⌘) + Space Bar. Then type Mail in the Spotlight search. Press enter to launch the Mail application.
