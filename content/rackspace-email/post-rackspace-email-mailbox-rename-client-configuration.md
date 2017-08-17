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
- [Outlook 2016 and 2013 for Windows](#outlook-2016-and-2013-for-windows)
- [Outlook 2010 for Windows](#)
- [Outlook 2016 for Mac](#)
- [Outlook 2011 for Mac](#)
- [Apple Mail](#)

#### Mobile clients

- [Iphone IOS](#)
- [Android](#)
- [Windows](#)


#### Outlook 2016 and 2013 for Windows

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

8. Select **POP or IMAP** from the options presented and click **Next**.

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
