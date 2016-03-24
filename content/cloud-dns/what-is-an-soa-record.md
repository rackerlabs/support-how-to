---
permalink: what-is-an-soa-record/
node_id: 5138
title: What is an SOA record?
type: article
created_date: '2016-01-19'
created_by: Rose Contreras
last_modified_date: '2016-01-27'
last_modified_by: Catherine Richardson
product: Cloud DNS
product_url: cloud-dns
---

A Start of Authority (SOA) resource record indicates which DNS name
server is the best source of information for the specified domain. Every
domain must have an SOA record.

When you add a domain to DNS, the email address that you indicate is
added to the SOA record for the domain. This publicly associates the
email with the domain.

<img src="{% asset_path cloud-dns/what-is-an-soa-record/NewDNSPopOver.png %}" alt="" />

For example, the email address associated with the `rackspace.com`
domain is `hostmaster@rackspace.com`. You can see the SOA record for
`rackspace.com` by running the following command:

    dig rackspace.com +nssearch

The following information is returned:

    SOA ns.rackspace.com. hostmaster.rackspace.com. 1392389079 300 300 1814400 300 from server 69.20.95.4 in 12 ms.

The SOA record includes the following details:

-   The primary name server for the domain, `ns.rackspace.com`.
-   The e-mail for the domain, `hostmaster@rackspace.com`.
-   Revision number that changes whenever you update your domain.
-   Refresh time, the number of seconds before the zone should
    be refreshed.
-   Retry time, the number of seconds before a failed refresh should
    be retried.
-   Expiration time, the time, in seconds, before the data is
    considered unreliable.
-   Minimum TTL, this default applies to all resource records in the
    zone
