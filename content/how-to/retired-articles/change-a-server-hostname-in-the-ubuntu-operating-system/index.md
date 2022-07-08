---
permalink: change-a-server-hostname-in-the-ubuntu-operating-system
audit_date: '2020-05-28'
title: 'Change a server hostname in the Ubuntu operating system'
type: article
created_date: '2020-05-26'
created_by: Matthew Brown
last_modified_date: '2020-05-28'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to change the hostname on a server with the Ubuntu&reg; operating system by
editing **/etc/hostname** or using the `hostnamectl` command.

### Edit /etc/hostname

Commonly, users change a server hostname by editing the **/etc/hostname** file, which has the current
hostname of the server. Change that value in the file to the new hostname, save the file, and
reboot the server.

### Use `hostnamectl`

You can quickly change the hostname by using the `hostnamectl` command. Keep in mind that you do this only on
systemd-based servers (such as Ubuntu 16.04 and later). To change the hostname with this command, use the
flag `set-hostname` as shown in the following example:

    root@ubuntu-xenial:~# hostnamectl set-hostname test
    root@ubuntu-xenial:~# hostname
    test
    root@ubuntu-xenial:~# ^C

Now, when you log out and back in, you the new hostname displays:

    root@ubuntu-xenial:~# logout
    $ssh server@host.com
    user@test:~$ sudo -i
    root@test:~# 
