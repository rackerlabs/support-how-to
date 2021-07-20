---
permalink: vhosts-basics
audit_date: '2021-07-19'
title: Vhosts basics
type: article
created_by: Coral Moore
created_date: '2021-04-09'
last_modified_date: '2021-07-19'
last_modified_by: Ana Corpus
product: Cloud Servers
product_url: cloud-servers
---

This article introduces you to vhost and web server basics. A web server runs
software to process web pages. After web traffic has reached the server, it
follows steps to reach the right website. If a server serves web content, you
need to install a web server.

### Check the web server status

The most common web servers that run on Linux&reg; are Apache&reg;
(**httpd** or **apache2**) and NGINX&reg;. You might also have Plesk&reg;.
You can use Plesk to manage your websites in a more point-and-click
Windows&reg; style. If you install Plesk, use the rest of this article
an overview of vhosts because you need to use Plesk instead of the Linux
command line to perform the tasks described here.

By default, web servers allow HTTP traffic through port `80` and HTTPS
(secure) traffic through port `443`.

To find the web server that runs on ports `80` and `443`, enter the following command:

    # netstat -plnt | awk '$4 ~ /:(80|443)$/'
    tcp6       0      0 :::80                   :::*                    LISTEN      2549/httpd
    tcp6       0      0 :::443                  :::*                    LISTEN      2549/httpd


To check the the status of a web server, run one of the commands shown in the
following table:

| Type of web server | Command |
| --- | --- |
| **httpd** | `service httpd status` |
| | or |
| | `systemctl status httpd` |
| **apache2** | `service apache2 status` |
| | or |
| | `systemctl status apache2` |
| **nginx** | `service nginx status` |
| | or |
| | `systemctl status nginx` |
| Plesk | `service psa status` |
| | or |
| | `systemctl status psa` |

To check for Plesk and see which web server is running,
enter the following command:

    # service psa status; netstat -plnt | awk '$4 ~ /:(80|443)$/'

### Check the vhosts configuration

A web server (or a pool of web servers) can host several websites by using Virtual Hosts
(vhosts). Vhosts allow several websites to share resources from a physical server.

Vhosts can be IP-address-based or name-based. IP-address-based vhosts assign a different
IP address to a website, and name-based vhosts assign multiple hostnames to a single IP
address. Vhosts keep track of websites in a web server, specifying the configuration of
each website.

To check the vhosts configuration in Apache, enter one of the following commands:

    # httpd -S

or

    # apache2ctl -S
    *:80                   example.com (/etc/httpd/vhost.d/example.com.conf:1)

To read the contents of a vhost configuration file, enter the following command:

    # cat /etc/httpd/vhost.d/example.com.conf 

Entries in the vhosts configuration file include:

  - **:80** or **:443**: These entries specify if the website uses HTTP (`80`) or
    HTTPS (`443`). 
  - **DocumentRoot**: The directory path of the website files. This is most often
    the location where developers need access to upload files.
  - **ServerName**: The website domain name.
  - **ServerAlias**: Any other website domain name that you want to redirect to the
    **ServerName** domain. You usually use domains of the type **www.domain**, but you can
    also use other domains or subdomains.
  - **ErrorLog**: The directory path and name of error logs.
  - **Port 443**: The SSL configuration. Comment this section if the website does not have
    a valid SSL certificate.
  - **Secure HTTPS site**: The three SSL file paths needed for full encryption to turn
    it into a more secure HTTPS site.

The following example shows a vhosts configuration file:  

