---
permalink: how-to-enable-SSL-TLS-perfect-forward-secrecy/
audit_date: '2021-05-24'
title: 'How to enable SSL/TLS perfect forward secrecy in Apache or Nginx'
type: article
created_date: '2021-04-24'
created_by: Miguel Salgado
last_modified_date: '2021-04-24'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

This article provides an overview of perfect forward secrecy (PFS) and how
to enable it on Apache&reg; or Nginx&reg; web servers.

### What is PFS?

PFS protects data shared between the client and the server even if the private key is compromised.
You can accomplish this by generating a session key for each transaction made. 

### Why implement PFS on a website?

A TLS or SSL certificate works by using a public key and a private key. When the web browser and
the server exchange keys, the system creates a session key by using a key exchange mechanism
called RSA, where all the information between the client and the server is encrypted. RSA
creates a link between the server private key and the session key created for each unique
secure session. 
 
The session might get brute-force attacked&mdash;this consists of an attack that injects the
server with combinations of security keys until it finds the correct one. Even though this
process might take a long time, if the server's private key is compromised, the attackers
can see both the session data and all client transactions.

### How PFS protects a website

PFS enables the server not to rely on a single session key. Instead of using the same
encryption key whenever a user or service makes a connection, PFS generates a unique
session key for each connection.

Enable PFS by using exchange mechanisms&mdash;`Ephemeral Diffie-Hellman (DHE)` and
`Elliptic Curve Diffie-Hellman (ECDHE)`. If the attackers brute force the session key,
they can only decrypt the information from that one session and not the others.

### Requirements to implement PFS in a web server

Use one of the following tools to implement PFS:

- OpenSSL 1.0.1c+
- Apache 2.4 or 
- Nginx 1.0.6+ and 1.1.0+

You can check the versions of these packages by running the following commands:

**Note**: The results might vary as the vendors release new versions.

```
[root@rackspace-test ~]$ openssl version
OpenSSL 1.1.1g FIPS  21 Apr 2020

[root@rackspace-test ~]$ httpd -v
Server version: Apache/2.4.37 (centos)
Server built:   Nov  4 2020 03:20:37
```

For Debian&reg; or Ubuntu&reg; operating systems servers, the command is `apache2ctl -v`.

```
[root@rackspace-test ~]$ nginx -v
nginx version: nginx/1.14.1
```

### SSL protocol configuration

Check what websites have SSL implemented by running the commands in the
following sections.

These samples implement PFS in a domain called **example.com**.

#### Apache instructions

There are two options to check what websites have an SSL certificate in place:

```
[root@rackspace-test ~]# grep -ir "SSLEngine" /etc/httpd/
/etc/httpd/conf.d/example.com.conf:     SSLEngine on
```

**Note:** The default path for Apache Virtual Hosts are under the
directory **/etc/httpd/conf.d/**. Directories might vary for your configuration.

Or, you can use the commands `httpd -S` or `apachectl -S` for CentOS &reg; or Red
Hat&reg; Enterprise Linux &reg; (RHEL) and `apache2ctl -S` for Debian or Ubuntu
operating systems.

```
[root@rackspace-test ~]# httpd -S | grep 443
*:443                  is a NameVirtualHost
     port 443 namevhost www.example.com (/etc/httpd/conf.d/example.com.conf:10)
```

Add the following parameters to the vhost configuration with your
[favorite text editor](https://docs.rackspace.com/support/how-to/command-line-text-editors-in-linux/):

```
SSLProtocol all -SSLv2 -SSLv3
SSLHonorCipherOrder on
SSLCipherSuite "EECDH+ECDSA+AESGCM EECDH+aRSA+AESGCM EECDH+ECDSA+SHA384 EECDH+ECDSA+SHA256 EECDH+aRSA+SHA384 EECDH+aRSA+SHA256 EECDH+aRSA+RC4 EECDH EDH+aRSA RC4 !aNULL !eNULL !LOW !3DES !MD5 !EXP !PSK !SRP !DSS"
```

When you search for the word **SSL** in the vhost, the output should look be similar to the
following after the implementation:

```
[root@rackspace-test ~]# egrep 'SSL' /etc/httpd/conf.d/example.com.conf
     SSLEngine on
     SSLProtocol all -SSLv2 -SSLv3
     SSLHonorCipherOrder on
     SSLCipherSuite "EECDH+ECDSA+AESGCM EECDH+aRSA+AESGCM EECDH+ECDSA+SHA384 EECDH+ECDSA+SHA256 EECDH+aRSA+SHA384 EECDH+aRSA+SHA256 EECDH+aRSA+RC4 EECDH EDH+aRSA RC4 !aNULL !eNULL !LOW !3DES !MD5 !EXP !PSK !SRP !DSS"
     SSLCertificateFile       /etc/ssl/certs/2022-example.com.crt
     SSLCertificateKeyFile    /etc/ssl/private/2022-example.com.key
```
Make sure the syntax is correct and restart Apache.

```
[root@rackspace-test ~]# httpd -t
Syntax OK
[root@rackspace-test ~]# apachectl -k restart
```

##### Nginx Instructions

List the websites that have an SSL certificate installed:

```
[root@rackspace-test ~]# egrep -ir 'SSL' /etc/nginx/conf.d/
/etc/nginx/conf.d/example.com.conf:        listen 443 ssl;
/etc/nginx/conf.d/example.com.conf:        ssl_certificate       /etc/ssl/certs/2022-example.com.chained.crt;
/etc/nginx/conf.d/example.com.conf:        ssl_certificate_key   /etc/ssl/private/2022-example.com.key;
```

**Note:** The default path for Nginx Blocks are under the directory
**/etc/nginx/conf.d/**. Directories might vary for your configuration.

Add the following parameters to the vhost configuration with your
[favorite text editor](https://docs.rackspace.com/support/how-to/command-line-text-editors-in-linux/):

```
ssl_protocols TLSv1.2 TLSv1.1 TLSv1;
ssl_prefer_server_ciphers on;
ssl_ciphers "EECDH+ECDSA+AESGCM EECDH+aRSA+AESGCM EECDH+ECDSA+SHA384 EECDH+ECDSA+SHA256 EECDH+aRSA+SHA384 EECDH+aRSA+SHA256 EECDH+aRSA+RC4 EECDH EDH+aRSA RC4 !aNULL !eNULL !LOW !3DES !MD5 !EXP !PSK !SRP !DSS";
```

When you search for the word **SSL** in the vhost, the output should look be similar to the
following after the implementation:

```
[root@racksapce-test ~]# egrep -ir 'SSL' /etc/nginx/conf.d/example.com.conf
     listen          443 ssl;
     ssl_protocols TLSv1.2 TLSv1.1 TLSv1;
     ssl_prefer_server_ciphers on;
     ssl_ciphers "EECDH+ECDSA+AESGCM EECDH+aRSA+AESGCM EECDH+ECDSA+SHA384 EECDH+ECDSA+SHA256 EECDH+aRSA+SHA384 EECDH+aRSA+SHA256 EECDH+aRSA+RC4 EECDH EDH+aRSA RC4 !aNULL !eNULL !LOW !3DES !MD5 !EXP !PSK !SRP !DSS";
     ssl_certificate         /etc/ssl/certs/2022-example.com.chained.crt;
     ssl_certificate_key     /etc/ssl/private/2022-example.com.key;
```

Make sure the syntax is correct and restart Nginx.

```
[root@rackspace-test ~]# nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
[root@rackspace-test ~]# nginx -s reload
```

By using the preceding steps, you can implement PFS correctly for your websites.

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact). 
