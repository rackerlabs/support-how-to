---
permalink: minimizing-the-impact-of-cloud-block-storage-maintenance
audit_date: '2021-01-04'
title: Minimizing the impact of Cloud Block Storage maintenance
type: article
created_date: '2020-01-7'
created_by: Brian King
last_modified_date: '2021-01-04'
last_modified_by: Rose Morales
product: Cloud Block Storage
product_url: cloud-block-storage
---

Rackspace occasionally performs maintenance to increase the stability and
performance of the Cloud Block Storage platform. This article provides some tips
for minimizing the impact of this maintenance on your environment.

### How can I reduce the impact of the maintenance?

You can either clone and replace your Cloud Block Storage volume or stop all
writes to the device until the maintenance is complete.

#### Clone and replace

After you [clone your Cloud Block Storage volume](/support/how-to/create-a-clone-of-a-cloud-block-storage-volume/),
the resulting clone should land on an unaffected host server.

**Non-system disk Cloud Block Storage volumes:**

- Stop all writes to your current Cloud Block Storage volume before initiating
  the clone. After all writes to the current Cloud Block Storage volume have
  been stopped, clone the volume. After the clone completes, [unmount and detach](/support/how-to/detach-and-delete-cloud-block-storage-volumes/) the
  current Cloud Block Storage volume. Then [attach the new volume](/support/how-to/create-and-attach-a-cloud-block-storage-volume/) (the clone).

**Note:** Clones are not verified. Ensure the newly-cloned volume is working
before deleting your current Cloud Block Storage volume.

**System disk Cloud Block Storage volumes (Boot from volume servers):**

- [Replace your current system disk with a clone.](/support/how-to/increase-size-of-cloud-boot-from-volume-server-system-disk/)

**Note:** Clones are not verified. Ensure the newly-cloned volume is working
before deleting your current Cloud Block Storage volume.

#### Stop all writes to the device

**Non-system disk Cloud Block Storage volumes:**

- [Unmount and detach](/support/how-to/detach-and-delete-cloud-block-storage-volumes/) any Cloud Block Storage volume impacted by the maintenance. (The link includes instructions to delete Cloud Block Storage volumes&mdash;you should only complete the unmount and detach sections.)

**System disk Cloud Block Storage volumes (Boot from volume servers):**

- To avoid writes to the system disk, you must shut down your cloud server from
  the operating system (OS) at least 10 minutes before the maintenance starts.
  This causes your server to show as `Shutoff` in the MyCloud Portal. After you
  receive a ticket confirming that the maintenance is complete, reboot the
  server from the MyCloud Portal by selecting **Actions**> **Reboot**. Your
  server boots up and displays as `Active` in the MyCloud Portal.

#### Troubleshooting after a maintenance

**Volume not appearing inside server:**

- Shut the server down, [detach](/support/how-to/detach-and-delete-cloud-block-storage-volumes/) the Cloud Block Storage volume, and [attach it back](/support/how-to/create-and-attach-a-cloud-block-storage-volume/) to the server. Then you can start your server back up either through a reboot in the Control Panel or by issuing a start call by using the API. 

**Non-system disk Cloud Block Storage volumes:**

- If your volume is in read-only mode, unmount the volume, run a filesystem
  check (Linux&reg; with `ext3/4` or `fsck`, Windows&reg; with `chkdsk`), and
  then remount the volume. If the disk is still in read-only mode after that,
  then shut the server down and follow the detach and attach steps from the
  preceding section. If that does not work, contact Rackspace Support.

**System disk Cloud Block Storage volumes (Boot from volume servers):**

- Reboot the server. If the server is unresponsive or does not reboot, you can
[boot into rescue mode by using a specific image](https://developer.rackspace.com/docs/cloud-servers/v2/api-reference/svr-basic-operations/#rescue-specified-server).

**Note:** This feature is not yet available from the **myrackspace.com** portal,
so you must use the API.

When the server is in rescue mode, follow the preceding directions for
non-system disk Cloud Block Storage volumes. Contact Rackspace Support for
additional assistance.
