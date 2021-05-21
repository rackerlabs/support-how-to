---
permalink: investigate-a-compromised-windows-server/
audit_date: '2021-05-16'
title: 'How to Investigate a compromised Windows server'
type: article
created_date: '2021-05-06'
created_by: Dave Myers
last_modified_date: '2021-05-16'
last_modified_by: Carlos Arriaga
product: Cloud Product
product_url: cloud-product
---

This article assists in understanding and identifying indications of a compromised server. This is a very high-level document, you can use it as a resource in tracking down a potential compromise not intented to resolve a compromised server.

### Types of Compromise

There are two types of compromise we are concerned with: **Application Level** and **System/ root level**. These are much more serious and often require a robust disaster recovery plan to mitigate. 

#### Application Level

An Application level compromise occurs when a low-level service or user is compromised. Typical compromises in this group will include the following:

- Site Defacement
- FTP Tagging
- FTP file manipulation
- SQL Injection

In this type of compromise, data can be altered on the server. However they never achieve **administrative / root** level access on the server. In these cases, it might be possible to identify and secure the vulnerability. Securing **Application** level vulnerability could involve removing write access from an anonymous web user, removing viruses from a server, or securing an application via available patches. To repair any files that might have been altered, a restore from backup will be required.

#### Administrative/System or Root Level compromise

This takes place when an attack has gained Administrative access to the system. This includes the following:

- Compromised Service running as System, LocalService, or Administrative user 
- Compromised user account that has Administrative rights.
- Access via a non-administrative user to a location restricted to 
- Administrative users (System directories,etc.).
- Virus found in System or Administrative directory
- Visibly malicious outbound network activity
- SQL Injection (includes command execution)

**Note:** When an attacker gains this level of access, it is impossible to determine any modifications that have occurred during the course of compromise.

### Tools within Windows used in looking for a compromise.

- **Tasklist:** Command line tool provides details on processes and services in the system
- **Task Manager:** Graphical tool provides details on processes, resource statistics and network activity in the system
- **Resource Manager:** Graphical tool similar to *Taskmanager* but provides more details on resource use

#### Identifying the compromise

**High Bandwidth Utilization:**

- High Sustained unexected Bandwidth utilization is often a common symptom as systems are usually compromised with the intent of running a network service on them, there may be a service running on the system and listening to an odd port could indicate a compromised server.

- Reviewing Network Connections for TCP

**NetStat** *-naop* 'TCP'

- Reviewing Network Connections for UDP

**NetStat** *-naop* 'UDP'

- To count specific connections:

**NetStat** *-naop* 'TCP' |  **find** /c ":<port>"
  
**Note:** **Sysinternal's TCP** view offers alternative graphical tools for this review.

**Process Review:**
  
Look to identify any suspicious process. A compromised server will likely have one or more malicious processes running.
These can sometimes be identified because they contain typos, grammar errors or a suspicious description.

- List of processes running from system
  
 **Tasklist** /FI "USERNAME ne NT AUTHORITY\SYSTEM" /FI "STATUS eq running" 
  
- List of processes defined as a service

  **Tasklist** /svc 

- List a snapshot of the current running process. Same output at the taskmanager process list.

  **Get-Process**
- List processes and what user they are running under:

  **gwmi** win32_process |select Name, @{l="User name";e={$_.getowner().user}}

**Review Services:**
  
Look for typos, grammar errors or suspicious descriptions.  If a service looks questionable, try to determine if the properties,
dependencies or if the file is executable. Use the ***Services GUI*** to view running services.

- List of running Services:
**get-service** | where-object {$_.Status -eq "Running"}

**Review Users:**
  
Reviewing basic user accounts is one of the quickest ways to know if a server is compromised and can show a bad configuration. Here are the things to check:

- Unknown or unusually named user accounts.

  **net user** - List configured users.

  - Unknown users in the local Administrators group.

  **net localgroup Administrators** - List configured Administrators.

  - Guest account is enabled and/or in the Administrators group.

  **net user guest** - Checks to see if the Guest User account is enabled.

#### Tools available from Microsoft Sysinternals
  
- Documentation to Sysinternals: https://docs.microsoft.com/en-us/sysinternals/resources/troubleshooting-book
- Live link to sysinternal tools: https://live.sysinternals.com/
- Sophos AntiRootkit: https://www.sophos.com/en-us/products/free-tools/sophos-anti-rootkit.aspx
  
Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 

