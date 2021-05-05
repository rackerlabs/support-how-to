---
permalink: choosing-dns-record-types
audit_date:
title: Choosing DNS record types
type: article
created_date: '2012-07-24'
created_by: Rackspace Support
last_modified_date: '2018-10-23'
last_modified_by: Kate Dougherty
product: Cloud DNS
product_url: cloud-dns
---

Domain Name Systems (DNS) use different record types for different purposes. This
article helps you determine which record type you should use when
creating a DNS record in the [Cloud Control Panel](https://login.rackspace.com/).

#### A or AAAA

Use an A or AAAA record to point to an IP address. In simple cases, you might
have only a single A or AAAA record as your base record pointing to a
single IP address. However, often you have several A or AAAA
records that point to different IP addresses.

**Note:** If you have a base record (not required), 
it must be an A or AAAA record. For example, you could have 
**www.mydomain.com** as an A record that points to `1.2.3.4`, and 
**www.domain.com** might be a CName record that points to  
`www.myotherimportantdomain.com`.  Likewise, you might have a 
**mail.domain.com** record pointing to `5.6.7.8`.

Type A is an IPv4 address record.

Type AAAA is an IPv6 Address record. Use this record type only if your server
has an IPv6 address to which to point.

#### Canonical name (CName)

Use a CName record to point to another record.

#### Mail exchange (MX)

Use an MX record for mail delivery. For example, creating an MX record for **domain.com** would allow you to set up an email address like `mailto:mike@domain.com`.

#### Name server (NS)

Use an NS record to delegate an authoritative DNS server for a domain or subdomain.

#### Server locator record (SLR)

Use an SLR to designate a host and port for certain services, such as a Lightweight 
Directory Access Protocol (LDAP), for a domain.

#### Text (TXT)

Use a TXT record to store data types such as Sender Policy Framework (SPF) or DomainKeys Identified Mail (DKIM) records.

### External links

<https://en.wikipedia.org/wiki/List_of_DNS_record_types>: This Wikipedia page provides a listing of resource records
stored in the [zone files](https://en.wikipedia.org/wiki/Zone_file) of the DNS.
