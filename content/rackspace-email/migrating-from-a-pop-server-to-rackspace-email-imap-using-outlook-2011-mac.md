---
node_id: 3794
title: Migrating from a POP server to Rackspace Email IMAP using Outlook 2011 (MAC)
type: article
created_date: '2013-11-25'
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
through performing a manual migration of POP data in Outlook 2011 for
Mac to a Rackspace Email account via IMAP.

We'll accomplish this task by adding your new Rackspace Email IMAP
account to the same profile that your POP account is on. This change
will allow you to easily move all of the locally stored email to your
new Rackspace Email account.

If you would like to learn more about the differences between POP and
IMAP, please see the help topic, [IMAP vs.
POP](/how-to/imap-and-pop-mail-protocol-comparison).

### Prerequisites

Before performing the steps below, make sure that mailboxes have already
been created on the Rackspace environment and that the MX records have
been updated so to that email is routing correctly to Rackspace.

-   [How to create
    mailboxes](/how-to/add-rackspace-email-mailboxes)
-   [How to change mx
    records](/how-to/set-up-dns-records-for-cloud-office-email-and-skype-for-business)

### Export Outlook Data

Before you can import your data into Rackspace Email you'll need to
export it to a file from Outlook 2011.

1.  Go to the **File** menu and select **Export.** A new window
    will appear.

2.  Select **Outlook for Mac Data File (.olm)** for the file type.

3.  Select the items you&rsquo;d like to export.

4.  Press the **purple arrow** in the bottom-right-hand corner of the
    window to move to the next page.  *Note: Only mail data will sync
    from Outlook 2011 to Rackspace Email.  All other items will continue
    to be stored locally.*

    <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Export_Shot_Mac.png" width="405" height="356" />

5.  Choose whether you'd like to delete the items from your local client
    after export. Press the **purple arrow** to continue.

    <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Delete.png" width="405" height="354" />

6.  A new window will appear asking where you&rsquo;d like to save the file.
     Choose a location that is easy to remember such as the **Desktop**.

    <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Location_file%20copy.jpg" width="515" height="325" />

The items will now be exported.  You will see a progress bar on your
screen letting you know how much of the process has completed.

### Import into Rackspace Email

When you import your mail into Rackspace Email, you can choose to either
leave your old mailbox configured in Outlook 2011 or remove it. In this
example, we will remove the mailbox and setup the Rackspace Email
mailbox by itself via IMAP.

To setup your Rackspace Email mailbox as IMAP see the following guide:
[How to setup Rackspace Email via IMAP in Outlook
2011](/how-to/help-tool-for-hosted-email-and-skype-for-business).

For increased security, we recommend that you use our secure (SSL)
servers. If your internal system configurations require non-SSL ports,
those settings are available in the article referenced previously, [IMAP
vs.
POP](/how-to/imap-and-pop-mail-protocol-comparison).

When your Rackspace Email account is set up in Outlook, you can import
the .olm into the new mailbox.

1.  Click **File **&gt; **Import** to import the .olm file.  A pop-up
    window should appear.

2.  Select **Outlook Data File (.pst or .olm)** and then click on the
    **purple arrow** on the bottom-right-hand corner of the window
    to continue.

    <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Import.png" width="394" height="348" />

3.  On the next page select **Outlook for Mac Data File (.olm)** and
    then click on the **purple arrow**.

4.  In the new window that appears, select the location of the .olm file
    and then click on the **Import** button.  You will see a progress
    bar while the data is imported.

    <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Import_2%20copy.jpg" width="550" height="344" />

5.  Move items from the .olm to the newly configured Rackspace
    Email mailbox.

When the process completes you will see a new section in the left-hand
sidebar of Outlook 2011 titled **On My Computer.  **In this section you
will be able to see the mail you exported from your previous
account. You can either drag and drop individual items into your new
mailbox or drag and drop the entire Inbox folder.  *Note: You may want
to create a new folder in your Rackspace Email account to help keep
track of the items you have imported.*

 <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/2013-11-25_1013%20copy_0.jpg" width="199" height="660" />

Once the items are moved into the Rackspace Email account in Outlook
2011, it will start to sync with Webmail and any other device connected
as IMAP to this mailbox.

