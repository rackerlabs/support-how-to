---
permalink: investigate-a-compromised-windows-server/
audit_date:
title: 'How to Investigate a Compromised Windows Server'
type: article
created_date: '2021-05-06'
created_by: Dave Myers
last_modified_date: '2021-05-09'
last_modified_by: Dave Myers
product: Cloud Product
product_url: cloud-product
---


**This article is to help assist in understanding and identifying indications of a compromised server. This is a very high level document and should be used as resource in tracking down a potential compromise not intented to resolve a compromised server.

## Types of Compromise
There are only two types of compromise we are concerned with: **Application Level** and **System/ root level** compromises which are much more serious and often requires a robust disaster recovery plan to mitigate. 

### Application Level
An Application level compromise occurs when a low-level service or user is compromised. Typical compromises in this group will include the following:
Examples include *Site Defacement, FTP Tagging, FTP file manipulation and SQL Injection*.

In this type of compromise, data can be altered on the server. However they never achieve **administrative / root** level access on the server. In these cases, it may be possible to identify and secure the vulnerability. Securing **Application** level vulnerability could involve removing write access from an anonymous web user, removing viruses from a server, or securing an application via patches that are be available. To repair any files that may have been altered, a restore from backup will be required.

### Administrative/System or Root Level

**Administrator/Root level compromise is when an attack has gained Administrative access to the system. This includes the following:**

- Compromised Service running as System, LocalService, or Administrative user 
- Compromised user account that has Administrative rights.
- Access via a non-administrative user to a location restricted to 
- Administrative users (System directories,etc.).
- Virus found in System or Administrative directory
- Visibly malicious outbound network activity
- SQL Injection (includes command execution)
**When an attacker gains this level of access, it is impossible to determine any modifications that have occurred during the course of compromise.**

#### Tools within Windows used in looking for a compromise.
**Tasklist:** Command line tool provides details on processes and services in the system.
**Task Manager:** Graphical tool provides details on processes, resource statistics and network activity in the system.
**Resource Manager:** Graphical tool similar to *Taskmanager* but provides more details on resource use.

#### Identifying the Compromise
**High Bandwidth Utilization:**
- High Sustained unexected Bandwidth utilization is often a common symptom as systems are usually compromised with the intent of running a network service on them, there may be a service running on the system and listening to an odd port could indicate a compromised server.
- Reviewing Network Connections for TCP: 
**NetStat** *-naop* 'TCP'
- Reviewing Network Connections for UDP: 
**NetStat** *-naop* 'UDP'
- To count specific connections: 
**NetStat** *-naop* 'TCP' |  **find** /c ":<port>"
**Note:** *Sysinternal's TCPView offers alternative graphical tools for this review.* 

**Process Review:**
Look to identify any process that looks suspicious in some way. A compromised server will likely have one or more malicious processes running. These can sometimes be identified by bad spelling or grammar or suspicious description. 

- List of processes running from system:
 **Tasklist** /FI "USERNAME ne NT AUTHORITY\SYSTEM" /FI "STATUS eq running" 
- List of processes defined as a service:
 **Tasklist** /svc 
- List a snapshot of the current running process. Same output at the taskmanager process list.
**Get-Process**
- List processes and what user they are running under:
**gwmi** win32_process |select Name, @{l="User name";e={$_.getowner().user}}

**Review Services:**
Like when investigating suspicious processess you want to look for bad spelling or grammar or suspicious description.  If a service looks questionable, try to determine if the properties, dependencies or if the executable itself appears suspicious in some way. Uses the ***Services GUI*** to view what services are running and other details.

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
Documentation to Sysinternals:
https://docs.microsoft.com/en-us/sysinternals/resources/troubleshooting-book
Live link to sysinternal tools:
https://live.sysinternals.com/
Sophos AntiRootkit: Another rootkit scanner.
https://www.sophos.com/en-us/products/free-tools/sophos-anti-rootkit.aspx
