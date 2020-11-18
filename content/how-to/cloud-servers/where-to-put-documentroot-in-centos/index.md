---
permalink: documentroot-location-in-centos/
audit_date: '2020-11-17'
title: DocumentRoot location in CentOS
type: article
created_date: '2020-11-05'
created_by: James Andrade
last_modified_date: '2020-11-17'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

The default location for the document root is **/var/www/html** when you first install Apache&reg; on CentOS&reg;:

         ~]# httpd -S 2>1
         VirtualHost configuration:
         *:80                   example.com (/etc/httpd/conf.d/example.com.conf:1)
         *:443                  is a NameVirtualHost
                  default server linuxchamber.com (/etc/httpd/conf.d/example.com.conf:26)
                  port 443 namevhost example.com (/etc/httpd/conf.d/example.com.conf:26)
                          alias www.example.com
                  port 443 namevhost example.com (/etc/httpd/conf.d/ssl.conf:56)
         ServerRoot: "/etc/httpd"
         Main DocumentRoot: "/var/www/html" <---default location

Set this location in file **/etc/httpd/conf/httpd.conf**:

         ]# grep -i documentroot httpd.conf 

         #DocumentRoot: The directory out of which you will serve your
         DocumentRoot "/var/www/html"
             # access content that does not live under the DocumentRoot.

   **Note**: You can choose another directory if desired, such as **/home/example.com/public_html/**.

You can also set a document root for individual virtual hosts:

         <VirtualHost *:80>
             ServerAdmin webmaster@example.com
             DocumentRoot /var/www/example.com/ <--set here
             ServerName example.com
             ServerAlias www.example.com
             ErrorLog logs/example.com-error_log
             CustomLog logs/example.com-access_log common
                <Directory /var/www/example.com/>
                  AllowOverride All
               </Directory>
         </VirtualHost>

  **Note**: The directories for the virtual hosts must be located under the main DocumentRoot. If your DocumentRoot is **/var/www/**, 
  then the directories are set under it, as shown in the following example:

         /var/www/example.com/

If you change these files, restart Apache with the following commands:

         httpd -t
         service httpd reload

If you have multiple vhosts, organize and separate each document root, as shown in the folloiwng example:

         /var/www/vhosts/example.com/
         /var/www/vhosts/example2.com/
         /var/www/vhosts/example3.com/
