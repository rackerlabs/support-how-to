---
permalink: viewing-system-users-in-linux
audit_date: '2020-06-09'
title: 'Viewing system users in Linux'
type: article
created_date: '2020-06-09'
created_by: Evan Benavides
last_modified_date: '2020-06-09'
last_modified_by: William Loy
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to list the users on a Linux&reg; server.

### Display users and user details on Linux

Display a list of the users and user details on a Linux server by using one of the following commands: 

  `getent passwd` or `less /etc/passwd`

These commands display the login name, optional encrypted password, numerical user ID, numerical group ID, user name or comment field, user home directory, and optional user command interpreter. 
The following is an example of the output:
 
  
         root:x:0:0:root:/root:/bin/bash
         bin:x:1:1:bin:/bin:/sbin/nologin
         daemon:x:2:2:daemon:/sbin:/sbin/nologin
         adm:x:3:4:adm:/var/adm:/sbin/nologin
         lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
         sync:x:5:0:sync:/sbin:/bin/sync
         shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
         halt:x:7:0:halt:/sbin:/sbin/halt
         mail:x:8:12:mail:/var/spool/mail:/sbin/nologin
         operator:x:11:0:operator:/root:/sbin/nologin
         games:x:12:100:games:/usr/games:/sbin/nologin
         ftp:x:14:50:FTP User:/var/ftp:/sbin/nologin
         nobody:x:99:99:Nobody:/:/sbin/nologin
         systemd-network:x:192:192:systemd Network Management:/:/sbin/nologin
         dbus:x:81:81:System message bus:/:/sbin/nologin
         polkitd:x:999:998:User for polkitd:/:/sbin/nologin
         libstoragemgmt:x:998:997:daemon account for libstoragemgmt:/var/run/lsm:/sbin/nologin
         abrt:x:173:173::/etc/abrt:/sbin/nologin
         rpc:x:32:32:Rpcbind Daemon:/var/lib/rpcbind:/sbin/nologin
         gluster:x:997:995:GlusterFS daemons:/run/gluster:/sbin/nologin
         sshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin
         postfix:x:89:89::/var/spool/postfix:/sbin/nologin
         chrony:x:996:993::/var/lib/chrony:/sbin/nologin
         ntp:x:38:38::/etc/ntp:/sbin/nologin
         tcpdump:x:72:72::/:/sbin/nologin
         centos:x:1000:1000:Cloud User:/home/centos:/bin/bash
         rack:x:1001:1001::/home/rack:/bin/bash
         testuser:x:1002:1002::/home/testuser:/bin/bash
         apache:x:48:48:Apache:/usr/share/httpd:/sbin/nologin

You can close the output of these commands by entering the `q` key.

See the users currently logged in by using the following command: 

  `w`

This command output looks like the following example:

         15:23:01 up 77 days,  6:51,  1 user,  load average: 0.00, 0.01, 0.05
         USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
         rack     pts/0    dfw.secure-acces 14:54    5.00s  0.26s  0.33s sshd: rack [priv]
