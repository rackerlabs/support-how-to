---
permalink: auter-install/
audit_date: '2017-07-06'
title: 'Install Auter on CentOS 6'
type: article
created_date: '2017-07-06'
created_by: Ruth Lee
last_modified_date: '2017-07-06'
last_modified_by: Ruth Lee
product: Cloud Product
product_url: cloud-product
---

This article demonstrates the basic install and configuration of auter, a package that provides automatic updates for RHEL, CentOS or Fedora Linux servers, with the ability to run pre/post hooks and reboot afterwards. This will walk through configuring automatic reboots. 

Use case: Auter provides flexible scheduling to ensure updates and reboots happen when you want them to. Auter allows you to customize how updates run - you can pre-download updates in advance of the window to apply them, and you can run custom scripts before and after the updates. It is a more flexible option than yum-cron or dnf-automatic

### Prerequisites

Include any prerequisites or required system setups. You can use bullets to describe a list of items:

   - Auter is available from the EPEL repository, so you will need to have this configured. Instructions are located [here](https://support.rackspace.com/how-to/install-epel-and-additional-repositories-on-centos-and-red-hat/).
   - Package dependencies are stock packages: bash, yum, and crontab.
   - Outbound access to at least one repository.
   - Your server successfully reboots with all necessary applications restarting automatically or able to be started by scripts (i.e. without human intervention).

### Limitations

This article uses steps for CentOS 6, so there may be some minor adjustments required for other OS's and major point releases of CentOS.

### Initial Install

1. Install the package: 


       sudo yum install auter


2. Enable auter:

       auter --enable


### Basic Configuration

1. Enable autoreboot  
   Configuration is controlled via /etc/auter/auter.conf. Change the autoreboot field from the default of "no" to "yes".

       AUTOREBOOT="yes"


2. Configure update times
   Update times are set via /etc/cron.d/auter. The default install comes with some examples, all of which are commented out. Remove the preceeding '#' from each line you want to apply. At a minimum you will need to uncomment one line from the 'Preparing package downloads' section and one line of the 'Executing updates' section. You can check enabled options using:

       egrep -v '^#|^$' /etc/cron.d/auter 

    As an example, this might return:

       30 1 2 * *   root /usr/bin/auter --prep                              # On the 2nd of every month
       30 1 14 * *    root /usr/bin/auter --apply                              # On the 14th of every month

   Note that the scheduling is based on cron syntax, so if you require a time not listed as an example you can manually configure this. 

3. If any of your applications require specific steps to be taken prior to shutdown or after reboot configure these by placing the necessary scripts in the correct location. You can specify a non-default location in /etc/auter/auter.conf. Default locations are:

       PREAPPLYSCRIPTDIR="/etc/auter/pre-apply.d"
       POSTAPPLYSCRIPTDIR="/etc/auter/post-apply.d"
       PREREBOOTSCRIPTDIR="/etc/auter/pre-reboot.d"
       POSTREBOOTSCRIPTDIR="/etc/auter/post-reboot.d"


3. It is a good idea to test that your server will reboot without any errors. Run the following to manually perform an auter patching run:
       auter --prep
       auter --apply


Auter is now configured on your system to automatically apply updates at the specified time and reboot the server after application.

You can find more information about different configuration options in the auter man pages.



### Further information

- [Auter on Github](https://github.com/rackerlabs/auter)
