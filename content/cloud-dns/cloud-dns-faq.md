---
node_id: 1239
title: Cloud DNS - FAQ
type: article
created_date: '2011-10-25'
created_by: Rackspace Support
last_modified_date: '2016-01-20'
last_modified_by: Stephanie Fillmon
product: Cloud DNS
product_url: cloud-dns
---

<h3>General</h3>

<h4>What is a domain name system (DNS)?</h4>

<p>The Domain Name System (DNS) is a system by which internet domain name-to-address and address-to-name resolutions are determined. All domains and their components, such as mail servers, utilize DNS to resolve to the appropriate locations. For example, DNS is used to turn 'www.rackspace.com' into the computer addressable IP address '207.97.209.147'.</p>

<p>DNS servers are usually set up in a master-slave relationship such that failure of the master invokes the slave. DNS servers may also be clustered or replicated such that changes made to one DNS server are automatically propagated to other active servers.</p>

<h4>What types of customers/accounts can access Cloud DNS?</h4>

<p>Anyone who has a Rackspace Cloud account can access the Cloud DNS service.&nbsp; Existing Cloud customers will have access to the Rackspace Cloud DNS by default.</p>

<h4>Where can I find the Cloud DNS API documentation?</h4>

<p><a href="https://developer.rackspace.com/docs/cloud-dns/v1/developer-guide/">https://developer.rackspace.com/docs/cloud-dns/v1/developer-guide/</a></p>

<hr />
<h3>Billing and usage</h3>

<h4>How much does this service cost?</h4>

<p>Cloud DNS is currently available at no additional cost, and is intended for use with Cloud accounts that have provisioned and active resources.</p>

<hr />
<h3>Existing product compatibility</h3>

<h4>Can this service be used for Dedicated Servers?</h4>

<p>No. The Cloud DNS service is only available for Cloud account resources. Managed / Dedicated customers with Rack Connect (i.e. those customers who also have a Cloud account) have access, but can only use the service to manage DNS for their Rackspace Cloud resources.</p>

<h4>Does Cloud DNS work with Cloud Sites?</h4>

<p>Absolutely; in addition to managing DNS in the Cloud Sites Control Panel, you can view, edit and delete Cloud Sites domains can be viewed, edited and deleted via Cloud DNS API. Domain registration is not supported by the Cloud DNS API, but you can still register domains through the existing Cloud Sites Control Panel.</p>

<h4>How does this work for Hybrid customers?</h4>

<p>A Hybrid customer will be able to continue to utilize MyRackspace.com to manage domains for their dedicated resources, and will be able to utilize Cloud DNS to manage domains for their Cloud resources.</p>

<p><strong>Note</strong>: Duplicate domains may not exist between Managed Hosting and Cloud Hosting resources.</p>

<hr />
<h3>Accessing Cloud DNS</h3>

<h4>How do I authenticate with the Cloud DNS API?</h4>

<p>The process for authenticating with the Cloud DNS API is the same when authenticating with all other Rackspace Cloud APIs.</p>

<p>To authenticate, you must supply your username and API access key in x-headers.</p>

<ul>
	<li>Use your Rackspace Cloud username as the username for the API. Place it in the XAuth-User x-header.</li>
	<li><a href="/how-to/view-and-reset-your-api-key">Obtain your API access key</a> from the Rackspace Cloud Control Panel in the Your Account API Access section. Place it in the X-Auth-Key x-header.</li>
</ul>

<p>For full authentication details, see the <a href="https://developer.rackspace.com/docs/cloud-dns/v1/developer-guide/">Cloud DNS Developers Guide</a>.</p>

<h4>What account number do I use to access the service?</h4>

<p>Customers should use their existing Cloud account number.</p>

<h4>What is the difference between US and UK Cloud DNS?</h4>

<p>The functionality is the same. The only difference is US and UK each have their own separate API endpoint:</p>

<ul>
   <li>US = <code>https://dns.api.rackspacecloud.com/v1.0/1234/</code></li>
   <li>UK = <code>https://lon.dns.api.rackspacecloud.com/v1.0/1234/</code></li>
</ul>

<hr />
<h3>Features and functionality</h3>

<h4>What DNS management operations does the Cloud DNS API support?</h4>

<p>Customers can create, modify, remove and list domains, subdomains and records.</p>

<p>Additionally, users can search domains by filtering. We do not support filtering records.</p>

<p>For a full list of supported API operations, see the <a href="https://developer.rackspace.com/docs/cloud-dns/v1/developer-guide/">Cloud DNS Developers Guide</a>.</p>

<h4>What record types does Cloud DNS support?</h4>

