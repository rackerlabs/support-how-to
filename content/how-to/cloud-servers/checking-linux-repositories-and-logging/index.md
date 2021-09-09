---
permalink: /checking-linux-repositories-and-logging
audit_date:
title: 'Checking Linux Repositories and Logging'
type: article
created_date: '2021-07-13'
created_by: David Fonseca
last_modified_date: '2021-09-03'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: cloud-servers
---

## Repositories on Linux
A Linux repository is a storage location that contains essential and popular software for different Linux distributions and, each distribution has its own official repositories (also called standard-repositories).
You can manage many packages (software) supported by your distribution and your system can install software from it.
But what happens if I want to get some packages that are not in an official repository of my distro... it's simple, you can add other repositories, not always recommended but if you decided to add a new repo it's at your own risk. The repositories for a third party (non-standard) can be infected by malicious packages inside it.
In order to get access to all or some packages in the repositories, we need to use a package manager like pacman, apt, yum, yaourt among others.

### List installed repositories in RHEL/CentOS 7
To review the list of installed repositories you need to type in the console
`$ yum repolist`
Example of output:
```
    repo id                   repo name                         status
    base/7/x86_64             CentOS-7 - Base                   10,072
    extras/7/x86_64           CentOS-7 - Extras                    498
    updates/7/x86_64          CentOS-7 - Updates                 2,594
```

### List installed repositories in RHEL/CentOS 8
To review the list of installed repositories you need to type in the console
`$ dnf repolist`

Example of output:
```
    repo id                             repo name
    appstream                           CentOS Linux 8 - AppStream
    baseos                              CentOS Linux 8 - BaseOS
    extras                              CentOS Linux 8 - Extras
```

### List installed repositories in Debian/Ubuntu
To review the list of installed repositories you need to type in the console
`$ grep -Erh ^deb /etc/apt/sources.list*`

Example of output:
```
    deb http://archive.ubuntu.com/ubuntu/ focal main restricted
    deb http://archive.ubuntu.com/ubuntu/ focal-updates main restricted
    deb http://archive.ubuntu.com/ubuntu/ focal universe
    deb http://archive.ubuntu.com/ubuntu/ focal-updates universe
    deb http://archive.ubuntu.com/ubuntu/ focal multiverse
    deb http://archive.ubuntu.com/ubuntu/ focal-updates multiverse
    deb http://archive.ubuntu.com/ubuntu/ focal-backports main restricted universe multiverse
    deb http://security.ubuntu.com/ubuntu/ focal-security main restricted
    deb http://security.ubuntu.com/ubuntu/ focal-security universe
    deb http://security.ubuntu.com/ubuntu/ focal-security multiverse
```

### Linux Logging
The operating systems provided a wealth of diagnostic information for your personal computer and servers too. Everyone, from kernel events to user actions is logged by Linux, in case something went wrong you will be able to see exactly what went wrong.

### Linux System Logs
Linux has a special directory /var/log where all the logs are stored. OS, services, and applications running on the system use this powerful directory.
Some of the most important Linux systems logs include:
* /var/log/syslog and /var/log/messages store all global system activity data, including startup messages. Debian-based systems like Ubuntu store this in /var/log/syslog, while Red Hat-based systems like RHEL or CentOS use /var/log/messages.
* /var/log/auth.log and /var/log/secure store all security-related events such as logins, root user actions, and output from pluggable authentication modules (PAM). Ubuntu and Debian use /var/log/auth.log, while Red Hat and CentOS use /var/log/secure.
* /var/log/kern.log stores kernel events, errors, and warning logs, which are particularly helpful for troubleshooting custom kernels.
* /var/log/cron stores information about scheduled tasks (cron jobs). Use this data to verify that your cron jobs are running successfully.

Other applications create their own logs inside this directory, for example `/var/log/mysql`

### Syslog
Syslog is a standard for creating and transmitting logs. When we talk about syslog we can refer to the syslog service which receives and processes syslog messages. It listens for events by creating a socket located at /dev/log, which applications can write to it.
Another reference could be the syslog protocol that specifies how to transmit logs over a network, also defines a data format for log messages. This protocol uses port 514 for plain text messages and 6514 for encrypted messages.
Finally, we can refer to a syslog message, which is any log formatted in the syslog message format, this message consists of a standardized header and message containing the log's contents.

#### Syslog Format and Field
The fields included in the standardized header can be a timestamp, name of the application that generates the event, locations in the system where the message is originated, and its priority. This format can be modified by yourself in your syslog implementation's configuration file. I recommend do not change this format due is and standard and many applications, developers, and system administrators are familiarized with it.  
Here is an example log message using the default format. It’s from the sshd daemon, which controls remote logins to the system. This message describes a failed login attempt:
`Jun 4 22:14:15 server1 sshd[41458] : Failed password for root from 10.0.2.2 port 22 ssh2`

### Logging with Systemd
Many Linux distributions contain a system that is a process and service manager. Systemd implements its own logging service called journald that can replace or complement syslog.

### Related articles
- [Linux log files](https://docs.rackspace.com/support/how-to/linux-log-files/)
