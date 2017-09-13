---
permalink: configure-a-renamed-email-address-on-outlook-for-windows/
audit_date:
title: Configure a renamed email address on Outlook for Windows
type: article
created_date: '2017-09-12'
created_by: William Loy
last_modified_date: '2017-09-12'
last_modified_by: William Loy
product: Rackspace Email
product_url: rackspace-email
---

After you have renamed a Rackspace Email address, your devices receive new email only after you configure them to connect to the new email address. This article describes how to configure a renamed email address on Outlook for Windows.

### Prerequisites

- **Applies to:** User
- **Difficulty:** Easy
- **Time needed:** Approximately 20 minutes
- **Tools required:**  Mailbox password and access to the devices you want to connect

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology/).


Outlook 2016, 2013, and 2010 for Windows are nearly identical in the steps needed to configure a renamed email address.

Warning: If the old email address connects via POP, you must migrate the POP data to an IMAP account so that no data is lost in the rename configuration. Follow the instructions in [Migrate from a POP server to Rackspace Email IMAP using Outlook](/how-to/migrating-from-a-pop-server-to-rackspace-email-imap-using-outlook/) before continuing with the instructions for Outlook for Windows.

#### Outlook 2016, 2013 and 2010 for Windows

1. Open the **Start** menu for Windows in the lower-left corner of the desktop screen, and open the **Control Panel**.
2. After the Windows **Control Panel** opens, change the **View By** setting in the upper-right corner to **Small Icons**.
3. Click **Mail(Microsoft Outlook 2016)** in the **Control Panel** menu, which opens the **Mail Setup** menu.

   <img src="{% asset_path rackspace-email/configure-a-renamed-email-address-on-outlook-for-windows/OL16windowsSC1.png %}" />

    Note: **Mail** or **Mail(32-bit)** might be the icon displayed for your Outlook version.

4. From the **Mail Setup** menu, click the **Show Profiles** button, which opens the current profile list and displays your current profile.

   <img src="{% asset_path rackspace-email/configure-a-renamed-email-address-on-outlook-for-windows/OL16windowsSC2.png %}" />

5. Click the **Add** button to create a profile to connect to the renamed email address.

   <img src="{% asset_path rackspace-email/configure-a-renamed-email-address-on-outlook-for-windows/OL16windowsSC3.png %}" />

6. When prompted, name the new profile. We recommend that you use your new email address for the profile name to clearly identify it. Once you name the profile, click **OK**.

7. In the **Add Account** setup box, click **Manual setup or additional server types** at that bottom of the box. Then click **Next**.

    <img src="{% asset_path rackspace-email/configure-a-renamed-email-address-on-outlook-for-windows/OL16windowsSC4.png %}" />

8. Select **POP or IMAP** from the options, and click **Next**.

    Note: In Outlook 2010, select **Internet Email** for this step.

9. In the the **POP and IMAP Account Settings Screen**, enter the following settings to connect to the renamed email address:

    - **Your Name:**  The name email recipients will see in the *From* field
    - **Email Address:** The new mailbox address
    - **Account Type**: IMAP
    - **Incoming mail server**: secure.emailsrvr.com
    - **Outgoing mail server (SMTP):** secure.emailsrvr.com
    - **Logon Information:**

        - **Username:** The new mailbox address
        - **Password:** Your mailbox password

    <img src="{% asset_path rackspace-email/configure-a-renamed-email-address-on-outlook-for-windows/OL16windowsSC5.png %}" />

10. Click the **More Settings** button in the lower-right corner.

    - Select the **Outgoing Server** tab, check the box next to *My outgoing server (SMTP) requires authentication*, and click the bubble next to *Use same settings as my incoming mail server*
    - Select the **Advanced** tab, and change *Use the following type of encrypted connection:* to **SSL** for both **Incoming server(IMAP):** and **Outgoing Server(SMTP):**.
    - Set the **Incoming server(IMAP)** to port: 993
    - Set the **Outgoing server(SMTP)** to port: 465
    - Click **OK**.

    <img src="{% asset_path rackspace-email/configure-a-renamed-email-address-on-outlook-for-windows/OL16windowsSC6.png %}" />

11. On the **POP and IMAP Account Settings Screen**, click the **Next** button in the lower-right corner.
12. On the **Test Account Settings** screen, after both *Log onto incoming mail server(IMAP)* and *Send test e-mail message* show a Status of **Completed**, click the **Close** button.

    <img src="{% asset_path rackspace-email/configure-a-renamed-email-address-on-outlook-for-windows/OL16windowsSC7.png %}" />

13. From the profile list screen, under *When starting Microsoft Outlook, use this profile:*, check the bubble next to *Always use this profile*. Next, open the drop down list, and select the newly created profile. Last, click **Apply**, **OK**, and open Outlook.

    <img src="{% asset_path rackspace-email/configure-a-renamed-email-address-on-outlook-for-windows/OL16windowsSC8.png %}" />

Warning: If you see items missing in the new Outlook account, import the data from the old profile. See [Migrate from a POP server to Rackspace Email IMAP using Outlook](/how-to/migrating-from-a-pop-server-to-rackspace-email-imap-using-outlook/).
