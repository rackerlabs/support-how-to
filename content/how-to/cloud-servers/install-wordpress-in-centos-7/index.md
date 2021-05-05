---
permalink: install-wordpress-in-centos-7
audit_date:
title: 'Install WordPress on CentOS 7'
type: article
created_date: '2021-03-10'
created_by: Alfonso Murillo
last_modified_date: '2021-04-14'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article explains how to install WordPress&reg; on a CentOS&eg; 7 webserver with Apache&reg;.

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

       # mysql -u root -p

2. Create the database named **wpdatabase**. Remember, all MySQL instructions must end with a semi-colon (**;**):

       CREATE DATABASE wpdatabase;
   
3. Create a user, which WordPress uses for working on this database. Set the user as `wpuser` with password `password`:

        CREATE USER wpuser@localhost IDENTIFIED BY 'password';

4. Grant the user the permissions to manage the whole database:

       GRANT ALL PRIVILEGES ON wordpress.* TO wpuser@localhost IDENTIFIED BY 'password';
       FLUSH PRIVILEGES;
       
5. Exit the MySQL interface:

        exit

This procedure completes the WordPress MySQL requirements. You don't have to create a specific database
and user for WordPress, but we highly recommended it for security.

### Install WordPress

Perform the following steps to install WordPress:

1. Run the following commands to install the PHP packages that allow WordPress to resize images for
   thumbnails and allow the MySQL database access necessary functions:

       # sudo yum install php74-gd php74-mysqlnd
       # sudo service httpd restart

2. Download the latest WordPress version on your server's home directory:

       # cd ~
       # wget http://wordpress.org/latest.tar.gz

3. Extract all the files from the compressed folder:

       # tar xzvf latest.tar.gz

   This command creates a directory called **wordpress** in your home directory that contains all files
   WordPress needs to work properly. 
   
4. Run the following command to copy the **wordpress** directory to **/var/www/html**, which
   contains all webpage files, and preserve the default permissions:

       # sudo rsync -avP ~/wordpress/ /var/www/html/

5. Create a folder where WordPress can store all uploaded files:

       # mkdir /var/www/html/wp-content/uploads

6. The preceding steps create a WordPress example page on your web server. However, for it to work without problems,
   you should change the ownership of the files to the Apache user and group so that WordPress can
   access all the files with the appropriate permissions. Run the following command:

       # sudo chown -R apache:apache /var/www/html/*

### Configure WordPress

Although you complete most of the configuration through a graphic interface (GUI) on the web page,
you need to make some configuration changes on the server. Perform the following steps to configure
the server:

1. Change to the folder where all the web files are located:

       # cd /var/www/html

2. Because WordPress needs a configuration file called **wp-config.php**, which does not exist,
   run the following command to copy the sample file and rename it:

       # sudo cp wp-config-sample.php wp-config.php

3. Edit the configuration file with the text editor like nano or vi. This example uses `vi`:

       # sudo vi wp-config.php

4. Specify the database information in the **MySQL settings** section. Enter the database name
   and the user credentials defined on the **Create a MySQL database and user for WordPress**
   section, similar to the following example:

       // ** MySQL settings - You can get this info from your web host ** //
       /** The name of the database for WordPress */
       define('DB_NAME', 'wpdatabase');

       /** MySQL database username */
       define('DB_USER', 'wpuser');

       /** MySQL database password */
       define('DB_PASSWORD', 'password');

### Complete the configuration in the GUI

You can now access your WordPress page by browsing to **http://\<SERVER-PUBLIC-IP\>**. Enter the
installation language, the site information, and the user to access the administrator's portal
when prompted. After you finish this configuration, the system redirects you to the main WordPress
dashboard.

To access this dashboard any time, go to **http://\<SERVER-PUBLIC-IP\>/wp-login.php**.

### Conclusion

WordPress is a very intuitive Content Management System (CMS) that allows you to set up a blog web page,
quickly and for free. After you complete the steps in this article, you can start using your WordPress site.

