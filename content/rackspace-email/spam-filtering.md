---
permalink: spam-filtering/
audit_date: '2017-06-05'
title: Spam filtering
type: article
created_date: '2017-05-24'
created_by: William Loy
last_modified_date: '2017-11-17'
last_modified_by: William Loy
product: Rackspace Email
product_url: rackspace-email
---

This article explains the spam filtering system, used in Rackspace Cloud Office.

### Prerequisite

**Applies to:** Administrators

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology).

### Spam filtering system

Rackspace estimates that over 90% of all email traffic is spam, although most spam never makes it to the inbox. Millions of dollars in business productivity and additional infrastructure expenses are often lost due to spam. To make matters worse, email is being used to ‘phish’ sensitive and valuable information from companies and trick people into transferring money. To defend against email spam and phishing, you must stay one step ahead of the evolving threat.


#### Blocked Email

Rackspace Email uses several industry best practice techniques to block email spam coming from known disreputable sources. This comprises email we know, with a high degree of certainty, is not from a legitimate service. This covers everything from compromised servers to ‘spam cannon’ services that send unsolicited spam across the internet. These techniques include the use of IP block lists provided by reputable services well known throughout the email industry, as well as blocking emails with attachment types known to exploit end-user computers. We also provide admins with the ability to blacklist senders at both the domain and mailbox level. Any mail matching these blacklists are blocked.


#### Filtered Email

If mail passes the blocked email checks, we apply advanced content filtering to verify whether it is considered spam. Content filtering combines many techniques to analyze email structure and content, and create key indicators that identify patterns in email. These indicators are combined with industry-wide feedback from email providers across the internet about reported spam, phishing, and viruses. The end result is an accurate, adaptive, and evolving content filtering system that is highly effective at removing spam.


The filtering system does not apply only to the “sophisticated spammer”. This system scans all incoming and outgoing mail traffic regardless of sender or intent.  Our filters will flag only message content that has been deemed as spam by the whole of the internet community.

#### Outbound messages

Filtering outbound email protects deliverability for all users on the Rackspace Cloud Office environment.
Spam definitions change rapidly, but you can follow certain practices to prevent your message from becoming spam:

- When sending transactional, promotional, or marketing emails see [Best practices for sending emails to many recipients](/how-to/best-practices-for-sending-emails-to-many-recipients/).

- If your personal emails to friends and business partners are flagged as spam see [Best practices for sending person to person email](/how-to/best-practices-for-sending-person-to-person-email/).

- Ask your frequent recipients to add your domain to their safelist or whitelist to ensure your messages are delivered to their inboxes. For more information, see [Manage Safelists at Rackspace Cloud Office](/how-to/spam-preferences-safe-lists-and-black-list-in-rackspace-email/#manage-safelists).

**Note:** Outbound messages are likely being scanned by the recipient's mail provider. Each provider has its own policies for flagging and filtering spam.

#### Inbound messages

When a legitimate message is flagged as spam, follow these recommendations:

- Always “unflag” or mark legitimate messages  as “Not Spam.” This is the most effective method for improving the reputation of the sender and is a long-term solution.

- Advise the sender that they are being flagged as spam and provide them with [Best practices for sending person to person email](/how-to/best-practices-for-sending-person-to-person-email/).

- Add the sender to your safelist. See [Manage Safelists at Rackspace Cloud Office](/how-to/spam-preferences-safe-lists-and-black-list-in-rackspace-email/#manage-safelists).

   **Note:** Safelisting ensures that the messages from the sender are delivered to your inbox, but it does not remove a spam flag from a message.

**Warning:** Rackspace Cloud Office does not forward any message that is flagged as spam, regardless of whether it is safelisted. If the message is sent to an Alias, Contact, Group List, or Distribution List, it is considered to be forwarded and is not delivered if the message is flagged as spam.

### References

- [Acceptable Use Policy](https://www.rackspace.com/information/legal/aup?_ga=2.75345873.298003222.1495221511-62538955.1439921553)
- [Rackspace Cloud Office Mail Terms](https://www.rackspace.com/information/legal/mailterms)
