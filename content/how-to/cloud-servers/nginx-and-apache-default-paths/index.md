---
permalink: nginx-and-apache-default-paths
audit_date: '2020-04-29'
title: 'Nginx and Apache default paths'
type: article
created_date: '2020-04-25'
created_by: Matthew Brown
last_modified_date: '2020-04-29'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to set up the default document root for Apache&reg; virtual hosts (vhosts)
and Nginx&reg; server blocks.

### Default document root

By default, both Apache and Nginx have a default document root set up in their base configuration files.
When you create a virtual host or server block, the web server looks for website files in the
document root directory specified in these configuration files. 

You can find the configuration files in the following file paths:

- **CentOS&reg;**:
   - Apache: **/etc/httpd/conf/httpd.conf**
   - Nginx: **/etc/nginx/nginx.conf**

- **The Ubuntu&reg; operating system**:
   - Apache: **/etc/apache2/apache2.conf**
   - Nginx: **/etc/nginx/nginx.conf**

### Change the document root directory

To change default file path or specify a different document root in the virtual host or server block,
look for the following lines in the configuration files and change specified directory:

#### Apache

    # DocumentRoot: The directory out of which you will serve your
    # documents. By default, all requests are taken from this directory, but
    # symbolic links and aliases may be used to point to other locations.
    #
    DocumentRoot "/var/www/html"    <----

### Nginx

    server {
       listen       80 default_server;
       listen       [::]:80 default_server;
       server_name  _;
       root         /usr/share/nginx/html;  <----

