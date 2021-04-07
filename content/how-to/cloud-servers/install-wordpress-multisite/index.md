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

This article explains how to configure WordPress multi-site, which enables
you to build a network of websites in your WordPress installation.

### Prerequisites

- A WordPress installation
- Permalinks activated so that your URLs look like `http://example.com/my-page`
  instead of `http://example.com/?p=1654`
- Deactivated plugins
- Backup of a WordPress installation

### Modify wp-config.php

1. Open the **wp-config.php** file on your server. Default location is
   **/var/www/html/**.
2. Add the following line above the **/* That's all, stop editing! Happy
   blogging. /* ** comment:

```PHP
define('WP_ALLOW_multi-site', true);
```

### Network setup

1. Enter the administrator dashboard through **http://YOUR_SITE/wp-config.php**.
2. Navigate to **Tools** > **Network Setup**.

   **Note**: Depending on your installation, you can choose between
   using subdomains or subdirectories for your different sites. A subdomain
   is similar to **site1.example.com** and **site2.example.com**, while a
   subdirectory is similar to **example.com/site1** and **example.com/site2**.
3. In **Network Title**, enter a network name and the network administrator email.
4. Click **Install**.

### Configuration and .htaccess files

1. Open the **wp.config.php** file for editing.
2. Place the following code after the line reading ** /* That's all, stop editing!
   Happy blogging. */ ** comment:

    ```PHP
    define('multi-site', true);
    define('SUBDOMAIN_INSTALL', true);
    define('DOMAIN_CURRENT_SITE', 'website');
    define('PATH_CURRENT_SITE', '/');
    define('SITE_ID_CURRENT_SITE', 1);
    define('BLOG_ID_CURRENT_SITE', 1);
    ```

3. Save your changes.
4. Open **/var/www/html.htaccess** for editing.
5. Replace all content in the file with the following code:

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

Performing the previous steps completes the multi-site installation. On the top left corner,
you should see a tab called **My Sites**, which includes a **Network Admin** menu with the following tabs:

- **Dashboard:** Add new users and sites to the network.
- **Sites:** Manage all the sites on your network.
  - **Add new:** Add new sites and define the site
    address (URL), title, language, and the administrator email.
- **Users:** Manage all the users of your network.
- **Themes:** Install, uninstall, and activate themes for the network.
- **Plugins:** Only the super admin can use the plugins administrator to install
  new plugins. To allow the site admin to activate or deactivate them, the super admin should
  select the **Plugins** checkbox on the **Enable administration menus** section of the **Settings** tab.
- **Settings:** Manage the basic settings.

### Conclusion

With WordPress multi-site, you can manage different sites under the same domain. If you choose to use
subdomains, consider using a wildcard certificate cover all the sites.
