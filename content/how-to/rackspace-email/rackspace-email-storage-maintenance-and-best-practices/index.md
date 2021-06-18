---
permalink: rackspace-email-storage-maintenance-and-best-practices
audit_date: '2021-06-17'
title: Rackspace Email storage maintenance and best practices
type: article
created_date: '2017-06-08'
created_by: William Loy
last_modified_date: '2021-06-17'
last_modified_by: Rose Morales
product: Rackspace Email
product_url: rackspace-email
---

This article describes how to view user storage in the Cloud Office Control
Panel as well as best practices for mailbox storage.

### Prerequisites

- **Applies to:** Administrator
- **Difficulty:** Moderate
- **Tools required:**  Cloud Office Control Panel access

For more information about prerequisite terminology, see
[Cloud Office support terminology](/support/how-to/cloud-office-support-terminology).

### Check mailbox storage in the Cloud Office Control Panel

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com/) by using
   your Rackspace Cloud Office admin ID and password.
2. In the **Rackspace Email** section, click **Mailboxes**.
3. If you have more than one domain, select the domain for which you want to
   check storage.
4. The fourth column in the mailbox list, **Usage**, shows the amount of
   free space each user has.

   The **Usage** column is not a real-time reading of the mailbox storage.
   **Usage** updates once every 24 hours. Always reference the storage in
   [apps.rackspace.com](https://apps.rackspace.com/index.php) for real-time
   storage.

**Warning:** Never allow a mailbox to reach full capacity because any messages sent to
the mailbox bouncing after that. The system does not send previously undelivered messages
after you add more space, but it does deliver new messages sent after you add space as usual.

### Enable storage notifications

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com/) by using
   your Rackspace Cloud Office admin ID and password.
2. In the **Rackspace Email** section, click **Mailboxes**.
3. If you have more than one domain, select the domain for which you want to
   enable storage notifications.
4. Click **Settings** from the sub-ribbon under **Email Accounts**, as
   shown in the following images:

   {{<image src="RSEstorageNotificationsSC1.png" alt="" title="">}}

5. Select **Storage Notification** from the options.
6. Check the box next to **Activate full mailbox notification** and adjust
   settings as desired.

    - Send a notification to the user when the mailbox reaches a certain
      percentage of capacity.
    - Send CC to an email address of your choosing so that you easily know when
      users are about to exceed capacity.
    - Customize the notification message to give your user instructions.  

7. Click **Save**.

### Check mailbox storage in webmail

1. Log in to [apps.rackspace.com](https://apps.rackspace.com/index.php).
2. Click your username in the upper right-hand corner. The drop-down menu
   displays the current mailbox storage.

   {{<image src="RSEstorageWebmailSC1.png" alt="" title="">}}

**Note:** Consider the storage shown in
[apps.rackspace.com](https://apps.rackspace.com/index.php) to be the authority
for your storage available on the server.

### Recommendations for users nearing their storage capacity

Notify users near capacity and counsel them on archiving items to free up
mailbox storage. 

Rackspace Email Archiving archives email traffic to and from your domain.
For more information, see
[Enable email archiving: Cloud Office Control Panel](/support/how-to/enable-email-archiving-cloud-office-control-panel/).

Deleting emails frees up mailbox storage. However, it takes longer to
process the deletion if a user deletes an excessive number of emails.
Allow ample time for the system to reflect the deletion in the mailbox
storage capacity.

Email in the **Trash** folder counts toward mailbox storage capacity.
Follow these steps to ensure the system does not count a deleted message
toward your mailbox storage:

1. Move an unwanted message to **Trash**.
2. Delete the message from the **Trash** folder.

The message no longer counts toward the mailbox storage. If you need to recover
a message you deleted from **Trash**, see
[Recover deleted email in Webmail](/support/how-to/recover-deleted-email-in-webmail/).

**Warning:** You can recover messages purged from the **Trash** folder for up
to 14 days after deletion. After 14 days, you can no longer recover the messages.

### Mailbox storage best practices
   
Keep the following best practices in mind:

- Enable [Rackspace Email Archiving](/support/how-to/enable-email-archiving-cloud-office-control-panel/) for all domains.
- Rackspace Email storage maxes at 25GB. Consider upgrading to
  [Microsoft Exchange](https://www.rackspace.com/email-hosting/hosted-exchange) or
  [Office 365](https://www.rackspace.com/office-365) for higher storage limits.
- Never store over 10,000 items in one folder.
- You should not exceed more than three levels of subfolders.

   Example folder structure:

   ```html
   Best practice folder (level 1)
      └── Best practice folder (level 2)
            └── Best practice folder (level 3)
                  └── Not best practice folder
   ```

- Consider removing items from your **Spam** or **Trash** folders.
- If you archive or delete messages on your
  [local mail client](/support/how-to/cloud-office-support-terminology/#cloud-office-terminology),
  log in to [apps.rackspace.com](https://apps.rackspace.com/index.php) to ensure
  that those changes reflect in webmail.
