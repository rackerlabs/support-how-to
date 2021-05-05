---
permalink: manage-multi-factor-authentication-for-administrators
audit_date: '2020-04-28'
title: Manage multi-factor authentication for administrators
type: article
created_date: '2020-04-15'
created_by: Claire Wolfe
last_modified_date: '2020-04-28'
last_modified_by: William Loy
product: Rackspace Email
product_url: rackspace-email
---

This article describes how to manage multi-factor authentication for Cloud Office Control Panel administrators.

### Prerequisites

- **Applies to:** Administrator
- **Difficulty:** Easy
- **Time Needed:** Approximately 5 minutes
- **Tools Needed:** Administrators need access to their Cloud Office Control Panel

For more information about prerequisite terminology, see [Cloud Office support terminology](/support/how-to/cloud-office-support-terminology).

As an administrator of your company's email solution, you have a great deal of control over your account. An administrator access compromise can be devastating to your business. A strong security policy isn't complete without enabling multi-factor authentication.

### Multi-factor authentication options

The Cloud Office Control Panel provides two options for enabling multi-factor authentication when you first log in. Multi-factor authentication setup is a requirement at first login.

#### Use text message multi-factor authentication

With text message multi-factor authentication, you can use your phone number to receive a one-time code that allows you access to the control panel.

Use the following steps to enable text message multi-factor authentication:

1. Log in to your [Cloud Office Control Panel](https://cp.rackspace.com).

2. Select **Get A Text Message** from within the box titled **Choose Your Multi-Factor Authentication Method**.

3. Enter the phone number that you want to link the multi-factor SMS messaging with.

4. Enter the code sent to your phone in the verification field and click **Verify Code**.

5. The last step displays the following message: **You have successfully set up Multi-Factor Authentication!**


#### Use a multi-factor authentication mobile application

Use the following steps to enable a mobile multi-factor authentication app:

1. Log in to your [Cloud Office Control Panel](https://cp.rackspace.com).

2. Select **Use a Mobile App** from within the box titled **Choose Your Multi-Factor Authentication Method**.

3. Link your mobile device to your administrator account by using the following the instructions in the prompt:

    {{<image src="mobile_app.png" alt="" title="">}}

4. The last step displays the following message: **You have successfully set up Multi-Factor Authentication!**

### Log in to the control panel with multi-factor authentication

1. Navigate to [Cloud Office Control Panel](https://cp.rackspace.com).

2. Enter your **Admin ID** and **Password**.

3. Generate a verification code by using your previously installed multi-factor authentication app and enter this code into the **Multi-Factor Verification Code** field.

You have successfully logged in using multi-factor authentication.

### Reset multi-factor authentication for other administrators

You might need to perform these steps if an administrator gets a new device without first disabling multi-factor authentication.

1. Log in to your [Cloud Office Control Panel](https://cp.rackspace.com).

2. Click your username and account number, for example, **adminusername (acct#)**, in the upper-right corner to expand the menu.

3. From the menu, select **Administrators**.

4. Click the username for the administrator that you are going to require to use multi-factor authentication.

5. Click on Reset **Multi-Factor Authentication**.

6. Click on **Reset Multi-Factor Authentication** in the pop-up to confirm the request.

You have successfully reset MFA for this administrator. They receive a prompt to set it up again on their next
login attempt.


### Manage multi-factor authentication linked devices

You have the option to trust devices when using multi-factor authentication. You can choose to trust a device the first time you set up multi-factor authentication on that device.

Use the following instructions to edit your trusted devices:

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com).

2. Click your username and account number, for example, **adminusername(acct#)**, in the upper right-hand corner to expand the menu.

3. From the menu, select **My Profile**.

4. Select **Trusted Devices**.

    - You see a list of trusted devices associated with your administrator account. Here you can choose to remove devices that you don't recognize or no longer use.

5. Click **Edit Trusted Devices**. You can now click the trash icon to the right of the device you want to remove and then click **Save**.
