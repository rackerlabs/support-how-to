---
permalink: split-domain-routing/
audit_date: '2021-02-15'
title: Set up split domain routing
type: article
created_date: '2011-12-30'
created_by: Rackspace Support
last_modified_date: '2021-02-15'
last_modified_by: Rose Morales
product: Rackspace Email
product_url: rackspace-email
---

Split domain routing (SDR) allows you to have a single domain's
mailboxes distributed between our system and an external system, working
together as if they were in one environment. You use this primarily when
you are migrating a large number of mailboxes over to our system from another
server over an extended period of time.

You can move mailboxes in batches to make the move more manageable for
administrators and to make the transition almost seamless for the users.
Though it is not common, you can also use SDR when you need to maintain
some mailboxes on an existing system for an extended period of time or
permanently.

If SDR is a permanent feature of your setup, they can point to
either your external mail server or us. You might want to point your MX
records to Rackspace because then all your messages get the benefit of
our spam and anti-virus filtering instead of just the Rackspace-hosted
mailboxes.

### Setting up SDR

There are two parts to setting up SDR, and they relate to enabling our
system and the external system to have two-way communication. If you are
using SDR as part of a migration, you should keep your MX records
for the domain pointing to your existing server (described as your
external mail server in this documentation). After the migration
completes, you can switch them to the Rackspace MX records listed here:
[Set up DNS records for Cloud Office email and Skype for
Business](/support/how-to/set-up-dns-records-for-cloud-office-email-and-skype-for-business).

{{<image src="EASplitDomainRouting.png" alt="" title="">}}

### Enabling SDR through the Cloud Office Control Panel

When you enable SDR, our environment forwards to your external
server any messages addressed to recipients on your domain that do not
exist in our system. To enable it, you need the hostname of your external
mail server (usually one of the MX records that point to your external
system) and a valid email address within the designated domain hosted on
that external mail server. We use this address only to validate the
server. You must also open port `25` on the external mail server so that
our system can connect to it.

{{<image src="EASplitDomainRouting2.png" alt="" title="">}}

#### Enable SDR

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com).
2. Select **Domains**.

    {{<image src="a.png" alt="" title="">}}

3. Click the **Split Domain** link.

### Configuring SDR from your own external server to Rackspace

This type of functionality has several names, including
*non-authoritative mail delivery* or *message routing for a shared address
space*. The idea is to set up the external server so that if it cannot
deliver a message locally, the server forwards to another system
(Rackspace). Different mail systems have their own procedures for
configuring this.

The following Microsoft articles show how to accomplish this:

- [Exchange Server 2007](https://bit.ly/rE6YBR)
- [Exchange Server 2010](https://bit.ly/CQy7)

### Subdomain message routing

We suggest that you use subdomain message routing to route messages from your
external server back to Rackspace. Subdomain routing uses contacts (or
forwards) set up on your external system to route the messages to a
subdomain email address. YOu should add this same subdomain as a
domain alias on our system in order for this to work.

Make sure you have the following elements in place:

-   A subdomain created with your DNS host pointing to Rackspace MX
    records: For example, **rackspace.example.com** with its own set of MX records
    pointing to **mx1.emailsrvr.com**.
-   Contacts (aliases) created on the external system for each
    mailbox hosted by Rackspace. Your contact must forward the
    **yourdomain.com** address to the **rackspace.example.com** address. For
    example, **user@example.com** (on your external server) should have a
    forward set to **user@rackspace.example.com**. Your server then sees the
    **@rackspace.example.com** address and query DNS, which
    resolves back to **mx1.emailsrvr.com** and delivers to the user in the
    Rackspace environment.
-   Ensure that you have requested your **rackspace.example.com**
    subdomain as a *domain alias*. To do this, contact Support (chat, phone call, or open a ticket).

{{<image src="EASplitDomainRouting6.png" alt="" title="">}}

If Rackspace is your DNS host, enter this subdomain name in the Mail Records (MX) section of the DNS Settings
page in the Control Panel.

**Note:** For a migration, when changing the MX records, ensure that you are changing them for the new subdomain
(such as, **rackspace.example.com**) and not the primary domain. After all mailboxes are on our system, you should
change the MX records for the primary domain.
