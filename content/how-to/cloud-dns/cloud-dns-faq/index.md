---
permalink: cloud-dns-faq
audit_date: '2018-03-13'
title: Cloud DNS FAQ
type: article
created_date: '2011-10-25'
created_by: Rackspace Support
last_modified_date: '2020-09-17'
last_modified_by: Cat Lookabaugh
product: Cloud DNS
product_url: cloud-dns
---

### General

{{< accordion title="What is a domain name system (DNS)?" col="in" href="accordion1" >}}

The Domain Name System (DNS) determines Internet domain name-to-address
and address-to-name resolutions. All domains and their components,
such as mail servers, use DNS to resolve to the appropriate locations. For
example, DNS is used to turn 'www.rackspace.com' into the computer addressable
IP address '207.97.209.147'.

DNS servers are usually set up in a primary-replica relationship such that failure
of the primary invokes the replica. DNS servers might also be clustered or replicated
such that changes made to one DNS server are automatically propagated to other
active servers.

{{< /accordion >}}

{{< accordion title="What types of customers or accounts can access Cloud DNS?" col="in" href="accordion2" >}}

Anyone who has a Rackspace Cloud account can access the Cloud DNS service.
Existing Cloud customers have access to the Rackspace Cloud DNS by default.

{{< /accordion >}}

{{< accordion title="Where can I find the Cloud DNS API documentation?" col="in" href="accordion3" >}}

