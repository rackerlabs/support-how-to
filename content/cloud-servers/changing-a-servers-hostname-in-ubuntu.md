---
permalink: changing-a-servers-hostname-in-ubuntu/
audit_date:
title: 'Changing a servers hostname in Ubuntu'
type: article
created_date: '2020-05-26'
created_by: Matthew Brown
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

In this article, we will explain how to change the hostname on an Ubuntu server.


## Changing the hostname  

### Editing /etc/hostname

The most common way to change the hostname on is to edit the `/etc/hostname` file. In that file you will see the current hostname of the server. Change that to whatever hostname you would like. Once the hostname is changed, save any changes made to the file and reboot the machine.

### hostnamectl

A quicker way to change the hostname is to use the `hostnamectl` command. Keep in mind that this can only be done on systemd based servers (such as Ubuntu 16.04 and above). In order to change the hostname using this command, you will use the flag `set-hostname` like so:

```
root@ubuntu-xenial:~# hostnamectl set-hostname test
root@ubuntu-xenial:~# hostname
test
root@ubuntu-xenial:~# ^C
```

Now whenever you log out and log back in, you will see the new hostname:

```
root@ubuntu-xenial:~# logout
$ssh server@host.com
user@test:~$ sudo -i
root@test:~# 
```
