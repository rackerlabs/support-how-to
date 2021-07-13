---
permalink: install-imap-for-php71-on-the-ubuntu-operating-system/
audit_date: '2021-07-12'
title: Install IMAP for PHP 7.1 on the Ubuntu operating system
type: article
created_date: '2021-06-23'
created_by: Alfonso Murillo
last_modified_date: '2021-07-12'
last_modified_by: Ana Corpus
product: Cloud Servers
product_url: cloud-servers
---

The Internet Message Access Protocol (IMAP) allows you to access email messages
efficiently from anywhere. IMAP stores these messages on servers and downloads
them on demand and works as an intermediary between the emails servers and clients.

PHP&reg; offers an IMAP extension to connect to a mailbox by using POP3, IMAP, and NNTP
protocols. This article covers the installation of IMAP on a server with the Ubuntu&reg;
operating system for PHP 7.1.

### Verify PHP IMAP installation

To verify your installation, perform the following steps:

1. Create a  file and add the following lines:

  ```
    <?php
    phpinfo();
    ?>
  ```

2. Save the file with any name and the **php** extension.
   
   **Note:** Don't use the name: **phpinfo.php**. Hackers commonly search for that name.

When you access the new file, you can see all PHP information. If you don't see IMAP information
in the file, proceed to install the module.

### Install IMAP

To install IMAP, perform the following steps:

1. Enter the following command to install IMAP for PHP 7.1 on the Ubuntu operating system:

  `sudo apt install php7.1-imap`

2. Restart the server. If it is an Apache&reg; server, enter the following command:

   `sudo systemctl restart apache2`

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
