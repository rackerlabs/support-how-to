---
permalink: change-a-microsoft-exchange-mailbox-password
audit_date: '2020-04-15'
title: Change a Microsoft Exchange mailbox password
type: article
created_date: '2017-06-08'
created_by: William Loy
last_modified_date: '2020-04-15'
last_modified_by: William Loy
product: Microsoft Exchange
product_url: exchange
---

This article describes how to change the password for a Hosted Microsoft Exchange mailbox. Users can change their own password through the User Control Panel, and administrators can change the password for a user through the Cloud Office Control Panel.

### Prerequisites

- **Applies to**: User and administrator
- **Difficulty**: Moderate
- **Time needed**: Approximately 10 minutes
- **Tools required**: Users need their current mailbox password; administrators need Cloud Office Control Panel access

For more information about prerequisite terminology, see [Cloud Office support terminology](/support/how-to/cloud-office-support-terminology/#cloud-office-terminology).

**Note:** If you are using an Office 365 Microsoft Exchange mailbox, see the [Office 365 documentation](/support/how-to/office-365/) for assistance with this task.

### Change your password through the User Control Panel

1. Log in to the [User Control Panel](https://cp.rackspace.com/usercp/Login) with your email address and current password.

   **Note:** If you are unable to log in, try to log in at [apps.rackspace.com](https://apps.rackspace.com/index.php). If you cannot log in to either site, you must contact your administrator to have your password reset.

2. Under **Change Password**, enter your current password, your new password, and your new password again to confirm.

   **Note:** We recommend that you create a password that you have never used before and that remains unique from all your other passwords. Review [Password Management and Best Practices](/support/how-to/password-management-and-best-practices) for guidance on password creation.

   {{<image src="UserpasswordResetCPSC2.png" alt="" title="">}}

3. Click **Change**.

**Warning:** After you change the password, you must update the password on all devices that connect to this mailbox. If you do not update the password on *every* device, the mailbox locks itself and you must contact your administrator to unlock it. Give your administrator the ["Recover a locked mailbox""](#recover-a-locked-mailbox) instructions at the end of this article.

### Reset a password through the Cloud Office Control Panel

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com).

2. In the **Microsoft Exchange** section, click **Mailboxes**.

3. In the mailbox list, find the mailbox you want to update and click the dropdown arrow by the  **Manage** button.

4. Within the **Change Password** pop-up, enter the following information:

   - **Password:** Enter a new password.
   - **Confirm:** Enter the new password again.

    **Note**: We recommend that you create a password that you have never used before and that remains unique from all your other passwords. Also, longer passwords provide better security for your account.

5. Click **Change Password**.

**Warning:** After the password has changed, the user must update the password on all devices that connect to this mailbox. If the password isn't updated on *every* device, the mailbox locks itself and users can't access their email.

### Recover a locked mailbox

If a user's mailbox locks, the administrator and user can follow the steps in this section
to unlock it.

1. *(User)* Identify every device that connects to the locked mailbox.

2. *(User)* Remove the mailbox password from all of the devices, including mobile devices. Do *not* re-enter the password yet.

3. *(Admin)* Log in to the [Cloud Office Control Panel](https://cp.rackspace.com) and unlock the user's mailbox.

4. *(User)* Log in at [apps.rackspace.com](https://apps.rackspace.com/index.php). If you cannot log in, the admin must reset your password as outlined in the previous section.

5. *(User)* After you have successfully logged into [apps.rackspace.com](https://apps.rackspace.com/index.php), manually enter your email address and password into each device that connects to the mailbox, one at a time.
