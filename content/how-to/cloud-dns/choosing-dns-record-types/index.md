---
permalink: choosing-dns-record-types
audit_date: '2021-05-26'
title: Choosing DNS record types
type: article
created_date: '2012-07-24'
created_by: Rackspace Support
last_modified_date: '2021-05-26'
last_modified_by: Rose Morales
product: Cloud DNS
product_url: cloud-dns
---

Domain Name Systems (DNS) use different record types for different purposes.
This article helps you determine which record type you should use when creating
a DNS record in the [Cloud Control Panel](https://login.rackspace.com/).

#### A or AAAA

Type A is an IPv4 address record. Type AAAA is an IPv6 Address record, so use this
record type if your server has an IPv6 address as a target.

Use an A or AAAA record to point to an IP address. In simple cases, you might
have a single A or AAAA record as your base record pointing to a single IP
address. Often, there are A or AAAA records that point to different IP addresses.

**Note:** If you have a base record (not required), it must be an A or AAAA
record. For example, you could have **www.mydomain.com** as an A record that
points to `1.2.3.4`, and **www.domain.com** might be a CName record that points
to **www.myotherimportantdomain.com**. Likewise, you might have a
**mail.domain.com** record pointing to `5.6.7.8`.

#### Canonical name (CName)

Use a CName record to point to another domain name. For example, point
**mail.mydomain.com** to **mydomain.com**.

#### Mail exchange (MX)

Use an MX record for mail delivery. For example, creating an MX record for
**domain.com** enables you to set up an email address like
**mailto:mike@domain.com**.

#### Name server (NS)

Use an NS record to delegate an authoritative DNS server for a domain or
subdomain.

#### Server locator record (SLR)

Use an SLR to assign a host and port for certain services, such as a Lightweight
Directory Access Protocol (LDAP), for a domain.

#### Text (TXT)

Use a TXT record to store data types, such as Sender Policy Framework (SPF) or
DomainKeys Identified Mail (DKIM) records.

### External links

<https://en.wikipedia.org/wiki/List_of_DNS_record_types>: This Wikipedia page provides a listing of resource records
stored in the DNS [zone files](https://en.wikipedia.org/wiki/Zone_file).
