---
audit_date: '2021-05-24'
title: 'Sophos Error due to EOL on Windows Server 2008/2008R2'
type: article
created_date: '2021-03-31'
created_by: Dave Myers
last_modified_date: '2021-05-24'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---
### Sophos has reached EOL for Windows Server 2008 / 2008R2 support
As Microsoft prepares for EOL on Windows Server 2008 / 2008R2. Sophos has quit supporting these versions' Windows Server.
#### Symptoms:

- **Server 2008 RTM:** If customer is running Sophos on a Windows Server 2008, it will fail to function properly after auto updating to version 10.8.9.1 &mdash;released Nov 2020.  It might create an error with the Sophos DLL error.
#### Root Cause:

- **Server 2008 RTM:** On October 22, 2020, *Segment Support* deployed a minor update to the Sophos Windows Endpoint client software, bringing us from version 10.8.4.4 VE3.77.1 to 10.8.9.1 VE3.79.0. After this update, the Sophos Anti-Virus service will no longer function on Windows Server 2008, or older operating systems. 

For more information, see the following article: <a href="/support/how-to/sophos-error-on-EOL-Windows-Server-2008">Sophos error on EOL Window Server 2008</a>


Server 2008 R2: From the 01st February 2021 all data, product updates and new installations will be blocked on this operating system. 
#### Resolution:
Its time to consider advising your Customer Success Manager and technical team on how to safely migrate your servers using a newer supported Version of Window.

Reference for EOL for Windows Server 2008 / 2008R from Microsoft
https://docs.microsoft.com/en-US/troubleshoot/windows-server/windows-server-eos-faq/end-of-support-windows-server-2008-2008r2

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 
