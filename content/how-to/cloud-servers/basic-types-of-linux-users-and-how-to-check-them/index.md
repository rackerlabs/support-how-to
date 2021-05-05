---
permalink: basic-types-of-linux-users-and-how-to-check-them
audit_date: '2021-03-04'
title: Basic types of Linux users and how to check them
type: article
created_by: Coral Moore
created_date: '2021-03-04'
last_modified_date: '2021-04-21'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

This article describes the basic types of users and how to check them.

### Types of users

There are two basic types of users to choose from: **SFTP** and **SSH**.

#### SFTP users

Secure File Transfer Protocol (SFTP) users can use the command line or a
program, such as Filezilla&reg;, to upload files securely. This tool is useful
for developers who need somewhere to upload their website files. An
SFTP-only user can connect through SFTP but not through SSH.

#### SSH users

SecureShell (SSH) users can securely connect to the Linux&reg; command line, in
 a black-screen, command-line terminal such as PuTTY&reg; or MobaXterm&reg;.
 It's a handy method but recommended for those comfortable with the Linux
 command line. An SSH user can connect through both SFTP and SSH.

### Modify user access

There are several ways to add or remove access for SSH and SFTP users.

#### Jailed or chrooted SFTP users

These users can only access a specific set of directories and nothing else.
Setting this up is a lengthy process, so ask one of our support techs to help
you if you need to implement it.

#### sudo SSH users

`sudo` users can run admin-level commands by prefacing them with `sudo`. The
system then logs who made the request and carries it out.

#### Other users

Persistent users are system users like `bin`, `mail`, `games`, `nobody`, and so
on, which you can usually ignore. The `root` user allows you to do anything you
like on the system.

To make matters simpler, here is a graph showing the basic Linux users you can
have, scaled from least permissions to all permissions:

{{<image src="Picture1.png" alt="" title="">}}

</br>

### Checks you can make without logging in

You usually log in to your computer or server through port 22. Think of port 22
as the doorway through which you log in. Continuing the analogy, ports 80 and
443 are the doorways for website traffic. If these ports are closed, think of
the doors as barred shut and not allowing that traffic to pass.

If you can't log in, run the following commands to check that port 22 is open
and accepting SSH connections:

Check what ports are open:

    # nmap -F <IP>

</br>

Try to log in:

    # ssh <user>@<IP>

</br>

Try to log in and get more information:

    # ssh -v <user>@<IP>

</br>

### Log in troubleshooting tips

If you can't log in, consider the following possibilities:

#### It's usually the password

Most often, the problem is the simplest one: the password. If port 22 is open
and your computer or server asks for a password when you SSH, confirm that you
are entering the correct password. Remember that Linux is case sensitive.

#### If you don't know your password

Linux does not save your password in a format that we can retrieve. Either log
in with another user or ask our support team to reset it for you.

#### If you are trying to log in as root

By default, Linux disables direct root logins for security (to stop hackers from
needing to crack only one password). So, unless you specifically enabled root,
the usual protocol is to log in as another user and then escalate to root as
needed.

### Helpful user commands

#### Show the types of users:

Run the following command to list all system, SFTP-only, and SSH users:

    # cat /etc/passwd

    root:*:0:0:root:/root:/bin/bash
    apache:*:48:48:Apache:/usr/share/httpd:/sbin/nologin
    php-fpm:*:995:992:php-fpm:/var/lib/php/fpm:/sbin/nologin
    mysql:*:27:27:MariaDB Server:/var/lib/mysql:/sbin/nologin
    sher:*:1002:1002:example:/home/sher:/bin/bash

</br>

Each line is split into different sections with:

{{< table "table  table-striped table-bordered" >}}
| sher | 1002:1002 | example | /home/sher | /bin/bash |
|---------|--------|--------|--------|--------|
| Username | User ID. If it's below 1000, it's *probably* a default system user | A comment if one was added | Home Directory. Jail/Chroot=/home/chroot | SFTP-only=/sbin/nologin SSH=/bin/bash |

</br>

#### Find a user

Run the following command to search for a specific user:

    # grep <user> /etc/passwd

</br>

#### Check permissions

Run the following command to check if a user has `sudo` permissions either by
the use of privilege `ALL=(ALL)` or `wheel` group:

    # (getent group; cat /etc/sudoers) | grep <user>

**Note**: No output means sudo permissions were not found.

</br>

#### Check password status

Run the following command to check if a user is locked:

    # passwd -S <user>

You see either `Password set` or `locked`.

#### More advanced user checks

Check current logged-in users:

    # w

</br>

Check who logged in last:

    # last

</br>

Check the last ten users to log in:

    # last | head -10

</br>

Check if a user tried to log in:

    # grep <user> /var/log/secure

</br>

Show a live feed of users trying to log in (Use `Ctrl+C` to cancel):

    # tail -f /var/log/secure

</br>

Check when a password is due to expire (default is never):

    # chage -l <user>

</br>

Check what groups a user is a part of:

    # groups <user>

</br>

Use the following script to check a user to see if their password is locked if
they have sudo permissions:

    # UU='<user>'; getent passwd | grep ${UU}; passwd -S ${UU}; grep ${UU} /etc/sudoers; groups ${UU}
