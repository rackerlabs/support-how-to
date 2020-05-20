---
permalink: installing-php-modules/
audit_date:
title: 'Installing php modules'
type: article
created_date: '2020-05-20'
created_by: Chris Silva
last_modified_date:
last_modified_by:
product: Cloud Product
product_url: cloud-product
---


This article goes over the steps to install PHP modules on a Linux server. 


A PHP module is an extension of php that allows for various additional functionality within PHP. These modules interface with an application or codebase to allow functionality outside of the default functionality of PHP. 

There are dozens of php modules available and these modules can be viewed here: [PHP Modules](https://www.php.net/manual/en/extensions.alphabetical.php)

**Note**: This process is not applicable for Plesk or other similar control panel solutions. 


### Prerequisites

In order to install PHP modules, you will need the following prerequisites
   - A Linux server with PHP installed 
   - Sudo/Administrative permissions on the server
   - The php-cli module (Recommended for listing installed modules and php version)


### Checking installed PHP modules and PHP version

Before installing PHP modules you need to check what modules are installed as well as identify the version of PHP that is installed on the server. 

In order to check the version of PHP on the server or the modules that are installed, you can run the following command:

RHEL/CentOS

       yum list installed | grep -i php

Debian or the Ubuntu Operating System

       dpkg --get-selections | grep -i php


These commands will show you the installed PHP packages on your server. Once you've installed the `cli` modules, you can utilize the following commands to get the version or installed modules:

Get PHP version:

       php -v

Get installed PHP Modules:

       php -m


### Installing PHP Modules

Before installing modules it is helpful to search your package manager to get the name of the module as listed in the repositories. This can be done with the following commands. 

RHEL/CentOS

       yum search <module>

Debian or the Ubuntu Operating System

       apt-cache search <module>


This will query your repositories to see if the module is available. In the example below, we are searching for the `mbstring` module in CentOS 7.

```
# yum search mbstring
Loaded plugins: fastestmirror, langpacks
Loading mirror speeds from cached hostfile
 * epel: dfw.mirror.rackspace.com
======================================================= N/S matched: mbstring =======================================================
php-mbstring.x86_64 : A module for PHP applications which need multi-byte string handling
php72u-mbstring.x86_64 : A module for PHP applications which need multi-byte string handling
php73-mbstring.x86_64 : A module for PHP applications which need multi-byte string handling

  Name and summary matches only, use "search all" for everything.

```

**Note**: In some sitautions, there are multiple available versions of PHP available in the repositories. You will need to make sure that you are installing the module that matches the version of PHP installed on your server. For example, if you have PHP 7.3 installed, you would need to install the `php73-mbstring` module. 


Once you've determined the module that you need to install you can install the module as shown below for your operating system. 

RHEL/CentOS

       yum install <module>

Debian/the Ubuntu Operating System

       apt install <module>


Once the module is installed, in order to "activate" the module, you will need to restart your Apache, NGINX, or PHP-FPM service depending on the service utilizing PHP. You can repeat the process for installing modules as needed for the functionality of your application. 
