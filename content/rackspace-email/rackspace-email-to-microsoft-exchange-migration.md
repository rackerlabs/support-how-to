---
permalink: rackspace-email-to-microsoft-exchange-migration/
audit_date:
title: Rackspace Email to Microsoft Exchange migration
type: article
created_date: '2017-06-19'
created_by: William Loy
last_modified_date: '2017-06-23'
last_modified_by: William Loy
product: Rackspace Email
product_url: rackspace-email
---
Plan your migration from Rackspace Email to Microsoft Exchange.

### Prerequisites

- **Applies to:** Administrator
- **Difficulty:** Challenging
- **Time needed:** Minimum of 5 business days to schedule migration
- **Tools required:** Administrator access

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology/).


### Rackspace Email to Microsoft Exchange migration


To determine if migrating your users to Microsoft Exchange is necessary for your business, lets compare the available solutions. We now offer Rackspace Email Plus which does not require users to migrate.


|Feature | Rackspace Email | Rackspace Email Plus | Microsoft Exchange
|---|---|---|---|
|**Syncs to Mail Client** | &#10003; Mail |&#10003; Mail|<br/></br>&#10003; Mail<br/></br> &#10003; Contacts<br/></br>&#10003;Calendar<br/></br> &#10003;Notes <br/></br> &#10003;Tasks|
|**Syncs to Mobile Device** | &#10003; Mail | <br/></br>&#10003; Mail<br/></br> &#10003; Contacts<br/></br> &#10003; Calendar<br/></br>|<br/></br>&#10003; Mail<br/></br> &#10003; Contacts<br/></br> &#10003; Calendar<br/></br>&#10003;Notes <br/></br> &#10003;Tasks
|**Online Contacts** | &#10003; | &#10003; |&#10003; |
|**Online Calendar** | &#10003; | &#10003; |&#10003; |
|**Online Notes** | &#10003; | &#10003; |&#10003; |
|**Online Tasks** | &#10003; | &#10003; |&#10003;
|**30GB Cloud Drive storage**|  | &#10003;| |
|**Desktop File Synchronization**| | &#10003;| |
|**Online Document & Spreadsheet Editors**| | &#10003;| |
| **Max mailbox storage**| 25GB | 25GB | 100GB|


Note: Upgrading to Rackspace Email Plus DOES NOT require a migration. See [Upgrade to Rackspace Email Plus](/how-to/upgrade-to-rackspace-email-plus/) for details on upgrading from Rackspace Email to Rackspace Email Plus.

If you are considering the migration because your Rackspace Email mailbox is at maximum capacity you may want to reconsider as this will not immediately resolve the issue. Try the recommendations in [Rackspace Email storage maintenance and best practices](/how-to/rackspace-email-storage-maintenance-and-best-practices/).


### Planning your migration

1. Consider the number of users that will be making the move. All of them will have to go through migration preparation before the move.
2. Set up Autodiscover for your domain. See [Set up DNS records for Cloud Office email](/how-to/set-up-dns-records-for-cloud-office-email/) for the necessary autodiscover record.

    - Autodiscover allows users to set up email in Outlook using only their email address and password.
    - Autodiscover is REQUIRED for Outlook 2016 set ups.
    - Setting up autodiscover sets you and your users up for success post-migration.


