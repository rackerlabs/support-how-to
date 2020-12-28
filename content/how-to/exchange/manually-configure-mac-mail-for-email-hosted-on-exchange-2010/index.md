---
permalink: manually-configure-mac-mail-for-email-hosted-on-exchange-2010/
audit_date: '2020-12-28'
title: Manually configure Mac Mail for email hosted on Exchange 2010
type: article
created_date: '2012-02-27'
created_by: Rackspace Support
last_modified_date: '2020-12-28'
last_modified_by: Rose Morales
product: Microsoft Exchange
product_url: exchange
---

This article describes how to set up your Microsoft Exchange&reg; 2010 email
account with Mac Mail&reg;.

**Note**: Exchange 2010 runs only on Mac OS X version 10.6 or later. If you're
unsure about which OS X version you're running, click the **Apple** icon located
in the top-left corner and select **About This Mac**.

1. Open Mac Mail.
2. Select **Mail > Preferences** > **Accounts**.
3. Click the plus (+) symbol > **Exchange** > **Continue.**

    {{<image src="MM101.png" alt="" title="">}}

4. Fill the information for **Name**, **Email Address** and **Password**, and press **Continue**.

    {{<image src="MM102.png" alt="" title="">}}

    - If your **Autodiscover CNAME** record is set up, Mac Mail
      automatically pulls the correct server settings for you. Skip to Step 6.
    - If the **Autodiscover CNAME** record is not set up, you can set up the
      account manually. Continue to Step 5.

5. Enter the following information and click **Continue**:
    - **Description** - Enter a descriptive name for your mail account (for
        example, Work Mail).
    - **User Name** - Enter your entire email address (for example,
        **user@example.com**).
    - **Password** - Enter the password associated with the email account you
        are setting up.
    - **Server Address** - Enter **connect.emailsrvr.com**.

    {{<image src="MM104_0.png" alt="" title="">}}

6. Confirm the settings and click **Continue**.

    {{<image src="MM103.png" alt="" title="">}}

7. Choose the options that you want to enable and click **Done**.

    {{<image src="MM105_0.png" alt="" title="">}}

Your Microsoft Exchange 2010 email account is now set up with Mac Mail.
