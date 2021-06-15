---
permalink: troubleshoot-wordpress-internal-server-error/
audit_date: '2021-06-14'
title: 'Troubleshoot WordPress internal server error'
type: article
created_date: '2021-05-24'
created_by: Alfonso Murillo
last_modified_date: '2021-06-14'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

This article shows the most common troubleshooting steps for the WordPress&reg;
*500 internal server* error.

The error is appears when you try to access one of your WordPress pages and it's
redirected to a blank page with title **Internal Server Error** and a message
stating **The server encountered an internal error or misconfiguration and was
unable to complete your request**.

The most common causes are a corrupted **.htaccess** file, the PHP memory limit
reached or its version, wrong syntax, file permissions, among others.

**Note**: Wordpress panel troubleshooting is NOT supported by Rackspace
Technology. This article is only intended to function as a reference for
troubleshooting efforts. Please ensure that any changes suggested in this
document will not negatively impact your specific environment before excuting
any tasks.

### Troubleshoot steps

To get to the server's problem you can follow the next troubleshooting steps:

1. Enable the debugging feature
2. Review the .htaccess file
3. Increase the PHP memory limit
4. Check for corrupted plugins
5. Repair WordPress core files
6. Review the PHP version

**Important**: Before making any changes to your WordPress environment it is
recommended that you make a complete backup of the site.

### 1. Enable the debugging feature

The WordPress debugging feature helps to identify where the error is coming from
by printing more specific information about it into the screen or to a debug
file.

To enable the debugging feature you need to edit the *wp-config.php* file that
is located on the root folder of the site. Once on the configuration file, look
for the following line:

`define(‘WP_DEBUG’, false);`

If you change this value from false to true, the error will show directly on
your site. To avoid this you can send the error logs into a debug file. To do
this, replace the line mentioned above with the following:

```sh
// Turns on the debugging feature
define('WP_DEBUG', true);

// Tell WordPress to log everything to /wp-content/debug.log
define('WP_DEBUG_LOG', true);

// Turn off the display of error messages on your site
define('WP_DEBUG_DISPLAY', false);
```

As mentioned on the commented lines above, the error messages will log into
`/wp-content/debug.log`. You can use these messages for trying to identify where
the error comes from with more specific information.

### 2. Review the .htaccess file

The *.htaccess* file is a configuration file used by web servers running on
Apache that contains rules for the server's software, redirections, etc.

A corrupted *.htaccess* file may be the cause of an internal server error.

Search for the *.htaccess* file on your server, note that the dot at the
beginning makes it a hidden file, and make a copy as a backup. If you are using
a basic WordPress configuration you can try the following file:

```sh
# BEGIN WordPress

RewriteEngine On
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]

# END WordPress
```

If you have a multisite WordPress installation or want to go deeper into the
*.htaccess* configurations, you can refer to the
[official WordPress .htaccess guide](https://wordpress.org/support/article/htaccess/).

If by changing the *.htaccess* file you are not able to fix the issue, you can
go back to your original configuration file with the copy made before.

### 3. Increase the PHP memory limit

The 500 internal server errors can also be caused due to the PHP memory limit
being reached. To increase the memory limit you need to edit, again, the
*wp-config.php* configuration file. Search for the commented line that says:

`/* That's all, stop editing! Happy blogging. */`

Before this line add the following:

`Define ('WP_MEMORY_LIMIT', '256M');`

In the previous line, you are able to define the memory limit used by WordPress.
You will need to review your codes, themes, and plugins to find out what is
consuming so much memory.

### Check for corrupted plugins

WordPress offers a simple way to download and add plugins to your site, but
these plugins can be incomplete or become incompatible due to lack of updates.

Through the WordPress admin control panel you can try deactivating some plugins
to test if the 500 error is caused by one of them.

In case you do not have access to the administrator control panel for the
WordPress site, you can navigate through the server's files and on the
*wp-content* folder search for the *plugins* folder. Change the name of this
folder and all plugins will be deactivated.

When you refresh the page and then name the folder *plugins* again the plugins
will not be activated automatically, you will need to activate them one by one
to search the one that is causing the error.

### 5. Repair WordPress core files

There is a chance that some of the WordPress core files are corrupted, although
it is not very probable. To fix this you can download and replace some files and
folders from [here](https://wordpress.org/download/#download-install).

Download the compressed folder and extract the contents. **Delete the
*wp-content* folder and the *wp-config-sample.php* file to avoid that the
important files are overwritten**. Move the remaining contents to the root
folder, replacing the existing one and so replacing the core files.

### 6. Review the PHP version

Some WordPress components such as core files, plugins, and themes may require
the latest PHP version.

Search for the characteristics of your plugins and themes to see what PHP
version they require and if it is more convenient to update the PHP version or
to delete the plugin/theme.

To know the PHP version running on your server you can run the command:

`php -v`

## Conclusions

The 500 internal server error is one of the most common when working with
WordPress and it is difficult to fix since it can have multiple causes on the
server. This article covered the basic troubleshooting steps for finding the
origin of the error. Be careful when working with the configuration and
core WordPress files since they are crucial for the site's functionality. It is
recommended to do backups before modifying them.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 