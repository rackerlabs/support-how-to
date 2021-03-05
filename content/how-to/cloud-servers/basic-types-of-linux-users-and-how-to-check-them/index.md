---
permalink: basic-types-of-linux-users-and-how-to-check-them/
title: Basic types of Linux Users, and How to Check Them
type: article
created_by: Coral Moore
created_date: 2021-03-04
last_modified_date: 
last_modified_by: 
audit_date:
product: Cloud Servers
product_url: cloud-servers
---

# Basic types of Linux Users, and how to check them

*For understanding what basic types of users there are, and how to check them*

## Checks you can make without even logging in:

When logging into your computer/server, you will *usually* do so through port 22.
If unfamiliar, please think of port 22 as the doorway, through which you log in.
Ports 80 and 443, are the doorways for web site traffic.
If these ports are closed, think of the doors as barred shut and not allowing that traffic in.

So if you can't log in, the first things to check are if port 22 is open, and accepting SSH connections:

Check what ports are open:
```sh
# nmap -F <IP>
```
Try to log in:
```sh
# ssh <user>@<IP>
```
Try to log in and give me more information:
```sh
# ssh -v <user>@<IP>
```


## Top Tips!

#### It's usually the password

Extremely often, the problem is the simplest one, the password!
If port 22 is open, and your computer/server is asking for a password when you SSH; please double check that you have and are correctly typing/pasting in the correct password.
Please remember that Linux is case sensitive.

#### If you don't know your password

Linux will not have it saved in a format which we can retrieve.
Please either log in with another user, or ask one of our techs to reset it for you.

#### If you are trying to log in as root

Please bear in mind that by default Linux disables direct root log ins.
This is for security, to stop hackers only needing to crack one password.
So unless this has been specifically changed, the usual protocol is to log in as another user, and then escalate to root if you need.


# Types of Users:

There are 2 basic types of users to choose from, **SFTP**, and **SSH**.

#### SFTP Users

Can easily use the command line or a program like Filezilla to securely upload files.
This is useful for developers who just need somewhere to upload their web site files.
An SFTP only user, can only SFTP. Not SSH.

#### SSH Users

Can securely connect to the command line of Linux.
This is usually done in a black screen, command line terminal like PuTTY or MobaXterm.
It's extremely useful, but only recommended for those comfortable with the Linux command line.
An SSH user can SFTP and SSH.

There are also ways of adding, or removing access for these users:

#### Jailed/chrooted SFTP Users

Can only access a single/specific set of directories and nothing else.
Setting this up is a bit of a lenghty process, so please ask one of our techs to assist you if you need it implemented.

#### sudo SSH Users

Can run admin level commands by prefacing them with 'sudo'.
The system will then log who made the request, and carry it out.


There are also persistent users which you should always find in Linux.
These are system users like bin, mail, games, nobody etc. which you can usually ignore.
And root which allows you to do anything you like on the system.


To make things simpler, here is a graph showing the basic Linux users you can have, scaled from least permissions, to all permissions:
![](https://one.rackspace.com/download/attachments/745606998/Users.png)


# Show Types of Users:

List all system, SFTP only, and SSH users:
```sh

# cat /etc/passwd

root:x:0:0:root:/root:/bin/bash
apache:x:48:48:Apache:/usr/share/httpd:/sbin/nologin
php-fpm:x:995:992:php-fpm:/var/lib/php/fpm:/sbin/nologin
mysql:x:27:27:MariaDB Server:/var/lib/mysql:/sbin/nologin
sher:x:1002:1002:example:/home/sher:/bin/bash
```
Each line is split into different sections with :
sher | 1002:1002 | example | /home/sher | /bin/bash
-|-|-|-|-
Username | User ID. If it's below 1000, it's *probably* a default system user | A comment if one was added | Home Directory. Like 'My Computer' in Windows/ Jail/Chroot = /home/chroot | SFTP only = /sbin/nologin SSH = /bin/bash



Search for a specific user:
```sh
# grep <user> /etc/passwd
```
Check if a user has sudo permissions:
```sh
# grep <user> /etc/sudoers
```
Check if a user is locked:
```sh
# passwd -S <user>
```
You'll see either Password set or locked


# More Advanced User Checks:
Check who is logged in right now:
```sh
# w
```
Check who logged in last:
```sh
# last
```
Check who were the last 10 users to log in:
```sh
# last | head -10
```
Check if a user tried to log in:
```sh
# grep <USER> /var/log/secure
```
Show a live feed of users trying to log in (Ctrl+C to cancel):
```sh
# tail -f /var/log/secure
```
Check when a passwd will expire (default is never):
```sh
# chage -l <USER>
```
Check what groups a user is a part of:
```sh
# groups <USER>
```
A script to check a user, if their password is locked, and if they have sudo permissions:
```sh
# UU='<USER>'; getent passwd | grep ${UU}; passwd -S ${UU}; grep ${UU} /etc/sudoers; groups ${UU}
