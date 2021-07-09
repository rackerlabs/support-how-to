---
permalink: vhost-and-server-blocks-basics/
title: Vhosts and Server Blocks Basics
type: article
created_by: Coral Moore
created_date: 2021-04-09
last_modified_date: 
last_modified_by: 
audit_date:
product: Cloud Servers
product_url: cloud-servers
---

# Vhost Basics
*For understanding virtual hosts, what they are, and how they work*

# Web Servers
Once web traffic has reached the server, it needs to follow some steps to reach the right web site files in there.

First off, if a server is serving web content, it should have a 'web server' installed.
In Linux the most common ones are Apache (httpd or apache2) and Nginx.
And by default, these web servers will serve http traffic through port 80, and https (secure) traffic through port 443.

Find out what web server is running on ports 80 + 443:
```sh
# netstat -plnt | awk '$4 ~ /:(80|443)$/'
tcp6       0      0 :::80                   :::*                    LISTEN      2549/httpd
tcp6       0      0 :::443                  :::*                    LISTEN      2549/httpd
```

Check the status of the httpd web server:
```sh
# service httpd status
or
# systemctl status httpd
```

Check the status of the apache2 web server:
```sh
# service apache2 status
or
# systemctl status apache2
```

Check the status of the nginx web server:
```sh
# service nginx status
or
# systemctl status nginx
```

You might also have Plesk. Plesk is used to manage your websites in a more point and click Windows style setting.
If Plesk is installed, please only use the rest of this article as a rough guide to understand Vhosts.
As everything would need to be done within Plesk, not the Linux command line.
Check if Plesk is installed:
```sh
# service psa status
or
# systemctl status psa
```



# Vhosts
To keep track of its web sites, a web server will use 'virtual hosts' or 'vhosts'
This is like the yellow pages of your web sites, and will specify the configurations needed for each website/domain.

What sites/vhosts are set up in Apache?
```sh
# httpd -S
or
# apache2ctl -S
*:80                   example.com (/etc/httpd/vhost.d/example.com.conf:1)
```

Read the contents of a vhost:
```sh
# cat /etc/httpd/vhost.d/example.com.conf 
```

## Example Vhost
Configurations specified in vhosts include:
 - :80 or 443: Specifying if the site should be showing with http or https through either port. If https isn't needed, a vhost won't need to specify both.
 - DocumentRoot: The home of the web site files. This is most often the location developers need access to upload files to.
 - Server Name: The website/domain
 - ServerAlias: Any other website/domain which you want to redirect to this domain. This is most often used for www.domain, but can be used for other domains or subdomains.
 - ErrorLog: Invaluable for any troubleshooting efforts
 - Port 443: Here, the entire port 443 section is commented out as often the site is ready to test before the SSL has been purchased. But it's ready to go for later.
 - SSL Files: The locations for the 3 SSL files needed for a full encryption to turn a site into the more secure https.

```sh
<VirtualHost *:80>
    DocumentRoot "/var/www/vhosts/example.com/httpdocs"
    ServerName "example.com"
    ServerAlias "www.example.com"
    <Directory /var/www/vhosts/example.com/httpdocs>
        AllowOverride All
        Options +FollowSymlinks
    </Directory>
 
    DirectoryIndex index.html index.php index.htm
 
    # Logging
    CustomLog /var/log/httpd/example.com-access_log combined
    ErrorLog /var/log/httpd/example.com-error_log
</VirtualHost>
 
#<VirtualHost *:443>
#    DocumentRoot "/var/www/vhosts/example.com/httpdocs"
#    ServerName "example.com"
#    ServerAlias "www.example.com"
#    <Directory /var/www/vhosts/example.com/httpdocs>
#        AllowOverride All
#        Options +FollowSymlinks
#    </Directory>
 
#    DirectoryIndex index.html index.php index.htm
 
#    # SSL Configuration
#    SSLEngine On
#    SSLCertificateFile /etc/httpd/conf/ssl.crt/2021-example.com.crt
#    SSLCACertificateFile /etc/httpd/conf/ssl.crt/2021-example.com.ca
#    SSLCertificateKeyFile /etc/httpd/conf/ssl.key/2021-example.com.key
#
#    # Logging
#    CustomLog /var/log/httpd/example.com-ssl_access_log combined
#    ErrorLog /var/log/httpd/example.com-ssl_error_log
#</VirtualHost>
```

Find the Document Root/web site files in a vhost:
```sh
# grep Doc /etc/httpd/vhost.d/example.com.conf
        DocumentRoot /var/www/vhosts/example.com
```

