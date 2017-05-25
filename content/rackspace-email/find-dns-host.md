---
permalink: find-dns-host/
audit_date: '2017-05-25'
title: Find your DNS host
type: article
created_date: '2017-05-17'
created_by: William Loy
last_modified_date: '2017-05-23'
last_modified_by: William Loy
product: Rackspace Email
product_url: rackspace-email
---

This article describes how to locate your domain’s DNS host. If you need to configure your DNS for Rackspace Cloud Office Email products, see [Set up DNS records for Cloud Office email](/how-to/set-up-dns-records-for-cloud-office-email-and-skype-for-business).

### Prerequisites

This article apples to **Administrators**.

- **Difficulty** - Easy
- **Time needed** - Approximately 10 minutes
- **Tools required** - Internet browser

### Find your DNS host

You can use the following steps to identify where you can add or edit entries for your domain (DNS).

1. Search for your domain at [https://who.is/](https://who.is/).
2. Look for the field titled **Name Server**. This is the location of your DNS host.
3. If any of the following server names are listed in the **Name Server** field for your domain, Rackspace is most likely your DNS host and can assist with editing your DNS records.

   For more information, see [Set up DNS records for Cloud Office email](/how-to/set-up-dns-records-for-cloud-office-email-and-skype-for-business)
   
   - NS.RACKSPACE.COM
   - NS2.RACKSPACE.COM
   - DNS1.STABLETRANSIT.COM
   - DNS2.STABLETRANSIT.COM
   - DNS1.NAME-SERVICES.COM
   - DNS2.NAME-SERVICES.COM
   - DNS3.NAME-SERVICES.COM
   - DNS4.NAME-SERVICES.COM
   - DNS5.NAME-SERVICES.COM

4.	To find the company that is hosting your domain's DNS (in order to access and edit your DNS records), you can search Google for the entry found in the **Name Server** field from above.
5. If this search does not work, try contacting any company you pay for webhosting as they are likely who is hosting your DNS. 

   **Note:** Rackspace Cloud Office offers DNS hosting but not website hosting.

### Add or edit entries for your DNS host

You can find links to articles with instructions to modify your DNS records for some of the more common DNS hosts below. If your host is not listed below, please search their knowledge base or contact their support for assistance with modifying your DNS.

- [GoDaddy](https://www.godaddy.com/help/manage-dns-680)
- [BlueHost](https://my.bluehost.com/cgi/help/559)
- [HostGator](http://support.hostgator.com/articles/changing-dns-records)
- [Network Solutions](http://www.networksolutions.com/support/how-to-manage-advanced-dns-records/)
- [1&1](https://help.1and1.com/domains-c36931/manage-domains-c79822/dns-c37586)
