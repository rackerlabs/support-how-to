---
permalink: manually-configure-android-devices-for-email-hosted-on-exchange-2010/
audit_date:
title: Manually configure Android devices for email hosted on Exchange 2010
type: article
created_date: '2013-09-20'
created_by: Marco Salazar
last_modified_date: '2016-01-27'
last_modified_by: Rose Coste
product: Microsoft Exchange
product_url: exchange
---

The following steps are required to configure Microsoft Exchange 2010 on
most Android devices:

**Note:** Before you can begin, your administrator must
[Add an ActiveSync license](/support/how-to/add-an-activesync-or-bes-license)
and assign it to your email address.

1. Tap the **Settings** icon, and then tap **Accounts and Sync**.

   ![](1.Settings.png)
   ![](2.AccountsandSync.png)

2. Tap the **Add** icon, and then tap **Exchange ActiveSync**.

  ![](3.Add.png)
  ![](4.ExchangeActiveSync.png)

3. Enter your email address and password, and then tap **Manual
   setup**.

   ![](5.ManualSetup.png)

4. On the next page, enter the rest of the necessary information and
   then tap **Next**:

   - **Email address**: Enter your email address (for
     example, **test@example.org**).

   - **Server address**: Enter **connect.emailsrvr.com**.

   - **Domain**: Leave this field blank.

   - **Username**: Enter your email address again.

     Some devices might have the settings as domain\\username. On
     those devices, the field should have a backslash (**\\**) before
     your email address (for example, **\\test@example.org**).

   - **Password**: Enter your password.

   - Select **This server requires an encrypted SSL connection**.

   ![](6.ServerSettingsExchange.png)

5. If you are prompted to enable remote security administration, tap
   **Ok** or **Allow**.
   This allows you to remotely perform a factory reset (delete
   all data) on the device from Outlook Web App if the phone is lost or
   stolen and there is sensitive company information on the device.

6. Select the services that you want to synchronize with the Exchange
   server and when to synchronize. Then, tap **Next**.

   ![](7.SyncOptions.png)

7. Enter a descriptive name for your account and then tap **Finish
   setup**.

   ![](8.Finalize.png)

Your Android phone and Microsoft Exchange account are now synchronized.
