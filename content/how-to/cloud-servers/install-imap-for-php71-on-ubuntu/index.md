---
permalink: install-imap-for-php71-on-ubuntu/
audit_date:
title: Install IMAP for PHP 7.1 on Ubuntu
type: article
created_date: '2021-06-23'
created_by: Alfonso Murillo
last_modified_date: '2021-06-23'
last_modified_by: Alfonso Murillo
product: Cloud Servers
product_url: cloud-servers
---

# Install IMAP on Ubuntu for PHP 7.1
The Internet Message Access-Protocol (IMAP) allows to access email messages from anywhere in an efficient way, by storing these messages on servers and downloading them just when you need to open them. IMAP works as an intermediate between the emails servers and clients.

PHP offers an IMAP extension that allows to connect to a mailbox by POP3, IMAP and NNTP. This article covers the installation of IMAP on an Ubuntu server for PHP 7.1.

## Check if PGP IMAP in installed
An easy way of obtaining the IMAP installation information is by creating a PHP file with any name (avoid using *phpinfo.php* since that is a common name searched by hackers) and writing the following:

```
<?php
phpinfo();
?>
```

When you access this new file you will see all PHP information. Search on that page for IMAP information, if it is not shown you will need to proceed to install the module.

## Install IMAP
For installing IMAP on Ubuntu for PHP 7.1 you will need to execute the following command:

`sudo apt install php7.1-imap`

For this new package to work you might need to restart the server. In case of an Apache server you can run:

`sudo systemctl restart apache2`

## Conclusions
With the simple steps shown on this article you will be able to determine if you have an IMAP package already installed and, if not, you can install it for PHP 7.1 running on Ubuntu.
