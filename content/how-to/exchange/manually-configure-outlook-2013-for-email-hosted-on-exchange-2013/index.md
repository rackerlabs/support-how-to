---
permalink: manually-configure-outlook-2013-for-email-hosted-on-exchange-2013
audit_date: '2019-03-28'
title: Manually configure Outlook 2013 for email hosted on Exchange 2013
type: article
created_date: '2014-01-10'
created_by: Mawutor Amesawu
last_modified_date: '2019-03-28'
last_modified_by: William Loy
product: Microsoft Exchange
product_url: exchange
---

This article describes how to set up your Microsoft&reg; Exchange&reg; 2013
email account with Microsoft Outlook&reg; 2013 email client.

**Note:** If you do not know which Exchange version you are using, log in to [emailhelp.rackspace.com](https://emailhelp.rackspace.com) with the email address and password you are attempting to set up to see the exact server name settings.

1. Click the Windows&reg; **Start** button, select **Control Panel**, and
   then click **Mail (32-bit)**.

   {{<image src="Step1_0.png" alt="" title="">}}

   **Note:** Depending on the version of Windows you're running, you might
   need to switch to Classic view to find the **Mail** entry or it might
   be labeled **32-Bit***.

2. Click **Show Profiles**, click **Add**, enter a name for this
   profile, and then select **OK**.

3. On the **Auto Account Setup** page of the **Add Account** wizard, select
   **Manual setup or additional server types**, and
   then click **Next**.

   {{<image src="Step2_0.png" alt="" title="">}}

4. On the **Choose Service** page, select **Microsoft Exchange or compatible
   service**, and then click **Next**.

   {{<image src="Step3_0.png" alt="" title="">}}

5. On the **Server Settings** page, perform the following actions:

   a. In the **Server** text box, type **outlook**.
   
   b. Select the  the **Use Cached Exchange Mode** check box.
   
   c. In the **User Name** text box, enter your entire email address.
   
   d. Click **More Settings**.

   **Note:** Outlook 2013 offers the option to limit the amount of data that
   is downloaded to your local machine.  This can be adjusted, using the
   **Mail to keep offline slider**.

   {{<image src="Step4_0.png" alt="" title="">}}

6. In the Microsoft Exchange dialog box, click the **Connection** tab
   and select the **Connect to Microsoft Exchange using HTTP** check box.
   Then click **Exchange Proxy Settings**.

   {{<image src="Step5_0.png" alt="" title="">}}

7. In the **Microsoft Exchange Proxy Settings** dialog box, perform the
   following actions:

   a. In the **Use this URL to connect to my proxy server for**
      **Exchange** text box, enter **mex06.emailsrvr.com**.

   b. Select both the **On fast networks** and **On slow networks**
      check boxes.

   c. Under **Proxy authentication settings**, select **Basic**
      **Authentication**.

   d. Click **OK**.

   {{<image src="Step6_0.png" alt="" title="">}}

8. In the **Microsoft Exchange** dialog box, click **Apply** and then click
   **OK**.

9. On the **Server Settings** page, click **Check Name**, type your
   password, and then click **OK**.

   **Note:** If you receive a pop-up message asking you to select your mailbox
   from a list, select your mailbox and click **OK**.

   Your name will then be highlighted and a line will appear under the
   **User Name** field, indicating that your profile has been configured.

   **Warning:** The server name resolves to a unique string that is different
   with every mailbox. Do not attempt to replicate this information with
   other accounts.

10. Click **Next**. On the next page, click **Finish**.

    {{<image src="Step7_0.png" alt="" title="">}}
    {{<image src="Step8_0.png" alt="" title="">}}

11. Open Outlook to select your new Exchange profile.
