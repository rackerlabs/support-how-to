---
permalink: enable-ssh-remote-root-login-ubuntu-and-centos/
audit_date:
title: 'How to Enable SSH Remote Root Login in Ubuntu & CentOS'
type: article
created_date: '2020-05-26'
created_by: John Abercrombie
last_modified_date:
last_modified_by:
product:
product_url:
---

# How to Enable SSH Remote Root Login in Ubuntu & CentOS

Remote root login is typically discouraged for security best practices, but should you need to remotely SSH into your server as the root user, you are able to follow the same process for both Ubuntu and CentOS.

First, you want to open the following configuration file with your favorite command line text editor, such as nano or vim, as the root user:

> /etc/ssh/sshd_config

Once you have the configuration file open, you’ll want to locate the following line:

```sh
#PermitRootLogin no
```
Typically, this line is commented out, so you will want to remove the ‘#’ at the beginning on the line, and you’ll want to change the ‘no’ to ‘yes’ until your edit looks like this:

```sh
PermitRootLogin yes
```
Save and close your text editor. Once you’ve exited the text editor, you now want to test your syntax. This is to ensure that your ssh configuration will not break once you reload the the ssh service. You check the syntax with the following command:

```sh
sshd -t
```

You may need to run the command as a super user by adding ‘sudo’ to the beginning of the command. If you are editing the file as a root user, you will not need to use sudo, but if you are not, then you may receive a ‘Permission denied’ response. If so, use the following command:

```sh
sudo sshd -t
```

The server will not give a response if nothing is wrong with the syntax. You want this response:

```sh
[root@testserver ~]# sshd -t
[root@testserver ~]#
```

> Note: The hostname of your server will differ from the above example. Instead of ‘testserver,’ you will see your server’s hostname.

Once you have received a positive response on the syntax check for your ssh configuration file, you will want to reload the ssh service. It is better to reload, rather than restart, so you aren’t disconnected from the server. You reload the ssh service with the following command:

```sh
service sshd reload
```

In CentOS 7, and beyond, you could use systemctl instead of service if you’d like. If so, the command would be ‘systemctl reload sshd’. However, the service command works in both CentOS and Ubuntu, so there’s no need to make the process more complicated than it needs to be.

Once the reload concludes, you will want to check that sshd is running by using the command:

```sh
service sshd status
```

You’ll want a response telling you that the service is currently running. That’s it. You can now ssh into the server as the root user.

Note: Most attempts to hack into a server will try to do so as the root user. This is why Rackspace recommends disabling the ability to remote login as root. Instead, Rackspace recommends ssh’ing into the server as a user with sudo privileges, then elevating to the root user once you are connected.
