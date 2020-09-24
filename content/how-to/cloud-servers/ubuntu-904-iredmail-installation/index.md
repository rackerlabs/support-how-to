---
permalink: ubuntu-904-iredmail-installation/
audit_date: '2020-09-23'
title: Install iRedMail on Ubuntu 9.04
type: article
created_date: '2011-03-15'
created_by: Rackspace Support
last_modified_date: '2020-09-23'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

This tutorial describes how to install the
[iRedMail](https://code.google.com/p/iredmail/ "https://code.google.com/p/iredmail/")
bundled mail server so you can send and receive emails successfully.

### Prerequisites

This tutorial assumes that you have done the following steps:

-   Followed the Ubuntu 20.10 setup guide.
-   Created a new server with no other software installed.
-   Installed the current version of iRedMail, 1.3.1 or later.

You should run the commands in this article as a non-root user with sudo privileges.

**Read this before continuing:**

Mail servers are complex pieces of software and can be difficult to set up and maintain. An improperly
configured mail server could cause havoc if spammers send spam through your server. Before you attempt
to run a mail server, have a good understanding of DNS (SPF/TXT/MX records), domain keys, sender policy
framework, and how mail servers and mail flow works. 


### Reverse DNS

Set up your reverse DNS before installing the mail server. Otherwise, servers assume you are spamming or
sending falsified emails, which makes it hard to send or receive emails across the Internet. Setting up
reverse DNS through the Rackspace Control Panel is easy. Learn [how to setup a reverse DNS record](/support/how-to/create-a-reverse-dns-record). Keep in mind that DNS changes might take up to 24 hours to propagate across the Internet.

### Perl locale fix

Our servers ship with no locale information, so they are world-friendly.
To install the locale information, run the following command:

     $ sudo aptitude install language-pack-en-base

### Aptitude update

Make sure that the server software is up-to-date, by running the following Aptitude update commands:

    $ sudo aptitude update
    $ sudo aptitude upgrade

### Set the hostname

Set up your mail server's hostname. View your current hostname by running the following command:

    $ hostname --fqdn
    kelly.myServer

This name might work for most applications but not for a mail server. Set your mail server's
hostname to match the Fully Qualified Domain Name (FQDN). An example of an FQDN is: *www.google.com*.
For most mail servers, it might be *mail.yourdomain.com*.

To change your hostname, you should modify your server's **/etc/hostname** file, which
stores the hostname information. Run the following command to open this file for editing:

     $ sudo nano /etc/hostname

When the `nano` editor opens, it lists the default hostname. Delete that line and type your
hostname. Most mail servers follow the *mail.yourdomain.com* format. Be sure to write down your
hostname for later reference.

After you modify the hostname, press **Ctrl-X** to exit, type **y** to confirm your changes, and
then press **Enter** to save the indicated file.

### Modify your host file

Before you begin the installation, modify the */etc/hosts* file by typing the following command:

     $ sudo nano /etc/hosts

The `nano` editor opens your hosts file.

Delete the second **127.0.0.1** line with your old hostname. This action leaves a single **127.0.0.1**
line. In the *localhost* portion of that line, add your FQDN, such as *mail.mydomain.com*, followed
by your subdomain, **mail**. Your line should look similar to the following example:

    127.0.0.1  mail.mydomain.com mail localhost localhost.localdomain

To save the file, press **Ctrl-X** followed by **y** and **Enter**.

#### Reboot the server

To apply the hostname changes, reboot the server by running the following command:

     $ sudo reboot

After the server restarts, log back in.

### Enable Aptitude sources

To enable the additional Aptitude sources so `iRedMail` can find the software it needs
to function, modify the **/etc/apt/sources.list** file by running the following command:

     $ sudo nano /etc/apt/sources.list

Go to the bottom of the file and add the following lines:

    deb https://mirrors.163.com/ubuntu jaunty main universe
    deb https://mirrors.163.com/ubuntu jaunty-updates main universe

To save the file, press **Ctrl-X** followed by **Y** and **Enter**.

Test your source list changes by running the following command:

     sudo aptitude update

### Install prerequisite packages

To install the `acl` package, which is the file system permission control package, run the
following command:

     $ sudo aptitude install acl

### Enable ACL

You need to enable ACL access control on the file system. 

**Warning**: Making improper changes to this file could destroy your file system.

Run the followimg command to open the **/etc/fstab** file and modify the *mount options* to
mount the main file system partition:

     $ sudo nano /etc/fstab

Find the line that begins with either **/dev/sda1** or **/dex/xvda1**. Comment the line
out by putting a **\#** comment mark in front of it.

If that line starts with **/dev/sda1**, go to the bottom of the file and
type the following line:

    /dev/sda1    /    ext3    errors=remount-ro,noatime,acl     0     1

If the line starts with **/dev/xvda1**, go to the bottom of the file and
type the following line:

    /dev/xvda1    /    ext3    errors=remount-ro,noatime,acl     0     1

To save the file, press **Ctrl-X** followed by **Y** and **Enter**.

### Remount the file system

After you edit the **/etc/fstab** file, run the following command to reload it:

     $ sudo mount -o remount,rw,acl /

### Switch to the root user

Because you can't install `iRedMail` with sudo privileges, run the following command
to switch to the *root* user:

     $ sudo su -

The system presents you with a **root@** prompt now.

### Download iRedMail

To install `iRedMail`, download the installation package
from their website. Browse to
<https://code.google.com/p/iredmail/downloads/list> and download the
latest version to the home directory of the current user. For example,
run the following commands to get version **0.7.4**:

     $ cd ~
     $ wget https://iredmail.googlecode.com/files/iRedMail-0.7.4.tar.bz2

### Uncompress iRedMail

`iRedMail` comes packaged as a TAR archive file with further
BZ2 (BZip2) compression. To unpack this, enter the following commannd:

     $ tar xjf iRedMail-0.6.0.tar.bz2

This action creates a directory called **iRedMail-0.6.0**.

### Download installation-related packages

Run the following commands to start installation:

     $ cd iRedMail-0.6.0/pkgs/   (Note that the directory name may differ between versions)
     $ bash get_all.sh

This downloads all of the necessary packages. To continue, refresh the repository list:

### Start the iRedMail installer

To install, type the following commands:

     $ cd ~/iRedMail-0.6.0     (Note that the directory name may differ between versions)
     $ bash iRedMail.sh
     
Peform the following steps to configure `iRedMail`:

1.  On the **Welcome** screen, click **Yes** to continue.
2.  Type in the home directory location for the
    *vmail* user.

    The default value, **/home/vmail**, displays.
    Press **Next** to accept the default option.

3.  Provide the backend you want to use: either **MySQL**
    or **OpenLDAP**.

    This example uses MySQL as the backend, so highlight **MySQL**
    and press the space-bar to select. Click **Next** to continue.

4.  Enter your MySQL password and click **Next**.

5.  Enter your *vmail* user password. This user is the system user that
    holds all of your mail. Type the password and click **Next**.

6.  When prompted for your first virtual domain, enter your
    domain name (such as **mydomain.com**) and click **Next**.

7.  Enter the administrator name of your virtual domain. Use the default value
    of *postmaster* because it is an industry standard. This address will be
    *postmaster@mydomain.com* when you complete the installation. Click **Next**.

8.  Set a password for the *postmaster* e-mail address. Click **Next** after you have entered it.

9.  Add the first user for your domain. This is your first e-mail account, such
    as *john.doe*. The full e-mail address would be *john.doe@mydomain.com*. Enter the user name
    and click **Next**.

10. Set a password for the added user. The full e-mail address appears at the top of the window. Type
    in the password and click **Next**.

11. Set up your SPF (Sender Policy Framework) and DKIM (DomainKeys Identified Mail) preferences. If you
    want to use these, click **Next**.

    **Note**: Rackspace highly recommends SPF. You should only install DKIM if you are
    an experienced user. Uncheck DKIM if you are unfamiliar with it. These options require you to make
    additional DNS entries. *This article explains how to set up the SPF and DKIM records later.*

12. Install the provided MySQL administrative tools to leverage backend potential. The tools include 
    `phpMyAdmin`, `PostfixAdmin`, and `AWstats`. You can also select which WebMail client to install.
    To choose the default options (`Roundcubemail`, `phpMyAdmin`, `PostfixAdmin`, and `Awstats`), click **Next**.

13. Select a default language for WebMail and click **Next**.

14. Set an e-mail address as the `PostfixAdmin` administrative e-mail. You can use the default
    *postmaster@mydomain.com* e-mail or use a different address. Click **Next**.

15. Set an e-mail address to use for the *root* user. All the system and the root user e-mail will be sent
    to this address. Type in your e-mail address and click **Next**. You should use an e-mail address *NOT*
    hosted on your mail server.

16. Type **Y** and press **Enter** to continue with the installation.

17. Choose whether you want to use the default iptables firewall configuration at the end of the installation.
    If you have never modified your iptables configuration, press **Y** and **Enter**. Otherwise, press **N**
    and **Enter**.

18. When prompted to restart iptables, press **N** and **Enter**.

19. When prompted to start Postfix now, press **N** and press **Enter** to complete the installation and
    return to the shell prompt.

### Delete setup files

Before you can use this server in a production environment, you must lock it
down safely and remove the setup files. You can do this with the following *rm* statement:

     $ rm -f ~/iRedMail-0.6.0/config

#### Reboot the server

Reboot the server to reload everything and cleanly start `Postfix`.

     $ reboot

After the server restarts, log back in as a non-root user.

### Setup the SPF record

To set up an **SPF** record, go to <https://old.openspf.org/wizard.html> to determine what your **SPF**
record should be. After you have done this, submit a ticket so Rackspace can process your **SPF** record.
Your mail might still function without this, but you could get frequent mail rejections.

### Optional: Create DKIM (DomainKey)

To create a the Domain Key entry, run the following commands:

     $ sudo apt-get install amavisd-new

     $ sudo /usr/sbin/amavisd-new showkeys
     ; key#1, domain mydomain.com, /var/lib/dkim/mydomain.com.pem
     dkim._domainkey.mydomain.com.     3600 TXT (
      "v=DKIM1; p="
      "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCuv5EpKWzSRGm8Gtks8uDEpllQ"
      "Ug50USM6LjIEfx77+C9c3GpuxtTdfYMUlA7nqlolJ0GCx+PPrbSOCKZO1UeHAG2M"

      "/KYC9Kw8ByqP80Ni+Xx+M2fNSQCn4c+fmsX6AwLHZfshTmR6lGNTL/VMi84GgJtA"
      "vfufWEShr/j8f4udcwIDAQAB")

If you are hosting your DNS with Cloud Servers, submit a ticket
and ask Rackspace to add the domain key. We will create a **TXT** record
for your domain with the key you provide. If you are hosting your DNS
elsewhere, you need to create a **TXT** record for
**dkim.\_domainkey.mydomain.com** and use the enclosed text (without the
quotes) as the content.

### OPTIONAL: Test DKIM

After you create the **TXT** record, test it on your server by running the following command:

     $ sudo /usr/sbin/amavisd-new testkeys
     TESTING#1: dkim._domainkey.mydomain.com        => pass

If you see a *fail* message, recheck your key. The command might also fail if the DNS entries
have not propagated yet.

#### Reboot the server

Run the following command to reboot your server:

     $ sudo reboot

### Access WebMail

After teh server restarts, browse to <https://mail.mydomain.com/mail/> for
the RoundCubeMail WebMail application. Enter your
login name and password and click **Login**. Send yourself an e-mail from
another e-mail account to verify the status. You can also send an
e-mail to someone on the Internet to test outbound e-mail.

### Information about your installation

You can find information about your installation in **\~/iRedMail-0.6.0/iRedMail.tips**.

### Common links

The following links are valid for your `iRedMail` installation. Replace **mail.mydomain.com** with your FQDN.

-   **postfix.admin**: <https://mail.mydomain.com/postfixadmin/>
-   **RoundCubeMail WebMail**: <https://mail.mydomain.com/mail/>
-   **phpMyAdmin**: <https://mail.mydomain.com/phpmyadmin/>
-   **AWstats**: <https://mail.mydomain.com/awstats/awstats.pl>

### Troubleshooting: View mail logs

If you are having troubles with your mail server, review the logs. To view the logs for `iRedMail`,
run the following command:

     $ sudo tail -F /var/log/mail.log

This displays the last several lines of the log and shows the entries as added in real-time.
Your output might look similar to the following example:

    Jul  8 23:25:53 mail postfix/smtp[4530]: 2CBEFD49DD: to=<john@doe.com>, relay=127.0.0.1[127.0.0.1]:10024,
        delay=2251, delays=2251/0.04/0/0.44, dsn=2.0.0, status=sent (250 2.0.0 Ok, id=04262-04, from
        MTA([127.0.0.1]:10025): 250 2.0.0 Ok: queued as 87F93D49DA)
    Jul  8 23:25:53 mail postfix/qmgr[4298]: 2CBEFD49DD: removed
    Jul  8 23:25:53 mail postfix/pipe[4536]: 87F93D49DA: to=<john@doe.com>, relay=dovecot, delay=0.06,
        delays=0.04/0.01/0/0.02, dsn=2.0.0, status=sent (delivered via dovecot service)
    Jul  8 23:25:53 mail postfix/qmgr[4298]: 87F93D49DA: removed
