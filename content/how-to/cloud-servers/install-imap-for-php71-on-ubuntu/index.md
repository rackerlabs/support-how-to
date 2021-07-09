---
permalink: install-imap-for-php71-on-ubuntu/
audit_date:
title: Install IMAP for PHP 7.1 on Ubuntu
type: article
created_date: '2021-06-23'
created_by: Alfonso Murillo
last_modified_date: '2021-07-12'
last_modified_by: Ana Corpus
product: Cloud Servers
product_url: cloud-servers
---

The Internet Message Access-Protocol (IMAP) allows to access email messages from anywhere in an efficient way. IMAP stores these messages on servers and downloads them on demand. IMAP works as an intermediate between the emails servers and clients.

PHP offers an IMAP extension to connect to a mailbox by using POP3, IMAP and NNTP protocols. This article covers the installation of IMAP on an Ubuntu server for PHP 7.1.

### Verify PGP IMAP installation

- Create a  file and add the following lines:

  ```
    <?php
    phpinfo();
    ?>
  ```
- Save the file with any name and the **php** extension.
**Note:** Don't use name **phpinfo.php**. It  is a common name searched by hackers.

- When you access the new file, you can see all PHP information. Search for IMAP information. If it is not in the file, proceed to install the module.

### Install IMAP
- Enter the following command to install IMAP for PHP 7.1 on Ubuntu&reg;:

  `sudo apt install php7.1-imap`

- Restart the server. If the server is an Apache&reg; server, enter the following command:

   `sudo systemctl restart apache2`

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
