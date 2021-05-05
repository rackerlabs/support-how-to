---
permalink: create-a-clone-of-a-cloud-block-storage-volume
audit_date: '2021-02-08'
title: Create a clone of a Cloud Block Storage volume
type: article
created_date: '2014-03-18'
created_by: David Hendler
last_modified_date: '2021-02-08'
last_modified_by: Rose Morales
product: Cloud Block Storage
product_url: cloud-block-storage
---

A clone of a Cloud Block Storage (CBS) volume is a copy made of an existing volume at
a specific moment in time. At a high-level, the volume cloning process does the
following:

- Creates a Logical Volume Management (LVM) copy on the *write* segment of your
    existing volume.
- Creates a new blank volume on a separate storage node.
- Directly transfers the volume data from the existing volume to the new volume.

The end result is an identical CBS volume that you can
immediately attach and use. You have the option to change the volume type before
beginning the volume clone process. Additionally, volume cloning also allows
you to increase the size of the new volume. The cloned volume must be the same
size or larger than the original volume. Keep in mind, if you do use cloning to
increase the size of your volume, be sure to resize your file system (if supported)
to take advantage of the new, larger clone.

Before the volume cloning feature became available, customers were
encouraged to use volume snapshots when they needed a copy of a volume. The
advantage to using volume cloning instead of snapshotting is that volume cloning
transfers your data directly between volumes, without the need to use a Cloud
Files snapshot as an intermediate step.

Volume cloning shares many similarities with volume snapshots. For example, they both
use LVM as the primary copy and locking mechanism, and therefore, you should detach
the volume before cloning.

### Create a volume clone

It is a good idea to detach your volume from your server before you take a
volume clone. This is the safest method to prevent your server from writing
information while you are backing it up. That could get your data out of sync
and could create a problem. To detach your volume, see
[Detach and delete Cloud Block Storage volumes](/support/how-to/detach-and-delete-cloud-block-storage-volumes/).
You can always re-attach the volume by following
the attach steps in
[Create and attach a Cloud Block Storage volume](/support/how-to/create-and-attach-a-cloud-block-storage-volume).

More advanced users might sync the file system to ensure the integrity of
the data on your snapshots. Performing a sync flushes file system buffers and
writes the data out to disk. If you are unfamiliar with syncing your file
system, consider detaching your volume before snapshotting.

#### Steps to create a volume clone

1. Log in to the [Cloud Control Panel](https://login.rackspace.com/).

2. Navigate to **Rackspace Cloud -> Storage -> Block Storage Volumes** and click on your volume.

3. Click **Actions** on the **Volume Details** screen to open the **Clone Volume** pop-up window.

4. Click the **Clone Volume** link.

5. Give the new volume a name. The default is the volume's name followed by the
   `-clone` suffix.

6. Specify the volume type and size.

7. Click **Clone Volume**.

8. After the new volume details page displays, you can safely reattach your volume.

### Delete a volume clone

1. After you create a cloned volume, you can treat it like any other existing volume.

2. You can delete a CBS volume by clicking **Delete Volume** from **Actions**
   on the **Volume Details** screen.

### Frequently asked questions about volume cloning

{{< accordion title="How is cloning different from using a snapshot?" col="in" href="accordion1" >}}
You cannot use a snapshot directly as a volume. You need to create a volume from
the snapshot before you can attach it to your server. Snapshots are stored
redundantly in Cloud Files. However, creating volumes from snapshots is a slower
process than creating a volume from a clone. If your application is time
sensitive, consider using volume cloning instead. A volume clone is
usable copy of the source volume and you can attach and use it immediately.
{{< /accordion >}}

{{< accordion title="Do I need to detach my volume before cloning?" col="in" href="accordion2" >}}
While not required, it is a good idea to detach your volume from your server
before you create a clone. This safe method prevents your server from
writing data to the volume during clone creation and avoids a situation
of inconsistent data between a cloned volume and its
source volume. If you choose to leave your source volume attached before
creating a clone, you need to both sync current buffers and prevent future
writes during the actual clone operation. More advanced users might choose to freeze or
sync their file system before creating a volume clone. Performing a sync
flushes file system buffers and writes the data out to disk. If you are unfamiliar
with syncing your file system, consider detaching your volume before
snapshotting. The volume cloning process works similar to creating a volume snapshot
through the Application Programmer Interface (API). Note that as soon as the initial
clone operation returns a `200` response, the local point-in-time snapshot of your volume
is ready, and you can continue using the original volume. The cloned volume remains in
*creating* status until the source volume data has been fully copied to the new
clone.
{{< /accordion >}}

{{< accordion title="Can I create multiple clones from a single volume simultaneously?" col="in" href="accordion3" >}}
No. Creating multiple clones simultaneously from the same volume will fail.
{{< /accordion >}}

{{< accordion title="Can I clone between regions?" col="in" href="accordion4" >}}
No. You can clone volumes only within the same region.
{{< /accordion >}}

{{< accordion title="Can I simultaneously snapshot and clone the same volume?" col="in" href="accordion5" >}}
No. Volume snapshots and cloning share the same locking mechanism and therefore
cannot happen simultaneously on the same volume.
{{< /accordion >}}

### Volume cloning constraints

You cannot create more than one clone per volume at a time. Snapshots and
cloning use the same locking mechanism, so a snapshot and clone of the same
volume cannot run concurrently.
