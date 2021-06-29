---
permalink: create-a-dmarc-policy
audit_date: '2021-06-14'
title: Create a DMARC policy
type: article
created_date: '2017-06-26'
created_by: Cory Aldrich
last_modified_date: '2021-06-14'
last_modified_by: Rose Morales
product: Rackspace Email
product_url: rackspace-email
---

DNS systems use Domain-based Message Authentication, Reporting, and Conformance (DMARC)
in conjunction with SPF and DKIM to combat email spoofing. Spoofing occurs when a
scammer uses your domain in the **From** field of an email to impersonate one of
your users. DMARC uses a policy that your email provider gives. This
policy tells the receiving email host how to treat emails sent from your domain
based on the criteria that you set. This mechanism also gives visibility into
reports on what your domain is sending and how receiving hosts treat
that mail.

This article shows how to create a DMARC policy to use with Cloud Office.

### Prerequisites

- **Applies to:** Administrator
- **Difficulty:** Moderate
- **Time needed:** 24-48 hours for DNS record changes to propagate
- **Tools required:** DNS host Administrator access

For more information about prerequisite terminology, see
[Cloud Office support terminology](/support/how-to/cloud-office-support-terminology/).

If you prefer a video tutorial, see [Rackspace Email - DMARC / DKIM: What It Is & How to Setup{{<image src="dmarc_thumb.png" alt="" title="">}}](https://emailhelp.rackspace.com/l/dmarc-dkim-records-setup).

**DMARC** enforces **SPF** and **DKIM**. DMARC is useful only if you have already set up SPF
and DKIM records. Before creating your DMARC policy, you must perform the following tasks:
  
- [**Create an SPF record policy**](/support/how-to/create-an-spf-policy)
- [**Create a DKIM record**](/support/how-to/enable-dkim-in-the-cloud-office-control-panel)
- Create a DMARC record policy.

### Considerations for DMARC

To set up DMARC the way that works best for your needs, answer these questions:

**How do you want questionable mail handled?**
  
Decide whether you want the system to reject a questionable email outright or classify it
as a *soft fail*, which means that the system further scrutinizes the email or sends it to spam.

**Who should receive DMARC reports?**

When the receiving host processes mail that comes from the domain, the host
generates reports and sends them to the address specified in the DMARC policy.

### Parts of a DMARC policy

The policy definition is the following:

- **dmarc**: Identifies the TXT record as a DMARC policy.
- **v=DMARC1**: Indicates the version of DMARC used.
- **p=quarantine**: Determines the policy action.
  - **none**: Do nothing or report only.
  - **quarantine**: Treat the mail as spam.
  - **reject**: Refuse mail that fails DKIM and SPF.
- **rua=**: Identifies the destination for the aggregate reports.
- **pct=100** Specifies how much traffic to subject to policy validation.

### Create a DMARC policy in your DNS settings

**Note:** If Rackspace does not host your DNS, you need access to your DNS
provider to add the DMARC policy. If you do not know who hosts your DNS,
see [Find DNS host](/support/how-to/find-dns-host).

To add your DMARC policy as a TXT record in the Control Panel, follow these steps:

1. Log in to the Cloud Office Control Panel.
2. In the Domains section of the home page, click the **DNS settings** link.
3. On the **DNS Settings** page, click the domain for which you want to add this record.
4. Under the **Advanced Settings** section, select **DNS records**.
5. Under **Hosting Records**, click **Add Additional Record**.
6. Select **TXT Record** for the record type, and enter the following values,
   replacing the email address example with your chosen reporting address:

   - **Type**: `TXT`
   - **Hostname**: `_dmarc`
   - **Destination**: `v=DMARC1; p=none; rua=mailto:CHOSENemail@yourdomain.com`
   - **Priority**: NA
   - **TTL**: 3600 seconds or lowest allowed

7. Click **Add Record**.

Your new settings take 24 to 48 hours to propagate. For more information on
propagation, see [DNS propagation](/support/how-to/dns-record-definitions#dns-propagation).

### Select an aggregator

Your DMARC policy is more valuable when you use an aggregator to help filter the
content of the returned reports. Without an aggregator, the reports are
in an XML format and are virtually unreadable. An aggregator formats this
information and sends out weekly reports to the email address specified. The
weekly report contains the sending source (domain or IP address) and information
about whether the message passed or failed SPF and DKIM. This information
enables you to monitor your domain activity and helps to prevent spoofing and
domain abuse.

Following are some top reporting aggregators, based on suggestions from
https://dmarc.org/resources/products-and-services/:

- [dmarcian](https://dmarcian.com)
- [250OK](https://250OK.com)
- [Agari](https://agari.com)
