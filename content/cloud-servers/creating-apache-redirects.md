---
permalink: creating-apache-redirects/
audit_date:
title: 'Creating Apache redirects'
type: article
created_date: '2020-06-15'
created_by: Matthew Brown
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

In this article we will go over how to set up redirects in Apache.

## What is a redirect?

In Apache, you can create a redirect in a vhost that will point to another vhost on the server or another external site. Many people will have different reasons for using redirects but some of the more common reasons are to force http traffic to https and to move domain names.

## Setting up the redirect

Below are a few ways you can set up a redirect using different tools

### The redirect directive

Apache has its own redirect directive that you can add to the vhost and it will redirect any traffic to the specified site. Below is an example of using said directive to redirect all http traffic to https:

```
<VirtualHost *:80>
    DocumentRoot /var/www/example.com/httpdocs
    ServerName example.com
    Redirect / https://example.com      <-----
    ServerAlias www.example.com
</VirtualHost>

  <VirtualHost *:443>
     DocumentRoot /var/www/example.com/httpdocs
     ServerName example.com
     ServerAlias www.example.com
      SSLEngine on
      SSLCertificateFile /etc/pki/tls/certs/2017-example.com.crt
      SSLCACertificateFile /etc/pki/tls/certs/CABundle.crt
      SSLCertificateKeyFile /etc/pki/tls/private/2017-example.com.key
   </VirtualHost>
```
Keep in mind that using the directive as stated above will only work for that single page by establishing a temporary 302 redirect. If you would like to establish a permanent 301 redirect, you can use the redirect directive as the following:

```
Redirect 301 / https://example.com
Redirect permanent / https://example.com
```

### Apache mod_rewrite

This is a separate module you can install for Apache to create redirects and rewrites. This is a more in depth and complicated process so the steps for this module will be explained in a separate article.
