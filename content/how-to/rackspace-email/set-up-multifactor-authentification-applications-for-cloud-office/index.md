---
permalink: set-up-multifactor-authentification-applications-for-cloud-office
audit_date: '2020-07-27'
title: Set up multifactor authentication applications for Cloud Office
type: article
created_date: '2020-07-27'
created_by: Nicholas Ramirez
last_modified_date: '2020-07-27'
last_modified_by: William Loy
product: Rackspace Email
product_url: rackspace-email
---

### Prerequisites

- **Applies to:** Administrator and User
- **Difficulty:** Easy
- **Time Needed:** About 15 minutes
- **Tools Needed:** Internet Browser access and a mobile device with an active
  network connection

For more information about prerequisite terminology, see
[Cloud Office support terminology](/how-to/cloud-office-support-terminology).

Multi-factor authentication (MFA) requires users to give a second form of
authentication when accessing their accounts. This second form of authentication
is an extra layer of security and minimizes the chances of account compromise.

MFA for both the Cloud Office Control Panel and Rackspace Email Webmail can use
an authenticator application. When configuring MFA for the first time, users have the
option to receive a Short Message Service (SMS) text message or use an authenticator
app. You can use any Time-based One Time Password (TOTP) app. This article
provides an overview of a few options that you can use and instructions for
configuring your account for each application.

**Warning:** These are third-party apps, which Rackspace doesn't own or support
Use these apps at your discretion.

#### Microsoft Authenticator for iOS and Android

Use the following steps to configure the `Microsoft&reg; Authenticator&reg;`
mobile app for use with your Cloud Office Control Panel admin login:

1. **Install** the `Microsoft Authenticator` app from the iOS App Store&reg; or
   the Android Google Play Store&reg;.

2. Open the `Microsoft Authenticator` app and select **Scan QR Code**. If you
   previously configured the `Microsoft Authenticator` app, you can tap the three
   vertical dots in the app's top-right corner, select **+ Add Account**, and
   choose **Other account** to continue.

    **Note:** When selecting **Scan QR Code**, you must allow the `Microsoft
    Authenticator` app to take pictures or a video to scan the QR code in the
    following steps.

3. After selecting **Scan QR Code**, navigate to the
   [Cloud Office Control Panel](cp.rackspace.com), enter your administrator
   credentials in the fields provided, and select **Log In**.

4. Next, in the **Choose Your Multi-Factor Authentication Method** prompt,
   select the **Use an Authenticator** option and press **Continue**.

5. Scan the QR code that appears with the `Microsoft Authenticator` app. This
   action automatically adds your account to the list of available accounts
   within the authenticator app.

6. Tap the account you just added to the authenticator app. Next, enter the
   six-digit code displayed by the `Microsoft Authenticator` app into the Cloud
   Office Control Panel field, and select **Verify Code**.

7. When the code verifies, a message appears stating that the multi-factor
   authentication setup completed successfully. You can now select **Got It** to
   begin performing administrative tasks within the Cloud Office Control Panel.

