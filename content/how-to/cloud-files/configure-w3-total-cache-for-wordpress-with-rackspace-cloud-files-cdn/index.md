---
permalink: configure-w3-total-cache-for-wordpress-with-rackspace-cloud-files-cdn
audit_date: '2017-02-23'
title: Configure W3 Total Cache for WordPress with Rackspace Cloud Files
type: article
created_date: '2013-10-10'
created_by: Eric Cavalcanti
last_modified_date: '2018-10-23'
last_modified_by: Kate Dougherty
product: Cloud Files
product_url: cloud-files
---

This tutorial shows the basic steps for setting up the W3 Total Cache plug-in to work with Rackspace Cloud Files. Cloud Files uses a *push* content delivery network (CDN), which automatically uploads the content from your primary web server and stores the data on Cloud Files. The benefits of a push CDN are more space on your local server's disk and scaling more servers without having to keep your user-generated content in sync.

**Note:** Push CDNs work better for sites that frequently experience surges in traffic that might require servers to scale up or down. If your site experiences consistently moderate to high levels of traffic, see [Configure W3 Total Cache for WordPress with Rackspace CDN](/support/how-to/configure-w3-total-cache-for-wordpress-with-rackspace-cdn).

### Prerequisite

You need to have a WordPress website and database.

### Install and configure W3 Total Cache

1. Log in to your WordPress blog as an administrator.

2. In the navigation sidebar, click **Plugins > Add New**.

3. In the **Search** box, enter **W3 Total Cache**.

4. In the search results, click **Install Now** in the W3 Total Cache box.

   {{<image alt="click the install now button in the search results for w3 total cache" src="install-w3-total-cache.png" title="click the install now button in the search results for w3 total cache">}}

   After the plug-in installs, the **Install Now** button changes to **Activate**.

5. Click **Activate** to enable the plug-in.

   {{<image alt="click the activate button after the plug-in has installed" src="activate-w3-total-cache.png" title="click the activate button after the plug-in has installed">}}

6. In the navigation sidebar, click **Performance > General Settings**.

7. In the CDN section, select the **Enable** check box, and choose Rackspace Cloud Files as the CDN type.

    {{<image alt="click the enable check box and choose rackspace cloud files as the cdn type" src="enable-cloud-files.png" title="click the enable check box and choose rackspace cloud files as the cdn type">}}

8. Click **Save all settings**.

### Configure the CDN

1. In the WordPress navigation menu, click **Performance > CDN**.

2. In the **Configuration** section, click **Authorize**.

   A pop-up box appears with guided steps to configure your CDN.

3. Enter your Rackspace cloud account username and API key, and then click **Next**.

   {{<image alt="enter your rackspace cloud account information into the username and api key fields" src="add-account-information.png" title="enter your rackspace cloud account information into the username and api key fields">}}

   **Note:** If you need help finding your API key, see [View and reset your API key](/support/how-to/view-and-reset-your-api-key).

4. Select the region in which you want to host the files for your website, and then click **Next**.

   **Note:** This should be the same region where your cloud resources are located.

5. Create a new Cloud Files container by entering a unique name that you will remember.

   This name is primarily used to help you quickly identify the container in the Rackspace [Cloud Control Panel](https://login.rackspace.com/).

6. Click **Apply** to save and apply your settings.

7. In the **General** section, select the check box next to each type of content that you want to host on the CDN, and then click **Save all settings**.

   {{<image alt="lick the check box by each file type that you want to host on the cdn" src="select-file-types-to-upload.png" title="lick the check box by each file type that you want to host on the cdn">}}
