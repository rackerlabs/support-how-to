---
permalink: onboarding-to-imperva-app-protect/
audit_date: '2021-08-04'
title: Onboarding to Imperva App Protect with Rackspace Managed Security
type: article
created_date: '2021-08-04'
created_by: Adam Brown
last_modified_date: '2021-08-04'
last_modified_by: Stephanie Fillmon
product: Imperva App Protect
product_url: imperva-app-protect
---

Rackspace experts are here to guide your onboarding experience to the
Imperva App Protect solution. There are four phases to the onboarding
experience:

1. Initial site check
2. Initial configuration
3. Testing and configuration finalization
4. Cutover and monitoring

### Site Readiness Checks

In order to onboard onto the Imperva App Protect offering, you should perform
a few checks to ensure that the site that you want to protect is ready.

| Item | What to check | Explanation |
| :-- | :-- | :-- |
| Header extraction | If your application requires a real client IP address, ensure that you have enabled retrieval of this value from either "X-Forwarded-For" or "Incap-Client-IP" header. | When working with Imperva your server sees Imperva IPs instead of real client IPs. However, Imperva inserts by default the original client IP address into two HTTP headers: "X-Forwarded-For" and Imperva header "Incap-Client-IP". |
| IP restrictions/firewall | Check that [Imperva IP addresses](https://docs.imperva.com/howto/c85245b7) are safelisted to reach the server. | Sometimes websites are locked down to specific IP addresses so that only certain end clients can access them. The most common use case are web sites that are already behind another CDN service. For the service to be onboarded, your sites must be accessible to Imperva IP addresses. If you are aware of such restrictions, we can work with you to remove them if within our spheres of support. |
| IP rate limiting block | If currently used, ensure that server modules that enforce IP rate limiting are not set to Imperva IP addresses. | When your traffic is being routed through Imperva, it appears to the hosting infrastructure as if all website traffic is arriving from a limited number of IPs (while previously the source IPs were very diverse). If any kind of rate limiting rules are being enforced, for example, to mitigate DDoS attacks, the Imperva Proxy Server IPs might be blacklisted, leading to availability issues for certain locations. |
| Website caching consideration | Ensure that the website returns the correct caching instructions when serving content to different clients or languages. | If the Vary header is being used for such caching, Imperva caches resource and pages if the Vary header is set with "Accept-Encoding". For other Vary parameters, Imperva will not cache the resource. |

After you complete the environment checks, we can begin onboarding your website.

### Onboarding

Rackspace configures the Imperva App Protect on your behalf, though we need
your aid for the base configuration. We need the  following information for
the base configuration:

- Sites to be onboarded
- IP addresses to safelist
- HTTPS certificate
- Known good non-browser clients
- User list
- Global load balancer/failover configuration (Add-on)
- Sites to enable Advanced Bot Protection (Add-on)

All settings can be adjusted before the site is cutover and as needed in
the future.

#### Sites to be onboarded

Rackspace needs a list of sites to be onboarded into the Imperva App Protect
offering. A site might be a single application or a group of applications that
are managed together sharing the same dashboards and configuration settings.

- Domain names must share the same origin server/IP address
- The SSL certificate used by the site or domain names must be the same

**Website**: A destination on the Internet and the SSL certificate, if used,
for that destination. A destination is either a public IP address or a CNAME.

**Domain**: Enables multiple websites or applications to resolve to a single
destination. If these websites have the same destination and SSL
certification (where applicable), they can be combined and routed together
through the system using a single website license. If multiple websites
resolve to the same IP address or CNAME, but have different SSL
certificates, they must be configured on the system separately and require
individual licenses to avoid SSL mismatch errors.

**Note:** Using a single website license and configuring multiple websites
together in the Imperva system results in all sites being combined into a
single unit. These sites are reported and managed (security and acceleration
policies) as a single unit. If you require granular reporting or separate site
management for some or all sites, you must configure those sites individually
in the Imperva Cloud Security Console.

##### Reusing CNAMEs

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

**Provided domain name in Rackspace ticket**: `www.somedomain.com`

**Note:** When a site is onboarded, the Imperva cloud service sets the origin
website to the IP address or domain associated with the website in DNS. If the
correct DNS record does not point to the correct origin server
(for example, server is undergoing a migration), be sure to include that
information in the ticket associated with the domain as well as the correct
IP address or domain name that should be used for the origin server.

#### IP addresses to safelist

Supply a list of IP addresses that you do not want to be inspected by the
Imperva App Protect. For example, office IP addresses, web developer IP
addresses, and approved vulnerability scanners. You can supply the list of IP
addresses individually, by IP range, or subnets
(for example, 192.168.1.1, 192.168.1.1-192.168.1.100 or 192.168.1.1/24).
If you need the safelist to be applied only to specific sites, notate that
in the ticket.  

**Note:** Rackspace does not recommend safelisting ASV PCI scanners as this
exposes vulnerabilities that the WAF can mitigate, increasing your time to
become compliant as more development resources are needed to resolve the
issues discovered. Only in the case of rate limiting should a PCI ASV scanner
be safelisted and only for that defense capability.  

#### HTTPS certificate

Rackspace recommends using an Imperva-issued certificate for each site. When
Imperva generates a certificate, it is applied automatically to the site after
validation is complete, removing that burden from your certificate life
cycle. For more information on Imperva-issued certificates, see
[Imperva App Protect - Digital Certificates](https://docs.imperva.com/bundle/cloud-application-security/page/more/ssl-certificate.htm).

If you prefer to upload your own certificate, attach the certificate key to
the ticket or upload it to the file manager and note that you want it
uploaded. Rackspace always recommends even if uploading your own certificate
that an Imperva-issued certificate is also utilized to support clients that
do not support
[server name indication (SNI)](https://en.wikipedia.org/wiki/Server_Name_Indication).

When Rackspace configures the site to use an Imperva-issued certificate,
validation of the domain must take place. Rackspace by default will opt to
use DNS validation. If you prefer to use e-mail verification, indicate
in the ticket which domain you need to utilize this verification method for.   

- **DNS validation**: You are provided with a unique DNS entry to add to your
  domain DNS zone
- **Email validation**: A validation email is sent to one of the email
  addresses associated with your domain. A list of email addresses is
  displayed during the process. If the addresses are no longer in use or you
  want to use a different one, contact Support to request the change. The
  requested email address must be listed in your domain’s WHOIS record.

For more information on Rackspace best practices regarding certificate
management, see
[Certificate Management](/support/how-to/best-practices-for-imperva-app-protect#certificate-management).

#### Known good non-browser clients

Rackspace and Imperva recommend excluding known good non-browser-based
clients in the Imperva App Protect offering. The service includes both bot
classification and mitigation capabilities which challenges all needed
connections to your site. However, not all bots (non-browser clients) are
malicious and in some cases need to be excluded from the classification
engine to prevent issues.

The classification engine injects cookies and JavaScript into the HTTP
responses for all end clients to facilitate classification, but most bots are
unable to process the challenges that classify the bot affecting their
function or effectiveness. For known known non-browser clients such as
monitoring service, thick clients, mobile application, and application
APIs, it is recommended to exclude these from the bot classification
service. The service excludes clients classified as Search Bots and Site
Helpers by default:

| **Bot Type**  | **Description** |
| :-- | :-- |
| Search Bot  | A bot that searches data and indexes it for later use by a search engine. For example, Googlebot, Bingbot |
| Site Helper  | Tools or services that send requests to a website for a positive purpose, usually by the site owner or host, such as health checkers, broken link checkers, or performance checkers. For example: Rackspace Monitoring Agent, Amazon Route 53 Health Checks  |

For more information on Rackspace best practices regarding non-browser
clients, see
[Whitelisting Known non-browser clients](/support/how-to/best-practices-for-imperva-app-protect#whitelisting-known-non-browser-clients)

#### User list

To provide you the ability to view your configuration, view dashboards, receive
notifications and reports, and make changes as needed, Rackspace requires a
list of users that need access to the service. The primary contact is the
account administrator and has full control over the solution. A primary contact
is required to onboard the service. Based on a user's permissions in
Rackspace's system, the following role will be applied. If you want this
overridden, contact Support. Only users within Rackspace system can have an
associated Imperva Cloud account.

| **Permission**  | **Role** | **Description** |
| --- | --- | --- |
| View | Reader (Default Role) | Grants view-only permissions to the assigned user for the account or sub account |
| Edit | Editor (Rackspace Created Role) | Can make changes to the configuration but cannot perform account administration functions such as user administration |
| Admin | Administrator (Default Role) | Grants full permissions to the assigned user to manage the account or sub account |

For more information on Rackspace best practices regarding user-management, see
[User Management](/support/how-to/best-practices-for-imperva-app-protect#user-management).

#### Global load balancer and failover configuration (Add-on)

**How Does Load Balancing Work?**

Imperva’s Load Balancing is based on a network of secure reverse proxies
deployed on our globally distributed CDN. Web traffic that is routed through
the Imperva network is terminated by those proxies. This allows Imperva to act
as a load balancer at the HTTP level by making sure requests are always
routed to the origin server with the smallest load, as well as executing
geography-based routing decisions at the request level.

**Load Balancing at the Request Level**

Imperva uses Layer 7 based algorithms to make load balancing decisions at the
HTTP request level. The Least Pending HTTP Requests distribution method
measures the number of pending HTTP requests for each origin server and sends
requests to the origin with the lowest number of pending requests. This method
offers a very accurate assessment of the origin servers’ loads and keeps the
load evenly distributed among the origin servers.

**Global Server Load Balancing (GSLB) at the Request Level**

Imperva is quite unique in its use of Layer 7 based algorithms to make GSLB
decisions at the HTTP request level (as opposed to DNS-based GSLB). Layer 7
GSLB allows for quick (non TTL-reliant) responses to server and data center
malfunctions.

**Site Failover and Disaster Recovery (DR) Scenarios**

The Imperva Load Balancer can also play a major role in DR planning, acting
as an automated solution for site failover.

By using the health monitoring feature, Imperva immediately detects that the
primary site is down and automatically fails over to the standby site.

**Health Monitoring and Server Failover**

Imperva supports advanced health monitoring, constantly checking the origin
servers to detect malfunctions and allow immediate server/site failover.

Customers have complete control over the monitoring system. They can calibrate
its sensitivity, configure specific URLs to be monitored and define the exact
responses that are expected to be received.

#### Advanced Bot Protection (Add-on)

Rackspace doesn't provide support for the Imperva App Protect Advanced Bot
solution but allows customers to engage directly with Imperva’s analyst
services team for provisioning and onboarding of the solution. Rackspace will
initially turn on the service on behalf of the customer after information is
supplied by the customer as to which sites to enable the service on.
Afterward, guidance is provided to the customer on the engagement process
with the Imperva analyst service team to aid with the final configuration
of the solution.

### Testing and Configuration Finalization

After the base configuration is in place, a few steps must be performed
before cutover can occur:

- **HTTPS Certificate Verification** - Adjust DNS records or follow
  instructions in confirmation e-mail to active your Imperva-issued
  certificate for your site.   
- **Site Testing** - Perform testing of end web site before cutover occurs to
  ensure site functions as expected. The testing should be through making sure
  to take extra ensure API endpoints and non-browser-based client functionality
  works as expected.  
- **Enable 2FA** - Enable 2FA for your user account to ensure the most secure
  login possible.

#### HTTPS Certificate Verification

It can take up to 24 hours for the certificate to be issued after the
verification changes are made. After the Imperva-generated certificates are
issued, they are valid for a period of 12 months. When the certificate is
about to reach its expiration date, it will automatically go through a
renewal process. This process will not require any action from your
end, nor will it cause downtime for your sites.

After the renewal process is concluded, the new certificate will be
published. This generally happens 2-3 days before the certificate's
expiration date.

To see if the certificate has been issued for a particular site, use the
following steps in the Imperva cloud console:

1. On the top menu bar, click **Application**.
2. On the sidebar, click **Websites** and click a **website name**.
3. On the sidebar, click **Website Settings.**
4. Click **General**.

#### Site Testing

It is recommended to perform testing on the site before cutting over
traffic. The Imperva App Protect service is configured to receive traffic at
this point is accessible by the domain name provided in the ticket. In order
to perform testing, you should adjust your DNS resolution locally on the
device performing the testing, so that the domain name of the site resolves
to the Imperva domain name and/or IP address instead of going to your current
origin server. If you have questions on how to update your host file, see
[Modify your hosts file](/support/how-to/modify-your-hosts-file).

Recommended testing should include the following:

| **Item**  | **What to check?** | **Explanation** |
| :-- | :-- | :-- |
| End-to-End Test  | Open the Portal real time dashboard. Generate HTTP/S request to the domain protected by Imperva. Check that the dashboard displays the request information, and that the client receives the content.  | Portal area: **Websites > Dashboard > Real-Time**
The Real time dashboard should reflect samples of the current session connected to the site through the Imperva PoPs.   |
| HTTPS Test  | Make sure the HTTPS is properly configured. Generate an HTTPS request to your site using a web browser and check that the correct certificate is displayed (either Imperva or your own custom certificate).  | If you have uploaded your own certificate to the Portal, your certificate will be used only for SNI supporting web clients (e.g., all modern web browsers). Otherwise, the Imperva generated certificate will be displayed.   |
| Non-browser clients test  | Generate real traffic from your API clients and other non-browser services to confirm that the site’s security policy for non-browser clients is well defined.   | It is important to verify that there are no service interruptions after switching to Imperva DNS for API clients, bots, monitoring services, etc.   |
| Original Client IP is required  | In case your application requires a real client IP address, please make sure you have enabled retrieval of this value from either: "X-Forwarded-For" or "Incap-Client-IP" header.    | When working with Imperva your server will see Imperva IPs instead of real client IPs. However, Imperva inserts by default the original client IP address into two HTTP headers: "X-Forwarded-For" and Imperva header "Incap-Client-IP". |

#### Enable 2FA for Imperva App Protect Users

It is highly recommended that you enable 2FA for your account. To do so, see
[Imperva App Protect - 2FA Enablement](https://docs.imperva.com/bundle/cloud-application-security/page/settings/user-settings.htm#Enabletwofactorauthentication).

For more information on Rackspace best practices regarding user-management, see
[User Management](/support/how-to/best-practices-for-imperva-app-protect#user-management).

### Data Storage Region

Customers, if the need arises, should adjust their data storage region for a
particular site if the predetermined region is not desired. For best practices
on implementing or adjusting the data storage region, see
[Data Storage Regions](/support/how-to/best-practices-for-imperva-app-protect#data-storage-regions).

### Cutover and Monitoring

After you are ready to cutover the DNS for a site, Rackspace recommends you
lower the TTL for your DNS records to the lowest your DNS provider provides
prior to the cutover to ensure quicker propagation through the web. After you
update your DNS records, your end users should start resolving to the new
DNS record pointed at Imperva. Over time as DNS caches clear throughout the
Internet, you should see more and more traffic hit your site through
Imperva until all is cut over.

- To configure A Records and CNAME Record(s) of your DNS, you must log into
  your DNS management console.
- Update the A Record for your naked domain (for example, yourdomain.com) so
  that it points to the IP addresses provided by Imperva for the A Record.
  Imperva
  provides you with two different A records for the sake of redundancy, and
  you must configure both for the naked domain. These IP addresses points to
  the Imperva PoPs closest to the location where your application is hosted.
  Imperva supplies full support for sites using IPv6. If your DNS records
  have an AAAA record, Imperva also supplies two AAAA records to replace
  the existing AAAA record.

  **Note:** The A records of your non-HTTP/S DNS records
  (such as **ftp.yourdomain.com** or **mail.yourdomain.com**) must remain
  pointing
  to your origin web server and not to Imperva, which means that you should
  simply leave them "as is" in the DNS Zone file.

- Create or update the CNAME Record of the full domain of your site so that
  it points to the domain provided by Imperva. Remember, the full domain
  includes the subdomain prefix, such as **www.yourdomain.com** or
  **subdomain.yourdomain.com**. If an end user types in the subdomain, then
  Imperva uses the CNAME Record and supplies service from the PoP that is
  closest to the end user.

- You can see the status of the DNS record propagation by using this DNS tool.  

If your DNS is hosted/managed by Rackspace and you want us to perform the
change, update the ticket with the following information:

```
######## MAINTENANCE QUESTIONNAIRE ########
General Description of Maintenance:

Expected duration of Maintenance:

1. Two preferred maintenance dates:
i.)
ii.)

2. Two preferred maintenance times, including time zone:
i.)
ii.)  

3. Would you like for someone to be contacted before/during/after the maintenance?  

4. How can we test that this maintenance is a success?  
** In the unlikely event of unforeseen issues / maintenance failure **

5. Will this maintenance require a roll-back plan, or should we troubleshoot until remedied?

6. What is the maximum amount of time allowed to troubleshoot the issue before initiating the roll-back plan?
```

Rackspace recommends that your staff is on alert for any unforeseen issues
that end users might be reporting as you cutover your traffic. If you need
adjustments to the configuration to resolve an urgent problem, call our
support hotline for immediate assistance. After the DNS changes are
made, additional checks should be made to ensure everything is working as
expected.


| **Item**  | **What to check?** | **Explanation** |
| :-- | :-- | :-- |
| DNS Records  | Run a DNS query for the website and check that:<ol><li>The DNS records of the HTTP/s services are pointing to Imperva CNAME /IP’s only</li><li>If other services are hosted on the same server such as Mail or FTP, ensure that their A records are pointing to the origin server.</li></ol>  | To check the DNS records, you can use this DNS tool. Imperva only serves HTTP and HTTPS traffic. Any other protocol would be blocked.    |
| End-to-End Test  | Open the Portal real time dashboard. Generate HTTP/S request to the domain protected by Imperva. Check that the dashboard displays the request information, and that the client receives the content.  | Portal area: **Websites > Dashboard > Real-Time** <br />The Real time dashboard should reflect samples of the current session connected to the site through the Imperva PoPs   |
| HTTPS Test  | Make sure the HTTPS is properly configured. Generate an HTTPS request to your site using a web browser and check that the correct certificate is displayed (either Imperva or your own custom certificate).  | If you have uploaded your own certificate to the Portal, your certificate will be used only for SNI supporting web clients (e.g., all modern web browsers). Otherwise, the Imperva generated certificate will be displayed.   |
| Non-browser clients test  | Generate real traffic from your API clients and other non-browser services to validate that the site’s security policy for non-browser clients is well defined.  | It’s important to verify that there are no service interruptions after switching to Imperva DNS for API clients, bots, monitoring services, etc.   |
| Original Client IP is required  | In case your application requires a real client IP address, please make sure you have enabled retrieval of this value from either: "X-Forwarded-For" or "Incap-Client-IP" header.   | When working with Imperva your server will see Imperva IPs instead of real client IPs. However, Imperva inserts by default the original client IP address into two HTTP headers: "X-Forwarded-For" and Imperva header "Incap-Client-IP".    |
| System health and maintenance  | Please visit [Imperva status page](https://status.imperva.com/) for maintenance information and system status.  | It is recommended to subscribe to the status page for the most frequent updates the service.    |


#### Cross Site Scripting (Set to Alert Only by Default)

Lastly, in order to finalize the security configuration, adjustments need to
be made to how cross site scripting (XSS) is handled. By default, to false
positives with web content management systems and certain applications, this
capability is set to alert only. Once traffic has been flowing through the
Imperva service for a few days or a week to build a good profile of
possible requests, cross-site scripting events should be reviewed to ensure
that there are not false positives with the module. If false positives are
found, exceptions or safelists should be made to the security configuration
to allow the traffic through.

If you want Rackspace to make the
exceptions, provide the event IDS associated with the blocks in the
ticket. After the exceptions are in place, the module should be set to
Block Request.

For more information on Rackspace best practices regarding adjusting
WAF threat responses, see
[WAF Threat Response](/support/how-to/best-practices-for-imperva-app-protect#waf-threat-response).
