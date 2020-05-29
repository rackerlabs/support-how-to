---
permalink: change-rackspace-email-mailbox-password/
audit_date: '2020-05-29'
title: Change a Rackspace Email mailbox password
type: article
created_date: '2017-06-19'
created_by: William Loy
last_modified_date: '2020-05-29'
last_modified_by: William Loy
product: Rackspace Email
product_url: rackspace-email
---

This article describes how to change the password that's used to access a Rackspace Email mailbox. Users can change their own password through Webmail, and administrators can change the password for a user through the Cloud Office Control Panel.

### Prerequisites

- **Applies to:** User or administrator
- **Difficulty:** Easy
- **Time needed:** About 5 minutes
- **Tools required:**  Users need their current password; administrators need Cloud Office Control Panel access

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology/).

### Change your password through webmail

1. Log in to your mailbox at [apps.rackspace.com](https://apps.rackspace.com/index.php).

   **Note:** Your password might already be entered when you log in to apps.rackspace.com. However, you must be able to manually enter the password in the following steps. If you do not know the password see [Rackspace Email password recovery FAQ](/how-to/rackspace-email-password-recovery-faq/) before proceeding.

2. Click your username in the upper-right corner and then select **Settings**.

3. In the left pane of the **Settings** dialog box, click **Change Password**.

4. Enter the following information:

    - **Current Password:** Enter the password that you just used to log in to the mailbox.
    - **New Password:** Enter the new password for the mailbox.
    - **Confirm Password:** Enter the new password again.

    **Note:** Review [Password Management and Best Practices](/how-to/password-management-and-best-practices) for guidance on password creation.

5. Click **Save**.

   **Note:** You must update your password on any device that you use to check mail for this mailbox.

### Change a password through the Cloud Office Control Panel

Review [Password Management and Best Practices](/how-to/password-management-and-best-practices) before setting passwords for your users.

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com/).

2. In the **Rackspace Email** section, click **Mailboxes**.

3. Click the drop-down arrow next to the **Manage** button for the mailbox you are changing the password.

4. From the drop-down menu, click **Change Password**.

5. Enter the **New Password** and enter the new password again in the **Confirm Password** field.


### Change passwords for multiple mailboxes

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com/).

2. In the **Rackspace Email** section, click **Mailboxes**.

3. Click the drop-down arrow next to the **Add Mailbox** and select **Add/Edit Multiple Mailboxes**.

4. Download the sample Comma Separated Values (CSV) file and populate the CSV with the the usernames and new passwords by using the appropriate fields.

5. Select the option **Overwrite existing mailbox details** then click the **Upload** button.

6. Browse your device for the CSV file with the updated password details and select that file.
