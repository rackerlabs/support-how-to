---
node_id: 135
title: Rackspace Cloud Essentials - CentOS - Installing vsftpd
type: article
created_date: '2011-04-04'
created_by: Rackspace Support
last_modified_date: '2015-12-30'
last_modified_by: Kyle Laffoon
product: Cloud Servers
product_url: cloud-servers
---

### Previous section

[Getting Started with Cloud
Servers](/how-to/create-a-cloud-server)



Following the previous articles in this series, you should now have an
active Cloud Server that is secured and has scheduled backups
configured. Next, you'll want to upload your web content to the server.
When you think of transferring files, you probably think of the File
Transfer Protocol (FTP) because it has been around for so long. While
simple to use, FTP has become obsolete because it lacks the ability for
secure file transfers.

Instead, we recommend installing and using a secure file transfer
mechanism, and we will introduce you to a few of them in this guide.
This article will show you how to install vsftpd (very secure FTP
daemon), the FTP client, and will also walk you through some useful
administration and security steps.

**Installation**

-   [Install vsftpd](#installvsftpd)
-   [Turn on vsftpd](#turnonvsftpd)

**Configuration**

-   [Set vsftp service to start on reboot](#setvsftp)
-   [Disable anonymous users](#disableanonymous)
-   [Restricting user access](#restrictinguser)

**Access your server through FTP**

-   [Using a browser](#usingabrowser)
-   [Using an FTP client](#usingandFTPclient)
-   [Using the command line](#usingthecommandline)

Installation
------------

### Install vsftpd

Using the group install available in the YUM package manager makes this
step very easy. Use the following command to install everything you will
need:

    sudo yum install vsftpd

### Turn on vsftpd

Using the service command, this is how you startup vsftpd:

    sudo service vsftpd start

Wow, that was quick! We have a working install of vsftpd already on the
server. Lets go ahead and make a couple of configuration changes for
security and convenience.



Configuration
-------------

### Set vsftp service to start on reboot

You can use the chkconfig tool to view which services will start
automatically when the server boots, and on which run level they'll
start with. To get vsftpd to start on the most common run levels (3,4,5)
you can use:

``` {.p1}
sudo chkconfig vsftpd on
```

Verify the "on" status by checking the complete chkconfig output:

``` {.p1}
chkconfig --list
```

or for specific output

``` {.p1}
chkconfig --list vsftpd
```

The standard vsftpd configuration file and all subsequent files for
CentOS will reside in the directory /etc/vsftpd/ the most important file
being vsftpd.conf. We need to make two changes to this file for security
and convenience:

Open /etc/vsftpd/vsftpd.conf in your favorite text editor.

### Disable anonymous users

It is generally advised to disable anonymous FTP, unless you have a
specific requirement to use it.
Change:

``` {.p1}
# Allow anonymous FTP? (Beware - allowed by default if you comment this out).
anonymous_enable=YES
```

to read:

``` {.p1}
# Allow anonymous FTP? (Beware - allowed by default if you comment this out).
anonymous_enable=NO
```

### Restriciting user access

Now configure vsftpd to be able to chroot(commonly referred to as
jailing or jail) users to their home directories for security and
privacy:
Change:

``` {.p1}
# You may specify an explicit list of local users to chroot() to their home
# directory. If chroot_local_user is YES, then this list becomes a list of
# users to NOT chroot().
chroot_list_enable=YES
# (default follows)
chroot_list_file=/etc/vsftpd/chroot_list
```

to read:

``` {.p1}
# You may specify an explicit list of local users to chroot() to their home
# directory. If chroot_local_user is YES, then this list becomes a list of
# users to NOT chroot().
chroot_list_enable=NO
# (default follows)
chroot_list_file=/etc/vsftpd/chroot_list
```

Finally we need to make sure that users are jailed in their home
directory. At the bottom of the file add the following:

    chroot_local_user=YES

Create the chroot\_list file so you do not get an error when restarting:

``` {.p1}
sudo touch /etc/vsftpd/chroot_list
```

### Configure Firewall

Open ports in your firewall by running the following

``` {.p1}
sudo iptables -I INPUT 4 -m tcp -p tcp -m conntrack --ctstate NEW --dport 21 -j ACCEPT
```

Save your configuration

``` {.p1}
sudo service iptables save
```

Open the `/etc/sysconfig/iptables-config` file in your favorite editor

Verify that the "IPTABLES\_MODULES" contains "ip\_conntrack\_ftp" or
"nf\_conntrack\_ftp". Should look similar to the following:

Centos 5 (ip\_conntrack\_ftp):

``` {.p1}
IPTABLES_MODULES="ip_conntrack_ftp"
```

Centos 6 (nf\_conntrack\_ftp):

``` {.p1}
IPTABLES_MODULES="nf_conntrack_ftp"
```

Save the iptables-config file and restart iptables

    sudo service iptables restart


Access your server through FTP
------------------------------

### Using a browser

Simply input the name of your FTP site into a browser address bar as
shown here, and supply the login credentials when prompted:

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/ftp.png" width="538" height="73" />

### Using an FTP client

There are many low-cost or free FTP applications, such as
[CyberDuck](https://cyberduck.io/?l=en) and
[Fireuploader](http://www.fireuploader.com/), that are available for
download.

### Using the command line

Here is the syntax for opening an FTP session from the command line:

    ftp example.com

To close the FTP session, simply type *exit* in the session window.



### Next section

[CentOS - Configuring a user in
vsftpd](/how-to/rackspace-cloud-essentials-centos-configuring-a-user-in-vsftpd)

