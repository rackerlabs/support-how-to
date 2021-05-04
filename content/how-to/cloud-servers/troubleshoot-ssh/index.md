---
permalink: troubleshoot-ssh
audit_date: '2020-04-14'
title: 'Troubleshoot SSH'
type: article
created_date: '2020-04-06'
created_by: Matthew Brown
last_modified_date: '2020-04-14'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article shows you how to troubleshoot Secure Shell (SSH) on a Linux&reg; server.

### Different types of errors

If you cannot SSH in to a server, you should pay attention to the errors (or lack of them) that you receive. The following list describes some possible errors.

#### Access denied or Authentication refused

This type of error occurs whenever you log in via SSH with incorrect credentials. If you get this error, you can check the following:

- Make sure you have typed the username and password correctly.
- If you are using an SSH key pair, make sure that you have the private key installed on your local machine.

#### Port 22: Connection refused

This error occurs for the following reasons:

- SSH is not installed or running.
- SSH is listening on a different port.
- Firewall rules do not allow SSH.

#### Network Error: Connection timed out

This error often occurs because of network connectivity issues on either the server or your local machine. Whenever you receive these errors, make sure your local computer is connected to the Internet. If it is connected, check the server connection as well to ensure that the server is running.

### Check from the outside

Here are some common ways to troubleshoot SSH from outside your server:

#### `nmap`

`nmap` is a network exploration tool and security or port scanner. You can use this tool to check to see if the port for SSH is open on the server. The following example provides the command and its output:

    $ nmap <ip-address-of-host>

    Starting Nmap 6.40 ( https://nmap.org ) at 2020-03-21 23:44 UTC
    Nmap scan report for <ip-address-of-host>
    Host is up (0.033s latency).
    Not shown: 997 filtered ports
    PORT    STATE SERVICE
    22/tcp  open  ssh
    80/tcp  open  http
    443/tcp open  https

    Nmap done: 1 IP address (1 host up) scanned in 4.35 seconds

#### `ssh -vvv`

Using `ssh` with the `-vvv` flags produces verbose output as you SSH in to the server. This command can provide some useful information for troubleshooting exactly where the issue might be.


### Check from the inside

If you are having issues with SSH, you can log in by using the emergency console to troubleshoot the server to check the following conditions:

#### SSH process

First, make sure that the SSH process is running by running the following command:

- For Ubuntu&reg; 16.04+, Debian&reg; 8+, and Centos&reg; 7+: `systemctl status sshd`
- For Centos 6: `service sshd status`

If you do not see the service running, you can start the process by using the following command:

- For Ubuntu 16.04+, Debian 8+, and Centos 7+: `systemctl start sshd`
- For Centos 6: `service sshd start`


#### netstat

The `netstat` command shows you the current connections on the server. This command is a good way to check and see which port SSH is running on. When you run `netstat`, use the flags `-plnt` to get the following output:

    # netstat -plnt
    Active Internet connections (only servers)
    Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
    tcp6       0      0 :::22                   :::*                    LISTEN      13631/sshd             

#### SSH configuration file

The SSH configuration file, **/etc/ssh/sshd_config**, sets the SSH configuration. There are many options in the configuration file, but here are some to look out for:

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


Alternatively, you can use the `grep` command to look for these specific lines. When you use the `grep` command, you need to be specific when searching for a specific phrase. Be careful with punctuation, capitalization, and spelling.

    $ sudo grep Port /etc/ssh/sshd_config
    #   Port 22

#### The firewall

If you have network connectivity, all the configurations are correct, and you are still unable to connect via SSH, you might want to look at your firewall rules on the server. On Linux servers, **iptables** has these rules. To list the firewall rules in **iptables**, run the command `iptables -L`. To learn more about **iptables**, read [Introduction to iptables](/support/how-to/introduction-to-iptables/ "iptables").

#### `fail2ban`

`fail2ban` is an application that blocks an IP address after a certain number of failed login attempts. To check the jails, you can run the command `fail2ban-client status`. This command shows you all the configured jails on the server, and the IP addresses that are in those jails.

#### The log files

When all else fails, go to the log files. These files provide information about whether or not you are reaching the server, if you are using an invalid password, and so on. The log files you should review include the following files:

- Ubuntu or Debian: **/var/log/auth.log**
- CentOS or RHEL&reg;: **/var/log/secure**

When searching through these log files, you can use the `less` command to parse through the whole file and look for a specific time or string. If you have logged in to the server from the console, you can use `tail -f` on the logs while you try to SSH in to the server. Then, you can watch the log files update in real time.
