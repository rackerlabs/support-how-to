---
permalink: add-an-additional-rdp-license-to-windows-server-2012-r2
audit_date: '2020-06-30'
title: 'Add an additional RDP license to Windows Server 2012 R2'
type: article
created_date: '2020-06-25'
created_by: Paola Howard
last_modified_date: '2020-06-30'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to add Remote Desktop Protocol (RDP) licenses to Microsoft&reg; Windows Server&reg; 2012 R2.

### Prerequisites

You should promote the server to a Domain Controller. See [Install Active Directory on Windows Server 2012](/support/how-to/installing-active-directory-on-windows-server-2012/).

### Limitations

This task does not fall within the [Windows Spheres of Support for Dedicated and Managed Operations](/support/how-to/windows-spheres-of-support-for-dedicated-and-managed-ops/).

### Add the Remote Services Desktop role

Perform the following steps to add the Remote Desktop Services role:

1. Navigate to **Server Manager > Manage > Add roles and features** and click **Next**.

2. Select **Remote Desktop Services installation > quick start > Session-based Desktop Deployment** and continue with the defaults.

3. Select the **reboot** option on the last screen and click **Deploy**.

### Related articles

- [Installing the Remote Desktop Session Host role service on Windows Server without the Connection Broker role service](https://support.microsoft.com/en-us/help/2833839/guidelines-for-installing-the-remote-desktop-session-host-role-service/)

- [Best practices for setting up Remote Desktop Licensing (Terminal Server Licensing) across Active Directory Domains/Forests or Workgroup](https://support.microsoft.com/en-us/help/2473823/best-practices-for-setting-up-remote-desktop-licensing-terminal-server/)

- [Install licensing services to Cloud Servers for Windows 2008 and Windows 2008 R2 to prevent a licensing error](/support/how-to/install-licensing-services-to-cloud-servers-for-windows-2008-to-prevent-licensing-error/)
