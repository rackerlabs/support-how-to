---
permalink: unable-to-install-plugins-in-wordpress/
audit_date:
title: 'Unable to install plugins in WordPress'
type: article
created_date: '2021-06-21'
created_by: Alfonso Murillo
last_modified_date: '2021-06-21'
last_modified_by: Alfonso Murillo
product: Cloud Servers
product_url: cloud-servers
---

# Unable to install plugins in WordPress

There is a common issue for installing plugins when we have configured a WordPress environment in our web server. This issue prompts an error that says that the installation failed because a directory could not be created.

This article presents basic troubleshooting for this issue.

### Permissions

The issue can be caused because of permissions that do not allow WordPress to write files on the server. For a better understanding of file permissions and the ones WordPress directories and files need you can refer to the WordPress documentation ([Click here](https://wordpress.org/support/article/changing-file-permissions/)).

**CAUTION: Do not set 777 permissions for the WordPress project folder nor the wp-config.php file.**

### Modify the wp-config.php file

If all the permissions are granted correctly, the issue may be caused due to the server's configuration.

In case the error is because WordPress does not count with the FTP or SSL credentials you need to add the following lines to the *wp-config.php* file:

```
define('FS_METHOD', 'ftpext');
define('FTP_USER', 'username');
define('FTP_PASS', 'password');
define('FTP_HOST', 'ftp.example.org');
define('FTP_SSL', false);
```

The `FS_METHOD` attribute defines the filesystem method. The `ftpext` method forces the usage of the FTP PHP Extension for accessing via FTP.

The `FTP_HOST` attribute is the hostname:port combination for the SSH/FTP server. When using FTP the default port is 21 and for SSH the default port is 22. If you are using these ports you do not need to specify them on the `FTP_HOST` attribute.

If your server supports SSL-connection by the underlying transport, you can set this attribute to TRUE. This is for "Secure FTP" not for SSH SFTP.

Another solution for this issue is just adding the following line to the *wp-config.php* file:

`define('FS_METHOD', 'direct');`

Setting this filesystem method forces to us Direct File I/O requests from within PHP. This solution might cause security issues on poorly configured hosts.

For more details on the options that can be added on the *wp-config.php* file, you can refer to the WordPress documentation by [clicking here](https://wordpress.org/support/article/editing-wp-config-php/).

## Conclusions
Plugins are really useful for providing great WordPress sites and the issue described in this article is really common. The troubleshooting described above works in most cases. If the issue is not solved with the above suggestions you might need to review your WordPress installation, since there might be other causes, like corrupted core or configuration files.

### Related articles
[Wordpress security best practices on Linux] (https://docs.rackspace.com/support/how-to/wordpress-security-best-practices-linux/)