See the [Cloud DNS Developer Guide](https://docs.rackspace.com/docs/cloud-dns/v1/developer-guide/)
for information about the Cloud DNS API.

{{< /accordion >}}

### Billing and usage

{{< accordion title="How much does this service cost?" col="in" href="accordion4" >}}

Cloud DNS is currently available at no additional cost and is intended for use
with Cloud accounts that have provisioned and active resources.
{{< /accordion >}}

### Existing product compatibility
{{< accordion title="Can this service be used for Dedicated Servers?" col="in" href="accordion5" >}}

No. The Cloud DNS service is only available for Cloud account resources. Managed
and Dedicated customers with RackConnect (that is, customers who also have a
Cloud account) have access but can only use the service to manage DNS for their
Rackspace Cloud resources.
{{< /accordion >}}

{{< accordion title="How does this work for Hybrid customers?" col="in" href="accordion6" >}}

A Hybrid customer can continue to use the [MyRackspace
Portal](https://login.rackspace.com) to manage
domains for their dedicated resources and can use Cloud DNS to
manage domains for their Cloud resources.

**Note:** Duplicate domains cannot exist between Dedicated and cloud resources.
{{< /accordion >}}
### Accessing Cloud DNS
{{< accordion title="How do I authenticate with the Cloud DNS API?" col="in" href="accordion7" >}}

The process for authenticating with the Cloud DNS API is the same as when
authenticating with all other Rackspace Cloud APIs.

To authenticate, you must supply your username and API access key in x-headers.

-  Use your Rackspace Cloud username as the username for the API. Place it in
the `XAuth-User` x-header.
-  [View and reset your API key](/support/how-to/view-and-reset-your-api-key/) in the
Rackspace Cloud Control Panel. Place it in the `X-Auth-Key` x-header.

For full authentication details, see the
[Cloud DNS Developer Guide](https://docs.rackspace.com/docs/cloud-dns/v1/developer-guide/).
{{< /accordion >}}

{{< accordion title="What account number do I use to access the service?" col="in" href="accordion8" >}}

Customers should use their existing Cloud account number.
{{< /accordion >}}

{{< accordion title="What is the difference between US and UK Cloud DNS?" col="in" href="accordion9" >}}

The functionality is the same. The only difference is that the US and the UK
each have the following separate API endpoints:

-  US = `https://dns.api.rackspacecloud.com/v1.0/1234/`
-  UK = `https://lon.dns.api.rackspacecloud.com/v1.0/1234/`
{{< /accordion >}}

### Features and functionality
{{< accordion title="What DNS management operations does the Cloud DNS API support?" col="in" href="accordion10" >}}

Customers can create, modify, remove, and list domains, subdomains, and records.

Additionally, users can search domains by filtering. We do not support filtering
records.

For a full list of supported API operations, see the [
Cloud DNS Developer Guide](https://docs.rackspace.com/docs/cloud-dns/v1/developer-guide/).
{{< /accordion >}}

{{< accordion title="What record types does Cloud DNS support?" col="in" href="accordion11" >}}

The Cloud DNS API currently supports the following record types:

-  A
-  CNAME
-  MX
-  AAAA
-  NS
-  TXT
-  SRV
-  PTR
-  SOA

**Note:** You cannot create Service-Oriented Architecture (SOA) records, which are handled by the
system, but you can modify the Time to Live (TTL) and email address.

The service supports `DKIM` and `SPF` records through formatting `TXT` records with
custom attributes indicating the record type. We do not currently support the
`SPF` `RR` type as defined in [RFC 4408](https://tools.ietf.org/html/rfc4408).

For more information about supported record types, see the
[Cloud DNS Developer Guide](https://docs.rackspace.com/docs/cloud-dns/v1/developer-guide/).
{{< /accordion >}}

{{< accordion title="Can I import and export domains?" col="in" href="accordion12" >}}

Yes, you can do this by using the API. You can import a domain from external providers by using a
valid `bind9-formatted` zone file. Similarly, you can export their domain to a
`bind9-formatted` file. Currently, you cannot transfer zones from MyRackspace
to Cloud DNS and should contact Support to request a domain transfer from
dedicated resources to Cloud resources.
{{< /accordion >}}

{{< accordion title="What are the Rackspace DNS servers?" col="in" href="accordion13" >}}

Our default DNS servers are:

-  dns1.stabletransit.com
-  dns2.stabletransit.com
{{< /accordion >}}

{{< accordion title="What type of DNS network does Rackspace use?" col="in" href="accordion14" >}}

Rackspace leverages a globally distributed Anycast network. Currently, we have
DNS servers located in Texas, Virginia, Chicago, and London. Using Anycast, we
broadcast the IP addresses for `ns.rackspace.com` and `ns2.rackspace.com` from
each location. All DNS queries generally go to the geographically-closest
name servers, giving you faster results no matter where your queries originate.
Additionally, all of our DNS servers are monitored 24/7, and if an entire
data center were to fail, or even if all of the DNS servers within a specific
data center were to fail, the DNS queries automatically start going to the
next best location.
{{< /accordion >}}

{{< accordion title="What are the limitations of the search functionality?" col="in" href="accordion15" >}}

You can search for domains within your own account. The functionality
does not allow you to search for records.
{{< /accordion >}}

{{< accordion title="Do my TTL settings expire?" col="in" href="accordion16" >}}

No.
{{< /accordion >}}

### Performance

{{< accordion title="What are the default TTLs for domains and records?" col="in" href="accordion17" >}}

When a domain or record is created, and no TTL is specified,
a default value of 3600 seconds is used. When the domain or record TTL is
supplied by the user through a create or update operation, the specified TTL values
must be 300 seconds or more.
{{< /accordion >}}

{{< accordion title="How long does it take for DNS changes to be propagated globally?" col="in" href="accordion18" >}}

Typical DNS propagation to Rackspace name servers (globally) might take up to
one minute. Propagation refers to the time between when a change is made to a
customer's records and when the change takes effect on our name servers. A large
amount of changes made simultaneously might take 2 to 3 minutes.

If a new domain is added or an existing domain is deleted, this might take
a few minutes to propagate to our Rackspace name servers.

When changing name servers for a domain, complete propagation takes about 2
days for most domains. This is enforced by the registries.
{{< /accordion >}}

{{< accordion title="Are there API rate limits?" col="in" href="accordion19" >}}

By default, all accounts have a preconfigured set of thresholds (or limits) to
manage capacity and prevent abuse of the system. The system recognizes two kinds
of limits: *rate limits* and *absolute limits*. Rate limits are thresholds that are
reset after a certain amount of time passes. Absolute limits are fixed. See the [
Cloud DNS Developer Guide](https://docs.rackspace.com/docs/cloud-dns/v1/developer-guide/)
for more information on rate limits.
{{< /accordion >}}
### Support

{{< accordion title="How many Cloud DNS domains and records can I have?" col="in" href="accordion20" >}}

By default, Cloud DNS users can have up to 500 domains (including sub-domains)
and 500 records per domain per Cloud account. When a user submits a request to
create new domains, records, or sub-domains, the system accepts the request
only if the total number of existing  domains plus requested domains, sub-domains,
or records is within the account limits. If the total exceeds the account limit,
the entire request is rejected, and a `413 Request Entity Too Large` message is
returned. See the
[Cloud DNS Developer Guide](https://docs.rackspace.com/docs/cloud-dns/v1/developer-guide/)
for more information on absolute limits.
{{< /accordion >}}

{{< accordion title="How can I create a Cloud DNS ticket?" col="in" href="accordion21" >}}

Submit Cloud DNS requests by using the standard Support ticket interface in
the Control Panel.
{{< /accordion >}}
