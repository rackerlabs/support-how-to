---
permalink: imperva-app-protect-best-practices/
audit_date: '2021-08-04'
title: Imperva App Protect best practices
type: article
created_date: '2021-08-04'
created_by: Adam Brown
last_modified_date: '2021-08-04'
last_modified_by: Stephanie Fillmon
product: Imperva App Protect
product_url: imperva-app-protect
---

This articles describes best practices for using your Imperva App Protect
Service.

- [Security](#security)
  - [Geo-blocking](#geo-blocking)
  - [DDoS adjustments](#ddos-adjustments)
  - [WAF threat response](#waf-threat-response)
  - [Administration page restriction](#administration-page-restriction)
  - [Brute force login](#brute-force-login)
  - [HSTS and HTTPS redirection](#hsts-and-https-redirection)
  - [Certificate management](#certificate-management)
  - [Safelisting known non-browser clients](#safelisting-known-non-browser-clients)
  - [User management](#user-management)
  - [Data storage regions](#data-storage-regions)
  - [Restricting origin server access to Imperva only](#restricting-origin-server-access-to-imperva-only)
- [Performance and content optimizations](#performance-and-content-optimizations)
  - [Cache shield](#cache-shield)
  - [Dynamic content acceleration](#dynamic-content-acceleration)
  - [HTTP/2](#http/2)
  - [Error page branding](#error-page-branding)

### Security

You should look to reduce your attack surface and increase or support your
security posture. The following list of best practices enables you to make
the most use of your Imperva App Protect service. Contact Rackspace Support if
you need help with configuration changes or you can make the changes yourself
by using the [Imperva cloud console](https://my.imperva.com/admin/login).

#### Geo-blocking

To reduce your attack surface, it might be possible to allow traffic only from
specific countries. The web is filled with bots and attackers who have attack
platforms that reside in multiple countries; however, it is likely that your
business does not need your site to have full global access. If you expect that
your site doesn't need to be available in certain countries, then you can
reduce your attack surface by restricting access to your site by country or
continent. Each restriction can be tailored to a site so sites that should
be accessed only from a specific region of the world can be locked down.

**When to use geo-blocking**

- Regulations or security controls dictate access should be given only from
  specific locations
- The site is likely to be accessed from specific countries. For example, an
  eCommerce site that serves customers only for a particular state or province
  in one country to serve anyone in another country.
- The site does not meet all laws and regulations of a particular country for
  online sales

**When not to use geo-blocking**

- When the end user is likely to travel outside of the specific country or
  continent and still need access to the site
- When you have content that needs to be geo-located or region-specific
  (not restrict access)

**Not sure if you can apply restrictions?**

For onboarded sites, viewing dashboards for source countries can indicate
where your site is serving or give you ideas of which countries to block.

- In the [Imperva cloud console](https://my.imperva.com/admin/login), look at
  the security dashboards for countries with large amounts of security
  violations for a list of countries to block by clicking
  **Application > WAF > Dashboards > Performance > Visits by Country**
- In the [Imperva cloud console](https://my.imperva.com/admin/login), look at
  the traffic overview dashboards for countries that should be allowed by
  clicking
  **Application > WAF > Dashboards > Security > Security Events by country**.

  **Note**: Be aware of the effect of bot traffic on your traffic data.


**If I open a ticket to geo-block certain countries or regions, what information would Rackspace need?**

- The site on which you want to apply the restriction
- The type of restriction, such as Allow all except or block all except
- A list of countries or continents to block or allow


For more information about geo-blocking, see
[Imperva App Protect - Policies](https://docs.imperva.com/bundle/cloud-application-security/page/policies.htm).

#### DDoS adjustments

After Imperva has determined that a distributed denial-of-service (DDoS)
attack is underway, suspicious bots are challenged with a set of tests to
filter out any malicious visitor. Per best practice the control of DDoS
enablement should be set to auto (default) and enablement controlled by a
threshold of HTTP requests per second. The automatic DDoS threshold should be
adjusted to reflect 3x the peak number of requests per second to avoid false
positives with the layer 7 DDoS mitigation. Except for the CAPTCHA challenge,
these challenges do not affect the user experience.

In some cases, this might mean reducing the threshold and in other cases this
might mean increasing. Mobile apps or certain pages on the site can cause end
browsers to make hundreds of calls per second to the same domain so depending
on how the site is coded, the threshold should be higher or lower.Mitigation
nd notification kicks in with the requests
per second for the site to avoid the threshold settings. For more information
about threshold settings, see
[Imperva App Protect - DDoS Protection](https://docs.imperva.com/bundle/cloud-application-security/page/settings/ddos-settings.htm).

**When to adjust threshold settings**

- To ensure best security posture
- If you are seeing a lot of DDoS notifications, which likely means the
  threshold is set too low for the site

**When not to adjust threshold settings**

- Not a high priority to spend resources analyzing and tuning the setting
- Site is not onboarded onto Imperva App Protect

**Not sure what threshold to set for your site?**

- In the [Imperva cloud console](https://my.imperva.com/admin/login), click
  **Application > Websites > Site_name > Site > Website Overview > Traffic (Requests/second) graph**
  and adjust the time setting to seven days. Review the graph to decide peak
  traffic and multiply by three for a base threshold.
- If you have your own site metrics from a time where you could see all HTTP
  requests going to the site (cached results from a CDN should still be
  accounted for), review the data to establish a threshold.

**If I open a ticket to change my threshold settings, what information would Rackspace need?**

- At which rate to set the threshold
- On which site to set the threshold

For more information about DDoS protection and threshold settings, see
[Imperva App Protect - DDoS Protection](https://docs.imperva.com/bundle/cloud-application-security/page/settings/ddos-settings.htm)

#### WAF threat response

Imperva Web Application Firewall (WAF) threats mitigations are broken down
into the following categories:

- Backdoor Protection
- Remote File Inclusion
- SQL Injection
- Cross Site Scripting (XSS)
- Illegal Resource Access

By default, all categories are set to block malicious requests or
auto-quarantine in the case of backdoor protection, except for XSS which is set
to alert-only mode by Imperva. It is recommended to have each module in a
protection state to stop attackers.

The XSS module is likely in alert-only mode due to web content management
systems (web CMS) which can mimic XSS attacks. Due to the possible false
positive rate with these threat response, we recommend reviewing and
tuning, if necessary, the XSS alerts after seven days of live traffic to ensure
no false positives. After tuning is completed, you should set the module
to blocking malicious requests instead of alert-only.

**When to adjust WAF settings**

- Each module should always be moved into blocking unless tuning was never
  performed on the XSS module

**When not to adjust WAF settings**

- Events that haven't been tuned to ensure that there are no false positives
  with the XSS module

**How do I tune the module?**

1. Review
   [XSS attacks](https://portswigger.net/web-security/cross-site-scripting)
   and what they look like.
2. In the [Imperva cloud console](https://my.imperva.com/admin/login), navigate
   to **Application > Security Events**.
3. Filter down to Cross Site Scripting Alerts.
4. Tune each site that has XSS set to alert-only for events that are
   false positives.

   Perform at least two tuning sessions with live traffic to ensure there are
   no false positives.

**If I open a ticket to tune a module, what information would Rackspace need?**

**Note:** Rackspace will not preform proactive tuning on non-Enterprise Plans),
but if you have questions about whether a specific event is a false positive,
Rackspace can assist with analysis.

- Provide the exception ID for the alert
- Ask any questions you have about the alert or information you feel is
  relevant

For more information about event tuning and WAF settings, see
[Imperva App Protect - Viewing Security events](https://docs.imperva.com/bundle/cloud-application-security/page/security-events.htm)
and
[Imperva App Protect - WAF Threat Responses](https://docs.imperva.com/bundle/cloud-application-security/page/settings/waf-settings.htm).

#### Administration page restriction

Rackspace Technology recommends that all web administration pages on the site
have restricted access so that only authorized IPs, countries, or continents
can access them. Doing so limits your attack surface by preventing bots that
would brute force these pages from reaching them all together.

**When to restrict pages**

- When sites that are sent through the Imperva service have a web
  administration section or domain

**When not to restrict pages**

- No web administration pages, or portals are present on the site
- Due to global workforce, restricting access is impossible. We recommend
  investigating two-factor authentication solutions as an alternative defense.

**If I open a ticket, what information would Rackspace need?**

- Site where administration page is present
- URLs associated with the web administration page
- Restrictions via IP address, country, or continent from where you want the
  administration page accessible

For more information about restricting administration pages, see
[Imperva App Protect - Web Admin Restriction Rule](https://docs.imperva.com/bundle/cloud-application-security/page/rules/security-rule-examples.htm#AdvancedAccessControlACL)

#### Brute force login

Due to a rise in cybercrime, websites are experiencing many attacks on their
login pages by bad actors hoping to steal data, money, rewards points, or
simply validate that compromised credentials are valid. Rackspace recommends
hardening each login page with the Imperva App Protect solution by applying
a brute force policy to limit the number of logins that can be tried from a
single session or IP address. While most bots are mitigated by the bot
mitigation policy, more sophisticated bots such as headless browsers can
still bypass the defense mechanisms. A brute force policy can assist with
mitigation without the need to utilize more advanced solutions such as
[Imperva Advanced bot mitigation](https://www.imperva.com/products/advanced-bot-protection-management/).

To make an effective brute force rule, a rule should take into consideration
the following to be the most accurate and reduce false positives:

- HTTP URL of login page
- HTTP Login Parameters (username and password)
- Threshold for rule triggering
- Action to take once the rule triggers:
- Captcha Challenge (recommended)
- IP Block for 10 min
- Session Block

For more information about brute force and other attacks, see the following
resources:

- [OWASP Automated Threats to Web Applications](https://owasp.org/www-project-automated-threats-to-web-applications/)
- [Brute Force Attacks](https://www.imperva.com/learn/application-security/brute-force-attack/)
- [Credential Stuffing](https://www.imperva.com/learn/application-security/credential-stuffing/)

**When to apply a brute force rule**

- A login page is present on your website

**When not to apply a brute force rule**

- Alternative mitigations are already in place that you feel are sufficient,
  such as two-factor authentication.
- Advanced bot mitigation is present already
- No login page is present on the site

**If I open a ticket, what information would Rackspace need?**

Rackspace requires the following following information to create a brute
force policy:

- HTTP URL of login page
- HTTP Login Parameters (optional, we can try to discover the values on your behalf)
- Threshold for rule triggering (optional, Rackspace can use a default of 10 attempts in a minute)
- Action to take once the rule triggers:
- Captcha Challenge (recommended)
- IP Block for 10 min
- Session Block

For more information about brute force rules, see
[Imperva App Protect - Brute Force Login Rule](https://docs.imperva.com/bundle/cloud-application-security/page/rules/security-rule-examples.htm#Accounttakeover).

#### HSTS and HTTPS redirection

Rackspace recommends that you force HTTPS to be always used to reduce the
security attack surface that can be leveraged on your site. HTTPS supplies
the following security benefits:

- Ensures that the domain or site you are visiting is the site you intended
  to visit by validating the digital certificate
- Keeps all communication with the site private
- Helps prevent man-in-the-middle attacks by validating the site and providing
  a secure tunnel

**Why should you use redirect and HSTS?**

To ensure that customers can sign up for
[HSTS pre-load](https://hstspreload.org/) with no issues.

In order to be accepted to the HSTS preload list through this form, your site
must satisfy the following set of requirements:

1. Serve a valid certificate.
2. Redirect from HTTP to HTTPS on the same host, if you are listening on port
   80.
3. Serve all subdomains over HTTPS.

   In particular, you must support HTTPS for the www subdomain if a DNS record
   for that subdomain exists.

4. Serve an HSTS header on the base domain for HTTPS requests:

   - The max-age must be at least 31536000 seconds (1 year).
   - The includeSubDomains directive must be specified.
   - The preload directive must be specified.
   - If you are serving an additional redirect from your HTTPS site, that
     redirect must still have the HSTS header (rather than the page it
     redirects to).

For more information about HTTPS and why enforcing it is important, see
[A safer default for navigation: HTTPS](https://blog.chromium.org/2021/03/a-safer-default-for-navigation-https.html).

For more information on HSTS, see
[HSTS Support](https://docs.imperva.com/howto/853454d2).

**When to redirect to HTTPS and use HSTS**

- When the site supports HTTPS

**When not to redirect to HTTPS and use HSTS**

- When a site does not support HTTPS
- HSTS is already enabled on the origin server (HSTS only)

**If I open a ticket, what information would Rackspace need?**

- Which site do you want HTTPS redirects enabled on?
- Which sites do you want HSTS on? Be sure to specify if you need Max-age, add
  sub-domains, and pre-load specified.

For more information, see
[Imperva App Protect - HSTS](https://docs.imperva.com/bundle/cloud-application-security/page/settings/general-settings.htm)
and
[Imperva App Protect - Redirect](https://docs.imperva.com/bundle/cloud-application-security/page/settings/delivery-settings.htm#Redirection).

#### Certificate management

For HTTPS traffic to be served by Imperva, HTTPS certificate must be hosted by
Imperva. Customers have two options for certificates:

-	Imperva-generated certificate - A certificate free of charge issued by
  Imperva through DigiCert
-	Original domain certificate - You can upload your existing domain certificate
  to the Imperva App Protect service

While you can always choose to upload your own domain certificate, Rackspace
and Imperva highly recommend use of the Imperva-issued certificate.
Imperva-issued certificate has two advantages over a custom certificate:

- Certificate management is less burdensome as the certificate is automatically
  renewed unless an issue arises
- Non-SNI supporting clients are supported by Imperva

If you re-use CNAMEs so that multiple domains point to the same site, it might
not be best to use an Imperva-issued certificate. In this case a domain SAN
certificate should be uploaded instead so that traffic can be encrypted
without issues.

**When to issue an Imperva certificate.**

- An Imperva certificate should be issued for every site

**When to use a custom certificate**

- Requirement to present only an EV certificate or customer-issued certificate
- SAN cert is required to support multiple domains utilizing CNAME re-use

**If I open a ticket, what information would Rackspace need?**

- If you need a custom certificate applied to a site, create a ticket with
  the certificate and key in .PEM or .PFX format. Supply the password if
  encrypted
- If you need an Imperva-issued certificate, indicate for which site. Rackspace
  will provide you with the DNS challenge in return for domain validation.

For more information, see
[Imperva App Protect - Configure SSL/TLS](https://docs.imperva.com/bundle/cloud-application-security/page/settings/general-settings.htm#SSLsupport).

#### Safelisting known non-browser clients

Rackspace and Imperva recommend excluding known good non-browser-based
clients in the Imperva App Protect offering. The service includes both
bot classification and mitigation capabilities which challenges all
needed connections to your site. However, not all bots (non-browser clients)
are malicious and in some cases need to be excluded from the classification
engine to prevent issues.

The classification engine injects cookies and JavaScript into the HTTP
responses for all end clients to facilitate classification, but most bots are
unable to process the challenges that classify the bot affecting their
function or effectiveness. For known known non-browser clients such as
monitoring service, thick clients, mobile application, application API, and
so on, it is recommended to exclude these from the bot classification
service. The service excludes clients classified as Search Bots and
Site Helpers by default:

| **Bot Type**  | **Description** |
| ------------- | ------------- |
| Search Bot  | A bot that searches data and indexes it for later use by a search engine. For example, Googlebot, Bingbot |
| Site Helper  | Tools or services that send requests to a website for a positive purpose, usually by the site owner or host, such as health checkers, broken link checkers, or performance checkers. For example: Rackspace Monitoring Agent, Amazon Route 53 Health Checks  |

For more information about classification, see
[Imperva App Protect - Client Classification](https://docs.imperva.com/bundle/cloud-application-security/page/settings/client-classification.htm#Clienttypes).

**When to safelist**

- When you have known non-browser-based clients that need to reach the
  site that cannot process cookies or JavaScript

**When not to safelist**

- When you have no known non-browser-based clients that would need to
  reach the site outside of those already allowed

**If I open a ticket, what information would Rackspace need?**

- To which site to apply the exclusion
- A list of known non-browser clients, such as monitoring service,
  application API, and so on, that would need to be allowed access to the
  site. Rackspace requires identifiable information on these clients to
  exclude them (such as URL Visited, IP, Country, and User Agent).

For more information about bot mitigation, see
[Imperva App Protect - Bot Mitigation](https://docs.imperva.com/bundle/cloud-application-security/page/settings/security-settings.htm).

#### User management

You are provided access to the
[Imperva cloud console](https://my.imperva.com/admin/login) initially during
onboarding or by request to Rackspace. As you can make changes to the site security and
functionality in the cloud console, access should be restricted to only
authorized personal. Rackspace highly recommends that two-factor authentication
(2FA) is enforced for all console users and access review is performed at
least every 90 days.

**When to enforce 2FA**

- When all end users can use secondary authentication via SMS, Google
  Authenticator, or e-mail

**When to perform 90-day access review**

- Rackspace recommends always performing account reviews for all offerings to
  ensure proper access to granted

**If I open a ticket to remove a user what does Rackspace need**

- Which user you want to be remove

For more information about user management and two-factor authentication, see
[Imperva App Protect - User Modifications](https://docs.imperva.com/bundle/cloud-application-security/page/settings/account-users.htm)
and
[Imperva App Protect - 2FA Enablement](https://docs.imperva.com/bundle/cloud-application-security/page/settings/user-settings.htm#Enabletwofactorauthentication).

#### Data storage regions

Imperva provides the ability to control in which region of the world
customer data associated with the Imperva App Protect solution is stored. Due
to specific regulations, customers might need to adjust the region in which
their data is stored to comply.

The data stored for your account includes:

- Events, as displayed on the Events page in the Cloud Security Console, and
  the associated threat alerts based on the events. Threat alerts are generated
  by the Imperva Cloud Security Console and are also stored temporarily in
  the selected region.
- SIEM integration weblogs
- Network layer 3/4 headers, which contain IP addresses

By default, Imperva assigns a region to a site based on geolocation of the
origin server registered for the site. Rackspace recommends reviewing any
regulations that might apply to the data collected by Imperva and adjusting
the data region as needed.

**When to change regions**

- When regulations or compliance dictate that data for a particular site
  live in a specific region of the world

**When not to change regions**

- When no need arises to geo-locate the site data

**If I open a ticket, what information would Rackspace need?**

- To which Site to apply the change
- To which [region](https://docs.imperva.com/bundle/cloud-application-security/page/more/data-privacy.htm#Datastorageregions) you want to bind the data

For more information about setting the data region, see
[Imperva App Protect - Setting Data Region](https://docs.imperva.com/bundle/cloud-application-security/page/settings/general-settings.htm).

#### Restricting origin server access to Imperva only

To prevent bypassing the protections provided by the Imperva App Protect
solution, it is recommended that access is restricted to only Imperva IP ranges
and approved ranges that you need to access the site directly, such as
monitoring systems.

To help protect the origin server and associated environment, there are a
few best practices that you should follow to ensure the least exposure possible
from an information gathering standpoint as well as minimizing the attack
surface.

1. Update the firewall with IP Restriction Rules to allow web traffic from only
   Imperva App Protect IPs and specific safelisted IPs

   Imperva App Protect acts as a proxy for all incoming HTTP/HTTPs traffic.
   There should be no reason to accept traffic from anywhere but the
   Imperva cloud network. Therefore, we strongly suggest setting IP
   restriction rules - using firewall or IP tables - that blocks all traffic
   from non-Imperva IP addresses and non-approved IPs. These restriction
   rules block attempts to circumvent the protection of the Imperva cloud
   network and your origin server will be immune to scanners that might try
   looking for IP data in SSL certificates stored on your server. A list of
   Imperva IP ranges can be found [here](https://docs.imperva.com/howto/c85245b7)
   or polled via the
   [API](https://docs.imperva.com/bundle/cloud-application-security/page/api/integration-api.htm#GetImpervaIPranges).

   **Note**: Rackspace does not automatically adjust firewall rules if the
   ranges change. You must contact Support to update the firewall rules if the
   IP ranges change.

2. Avoid generic subdomain names

   Subdomains not protected by Imperva App Protect could reveal your true
   origin server IP address and are therefore a target for scanners. Knowing
   that, if you are using for example a subdomain to establish FTP
   connections with your origin server, you should avoid the obvious choice
   of **ftp.mydomain.com**; instead, go with something more secure and unique
   like **4exampleftp.mydomain.com**.

3. Don't leave a trace in DNS records

   Onboarding cloud-based security services require you to change your
   A and CNAME records, but not your MX record or any other record that you
   have set to point to your main server. Any of these can be resolved to
   uncover origin IP addresses. Our suggestion is to review your DNS records
   and remove the ones that are not in use.

   You might also consider migrating some of your services; In the case of the
   MX records, for example, if origin exposure is your main concern, then the
   secure thing to do is to migrate your email service to a different server.

4. Lock down sensitive data

   Various systems and server logs (for example, `.php` and `.info`) might be
   publicly accessible and used to expose sensitive information, including
   your origin IP address. Files like these should never be made public and
   not only for concerns of direct-to-origin attacks.

5. Disable visitor-triggered outbound connections

   If your site is running on WordPress using XMLRPC, your origin IP address
   might be exposed by a third party using a pingback request. We recommend
   disabling pingback – either using server configuration or WAF rules - unless
   you are absolutely depending on its functionality.

   This can also occur because of using referrer validation mechanisms, which
   inspect the URLs used in the request’s referrer header. If your web
   application relies on referrer validations, we strongly suggest having
   them run on a different server.

### Performance and content optimizations

Use the following best practices for optimizing performance and content:

#### Cache shield

Rackspace and Imperva recommend enabling
[cache shield](https://docs.imperva.com/bundle/cloud-application-security/page/settings/cache-shield.htm),
which adds an intermediate cache between other Imperva PoPs and your origin
servers to protect your servers from redundant requests.

Cache shield

- Reduces spikes on the origin during high request periods, such as after a
  cache purge
- Increases likelihood of cache hits as all requests go through one PoP; and
- Reduces outgoing traffic from your public cloud origin and decreases your
  monthly bill.

**When to enable cache shield**

- If caching is enabled on the site

**When not to enable cache shield**

- Origin rate limiting might be in place, potentially conflicting with all
  requests coming from a specific range of IPs
- If caching is not enabled on the site

**If I open a ticket, what information would Rackspace need?**

- On which site you need cache shield enabled

For more information about cache shield, see
[Imperva App Protect - Cache Shield](https://docs.imperva.com/bundle/cloud-application-security/page/settings/cache-shield.htm).

#### Dynamic content acceleration

Rackspace recommends enabling dynamic content acceleration by selecting an
origin server. When a client request is made for dynamic resources (resources
that are not cached on the Imperva proxy), the request must be sent on to
your origin server. The Dynamic Content Acceleration service routes this
traffic across the network, between Imperva PoPs, resulting in improved
performance.

Imperva CDN can improve response times by using high-quality connectivity
between Imperva network PoPs. Rackspace automatically selects the PoP with the
best connectivity for your site to set as the Origin PoP. After configured,
traffic generally routes through this origin PoP to decrease round trip
time (RTT) by improving the networking connection, TCP session re-use, and
cached results from the Origin Pop can be used at other PoPs. Adjustments can
be made to the Origin PoP at any time if needed.

**When to select an origin server**

- Always should be done to create the fastest end user experience.


**If I open a ticket, what information would Rackspace need?**

- Create a ticket to enable dynamic content acceleration on a particular
  site. Rackspace selects the Imperva recommended origin datacenter and lets
  you know for each site which one was selected. If you need to override for
  any reason, please let us know.

For more information, see
[Imperva App Protect - Dynamic Content Acceleration](https://docs.imperva.com/bundle/cloud-application-security/page/settings/pop2pop.htm).

#### HTTP/2

Rackspace recommends that you strive to adopt the latest technologies for
your websites to increase performance. HTTP/2 drastically improves performance
of web applications.

**Enhancing Website Performance**

- Multiple requests served by a single server connection: When HTTP is used
  to surf a website, the first request retrieves the page. Other items attached
  to the page, such as JavaScript or images, must each be retrieved by a
  separate additional request.

- HTTP/2 provides browser multiplexing so that multiple requests can be
  passed through a single server connection. This enables the server to push
  several resources at once, which causes the pages to load more efficiently
  and reduces network load.

- Transmission in binary code: Older HTTP versions send data via text, which
  is then translated by the host through parsing. HTTP/2 transfers information
  in binary code, which speeds up the connections by offloading the data
  transformation efforts.

**When to use HTTP/2**

- You want to increase site performance

**When not to use HTTP/2**

- Unknown, but if a test or staging site is available, it is recommended to
  enable HTTP/2 and test first to ensure no unexpected outcomes arise

**If I open a ticket, what information would Rackspace need?**

- Site on which you would like HTTP/2 enabled

For more information about HTTP/2, see
[Imperva App Protect - HTTP/2 FAQ](https://docs.imperva.com/bundle/cloud-application-security/page/faq/http2-faq.htm)
and
[Imperva App Protect - Enable HTTP/2](https://docs.imperva.com/bundle/cloud-application-security/page/settings/delivery-settings.htm#Network).

#### Error page branding

Rackspace recommends re-branding the
[error page](https://docs.imperva.com/bundle/cloud-application-security/page/error-codes.htm)
that is presented to an end user when something goes wrong. Re-branding the
default page to match the site can improve the end user experience or can
direct the end user where to go to seek resolution or report the issue.

| Error Type | Displayed When |
| --- | --- |
| Connection timeout | The connection between the client and Imperva timed out |
| Access denied | Security rules were triggered |
| Unable to parse request | Imperva could not parse the HTTP request sent by the client |
| Unable to parse response | Imperva could not parse the HTTP response sent by the origin server |
| Unable to connect to origin server | Imperva could not connect to the origin server |
| Unable to establish SSL connection | Imperva could not establish an SSL connection to the origin server |
| Initial connection denied - CAPTCHA required | The request is blocked pending a CAPTCHA challenge |
| Site not configured for SSL | The request is attempting to access the site via SSL, but the site is not configured for SSL in the Cloud Security Console |

Following is the default template for the error page as of March 30th, 2021:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet">
    <title>[Error Title]</title>
    <style type="text/css">
      body {
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        color: #000000;
        background: #E8E8E8;
      }

      .container {
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        max-width: 100%;
        margin: 0 auto;
        padding: 15px;
      }

      .container-inner {
        background: #FFFFFF;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
      }

      .header {
        width: 100%;
        background: #F3F3F3;
        border-radius: 8px 8px 0 0;
        display: flex;
        align-items: center;
      }

      .error-description {
        padding: 35px 42px;
        font-size: 14px;
        font-weight: 500;
        color: #232323;
      }

      .error-description .error-title {
        line-height: 17px;
        margin-bottom: 4px;
      }

      .error-description .error-code {
        font-weight: bold;
        font-size: 32px;
        line-height: 39px;
        margin-bottom: 4px;
      }

      .error-description .hostname {
        line-height: 20px;
        margin-bottom: 2px;
      }

      .error-description .date {
        line-height: 17px;
        color: #727272;
      }

      .main {
        padding: 42px;
      }

      .troubleshooting {
        display: flex;
        flex-direction: row;
      }

      .troubleshooting .title {
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 17px;
      }

      .troubleshooting .content {
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-width: 0;
      }

      .troubleshooting .content .description {
        line-height: 18px;
        margin-bottom: 35px;
      }

      .troubleshooting .parentheses-text {
        color: #727272;
      }

      .info-container .info {
        line-height: 15px;
      }

      .info-container .info:not(:last-child) {
        margin-bottom: 8px;
      }

      .info-container .info .value {
        color: #285AE6;
      }

      .powered-by {
        margin-top: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .powered-by .copyrights {
        color: #000000;
        text-decoration: none;
        font-size: 0;
      }

      .powered-by .copyrights::before {
        display: inline-block;
        content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTgiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCA1OCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjYzNDkwMyAyLjMxMTQ5SDIuOTQ2MzlWMEgwLjYzNDkwM1YyLjMxMTQ5Wk01NS45NjY1IDEyLjg0MzVINTQuODEwOVYxNS4xNTQ2SDU3LjEyMjRWMTIuODQzNUg1NS45NjY1WiIgZmlsbD0iIzI4NUFFNiIvPgo8bWFzayBpZD0ibWFzazAiIG1hc2stdHlwZT0iYWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjMiIHdpZHRoPSI1OCIgaGVpZ2h0PSIxMyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMC42MzQ5MDMgMy4yMjQ2NEg1Ny4xMjI1VjE1LjE1ODdIMC42MzQ5MDNWMy4yMjQ2NFoiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMCkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTU0LjgxMSA4Ljg3MjI0QzU0LjYwNTkgOC40MjQ4NSA1My45OTExIDguMTQ1MjcgNTMuMzM4MiA4LjE0NTI3QzUyLjYxMTYgOC4xNDUyNyA1MS44NjU4IDguNDYyMDkgNTEuODY1OCA5LjE3MDY1QzUxLjg2NTggOS44OTc2MiA1Mi42MTE2IDEwLjE5NTYgNTMuMzM4MiAxMC4xOTU2QzUzLjk5MTEgMTAuMTk1NiA1NC42MDU5IDkuOTE2MDQgNTQuODExIDkuNDY5MDVWOC44NzIyNFpNNTQuODEwOCA2LjU0MzAzQzU0LjgxMDggNS43NDE1NiA1NC4xMjExIDUuMjM4NDkgNTIuOTQ3MiA1LjIzODQ5QzUyLjEwOCA1LjIzODQ5IDUxLjMyNSA1LjQ4MDgxIDUwLjY3MjkgNS45MDkzOFYzLjkxNDcyQzUxLjI2OTMgMy41NDIyMiA1Mi4zNTA0IDMuMjI1NCA1My40NTAyIDMuMjI1NEM1NS43NDI5IDMuMjI1NCA1Ny4xMjIzIDQuMzk5NzcgNTcuMTIyMyA2LjQzMTI4VjExLjc0NEg1NC44MTA4VjExLjI5NjZDNTQuNTMxMyAxMS41NzYyIDUzLjcxMSAxMS44OTMgNTIuNzk3OCAxMS44OTNDNTEuMTIwMyAxMS44OTMgNDkuNzIyIDEwLjkyMzcgNDkuNzIyIDkuMTkwMTdDNDkuNzIyIDcuNjA1NjUgNTEuMTIwMyA2LjUyNDYxIDUyLjk0NzIgNi41MjQ2MUM1My42NzM3IDYuNTI0NjEgNTQuNDc1MiA2Ljc2NjkzIDU0LjgxMDggNy4wMDkyNVY2LjU0MzAzWk00NC40MTk0IDExLjc0NDdMNDEuMjY5MiAzLjQxMjM5SDQzLjY5MjVMNDUuNjEyNiA4Ljk0ODU4TDQ3LjQ5NTEgMy40MTIzOUg0OS44MjVMNDYuNjU2NCAxMS43NDQ3SDQ0LjQxOTRaTTQwLjgyNzQgNS42ODU4OUM0MC41MTA2IDUuNDk5MjMgNDAuMTAwNCA1LjQwNjMyIDM5LjY3MTkgNS40MDYzMkMzOC44ODg4IDUuNDA2MzIgMzguMjU1MiA1LjgxNjA2IDM4LjA4NzMgNi41ODA2OVYxMS43NDRIMzUuNzc1OFYzLjQxMTY1SDM4LjA4NzNWNC4yMzE5NUMzOC40NDE0IDMuNjM1NTUgMzkuMTMxMSAzLjIyNTQgMzkuOTUxNCAzLjIyNTRDNDAuMzQyOCAzLjIyNTQgNDAuNjk2OCAzLjI5OTkgNDAuODI3NCAzLjM3NDRWNS42ODU4OVpNMjkuMjM5MyA2LjU5OTFIMzIuMzg5NUMzMi4zMzM0IDUuNzA0MyAzMS44MzAzIDUuMDcwNjYgMzAuOTE3MSA1LjA3MDY2QzMwLjE1MjUgNS4wNzA2NiAyOS41IDUuNTU1MyAyOS4yMzkzIDYuNTk5MVpNMjkuMTY1MiA4LjEwOTEzQzI5LjM1MTQgOS40NzAxNSAzMC4zMzk2IDEwLjAyODkgMzEuNTY5NiAxMC4wMjg5QzMyLjQ4MzIgMTAuMDI4OSAzMy4xMzUzIDkuODI0MjIgMzMuOTU1NiA5LjMwMjMyVjExLjIwMzNDMzMuMjY1OSAxMS43MDY3IDMyLjMzMzggMTEuOTMwMiAzMS4yMTU1IDExLjkzMDJDMjguNjgwNiAxMS45MzAyIDI2Ljk0NjYgMTAuMjkgMjYuOTQ2NiA3LjY0MzMxQzI2Ljk0NjYgNS4wMzM0MiAyOC41ODcyIDMuMjI1NCAzMC44NjExIDMuMjI1NEMzMy4yODQ3IDMuMjI1NCAzNC41MzM2IDQuOTAyODQgMzQuNTMzNiA3LjM2MzMzVjguMTA5MTNIMjkuMTY1MlpNMjAuMTcwOSA4Ljk0ODZDMjAuNDUwOSA5LjUyNjU3IDIxLjA2NTcgOS45MTc4OSAyMS43MzcgOS45MTc4OUMyMi45ODU4IDkuOTE3ODkgMjMuNzMxMiA4LjkxMTM1IDIzLjczMTIgNy41ODc5OEMyMy43MzEyIDYuMjQ1NzkgMjIuOTg1OCA1LjIzOTI0IDIxLjczNyA1LjIzOTI0QzIxLjA0NzMgNS4yMzkyNCAyMC40NTA5IDUuNjQ5MzkgMjAuMTcwOSA2LjIwODU0VjguOTQ4NlpNMjAuMTcxMSAxNS4xNTk0SDE3Ljg2VjMuNDExNjVIMjAuMTcxMVY0LjEwMTM3QzIwLjU0NCAzLjY1Mzk3IDIxLjM2NDMgMy4yMjU0IDIyLjI1OTEgMy4yMjU0QzI0LjY4MjMgMy4yMjU0IDI2LjA2MTggNS4yMzg0OSAyNi4wNjE4IDcuNTg3MjNDMjYuMDYxOCA5LjkzNTk3IDI0LjY4MjMgMTEuOTMwMiAyMi4yNTkxIDExLjkzMDJDMjEuMzY0MyAxMS45MzAyIDIwLjU0NCAxMS41MDE3IDIwLjE3MTEgMTEuMDU0M1YxNS4xNTk0Wk0xMy42MzQ4IDMuMjI1NEMxNS4zNDk5IDMuMjI1NCAxNi4zNzQ4IDQuNDE4MTkgMTYuMzc0OCA2LjMwMTExVjExLjc0NEgxNC4wNjM4VjYuNzg1NzZDMTQuMDYzOCA1Ljg5MDk2IDEzLjY3MiA1LjI5NDU3IDEyLjg3MDYgNS4yOTQ1N0MxMi4yNzQyIDUuMjk0NTcgMTEuNzMzNCA1LjY2NzA2IDExLjU4NDQgNi4zNzU2MVYxMS43NDRIOS4yNTQxMlY2Ljc4NTc2QzkuMjU0MTIgNS44OTA5NiA4Ljg4MTYzIDUuMjk0NTcgOC4wODAxNiA1LjI5NDU3QzcuNDgzMzYgNS4yOTQ1NyA2LjkyNDIxIDUuNjY3MDYgNi43NzUyMiA2LjM3NTYxVjExLjc0NEg0LjQ2MzczVjMuNDExNjVINi43NzUyMlY0LjEwMTM3QzcuMTg1MzcgMy41Nzk0NyA3Ljk0OTU5IDMuMjI1NCA4Ljg4MTYzIDMuMjI1NEM5Ljg2OTM1IDMuMjI1NCAxMC42NTI0IDMuNjcyOCAxMS4xMTgyIDQuMjg4MDNDMTEuNjU4OSAzLjY5MTIyIDEyLjQ2MDQgMy4yMjU0IDEzLjYzNDggMy4yMjU0Wk0yLjk0NjA3IDExLjc0NDdIMC42MzQ5ODdWMy40MTIzOUgxLjc5MDUzSDIuOTQ2MDdWMTEuNzQ0N1oiIGZpbGw9IiMyODVBRTYiLz4KPC9nPgo8L3N2Zz4K")
      }

      .powered-by .text {
        font-weight: 300;
        font-size: 11px;
        font-style: italic;
        line-height: 15px;
        margin-right: 10px;
      }

      @media (min-width: 768px) {
        .container {
          width: 817px;
          max-width: 100%;
          margin: 15vh auto;
        }
      }

      @media (max-width: 767px) {
        .container {
          width: 507px;
        }
      }

      @media (max-width: 400px) {
        .container {
          padding: 0;
        }

        .error-description .error-code {
          font-size: 26px;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="container-inner">
        <div class="header">
          <div class="error-description">
            $TITLE$
          </div>
        </div>
        <div class="main">
          <div class="troubleshooting">
            <div class="content">
              $BODY$
            </div>
          </div>
        </div>
      </div>
      <div class="powered-by">
        <span class="text">Powered by</span>
        <a href="https://www.imperva.com/why-am-i-seeing-this-page/?src=23&amp;utm_source=blockingpages" target="_blank" class="copyrights">Imperva</a>
      </div>
    </div>
  </body>
</html>
```


**When to re-brand the error page**

- When dev resources are available to re-brand the error page
- When a need arises to allow end users to report issues to a help desk

**When not to re-brand the error page**

- Dev resources cannot be devoted to re-branding the error pages for each
  site protected by Imperva

**If I open a ticket, what information would Rackspace need?**

- The error page URL
- The site to which to apply the error page. If the error page is error-specific, be
  sure to note this.

For more information about the error page, see
[Imperva App Protect - Error Pages](https://docs.imperva.com/bundle/cloud-application-security/page/error-pages.htm#Configureacustomerrorpageforallwebsitesinyouraccount).
