---
permalink: install-wordpress-multi-site/
audit_date: '2021-04-06'
title: 'Install WordPress multi-site'
type: article
created_date: '2021-03-10'
created_by: Alfonso Murillo
last_modified_date: '2021-04-06'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

This article will explain how to configure WordPress multi-site, which allows
you to build a network of websites in your WordPress installation.

### Prerequisites

- A WordPress installation
- Permalinks activated so that your URLs look like `http://example.com/my-page`
  instead of `http://example.com/?p=1654`
- Deactivated plugins
- Backup of a WordPress installation

### Modify wp-config.php

1. Open the `wp-config.php` file on your server. Default location is
   `/var/www/html/`.
2. Add the following line above the comment: `/* That's all, stop editing! Happy
   blogging. */`.

```PHP
define('WP_ALLOW_multi-site', true);
```

### Network setup

1. Enter the administrator dashboard through `http://YOUR_SITE/wp-config.php`.
2. **Tools** > **Network Setup**.

   **Note**: Depending on your installation, you will be able to choose between
   using sub-domains or sub-directories for your different sites. A sub-domain
   would look like `site1.example.com` and `site2.example.com`, while a
   sub-directory would look like `example.com/site1` and `example.com/site2`.
3. On **Network Title** enter a network name and the network's admin email.
4. Click on the **Install** button.

### Configuration and .htaccess files

1. Open `wp.config.php` file.
2. Place the following code after the line reading `/* That's all, stop editing!
   Happy blogging. */` comment:

    ```PHP
    define('multi-site', true);
    define('SUBDOMAIN_INSTALL', true);
    define('DOMAIN_CURRENT_SITE', 'website');
    define('PATH_CURRENT_SITE', '/');
    define('SITE_ID_CURRENT_SITE', 1);
    define('BLOG_ID_CURRENT_SITE', 1);
    ```

3. Save changes
4. Open `.htaccess` file located in `/var/www/html`.
5. Add the following code **replacing** the entire content.

```PHP
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

### Network Administrator menu

Once you complete the previous steps, you will have completed the multi-site installation. On the top left corner you should see a tab called **My Sites**, where you can see the *'Network Admin'* menu with the following tabs:

- **Dashboard:** here you can add new users and sites to the network.
- **Sites:** here you can manage all the sites on your network.
  - **Add new:** with this option you can add new sites, defining the site
    address (URL), title, language, and the administrator's email.
- **Users:** here you can manage all the users of your network.
- **Themes:** here you can install, uninstall, and activate themes for the
  network.
- **Plugins:** this is the plugins administrator.
  - Only the super admin can install new plugins. For the site admins to be able
    to activate or deactivate them, on the Settings tab, the super admin should
    mark the **Plugins** checkbox on the **Enable administration menus**
    section.
- **Settings:** this is where the basic settings can be found.

### Conclusion

With WordPress multi-site, you are able to manage different sites under the same domain. In case you select to use sub-domains, a wildcard certificate is recommended to cover all the sites.
