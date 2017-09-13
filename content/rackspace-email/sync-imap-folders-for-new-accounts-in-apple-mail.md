---
permalink: sync-imap-folders-for-new-accounts-in-apple-mail/
audit_date: '2017-08-23'
title: Sync IMAP folders for new accounts in Apple Mail
type: article
created_date: '2017-08-23'
created_by: William Loy
last_modified_date: '2017-08-23'
last_modified_by: William Loy
product: Rackspace Email
product_url: rackspace-email
---

This article describes how to synchronize IMAP folders after a new account setup in Apple Mail.

### Prerequisites

- **Applies to:** User
- **Difficulty:** Easy
- **Time needed:** Approximately 10 minutes
- **Tools required:**  Access to Apple Mail IMAP account

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology/).

Because Apple Mail does not automatically synchronize IMAP folders, this process must be completed manually through folder mapping. This article provides folder mapping instructions for various Apple Mail versions.
Select the version which applies to you.

 - [Sierra](#map-imap-folders-in-sierra-apple-mail)
 - [El Capitan](#map-imap-folders-in-el-capitan-apple-mail)
 - [Yosemite](#map-imap-folders-in-yosemite-apple-mail)

**Note:** These instructions are for setting up a new account. If you have been using your IMAP account in Apple Mail and have now noticed folder sync issues, please contact support.

#### Map IMAP folders in Sierra Apple Mail

 1. Within **Mail**, click **Mail** on the top left. Then select **Preferences**.

     <img src="{% asset_path rackspace-email/sync-imap-folders-for-new-accounts-in-apple-mail/preference-mapping-sierra.png %}" />

 2. Select the **Accounts** tab at the top of the window, and then select your IMAP email account from the left pane.
 3. Select the **Mailbox Behaviors** tab.

     <img src="{% asset_path rackspace-email/sync-imap-folders-for-new-accounts-in-apple-mail/IMAP_MailboxBehaviors.png %}" />

 4. Click the **Sent Mailbox** dropdown menu, and select the folder **Sent**, which is listed under your email address (**not** the folder listed under *On My Mac*).

     <img src="{% asset_path rackspace-email/sync-imap-folders-for-new-accounts-in-apple-mail/IMAP_SentFolderMapping.png %}" />

 5. Click the **Junk Mailbox** dropdown menu, and select the folder **Spam**, which is listed under your email address (**not** the folder listed under *On My Mac*).

     <img src="{% asset_path rackspace-email/sync-imap-folders-for-new-accounts-in-apple-mail/IMAP_SpamFolderMapping.png %}" />

 6. Click the **Trash Mailbox** dropdown menu, and select the folder **Trash**, which is listed under your email address (**not** the folder listed under *On My Mac*).

     <img src="{% asset_path rackspace-email/sync-imap-folders-for-new-accounts-in-apple-mail/IMAP_TrashFolderMapping.png %}" />


 7. Test the functionality of each of these folders to ensure the mapping was successful.  

#### Map IMAP folders in El Capitan Apple Mail

 1. Close all windows so that only your mailbox's Inbox is open.
 2. Click on the **Sent** folder underneath your email account (**not the Sent folder with the paper airplane**).

    <img src="{% asset_path rackspace-email/sync-imap-folders-for-new-accounts-in-apple-mail/el_capitan_MailboxFolderList.png %}" />

 3. After the **Sent** folder is selected, click on the **Mailbox** menu on the top.
 4. Select **Use This Mailbox As** -> **Sent Mailbox**.

    <img src="{% asset_path rackspace-email/sync-imap-folders-for-new-accounts-in-apple-mail/el_capitan_FolderMapping_Sent.png %}" />

 5. Repeat Steps 3 & 4 for **Junk/Spam** and **Trash** folders.

 6. Test the functionality of each of these folders to ensure the mapping was successful.  


#### Map IMAP folders in Yosemite Apple Mail

 1. Close all windows so that you are looking at your mailbox's Inbox.
 2. Click on the **Sent** folder underneath your email account (**not the Sent folder with the paper airplane**).

    <img src="{% asset_path rackspace-email/sync-imap-folders-for-new-accounts-in-apple-mail/yosemite-folder-list.png %}" />

 3. After the **Sent** folder is selected, click on the **Mailbox** menu on the top.
 4. Select **Use This Mailbox As** -> **Sent Mailbox**.

    <img src="{% asset_path rackspace-email/sync-imap-folders-for-new-accounts-in-apple-mail/yosemite-Sent.png %}" />

 5. Repeat Steps 3 & 4 for **Junk/Spam** and **Trash** folders.

 6. Test the functionality of each of these folders to ensure the mapping was successful.  
