---
permalink: check-port-use-in-linux
audit_date: '2020-06-30'
title: Check port use in Linux
type: article
created_date: '2020-06-12'
created_by: John Garcia
last_modified_date: '2020-06-15'
last_modified_by: William Loy
product: Cloud Servers
product_url: cloud-servers
---

This article explains how to verify listening ports and port usage in a Linux&reg; system.

### Using the `lsof` command

The `lsof` (List Open Files) command produces a list of files that are currently open along with the processes that opened them. When combined with the `grep` command, the `lsof` command can conduct advanced searches and listings.


#### General `lsof` command

    `lsof -i -P -n`

        [root@server-01 ~]# lsof -i -P -n
        COMMAND   PID   USER   FD   TYPE  DEVICE SIZE/OFF NODE NAME
        chronyd   799 chrony    5u  IPv4   19739      0t0  UDP 127.0.0.1:323
        chronyd   799 chrony    6u  IPv6   19740      0t0  UDP [::1]:323
        sshd     1252   root    5u  IPv4   26992      0t0  TCP :22 (LISTEN)
        sshd     1252   root    7u  IPv6   26994      0t0  TCP :22 (LISTEN)

The last line of the preceding example shows that the app `sshd` is listening on TCP port 22.

The following list shows the options in the preceding command example:

-  `-i`: Display files opened by network (Internet) connections.
-  `-n`: Prevent networks from being changed to host names.
-  `-P`: Prevent port numbers from being changed to port names for network files.


#### Using `grep` with the `lsof` command

Use the `lsof` command with the `grep` command to refine a search to include only lines with the search criteria `LISTEN`.

    `lsof -i -P -n | grep (criteria)`

Example output:

        [root@server-01 ~]# lsof -i -P -n | grep LISTEN
        sshd     1252   root    5u  IPv4   26992      0t0  TCP :22 (LISTEN)
        sshd     1252   root    7u  IPv6   26994      0t0  TCP :22 (LISTEN)


#### Specify a port in an `lsof` search

Lastly, you can specify a specific port to search for processes.

    `lsof -i :(Port Number)`

        [root@server-01 ~]# lsof -i :22
        COMMAND   PID USER   FD   TYPE  DEVICE SIZE/OFF NODE NAME
        sshd     1252 root    5u  IPv4   26992      0t0  TCP :ssh (LISTEN)
        sshd     1252 root    7u  IPv6   26994      0t0  TCP :ssh (LISTEN)


### Using the `netstat` command

The `netstat` (Network Statistics) command displays network connections, port usage, protocols, and other information.

#### General `netstat` command

    `netstat -tulpn`

Example output:

        [root@server-01 ~]# netstat -tulpn
        Active Internet connections (only servers)
        Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
        tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1252/sshd
        tcp6       0      0 :::22                   :::*                    LISTEN      1252/sshd
        udp        0      0 127.0.0.1:323           0.0.0.0:*                           799/chronyd
        udp6       0      0 ::1:323                 :::*                                799/chronyd

The following list shows the options used in the preceding command example:

-  `-l`: Show listening sockets.
-  `-n`: Prevent resolving service names.
-  `-p`: Show process name list that have open sockets.
-  `-t`: Show TCP sockets.
- `-u`: Show UPD sockets.

#### Using `grep` with the `netstat` command

Use the `netstat` command with the `grep` command to refine a search to include only lines with the search criteria `LISTEN`.

    `netstat -tulpn | grep (Criteria)`


        [root@server-01 ~]# netstat -tulpn | grep LISTEN
        tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1252/sshd
        tcp6       0      0 :::22                   :::*                    LISTEN      1252/sshd


### Using the `ss` command

The `ss` (Socket Statistics) command displays network socket related information. You can also use the `ss` command on newer systems instead because it now supersedes the `netstat` command.

#### General `ss` command

    `ss -tulwn`

Example output:

        [root@server-01 ~]# ss -tulwn
        Netid  State     Recv-Q    Send-Q        Local Address:Port       Peer Address:Port
        icmp6  UNCONN    0         0                         *:58                    *:*
        udp    UNCONN    0         0                 127.0.0.1:323             0.0.0.0:*
        udp    UNCONN    0         0                     [::1]:323                [::]:*
        tcp    LISTEN    0         128                 0.0.0.0:22              0.0.0.0:*
        tcp    LISTEN    0         128                    [::]:22                 [::]:*

The following list shows the options used in the preceding command example:

-  `-l` Show listening sockets.
-  `-n` Prevent resolving service names.
-  `-t` Show TCP sockets.
-  `-u` Show UPD sockets.
-  `-w` Show RAW sockets.


### Using the `nmap` command

The `nmap` (Network Mapper) command performs port scanning and host discovery.

#### General `nmap` command

    `nmap -sT -O localhost`

        [root@server-01 ~]# nmap -sT -O localhost
        Starting Nmap 7.70 ( https://nmap.org ) at 2020-06-10 22:49 UTC
        Nmap scan report for localhost (127.0.0.1)
        Host is up (0.00036s latency).
        Other addresses for localhost (not scanned): ::1
        Not shown: 999 closed ports
        PORT   STATE SERVICE
        22/tcp open  ssh

The following list shows the options used in the preceding command example:

-  `-sT`: TCP Connect Scan
-  `-O`: Operating System Detection
