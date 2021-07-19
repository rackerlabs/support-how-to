---
permalink: dns-api-calls-with-pitchfork/
audit_date: '2021-07-19'
title: DNS API calls with Pitchfork
type: article
created_by: Rocio Rodriguez
created_date: '2021-05-20'
last_modified_date: '2021-07-19'
last_modified_by: Rose Morales
product: Cloud DNS
product_url: cloud-dns
---

### Pitchfork login

Navigate to the [API tool Pitchfork](https://pitchfork.rax.io/).

To learn how to log in and use Pitchfork in
[Pitchfork—the Rackspace Cloud API web application](/support/how-to/pitchfork-the-rackspace-cloud-api-web-application).

### DNS API calls with Pitchfork

1. Click the **DNS** section to pull up the DNS API calls.
2. Navigate to the section you prefer and click **Details** to expand the
   options.
3. Fill the **Parameters** if needed and click **Send API Call**.

    - **Domains:** These calls will let you clone, create, export, import, list
    domain changes since, list, modifiy multiple, remove, search, update or show
    domain changes.
    - **Subdomains:** This call provides a list of all DNS domains that are
    subdomains for a specified domain.
    - **Records:** These calls will let you add, list, remove, search, show or
    update records on a domain.
    - **Reverse DNS** These calls will let you add, list, remove, show or update
    pointer record details.
    - **Jobs:** This call provides a list of all job details.
    - **Limits:** These calls will let you list limit, specific or all limits.

4. You will get a JSON response with the information you requested.

### Example of List Domains Response Body

 ```"images": [
{
    "domains": [
        {
            "updated": "2019-04-16T23:23:51.000+0000", 
            "name": "test.com", 
            "created": "2013-05-06T18:34:15.000+0000", 
            "emailAddress": "test@stabletransit.com", 
            "ttl": 300, 
            "id": 3704990, 
            "accountId": 99999
        }, 
        {
            "updated": "2019-04-16T23:23:51.000+0000", 
            "name": "example.net", 
            "created": "2013-09-07T00:08:41.000+0000", 
            "emailAddress": "example@stabletransit.com", 
            "ttl": 300, 
            "id": 3861699, 
            "accountId": 99999
        }, 
        {
            "updated": "2019-04-16T23:23:51.000+0000", 
            "name": "examplecall.com", 
            "created": "2013-09-07T00:09:10.000+0000", 
            "emailAddress": "examplecall@stabletransit.com", 
            "ttl": 300, 
            "id": 3866992, 
            "accountId": 99999
        }, 
    ], 
    "totalEntries": 3, 
    "links": [
        {
            "href": "https://dns.api.rackspacecloud.com/v1.0/912972/domains?limit=100&offset=100", 
            "rel": "next"
        }
    ]
}
 ```
