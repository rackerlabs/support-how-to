---
permalink: configure-a-renamed-email-address-on-outlook-for-windows
audit_date: '2021-07-08'
title: Configure a renamed email address on Outlook for Windows
type: article
created_date: '2017-09-12'
created_by: William Loy
last_modified_date: '2021-07-08'
last_modified_by: Rose Morales
product: Rackspace Email
product_url: rackspace-email
---

After you have renamed a Rackspace Email address, your devices receive new email
only after you configure them to connect to the new email address. This article
describes how to configure a renamed email address on Outlook&reg; for Windows&reg;.

### Prerequisites

- **Applies to:** User
- **Difficulty:** Easy
- **Time needed:** 20 minutes
- **Tools required:**  Mailbox password and access to the devices you want to connect

For more information about prerequisite terminology, see
[Cloud Office support terminology](/support/how-to/cloud-office-support-terminology/).

**Warning:** If the old email address connects through POP, you must migrate the POP
data to an IMAP account to not lose data in the rename configuration.
Follow the instructions in
[Migrate from a POP server to Rackspace Email IMAP using Outlook](/support/how-to/migrating-from-a-pop-server-to-rackspace-email-imap-using-outlook/)
before continuing with the instructions in this article.

#### Configure mail settings

The steps for Outlook 2013 and 2016 for Windows are nearly identical.

1. From the **Start** menu, open the **Control Panel**.
2. In the **Control Panel** window, change the **View by** setting in the
   upper-right corner to **Small icons**.
3. Click **Mail (Microsoft Outlook 2016)** in the **Control Panel** menu.

    **Note:** **Mail** or **Mail (32-bit)** might be the icon displayed for your
    Outlook version.

4. In the **Mail Setup** dialog box, click **Show Profiles**.

5. Click **Add** to create a profile to connect to the renamed email address.

6. When prompted, enter a name for the new profile and click **OK**. We recommend
   that you use your new email address for the profile name to identify it.

7. In the **Add Account** wizard, select **Manual setup or additional server
   types** and click **Next**.

8. Select **POP or IMAP** and click **Next**.

9. On the **POP and IMAP Account Settings** page, enter the following settings
   to connect to the renamed email address:

    - **Your Name:**  The name that email recipients will see in the **From** field
    - **Email Address:** The new mailbox address
    - **Account Type**: IMAP
    - **Incoming mail server**: `secure.emailsrvr.com`
    - **Outgoing mail server (SMTP):** `secure.emailsrvr.com`
    - **Username:** The new mailbox address
    - **Password:** Your mailbox password

10. Click **More Settings** in the lower-right corner, and then
    perform the following steps:

    1. On the **Outgoing Server** tab, select the **My outgoing server (SMTP)
       requires authentication** check box, and then select **Use same settings
       as my incoming mail server**.
    2. On the **Advanced** tab, change the value for **Use the following type of
       encrypted connection:** to **SSL** for both **Incoming server (IMAP)**
       and **Outgoing Server (SMTP)**.
    3. Set the **Incoming server(IMAP)** value to port: `993`.
    4. Set the **Outgoing server(SMTP)** value to port: `465`.
    5. Click **OK**.

11. On the **POP and IMAP Account Settings** page, click **Next**.
12. On the **Test Account Settings** page, after both **Log onto incoming mail
    server(IMAP)** and **Send test e-mail message** show a status of
    **Completed**, click **Close**.

13. On the **profile list** page, perform the following steps:

    1. Under **When starting Microsoft Outlook, use this profile:**, select
       **Always use this profile**.
    2. From the drop-down list, select the newly created profile.
    3. Click **Apply**, and then **OK**,

14. Open Outlook.

**Note:** If you see items missing in the new Outlook account, import the data
from the old profile. See
[Migrate from a POP server to Rackspace Email IMAP using Outlook](/support/how-to/migrating-from-a-pop-server-to-rackspace-email-imap-using-outlook/).
