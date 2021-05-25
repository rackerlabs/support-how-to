---
permalink: nested-imap-folders-in-apple-mail
audit_date: '2021-05-25'
title: Nested IMAP folders in Apple&reg; Mail
type: article
created_date: '2013-12-05'
created_by: Milton Prado
last_modified_date: '2021-05-25'
last_modified_by: Ana Corpus
product: Rackspace Email
product_url: rackspace-email
---

This article provides information about nested folders in Apple Mail and IMAP
configurations and how to resolve them. When nested folders occur, users see
multiple child subfolders labeled **INBOX** underneath the main Inbox folder.
This issue relates to the functionality of Apple Mail and the IMAP protocol.
Nested folders with Apple Mail are not specific to the Rackspace Email environment.

###  Change the IMAP prefix

Apple Mail enables users to isolate a folder used to sort mail
data on the email server through an IMAP path prefix. By adjusting this prefix,
some users might resolve the issue.

You can change the IMAP prefix in the advanced settings of the IMAP
mailbox.

1. Select **Mail > Preferences > Accounts**.
2. Select the IMAP account.
3. Select **Server settings > Advanced IMAP Settings**.
3. Click the **Advanced** tab.
4. Try one or both of the following possible fixes:

    - Change the **IMAP Path Prefix** from INBOX to Inbox.

    - Add a slash (`/`) at the end of the prefix, such as **INBOX/** or
      **Inbox/**. A slash helps Apple Mail to recognize that the path ends in a folder.
      
### Reset Apple Mail preferences

To reset Apple Mail preferences, find the IMAP prefix settings in the account settings
file for Apple Mail. Sometimes file corruption causes these issues.

**Note:** If you remove this file, you might need to enter your account credentials again.
          However, your IMAP configuration and mail stay in Apple Mail.

You can find the file in the following directory:
**_userName_/Library/Containers/com.apple.mail/Data/Library/Preferences**. By
default, the **Library** folder, under your username folder, is hidden. To access
it, perform the following steps:

1. Open a new Finder window.

2. Click **Go** on the menu bar.

3. Hold down the **Alt/Option** key on your keyboard.

4. Click **Library** from the list of folders.

You can now navigate to the path for your **com.apple.mail.plist** file.

If you can't correct the issue, we recommend contacting the vendor for full support with Apple Mail.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/).
