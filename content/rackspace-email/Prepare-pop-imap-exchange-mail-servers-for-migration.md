---
permalink: Prepare-pop-imap-exchange-mail-servers-for-migration/
audit_date:
title: Prepare POP, IMAP, and Exchange mail servers for migration
type: article
created_date: '2016-08-29'
created_by: Nate Archer
last_modified_date: '2016-08-29'
last_modified_by: Nate Archer
product: Rackspace Email
product_url: rackspace-email
---

This article outlines important information to note when migrating to Rackspace from the three most common mail server types. Prior to migrating, we recommend reviewing the information listed in this article for your source(current) mail server.

After you have reviewed the following information, you can follow the steps in the article [Migrate your email by using the Self-Service Tool](how-to/migrate-your-email-by-using-the-self-service-tool/) to complete your migration.

### POP server

POP mail servers store mail in the user's local computer and not the source server. There might not be a need to migrate your user's mail. Therefore, we recommend a local data migration, which you can perform by performing the steps outlined in the following articles:

- For Mac: [Migrating from a POP server to Rackspace email IMAP using Outlook 2011](how-to/migrating-from-a-pop-server-to-rackspace-email-imap-using-outlook-2011-mac/)

- For Windows: [Migrating from a POP server to Rackspace Email using Outlook 2010's drag and drop method](how-to/migrating-from-a-pop-server-to-rackspace-email-imap-using-outlook-2010-drag-and-drop-method/)

### IMAP server

IMAP migrations copy the email data in the inbox and sub-folders of the inbox if the data is stored on your source server. Any contacts, calendars, notes, and every other piece of information that is not stored in a user's inbox will *not* migrate.

IMAP servers are typically accessed by the migration tool using either the incoming server's address listed in the mail client or using the webmail address for your current mail provider. You may also use server's IP address in place of any other host name of address.

#### Test IMAP server access

We recommend testing IMAP server access prior to migrating. Access can be tested using the [DNS wonder tool](http://www.dnswonder.com/Tools/ImapTest.aspx). You'll need the following information in order to use the tool:

- Source server name or IP address
- Server port number
- Login name, usually the email address associated with the source server
- Mailbox password

If you have issues connecting to the server, try the following:

- Access the server though ports 142 and 993 using SSL. Some mail providers only allow a connection through one port.
- Log in to webmail to confirm that the username and password combination you used is correct
- Reset the mailbox password

#### Special characters

Folders named with special characters("," "." "/" "&") commonly cause issues during migration. These folders with special characters must be renamed using only alpha-numeric characters before you can begin migrating.

#### iPhone and Android users

After the migration has been performed, iPhone and Android mail users might notice messages sorted from the oldest to newest. Users might also notice gaps between the dates of messages. This is because the migration tool copies mail from the source server's mailbox in order from newest to oldest, but the user's mobile device will display information from oldest to newest.

This only affects iPhone and Android users with messages that have been migrated using the migration tool. Outlook users and users of other mail services will not be affected.

### Exchange

Exchange migrations copy some of the email data stored on the source server, yet the amount will depend on where you are migrating to:

- **Rackspace Email**: Inbox, sub-folders of the inbox
- **Hosted Exchange**: Inbox, sub-folders of the inbox, contacts, calendars, task, and notes

When migrating from Exchange, use the administrator credentials from your source server instead of individual usernames and passwords from each mailbox. Use this [reference page](https://community.bittitan.com/kb/Pages/How do I create an administrator account for login.aspx#) for information about setting up your admin credentials on your Exchange source server.

#### Test Exchange server access

We recommend testing access to your exchange server prior to migrating. The migration tool accesses the exchange server using the OWA URL. The URL should look similar to the following:

- https://mail.example.com/exchange
- https://mail.example.com/owa

To test access to the server using the OWA URL, enter the username(either the full email address or Exchange username) and password for the individual mailbox to log in. If you using admin credentials, you can enter these credentials then open another user's mailbox.
