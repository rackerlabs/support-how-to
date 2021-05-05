---
permalink: manually-configure-outlook-2011-for-email-hosted-on-exchange-2010
audit_date: '2020-12-28'
title: Manually configure Outlook 2011 for email hosted on Exchange 2010
type: article
created_date: '2012-02-08'
created_by: Rackspace Support
last_modified_date: '2020-12-28'
last_modified_by: Rose Morales
product: Microsoft Exchange
product_url: exchange
---

This article describes how to set up your Microsoft&reg; Exchange 2010 mailbox to
work with your Microsoft Outlook 2011 email client.

1. Open Microsoft Outlook.
2. In the top navigation bar, click **Outlook > Preferences**. Then, in the
   Personal Settings section, select **Accounts**.

   {{<image src="E&AOutlook2011IMAP2.png" alt="" title="">}}

3. On the **Add an Account** page, select **Exchange Account**.

   {{<image src="E&AOutlook2011Exchange.png" alt="" title="">}}

4. Enter the following information:

   - **Email address** - Enter your entire email address
     (for example, myname@example.com).
   - **Method** - Select **User Name and Password**.
   - **Username** - Enter your entire email address
     (for example, myname@example.com).
   - **Password** - Enter the password associated with your email address.
   - **Server** - Enter **connect.emailsrvr.com**.

    {{<image src="Outlook2011WithExchange2010.png" alt="" title="">}}

5. Click **Add Account** and confirm that the amber-colored dot next to the
   account name turns to a solid green color.
   
   **Note**: It might take a minute or two for the dot to change from amber to green. If
   it doesn't change, check the accounts settings and password and make sure
   that you are using the correct EWS server address.

   {{<image src="E&AOutlook2011Exchange4.png" alt="" title="">}}
   {{<image src="E&AOutlook2011Exchange3.png" alt="" title="">}}


Close all windows and you're done!

**Note:** If you already have email on the server, your email will slowly begin
to populate your inbox. This can take some time depending on how much data you
have.
