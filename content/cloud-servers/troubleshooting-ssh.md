---
permalink: troubleshooting-ssh/
audit_date:
title: 'Troubleshooting SSH'
type: article
created_date: '2020-04-06'
created_by: Matthew Brown
last_modified_date: 
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

This article will walk you through how to troubleshoot ssh on a Linux server.

## Differnt Types of Errors

If you are not able to ssh into into a server, you will want to pay attention to the errors (or lack of) that you receive. Below are some of the following

### Access denied or Authentication refused

This error is generated whenever the credentials you use to login via ssh are incorrect. If you are getting this error you can check the following:

- Make sure you have typed the username and password correctly
- If you are using an ssh key pair, make sure that you have the private key installed on your local machine

### Port 22: Connection refused

This error can be due to a number of reasons such as:

- SSH not being installed or running
- SSH is listening on a different port
- Firewall rules are not allowing SSH

### Network Error: Connection timed out

This error is usually due to network connectivity issues on either the server or your local machine. Whenever you receive these errors, it is best to check to make sure your local computer is connected to the internet. If it is then you will need to check the server connection as well and assure that it is running.

## Checking from the outside

Here are some common ways to troubleshoot ssh from outside your server

- ### nmap
     nmap is a network exploration tool and security / port scanner. You can use this tool to check to see if the port for ssh is open on the server

```
$ nmap <ip-address-of-host>

Starting Nmap 6.40 ( http://nmap.org ) at 2020-03-21 23:44 UTC
Nmap scan report for <ip-address-of-host>
Host is up (0.033s latency).
Not shown: 997 filtered ports
PORT    STATE SERVICE
22/tcp  open  ssh
80/tcp  open  http
443/tcp open  https

Nmap done: 1 IP address (1 host up) scanned in 4.35 seconds

```

- ### ssh -vvv

Using ssh with these flags will do a verbose output as you ssh into the server. This can provide some useful information for troubleshooting exactly where the issue might be.



### Checking from the inside

If you are having issue with ssh, you can log in via the emergency console and use that to troubleshoot. Below are some of the ways you can troubleshoot SSH from within the server.

### Is it running?

The first thing you would want to do is to make sure that the ssh process is running. you can do that by running the following:

- For Ubuntu 16.04+, Debian 8+ and Centos 7+ : `systemctl status sshd`
- For Centos 6: `service sshd status`

If you do not see the service is running, you can start the process by using the following:

- For Ubuntu 16.04+, Debian 8+ and Centos 7+ : `systemctl start sshd`
- For Centos 6: `service sshd start`


### netstat

The netstat command will show you the current connections on the server. This is a good way to check and see which port ssh is running on. When using netstat, you will want to use the flags `-plnt` to get the following output:

```
# netstat -plnt
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
tcp6       0      0 :::22                   :::*                    LISTEN      13631/sshd             

```

### The SSH config

The ssh config will tell ssh how it works and is located in `/etc/ssh/sshd_config`. There are many options in the config but here are some to look out for:

```
Port 22            <---- The port ssh runs on
#AddressFamily any
#ListenAddress 0.0.0.0
#ListenAddress ::

~
~
~

# Ciphers and keying
#RekeyLimit default none

# Logging
#SyslogFacility AUTH
#LogLevel INFO

# Authentication:

#LoginGraceTime 2m
PermitRootLogin yes  <---- Allows or block users logging in as root
#StrictModes yes
#MaxAuthTries 6
#MaxSessions 10

#PubkeyAuthentication yes  <---- Will state whether or not a user needs an ssh key to log in


```

Alternatively you can use the grep command to look for these specific lines. Note that when you use the grep command, you will need to be specific when looking for a specific phrase (that includes punctuation, capitalization and spelling).
```
$ sudo grep Port /etc/ssh/sshd_config
#   Port 22

```

### The firewall

If you have network connectivity and all the configurations look correct and you are still not able to connect via ssh then you might want to look at your firewall rules on the server. The most common one you will find on linux servers is iptables. In order to list the firwall rules in iptables, you will run the command `iptables -L`. To learn more about iptables, you can read the following [article][b9e96f79]

  [b9e96f79]: https://support.rackspace.com/how-to/introduction-to-iptables/ "iptables"

### fail2ban

This would be another place to look when regards to the firewall. Fail2ban is an application that will block an IP address after a certain number of failed login attempts. In order to check the jails, you can run the command `fail2ban-client status` and that will show you all the configured jails on the server and the IP addresses that are in those jails.



### The log files

When all else fails, go to the log files. These will give you information about whether or not you are hitting the server, if you are using an invalid password, etc. The log files you would want to look at are located in the following:

- Ubuntu/Debian: `/var/log/auth.log`
- CentOS/RHEL: `/var/log/secure`

When searching through these log files, you can use the `less` command to parse through the whole file and look for a specific time or string. Alternatively you can use the command `tail -f` to view those files in real time. You can use this when trying to ssh into the server and the log files will update in real time.
