---
permalink: ssl-basics
title: SSL Basics
type: article
created_by: Coral Moore
created_date: '2021-04-26'
last_modified_date: '2021-07-12'
last_modified_by: Ana Corpus
audit_date: cloud-servers
cloud_product: cloud-servers
---

Secure Socket Layer (SSL) encrypts all sensitive data travelling between a client and a server. A website that uses SSL displays a padlock symbol in the browser, which you can click to see more information.

SSL has four layers of encryption:

  * **CSR:** The Certificate Signing Request contains information about your domain, your business, and what SSL covers for you. 
  
  * **Key:** Generated along with the CSR.
  
  * **Cert:** A Certificate.
  
  * **CA:** The Certificate Authority.

There are several SSL vendors, for example: 
Vendor | Advantages
-|-
Let's Encrypt&reg; | Free, lasts 6 months.
Rackspace&reg; | Extra secure, lasts 1-2 years, easy to use
Purchase directly with an SSL vendor | Extra secure, lasts 1-2 years.

Decide whether you want a free SSL, or whether you want to purchase one from an SSL vendor.

If you just need the encryption, you can use a software called **Let's Encrypt** to generate an SSL certificate for free. **Let's Encrypt** is a non-profit certificate authority which provides 90 day-long certificates during which renewal can take place at any time.

If you need more security to comply with the Payment Card Industry (PCI), you need to purchase an SSL certificate from a vendor like Thawte&reg; or Verisign&reg;. These SSL companies, apart from providing you an SSL certificate, verify that your business is legitimate and that you own it.

The padlock in the browser show people accessing your website that your business has been verified, which is an extra security measure. This service varies in costs, depending on the level of security needed, and typically lasts for a year or two.

If you need an SSL certificate quickly, purchase a cost-effective SSL certificate because they make less security checks. Part of those security checks involve the SSL vendor contacting you by phone or email. Check the email regularly and respond as soon as you can to speed the process.

### Purchase through Rackspace

If you have a dedicated account with at least one active Linux® or Windows® dedicated server, you can purchase your SSL certificate through Rackspace.

We handle most of the process for you: 
  - We generate the initial CSR. 
  - Communicate with the SSL vendor. 
  - Keep the encryption files. 
  - Install the SSL certificate. 
  - Remind you via a ticket when the SSL certificate is due for renewal.

To purchase a certificate:

  - Go to [my.rackspace.com](http://my.rackspace.com).
  - Select **Network** at the top of the page.
  - Select **SSL Certificates > Actions > Purchase Certificate**

You will get an email from the SSL vendor which you need to reply to continue the process. We receive the SSL certificate, and you decide whether Rackspace or you install the certificate.

### Purchase from an SSL vendor

If you purchase an SSL certificate from an SSL vendor, generate a CSR. A CSR is a file with encrypted text which includes information about your business, your domain, and a public key for the SSL vendor.

**Note:** You don't need a CSR if you renew the SSL certificate and the previous information is still valid.
### How to generate a CSR

You can generate a CSR in the following ways:

  - If you have a Cloud account, use our [CSR Generator](https://csrgenerator.rackspace.com).

  - If you want to generate the CSR, use [this guide](https://docs.rackspace.com/support/how-to/generate-a-csr).
  - If you want Rackspace to generate sn SSL certificate for you, log a ticket with the following details: 

     - Common Name (example.com)       
     - Include "www" and "non-www"?
     - Y/N
     - Alternative Names               
     - Organization                       
     - Locality (city)              
     - State (full name)              
     - Country Name (2 letter code)      

The CSR generates a key. ***Ensure to save the key***, as it can't be retrieved later, and SSL doesn't work without it. Use the CSR to purchase your SSL certificate.

For more information, [visit this page.](https://docs.rackspace.com/support/how-to/purchase-or-renew-an-ssl-certificate)

### SSL Verification

The SSL vendor will provide the SSL certificate, the key, and CA after it completes the security checks. These components are required for a complete installation.

   - **Key** - Generated with the original CSR. Can be retrieved from a previous installation if you are only renewing your SSL.

   - **Certificate** - Provided by the SSL vendor.

   - **CA** - Rackspace can retrieve this for you if you have the key and certificate.

Where to find your private key:

  - You can retrieve your key from your previous SSL certificate if it is a renewal and the company details haven't changed.

  - If you created the CSR in your server, the key should be in the server.

  - If you created the CSR with an online tool, the key should be stored in the server.
 
  - If Rackspace created the CSR, find the key in the ticket.

Without the key, you need to start another process to obtain an SSL certificate. 

### Verify the SSL certificate installation

You can visit your website, and click on the padlock in your browser. There should be an option to see more information.

You can verify the installation with **curl**: 

```sh
$ curl -vI https://example.com 2>&1 | egrep 'start|expire|common|issuer|OK'
 *       start date: Aug 21 00:00:00 2019 GMT
 *       expire date: Sep 19 12:00:00 2020 GMT
 *       common name: example.com
 *       issuer: CN=RapidSSL RSA CA 2018,OU=www.digicert.com,O=DigiCert Inc,C=US
 < HTTP/1.1 200 OK
 ```

**Note:** If you need the SSL certificate installed on your hardware firewall, raise a support ticket.

Further references: 

[How to install an SSL on your server.](https://docs.rackspace.com/support/how-to/install-an-ssl-certificate)
[How to install a new SSL on a Cloud Load Balancer.](https://support.rackspace.com/how-to/configure-SSL-certificates-on-cloud-load-balancers)
[How to configure multiple SSLs on a Cloud Load Balancer.](https://support.rackspace.com/how-to/configure-multiple-SSL-certificates-on-cloud-load-balancers)
[How to force web traffic to SSL with HTTPS Redirect.](https://docs.rackspace.com/support/how-to/configure-a-load-balancer#additional-configuration-options)