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

This tutorial will walk you through the process of installing the
[iRedMail](https://code.google.com/p/iredmail/ "https://code.google.com/p/iredmail/")
bundled mail server to successfully send and receive e-mail.

This tutorial assumes that:

-   You've followed the Ubuntu 20.10 setup guide.
-   You're running on a new server with no other software installed.
-   You're running the commands as a normal user with sudo privileges.
-   The current version of iRedMail at the time of writing is 1.3.1.

**Read this before continuing:**

Mail servers are complex pieces of software and can be difficult to setup and maintain. An improperly configured mail server could cause havoc, if spammers send spam through your server. Before attempting to run a mail server, have a good understanding of DNS (SPF/TXT/MX records), domain keys, sender policy framework, and how mail servers/mail flow works. 


### Reverse DNS

Set up your reverse DNS before installing the mail server. Otherwise, servers will think you are spamming or sending falsified email and you will find it hard to send or receive e-mails across the Internet. Setting up reverse DNS through our Control Panel is easy. Here, you can learn [how to setup a reverse DNS record](/support/how-to/create-a-reverse-dns-record).Keep in mind that DNS changes may take up to 24 hours to propagate across the Internet.

### Perl locale fix

Our servers ship with no locale information so they are world-friendly.
To install the locale information type:

     sudo aptitude install language-pack-en-base

### Aptitude update

Next, we will make sure that our server is up to date software-wise.
To do this, run an Aptitude update:

    sudo aptitude update
    sudo aptitude upgrade

### Set the host name

Finally, you need to set up the host name of your mail server. View your current host name by typing:

    hostname --fqdn
    kelly.myServer

This might work for most applications but for a mail server this
just won't do! Set your mail server's host name to match the
**F**ully **Q**ualified **D**omain **N**ame. A Fully Qualified Domain
Name, or FQDN, looks like this: *www.google.com*. For most mail servers
it will be something like *mail.yourdomain.com*.

To change your host name we will need to modify the */etc/hostname* file
on your server. This is the file that stores the host name information.

     sudo nano /etc/hostname

When the *nano* editor opens you'll see the default host name listed.
Delete the line and type in your host name. Most mail servers follow this format *mail.yourdomain.com*. Be sure to write down your host name to as we will need it later on.

Once you have modified the host name simply press **CTRL-X** followed by
**Y** and **Enter** to save.

### Modify your host file

Before you begin the installation, modify the */etc/hosts* file by typing the following:

     sudo nano /etc/hosts

The nano editor will open with your hosts file.

Delete the second 127.0.0.1 line with your old host name. This leaves you with a single 127.0.0.1 line. Move over to the *localhost* portion of that line and add your FQDN (mail.mydomain.com, for instance) followed by your subdomain (mail, in our example). Your line should look like this:

    127.0.0.1  mail.mydomain.com mail localhost localhost.localdomain

To save the file, press **CTRL-X** followed by **Y** and **Enter**.

#### Reboot the server

To apply our host name changes, reboot the server.

     sudo reboot

Once your server has rebooted, log back in.

### Enable Aptitude Sources

To enable the additional Aptitude sources so iRedMail can find the
software it needs to function. To do this, modify the */etc/apt/sources.list* file. by typing the following:

     sudo nano /etc/apt/sources.list

Go to the bottom of the file and add the following lines:

    deb https://mirrors.163.com/ubuntu jaunty main universe
    deb https://mirrors.163.com/ubuntu jaunty-updates main universe

To save the file, press **CTRL-X** followed by **Y** and **Enter**

Test your source list changes by typing:

     sudo aptitude update

### Install prerequisite packages

To install the prerequisite packages, the following software package needs to be installed:

-   acl - File system permission control

<!-- -->

     sudo aptitude install acl

### Enable ACL

You need to enable ACL access control on the file system. 
**Note** 
**Making improper changes to this file could destroy your file system**

Open up the */etc/fstab* file and modify the *mount options* to mount the main file system partition.

     sudo nano /etc/fstab

Look for a line that begins with either */dev/sda1* or */dex/xvda1* and
put a **\#** comment mark in front of it.

If that line starts with */dev/sda1* go to the bottom of the file and
type or copy in the following line:

    /dev/sda1    /    ext3    errors=remount-ro,noatime,acl     0     1

If the line starts with */dev/xvda1* go to the bottom of the file and
type or copy in the following line instead:

    /dev/xvda1    /    ext3    errors=remount-ro,noatime,acl     0     1

Save the file with CTRL-X, then Y and Enter.

### Remount the file system

Once you have made the changes to the /etc/fstab file, reload them.

     sudo mount -o remount,rw,acl /

You are ready to install iRedMail!

### Switch to Root User

iRedMail will not install with *sudo* privileges so you must switch to
the *root* user by typing:

     sudo su -

iRedmail presents you with a *root@* prompt now.

### Download iRedMail

To install iRedMail, you need to download the installation package
from their website. Please point your web browser to
<https://code.google.com/p/iredmail/downloads/list> and download the
latest version. At the time of writing the current version is *0.7.4*.
For the purposes of our installation we will be using *wget* to download
the installation package. Note that we are downloading this to the home
directory of the current user.

     cd ~
     wget https://iredmail.googlecode.com/files/iRedMail-0.7.4.tar.bz2

### Uncompress iRedMail

You'll notice that iRedMail comes packaged as a TAR file with further
BZ2 (BZip2) compression. To unpack this, type the following:

     tar xjf iRedMail-0.6.0.tar.bz2

This creates a directory called *iRedMail-0.6.0*.

### Download installation-related packages

Run the following lines of code to start installation:

     cd iRedMail-0.6.0/pkgs/   (Note that the directory name may differ between versions)
     bash get_all.sh

This downloads all of the packages necessary to install. To continue, refresh the repository list:

### Start the iRedMail installer

To install, type the following:

     cd ~/iRedMail-0.6.0     (Note that the directory name may differ between versions)
     bash iRedMail.sh

1.  On the welcome screen, click **Yes** to continue.
2.  Type in the home directory location for the
    *vmail* user.

    The default value, /home/vmail, will be listed -- this is okay.
    Simply press **Next** for the default option.

3.  Provive the backend you would like to use: *MySQL*
    or *OpenLDAP*.

    For our example, we will use MySQL as the backend, so highlight MySQL
    and press the space-bar to select, then click **Next** to continue.

4.  Enter your MySQL password and click **Next**.

5.  Enter your *vmail* user password. This will be a system user that
    holds all of your mail. Type it and click **Next**.

6.  You will be asked to enter your first virtual domain.

    You will be hosting mail for this domain. Type in your
    domain name (such as *mydomain.com*) and click **Next**.

7.  Enter the administrator name of your virtual domain.

    Use the default value of *postmaster* since it is an industry standard. This address will be *postmaster@mydomain.com* when you complete the installation. Click **Next**.

8.  Set a password for the above *postmaster* e-mail address.
    Click **Next** after you have entered it.

9.  Add the first user for your domain.

    This will be your first e-mail account such as *john.doe*. The full
    e-mail address would be *john.doe@mydomain.com*. Enter the user name
    here and click **Next**.

10. Set a password for the added user.

    The full e-mail address appears at the top of the window. Type
    in the password and click **Next**.

11. Set up your SPF (Sender Policy Framework) and DKIM (DomainKeys Identified Mail) preferences.

    **SPF is highly recommended, you should only install DKIM if you are
    an experienced user.** Uncheck DKIM if you are unfamiliar with it. Keep in mind that these will require additional DNS entries to be made. If you would like to use these simply click **Next**. *We will walk you through setting up the SPF and DKIM records later.*

12. Install the provided MySQL administrative tools to leverage backend potential. The tools include *phpMyAdmin*, *PostfixAdmin* and *AWstats*. You can also select which WebMail client to install. To choose the default options (Roundcubemail, phpMyAdmin, PostfixAdmin and Awstats), click **Next**.

13. Select a default language for WebMail and click **Next**.

14. Set and e-mail address as the PostfixAdmin administrative e-mail.

    You can use the default *postmaster@mydomain.com* e-mail or use a
    different address. Click **Next**.

15. Set an e-mail address to use for the *root* user.

    This is where all the system and the root user e-mail will be sent. Type in your e-mail address and click **Next**<span>. It is advised to use an e-mail address *NOT* hosted on your mail server.</span>

16. Type in **Y** and press **Enter** to continue with the installation.

17. Choose whether you want to use the default iptables firewall configuration at the end of the installation.

    If you have a brand new server, press **Y** and then
    **Enter**. *Do not do this if you have previously made modifications
    to your iptables configuration.*

18. You will then be prompted if you would like to restart iptables.

    For now press **N** and press **Enter**.

19. You will be asked if you would like to start Postfix now.

    Press **N** and press **Enter**.

You have finished the installation, you should be returned to a shell prompt.

### Delete setup files

Before you can use this server in a production environment you must lock it
down safely and remove the setup files. You can accomplished this with one *rm* statement.

     rm -f ~/iRedMail-0.6.0/config

#### Reboot the server

Go ahead and reboot the server to reload everything and cleanly start
Postfix.

     reboot

Once the server comes back up go ahead and log back in as a normal user.

### Setup SPF Record

Now, you will need to go setup an SPF record. Go to <https://old.openspf.org/wizard.html> to determine what your SPF record should be. Once you have done this, submit a ticket and we will process your SPF record. Note that your mail may still function without this but you may receive frequent mail rejections.

### OPTIONAL: Create DKIM (DomainKey)

To create a the Domain Key entry type the following:

     sudo apt-get install amavisd-new

     sudo /usr/sbin/amavisd-new showkeys

You will see an output like the following:

    [user@mail ~]$ sudo /usr/sbin/amavisd showkeys
    ; key#1, domain mydomain.com, /var/lib/dkim/mydomain.com.pem
    dkim._domainkey.mydomain.com.     3600 TXT (
      "v=DKIM1; p="
      "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCuv5EpKWzSRGm8Gtks8uDEpllQ"
      "Ug50USM6LjIEfx77+C9c3GpuxtTdfYMUlA7nqlolJ0GCx+PPrbSOCKZO1UeHAG2M"

      "/KYC9Kw8ByqP80Ni+Xx+M2fNSQCn4c+fmsX6AwLHZfshTmR6lGNTL/VMi84GgJtA"
      "vfufWEShr/j8f4udcwIDAQAB")

If you are hosting your DNS with Cloud Servers please submit a ticket
and request that the domain key is added. We will create a TXT record
for your domain with the above key. If you are hosting your DNS
elsewhere you will need to create a TXT record for
*dkim.\_domainkey.mydomain.com* and use the enclosed text (without the
quotes) as the content.

### OPTIONAL: Test DKIM

Once you have created the TXT record, test it on your server by typing the following:

     sudo /usr/sbin/amavisd-new testkeys

If successful, you should see something like:

    TESTING#1: dkim._domainkey.mydomain.com        => pass

Check your key again, if you see a 'fail' message. This also results from DNS entries that have not propagated yet.

#### Reboot the server

Reboot your server.

     sudo reboot

Proceed as indicated below, once the server has come back online.

### Access WebMail

Point your web-browser to <https://mail.mydomain.com/mail/> and this
should bring up the RoundCubeMail WebMail application. Type in your
login name and password and click Login. Send yourself an e-mail from
another e-mail account to verify the status. You can also send an
e-mail to someone on the Internet to test outbound e-mail.

### Information about your install

You can find information about your installation here:
**\~/iRedMail-0.6.0/iRedMail.tips**

### Common links

The following links are valid for your iRedMail installation. Please
replace *mail.mydomain.com* with your FQDN.

-   postfix.admin - <https://mail.mydomain.com/postfixadmin/>
-   RoundCubeMail WebMail - <https://mail.mydomain.com/mail/>
-   phpMyAdmin - <https://mail.mydomain.com/phpmyadmin/>
-   AWstats - <https://mail.mydomain.com/awstats/awstats.pl>

### Troubleshooting: View mail logs

Take a look at the logs, if you are having troubles with your mail server. To view the logs for iRedMail type:

     sudo tail -F /var/log/mail.log

This displays the last output of the log and shows the entries as added in real-time. Your output may look like the output below:

    Jul  8 23:25:53 mail postfix/smtp[4530]: 2CBEFD49DD: to=<john@doe.com>, relay=127.0.0.1[127.0.0.1]:10024,
        delay=2251, delays=2251/0.04/0/0.44, dsn=2.0.0, status=sent (250 2.0.0 Ok, id=04262-04, from
        MTA([127.0.0.1]:10025): 250 2.0.0 Ok: queued as 87F93D49DA)
    Jul  8 23:25:53 mail postfix/qmgr[4298]: 2CBEFD49DD: removed
    Jul  8 23:25:53 mail postfix/pipe[4536]: 87F93D49DA: to=<john@doe.com>, relay=dovecot, delay=0.06,
        delays=0.04/0.01/0/0.02, dsn=2.0.0, status=sent (delivered via dovecot service)
    Jul  8 23:25:53 mail postfix/qmgr[4298]: 87F93D49DA: removed
