---
permalink: multi-factor-authentication-from-the-cloud-control-panel
audit_date: '2020-10-27'
title: Multi-factor authentication from the Cloud Control Panel
type: article
created_date: '2014-07-17'
created_by: Margaret Eker
last_modified_date: '2020-10-27'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

Customers have increased security on Rackspace Cloud accounts by using the
Rackspace Cloud Identity Service's multi-factor authentication capabilities.
Multi-factor authentication adds an extra layer of identity verification to the
login process by requiring a user to submit a time-sensitive code that the
Identity service sends to an SMS or OTP (one-time password) device associated
with the user's account:

- an SMS device is a mobile phone, notebook, or other digital device with an
    associated phone number capable of receiving SMS text messages.

- an OTP code is created in an OTP client application installed on your phone,
    notebook, or other digital device.

You can modify multi-factor authentication by updating your account settings in
the [Rackspace Cloud Control Panel](https://login.rackspace.com). After you pair
a device with your account, authentication becomes a two-step process:

1. Each time you log in, the Rackspace authentication service generates a code
    and sends it to the associated device.

2. After the service sends the code, the system prompts you to type the code and
    submit it to the Identity service to complete the authentication process.

    **Note:** Standard text message rates and data fees apply based on your
    contract with your mobile device provider.

Additionally, Rackspace Cloud account administrators can configure account-wide
settings to specify a multi-factor authentication policy for all account users.
Administrators can update the account-wide settings to require multi-factor
authentication for all users. When this setting is enabled, users cannot access
their account until they configure multi-factor authentication. The system logs
current users out as soon as it applies the account-wide requirement. The next time
they log in, users get a notification of the increased security and a prompt to
complete the setup process.

**Important**: By default, we enable MFA account-wide. If you want to disable
this setting, you need to generate a support ticket.

**Notes**

- MyRackspace also implements multi-factor authentication. For information,
    see [Multi-factor authentication from the MyRackspace portal](/support/how-to/multi-factor-authentication-from-the-myrackspace-portal).

- When you enable multi-factor authentication for an account, you can only
    authenticate through username and password credentials.

    If the user supplies the client with a valid username and API key
    credentials, the client receives the authentication token immediately. This
    behavior allows automated processes or agents to run operations by using the
    username and API key credentials.

- Suppose you use an OpenStack or Rackspace CLI tool to authenticate with
    username and password. If you add multi-factor authentication to your
    account, you cannot authenticate because the CLI tools do not support
    multi-factor authentication. To work around this problem, try one of the
    following approaches:

  - Do not enable multi-factor authentication for accounts that require username
        and password authentication through a CLI tool.
  - If you are using the nova-client, configure the client to authenticate with
        an API key.
  - If you are using a client that supports token authentication, use cURL to
        get the authentication token. Export the token value to the token
        environment variable for the client--for example, OS_TOKEN or
        OS_AUTH_TOKEN. Then, use the CLI to submit API requests to the Rackspace
        Cloud.

- You can also manage multi-factor authentication from the
[Identity API 2.0 Guide.](https://docs.rackspace.com/docs/cloud-identity/v2/developer-guide/#document-authentication-info/use-mfa-ops)

### Configure your account to authenticate by using an SMS device

To configure your account to use an SMS device for multi-factor authentication,
you need the phone number associated with your digital device. You must have a
device capable of receiving SMS text messages.

To register and verify an SMS device, use the following steps:

1. Log in to the [Rackspace Cloud Control Panel](https://login.rackspace.com).

2. In the upper-right corner of the Cloud Control Panel, click the **user** menu
    and select **My Profile & Settings**.

3. In the **Security Settings** section, select **Enable** for **Multi-factor
    authentication**.

4. Select **User SMS** and click **Next**.

5. Select the country code for the device, type the device phone number, and
   click **Next**

    **Note**: The Identity service sends an SMS text message with a four-digit
    PIN to the specified phone.

6. Type the PIN code sent to your mobile device in the verification code field
   then, click **Verify**.

    After you submit the verification code, you need to re-authenticate by using
    the multi-factor authentication process.

### Configure your account to authenticate by using an OTP device

A one-time password (OTP), also known as a one-time PIN or dynamic password, is
a password that is valid for one login session or transaction on a computer
system or other digital device.

To configure your account to use an OTP device for multi-factor
authentication, you must have one of the following OTP client
applications installed on your device: [Authy](https://www.authy.com/),
[Duo](https://www.duosecurity.com/),
[Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=en),
or [SecureAuth OTP](https://www.secureauth.com/Support/Downloads/Client-Applications.aspx).

To register and verify a mobile code device, use the following steps:

1. Log in to the [Rackspace Cloud Control Panel](https://login.rackspace.com).

2. In the upper-right corner of the Cloud Control Panel, click the user menu and
    select **My Profile & Settings**.

3. In the **Security Settings** section, select **Enable** for **Multi-factor
    authentication**.

4. Select **User a Mobile App** and click **Next**.

    **Note**: Supported applications: Authy, Duo, Google Authenticator.

5. Type a **Device nickname** for the OTP device. Then, click **Next**.

6. The Identity service generates a QR code. Use the OTP client application on
    your device to scan the barcode and click **Verify**.

    After you scan the code, the OTP application on your device creates the OTP
    device using the device name you specified. It also generates a code.

7. To verify the new device, enter the code on the **Verify Code** form. Then,
    click **Verify Mobile Code**.

    After you submit the verification code, the system automatically logs you
    out.

    **Note:** By default, the new OTP device is the default method for
    authentication. If you do not want it to be the default or if you do not
    want to be logged out of your account, remove the selection from **Make this
    my default authentication method**.

    You can update the default authentication method on the **Account settings**
    page.

8. In the Cloud Control Panel, enter your username and password. Then, enter the
    verification code from the OTP device that you paired with
    your account.

### Change default multi-factor authentication method

If you configured your account with both SMS and OTP devices, you
can select the default multi-factor authentication method from the **My Profile
& Settings** page.

1. Log in to the [Rackspace Cloud Control Panel](https://login.rackspace.com).

2. In the upper-right corner of the Cloud Control Panel, click the user menu and
    select **My Profile & Settings**.

3. In the **Security Settings** section, under **Multi-Factor Authentication**,
   select **Manage**.

4. In the **Security Settings** section, select **Enable** for **Multi-factor
    authentication**.

5. Under **Method**, select **Switch to SMS** (if you set up a Mobile App) or
   **Switch to Mobile App** (if you set up SMS).

### Configure account-wide multi-factor authentication settings from an Administrator account

**Important**: By default, we enable MFA account-wide. If you want to disable
this setting, you need to generate a support ticket.

Account administrators can update Rackspace Cloud account-wide settings to
require all users to authenticate by using multi-factor authentication. When the
setting is enabled, users cannot access their accounts until they add and verify
a device on their account.

1. Log in to the [Rackspace Cloud Control Panel](https://login.rackspace.com).

2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.

3. In the upper-right, click **Account** > **Account Settings**. Under
   **Rackspace Account Settings**, click **Change** next to **Multi-Factor
   Authentication**.

4. In the **Security Settings** section, select **Enable** for **Multi-factor
    authentication**.

5. On the **Account-wide two-factor authentication** form, click the selection
    to set the policy for account users. Then, click **Save Setting** to apply
    the change.

    If you update the setting to `required`, users who do not have multi-factor
    authentication configured must add it the next time they log in. The system
    logs out current users who have not set up multi-factor authentication after
    displaying an error message like the following example:

    {{<image alt="Force user to log out when multi-factor authentication requirement is not met" src="mfa-force-logout.png" title="Force user to log out when multi-factor authentication requirement is not met">}}

    When these users log back in, the system guides them through the
    multi-factor authentication setup.

### Configure multi-factor authentication during account log in

If you did not configure your account for multi-factor authentication when
required, the system notifies you about the increase in security requirements
and prompts you to set up authentication.

To access your account, click **Set Up Multi-Factor Authentication.** Then,
follow the steps to register and verify a device and authenticate by using the
code sent to the device.

### Log in to the Rackspace Cloud by using multi-factor authentication

If you add multi-factor authentication capabilities to your account,
authentication is a two-step process.

#### Prerequisites

- Rackspace Cloud accounts with a valid username and password credentials
- Access to the registered and verified SMS or OTP device paired with your
    Rackspace Cloud account

To log in to the Rackspace Cloud with multi-factor authentication

1. Log in to the [Rackspace Cloud Control Panel](https://login.rackspace.com)
    with your user name and password.

    If you configured your account to use multi-factor authentication with an
    SMS device, the Identity service sends an SMS text message with a
    seven-digit code to the device registered to your account.

    If you configured your device to use multi-factor authentication by OTP
    device, open the OTP client application and get the code from the OTP device
    associated with your Rackspace Cloud account.

2. When prompted, type the code in the **Passcode** field on the Control Panel.
    Then, click **Verify Code** to log in to your account:

    If the code is expired or invalid, refresh the page to return to the
    Rackspace Cloud Control Panel login page. Then, log in again and click the
    Resend code option on the Account Settings page to get a new code.

### Manage multi-factor authentication

Rackspace Cloud users can view and manage the multi-factor authentication
configuration from the **Account Settings** menu in the Cloud Control Panel.

#### View and enable multi-factor authentication settings

1. In the upper-right corner of the Cloud Control Panel, click the **userName**
    menu and select **My Profile & Settings**.

2. In the **Security Settings** section, select **Enable** for **Multi-factor
   authentication**.

#### Verify your device

You can verify your SMS or OTP device from the Account Settings page.

- If you have an unverified SMS device on your account, use the **Verify**
    option to complete the verification process.

- If you have an unverified OTP device, use the **Manage**
    option to complete the verification process.

#### Remove multi-factor authentication

You can turn off multi-factor authentication and remove all devices associated
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

#### Remove an SMS or OTP device

To remove an SMS device, use the **Remove all devices**.

To remove an OTP device, use the **Manage** option to delete the device from
your account.

### Troubleshooting

Use the following information to resolve common issues that can occur when
configuring and using multi-factor authentication.

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
<td align="left">If you enter an incorrect code more than six times during the multi-factor authentication process, your account will be locked. Contact Rackspace Support to restore access to a locked account. </td>
</tr>
<tr class="odd">
<td align="left"><h4 id="cannot-link-cloud-account-in-myrackspace-with-multi-factor-enabled"><strong><strong><strong>Cannot link cloud account in MyRackspace with multi-factor enabled</strong></strong></strong></h4></td>
<td align="left"><p>If you are using MyRackspace, you cannot link to an existing Rackspace Cloud account enabled for multi-factor authentication.</p></td>
</tr>
<tr class="even">
<td align="left"><h4 id="account-recovery"><strong><strong><strong>Account recovery</strong></strong></strong></h4></td>
<td align="left"><p>If you configured your account for multi-factor authentication and do not have access to your device or your generated account-recovery codes,  contact Rackspace Support.</p></td>
</tr>
</tbody>
</table>
