---
permalink: change-a-mailbox-password-for-microsoft-exchange/
audit_date:
title: Change a mailbox password for Microsoft Exchange
type: article
created_date: '2017-06-08'
created_by: William Loy
last_modified_date: '2017-06-08'
last_modified_by: William Loy
product: Microsoft Exchange
product_url: exchange
---

Steps for changing the password of your Microsoft Exchange mailbox.

Prerequisites

Applies to: User and Administrator

Difficulty: Easy

Time needed: Approximately 10 minutes

Tools required: Users need their current password / Administrators need [Cloud Office Control Panel](/how-to/cloud-office-support-terminology/#cloud-office-terminology) access

For more information about prerequisite terminology, see Cloud Office support terminology.

### Reset your password from the User Control Panel


1. Log into the [User Control Panel](https://cp.rackspace.com/usercp/Login) with your email address and current password.

<!--- add screen shot file UserpasswordResetCPSC1.png--->

Note: If you are unable to log into this tool, attempt to log in at [apps.rackspace.com](https://apps.rackspace.com/index.php). If you cannot log into either site, you must contact your Administrator to have your password reset.

2. Fill out the required fields under **Change Password**.

<!--- add screen shot file UserpasswordResetCPSC2.png--->

3. Click the **Change** button.

Warning: After you change the password, you must update the password on all devices that connect to this mailbox. If you do not update the password on EVERY device,
the mailbox will lock itself and you will have to contact your [Administrators](/how-to/cloud-office-support-terminology/#cloud-office-terminology) to unlock it. Provide your Administrator the [mailbox lockout](#mailbox-lockout) instructions at the bottom of this page.

### Reset a mailbox password through the Cloud Office Control Panel.

Note: Only [Administrators](/how-to/cloud-office-support-terminology/#cloud-office-terminology) have access to the Cloud Office Control Panel.

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com).

2. In the **Microsoft Exchange** section select **Mailboxes**

<!--- add screen shot file CPpasswordResetCPSC1.png--->

3. From the mailbox list, click the blue highlighted mailbox name that you wish to change the password for.

<!--- add screen shot file CPpasswordResetCPSC3.png--->

4. Under **User Name** you will see two fields:

    - **Password:** Enter the new password

    - **Confirm:** Re-type the new password exactly as you typed it in **Password**

5. Click the **Save** button.

Warning: After the password has been changed, the user must update the password on all devices that connect to this mailbox. If they do not update the password on EVERY device the mailbox will lock itself and they will be unable to access their email.

### Mailbox Lockout

If a user's  mailbox is locked, walk them through these steps.

1. Gather every device that connects to the locked mailbox.

2. Remove the mailbox password from all devices including mobile devices. Do not re-enter the password yet.

3. Unlock the mailbox from the [Cloud Office Control Panel](https://cp.rackspace.com).

4. The user needs to successfully log in at [apps.rackspace.com](https://apps.rackspace.com/index.php). If they cannot log in, you will need to reset their password for them as outlined in the previous section.

5. Once the user has successfully logged into [apps.rackspace.com](https://apps.rackspace.com/index.php) they should manually enter their email address and password back into each device that connects to the mailbox one at a time. 
