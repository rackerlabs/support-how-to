---
permalink: dns-record-definitions
audit_date: '2021-06-14'
title: DNS record definitions
type: article
created_date: '2017-05-17'
created_by: William Loy
last_modified_date: '2021-06-14'
last_modified_by: Rose Morales
product: Rackspace Email
product_url: rackspace-email
---

This article provides a brief overview of common email-related DNS records.

If you need to configure your DNS for Rackspace Cloud Office Email products, see
[Set up DNS records for Cloud Office email](/support/how-to/set-up-dns-records-for-cloud-office-email).

### Prerequisite

- **Applies to:** Administrators and Users

For more information on prerequisite terminology, see 
[Cloud Office support terminology](/support/how-to/cloud-office-support-terminology).

### DNS records

The following DNS record definitions also include an example of how to configure
these records at your DNS hosting provider:

- [A record](#a-record)
- [MX record](#mx-record)
- [CNAME record](#cname-record)
- [TXT record](#txt-record)

#### A record  

The Address (A) record is the most basic DNS record type. It
points a domain or subdomain to an IP address.

Example:

| Type | Hostname | Destination | TTL |
| --- | --- | --- | --- | --- |
| A | **blog.example.com** | XXX.XX.XX.XXX | 3600 |

#### MX record

Mail Exchanger (MX) records specify a mail server responsible for accepting
messages addressed to your domain. Without these records, emails addressed to
your domain cannot find your mailbox. Think of it as sending a letter to an
address that does not exist. The system returns the email to the sender if the MX
records don't exist.

Example:

| Type | Hostname | Destination | Priority | TTL |
| --- | --- | --- | --- | --- |
| MX | @  | **mx1.emailsrvr.com** | 10 | 3600 |
| MX | @  | **mx2.emailsrvr.com** | 20 | 3600 |

**Note**: Email hosts might ask for multiple MX record entries. These examples
are actually the MX records for Rackspace Cloud Office. We require two records
entries in case the first MX server experiences a disruption. This
redundancy ensures you still receive your email.

#### CNAME record

Canonical Name (CNAME) records specify that a domain name is an alias for another domain.

Example:

| Type | Hostname | Destination | TTL |
| --- | --- | --- | --- |        
| CNAME | autodiscover | **autodiscover.emailsrvr.com** | 3600 |

**Note:** A common CNAME record entry is an Autodiscover Record. The example
shown is the CNAME record used by our Rackspace Cloud Office users to redirect
their **autodiscover.example.com** subdomain to our Autodiscover server
(**autodiscover.emailsrvr.com**).

#### TXT record

External sources refernce text (TXT) records to check for domain-specific
policies such as SPF, DKIM, and DMARC.

Example:

| Type | Hostname | Destination | TTL |
| --- | --- | --- | --- |
| TXT | @ | **v=spf1 include:emailsrvr.com ~all** | 3600 |

Following are some common email-related TXT records:

- **Sender Policy Framework (SPF)** records help recipient mail servers identify
  unauthorized use of your domain in the form of forgeries (spoofing).

   **Note:** If you send email from other providers on behalf of your domain, be
   sure to include their sending servers in the same SPF record entry. Do not
   create multiple SPF records.

- **DomainKeys Identified Mail (DKIM)** records assign a digital signature to
  mail sent from your domain, marking it as authorized mail sent from your
  domain. If you require instruction to enable DKIM for your Rackspace Cloud
  Office email, see [Enable DKIM in the Cloud Office Control Panel](/support/how-to/enable-dkim-in-the-cloud-office-control-panel/).

- **Domain Message Authentication Reporting and Compliance (DMARC)** records
  indicate to recipient mail servers that messages sent from that domain are
  employing DKIM and SPF sending policies. The recipient mail server then
  validates the message that you sent by using your DKIM and SPF policies.

**Note:** SPF, DKIM, and DMARC records are important because of increased
“spoofing” and “phishing” attempts. Mail recipients are adopting these methods
of sender authentication to combat malicious email. This authentication
protects those to whom you are sending mail, and it also helps identify the mail
you send as legitimate.

### DNS propagation

When you add or edit one of the preceding records in your DNS zone file, the update must
go through a propagation period. The industry standard for DNS propagation time
is 24-48 hours.

For example, if you change your domain MX records, the change might take up
to 48 hours to complete. The propagation takes so long because your domain is
associated with an IP address in thousands of databases worldwide.
