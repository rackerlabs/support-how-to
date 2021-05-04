---
permalink: creating-apache-redirects
audit_date: '2020-06-17'
title: 'Creating Apache redirects'
type: article
created_date: '2020-06-15'
created_by: Matthew Brown
last_modified_date: '2020-06-17'
last_modified_by: William Loy
product: Cloud Servers
product_url: cloud-servers
---

This article explains redirects in Apache&reg; and how to set them up.

## What is a redirect?

Apache can create a redirect that points from one vhost to another vhost on the server or another external site. Common reasons for using this feature are to force http traffic to https and to move domain names.

### Using the redirect directive

Apache has a redirect directive that you can add to the vhost to redirect any traffic to the specified site. Below is an example of using the directive to redirect all http traffic to https:


        `<VirtualHost *:80>
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
           </VirtualHost>`

The preceding example only works for that single page by establishing a temporary 302 redirect. Establish a permanent 301 redirect, by using the redirect directive as follows:


        Redirect 301 / https://example.com
        Redirect permanent / https://example.com


<!--- Apache mod_rewrite(revisit when needed article is published)This is a separate module you can install for Apache to create redirects and rewrites. This is a more in depth and complicated process so the steps for this module will be explained in a separate article.
--->
