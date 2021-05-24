---
permalink: sophos-error-on-EOL-Windows-Server-2008/
audit_date:
title: 'Sophos Error due to EOL on Windows Server 2008/2008R2'
type: article
created_date: '2021-03-31'
created_by: Dave Myers
last_modified_date: '2021-03-31'
last_modified_by: Dave Myers
product: Cloud Servers
product_url: cloud-servers
---

As Microsoft&reg; prepares for EOL on Windows Server&reg; 2008 and 2008 R2, Sophos&reg; has quit
supporting these versions of Windows Server.

### Symptoms

The following symptom applies to Server 2008 Release to Manufacturing (RTM): Sophos running on a
Windows Server 2008 fails to function properly after automatically updating to version 10.8.9.1
(released Nov 2020). This update might create an error with the Sophos Dynamic-link library (DLL).

### Root cause

Server 2008 RTM: On October 22, 2020, Segment Support deployed a minor update to the Sophos
Windows Endpoint client software, upgrading from version 10.8.4.4 VE3.77.1 to 10.8.9.1 VE3.79.0.
After this update, the Sophos Anti-Virus service no longer functions on Windows Server 2008 or
older operating systems.

Server 2008 R2: After February 1, 2021, the system blocks all data, product updates, and new 
installations on this operating system.

### Resolution

It's time to consider contacting your Customer Success Manager and technical team about how to
safely migrate your servers with a newer, supported version of Windows.

To learn more, see the EOL report for Windows Server 2008 / 2008R from Microsoft:
[https://docs.microsoft.com/en-US/troubleshoot/windows-server/windows-server-eos-faq/end-of-support-windows-server-2008-2008r2](https://docs.microsoft.com/en-US/troubleshoot/windows-server/windows-server-eos-faq/end-of-support-windows-server-2008-2008r2).
