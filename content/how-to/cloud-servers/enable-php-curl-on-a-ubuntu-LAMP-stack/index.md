---
permalink: enable-php-curl-on-a-ubuntu-LAMP-stack
audit_date: '2021-12-02'
title: 'Enable PHP cURL on an Ubuntu LAMP stack'
type: article
created_date: '2021-12-02'
created_by: Alfonso Murillo
last_modified_date: '2021-12-02'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: cloud-servers
---

This article shows how to enable the PHP cURL extension for it to be used in a server that uses an Ubuntu LAMP stack.

## Procedure

Check the version of php your server is running on:
```sh
$ php -v
```

It would look as follows:

```sh
root@ubuntu:~# php -v
PHP 7.4.3 (cli) (built: Aug 13 2021 05:39:12) ( NTS )
Copyright (c) The PHP Group
Zend Engine v3.4.0, Copyright (c) Zend Technologies
    with Zend OPcache v7.4.3, Copyright (c), by Zend Technologies
root@ubuntu:~# 
```

**Note:**  For this exercise, PHP 7.4 is being used, the package that you will install needs to match the version of PHP your server is running on.

The installation will be made through `apt` so an optional recommended command before starting with the installation to make sure you obtain the last updated packages is:

```sh
$ sudo apt update
```

Search for the curl package, you can use `apt-cache` to search for package in your source lists and using grep to filter the results.

```sh
root@ubuntu:~# apt-cache search php | grep curl
php-curl - CURL module for PHP [default]
php7.4-curl - CURL module for PHP
root@ubuntu:~#
```

For PHP 7.4 version you will need to install the cURL Extension for PHP using the following command:

```sh
$ sudo apt install php7.4-curl
```

Once installed, review the syntax to ensure the Apache can be restarted without issues.

```sh
$ apache2ctl -t
```

**Note:**  In case Apache is unable to restart properly, this could lead to downtime.

After the installation is completed you will need to restart the Apache server.

```sh
$ sudo service apache2 restart
```

## Conclusion
After following the instructions above, you will be able to user cURL on an Ubuntu LAMP stack.

## Related Articles
- [Installing a LAMP stack on Ubuntu 18.04](https://docs.rackspace.com/support/how-to/install-a-lamp-stack-on-ubuntu-1804/)
