---
permalink: wildcard-ssl-overview
audit_date: '2020-03-27'
title: Wildcard SSL overview
type: article
created_date: '2020-03-18'
created_by: Benji Ivey
last_modified_date: '2020-03-27'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

### What are wildcard SSL certificates?

A wildcard certificate is a Secure Sockets Layer (SSL) certificate with a wildcard character in the domain name field, such as **\*.(yourdomain).com**. A wildcard certificate secures a domain and many sub-domains as long as they have the same root domain. For example, the certificate **\*.([yourdomain.com]**(https://yourdomain.com)) can be used for [**www.yourdomain.com**](https://www.yourdomain.com), [**mail.yourdomain.com**](https://mail.yourdomain.com), or any other additional sub-domain under [**yourdomain.com**](https://yourdomain.com).

### Regular certificates versus Wildcard certificates

**Similarities**:

- They have the same industry encryption strength.
- Both come standard with 2048-bit RSA signature keys and facilitate encryption up to 256 bits.

**Differences**:

- Regular SSL certificates can only cover one domain and one sub-domain.
- Wildcard SSL certificates can cover a domain with multiple sub-domains.

### Drawbacks to using wildcard certficates

After you share your private key across all your sub-domains, you might have a problem. If your website is situated on one server, there are no issues. However, if your sub-domains are scattered on different servers, you need to share your private key. If you are securing multiple public-facing sub-domains, a compromised key impacts the security of all of your subdomains instead of just one.

### Conclusion

If you have a website with multiple sub-domains, we recommend a wildcard SSL certificate from a cost perspective and to make managing multiple SSL certificates easier.
