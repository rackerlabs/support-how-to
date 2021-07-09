---
permalink: unable-to-install-plugins-in-wordpress/
audit_date:
title: 'Unable to install plugins in WordPress'
type: article
created_date: '2021-06-21'
created_by: Alfonso Murillo
last_modified_date: '2021-07-12'
last_modified_by: Ana Corpus
product: Cloud Servers
product_url: cloud-servers
---

When you install plugins in a WordPress&reg; environment that is already configured in your web server, the system might issue an error: _the installation failed because a directory could not be created._ This article presents basic troubleshooting for this issue.

### Permissions

Check if permissions allow WordPress to write files to the server. You can see the required permissions for files and directories in the [WordPress documentation](https://wordpress.org/support/article/changing-file-permissions/).


**Note:** Do not set 777 permissions on the WordPress project folder or on the **wp-config.php** file.

### Modify the wp-config.php file

Check if WordPress has the proper FTP or SSL credentials.The **wp-config.php** file must contain the following lines:

  ```
  define('FS_METHOD', 'ftpext');
  define('FTP_USER', 'username');
  define('FTP_PASS', 'password');
  define('FTP_HOST', 'ftp.example.org');
  define('FTP_SSL', false);
  ```

The `FS_METHOD` attribute defines the filesystem method. The `ftpext` method forces the usage of the FTP-PHP extension for access via FTP.

The `FTP_HOST` attribute is the **hostname:port** combination for the SSH/FTP server. When using FTP, the default port is 21, and for SSH the default port is 22. If you are using these ports,  do not specify them in the `FTP_HOST` attribute.

If your server supports SSL-connection by the underlying transport, you can set attribute `FTP_SSL` to TRUE. This is for **Secure FTP**, not for SSH-SFTP.

You can also add the following line to the **wp-config.php** file:

  `define('FS_METHOD', 'direct');`

By setting the `FS_METHOD`attribute to direct, the filesystem method forces _Direct File I/O_ requests within PHP. Note that this solution might cause security issues on poorly configured hosts.

For more options to edit the **wp-config.php** file, refer to [editing the wp-config file](https://wordpress.org/support/article/editing-wp-config-php/) in the WordPress documentation.

### Check the WordPress installation

If the instructions provided in this article do not solve the issue, check that the WordPress installation does not have a corrupted core or corrupted configuration files.

### Related articles
[Wordpress security best practices on Linux](https://docs.rackspace.com/support/how-to/wordpress-security-best-practices-linux/)

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).






