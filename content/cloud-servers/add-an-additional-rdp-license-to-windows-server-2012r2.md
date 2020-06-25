---
permalink: add-an-additional-rdp-license-to-windows-server-2012r2/
audit_date:
title: 'Add an additional RDP License to Windows Server 2012r2'
type: article
created_date: '2020-06-25'
created_by: Paola Howard
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---


Add an additional RDP License to Windows Server 2012r2


This article will walk you through adding additional RDP licenses to 


### Prerequisites (optional)


The server will need to be promoted to a Domain Controller. https://support.rackspace.com/how-to/installing-active-directory-on-windows-server-2012/

### Limitations (optional)

This does not fall within the Spheres of Support as outling in https://support.rackspace.com/how-to/windows-spheres-of-support-for-dedicated-and-managed-ops/

### Procedure 

Add the Remote Desktop Services role

Server Manger > Manage > Add roles and features > Next > Remote Desktop Services installation > quick start > Session-based Desktop Deployment > continue with defaults > select the reboot option on the last screen > deploy

### Related articles (optional)

https://support.microsoft.com/en-us/help/2833839/guidelines-for-installing-the-remote-desktop-session-host-role-service/
https://support.microsoft.com/en-us/help/2473823/best-practices-for-setting-up-remote-desktop-licensing-terminal-server/
https://support.rackspace.com/how-to/install-licensing-services-to-cloud-servers-for-windows-2008-to-prevent-licensing-error/
