---
permalink: migrating-from-a-pop-server-to-rackspace-email-imap-using-outlook/
audit_date: '2021-02-05'
title: Migrate from a POP server to Rackspace Email IMAP using Outlook 
type: article
created_date: '2013-11-19'
created_by: Milton Prado
last_modified_date: '2021-02-05'
last_modified_by: Rose Morales
product: Rackspace Email
product_url: rackspace-email
---

POP email is typically stored locally on a computer and removed from the mail
server after being downloaded by the client. In many cases, this data cannot be
migrated with our migration tool when it does not exist on your source mail
server. The steps in this article walk you through performing a manual migration
of POP data via Outlook to a Rackspace Email account via IMAP.

You accomplish this task by adding your new Rackspace Email IMAP account to the
same profile that your POP account is on. This change enables you to move all of
the locally stored email to your new Rackspace Email account.

To learn more about the differences between POP and
IMAP, see [IMAP and POP mail protocol comparison](/support/how-to/imap-and-pop-mail-protocol-comparison).

### Prerequisites

Before performing the steps, ensure that mailboxes have already been created on
the Rackspace environment and that the MX records have been updated so that
email is routing correctly to Rackspace.

- [Add Rackspace Email mailboxes](/support/how-to/add-rackspace-email-mailboxes)
- [Set up DNS records for Cloud Office email and Skype for Business](/support/how-to/set-up-dns-records-for-cloud-office-email-and-skype-for-business)

### Change settings

For increased security, we recommend that you use our secure (SSL) servers. If
your internal system configurations require non-SSL ports, those settings are
available in the article referenced previously, [IMAP and POP mail protocol comparison](/support/how-to/imap-and-pop-mail-protocol-comparison).

1. In Outlook, navigate to Account Settings:

   **Outlook 2013/2016: File > Account Settings > Account Settings**

2. To add your IMAP account, click the **New** button.

3. Enter your name and email address, **IMAP** for the account type,
    **secure.emailsrvr.com** for the incoming and outgoing mail servers, and
    your user name and password.

    {{<image src="settings_screenIMAPcopy_0.jpg" alt="" title="">}}

4. Select the **Remember Password** check box if you don't want to type your
    password each time you launch Outlook.

5. Click the **More Settings** button.

6. Click the **Outgoing Server** tab.

7. Select the **My Outgoing Server (SMTP) Requires Authentication** check box.

8. Leave the default setting, **Use Same Settings as My Incoming Mail Server**.

9. Click the **Advanced** tab.

10. Set the incoming port to **993** and the outgoing port to **465**, and
    enable SSL encryption.

    {{<image src="portsimapcopy.jpg" alt="" title="">}}

11. Navigate to your Inbox and note that your new IMAP account is listed in the
    left folder pane. Click on the account to expand the folders. You should see
    mail items for that account start to appear.

    {{<image src="IMAPaccount.png" alt="" title="">}}

12. Now that you have added your Rackspace account via IMAP, you can
    drag emails from your POP inbox to your IMAP inbox. As items start moving
    over, those emails will automatically upload to our server and will be
    visible across all of your devices that connect via IMAP to that account.

    **NOTE:** Depending on the number of emails in your POP account, this
    process can take a while. You can also consider moving emails over in
    batches by selecting groups of email messages. After you've confirmed that
    all emails have moved to the new account, you can remove the configuration
    for the POP account as it will no longer be needed.

After the change, your email will look similar to the following screenshot.

{{<image src="2013-11-27_1204.png" alt="" title="">}}
