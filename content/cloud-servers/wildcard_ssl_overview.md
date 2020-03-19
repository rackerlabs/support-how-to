---
permalink: wildcard_ssl_overview/
audit_date:
title: Wildcard SSL Overview
type: article
created_date: ‘2020-03-18’
created_by: Benji Ivey
last_modified_date: 
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

## What are Wildcard SSL certificates?

A Wildcard Certificate(SSL) is a certificate with a Wildcard character in the domain name field, such as *.(yourdomain).com. A Wildcard Certificate secures a domain and many sub-domains as long as they have the same root domain. For example, the certificate *.([yourdomain.com](http://yourdomain.com)) can be used for [www.yourdomain.com](http://www.yourdomain.com), [mail.yourdomain.com](http://mail.yourdomain.com), or any other additional sub-domain under [yourdomain.com](http://yourdomain.com).

### What are the differences between a regular certificates and Wildcard certificates?

#### Similarities:

* Same industry encryption strength
* Both come standard with 2048-bit RSA signature keys and facilitate encryption up to 256 bits

#### Differences:

* Regular SSL Certs can only cover one Domain and one sub-domain.
* Wildcard SSL on the other hand can cover a Domain with multiple sub-domains (as many as you want.)

### Are there any drawbacks to using Wildcard?

The drawbacks start coming into play once you start sharing your private key across all your sub-domains. If your website is situated on one server then there will be no issue, but if sub-domains are scattered on different servers you'll have to share your private key. If you are securing multiple public-facing sub-domains, a compromised key would impact the security of all of your subdomains instead of just one.

### Conclusion

If you have a website with multiple sub-domains, a Wildcard SSL is strongly recommended from a cost perspective and for lowering the headache of managing multiple SSL certificates.
