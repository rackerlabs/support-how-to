---
permalink: configure-w3-total-cache-for-wordpress-with-rackspace-cdn
audit_date: '2017-02-23'
title: Configure W3 Total Cache for WordPress with Rackspace CDN
type: article
created_date: '2017-01-31'
created_by: Brian Huan
last_modified_date: '2018-10-25'
last_modified_by: Stephanie Fillmon
product: Rackspace CDN
product_url: rackspace-cdn
---

This tutorial shows the basic steps for setting up the W3 Total Cache plug-in to work with Rackspace Content Delivery Network (CDN). Rackspace CDN is an origin pull CDN, which automatically pulls the content from your web servers and stores a cached copy of the assets on the remote edge nodes. When you use an origin pull CDN, it is common to set up a subdomain and host only static assets such as CSS, JavaScript, and images.

**Note:** Origin pull CDNs work better for sites that experience consistently moderate to high levels of traffic. If your site frequently experiences surges in traffic that might require servers to scale up or down, see [Configure W3 Total Cache for WordPress with Rackspace Cloud Files](/support/how-to/configure-w3-total-cache-for-wordpress-with-rackspace-cloud-files-cdn).

### Prerequisite

A WordPress website and database

### Install and configure W3 Total Cache

1. Log in as admin to your WordPress blog.

2. In the navigation sidebar, click **Plugins > Add New**.

3. In the **Search** box, enter **W3 Total Cache**.

4. In the search results, click **Install Now** in the W3 Total Cache box.

   {{<image alt="click install now in the w3 total cache search result box" src="configure-w3-Search-W3-Total-Cache.png" alt="" title="click install now in the w3 total cache search result box">}}

   After the plug-in is installed, the **Install Now** button changes to **Activate**.

5. Click **Activate** to enable the plug-in.

   {{<image alt="click activate in the w3 total cache search result box" src="configure-w3-Activate-W3-Total-Cache.png" title="click install now in the w3 total cache search result box">}}

6. In the navigation sidebar, click **Performance > General Settings**.

7. In the CDN section, select the **Enable** check box, and choose Rackspace CDN as the CDN type.

   {{<image alt="select the enable check box and choose rackspace cdn as the cdn type. click save all settings" src="configure-w3-Select-Rackspace-CDN.png" title="select the enable check box and choose rackspace cdn as the cdn type. click save all settings">}}

8. Click **Save all settings**.

### Set up a Rackspace CDN service

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).
2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.
3. Click **Networking > CDN**.
4. On the Content Delivery Network (CDN) page, click **Create Service** and complete the following information:

   - **Service Name**: Specify a name that helps you identify this site.
   - **Choose Traffic Type**: Select **HTTP**.
   - **Domain Name**: Enter the subdomain where W3 Total Cache will send your static assets.
   - **Origin**: Specify a subdomain from which Rackspace CDN will fetch a copy of the original data before caching it. This can also be the IP address of your server or load balancer.

5. Click **Create Service**.

   {{<image alt="fill in the information to create a new service" src="configure-w3-mycloud-Setup-Origin-CDN.png" title="fill in the information to create a new service">}}

You must set up the new CDN service in your domain's DNS before it is active. For information about enabling Rackspace CDN, see [Change DNS to enable Rackspace CDN](/support/how-to/change-dns-to-enable-rackspace-cdn).
