---
permalink: iis-sni-overview/
audit_date:
title: 'IIS SNI Overview'
type: article
created_date: '2020-03-17'
created_by: Steven Mondragon-DeVoss
last_modified_date: 
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

*This article is applicable to the following Windows Server versions: 2012, 2012 R2, 2016, 2019*

Server Name Identification (SNI) is an extension of the Secure Socket Layer (SSL) and Transport Layer Security (TLS) protocol that enables you to host multiple SSL certificates on a single unique Internet Protocol (IP) address. This article provides an overview on using Server Name Indication (SNI) within IIS on a Windows server.


## Prerequisites

Your server must meet the following requirements to use SNI:

    * IIS 8 or later


The following operating systems support SNI without additional modifications:

    * Windows Server 2012 or later

## Configure SNI

Once you have the certificate installed using the [Install an SSL certificate](https://support.rackspace.com/how-to/install-an-ssl-certificate/#install-certificate-on-windows-servers) article, this section picks up on the **Set up the bindings** section.

# Set up the bindings
    * In the IIS Manager, right-click your site and select **Edit Bindings**.
    * In the **Site Bindings** windows, click **Add**.
    * In the **Add Site Binding** dialog box, perform the following steps: 
        * Set the value of **Type** to https
        * Specify the host name
        * Check the box for **Require Server Name Indication**
        * From the SSL certificate list, select your certificate
        * Click OK.
****Note** - When hosting multiple sites using different certificates on a single IP, you will need to enable SNI on all sites for that IP. Otherwise, the site will need its own IP.

## Supported browsers

SNI is supported by most browsers, however older browsers such as Internet Explorer® 6 and any Windows® XP® browser do not support SNI.

# Desktop browsers
    * Internet Explorer 7 and later
    * Firefox® 2 and later
    * Opera 8 with TLS 1.1 enabled
    * Google Chrome®:
        * Supported on Windows XP on Chrome 6 and later
        * Supported on Vista and later by default
        * Supported on OS X 10.5.7 in Chrome Version 5.0.342.0 and later
    * Chromium® 11.0.696.28 and later
    * Safari 2.1 and later (requires OS X 10.5.6 and later or Windows Vista and later).

Note: No versions of Internet Explorer on Windows XP support SNI.

# Mobile browsers
    * Mobile Safari for iOS 4.0 and later
    * Android 3.0 (Honeycomb) and later
    * Windows Phone 7 and later
