---
permalink: ssl-basics/
title: SSL Basics
type: article
created_by: Coral Moore
created_date: 2021-04-26
last_modified_date: 
last_modified_by: 
audit_date: cloud-servers
cloud_product: cloud-servers
---

# SSL Basics
*For understanding SSLs, what they are, how they work, and how to get, install, and check them.*

# What are SSLs?
++Short answer:++
Encrypt your sensitive data when it's travelling between your computer and the company server

++Long answer:++
SSL stands for Secure Socket Layer.

When you log in to your favourite website and make a purchase, you often need to send sensitive data like your payment information.
To keep your data safe from untrustworthy types, that web site can wrap your data up in a locked packet of encryption.
So that only you the sender and the web site have a copy of your details.
To check this, in your browser, any site with SSL correctly installed should show a small padlock symbol which you can click on to get more information.

### What are SSLs comprised of?
There are 4 layers of encryption involved!
   **CSR**     Certificate Signing Request, containing information about your business, your domain, and what you need your SSL to cover
   **Key**      Generated along with the CSR
   **Cert**     The certificate
   **CA**       Certificate Authority

# How to get an SSL
### Main SSL Choices:
Method | Advantages
-|-
Let'sEncrypt | Free, lasts 6 months
Purchase through Rackspace | Extra secure, lasts 1-2 years, easy
Purchase directly with an SSL company | Extra secure, lasts 1-2 years

### Free vs Purchase
Your first decision will be if you want a free SSL, or if you would like to purchase one from an SSL vendor.

If you just need the encryption, you can use a software called Let'sEncrypt to generate your SSL for free.
Let'sEncrypt is a non-profit certificate authority which provides 90 day long certificates during which renewal can take place at any time.
So they are free, but would need to be renewed more regularly.

However if you need further security for things like PCI (Payment Card Industry) compliance, you would likely need to purchase an SSL from an SSL vendor like Thawte or Verisign.
These SSL companies not only provide you with the SSL, but they first run security checks that your business is legitimate, and that you own it.
And the little padlock in people's browsers will show that they have verified your business as an extra security measure.
Each SSL has it's own costs depending on the level of security needed, and typically last for a year or two.

***Note:*** If you need an SSL quickly, the cheaper ones are the quicker ones to process as they take less security checks.
Part of those checks will usually involve the SSL vendor contacting you by phone or email.
So be sure to check those (including your junk folder) and respond as soon as you can to speed up the process.

# Purchase through Rackspace
If you have a Dedicated account with at least one active Linux® or Windows® dedicated server, you can purchase your SSL through Rackspace!
The main advantage here is that we handle most of the process for you.
From generating the initial CSR, communicating with the SSL vendor, keeping the necessary encryption files safe, installing the SSL, adding the cost to your next monthly invoice, and reminding you via ticket when it is due for renewal.

### How to Purchase
You can peruse, price and purchase the available SSLs in [my.rackspace.com](http://my.rackspace.com) under:
&emsp;&emsp;Network  - at the top of the page
&emsp;&emsp;SSL Certificates
&emsp;&emsp;Actions
&emsp;&emsp;Purchase certificate

Once this has gone through, the third party can process it while we keep you updated with their results.
You will get an email from them which you will need to reply to before they can complete this.
Then, when the SSL is ready, they will pass it to us, and we can either pass it to you (at your request) or install it for you.

# Purchase directly from an SSL Company
If you are purchasing a new SSL directly from an SSL vendor, you will first need to generate a CSR (certificate signing request)
It's an encrypted block of text which includes information about your business, your domain, and your public key to pass over to the SSL company.
They then make your SSL from it.

You will not need a CSR if you are:
 - Using the free Let'sEncrypt (automatically generates one for you)
 - Purchasing through Rackspace (we automatically generate one for you)
 - Renewing your SSL with all of the same details like company name, domain etc. (the previous CSR would apply)

### How to generate a CSR
- If you have a Cloud account, please use our [CSR Generator.](https://csrgenerator.rackspace.com)
- If you would like to generate one yourself, please use [this guide.](https://docs.rackspace.com/support/how-to/generate-a-csr)
- Or if you would like Rackspace to generate one for you, please log a ticket with the following details:

&emsp;&emsp;Common Name (example.com):       
&emsp;&emsp;Include "www" and "non-www"?:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Y/N
&emsp;&emsp;Alternative Names?:                
&emsp;&emsp;Organization:                       
&emsp;&emsp;Locality (city):               
&emsp;&emsp;State (full name):               
&emsp;&emsp;Country Name (2 letter code):      

`When a CSR is generated, a key is made with it.`
**`SAVE the key!`**
`It can't be retrieved later, and the SSL won't work without it!`

You can then use this CSR to take to any SSL vendor you choose and purchase your SSL.

For more information on these options, please [visit this page.](https://docs.rackspace.com/support/how-to/purchase-or-renew-an-ssl-certificate)

# SSL Verification
Once an SSL has been purchased (either through Rackspace or directly) , the SSL vendor will run their security checks.
*Is your company real? Are you who you say you are? Do you own this business?*
And they will AT LEAST send you an email which you will need to respond to.
More expensive SSLs usually involve more security checks.

# Installation:
Once the SSL vendor has provided the SSL certificate, this along with the key and CA will need to be uploaded somewhere.

***Note:*** Please remember that all three components are needed for a full installation.
    **Key** - Generated with the original CSR. Can be retrieved from a previous installation if you are only renewing your SSL.
    **Certificate** - Provided by the SSL vendor
    **CA** - Rackspace can retrieve this for you if you have the Key and Certificate.

### How to Find Your Private Key
- IF none of your company details have changed and you are renewing your SSL, your key can be retrieved from your previous SSL.
- IF you created your CSR on your server, then your private key is already on your machine and you should not need to import it.
- IF you created your CSR using an online tool, then you should have saved your private key on your local machine and can go back and retrieve it to complete your installation.
- IF you asked Rackspace to create the CSR, please reference the ticket, as we should have it saved there.

### If You Can't Find Your Private Key
Private keys are only created when a new CSR is generated. The CSR and the Private Key are a pair.
If you are not able to find your original Private Key, then you will need to create a new CSR (or ask us to) and re-issue (or re-key) your SSL certificate from your account with your SSL vendor.
**Please Note:** To re-issue your SSL, some validation steps may need to be completed again.

[How to install an SSL on your server](https://docs.rackspace.com/support/how-to/install-an-ssl-certificate)

[How to install a new SSL on a Cloud Load Balancer.](https://support.rackspace.com/how-to/configure-SSL-certificates-on-cloud-load-balancers)
[How to configure multiple SSLs on a Cloud Load Balancer.](https://support.rackspace.com/how-to/configure-multiple-SSL-certificates-on-cloud-load-balancers)
[How to force web traffic to SSL with HTTPS Redirect.](https://docs.rackspace.com/support/how-to/configure-a-load-balancer#additional-configuration-options)

If you need your SSL installed on your hardware firewall, please raise a support ticket with your request.

# Check an SSL
The easiest way to check an SSL is to load up the site, click on the padlock in your browser, and there should be an option to see more information.

If you would like to use a Linux command, this can also be done with curl:
```sh
$ curl -vI https://example.com 2>&1 | egrep 'start|expire|common|issuer|OK'
*       start date: Aug 21 00:00:00 2019 GMT
 *       expire date: Sep 19 12:00:00 2020 GMT
 *       common name: example.com
 *       issuer: CN=RapidSSL RSA CA 2018,OU=www.digicert.com,O=DigiCert Inc,C=US
 < HTTP/1.1 200 OK
 ```
