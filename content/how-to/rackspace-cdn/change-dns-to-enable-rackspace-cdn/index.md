---
permalink: change-dns-to-enable-rackspace-cdn/
audit_date: '2020-12-09'
title: Change DNS to enable Rackspace CDN
type: article
created_date: '2015-02-12'
created_by: Megan Meza
last_modified_date: '2020-12-09'
last_modified_by: Rose Morales
product: Rackspace CDN
product_url: rackspace-cdn
---

After you create your Content Delivery Network (CDN) service, you must activate
it by pointing the DNS records for your domain to the CDN network. This article
describes the steps to do this.

### Get your CDN URL

Use the following steps to get the URL for your CDN:

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).
2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.
3. Click **Storage** and then select **CDN**.
4. In the list of services, click the service for which you want to activate the CDN.
5. On the **CDN Service** page, in the **Domains** section, click on **Domain Not Configured** under **Status**.
6. Use the URL and the instructions in the box that opens, which is similar to the following figure, to configure your service:

   {{<image src="ScreenShot2015-12-16at4.56.08PM.png" alt="" title="">}}

### Create a CNAME record with your DNS provider

After you obtain your CDN domain URL, go to your DNS provider to change your records.

Most DNS records for a domain already have an A record that maps your domain to the server that holds your website content.
If no A record exists, follow your DNS provider's instructions for setting one up.

If the A record already exists, you must change it to a CNAME that points to the CDN *Domain Access* domain. Create a CNAME
record that points your domain to the CDN domain URL that you retrieved from the Cloud Control Panel. You can see these URLs
by hovering over each domain name for your CDN service.

If you host your domain with Rackspace, you can manage your DNS records by following the instructions at
[Create DNS Records for cloud servers with the Control Panel](/support/how-to/create-dns-records-for-cloud-servers-with-the-control-panel).

**Note:** Some DNS providers allow for a CNAME of the root of your domain. Do not use this because it breaks the geolocation
of the CDN service. These types of DNS services do the DNS lookup and return the A record (IP address) to which to connect.
The geolocation depends on the DNS lookup and locates the best possible CDN edge node based on that DNS lookup. If your DNS
service does this lookup for you, it provides the best possible CDN edge node based on the DNS service's geolocation and not
your end-users' location. This causes slow network connections.

You need to use a subdomain for the CDN service. You can choose a subdomain, such as www, cdn, or static. If you want all your
traffic to be routed over the CDN for your entire domain, you must set up a redirect from the root of your domain to the subdomain.

For example, if you set up a CNAME record that points the URL `www.example.com` to the CDN network, ensure that visitors who go
to `example.com` are also served over the CDN network. To do this, redirect `example.com` to `www.example.com` so that the URL that points
to the CDN network.

When your CNAME record is complete, your domain traffic is served over the CDN network.
