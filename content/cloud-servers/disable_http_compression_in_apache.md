---
permalink: disable-http-compression-in-apache/ 
audit_date:
title: Disable HTTP Compression on Apache Servers 
type: article
created_date: '2019-10-30'
created_by: Chadwick Sterling
last_modified_date: '2019-10-30'
last_modified_by: Chadwick Sterling
product: Cloud Servers
product_url: cloud-servers
---

This article explains how to check if HTTP is being compressed on your Apache server as well as how to disable this compression. 

### Testing your server for HTTP compression 

1. Connect to the server using OpenSSl.

2. Add the following request to the header to check for HTTP compression:

       Accept-Encoding:compress,gzip

If compression is enabled, the server will respond by compressing the page. If the server does not support compression, it will display the page in plain text. 

### Disabling HTTP compression using Ubuntu or Debian operating systems

1. Disable the module mod_deflate using the following command:

       $ sudo a2dismod deflate

2. Restart the server:

       $ sudo /etc/init.d/apache2 restart

### Disabling HTTP compression using Red Hat or CentOS operating system

1. Access the main configuraton file:

       $ sudo nano /etc/httpd/conf/httpd.conf

2. Comment out the below line:

       LoadModule deflate_module modules/mod_deflate.so

3. Restart the server:

       $ sudo /etc/init.d/httpd restart
