Rackspace Email to Microsoft Exchange

Microsoft Exchange includes many robust product features that Rackspace Email does not. However, we understand that not every customer needs these features.
To determine if migrating your users to Microsoft Exchange is necessary for your business, lets compare the two.

Rackspace Email:
- Syncs mail folders with local mail clients such as Outlook
- Share calendar (webmail only)
- Grant calendar editing permissions to other Rackspace Email users(webmail only)
- Create contacts(webmail only)
- Create notes(webmail only)
- Create tasks(webmail only)
- Maximum of 25 GBs of email storage

Microsoft Exchange:
- Syncs mail folders with local mail clients such as Outlook
- Share calendar(Outlook and online)
- Grant calendar editing permissions to other Microsoft Exchange users(Mail client and online)
- Sync calendars(Mail client, mobile device, and online)
- Sync contacts(Mail client, mobile device, and online)
- Sync notes(Mail client, mobile device, and online)
- Sync tasks(Mail client, mobile device, and online)
- Public Folders
- Maximum 100GBs of email storage

Customers who need to ability to sync calendars, contacts, notes, and tasks from a mail client such as Outlook are good candidates for the migration from Rackspace Email to Microsoft Exchange.
If you are considering the migration because you Rackspace Email mailbox is at maximum capacity you may want to reconsider. As far as email storage goes, 25GBs is quite substantial and anything beyond that may run into performance issues.
When you store that much data in a mailbox, it can cause things to run slowly. Try the recommendations in [Rackspace Email storage maintenance and best practices].

### Planning your migration

1. Set up Autodiscover for your domain. See [Set up DNS records for Cloud Office email](/how-to/set-up-dns-records-for-cloud-office-email/) for the necessary autodiscover record.

    - Autodiscover allows users to set up email in Outlook using only their email address and password.
    - Autodiscover is REQUIRED for Outlook 2016 set ups.
    - Setting up autodiscover sets you and your users up for success post-migration.

2. Consider the number of users that will be making the move. All of them will have to go through migration preparation before the move.

3. Instruct all of your users to verify that they can find all of their email in apps.rackspace.com.
    - The mail stored in apps.rackspace.com is all that will be migrated. If a user notices mail is missing in apps.rackspace.com, they might be storing mail locally.
    Theses users will need to import the locally stored email into their Rackspace Email IMAP account before migrating.
    - Are any users utilizing a POP connection to their mailbox?
    - In either case the instructions [Migrate from a POP server to Rackspace Email IMAP using Outlook](/how-to/migrating-from-a-pop-server-to-rackspace-email-imap-using-outlook/) for Windows user or
    [Migrate from a POP server to Rackspace Email IMAP using Outlook 2011 - Mac](/how-to/migrating-from-a-pop-server-to-rackspace-email-imap-using-outlook-2011-mac/) for Mac users will walk them through

4. Remove special characters from folder names.

    - Folders names with special characters—such as commas ( , ), periods ( . ), slashes ( / ), and ampersands ( & )—cause issues during migration.
    - Before you begin migrating, revise folder names with special characters to use only alphanumeric characters.

    Example : 1.Inbox  The (.) will cause the migration to break.


5.  Mac users
    -  Mac users will want to ensure their IMAP folders are mapped correctly through their Mac/Apple Mail Client before scheduling this migration. If not correctly mapped we have seen duplicated folders created under their Exchange account.
