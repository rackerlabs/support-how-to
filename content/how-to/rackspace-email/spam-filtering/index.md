---
permalink: spam-filtering
audit_date: '2021-07-05'
title: Spam filtering
type: article
created_date: '2017-05-24'
created_by: William Loy
last_modified_date: '2021-07-05'
last_modified_by: Rose Morales
product: Rackspace Email
product_url: rackspace-email
---

Over 90% of all email traffic is spam, although most of it never makes it to
your inbox. Spam can cost millions of dollars in business productivity and
infrastructure. Spammers also use spam to *phish* sensitive and valuable
information from companies and trick people into transferring money. Knowing
how to defend against spam and phishing attempts is the first step to keep your
information safe.

This article describes the spam filtering system used in Rackspace Cloud Office.

### Prerequisite

**Applies to:** Administrators

For more information about prerequisite terminology, see [Cloud Office support terminology](/support/how-to/cloud-office-support-terminology).

### Blocked email

Rackspace Email uses industry best practice techniques to block email spam
coming from known disreputable sources. We stop email we know with a high
degree of certainty is not from a legitimate service, including everything from
compromised servers to *spam cannon* services that send unsolicited spam across
the Internet.

Rackspace Email uses the following techniques to protect you from spam email:

- IP block lists provided by reputable services
- Blocking emails with attachment types known to exploit end-user computers
- Account admins can add senders to a Blocklist at both the domain and mailbox
  level to prevent them from reaching your inbox.

### Filtered email

If mail passes the Blocklist checks, we apply advanced content filtering to
verify spam indicators. Content filtering combines techniques to analyze email
structure and content and creates key indicators that identify patterns in
email. We combine these indicators with industry-wide feedback from email
providers across the Internet about reported spam, phishing, and viruses. The
result is an accurate, adaptive, and evolving content filtering system that
is highly effective at removing spam.

The filtering system does not apply to the sophisticated spammer. Instead, it scans all
incoming and outgoing mail traffic regardless of sender or intent, and our filters
flag message content after confirmation by the whole internet community.

### Outbound messages

Filtering outbound email protects deliverability for all users on the Rackspace
Cloud Office environment. Spam definitions change at a rapid pace, but you can
follow certain practices to prevent your message from becoming spam:

- When sending transactional, promotional, or marketing emails, see
  [Best practices for sending emails to many recipients](/support/how-to/best-practices-for-sending-emails-to-many-recipients/).

- If your personal emails to friends and business partners show as
  spam, see [Best practices for sending person-to-person email](/support/how-to/best-practices-for-sending-person-to-person-email/).

- Ask your frequent recipients to add your domain to their safelist or
  whitelist to ensure they receive your messages. For more information, see
  [Manage safelists at Rackspace Cloud Office](/support/how-to/spam-preferences-safe-lists-and-black-list-in-rackspace-email/#manage-safelists).

**Note:** The recipient's mail provider likely scans outbound messages. Each provider
          has its own policies for flagging and filtering spam.

### Inbound messages

When a legitimate message flags as spam, follow these recommendations:

- Always mark legitimate messages as *Not Spam*. This is the most effective
  method for improving the reputation of the sender and is a long-term solution.

- Inform the sender their email has spam suspicion and provide them with
  [Best practices for sending person-to-person email](/support/how-to/best-practices-for-sending-person-to-person-email/).

- Add the sender to your safelist. For more information, see
  [Manage safelists at Rackspace Cloud Office](/support/how-to/spam-preferences-safe-lists-and-black-list-in-rackspace-email/#manage-safelists).

   **Note:** Using a safelist ensures that you receive messages from the sender,
   but it does not remove a spam flag from a message.

If a message arrives in your inbox that you consider spam, report it by
moving the message to the spam folder.

**Warning:** Rackspace Cloud Office does not forward any message flagged
as spam, regardless of whether it is safelisted. The system considers any
message sent to an alias, contact, group list, or distribution list to be
forwarded and does not deliver the message if it flagged the message as spam.

### References

- [Acceptable Use Policy](https://www.rackspace.com/information/legal/aup?_ga=2.75345873.298003222.1495221511-62538955.1439921553)
- [Rackspace Cloud Office Mail Terms](https://www.rackspace.com/information/legal/mailterms)