# Vhost Changes + Checks
If you have made any changes to any vhosts, mistakes could cause problems for the entire web server, impacting all of your sites!
Always check for mistakes in Apache with:
```sh
# httpd -t
or
# apache2ctl -t
AH00558: httpd: Could not reliably determine the server's fully qualified domain name, using 127.0.0.1. Set the 'ServerName' directive globally to suppress this message
Syntax OK
```
Always check for mistakes in Nginx with:
```sh
# nginx -t
AH00558: httpd: Could not reliably determine the server's fully qualified domain name, using 127.0.0.1. Set the 'ServerName' directive globally to suppress this message
Syntax OK
```
Note: The 'Could not reliably determine' error is a common one which does not cause any actual issues.
Although work can be taken to remove it, it is instead usually ignored as a non-issue.

An example error:
```sh
# httpd -t
AH00112: Warning: DocumentRoot [/var/www/vhosts/example.com] does not exist
AH00558: httpd: Could not reliably determine the server's fully qualified domain name, using 127.0.0.1. Set the 'ServerName' directive globally to suppress this message
Syntax OK
```
This is easily fixed by making the document root:
```sh
# mkdir -p /var/www/vhosts/example.com
```
Another example error:
```sh
# httpd -t
AH00526: Syntax error on line 5 of /etc/httpd/vhost.d/example.com.conf:
Invalid command 'oops', perhaps misspelled or defined by a module not included in the server configuration
```
For this, the word 'oops' was added to the vhost, and Apache didn't know how to interpret it.
As httpd -t specified which line this was on, we can now use our favourite text editor (vim/nano) to find and fix it.
# Web Server Restart
## Why Restart?
Often when you make a change to a vhost, the web server won't know that there's been a change.
Imagine if you saw a co-worker wear a red top one morning.
Later, someone asks you what colour top they were wearing. You'd tell them red.
They might have changed shirt since then, but it's really not worth your time going and checking with them every time.
You'd get nothing done!
Web servers are the same. They would run very slowly if they always checked for every change.
So sometimes we have to turn them off again to recognise new changes.
## Why Graceful?
We could just run a restart, but there is a nicer option for live environments called 'graceful'
With the graceful command, you are still restarting the web server, but it allows current threads to finish first (avoiding unfinished data)
Gracefully restart Apache to recognise changes:
```sh
# service httpd graceful
or
# service apache2 graceful
```
## Good Practice
Sometimes, the smallest change in a vhost can interrupt your entire web server and stop it from serving all of your web sites!
So always back up your work, and after a graceful to recognise changes, ensure that your web server is still running without errors.
If dealing with a live environment, the key is to avoid as much downtime as possible,
Which means that you need to graceful the web server, and run your checks as quickly as possible so that you can undo your changes if need be!
To speed things up, rather than running each command separately, you can group them all into one line.
Gracefully restart Apache and check it for errors:
```sh
# service httpd graceful; httpd -t; service httpd status | grep running
or
# service apache2 graceful; apache2ctl -t; service apache2 status | grep running
AH00558: httpd: Could not reliably determine the server's fully qualified domain name, using 127.0.0.1. Set the 'ServerName' directive globally to suppress this message
Syntax OK
Redirecting to /bin/systemctl status httpd.service
   Active: active (running) (Result: exit-code) since Mon 2021-01-18 12:53:06 GMT; 2 months 19 days ago
```
Restart nginx and check that it's running:
```sh
# nginx -s reload; nginx -t; service nginx status
```
# How to make a new vhost
1. If possible, copy an existing vhost to keep consistent settings.
    Use a text editor like vim/nano/sed/awk.
2. Make the new document root. (The custom and error logs automatically make themselves)
    \# mkdir -p /docroot
3. Check that the web server is happy with your addition.
    \# httpd -t
4. Gracefully restart the web server to recognise the changes with minimal disruption to your live environment.
    \# service httpd graceful
5. Check the web server again.
    \# httpd -t; service httpd status
# Bonus scripts
*Only use when you understand!*
Is Plesk installed + what web server is in use?
```sh
# service psa status; netstat -plnt | awk '$4 ~ /:(80|443)$/'
```
Copy and convert an old vhost into a new one to preserve settings:
*(Keep in mind that EVERYTHING would be copied over, so it's worth checking if the new vhost needs port 443 active or hashed out)*
```sh
# cat /OLD_DOMAIN.conf | sed 's/OLD_DOMAIN/NEW_DOMAIN/ig' >> /NEW_DOMAIN.conf
```
Find the document root in the last directory I mentioned, and make it. Then check httpd syntax:
*(to be run straight after the last command as !$ refers to the last directory you specified. Otherwise, replace it with the new vhost ultimate filepath)*
```sh
# sed -n 's/^.*DocumentRoot //p' !$ | xargs mkdir -pv; httpd -t
```
Gracefully restart httpd and check that it's running:
```sh
# service httpd graceful; httpd -t; service httpd status | grep running
```
Gracefully restart apache2 and check that it's running:
```sh
# service apache2 graceful; apache2ctl -t; service apache2 status | grep running
```
Restart nginx and check that it's running:
```sh
# nginx -s reload; nginx -t; service nginx status
```
