---
permalink: cloud-block-storage-overview/
audit_date: '2021-02-12'
title: Overview of Cloud Block Storage
type: article
created_date: '2012-10-22'
created_by: Rackspace Support
last_modified_date: '2021-02-12'
last_modified_by: Rose Morales
product: Cloud Block Storage
product_url: cloud-block-storage
---

Rackspace Cloud Block Storage is a block-level storage solution that enables you
to add additional storage capacity to your Rackspace Next Generation Cloud
Servers. This means that you can add additional storage drives to your server
without increasing your server's overall size or capacity or by
provisioning new ones. After you mount and format your drive, you can use it just
like a regular hard drive attached to your server. Or you can detach your block
storage volume from one server and attach it to another. Or you can delete your
server, keeping your data intact and ready for the next time you need it. And
because you're leveraging the power of the Cloud, you only pay for what you use.
Cloud Block Storage offers you power and ease with the kind of storage that
works for you. For information on Cloud Block Storage, see
[Best Practices for Backing Up Your Data: Cloud Block Storage versus Cloud Backup](/support/how-to/best-practices-for-backing-up-your-data-cloud-block-storage-versus-cloud-backup).

You can attach the folowing types of volumes to your server:

- A standard speed option for customers who just need additional storage on
    their cloud server.
- A high-performance option for databases and high-performance applications,
    leveraging solid-state drives for speed.

Both types are priced per gigabyte (GB) of storage and not by input/output
operations per second (IOPS), which can be difficult to predict or control.

### Uses of Cloud Block Storage

Cloud Block Storage has the following use cases:

- Mount a drive to a server to scale storage without paying for more compute
    capability.
- Add standard speed storage for customers who just need additional storage on
    their server.
- Add high-performance storage for databases and high-performance applications,
    leveraging solid-state drives for speed.
- Detach your block storage and delete your server, keeping your data available
    and your costs down because you pay for only what you use.
- Re-attach your block storage volume and move data from one server to another.

### Access Cloud Block Storage

Access Cloud Block Storage through either the [Cloud Control Panel](https://login.rackspace.com/)
GUI interface or the API. This product
introduction walks you through Cloud Control Panel access. If you prefer to
interact with Cloud Block Storage programmatically, see the
[Developer Guide](https://docs.rackspace.com/docs/cloud-block-storage/v1/developer-guide/).

### Limits of Cloud Block Storage

Cloud Block Storage has the following limits:

- 50 GB to 1 TB for SSD volumes.
- 75 GB to 1 TB for SATA volumes.
- 14 volumes max per server: Tis is operating system (OS) dependent.
- 10 TB of SATA and 10 TB of SSD in each region: This is the default for all
    new customers. Customers can request limit increases if they need more capacity
    beyond the default limits. Contact Rackspace Support, your
    Account Manager, or your Service Delivery Manager for more information.

### Cloud Block Storage terminology

You might run across some unfamiliar terms in this article. The
following list gives definitions for common Cloud Block Storage terms:

- **Instance**: An instance is a virtual machine that runs inside the cloud.
- **Instance type**: An instance type describes the compute, memory, and storage
    capacity of Nova compute instances. In layman's terms, this is the size
    (in terms of vCPUs, RAM, and so forth) of the virtual server you are launching.
- **Region**: The region is the location of your server and storage volumes. You should create
    your block storage volumes in the same data center as your server to avoid
    bandwidth fees.
- **Snapshot**: A snapshot is a point in time copy of the data contained in a volume.
- **Volume**: A volume is a detachable block storage device. You can think of it
    as a USB hard drive. You can attach it to only one instance at a time.
- **Volume type**: The volume type is the type of a block storage volume. There
    are two types: Serial Advanced Technology Attachment (SATA) for standard performance and Solid-State Drive (SSD) for high performance.

### Cloud Block Storage product overview contents

In this product overview, you learn how to perform the following tasks:

- [Create and attach a volume](/support/how-to/create-and-attach-a-cloud-block-storage-volume).
- [Prepare your volume for use with a server (Linux or Windows)](/support/how-to/create-and-attach-a-cloud-block-storage-volume).
- [Take snapshots of your volume](/support/how-to/create-and-use-cloud-block-storage-snapshots).
- [Detach and delete a volume](/support/how-to/detach-and-delete-cloud-block-storage-volumes).
- [Attach a Cloud Block Storage volume to an OnMetal server](/support/how-to/attach-a-cloud-block-storage-volume-to-an-onmetal-server-through-the-cloud-control-panel/).

Let's get started and [create your first volume](/support/how-to/create-and-attach-a-cloud-block-storage-volume).
