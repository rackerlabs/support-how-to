---
permalink: types-of-ssl-certificates/
audit_date:
title: ‘Types of SSL certificates’
type: article
created_date: '2020-05-04
created_by: Karoline Mills
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

## Types of SSL certificates

This article provides an overview of the different types of SSL certificates and their uses. It also describes commonly used terminology. 

### SSL certificate

An SSL (secure socket layer) certificate is a digital certificate that creates a trusted environment for the user. It provides a secure, encrypted channel between a web server and a web browser used by a client. This encrypted channel ensures that the information exchanged between server and client, for example credit card numbers, cannot be stolen. When browsing a website not secured with an SSL certificate, web browsers show 'not secure' next to the domain in the address bar. Websites secured with a certificate, show a padlock next to the domain.

### Certificate authority (CA)

A certificate authority is a company that issues digital certificates. It validates the identity of a person or organization responsible for a domain.  In the context of websites, a CA is a third party that is trusted by both the owner of a domain as well as the web browser through which the user accesses the site. If a website is secured by a certificate that was not purchased from a trusted CA, the web browser will not trust it. Some well-known certificate authorities include Comodo, DigiCert, GlobalSign and GoDaddy.

### CSR (certificate signing request)

A CSR contains all the information needed to purchase an SSL certificate. The CSR provides this information to the certificate authority in a standardized form. The following information is necessary to generate a CSR:

•	**Domain Common Name:** www.example.com
•	**Organization Name:** Company Inc.
•	**City:** San Antonio
•	**State:** TX
•	**Country:** USA
Additionally the following information may be provided, but is optional:
•	**Alt. names / non-www:** sub.example.com, example.com
•	**Email Address:** admin@mygreatcompany.com
•	**Organizational Unit:** Accounting Department

Please refer to [How to generate a CSR](https://support.rackspace.com/how-to/generate-a-csr/) if you want to obtain a CSR. If you are renewing an SSL certificate and the organization’s information has not changed, a new CSR is not necessary.

## Types of validation

All the below mentioned certificates offer the same level of encryption. They differ in how rigorous the domain ownership authentication process is. Depending on your company’s needs, you can choose between one of the following certificates:
-	**Extended validation (EV)**

This is the most expensive SSL certificate requiring the most extensive validation process. Not all CAs offer these certificates. To purchase an EV certificate, the buyer has to undergo a globally standardized procedure to prove ownership. This process can take up to five business days. It is verified that the company has exclusive rights to the domain, is a legally registered entity, has been operational for three or more years, has a physical address and working phone number. When seeing an EV certificate, the customer gains visibility regarding ownership of the company responsible for the website.
It used to be easy to identify websites secured by an EV certificate. The company name and location would show up in green font on the left side of the address bar. However, some browsers have now removed the feature that shows the company name and location in green. To see whether an SSL certificate is EV, you have to click on the padlock and view the certificate details. Overall, usage of EV certificates is on the decline.

-	**Organization validated (OV)**

The verification process for this certificate is similar to the EV mentioned above, but less extensive. It needs to be verified that the company is a legal entity and that the requestor has authorization to purchase a certificate on behalf of the company. This validation process can take up to three business days. When seeing an OV certificate, the customer gains some visibility regarding ownership of the website.

-	**Domain validated (DV)**

This certificate is the easiest and fastest to obtain. It can be issued within minutes. To purchase a DV certificate, the buyer only has to prove domain ownership. When navigating to a website secured by a DV certificate, the user will not know which company is associated with the site. If users have to enter sensitive information, such as credit card numbers and contact information, this certificate is not a satisfactory option. 

## Number of domains secured 

Certificates not only differ in the validation type but also in the number and type of domains they secure. When purchasing an SSL certificate, buyers can choose between one of the following:

-	**Single domain certificate**

This certificate is the right choice if only one domain needs to be secured, for example domain.com. The “www” as well as the “non-www” version of the domain can be secured as long as the CSR was created including both.

-	**Wildcard certificate**

This certificate secures a root domain as well as all its subdomains, for example domain.com, mail.domain.com and dev.domain.com. If multiple subdomains need to secured, a wildcard certificate saves money as well as lowers the administrative effort. 

-	**Multi-Domain or SAN (subject alternative name) certificate**

This certificate provides the most flexibility. It is used to secure multiple different domains. This means, that you could secure domain.com, test.net, and mail.example.com with just one certificate. Certificate authorities usually allow customers to change or add domains to a SAN certificate at any time during its validity period. This can accomplished by requesting a certificate re-issue. If you want to secure multiple different domains, a multi-domain certificate saves money as well as lowers the administrative effort. 

## Related Articles

[How to generate a CSR](https://support.rackspace.com/how-to/generate-a-csr/)
[Purchasing an SSL certificate through Rackspace](https://support.rackspace.com/how-to/rackspace-ssl-certificates/)