3. Instruct all of your users to verify that they can find all of their email in [apps.rackspace.com](https://apps.rackspace.com/index.php).
    - The mail stored in apps.rackspace.com is all that will be migrated. If a user notices mail is missing in apps.rackspace.com, they might be storing mail locally.
    Theses users will need to import the locally stored email into their Rackspace Email IMAP account before migrating.
    - Are any users utilizing a POP connection to their mailbox?
    - In either case the instructions [Migrate from a POP server to Rackspace Email IMAP using Outlook](/how-to/migrating-from-a-pop-server-to-rackspace-email-imap-using-outlook/) for Windows users or
    [Migrate from a POP server to Rackspace Email IMAP using Outlook 2011 - Mac](/how-to/migrating-from-a-pop-server-to-rackspace-email-imap-using-outlook-2011-mac/) for Mac users will walk them through syncing their [locally](/how-to/cloud-office-support-terminology/). stored mail to apps.rackspace.com.

4. Remove special characters from folder names.

    - Folders names with special characters—such as commas ( , ), periods ( . ), slashes ( / ), and ampersands ( & )—cause migration issues.
    - Before you begin migrating, revise folder names with special characters to use only alphanumeric characters.

    Example folder name: "**1.Inbox**"  The (.) will cause migration problems.

5.  Mac users
    -  Mac users require special preparation when migrating from Rackspace Email to Microsoft Exchange. This is because Apple Mail interacts with IMAP and POP connections
    in such a way that does not translate properly to Microsoft Exchange.[Prepare your Mac users for Microsoft Exchange](/how-to/prepare-mac-users-for-rackspace-email-to-microsoft-exchange-migration/)

### Items migrated

- Mail stored in webmail. You can verify what email is stored in webmail by logging in at [apps.rackspace.com](https://apps.rackspace.com/index.php)
- Calendar and Contact data stored in Rackspace Webmail is **not guaranteed to migrate but will be attempted**. We recommend backing up your contact data to a .csv file. See [Import or export contacts in Rackspace Email](/how-to/import-or-export-contacts-in-rackspace-email/) for instructions on exporting contacts from Rackspace Email.
- Users will remain members of any aliases or lists they are a part of.

### Items NOT migrated

- **Task and Notes in Rackspace Webmail**
- **Auto-Saved and Group Contacts in Rackspace Webmail**
- **Flags in Flagged Messages**
- **Passwords**
- **Forwarding**
- **Safelists/Blacklists**
- **Custom Signatures**
- **Rules & Alerts**
- **Sharepoint Permissions and Sharepoint User Settings**
- **Outlook settings (Categories, Junk Folder Settings, Delegate permissions, Folder permissions, Archive Settings, and Autocomplete settings/NK2)**



### Ready to migrate from Rackspace Email to Microsoft Exchange

Once you have prepared all of your users to migrate from Rackspace Email to Microsoft Exchange you will want to schedule your migration.

1. Submit a ticket through your Cloud Office Control Panel or contact support directly.

2. You will receive your migration plan via support ticket. You must read this plan carefully and respond to the ticket with the following:

    - Confirm you have read and fully understand the migration plan.
    - List a date and time you would like to schedule the migration.

    Warning: Users will not have access to email once the migration has started.

    - List all email addresses that you would like to migrate.

3. Reply to the ticket with all of the needed information or with questions you have about the migration plan.

4. Our Internal Migrations team will reply to you within 5 business days to confirm your scheduled migration time.


### What to expect during migration

1. You will receive a ticket update notifying you that the migration has started.

    Warning: If you do not receive this notification on the day your migration is scheduled, check your migration ticket to verify that you confirmed your migration date with the migrations team.

2. Once the migration has started users will not be able to access their mailbox.

    Note: Mail will still deliver to your mailboxes and will be available after the migration completes.

3. Migrations take time to complete. However, we will notify you if anything occurs that will prolong the migration.

    - Factors that affect the duration of your migration:
        - Number of mailbox items. Each item is processed individually so the more items in a mailbox, the more individual processes to complete.
        - Mailbox size.
        - Number of users being migrated.

4. When the migration is complete you will receive a ticket update informing you of it's completion.


### Finishing the move from Rackspace Email to Microsoft Exchange

Once you are notified that the migration has been completed there are final steps you must perform to ensure all of your users will be able to access their new Microsoft Exchange mailboxes.

1. You must update all of their passwords through the Cloud Office Control Panel, as the passwords were changed in the migration. See [Change a Microsoft Exchange mailbox password](/how-to/change-a-microsoft-exchange-mailbox-password/#reset-a-mailbox-password-through-the-cloud-office-control-panel). Once you have updated all of your user's passwords, have them test logging into [apps.rackspace.com](https://apps.rackspace.com/index.php) where they can access their new mailbox and verify that their email was all migrated.

2. Users can reset their own passwords to whatever they choose using these instructions[Change a Microsoft Exchange mailbox password](/how-to/change-a-microsoft-exchange-mailbox-password/#reset-your-mailbox-password-from-the-user-control-panel)

3. Users will need to configure their [mail client](/how-to/cloud-office-support-terminology/) on all devices to connect to their new mailbox. This includes desktop and mobile devices. Users can obtain instructions to configure their mail clients at [emailhelp.rackspace.com](https://emailhelp.rackspace.com/)

     Warning: If users do not configure their mail client to connect to the new mailbox they will not receive new mail in their mail client.

4. When you have confirmed that all of your data has been successfully migrated, you can request via ticket to have the remaining Rackspace Email licenses removed from your account.
