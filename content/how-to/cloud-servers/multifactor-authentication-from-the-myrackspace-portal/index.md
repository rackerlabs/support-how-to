---
permalink: multifactor-authentication-from-the-myrackspace-portal/
audit_date: '2020-10-27'
title: Multifactor authentication from the MyRackspace Portal
type: article
created_date: '2014-07-17'
created_by: Margaret Eker
last_modified_date: '2022-03-29'
last_modified_by: Asmita Nakwa
product: Cloud Servers
product_url: cloud-servers
---

Customers can increase security on MyRackspace accounts by using the Rackspace dedicated Multi-Factor Authentication (MFA) capabilities. MFA adds an extra layer of identity verification to the login process by requiring a user to submit a time-sensitive code that the Identity service sends to SMS or mobile code device associated with the user's account:

- **SMS**: An SMS device is a mobile phone, notebook, or other digital device with an
  associated phone number capable of receiving SMS text messages. You cannot use this functionality for Smartphones. 

- **Mobile Passcode**: A client application installed on your phone, notebook, or other digital device creates and uses the mobile passcode. You can use this with smartphones apps like:
  * Authy
  * Duo
  * Google Authenticator

You can add MFA by updating your account settings in the [MyRackspace Portal](https://login.rackspace.com). After you pair a device with your account, authentication becomes a two-step process:

1. Each time you log in, the Identity service generates a code and sends it to the paired device.

2. When it sends the code, the system prompts you to type the code and submit it to the Identity service to complete the authentication process.

   **Note:** Standard text message rates and data fees apply based on your contract with your mobile device provider.

Additionally, MyRackspace account administrators can configure account-wide settings to specify an MFA policy for all account users. Administrators can update the account-wide settings to require MFA for all users. When this setting is **Enabled**, users cannot access their account until they configure MFA.

The system logs current users out as soon as it applies the account-wide requirement. The next time they log in, users get a notification of the increased security and a prompt to complete the setup process.

**Important**: By default, we enable MFA account-wide. If you want to disable this setting, you need to generate a support ticket.

### Considerations

- You must log in to the [MyRackspace Portal](https://my.rackspace.com) and use these
  [instructions](/support/how-to/multifactor-authentication-from-the-my-rackspace-portal/)
  to set up your users for the Rackspace Dedicated.

- Administrators cannot set up devices for users. Users must configure their own devices. To change MFA settings, users must log in to the MyRackspace Portal with the user credentials they want to modify.

### Configure your account to authenticate by using SMS

To configure your account to use an SMS device for MFA, you need the phone number associated with your digital device. Ensure that you have enabled the device to receive SMS text messages.

To register and verify SMS, use the following steps:

1. Log in to the [MyRackspace Portal](https://login.rackspace.com/).

2. In the upper-right corner of the MyRackspace Portal Panel, click the **user** menu
   and select **My Profile & Settings**.

<img width="947" alt="Dedicated 1" src="https://user-images.githubusercontent.com/98875667/161245007-03e8f041-943d-4062-8eba-80a4519a3955.png">

3. In the **My Multi-Factor Devices** section, select **SMS**.

<img width="517" alt="Dedicated 2" src="https://user-images.githubusercontent.com/98875667/161272990-bab8dc53-ef27-4a1b-b9d5-4ffe3f7a37a0.png">

4. Select **Add** and Select the country code for the device, type the device phone number and
   click **Next**.

<img width="444" alt="Dedicated 3" src="https://user-images.githubusercontent.com/98875667/161285146-61ba1cad-1bd6-4e80-a493-40c14116a50e.png">

   **Note**: The Identity service sends an SMS text message with a four-digit
   PIN to the specified phone.

6. Type the PIN code sent to your mobile device in the verification code field
   then, click **Verify**.

<img width="556" alt="Cloud Control Panel5" src="https://user-images.githubusercontent.com/98875667/160563434-be1d28c1-570f-422f-9dd0-1a1595c07014.png">

   After you submit the verification code, you need to re-authenticate by using
   the MFA process.

### Configure your account to authenticate by using an Mobile App

To configure your account to use a mobile passcode device for MFA, you must install
one of the following client applications on your device:

- [Authy](https://www.authy.com/)
- [Duo](https://www.duosecurity.com/)
- [Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=en)

To register and verify a mobile passcode device, use the following steps:

1. Log in to the [MyRackspace Portal](https://login.rackspace.com/).

2. In the upper-right corner of the MyRackspace Portal, click the **user** menu and
    select **My Profile & Settings**.

<img width="947" alt="Dedicated 1" src="https://user-images.githubusercontent.com/98875667/161245007-03e8f041-943d-4062-8eba-80a4519a3955.png">

3. In the **My Multi-Factor Devices** section, select **Mobile Passcode**.

<img width="460" alt="Dedicated 5" src="https://user-images.githubusercontent.com/98875667/161295126-bc4b6223-76af-4470-8754-b9e95ed67ea7.png">

4. Type a **Device Nickname** and click **Add Device**.

<img width="531" alt="Dedicated 4" src="https://user-images.githubusercontent.com/98875667/161295655-4de9d93b-db31-4958-a0f1-cad102c17e91.png">

5. The Identity service generates a QR code. Use the OTP client application on your device to scan the barcode and click **Verify Mobile Passcode**.

<img width="431" alt="Dedicated 6" src="https://user-images.githubusercontent.com/98875667/161298889-2f84fd15-f876-44f1-9db8-140db899c84c.png">

After you scan the barcode, verification code gets generated by app .

<img width="366" alt="Dedicated 7" src="https://user-images.githubusercontent.com/98875667/161302025-4566ad4a-4cc6-461b-978c-eb5f0a4752fc.png">

6. To verify the new device, enter the code on the **Verification Code** form. Then, click **Verify SMS Device**.

7. After you submit the verification code, the system automatically logs you out.

   **Note:** By default, the new mobile passcode is the default method for authentication. If you do not want it to be the default or if you do not want to be logged out of your account, remove the selection from **Make this my default authentication method**.

8. In the Panel, enter your username and password. Then, enter the verification code from the OTP device that you paired with your account.

### Change the default MFA method

If you configured your account with both SMS and mobile passcode, you can select the default MFA method from the **My Profile & Settings** page.

1. Log in to the [MyRackspace Portal](https://login.rackspace.com/).

2. In the upper-right corner of the MyRackspace Panel, click the **user** menu and select **My Profile & Settings**.

<img width="947" alt="Dedicated 1" src="https://user-images.githubusercontent.com/98875667/161245007-03e8f041-943d-4062-8eba-80a4519a3955.png">

3. In the **My Multi-factor devices** section, under **Multi-Factor Authentication**,
   select **Manage**.

<img width="553" alt="Dedicated 8" src="https://user-images.githubusercontent.com/98875667/161303017-65cef026-3d98-46d0-90e6-7806ac62b474.png">

When a Mobile App is configured, the status in the **Manage** option is verified by default.

<img width="405" alt="Dedicated 9" src="https://user-images.githubusercontent.com/98875667/161303331-ee292cea-1c28-401f-8316-21aa3c169148.png">


Your default authentication method is currently set as SMS
Click **Edit** option, then you can select either **Mobile Passcode Application** or **SMS**. 

<img width="541" alt="Dedicated 11" src="https://user-images.githubusercontent.com/98875667/161304703-1c164800-189a-42d4-b0ef-55d3003c7aec.png">

### Configure account-wide MFA settings from an Administrator account

Account administrators can update MyRackspace account-wide settings to require all users to authenticate by using MFA. When this setting is enabled, users can't access their accounts until they add and verify a device on their account.

To configure account-wide settings for MFA, use the following steps:

1. Log in to the [MyRackspace Portal](https://login.rackspace.com).

2. Click **Account**, and then select **User Management** from the menu.

<img width="430" alt="Dedicated 12" src="https://user-images.githubusercontent.com/98875667/161504307-f61f1ac4-83a0-4ae4-9167-02479751b224.png">

3. Click **My Multi-Factor Devices**.

<img width="461" alt="Dedicated 13" src="https://user-images.githubusercontent.com/98875667/161505497-afabab69-1601-4abe-b9ac-b320642049dd.png">

4. Click the pencil icon to edit the **Require Multi-Factor** setting.

<img width="376" alt="Dedicated 14" src="https://user-images.githubusercontent.com/98875667/161506190-2db8738b-db69-4433-bca3-ec2a162bc2d8.png">

5. In the account-wide **multi-factor authentication** pop-up dialog box, select
   an option to set the policy for account users. Then, click **Save Setting**
   to apply the change.

<img width="527" alt="Dedicated 15" src="https://user-images.githubusercontent.com/98875667/161506749-49c1f4f9-017a-4651-adf1-552de67a0903.png">

   If you update the setting to be required, users who do not have MFA
   configured must add it the next time they log in.

   When these users log back in, the system guides them through the MFA setup.

### Configure MFA during account login

If you did not configure your account for MFA when required, the system
notifies you about the increase in security requirements and prompts you
to set up authentication.

To access your account, click **Set Up Multi-Factor Authentication.** Then,
follow the above steps to register and verify a device and authenticate by using the
code sent to the device.

### Log in to MyRackspace by using MFA

If you add MFA to your account, authentication is a two-step process.

#### Prerequisites

- MyRackspace account with a valid username and password credentials
- Access to the registered and verified SMS or mobile code device paired with your MyRackspace account

To log in to the MyRackspace Portal with MFA, use the following steps:

1. Log in to the [MyRackspace Portal](https://login.rackspace.com/) with your
   username and password.

   If you configured your account to use MFA with an SMS, the Identity service sends an SMS text message with a 7-digit code to the device registered to your account.

   If you configured your device to use MFA with a mobile code device, open the client application and get the code from the mobile code device associated with your MyRackspace account.

2. When prompted, type the code in the **MFA Code** field on the login page.
   Then, click **Verify** to log in to your account.

### Manage MFA

MyRackspace users can view and manage the MFA configuration from the
**Account** > **User Management** > **My Multi-Factor Devices** menu in the
MyRackspace Portal.

#### To verify your device

You can verify your SMS or mobile passcode device from the **My Multi-Factor Devices** page.

- If you have an unverified SMS device on your account, use the **Verify** option to complete the verification process.

- If you have an unverified mobile code device, use the **Manage** option to complete the verification process.

#### To recover an account

You can generate up to ten bypass codes that you can use to authenticate if the device associated with your account is not available. You save the generated codes to a file on your computer for future use.

**Important:** To avoid losing access to your account, generate and save the
bypass codes as soon as you enable MFA by using the following steps:

1. On the **My Multi-Factor Devices** page, click **Generate Recovery Codes**.

<img width="410" alt="Dedicated 16" src="https://user-images.githubusercontent.com/98875667/161510244-8a086f38-89e8-45b8-b706-e4766fb1022d.png">

2. In the **Quantity** field, select the number of codes to generate or accept
   the default value.

<img width="370" alt="Dedicated 17" src="https://user-images.githubusercontent.com/98875667/161510858-78ff29bb-cefe-413d-a511-4da14944be5f.png">

3. Click **Generate Codes**.

4. Manually copy the recovery codes to a file or click **Save Your Codes** to
   generate a text file with the codes.

#### To remove MFA

You can turn off MFA and remove all devices associated with your account.

On the **My Multi-Factor Devices** page, click **Remove all devices**.

#### To change the mobile phone number

To change the mobile phone number paired with your account, use the **Remove all
devices** option to remove the existing phone number (for instructions, see the
preceding task). Then, update the authentication settings with the new phone
number and verify the device.

#### To remove an SMS or OTP device

To remove an SMS device, use the **Remove all devices** option. To remove an OTP
device, use the **Manage** option to delete the device from your account.

### Troubleshooting

Use the following information to resolve common issues that can occur when
configuring and using MFA.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><strong><strong>Issue</strong></strong></td>
<td align="left"><strong><strong>Resolution</strong></strong></td>
</tr>
<tr class="even">
<td align="left"><h4 id="invalid-phone-number"><strong><strong><strong>Invalid phone number</strong></strong></strong></h4></td>
<td align="left">If you get an error message when registering a phone number, verify that you have entered the correct country code and a valid phone number with no extra characters or spaces.</td>
</tr>
<tr class="odd">
<td align="left"><h4 id="invalid-pin-when-verifying-device"><strong><strong><strong>Invalid PIN when verifying device</strong></strong></strong></h4></td>
<td align="left"><p>When you try to verify a mobile device, you might receive an error caused by an invalid PIN. Confirm that you are entering the correct four-digit PIN that you received via SMS text message. Ensure that you are using the mobile device that is paired with the MyRackspace account.</p></td>
</tr>
<tr class="even">
<td align="left"><h4 id="locked-account"><strong><strong><strong>Locked account</strong></strong></strong></h4></td>
<td align="left">If you enter an incorrect code more than six times during the MFA process, your account will be locked. Contact Rackspace Support to restore access to a locked account. </td>
</tr>
<tr class="odd">
<td align="left"><h4 id="cannot-link-cloud-account-in-myrackspace-with-multi-factor-enabled"><strong><strong><strong>Cannot link cloud account in MyRackspace with MFA enabled</strong></strong></strong></h4></td>
<td align="left"><p>If you are using MyRackspace, you can't link to an existing Rackspace Cloud account enabled for MFA.</p></td>
</tr>
<tr class="even">
<td align="left"><h4 id="account-recovery"><strong><strong><strong>Account recovery</strong></strong></strong></h4></td>
<td align="left"><p>If you configured your account for MFA and do not have access to your device or your generated account recovery codes,  contact Rackspace Support.</p></td>
</tr>
</tbody>
</table>
