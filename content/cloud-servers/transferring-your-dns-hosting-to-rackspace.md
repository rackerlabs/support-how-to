---
permalink: transferring-your-dns-hosting-to-rackspace/
audit_date: 2017-07-26
title: Transfer your DNS hosting to Rackspace
type: article
created_date: '2011-11-16'
created_by: Rae D. Cabello
last_modified_date: '2017-07-26'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

Rackspace enables you to manage your DNS through our control panel while
allowing you to keep your domain registered with your current hosting provider.

To ensure a seamless transition with minimal service interruption, duplicate
the DNS records from your current host into the Rackspace Cloud Control Panel
before changing nameservers.  This can be accomplished by using the following
steps:

#.  Log into your Rackspace Cloud Control Panel, choose *Networking* from the
options at the top, and click *Cloud DNS* in the dropdown menu.

#.  On the Cloud DNS page, click *Create Domain*.  Enter the domain you are
adding along with an administrative email address that will be publicly
associated with the domain.  We recommend leaving the TTL at the default of
five minutes.  Click *Create Domain* to create the domain with these settings.

#.  This should open the Domain Details page.  Here, you can click *Add Record*
and begin entering your DNS records.  Choose the record type, and then provide
the information requested.  Leave the TTL at the default of five minutes.
Choose *Add Record* to save the new record.

#.  Add all other records to match your existing DNS host.  By entering
records with the same information listed with your original DNS host, the name
server change propagates, and end users get the same answer regardless of which
DNS host they query.

#.  Log into your domain registrar’s control panel, and change the NS servers
for your domain to:
    dns1.stabletransit.com
    dns2.stabletransit.com

Following these steps will initiate the process to switch DNS hosting to
Rackspace, but the changes may take up to 48 hours to propagate.  If you want
to change any DNS records (such as moving an A record to point to your
Rackspace cloud server), you either need to make the change on both DNS hosts,
or wait until the changes have propagated worldwide.

Making these changes will redirect all DNS queries to Rackspace, but does not
affect the registration of your domain.  You will need to maintain your
registration with the original registrar.

**Note:** DNS changes can take up to 48 hours to resolve. We recommend that you
make this switch during non-business hours or when email activity is light. No
email will be lost during this transition, but do not cancel your current DNS
hosting service until the transfer is complete.
