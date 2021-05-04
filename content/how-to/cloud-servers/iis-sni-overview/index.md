---
permalink: iis-sni-overview
audit_date: '2020-03-23'
title: 'IIS SNI overview'
type: article
created_date: '2020-03-17'
created_by: Steven Mondragon-DeVoss
last_modified_date: '2020-03-23'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

*This article applies to the following Windows&reg; Server&reg; versions: 2012, 2012 R2, 2016, and 2019*

Server Name Identification (SNI) is an extension of the Secure Socket Layer (SSL) and Transport Layer Security (TLS) protocol. These enable you to host multiple SSL certificates on a single unique Internet Protocol (IP) address. This article provides an overview of using SNI within Internet Information Services (IIS) on a Windows&reg; server.


### Prerequisites

Your server must meet the following requirements to use SNI:

    * IIS 8 or later


The following operating systems support SNI without additional modifications:

    * Windows Server&reg; 2012 or later

### Configure SNI

Install the certificate by using the [Install an SSL certificate](/support/how-to/install-an-ssl-certificate/#install-certificate-on-windows-servers) article. Then return to this article to set up the bindings by using SNI.

#### Set up the bindings

1. In the IIS Manager, right-click your site and select **Edit Bindings**.
2. In the **Site Bindings** window, click **Add**.
3. In the **Add Site Binding** dialog box, perform the following steps: 
         a. Set the value of **Type** to https.
         b. Specify the host name.
         c. Check the box for **Require Server Name Indication**.
         d. From the SSL certificate list, select your certificate.
         e. Click **OK**.
        
**Note**: When you host multiple sites by using different certificates on a single IP address, you 
need to enable SNI on all sites for that IP address. Otherwise, the site needs its own IP address.

### Supported browsers

Most browsers support SNI, but older browsers, such as Internet Explorer® 6 and any Windows XP® browser,
do not support SNI.

#### Desktop browsers

The following desktop browsers support SNI:

- Internet Explorer 7 and later
- Firefox® 2 and later
- Opera 8 with TLS 1.1 enabled
- Google Chrome®:

  - Supported on Windows XP on Chrome 6 and later
  - Supported on Vista and later by default
  - Supported on OS X 10.5.7 in Chrome Version 5.0.342.0 and later

- Chromium® 11.0.696.28 and later
- Safari 2.1 and later (requires OS X 10.5.6 and later or Windows Vista and later).

**Note:** No versions of Internet Explorer on Windows XP support SNI.

#### Mobile browsers

The following desktop browsers support SNI:

- Mobile Safari for iOS 4.0 and later
- Android&reg; 3.0 (Honeycomb) and later
- Windows Phone&reg; 7 and later
