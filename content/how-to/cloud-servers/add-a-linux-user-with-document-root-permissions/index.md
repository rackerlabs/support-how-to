---
permalink: add-a-linux-user-with-document-root-permissions
audit_date: '2020-10-13'
title: Add a Linux user with document root permissions
type: article
created_date: '2011-11-23'
created_by: Rackspace Support
last_modified_date: '2020-10-13'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to set up a Linux&reg; user with read and write permissions for your web
document root, which you usually find in the **/var/www/** directory. After you connect with this user
though Secure File Transfer Protocol (SFTP), you can upload your website content directly to your
site folder, such as **/var/www/your-site-folder**.

This example uses an account named **demo**. Be sure to replace **demo** in the examples with your preferred name.

These commands require superuser privileges, so they assume you are running them from a root user `sudo` account.

### Get the group and directory

You need to know the group the webserver process is running under, as well as the location of your webserver's
document root. You can find this in the webserver's configuration file (such as **httpd.conf** or **apache2.conf**
for Apache&reg;). In the following section, you can find the default values for the Apache webserver running on
some Linux distributions:

**CentOS&reg;, Fedora&reg;, and RHEL&reg;**

On Red Hat&reg;-based systems, Apache runs under the group **apache** with a document root of **/var/www/html**.

**Ubuntu&reg; operating system and Debian&reg;**

On Debian&reg;-based systems, Apache runs under the group **www-data** with a document root of **/var/www**.

### Create or modify a user

Create a new user or modify an existing user for the example.

#### Create a new user

Create a new user in the same group as the webserver, with its home directory set to your document root.

Remember to change the values to match your username and your webserver's settings.

On CentOS, Fedora, or RHEL, the command to create the user is similar to the following example:

    $ sudo useradd -d /var/www/html -G apache demo

On Debian or Ubuntu operating systems, use different values:

    $ sudo useradd -d /var/www -G www-data demo

After you create the user, set the password as well.

    $ sudo passwd demo

You can skip to the section on changing the document root to be group-writable, if necessary.

#### Modify an existing user

To modify an existing user, you need to add it to the group your webserver uses.

On CentOS, Fedora, or RHEL, the command is similar to the following command:

    $ sudo usermod -a -G apache demo

On the Ubuntu operating system or Debian, the output might be similar to the following command:

    $ sudo usermod -a -G www-data demo

To change the account to use the document root as its home directory you can repeat that process.

Run the following command on the command line, if you are on CentOS, Fedora, or RHEL:

    $ sudo usermod -d /var/www/html demo

On the Ubuntu operating system or Debian, use the following command:

    % sudo usermod -d /var/www demo

### Change the document root permissions

Change the document root so the file and the contents are in the same group as the webserver.

#### Set the group

On CentOS, Fedora, or RHEL, run the following command:

    $ sudo chgrp -R apache /var/www/html

On the Ubuntu operating system or Debian, run the following command:

    $ sudo chgrp -R www-data /var/www

#### Set the permissions

Make the document root group-writable, but set the **setgid** permission on the document root directory itself.
The **setgid** permission ensures the new files you create in the document root inherit the group ID from their
parent directory.

On CentOS, Fedora, or RHEL, you can set the right permissions with the commands:

    $ sudo chmod -R g+w /var/www/html
    $ sudo chmod g+s /var/www/html

The Ubuntu operating system and Debian versions of the commands are:

    $ sudo chmod -R g+w /var/www
    $ sudo chmod g+s /var/www

### Connect and test

Connect to your server via SFTP with the user account you created or modified.
Try uploading a file to make sure you set the permissions correctly. If you get a *permission denied*
error, run the command, `ls -la`, in the document root, to check the directory permissions.