```
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

To copy the configuration file of an existing vhost to create a new one,
enter the following command:

    # cat /OLD_DOMAIN.conf | sed 's/OLD_DOMAIN/NEW_DOMAIN/ig' >> /NEW_DOMAIN.conf

Edit the new vhost configuration file as required. For example, you might
need to comment out the settings that make port `443` active.

To find the location of **DocumentRoot** in a vhost configuration file,
enter the following command:

    # grep Doc /etc/httpd/vhost.d/example.com.conf
    
    DocumentRoot /var/www/vhosts/example.com

### Make a new vhost

Use the following instructions to make a new vhost:

1. If possible, copy an existing vhost to keep consistent settings. Use a text
   editor, such as `vim`, `nano`, `sed`, or `awk`, if you need to edit it. 
    
    ```
       # cat /OLD_DOMAIN.conf | sed 's/OLD_DOMAIN/NEW_DOMAIN/ig' >> /NEW_DOMAIN.conf
    ```

2. Make a new **DocumentRoot** directory. The system makes the custom and error logs
   automatically. Run the following command:

       # mkdir -p /docroot
     
3. Check that the web server does not send any errors:

       # httpd -t
  
4. Do a graceful restart on the web server to incorporate the changes with minimal
   disruption to your live environment:

       # service httpd graceful
  
5. The smallest change in a vhost can interrupt your entire web server and stop it
   from serving all of your websites. For that reason, use one of the following
   commands to re-check the web server:      

   | Type of web server | Command |
   | --- | --- |
   | **httpd** | `# httpd -t; service httpd status` |
   | **apache2** | `# apache2ctl -t; service apache2 status` |
   | **nginx** | `# nginx -t; service nginx status` |

### Check and troubleshoot changes to the vhost configuration

To check mistakes in Apache, use either one of the following commands:

    # httpd -t

or

    # apache2ctl -t
    
    AH00558: httpd: Could not reliably determine the server's fully qualified
    domain name, using 127.0.0.1. Set the 'ServerName' directive globally to
    suppress this message
    Syntax OK

To check mistakes in NGINX, use the following command:

    # nginx -t

    AH00558: httpd: Could not reliably determine the server's fully qualified
    domain name, using 127.0.0.1. Set the 'ServerName' directive globally to
    suppress this message
    Syntax OK

**Note**: The clause *Could not reliably determine* is common, and it doesn't
mean an error. You can usually ignore it.

The following example shows a sample error:

    # httpd -t
    AH00112: Warning: DocumentRoot [/var/www/vhosts/example.com] does not exist
    AH00558: httpd: Could not reliably determine the server's fully qualified
    domain name, using 127.0.0.1. Set the 'ServerName' directive globally to
    suppress this message
    Syntax OK

Fix this error by creating a **DocumentRoot** directory:

    # mkdir -p /var/www/vhosts/example.com

Another example error:

    # httpd -t
    AH00526: Syntax error on line 5 of /etc/httpd/vhost.d/example.com.conf:
    Invalid command 'oops', perhaps misspelled or defined by a module not
    included in the server configuration

The word *oops* is in the vhost file, and Apache does not know how to interpret it.
You can use **vim**, **nano**, or another text editor to fix the error.

### Restart a web server

The web server acknowledges the changes made to the vhosts configuration after a restart.
The current threads can finish before the restart occurs with the *graceful* option.

To do a graceful restart on Apache, enter one of the following commands:

    # service httpd graceful

or

    # service apache2 graceful

Sometimes, the smallest change in a vhost can interrupt your entire web server and stop
it from serving all of your websites. So back up your work, and after doing a graceful
restart to recognize changes, ensure that your web server still runs without errors. 

The following are best practices to avoid service interruptions after
changing the vhosts configuration:

- Back up the web server.
- Make the changes.
- Do a graceful restart.
- Ensure that the web server runs without errors.

In a live environment, the key is to avoid as much downtime as possible, which means that
you need to do a graceful restart on the web server and run your checks as quickly as
possible so that you can undo your changes if needed. To do this, you can group all the
commands on one line.

To do a graceful restart on Apache and check for errors, enter either one of the following commands:

    # service httpd graceful; httpd -t; service httpd status | grep running

or

    # service apache2 graceful; apache2ctl -t; service apache2 status | grep running
    
    AH00558: httpd: Could not reliably determine the server's fully qualified domain
    name, using 127.0.0.1. Set the 'ServerName' directive globally to suppress this message
    Syntax OK
    Redirecting to /bin/systemctl status httpd.service
    Active: active (running) (Result: exit-code) since Mon 2021-01-18 12:53:06 GMT; 2 months 19 days ago

To restart NGINX and check that it's running, enter the following commands:

    # nginx -s reload; nginx -t; service nginx status

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
