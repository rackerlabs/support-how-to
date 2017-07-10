---
permalink: change-a-microsoft-exchange-mailbox-password/
audit_date:
title: Change a Microsoft Exchange mailbox password
type: article
created_date: '2017-06-08'
created_by: William Loy
last_modified_date: '2017-07-10'
last_modified_by: Stephanie Fillmon
product: Microsoft Exchange
product_url: exchange
---

This article describes how to change the password for your Microsoft Exchange mailbox.

### Prerequisites

- **Applies to**: User and Administrator
- **Difficulty**: Moderate
- **Time needed**: Approximately 10 minutes
- **Tools required**: Users need their current mailbox password / Administrators need [Cloud Office Control Panel](https://cp.rackspace.com) access

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology/#cloud-office-terminology).

### Reset a password from the User Control Panel

1. Log into the [User Control Panel](https://cp.rackspace.com/usercp/Login) with your email address and current password.

   **Note:** If you are unable to log in, attempt to log in at [apps.rackspace.com](https://apps.rackspace.com/index.php). If you cannot log in to either site, you must contact your Administrator to have your password reset.

2. Fill out the required fields under **Change Password**.

   <img src="{% asset_path exchange/change-a-microsoft-exchange-mailbox-password/UserpasswordResetCPSC2.png %}" />

3. Click **Change**.

**Warning:** After you change the password, you must update the password on all devices that connect to this mailbox. If you do not update the password on *every* device, the mailbox locks itself and you must contact your Administrator to unlock it. Provide your Administrator the [mailbox lockout](#recover-a-locked-mailbox) instructions at the end of this article.

### Reset a password through the Cloud Office Control Panel.

**Note:** Only [Administrators](/how-to/cloud-office-support-terminology/#cloud-office-terminology) have access to the Cloud Office Control Panel.

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com).

2. In the **Microsoft Exchange** section select **Mailboxes**

3. From the mailbox list, click the blue highlighted mailbox name for which you want to change the password.

   <img src="{% asset_path exchange/change-a-microsoft-exchange-mailbox-password/CPpasswordResetCPSC2.png %}" />

4. Under **User Name** you will see two fields:

   - **Password:** Enter the new password
   - **Confirm:** Re-type the new password exactly as you typed it in **Password**

    **Note**: We recommend that you create a password that you have never used before and that remains unique from all your other passwords. Also, the longer your password, the more secure your account is.

5. Click the **Save** button.

   <img src="{% asset_path exchange/change-a-microsoft-exchange-mailbox-password/CPpasswordResetCPSC3.png %}" />

**Warning:** After the password has been changed, the user must update the password on all devices that connect to this mailbox. If they do not update the password on *every* device the mailbox will lock itself and they will be unable to access their email.

### Recover a locked mailbox

If a user's mailbox is locked, walk them through these steps.

1. Gather every device that connects to the locked mailbox.

2. Remove the mailbox password from all devices including mobile devices. Do not re-enter the password yet.

3. Unlock the mailbox from the [Cloud Office Control Panel](https://cp.rackspace.com).

4. The user needs to successfully log in at [apps.rackspace.com](https://apps.rackspace.com/index.php). If they cannot log in, you will need to reset their password for them as outlined in the previous section.

5. Once the user has successfully logged into [apps.rackspace.com](https://apps.rackspace.com/index.php) they should manually enter their email address and password back into each device that connects to the mailbox one at a time.
