---
permalink: create-and-use-cloud-block-storage-snapshots
audit_date: '2020-03-20'
title: Create and use Cloud Block Storage snapshots
type: article
created_date: '2012-10-22'
created_by: Rackspace Support
last_modified_date: '2020-03-20'
last_modified_by: Tyler Watson
product: Cloud Block Storage
product_url: cloud-block-storage
---

**Previous section:** [Prepare your Cloud Block Storage volume](/support/how-to/prepare-your-cloud-block-storage-volume)

A snapshot is a copy made of your volume at a specific moment in time.
It contains the full directory structure of the volume. Each subsequent
snapshot on a volume is a delta or "diff" that captures the changes
from the previous snapshot. YOu can use snapshots as incremental backups
of your volumes, as restore points for your data, as long-term storage for
your data, or as starting points for new Cloud Block Storage (CBS) volumes.
Snapshots are stored in Rackspace Cloud Files. If you plan to make many backups
of your volume, consider using Cloud Backups, which is quicker and enables
better verision control.

The first snapshot of a volume takes up only as much storage space as
the data that fills it. So if you have a 1 TB volume with 500 GB of data on it,
your snapshot is only 500 GB. When you create new volumes from a snapshot, the
new volume must be of equal size or larger than the original volume from which
you made the snapshot. Also, the new volume must be in the same region. It can,
however, be a different type.


### Create a snapshot

It is a good idea to detach your volume from your server before you take
a snapshot. This is the safest method to prevent your server from
writing information while you are backing it up. That could get your
data out of sync and could create a problem. To detach your volume, see
the instructions on how to [detach and delete volumes](/support/how-to/detach-and-delete-cloud-block-storage-volumes).
You can always re-attach the volume by following the steps in [Allowing snapshots without detaching the volumes](/support/how-to/create-and-attach-a-cloud-block-storage-volume) steps
on the **Create/Attach Volume** page.

More advanced users might sync the file system to ensure the
integrity of the data on your snapshots. Performing a sync flushes
file system buffers and writes the data out to disk. If you are
unfamiliar with how to sync your file system, consider detaching your
volume prior to snapshotting.

You can create a snapshot by either using the **Actions** button
or from the Storage Snapshots screen.

#### From the Actions button:

1.  From the list of Cloud Block Storage Volumes:
    -   Click the **Actions** button on the **Volume Details** screen.
        or
    -   Click the Action cog next to the volume name in the Block
        Storage Volumes screen.

2.  Click **Create Snapshot**.
3.  Give the snapshot a name. The default is the volume's name with the
    numbered snapshot (for instance, My-CBS-Volume-3 for the
    third snapshot).
4.  Click **Create Snapshot**.
5.  After the "Creating snapshot for volume" popup no longer displays, you can safely
    reattach your volume.

    **Note**: The data in the snapshot is instant at the point in time
    starting when you click **Create Snapshot**. While the
    "Creating" status shows, the snapshot already exists at the point in
    time of the submitted request. During the "Creating" status, the
    snapshot is compressed, de-duped, and transferred to Cloud Files
    storage, where it is backed up in triplicate.

#### From the Storage Snapshots screen:

1.  From the **Storage Snapshots** screen, click **Create Snapshot**.
    The **Volume to Snapshot** menu displays.
2.  Click the circle next to the volume to take a snapshot.
3.  Give the snapshot a name. The default is the volume's name with the
    numbered snapshot (for instance, My-CBS-Volume-3 for the
    third snapshot).
4.  Click **Create Snapshot**.
5.  After the "Creating snapshot for volume" popup no longer displays, you can safely
    reattach your volume.

    **Note**: The data in the snapshot is instant at the point in time
    starting when you click **Create Snapshot**. While the
    "Creating" status shows, the snapshot already exists at the point in
    time of the submitted request. During the "Creating" status, the
    snapshot is compressed, de-duped, and transferred to Cloud Files
    storage, where it is backed up in triplicate.

**Note**: If a snapshot of a volume exists, you cannot delete the volume until you delete the snapshot.

### Create volume from snapshot

The volume you create from a snapshot must be the same size and in the
same region as the original volume. However, you may choose a different
type.

1.  From the **Block Storage Snapshots** screen, click the **Action**
    cog next to the snapshot.
2.  Click **Create Volume**.
3.  Give your volume a name by using alphanumeric, underscore, and dash
    characters.
4.  Select a Volume Type:
    -   **Standard**: This is a standard SATA drive for users who need
        additional storage on their Cloud Server.
    -   **High Performance**: This is an SSD drive, which offers a
        higher performance option for databases and high
        performance applications.

5.  Click **Create Volume**.

The larger your volume, the longer it takes to create.

### Delete snapshot

1.  From the **Block Storage Snapshots** screen, click the **Action** cog next to the snapshot.
2.  Click **Delete Snapshot**.


**Next steps:** [Detach and delete Cloud Block Storage volumes](/support/how-to/detach-and-delete-cloud-block-storage-volumes)
