---
permalink: configure-apache-for-ssl-termination-on-a-cloud-load-balancer
audit_date: '2021-05-11'
title: Configure Apache for SSL termination on a Cloud Load Balancer
type: article
created_date: '2019-01-17'
created_by: Rackspace Community
last_modified_date: '2021-05-11'
last_modified_by: Ana Corpus
product: Cloud Servers
product_url: cloud-servers
---

Implementing SSL termination on a load balancer enables multiple servers to receive both encrypted and unencrypted traffic.
If you want Apache&reg; web server nodes to distinguish between the two, you need to filter the `X-Forwarded-Proto` HTTP header 
by using the `RequestHeader` directive in the protocol’s respective `VirtualHost` block, as shown in the following example:

    <VirtualHost *:80>
        RequestHeader set X-Forwarded-Proto "http"
        …
    </VirtualHost>

    <VirtualHost *:443>
        RequestHeader set X-Forwarded-Proto "https"
        …
    </VirtualHost>

To encrypt all traffic, you must add a rewrite rule within the HTTP `VirtualHost` block, as shown in the following example:

    <VirtualHost *:80>
        RequestHeader set X-Forwarded-Proto "http"
        
        RewriteEngine On
        RewriteCond %{HTTP:X-Forwarded-Proto} !https
        RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R,L]
        …
    </VirtualHost>

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/).
