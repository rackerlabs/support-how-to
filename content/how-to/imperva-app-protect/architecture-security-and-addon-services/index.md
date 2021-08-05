---
permalink: architecture-security-and-addon-services/
audit_date: '2021-08-04'
title: Platform architecture, security, and add-on services
type: article
created_date: '2021-08-04'
created_by: Adam Brown
last_modified_date: '2021-08-04'
last_modified_by: Stephanie Fillmon
product: Imperva App Protect
product_url: imperva-app-protect
---

![architecture_diagram](https://docs-be.imperva.com/bundle/cloud-application-security/page/introducing/Images/512.png?_LANG=enus)

Imperva App Protect is activated through a DNS change without installing
on-premises software or hardware and without making any changes to the site
or application. After traffic is routed through the Imperva’s network, incoming
traffic is inspected and filtered with only legitimate traffic forwarded to
the origin servers and the malicious traffic is blocked.

Imperva App Protect with Rackspace Managed Security includes the following
components:

- [Web Application Firewall (WAF)](https://docs.imperva.com/bundle/cloud-application-security/page/introducing/cloud-waf.htm)
- [Bot protection](https://docs.imperva.com/bundle/cloud-application-security/page/settings/auto-mitigation.htm)
- [DDoS mitigation](https://docs.imperva.com/bundle/cloud-application-security/page/ddos-websites.htm)
- [Content Delivery Network (CDN)](https://docs.imperva.com/bundle/cloud-application-security/page/introducing/global-cdn-optimizer.htm)
- [Attack analytics](https://docs.imperva.com/bundle/Attack-Analytics/page/Content/attack_analytics/attack_analytics.htm)


### Imperva Cloud Management Portal

Rackspace provides you access to the
[Imperva Cloud Security Console](https://my.imperva.com/admin/login) to support
easy consumption and management of the product, enable your security workflow,
and analyze data through search and reporting.  


### Dependencies

For the Imperva App Protect service to function properly, you must ensure the
following dependencies are met:

- Imperva IPs whitelisted on Web Server Firewall – For the Imperva solution
  to reach the origin server, it will need to be whitelisted on any host-based
  firewall in place on the webserver. Customers must ensure Imperva IPs are
  whitelisted in their web server firewall.

- Imperva IPs whitelisted on Hosting Firewall - For the Imperva solution to
  reach the origin server, it will need to be whitelisted in the firewall
  deployed in front of your web server. Customers must ensure Imperva IPs
  are whitelisted in their web server firewall.

- IP rate limiting block - Ensure that server modules that enforce IP rate
  limiting are not set to Imperva IPs. When your traffic is routed through
  Imperva, it appears to the hosting infrastructure as if all website traffic
  is arriving from a limited number of IPs (whereas previously the source
  IPs were diverse). If any kind of rate limiting rules are being
  enforced, for example, to mitigate DDoS attacks, the Imperva Proxy Server
  IPs might be blacklisted, leading to availability issues for certain locations.

- Website caching consideration – Ensure that the website returns the correct
  caching instruction. When serving content to different clients and or
  languages, if the Vary header is used for caching, Imperva caches resources
  and pages if the Vary header is set with "Accept-Encoding". For other Vary
  parameters, Imperva will not cache the resource.

- Origin Server must respond to requests - The server(s) where the website is
  hosted must be up and running to allow for the Imperva service to forward
  un-cached or non-cacheable responses. If the origin server doesn’t respond
  to web requests, then the Imperva service cannot function as expected and
  end customers will be displayed error pages, depending on the situation.

### Add-on Services

The following add-on components and services are available to include in your
Imperva service. In some cases, add-on services are included in the plan,
depending on which level you select.

| Feature | Functionality |
| :-- | :-- |
| Additional sites/applications | Add additional domains into the scope of coverage. |
| Advanced Website Protection (formerly Unlimited DDoS Protection) | An always-on DDoS mitigation service that manages any type, size or duration of attack with near-zero latency in under 3 seconds--backed by a service level agreement. Protects applications on-premises or in the cloud with activation via a simple DNS change. |
| Additional bandwidth (only available on Enterprise 100 plan) | Increase the amount of inspected traffic that will be processed through the Imperva service. |
| Edge Load Balancing | A cloud-based load balancer that supports local and global server load balancing across on-premises and public cloud data centers. Supports automatic failover to standby servers to enable high-availability and disaster recovery without any TTL-related delays. You can read more about Imperva's Cloud Load Balancer here: <br /><br /> [Imperva App Protect - Load Balancer](https://docs.imperva.com/bundle/cloud-application-security/page/introducing/load-balancing-failover.htm) |
| Advanced Bot Protection | A service that gives advanced visibility and control over human, good bot, and bad bot traffic without imposing friction on legitimate users. This service is not currently supported by Rackspace Technology, but can still be enabled. You can read more about Imperva's Advanced Bot Protection here: <br /><br /> [Imperva App PRotect - Advanced Bot Protection](https://docs.imperva.com/bundle/advanced-bot-protection/page/74791.htm)|


### Additional capabilities

Imperva App Protect has the following additional capabilities:

#### Certificate management

Imperva supplies two ways for customers to support HTTPS traffic on the service.

-	Imperva-generated certificate - A certificate free of charge issued by
  Imperva through DigiCert
-	Original domain certificate - You can upload your existing domain certificate
  to the Imperva App Protect service

When Imperva generates a certificate, it is applied automatically to the site
after validation is complete, removing that burden from your certificate life
cycle. For more information, see
[Imperva App Protect - Digital Certificates](https://docs.imperva.com/bundle/cloud-application-security/page/more/ssl-certificate.htm).

#### Policies

Policy management enables you to centrally configure and manage settings, save
them as a policy, and then apply the policy to multiple sites in your
account. Imperva offers several types of policies. Each type covers a specific
area of Imperva functionality, such as access control lists (ACLs) or
whitelists, and has its own set of specific fields available to configure.

#### Imperva rules

You can use the Imperva rules proprietary scripting language to implement your
own security, delivery, and access control rules on top of Imperva's existing
security and application delivery logic. Custom rules can be manually coded
or generated by using a dedicated GUI that helps you get acquainted with the
rule generation process.

Web application owners and security engineers can use rules to improve the
security and performance of their websites and applications. For example, rules
can be created to:

- Prevent bots from accessing a site’s registration form
- Restrict access to a specific part of an application based on IP address
- Limit the rate of requests to a website
- Manipulate traffic routes and redirects
- Control a request's URL structure, headers and cookies

Rackspace Technology supplies support for the following rules:

- **Brute Force Rule** - Mitigates web
   [brute force attacks](https://www.imperva.com/learn/application-security/brute-force-attack/)
   on login pages. In some cases, bot mitigation might already mitigate such
   attacks, but advanced bots such as headless browsers can bypass this
   mechanism.

- **Rate Limiting Rule** - Limits the amount of traffic hitting specific API
  endpoints or resource intensive webpages that the backend origin servers
  must process. In some cases, attackers flood the site with requests trying to
  overwhelm the backend web servers. In other cases, bots could be inadvertently
  hammering the site causing performance degradation. For more information, see
  [Bot management](https://www.imperva.com/learn/application-security/bot-management/).

  The rule should cover only rate limiting resources that are not cached by the
  CDN portion of Imperva (i.e. not images) that would result in interaction
  with the backend server. Examples of these are login pages, search pages,
  and portions of the sites where HTTP POST requests are made. The Imperva App
  Protect solution has built in protections that automatically mitigation some
  portions of these attacks such as DDoS mitigation, bot mitigation, and the
  CDN. However, in some cases bots can bypass theses mitigations by staying
  under the threshold, using advanced bots such as headless browsers or places
  where bot mitigation is disabled (API endpoints), or hitting resources on the
  site that are not cached by the CDN.

- **Anti-Scraping Rule** - Challenges suspected scraping bots with CAPTCHA. In
  some cases, bot mitigation might already mitigate such activity, but advanced
  bots such as headless browsers can bypass this mechanism.

- **Advanced Access Control rule** - Supplies ACL capabilities that allow
  multiple matches to criteria and provide more capabilities than what
  policies provide. An example would be to restrict certain URLs to be
  accessible only from specific IP address or countries, drop specific
  user-agents on their site (known bot), or prevent traffic from being
  referred from a particular site.

- **Domain Redirects** - Enables customers to redirect traffic from one domain
  or subdomain to another.

- **Geo-Content Redirects** - Directs end users to specific domains that are
  tailored to the customer. A user in Korea types **www.somedomain.com**, which
  is hosted in site A, into a browser. The end user is redirected to
  **www.somedomain.k**, which is a mirror website hosted in site B. The primary
  purpose of this method is to send the end user to a site where the origin
  server is closer to them, but it can also be used to follow various laws and
  regulations that ask for user information to be processed by locally hosted
  servers, adjust site branding, change the functionality of the shopping cart
  experience (support different payment processors, shippers, or currencies),
  and so on.

See [Best practices for Imperva App Protect](best_practices.md) for some best
practices in implementing rules. Rules that fall outside the
[spheres of support](support/spheresofsupport.md) for the Imperva service
are subject to
[Professional Services](https://www.rackspace.com/services/professional-services).

#### Data management

Imperva provides the ability to control in which region of the world a
customer's data is stored associated with the Imperva App Protect solution.
Customers can adjust the region their data is stored to comply with specific
regulations.

The data stored for your account includes:

- Events, as displayed on the Events page in the Cloud Security Console, and
  the associated threat alerts based on the events. Threat alerts are generated
  by the Imperva Cloud Security Console and are also stored temporarily in
  the selected region. For more details on threat alerts, see
  [Web Protection - WAF Settings](https://docs.imperva.com/bundle/cloud-application-security/page/settings/waf-settings.htm).
- SIEM integration weblogs
- Network layer 3/4 headers, which contain IP addresses

#### Log integration

Imperva creates the following comprehensive and detailed logs:

- Security logs provide a detailed alert for each suspicious event detected
  by the Imperva proxy while protecting your network throughout its globally
  distributed network. All logs include the account ID and site ID
  references, which enables drill down into each individual customer/site.
- Access logs specify every request and response sent between your customers
  and the Imperva proxy. This is all the traffic that would have been sent
  between end users and your origin server, including traffic that Imperva
  served from its cache.

You can enable
[log integration](https://docs.imperva.com/bundle/cloud-application-security/page/settings/log-integration.htm)
in order to ingest these logs into a SIEM platform or raw storage for safe
keeping.

[Additional headers](https://docs.imperva.com/bundle/cloud-application-security/page/website-general-settings.htm#ImpervaHeaders)
can be injected into HTTP request headers to allow for
cross-correlation between web application or server logs if parsed from the
request into the application or web server logs.
