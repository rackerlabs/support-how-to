---
permalink: manually-configure-outlook-2007-for-email-hosted-on-exchange-2010/
audit_date: '2020-11-09'
title: Manually configure Outlook 2007 for email hosted on Exchange 2010
type: article
created_date: '2012-02-10'
created_by: Rackspace Support
last_modified_date: '2020-11-09'
last_modified_by: Rose Morales
product: Microsoft Exchange
product_url: exchange
---

This article describes how to set up your Microsoft Exchange 2010 mailbox to
work with your Microsoft Outlook 2007 email client.

1. Click the Windows **Start** button and select **Control Panel** > **Mail**.

   {{<image src="EAOutlook2010ExchangeTwo.png" alt="" title="">}}

   **Note:** Depending on the Windows version you're running, you might need
   to switch to **Classic** view to find the mail icon or it might say `32-Bit`                                                     .

2. Select **Show Profiles** > **Add**, enter a name for this profile and select
   **OK**.

   {{<image src="EAOutlook2010Exchange4.png" alt="" title="">}}

3. Select **Manually configure server settings or additional server types** and
   click **Next**.

   {{<image src="EAOutlook2010Exchange50.png" alt="" title="">}}

4. Select **Microsoft Exchange** and click **Next**.

   {{<image src="EAOutlook2010Exchange6.png" alt="" title="">}}

5. Type **outlook** in the Microsoft Exchange server address field and select
   **Use Cached Exchange Mode**.

   In the **User Name** field, enter your entire email address and then select
   **More Settings**.

   {{<image src="EAOutlook2010WithExchange2010.png" alt="" title="">}}

6. Select the **Connection** tab and select **Connect to Microsoft Exchange
   using HTTP**.

   Select **Exchange Proxy Settings** and enter the **Proxy Server address**
   from the Outlook 2010 setup guide in the Control Panel.

   {{<image src="EAOutlook2010Exchange8.png" alt="" title="">}}

7. Enter **connect.emailsrvr.com** as the **Proxy Server** address.

   Select both **On fast networks** and **On slow networks**.

   Under **Proxy authentication settings**, select **Basic Authentication**.

   {{<image src="EAOutlook2010WithExchange20102.png" alt="" title="">}}

8. Click **Ok** >**Apply**. Then, click **Ok** again and select **Check Name**
   in the **Connect** window. Type the password and select **OK**.

   **Note:** A pop-up might display asking you to select your mailbox from a
   list. Select your mailbox and click **OK**.

9. Your name highlights and a line appears under the **username**
   field, indicating that your profile configuration completed.

   Select **Next** > **Finish** and then open Outlook.

   {{<image src="image8.png" alt="" title="">}}
