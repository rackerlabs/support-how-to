---
permalink: install-wordpress-multisite/
audit_date:
title: 'Install WordPress multisite'
type: article
created_date: '2021-03-10'
created_by: Alfonso Murillo
last_modified_date: '2021-03-10'
last_modified_by: Alfonso Murillo
product:
product_url:
---

# Install WordPress multisite

This article will explain how to configure WordPress multisite, which allows you to build a network of websites in your WordPress installation.

## Prerequisites

There are certain requirements needed for being able to configure WordPress multisite:
   - A WordPress installation
   - Pretty Permalinks activated so that your URLs look like http://example.com/my-page instead of http://example.com/?p=1654
   - All plugins are deactivated

It is a good idea to have a backup of your WordPress installation.

## Modify wp-config.php to allow multisite
The first thing to do is to modify the `wp-config.php` file on your server (this will normally be on the `/var/www/html/` directory) to allow multisite on WordPress.

Open the file with your preferred text editor and add the following line above the `/* That's all, stop editing! Happy blogging. */` comment:

`define('WP_ALLOW_MULTISITE', true);`

## Configure the WordPress Network
After modifying the configuration file, enter your administrator dashboard through http://YOUR_SITE/wp-config.php and look for the *Tools* submenu on the left sidebar. There, a tab called *Network Setup+ has appeared. This tab is where you will configure your WordPress Multisite.

Depending on your installation, you will be able to choose between using sub-domains or sub-directories for your different sites. A sub-domain would look like `site1.example.com` and `site2.example.com`, while a sub-directory would look like `example.com/site1` and `example.com/site2`.

The configuration page will ask you to enter a name for your network in the field *'Network Title'* and the network's admin email.

When you end this configuration, click on the *Install* button.

## Modify configuration and .htaccess files
After submitting your network setup on the preovious step, WordPress will generate two code snippets. The first one, which will look similar as the following code, has to be added to the `wp.config.php` file, after the `/* That's all, stop editing! Happy blogging. */` comment:

```
define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', true);
define('DOMAIN_CURRENT_SITE', 'website');
define('PATH_CURRENT_SITE', '/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);
```

The next code snippet should be added to the `.htaccess` file on `/var/www/html`

```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]

# add a trailing slash to /wp-admin
RewriteRule ^([_0-9a-zA-Z-]+/)?wp-admin$ $1wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^([_0-9a-zA-Z-]+/)?(wp-(content|admin|includes).*) $2 [L]
RewriteRule ^([_0-9a-zA-Z-]+/)?(.*\.php)$ $2 [L]
RewriteRule . index.php [L]
```

## Netork Administrator menu
Once you complete the previous steps, you will have completed the multisite installation. On the top left corner you should see a tab called *'My Sites'*, where you can see the *'Network Admin'* menu with the following tabs:

- **Dashboard:** here you can add new users and sites to the network.
- **Sites:** here you can manage all the sites on your network.
    - **Add new:** with this option you can add new sites, defining the site address (URL), title, language, and the administrator's email.
- **Users:** here you can manage all the users of your network.
- **Themes:** here you can install, uninstall, and activate themes for the network.
- **Plugins:** this is the plugins administrator. 
    - Only the super admin can install new plugins. For the site admins to be able to activate or deactivate them, on the Settings tab, the super admin should mark the *'Plugins'* checkbox on the *'Enable administration menus'* section.
- **Settings:** this is where the basic settings can be found.

## Conclusion
With WordPress multisite, you are able to manage different sites under the same domain. In case you select to use sub-domains, a wildcard certificate is recommended to cover all the sites.

If you follow the steps in this article, you will have WordPress multisite ready for use.
