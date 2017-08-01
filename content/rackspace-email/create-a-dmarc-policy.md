---
permalink: create-a-dmarc-policy/
audit_date:
title: Create a DMARC Policy
type: article
created_date: '2017-06-26'
created_by: Cory Aldrich
last_modified_date: '2017-07-04'
last_modified_by: William Loy
product: Rackspace Email
product_url: rackspace-email
---

Domain-based Message Authentication, Reporting & Conformance (DMARC) is used in conjunction with SPF and DKIM to help combat email spoofing. Spoofing is when a scammer uses your domain in the "from" field of an email to impersonate one of your users. DMARC uses a policy that is given to you by your email provider, and this policy tells the receiving email host how to treat emails sent from your domain based on the criteria you set. This mechanism also gives visibility into reports on what your domain is sending, and how receiving hosts are treating that mail.

This article shows how to create a DMARC policy to use with Cloud Office.

### Prerequisites

- **Applies to:** Administrator
- **Difficulty:** Moderate
- **Time needed:** 24-48 hours for DNS record changes to propagate
- **Tools required:** DNS host Administrator access

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology/).

**Note:** DMARC enforces SPF and DKIM. DMARC will not be valuable unless you already have SPF and DKIM setup. If you aren't familiar with them, set up [SPF](/how-to/dns-record-definitions/#txt-record/) and [DKIM](/how-to/dns-record-definitions/#txt-record/) with these instructions.

### Considerations for DMARC

To set up DMARC the way that works best for you, answer these questions:

**How do you want illegitimate mail to be handled?**

Do you want it to be rejected outright, or do you want the message to be classified as a “soft fail,”? This means that the email would be further scrutinized or sent to spam.

**How do these DMARC reports work, and where do you want them to be sent?**

When the receiving host processes mail coming from your domain, they generate reports that get sent to the email address you specify in your policy. There will be more information on this reporting later on in this article.
    
**Note:** DMARC enforces SPF and DKIM. DMARC will not be valuable unless you already have SPF and DKIM setup. If you aren't familiar with them, set up [SPF](/how-to/dns-record-definitions/#txt-record/) and [DKIM](/how-to/dns-record-definitions/#txt-record/) with these instructions.

#### Set up a DMARC Policy to fit your needs:

Each part of the policy is defined as follows:

 - **_dmarc** identifies the TXT record as a DMARC policy
      - **v=DMARC1** indicates the version of DMARC used
  - **p=quarantine** is the policy action.
    - none: do nothing/reporting only
    - quarantine: treat the mail as spam
    - reject: refuse mail that fails DKIM and SPF
  - **rua=** identifies the destination for the aggregate reports
  - **pct=100** specifies how much traffic should be subject to policy validation

#### Create a DMARC Policy in your DNS Settings

**Note:** If your DNS is not hosted with us, you need access to your DNS provider to add the DMARC policy. If you do not know where your DNS is hosted, see [Find your DNS host](/how-to/find-your-dns-host/).

To add your DMARC policy as a TXT record in the Control Panel, follow these steps:

1. Log in to the Cloud Office Control Panel.
2. In the Domains section of the home page, click the **DNS Settings** link.
3. On the DNS Settings page, click the domain for which you want to add this record.
4. Under the Advanced Settings section, select **DNS Records**.
5. Under Hosting Records, click on Add Additional Record.
6. Select **TXT Record** for the record type, and enter the following, replacing the email address example with your chosen reporting address:

| Type | Hostname | Destination | Priority | TTL |
| --- | --- | --- | --- | --- |
| TXT | _dmarc | v=DMARC1; p=none; rua=mailto:CHOSEN-EMAIL@YOURDOMAIN.COM | NA |  3600 seconds or lowest allowed

7. Click **Add Record**

Your new settings take 24 to 48 hours to propagate. For more information on propagation, see [DNS propagation](/how-to/dns-record-definitions#dns-propagation). In addition to this, your DMARC policy is much more valuable when using an aggregator to help filter the content of these emails that will be returned. The following are some of top reporting aggregators:

- [dmarcian](http://dmarcian.com);
- [250OK](http://250OK.com);
- [Agari](http://agari.com);

These are the most well-known providers based on suggestions from https://dmarc.org/resources/products-and-services/.

**Warning:** If you do not use an aggregator, your DMARC reports will be unreadable.  

Without selecting an aggregator for DMARC, you will receive reports to the email you specified in an XML format. Interpreting this raw data is difficult, and takes time away from your daily business. An aggregator's job is to format this information and send out weekly reports to the email address specified, which contains the sending source (domain or IP) along with whether the message passed or failed SPF and DKIM. This allows you to monitor your domain's activity and helps to prevent spoofing and domain abuse.
