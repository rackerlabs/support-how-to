---
permalink: imperva-app-protect-with-rackspace-managed-security/
audit_date: '2021-08-04'
title: Imperva App Protect with Rackspace Managed Security
type: product
created_date: '2021-08-04'
created_by: Adam Brown
last_modified_date: '2021-08-04'
last_modified_by: Stephanie Fillmon
product: Imperva App Protect
product_url: imperva-app-protect
---

Rackspace Technology utilizes Imperva App Protect to provide you with
protection for your applications, including distributed denial-of-service
(DDoS) protection, a content delivery network (CDN), bot migration, and many
other services.

The Rackspace Technology solution is designed to integrate seamlessly into
your environment. Imperva App Protect activates through a DNS change without
installing on-premise software or hardware, and without making any changes
to the site or application. After traffic is routed through the Imperva
network, incoming traffic is inspected and filtered. Legitimate traffic is
forwarded to the origin servers while malicious traffic is blocked.

### Overview

Imperva App Protect with Rackspace Managed Security offers the following
features:

- Web Application Firewall (WAF)
- Bot protection
- DDoS mitigation
- Content delivery network
- Access to the Imperva Cloud Security Console
- Attack Analytics

Additional add-ons can be purchased or are included depending on the plan that
you select. For more information, see
[Add on services](/support/how-to/platform-architecture-security-and-addon-services).

### Base plans offered

Rackspace Technology offers the following Imperva App Protect base plans.

| **Plan**  | **Includes** |
| :-- | :-- |
| 20 Mbps Plan | <ul><li>Imperva App Protect with up to 20 mbps traffic inspection\*</li><li>1 website</li></ul> |
| 50 Mbps Plan | <ul><li>Imperva App Protect with up to 50 mbps traffic inspection</li><li>1 website</li></ul> |
| 100 Mbps Plan | <ul><li>Imperva App Protect with up to 100 mbps traffic inspection</li><li>1 website</li></ul> |

\* based on the amount of clean, inspected traffic that will be ingested by
Imperva.

### Advanced plans offered (Application Security)

The App Protect plans allow for a highly customized approach to the
traditional Imperva Cloud WAF service. Rackspace Technology offers all tiers
of services, however; higher tiers require additional support hours.

A base plan is selected for each plan (see the Imperva Cloud WAF plans above)
and then the App Protect plan can be selected to enable the features that most
fit your need.

| **Plan**  | **Includes** |
| :-- | :-- |
| App Protect Essentials  | <ul><li>1 site/application</li><li>Cloud Web Application Firewall</li><li>IP Reputation Intelligence</li><li>Attack Analytics</li><li>CDN</li><li>Bot Protection</li><li>SIEM Integration</li></ul> |
| App Protect Professional  | <ul><li>1 site/application</li><li>Cloud Web Application Firewall</li><li>IP Reputation Intelligence</li><li>Attack Analytics</li><li>CDN</li><li>Bot Protection</li><li>SIEM Integration</li><li>Advanced Web Protection (DDoS mitigation), with 3 second response time SLA</li></ul> |
| App Protect Enterprise  | <ul><li>1 site/application</li><li>Cloud Web Application Firewall</li><li>IP Reputation Intelligence</li><li>Attack Analytics</li><li>CDN</li><li>Edge Load Balancing</li><li>Bot Protection</li><li>Advanced Bot Protection - Support provided by Imperva Analyst Services</li><li>SIEM Integration</li><li>Advanced Web Protection (DDoS mitigation), with 3 second response time SLA</li></ul> |

### Growth and Adjustments

If you need to adjust your plan, reach out to your Rackspace Technology
Account Executive and we can complete this process for you.

See the following general adjustment guidelines:

- If the bandwidth of your plan is exceeded, you can either pay an overage fee
  or move to the next plan
- At the 100 mbps plan, throughput can be added incrementally
- Additional sites or applications can be added incrementally or in packs to
  any plan

### Defining a Site and Domain

Rackspace needs a list of sites to be onboarded into the Imperva App Protect
offering. A site might stand for a single application or a group of
applications that are managed together, sharing the same dashboards and
configuration settings.

- Domain names must share the same origin server/IP address
- The SSL certificate used by the site or domain names must be the same

**Site**: A collection of web pages within a public IP address or a CNAME.

**Domain**: Enables multiple websites or applications to resolve to a single
destination. If these websites have the same destination and SSL
certification (where applicable), they can be combined and routed together
through the system using a single website license. If multiple websites
resolve to the same IP address or CNAME, but have different SSL
certificates, they must be configured on the system separately and require
individual licenses to avoid SSL mismatch errors.

Using a single website license and configuring multiple websites
together in the Imperva system results in all sites being combined into a
single unit. These sites are reported and managed (security and acceleration
policies) as a single unit. If you require granular reporting or separate
site management for some or all sites, you must configure those sites
individually in the Imperva Cloud Security Console.

#### Reusing CNAMEs

You can save on license costs for sites by combining them together by
[reusing CNAMEs](https://docs.imperva.com/bundle/cloud-application-security/page/more/cname-reuse.htm).
Rackspace highly recommends reusing CNAMEs where it makes sense for your
business to keep costs down.

If you want to reuse a CNAME, you must supply only the primary domain for
your site. The Imperva App Protect uses the domain for the name in the
console, validating the origin, and issuing an Imperva certificate (if desired).

See the following examples of a CNAME reuse:

**CNAME reuse with sub-domains**

    www.somedomain.com > 8.8.8.8 <-- primary domain
    blog.somedomain.com > 8.8.8.8
    api.somedomain.com > 8.8.8.8
    Provided domain in Rackspace ticket: www.somedomain.com

**CNAME reuse with SAN certificate**

    www.somedomain.com > xyz.x.incapdns.net <-- primary domain
    blog.somedomain.com > xyz.x.incapdns.net
    www.someotherdomain.com > xyz.x.incapdns.net
    www.yetanotherdomain.es > xyz.x.incapdns.net

**Note:** When a site is onboarded, the Imperva cloud service sets the origin
website to the IP address or domain associated with the website in DNS. If the
correct DNS record does not point to the correct origin server (for example,
server is undergoing a migration), be sure to include that information in
the ticket associated with the domain as well as the correct IP address or
domain name that should be used for the origin server.

For more information about the Imperva services, see the
[Imperva Application Protection documentation](https://docs.imperva.com/category/AppSec).
