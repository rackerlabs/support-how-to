---
permalink: ssl-certificate-browser-error
audit_date: '2020-05-15'
title: 'SSL certificate browser error'
type: article
created_date: '2020-05-15'
created_by: Dave Myers
last_modified_date: '2020-05-15'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article discusses the Secure Sockets Layer (SSL) security certificates and errors.

### Certificate types

The following certificate types are available:

**Self-signed certificates**: Companies with private domains commonly use self-signed certificates to cut
the cost of securing through a certificate authority (CA). These certificates still create a secure connection,
but browsers do not recognize them as a supported CA. The browser asks you to confirm the
self-signed certificate and adds it to the database of known CAs for future reference.

**Intermediate certificates**: These certificates guarantee greater *trust* of a domain. The CA conducts
a more in-depth background check of the organization's domain. Intermediate certificates also provide layers
of encryption that further secure the *root* certificate. 

### Certificate not trusted in web browser error messages

Browsers have a built-in list of trusted certificate providers for the major CAs. For some sites, the
certificate provider is not on that list. In this case, the browser warns you that the CA who issued
the certificate is not trusted. This issue also occurs if the site has a self-signed certificate. While
this warning is fairly generic for Microsoft&reg; Internet Explorer&reg;, Firefox&reg; distinguishes between
a certificate issued by the server itself (a self-signed certificate) and another type of untrusted certificate.

Browsers display this message differently, as shown in the following examples for **Internet Explorer**
and **Firefox**:

**Internet Explorer message**: 

`The security certificate presented by this website was not issued by a trusted certificate authority.`

**Firefox messages**:

`invalid security certificate - The certificate is not trusted because the issuer certificate is unknown.`

`invalid security certificate - The certificate is not trusted because it is self signed.`

### Potential causes for SSL errors

Web browsers have a database of the keys from known CAs. SSL certificates purchased from the CAs that have a key in
the database return with no error. They also show a symbol of a secured lock at the
beginning of the URL address bar.

An SSL certificate can fail due to a bad key match to the CA in the browser's database, which results
in an insecure connection.
