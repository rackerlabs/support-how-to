---
permalink: cloud-block-storage-faq
audit_date: '2021-02-15'
title: Cloud Block Storage FAQ
type: article
created_date: '2015-12-10'
created_by: Rackspace Support
last_modified_date: '2021-02-15'
last_modified_by: Rose Morales
product: Cloud Block Storage
product_url: cloud-block-storage
---

### Backups

{{< accordion title="What are the minimum and maximum limits for single Cloud Block Storage volume?" col="in" href="accordion1" >}}

The minimum size for a Cloud Block Storage volume is 50 GB for an SSD
volume or 75 GB for a SATA volume. The maximum volume size is 1 TB.
{{< /accordion >}}

{{< accordion title="What is the maximum number of Cloud Block Storage volumes I can attach to a single server instance?" col="in" href="accordion2" >}}

Depending on your Cloud Server's operating system, you can have up to a
maximum of 14 Cloud Block Storage volumes attached to a single server.
{{< /accordion >}}

{{< accordion title="What is the default maximum capacity of Cloud Block Storage that a single customer account can consume?" col="in" href="accordion3" >}}

The limit for volumes and storage is 10 TB total stored or 50 volumes
per region (whichever is reached first).
{{< /accordion >}}

{{< accordion title="What if I need more storage than the default maximum capacity?" col="in" href="accordion4" >}}

No problem. We are happy to accommodate any size storage requests for
Cloud Block Storage. Simply ask for an increase to your storage quota
by using a support request. Include the desired storage amount (TBs or
volume count), storage type (SATA or SSD), and region (DFW, ORD, IAD,
LON, SYD, HKG). Contact your account team for further details.

{{< /accordion >}}

{{< accordion title="Does Cloud Block Storage have a Service Level Agreement (or SLA)?" col="in" href="accordion6" >}}

