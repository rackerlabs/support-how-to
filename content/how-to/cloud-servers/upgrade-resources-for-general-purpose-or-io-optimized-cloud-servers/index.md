---
permalink: upgrade-resources-for-general-purpose-or-io-optimized-cloud-servers/
audit_date: '2020-10-12'
title: Upgrade resources for General Purpose or I/O optimized Cloud Servers
type: article
created_date: '2013-09-25'
created_by: Kyle Laffoon
last_modified_date: '2020-10-12'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

In the architecture of general purpose Cloud Servers and I/O-optimized
servers, you can change the size of your local system storage space using the
following methods: 

-   [Increase Available Storage with Cloud Block
    Storage](/support/how-to/upgrading-resources-for-general-purpose-or-io-optimized-cloud-servers)
-   [Create a new server with more
    resources](/support/how-to/upgrading-resources-for-general-purpose-or-io-optimized-cloud-servers)

**Note.** These instructions apply to General Purpose and I/O optimized
servers with local system disks only. The boot volume allows you to create a new server and to change _resource allocation_.

### Increase Available Storage

You can expand the available data storage space of your server by adding
Cloud Block Storage volumes. Cloud Block Storage volumes come in two
types: Serial Advanced Technology Attachment (SATA) for standard performance
and Solid State Drive (SSD) for high performance. For more information about Cloud Block Storage, see [Create and Attach a Cloud Block StorageVolume](/support/how-tocreate-and-attach-a-cloud-block-storage-volume).

### Create a new server with more resources

You can migrate your data to a new server with a larger allocation
of Random Access Memory (RAM), Virtual Central Processing Units (vCPUs), 
data disks, and network throughput if you require more capacity.  

**Note.** A saved image cannot be used to create a server with a smaller system disk allocation than the original server.

To migrate your data to a new server, perform the following steps:

1.  Create an image of your system disk. (See [Create an image or
    restore a Cloud Server from an
    image](/support/how-to/create-an-image-of-a-server-and-restore-a-server-from-a-saved-image) for
    more information.)
2.  Back up your data disk, either to a [Cloud Block Storage
    volume](/support/how-to/create-and-attach-a-cloud-block-storage-volume)
    or with [Cloud
    Backup](/support/how-to/cloud-backup).
    **Notes**:
    -   Consider your need to decide between these options.For information about the advantages of each, see [Best Practices for Backing Up Your Data: Cloud Block Storage versus CloudBackup](/support/how-to/best-practices-for-backing-up-your-data-cloud-block-storage-versus-cloud-backup).
    -    If you have **rsync** (Linux&reg;) or **xcopy/robocopy** (Microsoft Windows&reg;)
        installed on your server, you can use it to migrate data from
        your data disks after you have created the new server in step 3.

3.  Use the image of your system disk to create a new server with your preferred the
    configuration.  From the **control panel** select **Servers** then select **Create Server**.

    **Note**: To create the server, go to the **Image** section, and select the `image` from the **Saved** tab, not from the stock Rackspace&reg; images.

4.  Copy the data from your data disk backup to your new data disk.

5.  Delete the old server when you you are satisfied with your new server.

### Additional Resources

You can use Auto Scale to accomplish server resizing keeping your IP
address, and have it happen dynamically in response to load. For
details, see the Rackspace Auto Scale tip [How to use Auto Scale to
change the size of your General Purpose or
optimized servers](/support/how-to/rackspace-auto-scale-tips-and-how-tos).
