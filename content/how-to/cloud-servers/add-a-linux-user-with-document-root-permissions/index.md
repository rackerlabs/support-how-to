---
permalink: add-a-linux-user-with-document-root-permissions/
audit_date: '2020-10-13'
title: Add a Linux User With Document Root Permissions
type: article
created_date: '2011-11-23'
created_by: Rackspace Support
last_modified_date: '2020-10-13'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to set up a Linux user with read and write permissions for your web document root, usually, in the **/var/www/** directory. Once you connect with this user via Secure File Transfer Protocol (SFTP), you can upload your website content directly to the **/var/www/your/site/folder**.

For this example, we'll use an account named **demo**. Be sure to replace **demo** in the examples with your preferred name.

These commands require superuser privileges so they assume you are running them from a root user `sudo` account.

### Get the group and directory

You need to know the group the web server process is running under, as well as the location of your web server's document root. You can find this in the web server's configuration file (like **httpd.conf** or **apache2.conf** for Apache&reg;). In the following section, you can find the default values for the Apache&reg; web server running on some Linux&reg; distributions:

**CentOS&reg;, Fedora&reg;, and RHEL&reg;**

On Red Hat&reg; based systems, Apache&reg; runs under the group **apache** with a document root of `/var/www/html`.

**Ubuntu&reg; operating system and Debian&reg;**

On Debian&reg;-based systems Apache&reg; runs under the group **www-data** with a document root of `/var/www`.

### Create or modify a user

Create a new user or modify an existing user for our purposes.

#### Create a new user

Create a new user in the same group as the web server, with its home directory set to your document root.

Remember to change the values to match your username and your web server's settings.

On CentOS&reg;, Fedora&reg;, or RHEL&reg;, the command to create the user is similar to this:

    $ sudo useradd -d /var/www/html -G apache demo

On Debian&reg; or Ubuntu&reg; operating systems use different values:

    $ sudo useradd -d /var/www -G www-data demo

Once you have created the user, set its password as well.

    $ sudo passwd demo

You can skip to the section on changing the document root to be group-writable, if necessary.

#### Modify an existing user

To modify an existing user, you need to add it to the group your web server uses.

On CentOS&reg;, Fedora&reg;, or RHEL&reg;, the command is similar to this:

    $ sudo usermod -a -G apache demo

On the Ubuntu&reg; operating system or Debian&reg;, the output might be similar to this:

    $ sudo usermod -a -G www-data demo

To change the account to use the document root as its home directory you can do repeat that process.

Run the following command in the command line, if you are on CentOS&reg;, Fedora&reg;, or RHEL&reg;:

    $ sudo usermod -d /var/www/html demo

On the Ubuntu&reg; operating system or Debian&reg;:

    % sudo usermod -d /var/www demo

### Change the document root permissions

Change the document root, so the file and the contents are in the same group as the web server.

#### Set the group

On CentOS&reg;, Fedora&reg;, or RHEL&reg; run the following command in the command line:

    $ sudo chgrp -R apache /var/www/html

On the Ubuntu&reg; operating system or Debian&reg;:

    $ sudo chgrp -R www-data /var/www

#### Set the permissions

Make the document root group-writable, but set the **setgid** permission on the document root directory itself. The **setgid** permission will ensure the new files you create in the document root inherit the group ID from their parent directory.

On CentOS&reg;, Fedora&reg;, or RHEL&reg; you can set the right permissions with the commands:

    $ sudo chmod -R g+w /var/www/html
    $ sudo chmod g+s /var/www/html

The Ubuntu&reg; operating system and Debian&reg; versions of the commands are:

    $ sudo chmod -R g+w /var/www
    $ sudo chmod g+s /var/www

### Connect and test

Connect to your server via SFTP with the user account you created or modified.
Try uploading a file to make sure the permissions were set correctly. If you get a _permission denied_ error run the command `ls -la` in the command line, in the document root, to check the directory permissions.
