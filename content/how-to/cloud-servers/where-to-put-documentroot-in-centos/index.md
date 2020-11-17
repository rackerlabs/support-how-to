---
permalink: where-to-put-documentroot-in-centos/
audit_date:
title: Where to put DocumentRoot in CentOS
type: article
created_date: '2020-11-05'
created_by: James Andrade
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

# Where to put DocumentRoot in CentOS (Apache)

When Apache is installed on CentOS, by default the document root is pointed to "/var/www/html":
```
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
```

This is set in file /etc/httpd/conf/httpd.conf:
```
]# grep -i documentroot httpd.conf 

#DocumentRoot: The directory out of which you will serve your
DocumentRoot "/var/www/html"
    # access content that does not live under the DocumentRoot.
```
^You can edit this to another directory if you want (ex. /home/example.com/public_html/)

You can also set the document root for individual virtual hosts:
```
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
```
Note: The directories set in the virtual hosts must be located under the main DocumentRoot. If your DocumentRoot is /var/www/, then the directories will be set behind it.
Example:
```
/var/www/example.com/
```
For any changes to these files, please check syntax after and reload/restart Apache:
```
httpd -t
service httpd reload
```
If hosting multiple vhosts, it will be best to organize and separate each document root.
Example:
```
/var/www/vhosts/example.com/
/var/www/vhosts/example2.com/
/var/www/vhosts/example3.com/
```
