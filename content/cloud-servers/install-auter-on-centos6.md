---
permalink: install-auter-on-centos6/
audit_date: '2017-07-06'
title: 'Install Auter on CentOS 6'
type: article
created_date: '2017-07-06'
created_by: Ruth Lee
last_modified_date: '2017-07-06'
last_modified_by: Ruth Lee
product: Cloud Servers
product_url: cloud-servers
---

Auter provides flexible scheduling to ensure updates and reboots happen when you want them to. Auter allows you to customize how updates run - you can pre-download updates in advance of the window to apply them, and you can run custom scripts before and after the updates. It is a more flexible option than yum-cron or dnf-automatic

This article show to install install and configure Auter, a package that provides automatic updates for RHEL, CentOS or Fedora Linux servers, with the ability to run pre/post hooks and reboot afterwards. 

### Prerequisites

   - A CentOS 6 or RHEL server configured to use an EPEL repository. For instructions on how to configure an EPEL repository with your server,  see [Install and EPEL, IUS, and Remo repositories on CentOS and Red Hat](/how-to/install-epel-and-additional-repositories-on-centos-and-red-hat).
   - Your server must be able to successfully reboot with all necessary applications restarting automatically or able to be started using scripts.

### Limitations

This article uses steps for CentOS 6, so there may be some minor adjustments required for other OS's and major point releases of CentOS.

### Install the Auteur package

1. Install the package on your server: 

       sudo yum install auter

2. Enable auter:

       auter --enable


### Basic Configuration

1. Enable autoreboot. Configuration is controlled via /etc/auter/auter.conf. Change the autoreboot field from the default of "no" to "yes".

       AUTOREBOOT="yes"

2. Configure update times. Update times are set with a cron file found in the **/etc/cron.d/auter** directory. The default install comes with some examples, all of which are commented out. Remove the preceeding '#' from each line you want to apply. At a minimum you will need to uncomment one line from the 'Preparing package downloads' section and one line of the 'Executing updates' section. You can check enabled options using:

       egrep -v '^#|^$' /etc/cron.d/auter 

    An example of the output the preceeding command might return:

       30 1 2 * *   root /usr/bin/auter --prep                              # On the 2nd of every month
       30 1 14 * *    root /usr/bin/auter --apply                              # On the 14th of every month

   The scheduling is based on cron syntax, so if you require a time not listed as an example you can manually configure the time. 

3. If any of your applications require specific steps to be taken prior to shutdown or after reboot configure these by placing the necessary scripts in the correct location. You can specify a non-default location in /etc/auter/auter.conf. Default locations are:

       PREAPPLYSCRIPTDIR="/etc/auter/pre-apply.d"
       POSTAPPLYSCRIPTDIR="/etc/auter/post-apply.d"
       PREREBOOTSCRIPTDIR="/etc/auter/pre-reboot.d"
       POSTREBOOTSCRIPTDIR="/etc/auter/post-reboot.d"

3. Test that your server reboots without any errors. Run the following commands to manually perform an Auter patching run:

       auter --prep
       auter --apply


Auter is now configured on your system to automatically apply updates at the specified time and reboot the server after application.

You can find more information about different configuration options in the Auter man pages.

### Further information

- You can find more information about different configuration options in the [Auter main pages](https://github.com/rackerlabs/auter). 
