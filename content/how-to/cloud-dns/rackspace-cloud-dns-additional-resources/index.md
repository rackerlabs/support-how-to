---
permalink: rackspace-cloud-dns-additional-resources
audit_date: '2021-06-04'
title: Rackspace Cloud DNS&mdash;Additional resources
type: article
created_date: '2011-10-19'
created_by: Rackspace Support
last_modified_date: '2021-06-04'
last_modified_by: Rose Morales
product: Cloud DNS
product_url: cloud-dns
---

**Previous section:** [Rackspace Cloud DNS - API Example](/support/how-to/rackspace-cloud-dns-api-example)

For more information about our API, we encourage you to review the [Rackspace Cloud DNS API documentation](https://docs.rackspace.com/docs/cloud-dns/v1/).

### Supported record types

- **A**: IPv4 address used to map hostnames to an IP address of
    the host.
- **CNAME**: A Canonical Name Record (CNAME) points to another hostname that
    already has an **A** record associated with it. The CNAME record works
    the same as an alias.
- **MX**: Used to specify the mail server responsible for
    accepting email messages on behalf of a recipient domain.
- **SOA**: Specifies authoritative information about a domain,
    including the primary name server or servers, the email of the domain
    administrator, the domain serial number, and Time to Live (TTL).
- **AAAA**: IPv6 address used to map hostnames to an IP address of
    the host.
- **NS**: Name Server (NS) records indicate where to find the domain DNS
    hosting services. It effectively delegates a domain to
    use a set of name servers.
- **TXT**: This is a text record and is used primarily for **SPF** and
    **DKIM** records.
- **SPF**: A Sender Policy Framework (SPF) record allows administrators to
    specify which hosts may send e-mail from a given domain by
    creating a specific SPF record in the public DNS. Mail exchangers use
    the DNS to check that the  domain's administrator sanctions mail sent
    from a given domain.
- **DKIM**: DomainKeys (DKIM) is a method for associating a domain name to an
    e-mail, thereby allowing an organization to take responsibility for a
    message that a recipient can validate.
- **SRV**: Used to define the location (hostname and port) of servers used
    for a specific service.

**Next steps:** [Cloud DNS FAQ](/support/how-to/cloud-dns-faq)
