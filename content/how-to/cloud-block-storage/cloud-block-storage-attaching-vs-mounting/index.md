---
permalink: cloud-block-storage-attaching-vs-mounting/
audit_date: '2021-02-15'
title: Attaching versus mounting in Cloud Block Storage
type: article
created_date: '2012-10-22'
created_by: David Hendler
last_modified_date: '2021-02-15'
last_modified_by: Rose Morales
product: Cloud Block Storage
product_url: cloud-block-storage
---

In Cloud Block Storage, you both attach and mount a volume to a server. The
following information explains these concepts:

For more information about how to mount your volume, see [Create and attach a Cloud Block Storage volume](/support/how-to/create-and-attach-a-cloud-block-storage-volume/)

**Attach**: When you attach a Cloud Block Storage Volume to a server, a
logical connection is created from a Cloud Block Storage node to the
hypervisor hosting your cloud server. This process happens over a network link
via the iSCSI protocol and exposes the new volume as a virtual device
to the host. To your Cloud Server, the volume appears as a new raw
storage device. You can attach a Cloud Block Storage Volume through
either the API or the [Cloud Control Panel](https://login.rackspace.com/).

**Mount**: Mounting is the process in which a user instructs the operating
system to map the directory structure logically to a physical storage device.
You can mount your volume after you attach and format it for use by a
server's operating system. You can only mount a volume through the computer's
operating system.

For more information about how to mount your volume, see [Prepare your volume](/support/how-to/prepare-your-cloud-block-storage-volume).
