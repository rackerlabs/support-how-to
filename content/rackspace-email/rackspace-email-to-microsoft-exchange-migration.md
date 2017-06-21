---
permalink: rackspace-email-to-microsoft-exchange-migration/
audit_date:
title: Rackspace Email to Microsoft Exchange migration
type: article
created_date: '2017-06-19'
created_by: William Loy
last_modified_date: '2017-06-19'
last_modified_by: William Loy
product: Rackspace Email
product_url: rackspace-email
---
Plan your migration from Rackspace Email to Microsoft Exchange.

### Prerequisites

- **Applies to:** Administrator
- **Difficulty:** Challenging
- **Time needed:** Minimum of 5 business days to schedule
- **Tools required:** Listed as Administrator

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology/).


### Rackspace Email to Microsoft Exchange migration

Microsoft Exchange includes many robust product features that Rackspace Email does not. However, we understand that not every customer needs these features.
To determine if migrating your users to Microsoft Exchange is necessary for your business, lets compare the two. We also now offer Rackspace Email PLUS which does not require users to migrate.

**Rackspace Email:**
- Syncs mail folders with local mail clients such as Outlook
- Share calendar (webmail only)
- Grant calendar editing permissions to other Rackspace Email users(webmail only)
- Create contacts(webmail only)
- Create notes(webmail only)
- Create tasks(webmail only)
- Maximum of 25 GBs of email storage


**Microsoft Exchange:**
- Syncs mail folders with local mail clients such as Outlook
- Share calendar(Outlook and online)
- Grant calendar editing permissions to other Microsoft Exchange users(Mail client and online)
- Sync calendars(Mail client, mobile device, and online)
- Sync contacts(Mail client, mobile device, and online)
- Sync notes(Mail client, mobile device, and online)
- Sync tasks(Mail client, mobile device, and online)
- Public Folders
- Maximum 100GBs of email storage


|Rackspace Email|
|---|

|   | Mail | Calendar | Contacts | Notes | Tasks | Calendar Sharing |
|---|---|---|---|---|---|---|
|**Syncs to Outlook**| X |  |  |  | | |
|**Syncs to Mobile Device**| X |  |  |  |  | |
|**Available in webmail**|  X | X | X | X | X | X |


|Rackspace Email PLUS|
|---|

|   | Mail | Calendar | Contacts | Notes | Tasks | Calendar Sharing |
|---|---|---|---|---|---|---|
|**Syncs to Outlook**| X |  |  |  | | |
|**Syncs to Mobile Device**| X | X | X |  |  |  |
|**Available in webmail**|  X | X | X | X | X | X |

Note: Upgrading to Rackspace Email PLUS DOES NOT require a migration. See [Upgrade to Rackspace Email Plus](/how-to/upgrade-to-rackspace-email-plus/)
for details on upgrading from Rackspace Email to Rackspace Email PLUS.

|Microsoft Exchange|
|---|

|   | Mail | Calendar | Contacts | Notes | Tasks | Calendar Sharing |
|---|---|---|---|---|---|---|
|**Syncs to Outlook**| X | X | X | X | X | X |
|**Syncs to Mobile Device**| X | X | X | X | X | X |
|**Available in Outlook Web Access**|  X | X | X | X | X | X |

Customers who need to ability to sync calendars, contacts, notes, and tasks from a mail client such as Outlook are good candidates for the migration from Rackspace Email to Microsoft Exchange.
If you are considering the migration because your Rackspace Email mailbox is at maximum capacity you may want to reconsider as this will not immediately resolve the issue. Try the recommendations in [Rackspace Email storage maintenance and best practices](/how-to/rackspace-email-storage-maintenance-and-best-practices/).


### Planning your migration


1. Consider the number of users that will be making the move. All of them will have to go through migration preparation before the move.

2. Set up Autodiscover for your domain. See [Set up DNS records for Cloud Office email](/how-to/set-up-dns-records-for-cloud-office-email/) for the necessary autodiscover record.

    - Autodiscover allows users to set up email in Outlook using only their email address and password.
    - Autodiscover is REQUIRED for Outlook 2016 set ups.
    - Setting up autodiscover sets you and your users up for success post-migration.


3. Instruct all of your users to verify that they can find all of their email in apps.rackspace.com.
    - The mail stored in apps.rackspace.com is all that will be migrated. If a user notices mail is missing in apps.rackspace.com, they might be storing mail locally.
    Theses users will need to import the locally stored email into their Rackspace Email IMAP account before migrating.
    - Are any users utilizing a POP connection to their mailbox?
    - In either case the instructions [Migrate from a POP server to Rackspace Email IMAP using Outlook](/how-to/migrating-from-a-pop-server-to-rackspace-email-imap-using-outlook/) for Windows user or
    [Migrate from a POP server to Rackspace Email IMAP using Outlook 2011 - Mac](/how-to/migrating-from-a-pop-server-to-rackspace-email-imap-using-outlook-2011-mac/) for Mac, users will walk them through syncing their [locally](/how-to/cloud-office-support-terminology/). stored mail to apps.rackspace.com.

4. Remove special characters from folder names.

    - Folders names with special characters—such as commas ( , ), periods ( . ), slashes ( / ), and ampersands ( & )—cause issues during migration.
    - Before you begin migrating, revise folder names with special characters to use only alphanumeric characters.

    Example : 1.Inbox  The (.) will cause the migration to break.


5.  Mac users
    -  Mac users will want to ensure their IMAP folders are mapped correctly through their Mac/Apple Mail Client before scheduling this migration. If not correctly mapped we have seen duplicated folders created under their Exchange account.

### Items migrated

- Mail stored in webmail. You can verify what email is stored in webmail by logging in at apps.rackspace.com
- Calendar and Contact data stored in Rackspace Webmail is **not guaranteed to migrate but will be attempted**. We recommend backing up your contact data to a .csv file through the Rackspace Webmail.
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
    - List a date and time you would like to schedule the migration. Times requested within 5 business days of an initial request will not be scheduled and an alternative date will be suggested.

    Warning: Users will not have access to email once the migration has started.

    - List all email addresses that you would like to migrate

3. Reply to the ticket with all of the needed information or with questions you have about the migration plan.

4. Our Internal Migrations team will reply to you within 5 business days to confirm your scheduled migration time.


### What to expect during migration

1. You will receive a ticket update notifying you that the migration has started.

    Warning: If you do not receive this notification on the day your migration is scheduled, check your migration ticket to verify that you confirmed your migration date with the migrations team.

2. Once the migration has started users will not be able to access their mailbox.

    Note: Mail will still deliver to your mailboxes and will be available after the migration completes.

3. Migrations are not instant and require many hours to complete. However, we will notify you if anything occurs that will prolong the migration.

    - Factors that affect the duration of your migration:
        - Number of mailbox items. Each item is processed individually so the more items in a mailbox, the more processes to complete.
        - Mailbox size.
        - Number of users being migrated.

    Note: There is no way to speed up a migration in progress.

4. When the migration is complete you will receive a ticket update informing you of it's completion.
