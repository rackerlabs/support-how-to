---
node_id: 1251
title: 'Rackspace Cloud Sites Essentials: Cloud Sites Technologies'
type: article
created_date: '2011-11-11'
created_by: Rackspace Support
last_modified_date: '2015-12-29'
last_modified_by: Kyle Laffoon
product: Cloud Sites
product_url: cloud-sites
---

This article is written for our [Cloud Sites Control
Panel](https://manage.rackspacecloud.com/). You can get to it from the
Cloud Control Panel by clicking your name in the upper-right corner and
selecting **Cloud Sites Control Panel** or by navigating to
[manage.rackspacecloud.com](https://manage.rackspacecloud.com).

### Previous section

[Getting Started with Cloud
Sites](/how-to/cloud-sites)

By now, we've learned that Cloud Sites is and easy to use, load-and-go
web hosting platform that uses the computing power of the cloud to keep
your websites online. In this article, we're going to take a look at the
different technologies behind this computing power running your
website(s).

### Run Linux or Windows

Behind Cloud Sites, cabinets full of both Linux servers and Windows
servers power the over 100,000 sites and applications we host for our
customers. Every Windows-based page is served from clusters built and
optmiized especially for Windows, and every Linux-based page is served
from clusters built and optimized especially for Linux. We use advanced
Load-Balancing technologies to automatically detect the type of
technology you are running and route each request to the proper pool of
servers.

This is a great example of the power of cloud computing, since you no
longer have to make a hosting choice between Linux and Windows. Both
LAMP and .NET are included, allowing you to choose the technology you
need site by site.

Let's take a look in the [Cloud Sites Control
Panel](http://manage.rackspacecloud.com) to see where you can specify
which technology you would like your website(s) to operate with and how
to change this technology.

Once you've logged into the Cloud Sites Control Panel, navigate to
**Hosting-&gt;Cloud Sites**
<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/hosting.png" width="187" height="246" />

Click on the domain name you would like to make technology changes to
Click on the Features Tab
<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/featurestab.png" width="497" height="107" />

Click on the **Change Technology** button in the **Technologies**
section
<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/technologies_1.png" width="600" height="179" />

Choose the **Site Technology** you would like your website to use.
<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/change-technology_1.png" width="600" height="158" />

Click **Change Technology** to complete your change.
**NOTE: ***Please note that when changing your site's default
technology, this changes the IP for the site. If we are managing your
DNS, the changes will update automatically, but can take up to two hours
to take effect. If you are managing your own DNS, please update the IP
for you site. You can get the new IP on the Domain Tab*

There is a great method in the Control Panel to take a look at the
current Website features for your website. You can get to this once you
have logged in to the Cloud Sites Cloud Control Panel fairly quickly for
each of your domains.

Navigate to **Hosting-&gt;Cloud Sites**
<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/hosting.png" width="187" height="246" />

Click on the **domain name** for which you would like to review its
website features.
Once it opens, you will be on  the **General Settings tab** by default.
Scroll down to **Website Features**.
<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/web_features.png" width="600" height="181" />

What you have here is a breakdown of your website's current features
including its currently enabled technologies, its number of
databases and whether the Raw Logs are enabled or disabled. (Raw Logs
are disabled by default).

This concludes this article regarding Cloud Sites Web Technologies.
We've learned how to change your websites default technology and how to
view a summary of your websites features quickly. The next article will
discuss two of the most commonly talked about features on the Rackspace
Cloud Sites, managing your website through .htaccess (Linux) and/or
web.config (IIS, ASP/.NET).

### Next section

[Tips and Tricks for .htaccess and
web.config](/how-to/rackspace-cloud-essentials-tips-and-tricks-for-htaccess-and-webconfig)
