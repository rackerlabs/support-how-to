---
permalink: checking-port-use-in-linux/
audit_date:
title: Linux - Checking Port Use 
type: article
created_date: '2020-06-12'
created_by: John Garcia
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

This article explains several commands that can be used to verify listening ports and port usage on a Linux system.  

# **lsof Command**

The **lsof** (List Open Files) command will provide a list of files that are currently open along with the processes which opened them.  When combined with the **grep** command, the **lsof** command can be used to conduct advanced searches and listings.

## lsof [options]

**Example 1:**  lsof -i -P -n

```
[root@server-01 ~]# lsof -i -P -n
COMMAND   PID   USER   FD   TYPE  DEVICE SIZE/OFF NODE NAME
chronyd   799 chrony    5u  IPv4   19739      0t0  UDP 127.0.0.1:323
chronyd   799 chrony    6u  IPv6   19740      0t0  UDP [::1]:323
sshd     1252   root    5u  IPv4   26992      0t0  TCP *:22 (LISTEN)
sshd     1252   root    7u  IPv6   26994      0t0  TCP *:22 (LISTEN)
```
**Note:** You can see looking at the last line of that example that Application "sshd" is using TCP port "22" to (LISTEN).

**Options used in previous example:** 
```
-i Display Files opened by Network (Internet) Connections.
-n Prevent Networks from being changed to Host names.
-P Prevent Port Numbers from being changed to Port Names for Network Files.
```

**Example 2:** lsof -i -P -n | grep (Criteria)
You can use both the **lsof** command with the **grep** command to refine our previous search to include only lines with the search criteria "LISTEN."
```
[root@server-01 ~]# lsof -i -P -n | grep LISTEN
sshd     1252   root    5u  IPv4   26992      0t0  TCP *:22 (LISTEN)
sshd     1252   root    7u  IPv6   26994      0t0  TCP *:22 (LISTEN)
```

**Example 3:** lsof -i :(Port Number)
Lastly, you can specify a specific port to search for processes. 
```
[root@server-01 ~]# lsof -i :22
COMMAND   PID USER   FD   TYPE  DEVICE SIZE/OFF NODE NAME
sshd     1252 root    5u  IPv4   26992      0t0  TCP *:ssh (LISTEN)
sshd     1252 root    7u  IPv6   26994      0t0  TCP *:ssh (LISTEN)
```

# **netstat Command**
The **netstat** (Network Statistics) command is used to display Network (Internet) Connections, Port Usage, Protocols, and additional information.

## netstat [options]

**Example 1:**  netstat -tulpn
```
[root@server-01 ~]# netstat -tulpn
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1252/sshd
tcp6       0      0 :::22                   :::*                    LISTEN      1252/sshd
udp        0      0 127.0.0.1:323           0.0.0.0:*                           799/chronyd
udp6       0      0 ::1:323                 :::*                                799/chronyd
```

**Options used in previous example:** 

```
-l Show listening sockets.
-n Prevent resolving service names. (Shows numeric hosts)
-p Show Process Name list that have open sockets.
-t Show TCP sockets.
-u Show UPD sockets.
```
**Example 2:**  netstat -tulpn | grep (Criteria)
Using the **netstat** command with the **grep** command to refine our previous search to include only lines with the search criteria "LISTEN."
```
[root@server-01 ~]# netstat -tulpn | grep LISTEN
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1252/sshd
tcp6       0      0 :::22                   :::*                    LISTEN      1252/sshd
```

# **ss Command**
The **ss** (Socket Statistics) command can be used to display Network (Internet) Socket related information.
## ss [options]
You can also use the **ss** command on newer systems instead as it has superseded the **netstat** command.

**Example:** ss -tulwn

```
[root@server-01 ~]# ss -tulwn
Netid  State     Recv-Q    Send-Q        Local Address:Port       Peer Address:Port
icmp6  UNCONN    0         0                         *:58                    *:*
udp    UNCONN    0         0                 127.0.0.1:323             0.0.0.0:*
udp    UNCONN    0         0                     [::1]:323                [::]:*
tcp    LISTEN    0         128                 0.0.0.0:22              0.0.0.0:*
tcp    LISTEN    0         128                    [::]:22                 [::]:*
```
**Options used in previous example:** 

```
-l Show listening sockets.
-n Prevent resolving service names. (Shows numeric hosts)
-t Show TCP sockets.
-u Show UPD sockets.
-w Show RAW sockets.
```

# **nmap Command**
The **nmap** (Network Mapper) command can be used for port scanning and host discovery.
## nmap [options]
**Example:**  nmap -sT -O localhost
```
[root@server-01 ~]# nmap -sT -O localhost
Starting Nmap 7.70 ( https://nmap.org ) at 2020-06-10 22:49 UTC
Nmap scan report for localhost (127.0.0.1)
Host is up (0.00036s latency).
Other addresses for localhost (not scanned): ::1
Not shown: 999 closed ports
PORT   STATE SERVICE
22/tcp open  ssh
```
**Options used in previous example:** 

```
-sT TCP Connect Scan
-O Operating System Detection
```
