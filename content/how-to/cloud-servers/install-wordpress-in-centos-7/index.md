---
permalink: install-wordpress-in-centos-7/
audit_date:
title: 'Install WordPress on CentOS 7'
type: article
created_date: '2021-03-10'
created_by: Alfonso Murillo
last_modified_date: '2021-03-10'
last_modified_by: Alfonso Murillo
product:cloud-servers
product_url:
---

# Install WordPress on CentOS 7

This article explains how to install WordPress on an Apache with CentOS 7 web server.

WordPress is the most famous open-source blogging tool, which uses PHP and MySQL to manage the contents and interface of the site.

## Important: Rackspace Support does not support WordPress configuration. This article provides steps as a best-effort solution, but your developers should review them thoroughly before implementing them to prevent unexpected downtime.

## Prerequisites

All the processes must be done with a non-root user with `sudo` privileges.

For this installation, it is mandatory that a LAMP stack is installed on the server (LAMP includes Apache, MySQL, and PHP). If you already have these installed, proceed to the next section (Create a MySQL database and user for WordPress), if not, you can refer to our article on how to [Install a LAMP stack on RHEL 7 based distributions](https://docs.rackspace.com/support/how-to/how-to-install-a-lamp-stack-on-rhel-7-based-distributions/)



## Create a MySQL database and user for WordPress
As mentioned before, WordPress uses a relational database to manage the content. We will use MariaDB, installed previously, to create a user and a database for WordPress to use.

First, we will log into MySQL with the root user:

`mysql -u root -p`

Once logged in, we will create the database. For this example, we are naming the database as 'wpdatabase'. Please note that all the MySQL instructions must end with a semi-colon (;):

`CREATE DATABASE wpdatabase;`

This will create the database. Now, we need a user who will be used by WordPress for working on this database. The example shows how to create a user called 'wpuser' with password 'password':

`CREATE USER wpuser@localhost IDENTIFIED BY 'password';`

Once that we have created the new user and database, we need to grant the user the permissions to manage the whole database:

`GRANT ALL PRIVILEGES ON wordpress.* TO wordpressuser@localhost IDENTIFIED BY 'password';`
`FLUSH PRIVILEGES;`

This will complete the MySQL requirements for WordPress. Creating a specific database and user for WordPress is not mandatory, but is highly recommended for security.

To exit the MySQL interface, just type `exit` and you will be back on the Linux command line.

## Install WordPress
Once that we have all the previous requirements (the LAMP stack and the MySQL database and user), we are ready to install WordPress.

First, a PHP package that allows WordPress to resize images for thumbnails and a package that allows MySQL database access functions are needed. To install these packages we use:

`sudo yum install php74-gd php74-mysqlnd`
`sudo service httpd restart`

Now, we download the latest WordPress version on our server's home directory:

`cd ~`
`wget http://wordpress.org/latest.tar.gz`

To extract all the files from the compressed folder we can use the `tar` command:

`tar xzvf latest.tar.gz`

This will create a directory called 'wordpress' on your home directory, which contains all the needed files for WordPress to work properly. As mentioned on the Apache installation, the webpage files are located on `/var/www/html`, so we need to copy the contents of the new directory to this location preserving the default permissions:

`sudo rsync -avP ~/wordpress/ /var/www/html/`

WordPress needs a folder to store all the uploaded files, which is not already on the downloaded folder, so we will create it:

`mkdir /var/www/html/wp-content/uploads`

These steps will create a WordPress example page on your web server, but for it to work without problems, we need to change the ownership of the files to the Apache user and group, so that it is able to access all the files with the appropriate permissions:

`sudo chown -R apache:apache /var/www/html/*`

## Configure WordPress
Although most of the configuration will be made through a graphic interface on the web page, we need to make some configuration changes on the server. For this, we will work on the folder where all the web files are located:

`cd /var/www/html`

WordPress uses a main configuration file called `wp-config.php`, it is not on the directory but an example that works with minor changes is provided. To use this example file as the main one, we will create a copy with the correct name:

`sudo cp wp-config-sample.php wp-config.php`

Now, we need to make some changes to this configuration file. You can use your preferred text editor like nano or vi. For the example we use vi:

`sudo vi wp-config.php`

There, we need to specify the database information on the `MySQL settings` section. The information is the database name and the user credentials defined on the 'Create a MySQL database and user for WordPress' section, like shown below:

```
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wpdatabase');

/** MySQL database username */
define('DB_USER', 'wpuser');

/** MySQL database password */
define('DB_PASSWORD', 'password');
```

## Use the graphic interface to end the configuration
We are now able to access our WordPress page through http://SERVERS_PUBLIC_IP. You will be asked for the installation language, the site information and the user to access de administrator's portal. When this configuration is finished, you will be redirected to the main WordPress dashboard.

To access this dashboard any other time you should go to http://SERVERS_PUBLIC_IP/wp-login.php.

## Conclusion
WordPress is a very intuitive CMS (Content Management System) that allows you to set up a blogging web page really quick and free. If you completed the steps on this article, you will be ready to start using your WordPress site.
