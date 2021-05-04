---
permalink: types-of-ssl-certificates
audit_date: '2020-05-04'
title: ‘Types of SSL certificates’
type: article
created_date: '2020-05-04'
created_by: Karoline Mills
last_modified_date: '2020-05-06'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

## Types of SSL certificates

This article provides an overview of the different types of Secure Sockets Layer (SSL) certificates and their uses. It also describes commonly used terminology. 

### SSL certificate

An SSL certificate is a digital certificate that creates a trusted environment for the user. It provides a secure, encrypted channel between a web server and a web browser used by a client. This encrypted channel ensures that no one can steal the information exchanged between server and client, such as credit card numbers. When you browse a website not secured with an SSL certificate, web browsers show the text *not secure* next to the domain in the address bar. Sites secured with a certificate show a padlock icon next to the domain.

### Certificate authority 

A certificate authority (CA) is a company that issues digital certificates. The company validates the identity of a person or organization responsible for a domain. A CA is a third-party that both the owner of a domain and the web browser use to access the site trust. When the owners of a website purchase a certificate from a non-trusted CA to secure their site, the web browser does not trust it. Some well-known CAs include Comodo&reg;, DigiCert&reg;, GlobalSign&reg;, and GoDaddy&reg;.

### Certificate signing request

A certificate signing request (CSR) contains all the information needed to purchase an SSL certificate. The CSR provides this information to the CA in a standardized form. The following information is necessary to generate a CSR:

-  **Domain common name:** www.example.com
-  **Organization name:** Company Inc.
-  **City:** San Antonio
-  **State:** TX
-  **Country:** USA

Optionally, you can provide the following information:

-  **Alt. names/non-www:** sub.example.com, example.com
-  **Email address:** admin@mygreatcompany.com
-  **Organizational unit:** Accounting Department

If you want to obtain a CSR, refer to [How to generate a CSR](/support/how-to/generate-a-csr/). If you are renewing an SSL certificate and the organization’s information has not changed, you do not need a new CSR.

### Types of validation

All of the following certificates offer the same level of encryption. They differ in how rigorous the domain ownership authentication process is. Depending on your company’s needs, you can choose between one of the following certificates.

#### Extended Validation

Extended Validation (EV) certificates cost more and require the most extensive validation process. Not all CAs offer these certificates. To purchase an EV certificate, the buyer has to undergo a globally standardized procedure to prove ownership. This process can take up to five business days. The EV certificate verifies that the company has exclusive rights to the domain, is a legally registered entity, has been operational for three or more years, has a physical address, and has a working phone number. When seeing an EV certificate, the customer gains visibility regarding ownership of the company responsible for the website.

It used to be easy to identify websites secured by an EV certificate. The company name and location would show up in green font on the left side of the address bar. However, some browsers have now removed the feature that shows this information. To see whether an SSL certificate is EV, you have to click on the padlock and view the certificate details. Overall, the usage of EV certificates is on the decline.

#### Organization validated

The verification process for an Organization Validated (OV) certificate is similar to the EV certificate but less extensive. The certificate verifies that the company is a legal entity and that the requestor has authorization to purchase a certificate on behalf of the company. This validation process can take up to three business days. When seeing an OV certificate, the customer gains some visibility regarding ownership of the website.

#### Domain validated 

The Domain Validated (DV) certificate is the easiest and fastest to obtain. It can take minutes to issue. To purchase a DV certificate, the buyer only has to prove domain ownership. When navigating to a website secured by a DV certificate, the user does not know which company is associated with the site. If users have to enter sensitive information, such as credit card numbers and contact information, this certificate does not provide adequate protection. 

### Number of domains secured 

Certificates not only differ in the validation type but also in the number and type of domains they secure. When you purchase an SSL certificate, you can choose between one of the following types.

#### Single-domain certificate

A single-domain certificate is the right choice if only one domain needs to be secured, such as **domain.com**. You can secure both the *www* and the *non-www* version of the domain as long as you created a CSR that includes both versions.

#### Wildcard certificate

A wildcard certificate secures a root domain and all its subdomains, for example, **domain.com**, **mail.domain.com**, and **dev.domain.com**. If you need to secure multiple subdomains, a wildcard certificate saves money and lowers your administrative effort. 

#### Multi-domain or Subject Alternative Name certificate

A multi-domain or Subject Alternative Name (SAN) certificate provides the most flexibility. You can use it to secure multiple different domains. Thus, you can secure **domain.com**, **test.net**, and **mail.example.com** with just one certificate. CAs usually allow customers to change or add domains to a SAN certificate at any time during its validity period. You can make changes by requesting a certificate reissue. If you want to secure multiple different domains, a multi-domain certificate saves money and lowers your administrative effort. 

### Related articles

Refer to the following articles for more information:

-  [How to generate a CSR](/support/how-to/generate-a-csr/)

-  [Purchasing an SSL certificate through Rackspace](/support/how-to/rackspace-ssl-certificates/)
