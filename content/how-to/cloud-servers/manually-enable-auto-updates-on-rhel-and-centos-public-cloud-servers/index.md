---
permalink: manually-enable-auto-updates-on-rhel-and-centos-public-cloud-servers
audit_date: '2018-11-06'
title: Manually enable automatic updates on Red Hat Enterprise Linux and CentOS public cloud servers
type: article
created_date: '2018-11-06'
created_by: Rackspace Support
last_modified_date: '2023-03-21'
last_modified_by: Pravanjan Hota
product: Cloud Servers
product_url: cloud-servers
---

Keeping your servers up to date with security fixes can help you avoid server
compromises. While package updates can't prevent all security breaches,
keeping your servers up to date should be a key component of your security
procedures.

This article describes how to enable automatic updates on your Red Hat&reg;
Enterprise Linux&reg; (RHEL) and CentOS&reg; Rackspace public cloud servers to
ensure that crucial updates are installed and current.

### RHEL 6 and CentOS 6

Use the following steps to enable automatic updates on your
RHEL 6 and CentOS 6 Rackspace public cloud servers:

1. After connecting to your server, install `yum-cron` by running the following
   command:

       $ yum -y install yum-cron

2. To view the `yum-cron` configuration file, use the following command:

       $ vi /etc/sysconfig/yum-cron

   You can also open the file in any text editor.

   By default, the configuration is set to download and install the
   updates, as shown in the following example:

       # Pass any given parameter to yum, as run in all the scripts invoked
       # by this package. YUM_PARAMETER gets passed directly to yum.
       # Make sure to single quote globs and double quote the variable contents.
       # YUM_PARAMETER="--exclude='kernel*' --exclude='grub*'"
       # Above would help exclude kernel and grub updates and stick to your
       # desired version.
       YUM_PARAMETER=

       # Don't install, just check (valid: yes|no)
       CHECK_ONLY=no

       # Check to see if you can reach the repos before updating (valid: yes|no)
       CHECK_FIRST=no

       # Don't install, just check and download (valid: yes|no)
       # Implies CHECK_ONLY=yes (gotta check first to see what to download)
       DOWNLOAD_ONLY=no
       DAYS_OF_WEEK="1"      (sun = 0, sat = 6)

3. *(Optional)* To set up notifications for automatic package updates, such
   as time of installation, packages installed, and installation errors,
   edit the line beginning with `MAILTO=` to add an email
   address to receive notifications, as shown in the following example:

       # if MAILTO is set and the mail command is available, the mail command
       # is used to deliver yum output

       # by default MAILTO is unset, so crond mails the output by itself
       # example:  MAILTO=root
       MAILTO=example@example.com

4. Save the file.

   If you are using `vim` to edit the configuration file, press **esc** and
   then enter **:wq** to save any changes.

5. Start the `yum-cron` service by running the following command:

       $ /etc/inid.d/yum-cron start

6. To start the service automatically on server reboot, run the following
   command:

       $ chkconfig yum-cron on

   Restart yum-cron to load the changes made

       $ /etc/inid.d/yum-cron restart


### RHEL 7 and CentOS 7

Use the following steps to enable automatic updates on your
RHEL 7 and CentOS 7 Rackspace public cloud servers:

1. After connecting to your RHEL 7 or CentOS 7 server, install `yum-cron` by
   running the following command:

       $ yum -y install yum-cron

2. To view the `yum-cron` configuration file(It is the default config file
   used by the `yum-cron` script), use the following command:

       $ vi /etc/yum/yum-cron.conf

   You can also open the file in any text editor.

   By default, updates are automatically downloaded, but not installed, as
   shown in the following example:

       # Whether a message should be emitted when updates are available,
       # were downloaded, or applied.
       update_messages = yes

       # Whether updates should be downloaded when they are available.
       download_updates = yes

       # Whether updates should be applied when they are available. Note
       # that download_updates must also be yes for the update to be applied.
       apply_updates = no

       # Maximum amount of time to randomly sleep, in minutes.  The program
       # will sleep for a random amount of time between 0 and random_sleep
       # minutes before running.  This is useful for e.g. staggering the
       # times that multiple systems will access update servers.  If
       # random_sleep is 0 or negative, the program will run immediately.
       # 6x60 = 360
       random_sleep = 360

3. For automatic updates to be downloaded and installed, ensure that
   `download_updates` and `apply_updates` are set to `yes`.

4. *(Optional)* You can set up notifications in the configuration file so that
   the output of the `yum` updates is emailed to you to inform you of what was
   completed and, if there are issues, what failed. Edit the following
   sections:

   1. In the `[emitters]` section of the configuration file, ensure that
      `emit_via` is set to `stdio`, as shown in the following example:

          [emitters]
          # Name to use for this system in messages that are emitted.  If
          # system_name is None, the hostname will be used.
          system_name = None

          # How to send messages.  Valid options are stdio and email.  If
          # emit_via includes stdio, messages will be sent to stdout; this is useful
          # to have cron send the messages.  If email_via includes email, this
          # program will send email itself according to the configured options.
          # If emit_via is None or left blank, no message will be sent.
          emit_via = stdio

    2. In the `[email]` section of the configuration file, edit the
       `email_to` field to add the email address to which you want the
       output to be sent, as shown in the following example:

           [email]
           # The address to send email messages from.
           # NOTE: 'localhost' will be replaced with the value of system_name.
           email_from = root@localhost

           # List of addresses to send messages to.
           email_to = example@example.com

           # Name of the host to connect to to send email messages.
           email_host = localhost

5. Save the file.

   If you are using `vim` to edit the configuration file, press **esc** and
   then enter **:wq** to save any changes.

6. You also need to update /etc/yum/yum-cron-hourly.conf file if you want to
   apply update hourly. Otherwise /etc/yum/yum-cron.conf will run on daily
   using the following cron job. Similarly hourly cron job is at the
   `/etc/cron.hourly/0yum-hourly.cron` location.

       $ cat /etc/cron.daily/0yum-daily.cron

7. Check whether the `yum-cron` service is started by running the following
   command:

       $ systemctl status yum-cron

   If the service is not running (inactive), start it by running the following
   command:

       $ systemctl start yum-cron

8. Now that the service is running, you should ensure that the service starts
   automatically after a server reboot. Run the following command to check
   whether `yum-cron` is enabled:

       $ systemctl is-enabled yum-cron

   Find the `yum-cron.service` process in the list. If it is enabled, the
   service starts when the server is booted. If it is disabled, use the
   following command to enable it:

       $ systemctl enable yum-cron

9. Sometimes, you may need to maintain the version of a package and not update
   it, due to compatibility issues that may arise with other applications that
   depend on the package.
   Also, there is one more file you can use `yum-cron-hourly.conf`
   under `/etc/yum` directory for slicing yum works based on your need.

   Here, We take an example of 2 packages to exclude: mysql and php.

   Edit the `yum-cron.conf` file.

       $ vi /etc/yum/yum-cron.conf


   At the bottom, in the [base] section, append a line with the `exclude`
   parameter and define the packages you want to exclude from updating.

       exclude = mysql* php*

   Your configuration should now look as shown below:

       [base]
       exclude = mysql* php*

   Do it similarly in `yum-cron-hourly.conf` file also if you are using.
   And then restart the yum-cron service after finishing the edit on both files.

       $ systemctl start yum-cron

