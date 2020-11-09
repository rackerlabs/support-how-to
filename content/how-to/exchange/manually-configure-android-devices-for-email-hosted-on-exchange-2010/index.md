---
permalink: manually-configure-android-devices-for-email-hosted-on-exchange-2010/
audit_date: '2020-11-09'
title: Manually configure Android devices for email hosted on Exchange 2010
type: article
created_date: '2013-09-20'
created_by: Marco Salazar
last_modified_date: '2020-11-09'
last_modified_by: Rose Morales
product: Microsoft Exchange
product_url: exchange
---

Use the following steps to configure Microsoft Exchange 2010 on most Android devices:

**Note:** Before you can begin, your administrator must
[Add an ActiveSync license](/support/how-to/add-an-activesync-or-bes-license)
and assign it to your email address.

1. Select **Settings** > **Accounts and Sync**.

   {{<image src="1.Settings.png" alt="" title="">}}
   {{<image src="2.AccountsandSync.png" alt="" title="">}}

2. Click the **Add** and **Exchange ActiveSync**.

   {{<image src="3.Add.png" alt="" title="">}}
   {{<image src="4.ExchangeActiveSync.png" alt="" title="">}}

3. Enter your email address and password and then click **Manual setup**.

   {{<image src="5.ManualSetup.png" alt="" title="">}}

4. Enter the rest of the necessary information and
   then click **Next**:

   - **Email address**: Enter your email address (for
     example, **test@example.org**).

   - **Server address**: Enter **connect.emailsrvr.com**.

   - **Domain**: Leave this field blank.

   - **Username**: Enter your email address again.

     **Note**: Some devices might have the settings as domain\\username. On
     those devices, the field should have a backslash (**\\**) before
     your email address (for example, **\\test@example.org**).

   - **Password**: Enter your password.

   - Select **This server requires an encrypted SSL connection**.

   {{<image src="6.ServerSettingsExchange.png" alt="" title="">}}

5. If prompted to enable remote security administration, click
   **Ok** or **Allow**.
   This allows you to remotely perform a factory reset (delete
   all data) on the device from Outlook Web App if the phone is lost or
   stolen and it has sensitive company information.

6. Select the services that you want to synchronize with the Exchange
   server and when to synchronize. Then, click **Next**.

   {{<image src="7.SyncOptions.png" alt="" title="">}}

7. Enter a descriptive name for your account and click **Finish setup**.

   {{<image src="8.Finalize.png" alt="" title="">}}

Your Android phone and Microsoft Exchange account are now synchronized.
