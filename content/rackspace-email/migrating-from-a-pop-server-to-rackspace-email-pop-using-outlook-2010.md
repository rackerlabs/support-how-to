---
node_id: 3786
title: Migrating from a POP server to Rackspace Email POP using Outlook 2010
type: article
created_date: '2013-11-18'
created_by: Milton Prado
last_modified_date: '2016-01-12'
last_modified_by: Stephanie Fillmon
product: Rackspace Email
product_url: rackspace-email
---

POP email is typically stored locally on a computer and removed from the
mail server after being downloaded by the client.  In many cases, this
data cannot be migrated with our migration tool when it does not exist
on your source mail server.  The steps in this article will walk you
through performing a manual migration of POP data via Outlook to a
Rackspace Email setup via POP.

We'll accomplish this task by changing the POP settings on your account.
The change will allow you to easily use all of the locally stored email
with your new Rackspace Email account.  Once the new server is added,
mail sent to Rackspace will start to arrive in the same Inbox.

If you would like to learn more about the differences between POP and
IMAP, please see the help topic,  [IMAP vs.
POP](/how-to/imap-and-pop-mail-protocol-comparison).

### Prerequisites

Before performing the steps below, make sure that mailboxes have already
been created on the Rackspace environment and that the MX records have
been updated so to that email is routing correctly to Rackspace.

-   [How to create
    mailboxes](/how-to/add-rackspace-email-mailboxes)
-   [How to change MX
    records](/how-to/set-up-dns-records-for-cloud-office-email-and-skype-for-business)

### Changing Settings

For increased security, we recommend that you use our secure (SSL)
servers, as detailed below. If your internal system configurations
require non-SSL ports, those settings are available in the article
referenced previously, [IMAP vs.
POP](/how-to/imap-and-pop-mail-protocol-comparison).

1.  In Outlook 2010 select **File** &gt; **Account Settings**.

2.  If you're adding a new account click **New**.  If you're changing
    your existing POP account, highlight the account and select
    **Change**.

3.  Enter your name and email address, POP3 for the Account Type,
    "secure.emailsrvr.com" for the Incoming and Outgoing mail servers,
    and your User Name and Password.

    <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/settings_screen%20copy_1.jpg" width="339" height="312" />

    Check the **Remember Password** box if you don't want to type your
    password each time you launch Outlook.

4.  Click the **More Settings** button.

5.  Click on the **Outgoing Server** tab.

6.  Check the **My Outgoing Server (SMTP) Requires Authentication** box.

7.  Leave the default setting - **Use Same Settings as My Incoming Mail
    Server**.

8.  Select the **Advanced** Tab.

9.  Set the Incoming server port to 995 and the Outgoing server port to
    465, and **Enable SSL Encryption**.

    <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Ports%20copy_0.jpg" width="368" height="273" />

10. A POP connection normally removes email messages from the server
    when they are downloaded. If you would like to leave copies on the
    server, select the **Leave a copy of messages on server** check box.
    To avoid exceeding your account&rsquo;s storage limits, indicate whether
    the server should delete messages after a certain number of days
    and/or delete messages when you manually delete them from the
    Deleted Items folder.

11. Once the settings have been updated, navigate to your Inbox and hit
    the Send/Receive button.  New emails that have been sent to your
    Rackspace account should now start appearing in your Inbox.

**NOTE:** This process will not store your old emails on our servers.
 It will only allow you to consolidate those emails with your new emails
while using the same Inbox in Outlook.

After the change, your email will look very similar to your previous
setup.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/2013-11-27_1232.png" width="435" height="600" />

