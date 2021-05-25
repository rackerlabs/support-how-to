---
permalink: domain-redirect-types/
audit_date: '2021-05-24'
title: 'Domain redirect types'
type: article
created_date: '2021-04-20'
created_by: John Abercrombie
last_modified_date: '2021-05-24'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

First, what is a redirect? When you want to point your visitors from one domain
or link to another, that is a redirect. For example, if I want someone who types
in **http://www.bluefox.com** to go to **http://www.redsun.com**, I would use a
redirect for the job. This works for both HTTP and HTTPS URLs.

This article explains each of these types and why you might use each one.

### 301 redirect

The *301* is a permanent redirect. Typically, you use this when you move a website from one
domain to another, and you want your visitors to follow your website to its new
location. This particular type is search-engine friendly, and it's efficient for
website redirection.

Examples of when to use a 301 redirect:

- Your website has moved to a new domain, and you want a seamless transition.
- You have different URLs that point to the same main URL. Customer portals
  use this setup. As an example, **mycloud.rackspace.com**,
  **portal.rackspace.com**, and **login.rackspace.com** all point to the same site:
  **login.rackspace.com/login**.
- You want to merge two of your websites and redirect outdated URLs to
  the most current ones.

### 302 redirect

The *302* is a temporary redirect used when you want to reroute traffic from
one site to another temporarily. Search engines make a note of the original
URL when routing a 302 redirect in search results.

Examples of when to use a 302 redirect:

- Your website is down for maintenance, and you have a backup page that you use
  when this occurs.
- You are in the middle of a transition moving your site, but the second site
  is not fully live, so you redirect traffic back to the original site until
  your second site is ready.
- You want to maintain a central hub page that has offshoot pages with changing
  content, such as sale deals. Instead of changing your website all the
  time, you can put up a secondary sale page and temporarily redirect your
  visitors from the main hub page to the current sale page.

### URL frame

Two other names for our third redirect are *URL cloaking* and *URL masking*. This
method is frowned upon by SEO algorithms for search engines. Why? It basically
allows you to place your domain over top of another website. For example, the
website you are looking at is **rackspace.com**, but what you see in the
browser URL bar is **www.greenskybluegrass.com**. When the URL and the website
content do not match, this is a key indicator that a URL Frame redirect is
happening.

Another reason why search engines do not like this redirect is that it causes
duplicate content. Your domain and the masked domain show up as the same
page, and search engines pick one over the other. Search engines do not
show two domains with the same content.

Fortunately, not all websites allow masking, and there are ways to prevent
anyone from masking your domains at the server level.

### CNAME Record

Our final type is not actually a redirect type, although many people think of it as
one. The difference between a CNAME and the other redirects is that the CNAME is
a DNS record while the redirects are server-level configurations. The CNAME
points your domain to an IP address. Instead of actually redirecting one domain
to another, it copies the DNS records of the targeted domain.

A common misconception is that a CNAME record displays the targeted domain's
website. That is not the case. The CNAME record merely points the DNS of the second
domain to the IP address of the target domain. After a visitor reaches the IP
address, the webserver decides what the visitor sees. If the admin set nothing up for
the second domain within the web server, virtual host, or server block, the
server displays its default page. This could end up being the
target domain if the configuration files of the webserver denote the target domain's
web page as the default web page. However, that is not the default.

Be cautious when using CNAME records. Don't use a CNAME record for a
plain domain, such as **bluesky.com**. Doing this causes any other records for
that domain to become invisible. The workaround for this would be to create a
CNAME record for **www.bluesky.com** and then use a redirect for sending traffic
to **bluesky.com**.

For more information check this articles:

- [Linux htaccess tips and tricks](/support/how-to/linux-htaccess-tips-and-tricks/)
- [Create apache redirects](/support/how-to/creating-apache-redirects)
- [Create nginx redirects](/support/how-to/create-redirects-in-nginx)
