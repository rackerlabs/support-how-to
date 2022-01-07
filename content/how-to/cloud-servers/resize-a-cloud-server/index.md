---
permalink: resize-a-cloud-server
audit_date: '2022-01-07'
title: Resize a Cloud Server
type: article
created_date: '2022-01-07'
created_by: Ivan Espejel
last_modified_date: '2022-01-07'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: cloud-servers
---

**Previous section:** [Create a Cloud Server](/support/how-to/create-a-cloud-server)

This article describes how to resize your server in the [Cloud Control Panel](https://login.rackspace.com). The process changes the virtual processor (vCPU), random access memory (RAM), and might also change disk size.

### Resize a server via the Cloud Control Panel

Use the following steps to resize a server:

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).

2. Click **Products > Rackspace Cloud** in the top navigation bar. 

3. Select **Servers > Cloud Servers** to view your servers.

4. Click the **gear icon** next to the server you want to resize

   A pop-up window that lists your server size options displays.

5. Click **Resize Server** to select a new server size.

**Note:** Each server size has a distinct uptime hourly cost, and the new cost starts when the resize process finishes. You might pay different rates for the same server within a single billing cycle.

A notification displays prompting you to verify the changes that you made to your system resources and that there was no adverse impact to your server.

6. Verify server resize and system integrity by remotely logging in.

   **Warning:** Verification is an important step because it is the last chance you have to revert to the original size and cancel any changes to your server. In this case, website availability isn't an indicator of success because some server processes might stop during verification.

   With a Linux server, you can use Secure Shell (SSH) to connect to either the public or private IP address for the server and run the following commands to verify the changes: 

- `nproc`: Number of processors
- `df -hP`: Hard disk usage
- `free -m`: Available RAM

   **Note**: Servers booted from a Cloud Block Storage volume don't gain disk space after a resize.

   With a Windows server, you must complete additional steps to use the additional space after a resize. For more information, see [Adding Disk Space After Resizing a Windows Server 2012 Cloud Server](/support/how-to/adding-disk-space-after-resizing-a-windows-server-2012-cloud-server).

   If a Linux device does not show the correct disk space after a resize [follow these instructions](https://docs.rackspace.com/support/how-to/linux-device-does-not-show-the-correct-disk-space-after-a-resize/)

9. Click **Confirm** to verify the resize or **Revert** to go back to the original size.

Confirming the resize changes the server's status. The process is complete when the **Status** shows as `Active`, the **Current Action** is `None`, and the server restarts. You might need to restart web services that were running manually. After 24 hours, the system automatically confirms the resize and the changes.

### Resize a server via Pitchfork

You can also use Pitchfork, an interactive web API application that enables you
to interact quickly with Rackspace Cloud products to resize up your server.
Use the following steps to resize up your server by using Pitchfork:

1. Navigate to [Pitchfork](https://pitchfork.rax.io/) and log in by using
   your cloud account username and API key.

2. Click the **Cloud Servers** icon to access the Cloud Servers page.

3. In the **Region** drop-down menu, select the region for the cloud server
   that you want to resize.

4. Scroll down to **List Flavors** and click **Details**. Enter
   **limit=100** for the **Filter** parameter, and then click **Send API Call**.

   {{<image src="pitchfork-list-flavors.png">}}

5. Find the server that you want to resize and take note of the server
   **UUID** and **flavor_id**. You need these values for the **Resize Server** API call.

6. Scroll down to **Resize Server** and click **Details.** Enter
   the **server_id (UUID)** and **flavor_id** that you gathered in the previous
   step, and then click **Send API Call**.

   {{<image src="pitchfork-resize-server.png">}}

The server status in the Cloud Control Panel should change to **Resizing**.
After the operation is complete, you must verify the server resize by
navigating to the **Server Details** page for the server that you resized.

{{<image src="pitchfork-verify-resize.png">}}

### Additional resources

- [Rebuild a Cloud Server](/support/how-to/rebuild-a-cloud-server)
- [Reset your server password](/support/how-to/reset-your-server-password)
- [Reboot your server](/support/how-to/reboot-your-server)
- [Basic Cloud Server security](/support/how-to/basic-cloud-server-security)
- [Cloud Servers API reference: Resize specified server](https://docs.rackspace.com/docs/cloud-servers/v2/api-reference/svr-basic-operations/#resize-specified-server)
- [Pitchfork - the Rackspace Cloud API web application](/support/how-to/pitchfork-the-rackspace-cloud-api-web-application)

<br>
   
Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