<p>The Cloud DNS API currently supports the following record types:</p>

<ul>
	<li>A</li>
	<li>CNAME</li>
	<li>MX</li>
	<li>AAAA</li>
	<li>NS</li>
	<li>TXT</li>
	<li>SRV</li>
	<li>PTR</li>
	<li>SOA - you will not be able to create SOA records (as this is handled by the system) but you may modify TTL and email address</li>
</ul>

<p>The service supports DKIM and SPF records through formatting TXT records with custom attributes indicating the record type. We do not currently support the SPF RR type as defined in <a href="http://tools.ietf.org/html/rfc4408">RFC 4408</a>.</p>

<p>For more information about supported record types, see the <a href="https://developer.rackspace.com/docs/cloud-dns/v1/developer-guide/#document-general-api-info/supported-record-types">Cloud DNS Developer Guide</a>.</p>

<h4>Can I import and export domains?</h4>

<p>Yes, via API. You can import a domain from external providers using a valid bind9-formatted zone file. Similarly, you can export their domain to a bind9-formatted file. Currently, you will not be able to export zone files from MyRackspace to Cloud DNS and should contact Support to request a domain transfer from dedicated resources to Cloud resources.</p>

<h4>What are the Rackspace DNS servers?</h4>

<p>Our default DNS servers are:</p>

<ul>
	<li>dns1.stabletransit.com</li>
	<li>dns2.stabletransit.com</li>
</ul>

<h4>What type of DNS network does Rackspace use?</h4>

<p>Rackspace leverages a globally distributed anycast Anycast network. Currently we have DNS servers located in Texas, Virginia, Chicago, and London. Using Anycast, we broadcast the IP addresses for ns.rackspace.com and ns2.rackspace.com from each location. All DNS queries will generally go to the geographically closest name servers, giving you faster results no matter where your queries originate. Additionally, all of our DNS servers are monitored 24/7 and if an entire datacenter were to fail, or even if all of the DNS servers within a specific datacenter were to fail, the DNS queries will automatically start going to the next best location.</p>

<h4>What are the limitations of the search functionality?</h4>

<p>You will be able to search for domains within your own account. The functionality does not allow you to search for records.</p>

<h4>Do my TTL settings expire?</h4>

<p>No.</p>

<hr />
<h3>Performance</h3>

<h4>What are the default TTLs for domains and records?</h4>

<p>When a domain and/or record is created, and no TTL (Time To Live) is specified, a default value of 3600 seconds is used. When the domain and/or record TTL is supplied by the user via a create or update operation, the specified TTL values must be 300 seconds or more.</p>

<h4>How long does it take for DNS changes to be propagated globally?</h4>

<p>Typical DNS propagation to Rackspace nameservers (globally) may take up to one minute. This refers to the amount of time it takes after a change (add/delete/update) is made to a customer's records via API, DNS Manager, MyRackspace Customer Portal, Cloud Control, etc. before the change is live on our nameservers. Large amount of changes made simultaneously may take 2-3 minutes.</p>

<p>If a new domain is added or an existing domain is deleted, this may take up to a few minutes to propagate to our Rackspace nameservers.</p>

<p>When changing nameservers for a domain, complete propagation will take about 2 days for most domains. This is enforced by the registries.</p>

<h4>Are there API rate limits?</h4>

<p>All accounts, by default, have a preconfigured set of thresholds (or limits) to manage capacity and prevent abuse of the system. The system recognizes two kinds of limits: rate limits and absolute limits. Rate limits are thresholds that are reset after a certain amount of time passes. Absolute limits are fixed. See the <a href="https://developer.rackspace.com/docs/cloud-dns/v1/developer-guide/#document-general-api-info/limits">developers guide</a> for more information on rate limits.</p>

<hr />
<h3>Support</h3>

<h4>How many Cloud DNS domains and records can I have?</h4>

<p>By default, Cloud DNS users may have up to 500 domains (including sub-domains) and 500 records per domain per Cloud account. When a user submits a request to create new domains, records, and/or sub-domains, the system will only accept the request if the total number of existing plus requested domains, sub-domains and/or records is within the account limits. If the total exceeds the account limit, the entire request will be rejected and a '413 Request Entity Too Large' message will be returned. See the <a href="https://developer.rackspace.com/docs/cloud-dns/v1/developer-guide/#document-general-api-info/limits">Cloud DNS Developer Guide</a> for more information on absolute limits.</p>

<h4>How can I create a Cloud DNS ticket?</h4>

<p>You may submit Cloud DNS requests using the standard Support ticket&nbsp;interface in the Control Panel.</p>
