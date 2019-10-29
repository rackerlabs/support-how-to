---
permalink: disable-http-compression-in-apache/ 
audit_date:
title: Disable HTTP Compression in Apache 
type: article
created_date: '2019-10-30'
created_by: Chadwick Sterling
last_modified_date: '2019-10-30'
last_modified_by: Chadwick Sterling
product: Cloud Product
product_url: cloud-product
---

This article outlies the process of checking if HTTP is being compressed on your Apache server as well how to disable the HTTP compression. 

### Testing your server for HTTP compression 

1. Connect to the server using openssl

2. Use the following request to check for HTTP compression:

       Accept-Encoding:compress,gzip

If compression is enabled, the server will respond by compressing the page. If the serber does not support compression, it will display the page in plain text. 

### Disabling HTTP compression using Ubuntu or Debian operating system

1. Disable the module mod_deflate using the following command :

       $ sudo a2dismod deflate

2. Restart the server using the following command:

       $ sudo /etc/init.d/apache2 restart

### Disabling HTTP compression using Red Hat or CentOS operating system

1. Edit the main configuraton file using the following command :

       $ sudo nano /etc/httpd/conf/httpd.conf

2. Comment out the below line:

       LoadModule deflate_module modules/mod_deflate.so

3. Restart the server:

       $ sudo /etc/init.d/httpd restart
