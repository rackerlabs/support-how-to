---
permalink: manage-password-recovery-for-rackspace-webmail/
audit_date: '2020-10-14'
title: Manage password recovery for Rackspace Webmail
type: article
created_date: '2020-10-14'
created_by: Daniel Boyle
last_modified_date: '2020-10-14'
last_modified_by: Stephanie Fillmon
product: Rackspace Email
product_url: rackspace-email
---

This article describes how to manage password recovery for Rackspace
Webmail.

**Note**: For this recovery feature to work, it must be enabled by your
site administrator.

### Prerequisites

- **Applies to:** User
- **Difficulty:** Easy
- **Time needed:** Approximately 5 minutes
- **Tools required:** Access to your Rackspace Webmail account

For more information about prerequisite terminology, see [Cloud Office support terminology](/support/how-to/cloud-office-support-terminology).


### Select an authentication type

Rackspace Webmail provides two options for password recovery: text message
authentication and mobile application authentication.

The system might prompt you to set up password recovery when you log in, or you can
configure it in the Rackspace Webmail settings.

#### Use text message authentication

With text message authentication, you can recover the password for your
Rackspace Email account by having our system send you a text message that
verifies your identity.

1. Log in to [Rackspace Webmail](https://apps.rackspace.com/).
2. When prompted to *Choose Your Recovery Method*, select
   **Get A Text Message**.
3. Enter the phone number that you want to use for SMS messaging.
4. In the verification field, enter the code that was sent to your phone and
   then click **Verify Code**.

A message stating *You have successfully set up password recovery* displays.


#### Use an authentication mobile application

With an authentication mobile application, you can recover the password
for your Rackspace Email account by using the code from the application
to verify your identity.

1. Log in to [Rackspace Webmail](https://apps.rackspace.com/).
2. When prompted to *Choose Your Recovery Method*, select
   **Use An Authenticator**.
3. Link your mobile device to your account by following the instructions on
   the **Securing Your Account with an Authenticator App** screen.

A message stating *You have successfully set up password recovery** displays.

### Enable or disable password recovery

If your account administrator has password recovery configured for your
account, you can enable or disable password recovery in your account
settings.

1. Log in to [Rackspace Webmail](https://apps.rackspace.com/).
2. Open Webmail Settings and select **Security**.
3. Slide the Password Recovery setting to either the **On** or **Off**
   position.

   When you select **On**, the system displays the password recovery setup
   screen. See the previous sections for instructions to set up your
   preferred recovery type.

   If you select **Off**, password recovery is immediately disabled.

### Reset the password recovery authentication type

You might need to perform these steps to change your
authentication method or set up a new device.

1. Log in to [Rackspace Webmail](https://apps.rackspace.com/).
2. Open Webmail settings and select **Security**.
3. In the Authentication Type section, click **Reset**.

   {{<image src="pwd-settings.png" alt="" title="">}}

4. The **Choose Your Recovery Method** screen displays. See the previous
   sections for instructions to set up your preferred recovery type.


### How do I change my Rackspace Email password if I forget it?

1. On the [Rackspace Webmail](https://apps.rackspace.com/) login page, click
   **Forgot Password**.
2. When prompted, enter the verification code from the SMS text message or
   authentication app.
3. Enter and confirm your new password and then click **Reset Password**.

{{<image src="reset-pwd.png" alt="" title="">}}

**Warning**: After you have changed your password, update the password on any
device used to check this mailbox.
