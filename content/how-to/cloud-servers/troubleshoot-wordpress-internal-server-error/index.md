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

The error appears when you try to access one of your WordPress pages. It
redirects to a blank page with the **Internal Server Error** and displays a message
stating **The server encountered an internal error or misconfiguration and was
unable to complete your request**.

The most common causes are a corrupted **.htaccess** file, the PHP memory limit
reached, wrong syntax, and file permissions.

**Note**: Rackspace Technology does not support WordPress panel troubleshooting.
This article functions only as a reference for troubleshooting efforts. Ensure
that any changes suggested here do not negatively impact your specific environment
before executing any tasks.

### Troubleshooting steps

To identify the server problem, you can use the following troubleshooting steps:

1. Enable the debugging feature.
2. Review the **.htaccess** file.
3. Increase the PHP memory limit.
4. Check for corrupted plugins.
5. Repair WordPress core files.
6. Review the PHP version.

**Important**: Before making any changes to your WordPress environment, we
recommend that you make a complete backup of the site.

#### 1. Enable the debugging feature

The WordPress debugging feature helps identify where the error comes from
by printing more specific information about it to the screen or a debug
file.

To enable the debugging feature, you need to edit the **wp-config.php** file
located on the root folder of the site. In the configuration file, look
for the following line:

`define(‘WP_DEBUG’, false);`

If you change this value from false to true, the error shows directly on
your site. To avoid this, you can send the error logs into a debug file. To do
this, replace the line mentioned previously with the following ones:

```sh
// Turns on the debugging feature
define('WP_DEBUG', true);

// Tell WordPress to log everything to /wp-content/debug.log
define('WP_DEBUG_LOG', true);

// Turn off the display of error messages on your site
define('WP_DEBUG_DISPLAY', false);
```

As the comments in the sample mention, the error messages log into
**/wp-content/debug.log**. You can use these messages to try to identify where
the error comes from with more specific information.

#### 2. Review the .htaccess file

Web servers running on Apache&reg; use the **.htaccess** configuration file,
which contains rules for the server's software, redirections, and so on.
The dot at the beginning of the file name makes it a hidden file.

A corrupted **.htaccess** file might cause an internal server error.

Search for the **.htaccess** file on your server and make a copy as a
backup. If you are using a basic WordPress configuration, you can try
the following file:

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
**.htaccess** configurations, you can refer to the
[official WordPress .htaccess guide](https://wordpress.org/support/article/htaccess/).

If changing the *.htaccess* file doesn't fix the issue, you can
go back to your original configuration file with the copy you made.

#### 3. Increase the PHP memory limit

Reaching the PHP memory limit might cause the ` HTTP 500` internal server errors.
To increase the memory limit, you need to edit the **wp-config.php** configuration
file. Search for the following commented line:

`/* That's all, stop editing! Happy blogging. */`

Before this line, add the following:

`Define ('WP_MEMORY_LIMIT', '256M');`

In the previous line, you can define the memory limit used by WordPress.
You need to review your codes, themes, and plugins to find out what is
consuming so much memory.

#### 4. Check for corrupted plugins

WordPress offers a simple way to download and add plugins to your site, but
these plugins can be incomplete or become incompatible due to a lack of updates.

You can try deactivating some plugins through the WordPress admin control
panel to test if one of the plugins causes the `500` errors.

If you do not have access to the administrator control panel for the
WordPress site, you can search through the server files and the
*wp-content* folder for the **plugins** folder. Change the name of this
folder to deactivate all plugins.

When you refresh the page and then name the folder **plugins** again, the plugins
do not activate automatically. You need to activate them one by one
to search for the one that is causing the error.

#### 5. Repair WordPress core files

Some of the WordPress core files might be corrupt, although
it is not likely. To fix this, you can download and replace some files and
folders from [the WordPress site](https://wordpress.org/download/#download-install).

Download the compressed folder and extract the contents. Delete the
**wp-content** folder and the **wp-config-sample.php** file to avoid
overwitting important files. Move the remaining contents to the root
folder, replacing the existing folder and core files.

#### 6. Review the PHP version

Some WordPress components such as core files, plugins, and themes might require
the latest PHP version.

Search for the characteristics of your plugins and themes to determine the required
PHP version or if you should update the PHP version or delete the plugin or theme.

To identify the PHP version running on your server, run the following command:

`php -v`

### Conclusion

The `500` internal server error is one of the most common when working with
WordPress, and it is difficult to fix because it can have multiple causes on the
server. This article covers the basic troubleshooting steps to find the
origin of the error. Be careful when working with the configuration and
core WordPress files because they are crucial for site functionality. We
recommend you take backups before modifying them.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 
