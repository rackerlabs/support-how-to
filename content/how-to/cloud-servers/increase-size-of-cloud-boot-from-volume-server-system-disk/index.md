---
permalink: increase-size-of-cloud-boot-from-volume-server-system-disk/
audit_date: '2020-12-11'
title: Increase the size of a cloud boot-from-volume server system disk
type: article
created_date: '2019-01-29'
created_by: Rackspace Community
last_modified_date: '2020-12-11'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

If you have a cloud boot-from-volume server that is reaching its capacity limit,
you can increase the size of the volume without building a new virtual machine
(VM), or adding disks that give you alternate storage points, rather than adding
to your existing limit.

This article shows you how to detach the boot volume, clone it to a larger size,
and then swap the volumes out and boot the VM.

### Shut off the VM

Before you detach the volume that contains the operating system (OS), you need
to shut off the VM.

To perform this action, use Secure Shell (SSH) and Remote Desktop (RDP) to log
in to the server, then shut it down by using its respective shutdown method.

After you shut off the server, it displays in the Rackspace
[Cloud Control Panel](https://login.rackspace.com) as **Shutoff**.

### Detach the volume from the VM

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).
2. In the top navigation bar, click **Select a Product** > **Rackspace Cloud**.
3. Select **Storage** > **Block Storage Volumes**.
4. Within **Block Storage Volumes**, click the gear icon next to the volume name and select **Detach Volume**.
5. In the pop-up dialog box, click **Detach Volume**.

### Size up the volume by cloning a larger version

Use the following steps to size up the volume:

1. In the Cloud Control Panel, click **Select a Product > Rackspace Cloud**.

2. In the top navigation bar, select **Storage > Block Storage Volumes**.

3. Find the volume that was the system disk for your server.

   **Note**: It might have a name similar to **System disk for
   0123abcd-1988-4eva-bad2-dabone987**, or the name might be something unique.

4. Click the gear icon next to the volume, then select **Clone Volume**.

5. In the window that appears, enter the **Name**, **Region**, **Type**, and
   **Size** that you want to use for the cloned volume, then click **Clone
   Volume**.

When the volume is ready, you receive a notification, and the status bar to the
left of the volume name on the **Block Storage Volumes** page displays as
green.

#### Attach the new volume to the VM

1. In the **Volume Details** screen, click **Attach Volume**.
2. Click the dot next to a server name to select it.
3. Click the **Attach Volume** button.

### Restart the VM

In the Cloud Control Panel, run the **Reboot** command.

After the VM is in **Active** status, you are able to
log in to the VM again by using SSH and RDP or the [Emergency
Console](/support/how-to/start-a-console-session/).
