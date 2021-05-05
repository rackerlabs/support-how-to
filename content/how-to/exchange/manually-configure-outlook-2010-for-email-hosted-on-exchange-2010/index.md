---
permalink: manually-configure-outlook-2010-for-email-hosted-on-exchange-2010
audit_date: '2019-06-19'
title: Manually configure Outlook 2010 for email hosted on Exchange 2010
type: article
created_date: '2012-02-08'
created_by: Rae D. Cabello
last_modified_date: '2019-06-19'
last_modified_by: William Loy
product: Microsoft Exchange
product_url: exchange
---

This article provides instructions about configuring Outlook&reg; 2010 email client to work with your Microsoft&reg; Exchange&reg; 2010 mailbox.

**Note:** We recommend that customers on Exchange 2010 update to a later [Exchange version](/support/how-to/upgrading-your-exchange-version) or to our [Office 365&reg;](/support/how-to/upgrade-rackspace-email-and-microsoft-exchange-to-office-365-faq) offering.

1. Click the Windows&reg; **Start** button, select **Control Panel**, and then select the
   **Mail** icon. Change the **View by** setting to **Large Icons** if you do not see the **Mail** icon on this screen.

   {{<image src="EAOutlook2010ExchangeTwo.png" alt="" title="">}}

   **Note:** Depending on which version of Windows you are running, you might need
   to switch to **Classic** view to find the **Mail** entry. Otherwise, it is
   labeled as **Mail(32-Bit)**.

2. Select the **Show Profiles** button, then select the **Add** button.
   Next, enter a name for the new profile, and select the **OK** button.

   {{<image src="EAOutlook2010Exchange4.png" alt="" title="">}}

3. Select the **Manually configure server settings or additional server**
   **types** check box and then select the **Next** button.

   {{<image src="EAOutlook2010Exchange50.png" alt="" title="">}}

4. Select the **Microsoft Exchange** option and click
   the **Next** button.

   {{<image src="EAOutlook2010Exchange6.png" alt="" title="">}}

5. Enter the exact case-sensitive word, `outlook`, in the Microsoft Exchange server address field
   and then check the **Use Cached Exchange Mode** check box.

   In the **User Name** box, enter your entire email address.
   Then select **More Settings**.

   {{<image src="EAOutlook2010WithExchange2010.png" alt="" title="">}}

6. Select the **Connection** tab, and then select the **Connect to**
  **Microsoft Exchange using HTTP** check box. Next, click
   the **Exchange Proxy Settings** button.

   {{<image src="EAOutlook2010Exchange8.png" alt="" title="">}}

7. Enter `connect.emailsrvr.com` as the proxy server address.

   Check both the **On fast networks** and **On slow networks** check boxes.

   Under **Proxy authentication settings**, select **Basic
   Authentication**.  

   Select **OK** to close the proxy settings window.

   Then select **Apply** and **OK** to close the **More Settings** window.

   {{<image src="EAOutlook2010WithExchange20102.png" alt="" title="">}}

8. Click the **Check Name** box in the **Connect** window, enter the password that your  administrator assigned to your
   email account, and select the **OK** button.

   **Note:** If you receive a pop up asking you to select your mailbox from a
   list, select your mailbox and click the **OK** button.

9. Your name is then highlighted and a line appears under the
   **username** field, which indicates that your profile has been configured.

   Select **Next**, and then select **finish**.

   {{<image src="EAOutlook2010WithExchange20103.png" alt="" title="">}}

10. You are then taken back to the **Show Profiles** page. Select the new profile that you named in step 2 from the drop-down menu labeled **Always use this profile**.

11. Click **Apply** and the click **OK**. 

12. Finally, open Outlook to access your newly configured Exchange account.
