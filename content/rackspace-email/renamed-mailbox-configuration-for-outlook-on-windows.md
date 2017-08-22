---
permalink: renamed-mailbox-configuration-for-outlook-on-windows/
audit_date: '2017-08-22'
title: Renamed mailbox configuration for Outlook on Windows
type: article
created_date: '2017-08-22'
created_by: William Loy
last_modified_date: '2017-08-22'
last_modified_by: William Loy
product: Rackspace Email
product_url: rackspace-email
---

Once you have renamed a Rackspace Email mailbox, your devices will no longer connect to the mailbox. This is because they are trying to connect to the old mailbox name.

### Prerequisites

- **Applies to:** User
- **Difficulty:** Easy
- **Time needed:** Approximately 20 minutes
- **Tools required:**  Mailbox password and access to the devices you want to connect

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology/).


Outlook 2016, 2013, and 2010 for Windows are nearly identical in the steps needed to configure a renamed mailbox.

Warning: If the old mailbox name connects via POP, you will want to migrate the POP data to an IMAP account so no data is lost in the rename configuration. Follow the instructions in [Migrate from a POP server to Rackspace Email IMAP using Outlook](/how-to/migrating-from-a-pop-server-to-rackspace-email-imap-using-outlook/).



#### Outlook 2016, 2013 and 2010 for Windows

1. Open the **Start** menu for Windows in the lower left hand corner of the desktop screen and open the **Control Panel**.
2. Once the Windows **Control Panel** is open, change the **View By** setting in the upper right hand corner to **Small Icons**.
3. Click **Mail(Microsoft Outlook 2016)** from the **Control Panel** menu which will bring up the **Mail Setup** menu.

   <img src="{% asset_path rackspace-email/renamed-mailbox-configuration-for-outlook-on-windows/OL16windowsSC1.png %}" />

4. From the **Mail Setup** menu, click the **Show Profiles** button which will bring up the current profile list were you will see your current profile.

   <img src="{% asset_path rackspace-email/renamed-mailbox-configuration-for-outlook-on-windows/OL16windowsSC2.png %}" />

5. We will click the **Add** button to create a profile to connect to the new mailbox name. A box will appear asking you to name the new profile.

   <img src="{% asset_path rackspace-email/renamed-mailbox-configuration-for-outlook-on-windows/OL16windowsSC3.png %}" />

6. Name the new profile. We recommend you use your new email address for the profile name to clearly identify it. Once you name the profile click **OK** and the **Add Account** setup box will appear.
7. Click **Manual setup or additional server types** at that bottom of the **Add Account** setup box. Then click **Next**.

    <img src="{% asset_path rackspace-email/renamed-mailbox-configuration-for-outlook-on-windows/OL16windowsSC5.png %}" />

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

    <img src="{% asset_path rackspace-email/renamed-mailbox-configuration-for-outlook-on-windows/OL16windowsSC5.png %}" />

10. Click the **More Settings** button in the lower right hand corner.

    - Select the **Outgoing Server** tab and check the box next to *My outgoing server (SMTP) requires authentication* and click the bubble next to *Use same settings as my incoming mail server*
    - Select the **Advanced** tab  and change *Use the following type of encrypted connection:* to **SSL** for both **Incoming server(IMAP):** and **Outgoing Server(SMTP):**.
    - Set the **Incoming server(IMAP)** to port: 993
    - Set the **Outgoing server(SMTP)** to port: 465
    - Click **OK**.

    <img src="{% asset_path rackspace-email/renamed-mailbox-configuration-for-outlook-on-windows/OL16windowsSC6.png %}" />

11. When you are back at the at the **POP and IMAP Account Settings Screen**, click the **Next** button in the lower right hand corner. You will then be taken to the **Test Account Settings** screen.
12. When both *Log onto incoming mail server(IMAP)* and *Send test e-mail message* show a Status of **Completed**, click the **Close** button. You will be taken back to the list of profiles.

    <img src="{% asset_path rackspace-email/renamed-mailbox-configuration-for-outlook-on-windows/OL16windowsSC7.png %}" />

13. Under *When starting Microsoft Outlook, use this profile:* check the bubble next to *Always use this profile*. Next, open the drop down list and select the profile we just created. Lastly click **Apply** and then **OK** and open Outlook.

    <img src="{% asset_path rackspace-email/renamed-mailbox-configuration-for-outlook-on-windows/OL16windowsSC8.png %}" />

Warning: If you see items missing in the new Outlook account, you will need to import the data from the old profile. See [Migrate from a POP server to Rackspace Email IMAP using Outlook](/how-to/migrating-from-a-pop-server-to-rackspace-email-imap-using-outlook/).
