---
permalink: spam-filtering
audit_date: '2017-11-29'
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
infrastructure. Spam email is also used to *phish* sensitive and valuable
information from companies, and to trick people into transferring money. Knowing
how to defend against spam and phishing attempts is the first step to keep your
information safe.

This article describes the spam filtering system used in Rackspace Cloud Office.

### Prerequisite

**Applies to:** Administrators

For more information about prerequisite terminology, see [Cloud Office support terminology](/support/how-to/cloud-office-support-terminology).

### Blocked Email

Rackspace Email uses industry best practice techniques to block email spam
coming from known disreputable sources. This comprises email we know with a high
degree of certainty is not from a legitimate service, including everything from
compromised servers to *spam cannon* services that send unsolicited spam across
the Internet.

The following techniques are some of the methods used by Rackspace Email to
protect you from spam email:

- IP block lists provided by reputable services
- Blocking emails with attachment types known to exploit end user computers
- Account admins can add senders to a Blocklist at both the domain and mailbox
  level, to prevent them from reaching your inbox.

### Filtered Email

If mail passes the Blocklist checks, we apply advanced content filtering to
verify spam indicators. Content filtering combines techniques to analyze email
structure and content, and creates key indicators that identify patterns in
email. These indicators combined with industry-wide feedback from email
providers across the internet about reported spam, phishing, and viruses. The
end result is an accurate, adaptive, and evolving content filtering system that
is highly effective at removing spam.

The filtering system does not apply to the sophisticated spammer it scans all
incoming and outgoing mail traffic regardless of sender or intent. Our filters
flag message content after confirmation by the whole internet community.

### Outbound messages

Filtering outbound email protects deliverability for all users on the Rackspace
Cloud Office environment. Spam definitions change at a rapid pace, but you can
follow certain practices to prevent your message from becoming spam:

- When sending transactional, promotional, or marketing emails, see
  [Best practices for sending emails to many recipients](/support/how-to/best-practices-for-sending-emails-to-many-recipients/).

- If your personal emails to friends and business partners are flagged as
  spam, see [Best practices for sending person to person email](/support/how-to/best-practices-for-sending-person-to-person-email/).

- Ask your frequent recipients to add your domain to their safelist or
  whitelist to ensure your messages are delivered to their inboxes.
  For more information, see
  [Manage Safelists at Rackspace Cloud Office](/support/how-to/spam-preferences-safe-lists-and-black-list-in-rackspace-email/#manage-safelists).

**Note:** Outbound messages are likely scanned by the recipient's mail provider. Each provider has its own policies for flagging and filtering spam.

### Inbound messages

When a legitimate message is flagged as spam, follow these recommendations:

- Always mark legitimate messages as “Not Spam”. This is the most effective
  method for improving the reputation of the sender and is a long-term solution.

- Inform the sender their email has spam suspicion and provide them with
  [Best practices for sending person to person email](/support/how-to/best-practices-for-sending-person-to-person-email/).

- Add the sender to your Safelist. For more information, see
  [Manage Safelists at Rackspace Cloud Office](/support/how-to/spam-preferences-safe-lists-and-black-list-in-rackspace-email/#manage-safelists).

   **Note:** Using a Safelist ensures that the messages from the sender are
   delivered to your inbox, but it does not remove a spam flag from a message.

If a message arrives to your inbox that you consider to be spam, report it by
moving the message to the spam folder.

**Warning:** Rackspace Cloud Office does not forward any message flagged
as spam, regardless of whether it is safelisted. If the message is sent to an
alias, contact, group list, or distribution list, it is considered to be
forwarded and is not delivered if the message is flagged as spam.

### References

- [Acceptable Use Policy](https://www.rackspace.com/information/legal/aup?_ga=2.75345873.298003222.1495221511-62538955.1439921553)
- [Rackspace Cloud Office Mail Terms](https://www.rackspace.com/information/legal/mailterms)
