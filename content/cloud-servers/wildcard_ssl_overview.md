---
permalink: wildcard_ssl_overview/
audit_date:
title: Wildcard SSL Overview
created_date: ‘2020-03-18’
created_by: Benji Ivey
last_modified_date: 
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
type: article
---

## Wildcard SSLs and their uses
A Wildcard Certificate (SSL) is a certificate with a Wildcard character in the domain name field, an example being *.(yourdomain).com. A Wildcard Certificate has the ability to secure a domain and many sub-domains under it as long as they pertain to the same domain. For example the certificate *.(yourdomain.com) can be used for www.yourdomain.com, mail.yourdomain.com, or any other additional sub-domain in the yourdomain.com.

## The difference between a regular SSL and a Wildcard SSL

similarities:
* Same industry encryption strength
* Both come standard with 2048-bit RSA signature keys and facilitate encryption up to 256 bits
differences:
* Regular SSL Certs can only cover one Domain and one sub-domain.
* Wildcard SSL on the other hand can cover a Domain with multiple sub-domains (as many as you want.)


##Drawbacks to using Wildcard SSLs
The drawbacks start coming into play once you start sharing your private key across all your sub-domains. If your website is situated on one server then there will be no issue, but if sub-domains are scattered on different servers you’ll have to share your private key. If you are securing multiple public-facing sub-domains, a compromised key would impact the security of all of your subdomains instead of just one.

For a website with multiple sub-domains, a Wildcard is beneficial from a cost perspective and for avoiding the hassle of managing multiple SSLs.
