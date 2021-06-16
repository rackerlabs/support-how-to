---
permalink: troubleshoot-email-delivery
audit_date: '2021-06-15'
title: Troubleshoot email delivery
type: article
created_date: '2017-05-25'
created_by: William Loy
last_modified_date: '2021-06-15'
last_modified_by: Rose Morales
product: Rackspace Email
product_url: rackspace-email
---

If an incoming or outgoing message is not delivered, try the
troubleshooting recommendations in this article.

### Prerequisites

- **Applies to:** User
- **Difficulty:** Challenging
- **Time needed:** 1 hour
- **Tools required:** Online email access

For more information about prerequisite terminology, see
[Cloud Office support terminology](/support/how-to/cloud-office-support-terminology/).

Use the following steps to narrow down the reasons for incoming or outgoing
problems.

#### Troubleshoot incoming message delivery

1. Log in to [apps.rackspace.com](https://apps.rackspace.com/index.php) to
   verify that the message is not in the mailbox.

   If you see the message online and not in the 
   [local mail client](/support/how-to/cloud-office-support-terminology/#cloud-office-terminology),
   see [Troubleshoot a failed email connection](/support/how-to/troubleshoot-failed-email-connection).

   **Warning:** If you confirm no new email arrives at **apps.rackspace.com**,
   contact your account administrator and provide this article
   [Set up DNS records for Cloud Office email](/support/how-to/set-up-dns-records-for-cloud-office-email/).

2. Search for the message in your mailbox. Try a variety of search criteria to
   determine whether you misplaced the message in a sub-folder.

3. Check your **Spam**, **Junk**, and **Trash** folders for the message.

4. Recover deleted email.

   a. Log in to [apps.rackspace.com](https://apps.rackspace.com/index.php).
   b. Right-click **Trash**, for Rackspace Email users, or **Deleted Items**, for
      Exchange users, and select **Recover Deleted Email** from the menu.
   c. A pop-up box displays messages deleted within the last 14 days.

5. Verify whether rules or filters exist to move or delete messages on your
   [local mail client](/support/how-to/cloud-office-support-terminology/#cloud-office-terminology).

6. Allow time to ensure there is not a message delay.

7. Investigate whether the sender received a bounce message. If so, see
   [Common email bounce messages](/support/how-to/common-email-bounces) for possible
   solutions.

8. Determine if the message went to an alias, contact, group list, or
   distribution list because these types of addresses do not deliver any message
   flagged as spam.

   **Note:** Adding the sending address to your safelist does not correct this
   issue. No configuration allows the system to forward spam.

9. Determine whether the receiving mailbox forwards to another mailbox.
   If so, a message flagged as spam does not forward.

10. If you migrated from another provider, ensure the configuration includes the
    new server.

      After migrating your mailboxes to Rackspace Cloud Office from an external
      company, your mail client must connect to the mailbox on the new server. For
      example, if you are using Outlook to access your email, create a
      new profile that connects to your new mailbox at Rackspace. Instructions for
      configuring your mail client to connect with your migrated mailbox are at
      [emailhelp.rackspace.com](https://emailhelp.rackspace.com/).

11. If you upgraded your mailboxes at Rackspace Cloud Office, check
    your mailbox configuration.

      When you upgraded your mailbox, the system might have duplicated it on
      another server. For example, if you upgrade a mailbox from Exchange 2007 to
      Exchange 2016, your data migrates from the Exchange 2007 mailbox to a new
      mailbox on Exchange 2016. This means that you must configure your local mail
      client to connect to the mailbox on the new server. For instructions on
      configuring your mail client after upgrading, log in to
      [emailhelp.rackspace.com](https://emailhelp.rackspace.com/).

#### Troubleshoot outgoing message delivery

1. Log in to [apps.rackspace.com](https://apps.rackspace.com/index.php) and try
   to send the message again.

      If you can send a message from webmail but not from a
      [local mail client](/support/how-to/cloud-office-support-terminology/#cloud-office-terminology),
      you can verify that your SMTP settings are correct by logging in to the
      [Email Help Tool](https://emailhelp.rackspace.com/).

2. Determine whether you got a bounce message.

   If so, see [Common email bounce messages](/support/how-to/common-email-bounces) for possible solutions.

3. If you are sending from a
   [local mail client](/support/how-to/cloud-office-support-terminology/#cloud-office-terminology),
   check your **Drafts** and **Outbox** folders for the message.

   If the message is in one of those folders, attempt to resend it.

4. If you are sending to a contact, manually enter the email address and resend
   the message.

   Verify that the contact information is correct.

5. Try to send the message from a computer connected to a different Internet network.
   For example, send from your home network or an alternative office network.

   **Note:** Office network changes can cause email disruptions. Contact your
   office network administrator if the preceding test is successful on an
   alternative Internet network.

6. Verify with the recipient to see if your message ended up in a subfolder.

7. Also, ask the recipient if your message got marked as spam.

   If your message shows as spam, see 
   [Best practices for sending person-to-person email](/support/how-to/best-practices-for-sending-person-to-person-email/)
   to prevent this in the future.

### References

- [Cloud Office support terminology](/support/how-to/cloud-office-support-terminology)
- [Cloud Office Email Portal](https://apps.rackspace.com/index.php)
- [Email Help Tool](https://emailhelp.rackspace.com/)
- [Common email bounce messages](/support/how-to/common-email-bounces)
- [Troubleshoot a failed email connection](/support/how-to/troubleshoot-failed-email-connection)
