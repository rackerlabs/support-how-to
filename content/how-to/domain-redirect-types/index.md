---
permalink: domain-redirect-types/
audit_date:
title: 'Domain Redirect Types'
type: article
created_date: '2021-04-20'
created_by: John Abercrombie
last_modified_date: '2021-04-20'
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---
# Types of Domain Redirects

There are four main types of domain redirects: 301, 302 URL Redirect, URL Frame, and CNAME. We are going to go into what each of these types are, and why each is used over the others.

First, what is a redirect? When you want to point your visitors from one domain or link to another, that is a redirect. For example, if I want someone who types in http://www.bluefox.com to be rerouted to http://www.redsun.com, I would use a redirect to accomplish that task. This works for both http and https URLs.


# 301 Redirect

The first type of redirect we will cover is a 301 URL Redirect, and it is a permanent type of redirect. Typically, this type is used if you move your website from one domain to another, and you want your visitors to follow your website to its new location. This particular type is search-engine friendly, and it is efficient for website redirection.

Examples of when to use a 301 Redirect:

- Your website has moved to a new domain, and you want a seamless transition
- You have multiple different URLs that point to the same main URL. Customer portals will use this type of setup. As an example, mycloud.rackspace.com, portal.rackspace.com, and login.rackspace.com all point to the same site: login.rackspace.com/login
- You want to merge two of your websites and want to redirect outdated URLs to the most current ones


# 302 Redirect

The second type of redirect is a 302 temporary redirect. This type of redirect is used when you only want to temporarily reroute traffic from one site to another. Search engines will only make note of the original URL when routing a 302 redirect in search results.

Examples of when to use a 302 Redirect:

- Your website is down for maintenance, and you have a backup page that you use when this occurs
- You are in the middle of a transition with moving your site, but you're not quite ready for the second site to be fully live, so you redirect traffic back to the original site until your second site is ready
- You want to maintain a central hub page that has offshoot pages with changing content: ie, sale deals. Instead of having to change your website all the time, you can put up a secondary sale page, and temporarily redirect your visitors from the main hub page to the current sale page


# URL Frame

Two other names for our third type of redirect are URL Cloaking and URL Masking. This method is frowned upon by SEO algorithms for search engines. Why? It basically allows you to place your domain over top of another website. For example, the website you may be looking at is rackspace.com, but what you see in the browser URL bar is www.greenskybluegrass.com. When the URL and the website content do not match, this is a key indicator that a URL Frame/Mask/Cloak redirect is happening.

Another reason why search engines do not like this type of redirect is that it causes duplicate content. Your domain and the masked domain will show up as the same page, and search engines will pick one over the other. Search engines will not show two domains with the same content.

Fortunately, not all websites allow masking, and there are ways to prevent anyone from masking your domains. This is done at the server level.


CNAME Record

Our final type is not actually a redirect type although it is often thought of as one. The difference between a CNAME and the other redirects is that the CNAME is a DNS record while the aforementioned redirects are server-level configurations. The CNAME only points your domain to an IP address. Instead of actually redirecting one domain to another, it simply copies the DNS records of the targeted domain.

A common misconception is that a CNAME record will display the targeted domain's website. That is not the case. The CNAME record merely points the second domain's DNS to the target domain's IP address. Once a visitor reaches the IP address, the web server (Apache/Nginx) decides what the visitor sees. If nothing is set up for the second domain within the web server (virtual host/server block), then the server will display the web server's default page. This could end up being the target domain if the web server's configuration files denote the target domain's web page as the default web page. However, that is not enabled by default.

An additional caution for using CNAME records is that it is not recommended to utilize a CNAME record for a plain domain (ie, bluesky.com). Doing this will cause any other records for that domain to become invisible. The workaround for this would be to create a CNAME record for www.bluesky.com and then utilize a redirect for sending traffic to bluesky.com.


