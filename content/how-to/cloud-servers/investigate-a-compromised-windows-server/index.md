---
permalink: investigate-a-compromised-windows-server/
audit_date: '2021-05-16'
title: 'Investigate a compromised Windows server'
type: article
created_date: '2021-05-06'
created_by: Dave Myers
last_modified_date: '2021-05-16'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers

This article helps you understand and identify indications of a compromised
Windows&reg; server. This is a very high-level document, which you can use as
a resource in tracking down a potential issue rather than resolving a
compromised server.

### Types of compromise

This article is concerned with two types of compromise: Application-level
and System or root-level. These are quite serious and often require a robust
disaster recovery plan to mitigate.

#### Application-level compromise

An Application-level compromise occurs when a low-level service or user is
compromised. Typical compromises in this group include the following issues:

- Site defacement
- FTP tagging
- FTP file manipulation
- SQL injection

This type of compromise might alter data on the server. However, they never achieve
administrative or root-level access on the server. In these cases, you might be able
to identify and secure the vulnerability. Securing Application-level vulnerability
could involve removing write access from an anonymous web user, removing viruses
from a server, or securing an application through available patches. To repair any
altered files, you need to restore from backup.

#### Administrative, system, or root-level compromise

This type of compromise takes place when an attacker gains administrative access to
the system and can include the following issues:

- Compromised service running as a `System`, `LocalService`, or `Administrative` user
- Compromised user account that has Administrative rights
- Access through a non-administrative user to a location restricted to
  Administrative users (such as System directories, and so on)
- Virus found in System or Administrative directory
- Visibly malicious outbound network activity
- SQL Injection (includes command execution)

**Important:** When an attacker gains this level of access, you cannot determine any
modifications that occurred during the course of compromise.

### Windows tools you can use to look for a compromise

- **Tasklist:** Command-line tool providing details on processes
  and services in the system
- **Task Manager:** Graphical tool providing details on processes,
  resource statistics, and network activity in the system
- **Resource Manager:** Graphical tool similar to *Taskmanager* but
  providing more details about resource use
  
### Explore a compromised server

To explore a possible compromise situation, perform the following tasks, described in this section:

- Identify the compromise
- Review the processes
- Review the services
- Review the users

#### Identify the compromise

High sustained unexpected bandwidth utilization is often a common symptom.
Because attackers usually compromise systems intending to run a network
service on them, there might be a service running on the system, so listening
to an odd port could indicate a compromised server.

- To review network connections for TCP, run the following command:

      NetStat -naop 'TCP'

- To review network connections for UDP, run the following command:

      NetStat** -naop 'UDP'

- To count specific connections, run one of the following commands:

      NetStat** -naop 'TCP'
      
      find /c ":<port>"
  
**Note:** The **Sysinternal TCP** view offers alternative graphical tools
for this review.

#### Review the processes
  
Identify any suspicious process. A compromised server likely has one or
more malicious processes running. You can sometimes identify these because
they contain typos, grammar errors, or a suspicious description.

- To list the processes running on the system, run the following command:
  
      Tasklist /FI "USERNAME ne NT AUTHORITY\SYSTEM" /FI "STATUS eq running" 
  
- To list of processes defined as a service, run the following command:

      Tasklist /svc 

- To list a snapshot of the currently running process with the same output
  as the taskmanager process list, run the following command:

      Get-Process
  
- To list processes and what user they are running under, run one of the following commands:

      gwmi win32_process
      
      select Name, @{l="User name";e={$_.getowner().user}}

#### Review the services
  
Look for typos, grammar errors, or suspicious descriptions. If a service looks
questionable, examine the properties and dependencies. Also, determine if the file
is executable. Use the **Services GUI** to view running services.

- To list running Services, run the following command:

      get-service | where-object {$_.Status -eq "Running"}

#### Review the users
  
To know if a server is compromised and identify bad configuration quickly, review
basic user accounts.

- To identify unknown or unusually named user accounts by listing
  configured users, run the following command:

      net user

- To identify unknown users in the local Administrators group by listing
  configured Administrators, run the following command:

      net localgroup Administrators

- To see if a guest account is enabled and in the Administrators group, run
  the following command:

      net user guest

### Tools available from Microsoft Sysinternals

For more information, review the following sources:
  
- [Documentation to Sysinternals](https://docs.microsoft.com/en-us/sysinternals/resources/troubleshooting-book)
- [Live link to sysinternal tools](https://live.sysinternals.com/)
- [Sophos AntiRootkit](https://www.sophos.com/en-us/products/free-tools/sophos-anti-rootkit.aspx)
  
Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 
