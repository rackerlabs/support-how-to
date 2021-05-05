---
permalink: manually-configure-outlook-2013-for-email-hosted-on-exchange-2007
audit_date:
title: Manually configure Outlook 2013 for email hosted on Exchange 2007
type: article
created_date: '2013-09-18'
created_by: Marco Salazar
last_modified_date: '2016-01-28'
last_modified_by: Rose Coste
---

This article describes how to set up your
Microsoft Exchange 2007 mailbox
to work with your
Microsoft Outlook 2013 email client.

1. Obtain the server settings for your email account by logging in to
   the User Control Panel (<https://admin.emailsrvr.com/usercp/Login>) and
   selecting **Outlook 2013**.

2. From the pop-up box, record the following settings. You will
   use them in a later step.

   - **Server Name**, such as ORD1MBX01
   - **User Name**, such as test@example.com

3. With these settings recorded, navigate to the
   **Start Menu -&gt; Control Panel -&gt; Mail**.

   {{<image src="1.ControlPanelMail_0.png" alt="" title="">}}

4. Select **Show Profiles...** then **Add**. Fill in the Profile's Name
   (this can be whatever you like), and select **OK**.

5. Select **Manually configure server settings or
   additional server types**, then select
   **Next**.

   {{<image src="2.AddAccount07.png" alt="" title="">}}

6. Select **Microsoft Exchange Server or compatible service**, then
   select **Next**.

7. In the **Add Account** page, enter values that you recorded in Step 2 for
   your server name and user name. After you fill in those fields,
   select **More Settings...**.

   {{<image src="3.ServerSettings_0.png" alt="" title="">}}

8. On the **Connection** tab check the **Connect to Microsoft Exchange using
   HTTP** box, select **Exchange Proxy Settings...**, and click **OK.**

   Click **Apply** and **OK** on the resulting screen.

   {{<image src="4.ProxySettings_0.png" alt="" title="">}}

9. On the **Add Account** screen, click **Check Name**.

   In the new window, fill
   in **User Name** with your full email address
   and fill in **Password** with the
   password used to log into your mailbox.

   When the **Server** and
   **Username** are underlined, the profile has been successfully set up.

   Click **Next** and click **Finish**.

   {{<image src="5.Checkname.png" alt="" title="">}}
