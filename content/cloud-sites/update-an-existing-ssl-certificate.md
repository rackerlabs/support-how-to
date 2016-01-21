---
node_id: 1183
title: Update an existing SSL certificate
type: article
created_date: '2011-08-16'
created_by: Chris Farmer
last_modified_date: '2016-01-21'
last_modified_by: Rose Contreras
product: Cloud Sites
product_url: cloud-sites
---

Updating your existing SSL Certificate is a quick and simple process.
Whether your SSL Certificate is expiring or you are simply needing to
change to a new SSL Certificate, you can follow these instructions to
get your SSL updated and installed quickly.

**Attention MyRack users:** To update the SSL certificates for your
environment, follow the instructions in the [Reissuing your Rackspace
SSL Certificates](https://community.rackspace.com/products/f/43/t/4478)
article posted in the Rackspace Support forum.



### <span class="mw-headline">Getting Started</span>

In order to update or renew your SSL Certificate, you will need your
CSR. If you don't have your CSR saved, please contact support to have a
new one generated. You can contact our Fanatical Support through a
ticket, live chat or via phone and we can assist you with obtaining this
information.

### Renewing Your Certificate

Next, you will need to update/renew your SSL Certificate. SSL
Certificates are available from a number of third party sources. Some
recommended sellers are
[RapidSSL](http://www.rapidssl.com "http://www.rapidssl.com"),
[Geotrust](http://www.geotrust.com "http://www.geotrust.com"), and
[Verisign](http://www.verisign.com "http://www.verisign.com"). [Click
here for a more complete list of supported
certificates.](/how-to/supported-ssl-certificates-on-cloud-sites "What kinds of SSL certificates can be installed?")

Follow your vendor's SSL Certificate renewal process; in particular you
may require the following details:

-   **Server type**: Apache 2
-   **SSL type**: OpenSSL
-   **CSR**

Once you have completed your certificate renewal, you're ready to
[install the new certificate](#Installing_the_Certificate)!



### <span class="mw-headline">Installing the Certificate</span>

<span class="mw-headline">In order to install your new SSL certificate,
you will need the following information:</span>

1.  Certificate
2.  Private Key
3.  Intermediate Certificate (Typically supplied in a separate file from
    the vendor)

Once you have the above information, you can install your new
certificate by clicking on the Security tab of your site, then click on
the Edit Certificate link:

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Edit%20Certificate.png" width="650" />

On the next screen, you will see three fields for Certificate, Private
Key, and Intermediate Certificate; simply replace the current
information with your updated info and hit save.



### <span class="mw-headline">DNS Update</span>

Because you are updating an existing SSL certificate, you will not need
to wait for propagation as you would when installing a new SSL
Certificate.



### <span class="mw-headline">What To Watch For</span>

-   Rackspace Cloud Sites does not support wildcard certificates - such
    as **\*.domain.com** or **\*.example.com**. - or
    self-signed certificates.
-   Rackspace Cloud Sites does not support Extended Validation
    certificates (EV).
-   Removing the SSL certificate from your site will change its IP
    address, which can require a DNS change.


