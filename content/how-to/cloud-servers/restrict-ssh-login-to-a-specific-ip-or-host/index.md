---
permalink: restrict-ssh-login-to-a-specific-ip-or-host/
audit_date:
title: 'Restrict ssh login to a specific ip or host'
type: article
created_date: '2021-02-12'
created_by: Pablo Moreno
last_modified_date: 'yyyy-mm-dd'
last_modified_by: First Last
product: Cloud Servers
product_url: cloud-servers
---


Restrict SSH login to a specific ip or host.


This article describes how to restrict SSH login to your server coming from all but a single IP address or hostname.

For achieving this we will use tcpwrappers. TCP wrappers provide basic traffic filtering of incoming network traffic. Although more complex than on the surface, tcpwrappers essentially boils down to two files: ***/etc/hosts.allow and /etc/hosts.deny*** 

If these files do not yet exist, you can safely create them as empty files: 

**sudo touch /etc/hosts.{allow,deny}**

1. By default, deny all hosts. For that we need to add an entry to */etc/hosts.deny* file using the text editor.

**# vi /etc/hosts.deny**

and add the following line to deny all incoming SSH connections to the server

**sshd: ALL**

Save and close the file

That’s it. This will disallow all ssh access to the host

2. Now, we will allow the IP who should be able to login to SSH. For that we need to add an entry to */etc/hosts.allow* file, so we go ahead and open it again with the text editor.

**# vi /etc/hosts.allow**

And add the following line to allow the IP to your public SSH. For example to allow network 172.168.0.21

**sshd: 172.168.0.21**

Save and close the file

The tcpwrappers files accept a comma-separated list of entries, so you can append addresses to the first entry above. 

**sshd: 172.168.0.21, 10.83.33.77, 10.63.152.9, 10.12.100.11, 10.82.192.28**

Tcpwrappers also accept partial IP addresses as subnets, so you could allow the entire 172.168.0.0/24 as 

**sshd: 172.168.0.**

Or like so:

**sshd : localhost**
**sshd : 192.168.0.**
**sshd : 99.151.250.7** 

You can allow or deny based on ip address, subnet, or hostname. List rules in order of most to least specific.

One thing to keep in mind is that the Linux system will first look at hosts.allow (from top to bottom) followed by hosts.deny (from top to bottom). So an SSH connection attempt from an IP address in hosts.allow will be allowed through, even though hosts.deny clearly blocks all.

At this point, any client listed in hosts.allow will be allowed through (via SSH) and any client not listed will be denied. There's no need to restart the SSH daemon to make this work.
