---
permalink: manually-configure-ios-devices-for-email-hosted-on-exchange-2007
audit_date:
title: Manually configure iOS devices for email hosted on Exchange 2007
type: article
created_date: '2011-10-20'
created_by: Rae D. Cabello
last_modified_date: '2016-05-17'
last_modified_by: Stephanie Fillmon
---

This article describes how to set up your Microsoft Exchange email
account on your iPhone using the ActiveSync technology.

**Note:** Your device must be a 3G or 3Gs and it must be running
iOS 4.0 or higher.*

**Note:** Before you can begin, your administrator must
[Add an ActiveSync license](/support/how-to/add-an-activesync-or-bes-license)
and assign it to your email address.

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com/usercp).

2. Scroll down to the **Client Setup** section
   and click on the **ActiveSync** link. This opens the **Setting Up
   ActiveSync** window which will contain the information needed to set up
   your device.

3. With your **Setting Up ActiveSync** window open, tap the
   **Settings** icon on the iPhone.

   {{<image src="E&ASettingUpMicrosoftExchangeEmailIphone1.png" alt="" title="">}}

4. Tap **Mail, Contacts,
   Calendars, Add Account** then **Microsoft Exchange**.

   {{<image src="E&ASettingUpMicrosoftExchangeEmailIphone2.png" alt="" title="">}}   {{<image src="E&ASettingUpMicrosoftExchangeEmailIphone3.png" alt="" title="">}}   {{<image src="E&ASettingUpMicrosoftExchangeEmailIphone4.png" alt="" title="">}}

5. The Exchange setup screen will open; you'll then enter the following
   information:

   - Email - Enter your entire email address (for example, myname@example.com),
     using all lowercase letters.

   - Domain - Enter the **Domain address** exactly as it is from the
     **Setting Up ActiveSync** window.

   - Username - Enter the **User name** exactly as it is from the
     **Setting Up ActiveSync** window. The **User name** is different
     from the email address.

   - Password - Enter the password for your email account.

   - Description - Enter a descriptive name for your account (for example, My
     Work Account). This description will be visible only to you.

   {{<image src="E&ASettingUpMicrosoftExchangeEmailIphone5.png" alt="" title="">}}

6. Tap the **Next** button and the device will attempt to verify the
   account.

   You may receive an "Unable to Verify Certificate" message.
   If so, tap the **Accept** button.

7. The device will then continue verifying the account.

   After verification is complete,
   tap the **Server** field and enter the **Server address** exactly as it
   is from the **Setting Up ActiveSync** window.

   {{<image src="E&ASettingUpMicrosoftExchangeEmailIphone6.png" alt="" title="">}}

8. Tap the **Next** button and the device will then try to create a
   secure (SSL) connection to your Exchange server.

   If it cannot do this,
   it will try a non-SSL connection.
   If it asks for a confirmation, tap **Yes** to continue.

9. Tap the **ON/OFF** buttons to select which information to synchronize
   with the Exchange server and then tap the **Done** button when finished.

   {{<image src="E&ASettingUpMicrosoftExchangeEmailIphone7.png" alt="" title="">}}

**Note:** Your iPhone may take a moment to sync all your information
depending on how much you have on the Exchange server. To learn more
about the mail settings on your device, at the home screen tap
**Settings**, then **Mail, Contacts, & Calendars**. Then select your account.
You'll be able to customize how much data you would like to sync from
the server.
