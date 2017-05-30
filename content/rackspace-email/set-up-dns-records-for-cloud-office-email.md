---
permalink: set-up-dns-records-for-cloud-office-email/
audit_date: '2017-05-25'
title: Set up DNS records for Cloud Office Email
type: article
created_date: '2014-08-15'
created_by: William Loy
last_modified_date: '2017-05-30'
last_modified_by: William Loy
product: Rackspace Email
product_url: rackspace-email
---

This article shows how to initially configure your domain's DNS to start receiving email at Rackspace Cloud Office.

### Prerequisites

- **Applies to** -  Administrators
- **Difficulty** - Moderate
- **Time needed** - Approximately 30 minutes to configure and an additional 24-48 hours to propagate
- **Tools required** - DNS host administrator access

You will also need access to update DNS entries for your domain. If you do not know where your DNS is hosted, see [Find your DNS host](/how-to/find-dns-host).

### Configure DNS to send and receive email

DNS tells the world how email should be handled and routed for your domain. This guide will allow you to setup your domain to allow proper routing of incoming and outgoing email as well as easy user client setups.

**Note:** It is important to follow all steps and carefully input settings exactly as described below.

The following DNS entries are required to properly use email services at Rackspace:

- **MX records** tell other email providers where to send email. Your MX Records should point to Rackspace. [More on MX Records](/how-to/dns-record-definitions#mx-record).

- **SPF Records** reduce unwanted SPAM, spoofing from your domain, as well as help ensure best-possible deliverability of your outgoing emails. [More on SPF Records](/how-to/dns-record-definitions#txt-record).

- **Autodiscover Records** allow for full functionality of calendar features (free/busy information) and easier email client setups. [More on Autodiscover Records](/how-to/dns-record-definitions#cname-record).

**Warning:** Changing DNS settings for a domain that was previously hosting email elsewhere will require user email clients and devices to be reconfigured to point to Rackspace. Send your users to [https://emailhelp.rackspace.com](http://emailhelp.rackspace.com) to assist them with new settings.

1.	Log into your domain DNS host control panel, as identified above.

2.	Set the DNS entries to the following. Ensure there are no other MX record entries or you will experience email complications. For more information, see [Add or edit entries for your DNS host](/how-to/find-dns-host-add-or-edit-entries-for-your-dns-host).

   **Note:** The field headings below may vary slightly depending on your DNS host. Reference your DNS host for further information.

   | Type | Hostname | Destination | Priority | TTL |
   | --- | --- | --- | --- | --- |
   | MX | @ or left blank | **mx1.emailsrvr.com**               | 10 | 3600 seconds or lowest allowed |
   | MX | @ or left blank | **mx2.emailsrvr.com**              | 20 | 3600 seconds or lowest allowed |   
   | TXT | @ or left blank | **v=spf1 include:emailsrvr.com ~all** | N/A | 3600 seconds or lowest allowed |
   | CNAME | autodiscover | **autodiscover.emailsrvr.com**       | N/A | 3600 seconds or lowest allowed |

3.	Save your changes.

You have now successfully setup your DNS for your domain, allowing users to send and receive email from your Rackspace Hosted Email solution.

Your new settings take 24 to 48 hours to propagate to the world. For more information on why DNS settings take so long to propagate, see [DNS propagation](/how-to/dns-record-definitions#dns-propagation).

### Related articles

- [Set up DNS for Cloud Office Skype for Business](/how-to/set-up-dns-records-for-cloud-office-skype-for-business)
