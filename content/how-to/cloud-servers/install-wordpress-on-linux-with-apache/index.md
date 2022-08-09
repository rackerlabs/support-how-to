---
permalink: install-wordpress-on-linux-with-apache
audit_date: '2022-06-03'
title: 'Install WordPress on Linux with Apache'
type: article
created_date: '2021-03-10'
created_by: Jorge García & Miguel Salgado
last_modified_date: '2022-06-03'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: cloud-servers
---

This article explains how to install WordPress&reg; on a Linux&reg; webserver with Apache&reg;.

WordPress, a popular open-source blogging tool, uses PHP and MySQL&reg; to manage the site contents
and interface.

**Important**: Rackspace Support does not support WordPress configuration. This article provides steps
as a best-effort solution, but your developers should review them thoroughly before implementing them
to prevent unexpected downtime.

### Prerequisites

Execute all commands as a non-root user with `sudo` privileges.

For this installation, install a LAMP stack on the server. LAMP includes Linux&reg;, Apache, MySQL,
and PHP). If you already have these installed, proceed to the next section. Otherwise, refer to our
article on how to [Install a LAMP stack on RHEL 7 based distributions](https://docs.rackspace.com/support/how-to/how-to-install-a-lamp-stack-on-rhel-7-based-distributions/).

### Create a MySQL database and user for WordPress

As mentioned before, WordPress uses a relational database to manage the content. This example uses
MariaDB, installed previously, to create a user and a database for WordPress to use. Perform the
following steps to create a database and WordPress user:

1. Run the following command to log into MySQL with the root user:
```sh
$ mysql -u root -p
```

2. Create the database named **wpdatabase**. Remember, all MySQL instructions must end with a semi-colon (**;**):
```sql
CREATE DATABASE wpdatabase;
```

3. Create a user, which WordPress uses for working on this database. Set the user as `wpuser` with password `password`:
```sql
CREATE USER wpuser@localhost IDENTIFIED BY 'password';
```

4. Grant the user the permissions to manage the whole database:
```sql
GRANT ALL PRIVILEGES ON wordpress.* TO wpuser@localhost IDENTIFIED BY 'password';
FLUSH PRIVILEGES;
```

5. Exit the MySQL interface:
```sql
exit
```

This procedure completes the WordPress MySQL requirements. You don't have to create a specific database
and user for WordPress, but we highly recommended it for security.

### Install WordPress

Perform the following steps to install WordPress:

1. Run the following commands to install the PHP packages that allow WordPress to resize images for
   thumbnails and allow the MySQL database access necessary functions:
```sh
$ sudo yum install php74-gd php74-mysqlnd
$ sudo service httpd restart
```

2. Download the latest WordPress version on your server's home directory:
```sh
$ cd ~
$ wget http://wordpress.org/latest.tar.gz
```

3. Extract all the files from the compressed folder:
```sh
$ tar xzvf latest.tar.gz
```
   This command creates a directory called **wordpress** in your home directory that contains all files
   WordPress needs to work properly. 
   
4. Run the following command to copy the **wordpress** directory to **/var/www/html**, which
   contains all webpage files, and preserve the default permissions:
```sh
$ sudo mv ~/wordpress/ /var/www/html/example.com
```
5. Create a folder where WordPress can store all uploaded files:
```
$ mkdir /var/www/html/example.com/wp-content/uploads
```

6. The preceding steps create a WordPress example page on your web server. However, for it to work without problems,
   you should change the ownership of the files to your FTP user or the Apache user and group so that WordPress can
   access all the files with the appropriate permissions. Run the following command:

```sh
$ sudo chown -R FTP_USER:apache /var/www/html/example.com
```
### Configure WordPress

Although you complete most of the configuration through a graphic interface (GUI) on the web page,
you need to make some configuration changes on the server. Perform the following steps to configure
the server:

1. Change to the folder where all the web files are located:
```sh
$ cd /var/www/html
```
2. Because WordPress needs a configuration file called **wp-config.php**, which does not exist,
   run the following command to copy the sample file and rename it:
```sh
$ sudo cp wp-config-sample.php wp-config.php
```
3. Edit the configuration file with the text editor like nano or vi. This example uses `vi`:
```sh
$ sudo vi wp-config.php
```
4. Specify the database information in the **MySQL settings** section. Enter the database name
   and the user credentials defined on the **Create a MySQL database and user for WordPress**
   section, similar to the following example:
```
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wpdatabase');

/** MySQL database username */
define('DB_USER', 'wpuser');

/** MySQL database password */
define('DB_PASSWORD', 'password');
```

### Securing WordPress

#### Changing file permissions
As per [WordPress documentation](https://wordpress.org/support/article/hardening-wordpress/), 
changing file permissions on the document root of your website, will increase the security 
in your website.

```sh
$ find /path/to/your/wordpress/install/ -type d -exec chmod 755 {} \;
$ find /path/to/your/wordpress/install/ -type f -exec chmod 644 {} \;
```

Within your vHost configuration or inside the .htaccess you can place the following block to 
prevent scripts to not be accessed by any user.

```apache
# Block the include-only files.
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^wp-admin/includes/ - [F,L]
RewriteRule !^wp-includes/ - [S=3]
RewriteRule ^wp-includes/[^/]+\.php$ - [F,L]
RewriteRule ^wp-includes/js/tinymce/langs/.+\.php - [F,L]
RewriteRule ^wp-includes/theme-compat/ - [F,L]
</IfModule>


# BEGIN WordPress
```

#### Disable PHP execution in uploads directory
When a Wordpress site becomes compromised, oftentimes there are backdoors uploaded to writable 
directories that disguise themselves as legit Wordpress files.  One step you can take to add to 
your existing security strategy is to disable PHP execution in certain directories.  

One of the most common ones is to disable PHP execution within the wp-content/uploads directory.
This can be performed by:

```sh
$ vim /var/www/vhosts/example.com/wp-content/uploads/.htaccess
```
```apache
[...]
# Prevent PHP execution
<Files *.php>
deny from all
</Files>
[...]
```

**WARNING:** This can break your theme if it requires PHP execution within the wp-content/uploads directory.  If you find something breaks, simply roll your change back and the site will start working again.

#### Block xmlrpc.php attacks
Wordpress uses XML-RPC to remotely execute functions within Wordpress. Often times malicious parties 
will attempt to exploit xmlrpc.php by brute forcing it, which can send thousands of requests to the 
web server, and therefore causing resource contention issues.

An xmlrpc.php attack can be detected by checking through the site's access logs.  If you see hundreds 
or thousands of requests in a short period of time that look similar to what is below, that is a sign 
that xmlrpc.php is being attacked:

```sh
$ tail /var/log/httpd/example.com-access.log
[...]
123.123.123.123 - - [2/Jun/2022:15:45:02 +0000] "POST /xmlrpc.php HTTP/1.1" 200 247 "-" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1"
123.123.123.123 - - [2/Jun/2022:15:45:02 +0000] "POST /xmlrpc.php HTTP/1.1" 200 247 "-" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1"
123.123.123.123 - - [2/Jun/2022:15:45:03 +0000] "POST /xmlrpc.php HTTP/1.1" 200 247 "-" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1"
[...]
```

You can mitigate xmlrpc.php brute force attacks in Apache by putting the following into the .htaccess file:

```sh
$ vim /var/www/vhosts/example.com/.htaccess
```
```apache
# Block WordPress xmlrpc.php requests
<Files xmlrpc.php>
order allow,deny
deny from all
</Files>
```

#### Force SSL on wp-admin logins
```sh
$ vim /var/www/vhosts/example.com/wp-config.php
```
```apache
[...]
define('FORCE_SSL_LOGIN', true);
define('FORCE_SSL_ADMIN', true);
/* That's all, stop editing! Happy blogging. */
[...]
```

### Complete the configuration in the GUI
You can now access your WordPress page by browsing to **http://\<SERVER-PUBLIC-IP\>**. Enter the
installation language, the site information, and the user to access the administrator's portal
when prompted. After you finish this configuration, the system redirects you to the main WordPress
dashboard.

To access this dashboard any time, go to **http://\<SERVER-PUBLIC-IP\>/wp-login.php** or **http://\<YOUR-DOMAIN.TLD\>/wp-login.php**.

### Conclusion
WordPress is a very intuitive Content Management System (CMS) that allows you to set up a blog web page,
quickly and for free. After you complete the steps in this article, you can start using your WordPress site.

