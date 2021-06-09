---
permalink: disable-http-compression-on-apache-servers
audit_date: '2021-04-29'
title: Disable HTTP compression on Apache servers
type: article
created_date: '2019-10-30'
created_by: Chadwick Sterling
last_modified_date: '2021-04-29'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

This article explains how to check if your Apache&reg; server has compressed HTTP.
It also explains how to disable this compression.

### Test your server for HTTP compression

1. Connect to the server by using OpenSSL.

2. Add the following request to the header to check for HTTP compression:

       Accept-Encoding:compress,gzip

If you have enabled compression, the server responds by compressing the page.
If the server does not support compression, it  displays the page in plain text.

### Disable HTTP compression by using Ubuntu or Debian operating systems

To disable the compression by using Debian&reg; or the Ubuntu&reg; operating system,
use the following steps:

1. Disable the module **mod_deflate** by using the following command:

       $ sudo a2dismod deflate

2. Restart the server:

       $ sudo /etc/init.d/apache2 restart

### Disable HTTP compression by using Red Hat or CentOS operating systems

To disable the compression by using Red Hat&reg; or CentOS&reg;, use the following steps:

1. Access the main configuraton file:

       $ sudo nano /etc/httpd/conf/httpd.conf

2. Comment the following line so the system can execute it:

       LoadModule deflate_module modules/mod_deflate.so

3. Restart the server:

       $ sudo /etc/init.d/httpd restart

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact). 
