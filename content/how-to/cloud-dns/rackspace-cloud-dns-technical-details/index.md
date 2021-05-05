---
permalink: rackspace-cloud-dns-technical-details
audit_date: '2018-05-16'
title: Rackspace Cloud DNS technical details
type: article
created_date: '2011-10-19'
created_by: Rackspace Support
last_modified_date: '2018-05-16'
last_modified_by: Cat Lookabaugh
product: Cloud DNS
product_url: cloud-dns
---

**Previous section:** [Rackspace Cloud DNS available features](/support/how-to/rackspace-cloud-dns-available-features)

Implementation of Rackspace Cloud DNS is available through our RESTful API. To
use our API, you should have a general understanding of Domain Name Systems (DNS) management
and be familiar with the following elements:

-   RESTful web services
-   JSON or XML data serialization formats

For the full list and technical details of all available Cloud DNS API operations, see the 
[Cloud DNS API reference](https://docs.rackspace.com/docs/cloud-dns/v1/api-reference/).

Currently available domain and record operations include those shown in the following chart:
{{< table "table  table-striped table-bordered" >}}
| Domains  | Records |
|---------|--------|
| <strong>List domains</strong>  | <strong>List records</strong> |
| Lists all domains and subdomains manageable by the specified account and displays the IDs and names.   |   Lists all records that are configured for the domain or lists the details for a specific record.  |
| <strong>List domain details</strong>   | <strong>List record details</strong>  |
| Lists the details of the specified domain and displays all details, including records. It cannot return details for a domain that has been deleted.   |   Lists the details of the specified record.  
| <strong>Create domain</strong> | <strong>Add record</strong> | 
| Based on the configuration defined in the request object, provisions one or more new DNS domains under the account specified. Failures in the validation process are non-recoverable and require the caller to correct the cause of the failure and POST the request again. | Adds new records to the domain. | 
| <strong>Modify domain</strong> | <strong>Modify record</strong> |  
| Modifies DNS domain attributes. Records cannot be added, modified, or removed. Only the Time To Live (TTL) and email address attributes of a domain can be modified. |  Modifies the configuration of a record in a domain. |
| <strong>Delete domain</strong> | <strong>Remove record</strong> |
| Removes the specified domains from the account. When a domain is deleted, its immediate resource records are also deleted from the account. By default, if a deleted domain had subdomains, each subdomain becomes a root domain and is not deleted. When a domain is deleted, purges any and all configuration data immediately. The domain cannot be recovered by using the API. In a request to remove multiple domains, a failure on a single part of the request causes the entire request to fail. | Removes a record from a domain. |
| <strong>Import domain</strong> | <strong>Export domain</strong> |
| Provisions a new DNS domain under the account specified by the BIND9-formatted file configuration contents defined in the request object. Failures in the validation process are non-recoverable and require the caller to correct the cause of the failure and POST the request again. | Provides the BIND9-formatted contents of the requested domain. This operation is intended for a single domain only, so no subdomain information is provided. |
{{< /table >}}

The [Cloud DNS API service](https://docs.rackspace.com/docs/cloud-dns/v1/) provides support for Name Server (NS), TXT and SRV records. The following detailed information describes each of these record types:

-   *NS* records indicate where the domain's DNS hosting
    services are located. They effectively delegate a domain to use a set
    of name servers.
-   *TXT* records are used primarily for Sender Policy Framework (SPF) and 
    DomainKeys Identified Mail (DKIM) records. An SPF record allows administrators to specify
    which hosts are allowed to send email from a domain by creating a
    specific SPF record in the public DNS. Mail exchangers then use
    the DNS to check that mail from a given domain is being sent by a
    host sanctioned by that domain's administrators. DKIM records are used to associate a domain name to
    an email to allow an organization to take responsibility
    for a message in a way that can be validated by a recipient.
-   *SRV* records are used to define the location (hostname and port)
    of servers used for a specific service.

For a full list of record types and their definitions, click
[here](/support/how-to/rackspace-cloud-dns-additional-resources).

**Next steps:** [Rackspace Cloud DNS API example](/support/how-to/rackspace-cloud-dns-api-example)
