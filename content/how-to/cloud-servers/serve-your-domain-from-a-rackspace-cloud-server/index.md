---
permalink: serve-your-domain-from-a-rackspace-cloud-server
audit_date: '2020-10-05'
title: Serve Your Domain From a Rackspace Cloud Server
type: article
created_date: '2012-07-24'
created_by: Rackspace Support
last_modified_date: '2020-10-05'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

Rackspace Cloud is not a domain registrar similar to GoDaddy&reg;, Tucows&reg;, or NameCheap&reg;. To
serve your domain from a Rackspace Cloud Server, you need to have already registered your domain with
a valid registrar. Then, you need to change the nameservers associated with the domain so that the system
can route traffic to the domain being served from your Cloud Server.

You can change the name servers for an existing domain to the Rackspace name servers by following these steps:

1.  Use the Rackspace **Cloud Control Panel** to create corresponding Domain Name System (DNS) records for your domain.

2.  Log in to your domain registrar's account and locate the section that specifies the name servers.

3.  Change the name servers to the Rackspace Cloud name servers:

-   **ns.rackspace.com**
-   **ns2.rackspace.com**

You can direct DNS queries for your domain to the Rackspace name servers by changing the name servers at your registrar.
You still need to manage and renew your domain subscription through the original domain registrar.

**Note**: For most domains, DNS propagation can take up to 48 hours.
