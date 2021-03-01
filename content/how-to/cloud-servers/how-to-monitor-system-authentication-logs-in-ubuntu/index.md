---
permalink: How-To-Monitor-System-Authentication-Logs-On-Ubuntu/
audit_date:
title: 'How To Monitor System Authentication Logs on Ubuntu'
type: article
created_date: '2021-02-17'
created_by: Annie Ponce
last_modified_date: '2021-02-18'
last_modified_by: Annie Ponce
product: Cloud servers
product_url: cloud-servers
---

# **How To Monitor System Authentication Logs on Ubuntu**

## **How To Monitor System Logins**

A significant line of protection against data breaches and other vulnerabilities within your system is monitoring. Authentication management monitors the system after the users have been configured.

All authentication attempts are in a discrete file that is located in `/var/log/auth.log`

**For example:**

    sudo less /var/log/auth.log

**The results would look like the following:**

      Feb 18 09:19:07 myserver sshd[4792]: pam_unix(sshd:auth): authentication failure;
      Feb 18 09:19:09 myserver sshd[4792]: Failed password for x
      Feb 18 12:21:32 myserver su[3484]: pam_unix(su:session): session open
      Feb 18 09:19:12 myserver sshd[4792]: Failed password for x from 20.20.20.20 port 2158 ssh2

## **How To Use The "last" Command**

When it comes to reviewing login attempts, you'd normally review the most recent and this is where we can use the `last` command.

The `last` command provides how they logged in, when they logged in and when they logged out.

      last

**The results would look like the following:**

      var      pts/1        192.168.1.0 Thu Feb  18 16:22   still logged in   
      root     pts/1        192.168.1.0 Thu Feb  18 19:37 - 19:37  (00:00)    
      root     pts/0        192.168.1.0 Thu Feb  18 19:55   still logged in   
      root     pts/0        192.168.1.0 Thu Feb  18 20:05 - 20:15  (00:10)    
      root     pts/0        192.168.1.0 Thu Feb  18 20:10 - 20:10  (00:00)    
      var      pts/0        192.168.1.0 Thu Feb  18 20:20 - 20:25  (00:05)

Different services and applications are logged into a log file under the directory `/var/log`. In this directory we have some files such as `utmp`, `wtmp` and `btmp`. .

- `utmp`: shows which terminal, logout time, system events and current status of the system and system boot time
- `wtmp`: gives historical data of `utmp`
- `btmp`: records only failed login attempts

The `last` command can be used to read the content of each file.

      last -f /var/log/utmp
      last -f /var/log/wtmp
      last -f /var/log/btmp

## **How To Use The "lastlog" Command**

The `lastlog` command formats and prints the content of the last login in `var/log/lastlog` file. It displays the following: username, port and last login time. It is sorted by their order in `/etc/passwd`.

**The results would look like the following:**

      Username         Port     From             Latest
      root             pts/1    192.168.1.0 Thu feb  18 19:37:18 +0000 2021
      will                                  **Never logged in**
      var                                   **Never logged in**
      sys                                   **Never logged in**
      test                                  **Never logged in**
      rack                                  **Never logged in**


