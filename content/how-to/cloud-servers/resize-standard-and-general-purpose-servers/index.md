---
permalink: resize-standard-and-general-purpose-servers
audit_date: '2020-10-02'
title: Resize standard and general purpose servers
type: article
created_date: '2012-07-19'
created_by: Rackspace Support
last_modified_date: '2020-10-02'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

**Previous section:** [Create a Cloud Server](/support/how-to/create-a-cloud-server)

This article describes how to resize your server in the [Cloud Control Panel](https://login.rackspace.com). The process changes the virtual processor (vCPU), random access memory (RAM), and might also change disk size.

Servers can resize up or down with the following exceptions:

- Standard flavor Linux servers that use the deprecated paravirtual (PV) virtualization mode can resize down, potentially losing data. 
- OnMetal servers cannot be resized up or down.
- All other flavors can only resize up. 
- I/O flavors cannot resize through the Cloud Control Panel. Contact Rackspace Support to resize up an I/O flavor server.

### Resize a server

Use the following steps to resize a server:

**Note:** Each server size has a distinct uptime hourly cost, and the new cost starts when the resize process finishes. You might pay different rates for the same server within a single billing cycle.

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).

2. Click **Products > Rackspace Cloud** in the top navigation bar. 

3. Select **Servers > Cloud Servers** to view your servers.

4. Click the **gear icon** next to the server you want to resize

5. Click **Resize**. A pop-up window with your server size options displays.

6. Click **Resize Server** to select a new server size.

7. Verify changes made to your system resources.

8. Verify server resize and system integrity by remotely logging in.

   **Warning**: The verification step is your last chance to revert the server resize. In this case, website availability isn't an indicator of      success because some server processes might stop during verification.

   With a Linux server, you can use Secure Shell (SSH) to connect to either the public or private IP address for the server and run the following    commands to verify the changes: 

   `nproc`: Number of processors
   `df -h`: Hard disk usage
   `free -m`: Available RAM

   **Note**: Servers booted from a Cloud Block Storage volume don't gain disk space after a resize.

   With a Windows server, you must complete additional steps to use the additional space after a resize. For more information, see [Adding Disk Space After Resizing a Windows Server 2012 Cloud Server](/support/how-to/adding-disk-space-after-resizing-a-windows-server-2012-cloud-server).

9. Click **Confirm** to verify the resize or **Revert** to go back to the original size.

Confirming the resize changes the server's status. The process is complete when the **Status** shows as `Active`, the **Current Action** is `None`, and the server restarts. You might need to restart web services that were running manually. After 24 hours, the system automatically confirms the resize and the changes.

### Additional resources

- [Reset your server password](/support/how-to/reset-your-server-password)
- [Basic Cloud Server security](/support/how-to/basic-cloud-server-security)
- [Reboot your server](/support/how-to/reboot-your-server)
- [Rebuild a Cloud Server](/support/how-to/rebuild-a-cloud-server)

