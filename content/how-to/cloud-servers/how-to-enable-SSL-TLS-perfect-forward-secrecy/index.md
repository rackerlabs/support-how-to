---
permalink: how-to-enable-SSL-TLS-perfect-forward-secrecy/
audit_date:
title: 'How to enable SSL/TLS Perfect Forward Secrecy in Apache or Nginx'
type: article
created_date: '2021-04-24'
created_by: Miguel Salgado
last_modified_date: '2021-04-24'
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

# How to enable Perfect Forward Secrecy in Apache or NGINX

This article provides an overview on what is Perfect Forward Secrecy (PFS) and how to enable in Apache or Nginx web servers.

## What is Perfect Forward Secrecy?

Perfect Forward Secrecy prevents the data that is shared between the client and the server even if the private key is compromised, this is accomplished by generating a session key for each transaction made. 

## Why to implement Perfect Forward Secrecy to a website?

A TLS or SSL Certificate works by using a public key and private key, when the web browser and the server exchanges the keys, a session key is created using a key exchange mechanism called RSA where all the information between the client and the server is encrypted. RSA creates a link between the server private key and the session key created for each unique secure session. 
 
It is possible that the session gets brute forced attacked where this consists by trying a numerously combination of security keys until the correct one is discovered. Even though this process may take a really long time, if the private key of the server is compromised, it is possible that the attackers would not only be able to see the data from that session but all of the transactions made by all clients.

## How does Perfect Forward Secrecy protects a website?

Perfect Forward Secrecy enables the server to not rely on a single session key, instead of utilizing the same encryption key whenever a connection is made, a unique session key is generated when a connection is created.

When enabling Perfect Forward Secrecy, it will be using the exchange mechanisms called `Ephemeral Diffie-Hellman (DHE)` and `Elliptic Curve Diffie-Hellman (ECDHE)`.  If the attackers get to brute force the session key, they will only be able to decrypt the information from that session and not the others

## Requirements to implement Perfect Forward Secrecy in a web server.
1. OpenSSL 1.0.1c+
2. Apache 2.4 or 
3. Nginx 1.0.6+ and 1.1.0+

In order to check for the versions of these packages you can run the following commands.

**Note: At the moment of writing this article, these are the latest versions available, results may vary from your output.**

```
[root@rackspace-test ~]$ openssl version
OpenSSL 1.1.1g FIPS  21 Apr 2020

[root@rackspace-test ~]$ httpd -v
Server version: Apache/2.4.37 (centos)
Server built:   Nov  4 2020 03:20:37
```
For *Debian/Ubuntu OS servers based* the command is `apache2ctl -v`

```
[root@rackspace-test ~]$ nginx -v
nginx version: nginx/1.14.1
```

## SSL Protocol Configuration

It is needed to check what websites have SSL implemented.

**Note: For this exercise Perfect Forward Secrecy will be implemented in a domain called example.com.**

### Apache Instructions

In order to check what websites have an SSL in place there are two options:

```
[root@rackspace-test ~]# grep -ir "SSLEngine" /etc/httpd/
/etc/httpd/conf.d/example.com.conf:     SSLEngine on
```
**Note: The default path for Apache Virtual Hosts are under the directory `/etc/httpd/conf.d/`, directories may vary from your configuration.**

Or with the commands `httpd -S` or `apachectl -S` for *CentOS/RHEL*, `apache2ctl -S` for *Debian/Ubuntu*.

```
[root@rackspace-test ~]# httpd -S | grep 443
*:443                  is a NameVirtualHost
     port 443 namevhost www.example.com (/etc/httpd/conf.d/example.com.conf:10)
```

The following parameters will be added into the vhost configuration with your [favorite text editor](https://docs.rackspace.com/support/how-to/command-line-text-editors-in-linux/).

```
SSLProtocol all -SSLv2 -SSLv3
SSLHonorCipherOrder on
SSLCipherSuite "EECDH+ECDSA+AESGCM EECDH+aRSA+AESGCM EECDH+ECDSA+SHA384 EECDH+ECDSA+SHA256 EECDH+aRSA+SHA384 EECDH+aRSA+SHA256 EECDH+aRSA+RC4 EECDH EDH+aRSA RC4 !aNULL !eNULL !LOW !3DES !MD5 !EXP !PSK !SRP !DSS"
```
As a result, by looking for the word SSL in the vhost, the output should look like this after the implementation.
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

### Nginx Instructions

List the website that have an SSL installed:

```
[root@rackspace-test ~]# egrep -ir 'SSL' /etc/nginx/conf.d/
/etc/nginx/conf.d/example.com.conf:        listen 443 ssl;
/etc/nginx/conf.d/example.com.conf:        ssl_certificate       /etc/ssl/certs/2022-example.com.chained.crt;
/etc/nginx/conf.d/example.com.conf:        ssl_certificate_key   /etc/ssl/private/2022-example.com.key;
```

**Note: The default path for Nginx Blocks are under the directory `/etc/nginx/conf.d/`, directories may vary from your configuration.**

The following parameters will be added into the vhost configuration with your [favorite text editor](https://docs.rackspace.com/support/how-to/command-line-text-editors-in-linux/).

```
ssl_protocols TLSv1.2 TLSv1.1 TLSv1;
ssl_prefer_server_ciphers on;
ssl_ciphers "EECDH+ECDSA+AESGCM EECDH+aRSA+AESGCM EECDH+ECDSA+SHA384 EECDH+ECDSA+SHA256 EECDH+aRSA+SHA384 EECDH+aRSA+SHA256 EECDH+aRSA+RC4 EECDH EDH+aRSA RC4 !aNULL !eNULL !LOW !3DES !MD5 !EXP !PSK !SRP !DSS";
```

As a result, by looking for the word SSL in the vhost, the output should look like this after the implementation.

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

With the steps mentioned above, Perfect Forward Secrecy has been implemented correctly for your websites.