**Note:** You can have a direct link to the app on the appropriate app store
sent to your device by going to
[https://www.microsoft.com/en-us/account/authenticator#getapp](https://www.microsoft.com/en-us/account/authenticator#getapp)
and entering your phone number.

### Google Authenticator for iOS and Android

Use the following steps to configure the `Google&reg; Authenticator` mobile app for
use with your Cloud Office Control Panel administrator login:

1. **Install** the `Google Authenticator` app from the iOS App Store or the
   Android Google Play Store.

2. Open the `Google Authenticator` app and select **Get Started**.

3. Next, when prompted to **Setup Your First Account**, select **Scan QR Code**.
   If you previously configured the `Google Authenticator` app, select the **+**
   icon in the bottom-right corner of the app and select **Scan a QR Code** to
   continue.

    **Note:** When selecting **Scan QR Code**, you must allow the `Google
    Authenticator` app to take pictures or a video to scan the QR code in the
    following steps.

4. After selecting **Scan QR Code**, navigate to the
   [Cloud Office Control Panel](cp.rackspace.com), enter your administrator
   credentials in the fields provided, and select **Log In**.

5. Next, within the **Choose Your Multi-Factor Authentication Method** prompt,
   select **Use an Authenticator** and click **Continue**.

6. Scan the QR code that appears with the `Google Authenticator` app. This action
   automatically adds your account to the list of available accounts within the
   authenticator app itself.

7. Tap the account you just added to the authenticator app. Next, enter the
   six-digit code displayed by the `Google Authenticator` app into the Cloud Office
   Control Panel field, and select **Verify Code**.

8. When the code verifies, a message appears stating that the multi-factor
   authenticator setup completed successfully. You can now select **Got It** to
   begin performing administrative tasks within the Cloud Office Control Panel.

### Authy for iOS and Android

Use the following steps to configure the `Authy` mobile app for use with your
Cloud Office Control Panel administrator login:

1. Download `Authy` (Twilio&reg; Authy 2-Factor Authentication) from the iOS App
   Store or the Android Google Play Store.

2. Open `Authy`, enter a valid phone number in the field, and select **Ok**.

3. After entering your phone number, you must verify your account by using one
   of the following options:

    - Phone call
    - SMS(text)
    - Use Existing Device

    Select **SMS** and enter the code you received when prompted by `Authy`.

4. Tap the three vertical lines in the app's top-right corner, select
   **Add Account**, and click **Scan QR Code**.

    **Note:** When selecting **Scan QR Code**, you must allow the Authy app to
    take pictures or a video to scan the QR code in the following steps.

5. After selecting **Scan QR Code**, navigate to the
   [Cloud Office Control Panel](cp.rackspace.com), enter your administrator
   credentials in the fields provided, and select **Log In**.

6. Next, in the **Choose Your Multi-Factor Authentication Method** prompt,
   select the **Use an Authenticator** option and press **Continue**.

7. Scan the QR code that appears with the `Authy` app. This automatically adds
   your account to the list of available accounts in the authenticator app.

8. Tap the account you just added to the authenticator app. Next, enter the
   six-digit code displayed by the `Authy` app in the Cloud Office Control Panel
   field and select **Verify Code**.

9. When the code verifies, a message appears stating that the multi-factor
   authenticator setup completed successfully. You can now select **Got It** to
   begin performing administrative tasks within the Cloud Office Control Panel.

**Note:** You can have a direct link to the app on the appropriate app store
sent to your device by going to [https://authy.com/download/](https://authy.com/download/)
and entering your phone number.

### Authy for Mac and PC

If a mobile authenticator app isn't an option, you can choose to use the desktop
version of `Authy` as an alternative by following the steps listed below:

1. Navigate to [https://authy.com/download/](https://authy.com/download/), select
   the appropriate operating system under the **Desktop - Direct Download** field,
   and select **Download**.

2. After selecting **Download**, you must run the **Authy Desktop Setup**
   executable file by opening the file and selecting **Run**.

3. After installation, you must enter a phone number in the prompt to continue.
   Enter a valid phone number and select **SMS** from the
   **Get Verification Via...** prompt.

4. Enter the code sent to your mobile number within the appropriate field in the
   `Authy` desktop app.

5. Select the **+** symbol within the `Authy` desktop app to begin adding a new
   account.

6. When the prompt **Code given by the website** appears, navigate to the
   [Cloud Office Control Panel](cp.rackspace.com) in your web browser. Next,
   enter your administrator credentials in the fields provided and then select
   **Log In**.

7. In the **Choose Your Multi-Factor Authentication Method** prompt, select the
   **Use an Authenticator** option and press **Continue**.

8. Copy the code provided in **Step 3 - Manually enter the secret key below in the app.**
   in the Cloud Office Control Panel, and paste the code into the field provided
   through the `Authy` desktop app.

9. Select **Add Account** in the `Authy` desktop app, assign a name, and select
   an icon to help identify the account within the app. Now, you can enter the
   six-digit `Authy` code into the appropriate field within the Cloud Office
   Control Panel.

10. When the code verifies, a message appears stating that the multi-factor
    authenticator setup completed successfully. You can now select **Got It** to
    begin performing administrative tasks within the Cloud Office Control Panel.

### Additional suggestions

- If you cannot login to the Cloud Office Control Panel because you no longer
  have access to your previous authentication method, contact your administrator
  for assistance with resetting any existing authentication methods via the
  Cloud Office Control Panel.

- After successfully configuring multi-factor authentication for your Cloud
  Office Control Panel administrator login, you can opt to add a
  **Backup Number** within the Cloud Office Control Panel as an alternate
  verification method. If you cannot use your primary authentication method,
  having a **Backup Number** can prevent you from having to reset your
  multi-factor authentication method.

- You can configure more than one  device to use the same authentication method
  for your Cloud Office Control Panel. Having access to a backup authentication
  method can mitigate potential inconveniences that might arise from temporarily
  losing access to your primary device.
