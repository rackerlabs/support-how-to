---
permalink: minimizing-the-impact-of-cloud-block-storage-maintenance
audit_date:
title: Minimizing the impact of Cloud Block Storage maintenance
type: article
created_date: '2020-01-7'
created_by: Brian King
last_modified_date: '2020-01-7'
last_modified_by: Chad Sterling
product: Cloud Block Storage
product_url: cloud-block-storage
---

Rackspace occasionally performs maintenance to increase the stability
and performance of the Cloud Block Storage platform. This article provides
some tips for minimizing the impact of this maintenance on your environment.

###  How can I reduce the impact of the maintenance?

You can either clone and replace your CBS volume,
or stop all writes to the device until the maintenance is complete.

#### Clone and Replace

You can clone your CBS volume. The resulting clone should land on an unaffected host server.

**Non-system disk CBS volumes:**

- Once the clone is complete, you can stop all writes to your current CBS volume, unmount,
detach, and attach the new volume.
**Note:** Clones are not verified, please ensure the
newly-cloned volume is working before deleting your current CBS volume.

**System disk CBS volumes (e.g., Boot From Volume servers):**

- After cloning your CBS volume, you can deploy a new server using the new clone
as the system disk. From the mycloud portal, select **Servers** > **Create Resources**>**Bootable Volumes**, then deploy a new server from the clone.
**Note:** Clones are not verified, please ensure the newly-cloned volume can build a server
 before deleting your current server.
**Note:** Your new server will have a new IP.

**Stopping Writes**

#### If your disk goes into read-only mode

**Non-system disk CBS volumes:**

- If your volume is in read-only mode, unmount the volume, run a filesystem check
(linux with ext3/4: fsck, windows: chkdsk), and then remount the volume as described above.
If the disk is still in read-only mode even after a filesystem check, try rebooting. If that
does not work, contact Rackspace Support.

**System disk CBS volumes (e.g., Boot from Volume servers):**

- Reboot the server. If the server is unresponsive, or does not reboot, you can boot
into rescue mode using a specific image.
**Note:** this feature is not yet available via
the myrackspace.com portal, so you must use the API.
When the server is in rescue mode,
follow the directions listed above for non-system disk CBS volumes. Contact Rackspace Support for additional assistance.