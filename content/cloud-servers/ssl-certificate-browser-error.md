---
permalink: ssl-certificate-browser-error/
audit_date:
title: 'SSL Certificate Browser Error'
type: article
created_date: '2020-05-15'
created_by: Dave Myers
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

## Security Certificate Errors:

### Certificate Is Not Trusted in Web Browser Messages:
Browsers has a built-in list of trusted certificate providers for the major Certificate Authorities. For some sites, the certificate provider is not on that list. If this is the case, the browser will warn you that the Certificate Authority (CA) who issued the certificate is not trusted. This issue can also occur if the site has a self-signed certificate. While this warning is fairly generic for Internet Explorer, Firefox will distinguish between a certificate issued by the server itself (a self-signed certificate) and another type of untrusted certificate.
Different browsers will display this message differently. Below we will cover how **Internet Explorer** and **Firefox** displays this error.

**Internet Explorer:** "The security certificate presented by this website was not issued by a trusted certificate authority."

**Firefox:** 

invalid security certificate - The certificate is not trusted because the issuer certificate is unknown.
invalid security certificate - The certificate is not trusted because it is self signed.

## Potential Causes for SSL Errors

Web Browsers have a database of the keys from known Certificate Authorities (CA). So SSLs purchased from the CAs in the supported CAs database will return with no error and have a symbol of a secured lock at the beginning of the Address Bar where the URL is displayed.

An SSL cert. can fail due to a bad key match to with a (CA) Certificate Authority with in the browser's database resulting in a insecure connection.

**Self-Signed Certificates** are mostly used with in a private domain to cut cost of securing through an CA. This still creates a secure connection however will not be recongnized by the browser as being a supported (CA) Certificate Authority and the browser will ask you to confirm Self-Signed cert in which it will add to the database for future reference.

**Intermediate Certificates** are used with more complex higher *trust* of a domain. These is a higher degree of background check of the organization's domain. They also can provide layers of encryption that further secure the *root* certificate. 
