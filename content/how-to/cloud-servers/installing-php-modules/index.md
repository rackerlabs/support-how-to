---
permalink: installing-php-modules
audit_date: '2020-05-22'
title: 'Install PHP modules'
type: article
created_date: '2020-05-22'
created_by: Chris Silva
last_modified_date: '2020-05-22'
last_modified_by: William Loy
product: Cloud Servers
product_url: cloud-servers
---


This article describes the steps to install PHP&reg; modules on a Linux&reg; server.


A PHP module is an extension of PHP that allows for more features within PHP. The following list contains dozens of available PHP modules: [PHP modules](https://www.php.net/manual/en/extensions.alphabetical.php)

**Note**: This process isn't applicable to Plesk&reg; or other similar control panel solutions.


### Prerequisites

The following prerequisites are necessary to install PHP modules:

   - A Linux server with PHP installed
   - Sudo or administrative permissions on the server
   - The php-cli module (recommended for listing installed modules and the PHP version)


### Checking installed PHP modules and PHP version

You should verify your PHP version and which modules currently exist on your PHP instance before installing PHP modules.

Verify the version of PHP and existing modules on the server by using the following command:

  - RHEL&reg;/CentOS&reg;:

       `yum list installed | grep -i php`

  - Debian&reg; or Ubuntu&reg;:

       `dpkg --get-selections | grep -i php`


After installing the `cli` modules, you can verify the version of PHP or PHP modules by using the following commands:

  - Get PHP version:

       `php -v`

  - Get installed PHP modules:

       `php -m`


### Installing PHP modules

It's helpful to search your package manager to get the name of the module as listed in the repositories. You can search for those modules by using the following commands:

  - RHEL/CentOS:

       `yum search <module>`

  - Debian/Ubuntu:

       `apt-cache search <module>`


The following example demonstrates a search for the `mbstring` module in CentOS 7:


        # yum search mbstring
        Loaded plugins: fastestmirror, langpacks
        Loading mirror speeds from cached hostfile
         * epel: dfw.mirror.rackspace.com
        ======================================================= N/S matched: mbstring =======================================================
        php-mbstring.x86_64 : A module for PHP applications which need multi-byte string handling
        php72u-mbstring.x86_64 : A module for PHP applications which need multi-byte string handling
        php73-mbstring.x86_64 : A module for PHP applications which need multi-byte string handling

          Name and summary matches only, use "search all" for everything.

**Note**: There may be multiple versions of PHP available in the repositories. You need to ensure that you are installing the module that matches the PHP version installed on your server. For example, if you have PHP 7.3 installed, you need to install the `php73-mbstring` module.


After identifying the module that you need to install, you can install it by using the following commands:

  - RHEL/CentOS:

       `yum install<module>`

  - Debian/Ubuntu:

       `apt install <module>`


Restart your Apache&reg;, NGINX&reg;, or PHP-FastCGI Process Manager (PHP-FPM) service to activate the new module. Repeat this process to install additional modules.
