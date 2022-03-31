---
permalink: multifactor-authentication-from-the-cloud-control-panel/
audit_date: '2020-10-27'
title: Multifactor authentication from the Cloud Control Panel
type: article
created_date: '2014-07-17'
created_by: Margaret Eker
last_modified_date: '2022-03-31'
last_modified_by: Rohit Rajput
product: Cloud Servers
product_url: cloud-servers
---

Customers can have increased security on Rackspace Cloud accounts by using the
Rackspace Cloud Identity Service's multifactor authentication (MFA) capabilities.
MFA adds an extra layer of identity verification to the login process by
requiring a user to submit a time-sensitive code that the Identity service sends
to an SMS or Mobile App associated with the user's account:

- An SMS device is a mobile phone, notebook, or other digital device with an
  associated phone number capable of receiving SMS text messages.

- A Mobile App is a client application installed on your phone, notebook, or other digital
  device creates and uses the code.

You can modify MFA by updating your account settings in the
[Rackspace Cloud Control Panel](https://login.rackspace.com). After you pair
a device with your account, authentication becomes a two-step process:

1. Each time you log in, the Rackspace authentication service generates a code
   and sends it to the associated device.

2. After the service sends the code, the system prompts you to type the code and
   submit it to the Identity service to complete the authentication process.

   **Note:** Standard text message rates and data fees apply based on your
   contract with your mobile device provider.

Additionally, Rackspace Cloud account administrators can configure account-wide
settings to specify an MFA policy for all account users. Administrators can
update the account-wide settings to require MFA for all users. When this setting
is enabled, users cannot access their account until they configure MFA. The system logs
current users out as soon as it applies the account-wide requirement. The next time
they log in, users get a notification of the increased security and a prompt to
complete the setup process.

**Important**: By default, we enable MFA account-wide. If you want to disable
this setting, you need to generate a support ticket.

### Considerations

- MyRackspace also implements MFA. For information, see
  [Multifactor authentication from the MyRackspace portal](/support/how-to/multifactor-authentication-from-the-myrackspace-portal).

- When you enable MFA for an account, you can only authenticate through username
  and password credentials.

  If the user supplies the client with a valid username and API key
  credentials, the client receives the authentication token immediately. This
  behavior allows automated processes or agents to run operations by using the
  username and API key credentials.

- Suppose you use an OpenStack or Rackspace CLI tool to authenticate with
  username and password. If you add MFA to your account, you cannot authenticate
  because the CLI tools do not support MFA. To work around this problem, try one
  of the following approaches:

  - Do not enable MFA for accounts that require username and password authentication
    through a CLI tool.
  - If you are using the nova-client, configure the client to authenticate with
    an API key.
  - If you are using a client that supports token authentication, use cURL to
    get the authentication token. Export the token value to the token
    environment variable for the client--for example, OS_TOKEN or
    OS_AUTH_TOKEN. Then, use the CLI to submit API requests to the Rackspace Cloud.

- You can also manage MFA from the
[Identity API 2.0 Guide](https://docs.rackspace.com/docs/cloud-identity/v2/developer-guide/#document-authentication-info/use-mfa-ops).

### Configure your account to authenticate by using an SMS device

To configure your account to use an SMS device for MFA, you need the phone number
associated with your digital device. You must have a device capable of receiving SMS
text messages.

To register and verify an SMS device, use the following steps:

1. Log in to the [Rackspace Cloud Control Panel](https://login.rackspace.com).

2. In the upper-right corner of the Cloud Control Panel, click the **user** menu
   and select **My Profile & Settings**.
   
   <img width="383" alt="chrome_kE2DgyCefB" src="https://user-images.githubusercontent.com/96761530/160662203-c5eabb2d-29f5-4d72-aaa0-9109016ffb21.png">

3. In the **Security Settings** section, select **Enable** for **Multi-factor
   authentication**.
   
   <img width="467" alt="chrome_bz6GjpL2wM" src="https://user-images.githubusercontent.com/96761530/160662363-de2b77ea-7a81-434a-9a01-b05a7f3583c0.png">

4. Select **User SMS** and click **Next**.

   <img width="471" alt="chrome_Bm4bOLRY6P" src="https://user-images.githubusercontent.com/96761530/160827998-aa941232-2a3b-43d8-aa89-a8f0e6d0633a.png">

5. Select the country code for the device, type the device phone number, and
   click **Next**
   
   <img width="447" alt="chrome_nS0ZLndo5L" src="https://user-images.githubusercontent.com/96761530/160828369-bed666bf-2bcc-47cf-9166-a9543288f144.png">

   **Note**: The Identity service sends an SMS text message with a four-digit
   PIN to the specified phone.

6. Type the PIN code sent to your mobile device in the verification code field
   then, click **Verify**.

   <img width="441" alt="chrome_XQlqaYvy0x" src="https://user-images.githubusercontent.com/96761530/160828878-90bccc86-c032-4eea-ab2c-1e7f63705804.png">

   After you submit the verification code, you need to re-authenticate by using
   the MFA process.

### Configure your account to authenticate by using a Mobile App.

To configure your account to use a Mobile App for MFA, you must install one of the
following OTP client applications on your device:

- [Authy](https://www.authy.com/)
- [Duo](https://www.duosecurity.com/)
- [Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=en)
- [SecureAuth OTP](https://www.secureauth.com/Support/Downloads/Client-Applications.aspx)

To register and verify a mobile code device, use the following steps:

1. Log in to the [Rackspace Cloud Control Panel](https://login.rackspace.com).

2. In the upper-right corner of the Cloud Control Panel, click the user menu and
   select **My Profile & Settings**.

   <img width="383" alt="chrome_kE2DgyCefB" src="https://user-images.githubusercontent.com/96761530/160662203-c5eabb2d-29f5-4d72-aaa0-9109016ffb21.png">

3. In the **Security Settings** section, select **Enable** for **Multi-factor
   authentication**.
   
   <img width="467" alt="chrome_bz6GjpL2wM" src="https://user-images.githubusercontent.com/96761530/160662363-de2b77ea-7a81-434a-9a01-b05a7f3583c0.png">

4. Select **Use a Mobile App** and click **Next**.

   <img width="418" alt="1" src="https://user-images.githubusercontent.com/96761530/160828070-208ccff7-68d5-49cb-8938-33682bc7d5ea.png">

    **Note**: Supported applications: Authy, Duo, Google Authenticator.

5. Type a **Device nickname** for the Mobile App. Then, click **Next**.

    <img width="421" alt="2" src="https://user-images.githubusercontent.com/96761530/160828200-8a7deb50-f234-4db3-93b0-d6d2e86575a5.png">

6. The Identity service generates a **QR** code. Use the application on
   your device to scan the barcode and click **Verify**.
   
   After you scan the barcode, the application on your device generates an OTP/code.

7. To verify the new device, enter the code on the **Verify Code** form. Then,
   click **Verify**.
   
   <img width="418" alt="chrome_AKW5hogMrQ" src="https://user-images.githubusercontent.com/96761530/160834586-dfc2435d-3aa6-48a2-b26b-410650d3a3d4.png">
   
   After you submit the verification code, the system automatically logs you
   out.

   **Note:** By default, the new Mobile App is the default method for
   authentication. If you do not want it to be the default or if you do not want
   to be logged out of your account, remove the selection from **Make this my
   default authentication method**.

   You can update the default authentication method on the **Account settings**
   page.

8. In the Cloud Control Panel, enter your username and password. Then, enter the
   verification code from the Mobile App that you paired with your account.

### Change default MFA method

If you configured your account with both SMS and Mobile App , you
can select the default MFA method from the **My Profile & Settings** page.

1. Log in to the [Rackspace Cloud Control Panel](https://login.rackspace.com).

2. In the upper-right corner of the Cloud Control Panel, click the user menu and
   select **My Profile & Settings**.
   
   <img width="383" alt="chrome_kE2DgyCefB" src="https://user-images.githubusercontent.com/96761530/160662203-c5eabb2d-29f5-4d72-aaa0-9109016ffb21.png">

3. In the **Security Settings** section, under **Multi-Factor Authentication**,
   select **Manage**.
   
   <img width="516" alt="1 1" src="https://user-images.githubusercontent.com/96761530/160835573-b1e72c50-d0b9-4069-8342-506428478aa7.png">


4. In the **Security Settings** section, select **Enable** for **Multi-factor
   authentication**.

5. Under **Method**, select **Switch to SMS** (if you set up a mobile app) or
   **Switch to Mobile App** (if you set up SMS).
   
   <img width="359" alt="1 2" src="https://user-images.githubusercontent.com/96761530/160835662-b7dd9df1-cfd1-4988-9f72-0154a373fc9c.png">


### Configure account-wide MFA settings from an Administrator account

**Important**: By default, we enable MFA account-wide. If you want to disable
this setting, you need to generate a support ticket.

Account administrators can update Rackspace Cloud account-wide settings to
require all users to authenticate by using MFA. When the setting is enabled,
users cannot access their accounts until they add and verify a device on their
account.

1. Log in to the [Rackspace Cloud Control Panel](https://login.rackspace.com).

2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.

   <img width="384" alt="3 1" src="https://user-images.githubusercontent.com/96761530/161066869-b0ef57b7-e2e6-4d6f-9a5f-56c712d98d32.png">

3. In the upper-right, click **Account** > **Account Settings**.

   <img width="311" alt="3 2" src="https://user-images.githubusercontent.com/96761530/161067080-ed2759d3-b497-4b4d-a632-2726dbf023c9.png">

4.  Under **Rackspace Account Settings**, click **Change** next to **Multi-Factor
   Authentication**.
   
   <img width="485" alt="3 3" src="https://user-images.githubusercontent.com/96761530/161067197-9a33a96b-0e40-4378-a2fa-c3bd3973ccf0.png">

5. In the **Security Settings** section, select **Enable** for **Multi-factor
   authentication**.

6. On the **Account-wide two-factor authentication** form, click the selection
   to set the policy for account users. Then, click **Save Setting** to apply
   the change.

   If you update the setting to **required**, users who do not have MFA
   configured must add it the next time they log in. The system
   logs out current users who have not set up MFA after
   displaying an error message similar to the following example:

   {{<image alt="Force user to log out when multi-factor authentication requirement is not met" src="mfa-force-logout.png" title="Force user to log out when multi-factor authentication requirement is not met">}}

   When these users log back in, the system guides them through the
   MFA setup.

### Configure MFA during account log in

If you did not configure your account for MFA when required, the system
notifies you about the increase in security requirements and prompts you
to set up authentication.

To access your account, click **Set Up Multi-Factor Authentication.** Then,
follow the steps to register and verify a device and authenticate by using the
code sent to the device.

### Log in to the Rackspace Cloud by using MFA

If you add MFA capabilities to your account, authentication is a two-step process.

#### Prerequisites

- Rackspace Cloud accounts with a valid username and password credentials
- Access to the registered and verified SMS or OTP device paired with your
  Rackspace Cloud account

Perform the following steps to log in to the Rackspace Cloud with MFA:

1. Log in to the [Rackspace Cloud Control Panel](https://login.rackspace.com)
   with your user name and password.

   If you configured your account to use MFA with an
   SMS device, the Identity service sends an SMS text message with a
   seven-digit code to the device registered to your account.

   If you configured your device to use MFA by Mobile App
   , open the client application and get the code from the Mobile App
   associated with your Rackspace Cloud account.

2. When prompted, type the code in the **MFA Code** field on the Control Panel.
   Then, click **Verify** to log in to your account:

   If the code is expired or invalid, refresh the page to return to the
   Rackspace Cloud Control Panel login page. Then, log in again and click the
   **Resend code** option on the **Account Settings** page to get a new code.

### Manage MFA

Rackspace Cloud users can view and manage the MFA configuration from the
**Account Settings** menu in the Cloud Control Panel.

#### View and enable MFA settings

1. In the upper-right corner of the Cloud Control Panel, click the **userName**
    menu and select **My Profile & Settings**.

2. In the **Security Settings** section, select **Enable** for **Multi-factor
   authentication**.

#### Verify your device

You can verify your SMS or Mobile App from the **Account Settings** page.

- If you have an unverified SMS device on your account, use the **Verify**
  option to complete the verification process.

- If you have an unverified Mobile App , use the **Manage**
  option to complete the verification process.

#### Remove MFA

You can turn off MFA and remove all devices associated
with your account.

1. In the upper-right corner of the Cloud Control Panel, click the **userName**
   menu and select **My Profile & Settings**.

2. In the **Security Settings** section, select **Disable** for **Multi-factor
   authentication**.
  

#### Change the mobile phone number

To change the mobile phone number paired with your account, use the **Remove**
option to remove the existing phone number by following the instructions in the
preceding task. Then, update the account settings with the new phone number and
verify the device.

#### Remove an SMS or Mobile App

To remove an SMS device, use the **Remove all devices**.

To remove an Mobile App, use the **Manage** option to delete the device from
your account.

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
<td align="left"><p>When you try to verify a mobile device, you might receive an error caused by an invalid PIN. Confirm that you are entering the correct four-digit PIN that you received via SMS text message. Ensure that you are using the mobile device paired with the Rackspace Cloud account.</p></td>
</tr>
<tr class="even">
<td align="left"><h4 id="locked-account"><strong><strong><strong>Locked account</strong></strong></strong></h4></td>
<td align="left">If you enter an incorrect code more than six times during the MFA process, your account will be locked. Contact Rackspace Support to restore access to a locked account. </td>
</tr>
<tr class="odd">
<td align="left"><h4 id="cannot-link-cloud-account-in-myrackspace-with-multi-factor-enabled"><strong><strong><strong>Cannot link cloud account in MyRackspace with MFA enabled</strong></strong></strong></h4></td>
<td align="left"><p>If you are using MyRackspace, you cannot link to an existing Rackspace Cloud account enabled for MFA.</p></td>
</tr>
<tr class="even">
<td align="left"><h4 id="account-recovery"><strong><strong><strong>Account recovery</strong></strong></strong></h4></td>
<td align="left"><p>If you configured your account for MFA and do not have access to your device or your generated account-recovery codes,  contact Rackspace Support.</p></td>
</tr>
</tbody>
</table>