Yes. You can find details regarding the Cloud Block Storage SLA here:
[https://www.rackspace.com/cloud/legal/sla](https://www.rackspace.com/cloud/legal/sla/).

{{< /accordion >}}

{{< accordion title="Is Cloud Block Storage right for me?" col="in" href="accordion7" >}}

Cloud Block Storage is an excellent option for you if you:

-   Want more control over your storage or application infrastructure.
-   Are looking for a high-performance storage option (SSD).
-   Would like to add additional storage to your servers without paying
    for additional compute resources.

You might not be a good fit for the Cloud Block Storage service if you:

-   Are not comfortable with low-level system administration tasks, such
    as installing file systems, mounting and partitioning storage
    volumes, or installing your own applications on top of a raw storage
    device.
-   Are looking for a fully managed storage or database solution.
{{< /accordion >}}

{{< accordion title="Is Cloud Block Storage a replacement for existing Rackspace storage products?" col="in" href="accordion8" >}}

Cloud Block Storage (CBS) is not meant as a direct replacement of any
existing Rackspace products (shared or dedicated). CBS allows Rackspace
Cloud customers to add *a la carte* storage to their existing
next-generation Cloud Servers. You can consider it to be a complimentary
cloud-based storage offering that rounds out our entire storage
portfolio.
{{< /accordion >}}

{{< accordion title="What parts of the storage system are highly available (HA)?" col="in" href="accordion9" >}}

Cloud Block Storage back-end storage volumes employ a RAID (Redundant
Array of Independent Disks) level 10 configuration. RAID 10 provides
high availability by combining features of RAID level 0 and RAID level 1
in which data is stripped and mirrored to provide a very high level of
reliability and performance.
{{< /accordion >}}

{{< accordion title="If the system employs RAID level 10 on the back end storage nodes, can I assume my volumes are fully protected from a failure scenario?" col="in" href="accordion10" >}}

The hardware RAID level 10 employed by Cloud Block Storage nodes provides
protection against disk failures on the storage nodes themselves. However,
we strongly encourage customers to use a backup option like Rackspace Cloud
Backup to protect against data loss in the event of a storage node failure.
Customers familiar with RAID can also implement a RAID level 1 (mirror)
configuration across multiple volumes to provide redundancy.
{{< /accordion >}}

{{< accordion title="Can I attach a single volume to multiple Cloud Servers?" col="in" href="accordion11" >}}

Not concurrently. Cloud Block Storage is not a shared storage offering.
You can attach multiple volumes to a single Cloud Server instance, but
you cannot attach multiple Cloud Servers to a single Cloud Block
Storage volume.
{{< /accordion >}}

{{< accordion title="After I have created a Cloud Block Storage volume, can I resize (increase or decrease) it?" col="in" href="accordion12" >}}

After you create a volume, you can increase its size using the API
by using either of the following methods:

-   Clone from a source volume to a new larger volume
-   Create a new larger volume from an existing volume snapshot

Alternatively, to move to a larger or smaller volume size, you
might need to create a new volume of the desired size and then copy your
data from the original volume to the new volume. Note that you
need to resize your file system when moving to a smaller
volume (if supported by your operating system).

When you copy your data within the same data center via the internal
ServiceNet network, there is no charge for bandwidth.
{{< /accordion >}}

{{< accordion title="When I am using a volume, how do I know how much space I have left?" col="in" href="accordion13" >}}

You can verify a volume's capacity and available space by using basic
system commands available through their Cloud Server operating system:

-   In the Linux&reg; CLI: From a terminal window, run the `df -h` command and
    note the **Size**, **Used**, **Avail**, and **Capacity** of the storage volume.
-   In Windows&reg; Explorer: Right-click on the drive icon and select **Properties** 
    and note **Capacity**, **Free space**, and **Used space**.
{{< /accordion >}}

{{< accordion title="Is there a limit to the number, frequency or size of snapshots that I can take on a volume?" col="in" href="accordion14" >}}

You can have only 5000 snapshots per volume, and you can start only one
snapshot at a time.
{{< /accordion >}}

{{< accordion title="Can I use a software RAID to improve the I/O performance of my SATA Cloud Block Storage volumes?" col="in" href="accordion15" >}}

Yes. However, at some point, the cost-benefit of using a single higher I/O SSD volume outweighs
the cost-benefit of using several less expensive SATA volumes in a RAID configuration. If you want to
increase the I/O performance of your storage volumes, we encourage you
to use higher-performing SSD volumes for increased disk I/O.
{{< /accordion >}}

{{< accordion title="How much does Cloud Block Storage cost?" col="in" href="accordion16" >}}

Cloud Block Storage is charged by gigabytes of storage used per month,
not the IOPs, which can be difficult to predict. The price differs for
standard volumes, SSD volumes, and snapshots.

The following page details prices, which vary by region:
https://www.rackspace.com/calculator
{{< /accordion >}}

{{< accordion title="How is volume cloning different from volume snapshots?" col="in" href="accordion17" >}}

A volume *clone* is a usable copy of the source volume, which you can
attach to a server and use immediately. You cannot directly use a volume
*snapshot* as a volume. Instead, you must create a volume from the snapshot
and then attach that volume to your server. Snapshots are stored
redundantly in Cloud Files. However, creating a volume from a snapshot
is slower than creating a volume from a clone. If your
application is time-sensitive, consider using volume cloning.

For instructions on volume cloning, see [How to create a clone of a
Cloud Block Storage
volume](/support/how-to/create-a-clone-of-a-cloud-block-storage-volume).
{{< /accordion >}}

{{< accordion title="What can I do if I need to change volume types (SATA vs. SSD)?" col="in" href="accordion18" >}}

Although you cannot change the type of a Cloud Block Storage volume
after it has been provisioned, you can create a copy of that volume and
switch volume types by using the cloning or snapshot method outlined in
the following articles:

-   [How to create a clone of a Cloud Block Storage
    volume](/support/how-to/create-a-clone-of-a-cloud-block-storage-volume) .
-   [Create and use Cloud Block Storage
    snapshots](/support/how-to/create-and-use-cloud-block-storage-snapshots)
{{< /accordion >}}

{{< accordion title="How can I make a copy of a Cloud Block Storage volume?" col="in" href="accordion19" >}}

You can create a copy of a Cloud Block Storage volume using two methods:

-   **Cloning method** (volume-to-volume)

This is a direct copy from your existing volume to a new blank volume on
another storage node. Volume data is copied directly between CBS storage
nodes over our high-speed local storage network. If you want to make quick
copies of your volume data and use them immediately after creation, we
recommend this method.

-   **Snapshot method** (volume-to-snapshot-to-volume)

This method requires the intermediate step of creating a volume
snapshot. First, create a snapshot from your existing volume, which
gets stored in Cloud Files. Second, create a new volume by using your
snapshot as the source. This process requires writing snapshot data in
and out of Cloud Files, so it can take longer than the Cloning Method.
If you don't require quick access to your copied volumes and want the
added durability and lower price of having your volume snapshot stored
in Cloud Files, we recommend this method. 
{{< /accordion >}}

{{< accordion title="Can I rename my volumes after they are created?" col="in" href="accordion20" >}}

Yes. You can rename an existing volume by using the Control Panel. You can
also change the name of a volume with the API by using the `cinder` rename command
to update the display-name of the volume.
{{< /accordion >}}

{{< accordion title="My snapshot seems to be taking a long time. Can I check the status of a snapshot?" col="in" href="accordion26" >}}

Yes. The Cloud Control Panel shows a completion-percentage of the snapshot's
progress. Additionally, by using the API, you can query the progress of a snapshot
creation using the ``snapshot-show`` command. The percentage complete value shows up
under the **os-extended-snapshot-attributes:progress** property. 
{{< /accordion >}}

{{< accordion title="Can I use Cloud Backup to back up my Cloud Block Storage volumes?" col="in" href="accordion21" >}}

Yes, you can. After you have attached and mounted your Cloud Block
Storage volume, you can add it to your current Cloud Backup Schedule.
Edit the Backup Schedule and browse to your volume's drive letter
or to individual files on the drive. Save your schedule as normal.
{{< /accordion >}}

{{< accordion title="What is Rackspace Cloud Block Storage?" col="in" href="accordion22" >}}

Rackspace Cloud Block Storage provides persistent block-level storage
volumes for use with Rackspace Cloud Servers. You can create volumes
and delete them independently of the Cloud Servers to which they are
attached. Rackspace Cloud Block Storage customers can create volumes
ranging from 50 GB for an SSD volume or 75 GB for a SATA volume up to 1
TB in size.
{{< /accordion >}}

{{< accordion title="How does Cloud Block Storage differ from the local storage available through Cloud Servers?" col="in" href="accordion23" >}}

Cloud Block Storage provides persistent data storage for Cloud Servers. Persistent storage can exist independent of your
server, even after you delete the server. The local storage bundled with Cloud Servers is ephemeral and exists only as long
as the Cloud Server exists. When you delete the server, you also delete the local storage.

We recommend that you [unmount and detach Cloud Block Storage](/support/how-to/detach-and-delete-cloud-block-storage-volumes)
volumes before deleting the server.
{{< /accordion >}}

{{< accordion title="What types of volumes are available?" col="in" href="accordion24" >}}

Cloud Block Storage offers the following optins:

- A lower cost-per-gigabyte option with standard performance-based on Serial Advanced Technology Attachment (SATA) disks.
- A high-performance option based on SSD (Solid State Drives) that provides storage with higher performance for quicker read/writes.

{{< /accordion >}}

### Security

{{< accordion title="What happens to my data when I delete a Cloud Block Storage volume?" col="in" href="accordion25" >}}

For your security, we overwrite the used portions of the physical disk
with zeroes before the deleted volume's disk space is
reallocated to the shared pool of disk resources. At this point, you
cannot recover the data, and other customers cannot see the data.
{{< /accordion >}}
