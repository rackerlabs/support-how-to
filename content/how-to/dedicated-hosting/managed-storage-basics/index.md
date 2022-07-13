---
permalink: managed-storage-basics
audit_date: '2022-07-13
title: Managed Storage Basics
type: article
created_date: '2022-07-08'
created_by: Osvaldo Ambrosio
last_modified_date: '2022-07-13'
last_modified_by: Jorge Garcia
product: Dedicated Hosting
product_url: dedicated-hosting
---
The term storage (short for computer data storage) generally refers to any method of saving bits to a medium in a non-volatile way; this could be local hard drives, a SSD drive and so forth. At Rackspace, the term managed storage (often just shortened to storage) refers to a remotely-connected external storage device such as SAN, DAS, or NAS. This article describes storage offerings at Rackspace and how they relate to the supported Linux distributions in use, collectively referred to as the Managed Storage Offering at Rackspace.

### Terms and definitions
The 3 primary service offering categories:
- **DAS** - Acronym for *direct-attached storage*.
- **NAS** - Acronym for *network-attached storage*.
- **SAN** - Acronym for *storage area network*.

| Term | Definition |
| ------ | ------ |
| Multipath | Aggregating two (or more) separate paths of travel from the server to the storage device to appear as one block device to the OS for fault-tolerance. Generally this term is used to refer the native Linux kernel multipathing capabilities; however, it can also be used in a general context. |
| PowerPath | The EMC (vendor) proprietary, closed-source implementation of multipath aggregation technology; used in place of the native Linux kernel implementation to provide enhanced operation for EMC storage arrays. The underlying individual paths are still handled by the kernel, PowerPath creates it's own pseudo device and manages the path usage using several kernel modules emcp, emcpdm, emcpgpx, emcpmpx, emcpvlumd and emcpxcrypt. |
| iSCSI | Internet SCSI (Small Computer System Interface), an IP (Internet Protocol)-based storage networking standard that allows a remote LUN to appear as a block device in Linux. |
| Fibre Channel (FC) | High-speed network technology primarily used to connect SAN storage; most commonly used with fiber optic cables, it can also run on electrical wire. Most storage solutions at Rackspace use FCP (Fibre Channel Protocol); however, FCoE (Fibre Channel over Ethernet) is also popular. |
| SAS | Serial Attached SCSI, a cable attached directly from the back of the server to the storage device. |
| LUN | Logical Unit Number, a number used to identify a logical unit, which is a device addressed by the SCSI protocol or protocols that encapsulate SCSI, such as Fibre Channel or iSCSI. You can think of the LUN as the "storage object" presented to Linux from the storage device. |
| HBA | Host Bus Adapter, a glorified way of referring to a PCI card plugged into the server chassis that allows connecting to external storage. Depending on the solution, the same card could be used for DAS, SAN or NAS. It is incorrect to think of an HBA as only relating to one technology. |
| Block Device | This refers to storage which shows up in Linux as a typical /dev/sdX (Dell Chassis) or /dev/cXtXdXsX (HP chassis) object that reads/writes using blocks and is manipulated with tools like fdisk and/or parted. |
| Pseudo Device | Sometimes referred to as a metapath or metadevice, this is the aggregated object in Linux on which you can perform storage configuration tasks such as fdisk, parted, pvcreate, and so on. Used like a single disk drive. You do not manipulate the underlying paths (block devices); you manipulate this meta object. |

**NOTE:** The term *path* can be confusing between teams; the Storage team refers to the path as the distinct cable (fibre optic or otherwise), and multiple LUNs can traverse the same path. On the Linux side, path tends to be used interchangeably with block device and refers to each individual "as seen" path at the OS layer, abstracted away from the actual cabling. Please be aware of this difference in term across teams.
Many of the Linux man pages use path in the Linux context referring to the block device, this wiki is using path in the  Linux context.

### DAS
Much like the name suggests, the external storage device is directly attached to the server—no switching network is involved. The actual connection can be any of several technologies such as SAS or FC; it's not limited to one type of HBA or one type of cable. It is common, though, to think of DAS as using SAS cables because this is what was historically sold at Rackspace. From the Linux side, the storage appears as a Block Device to the OS for manipulation.

DAS is typically used for internal storage in personal computers and servers in the form of a hard disk drive (HDD) or solid-state drive (SSD) directly connected to the motherboard. External storage such as USB (Universal Serial Bus) devices and external hard drives are also considered to be direct-attached storage devices.

DAS can be used as file servers in small and medium-sized businesses (SMBs) and in data centers as private storage connected to dedicated servers. Larger enterprises sometimes use DAS with networked storage systems like SAN and NAS.

{{<image src="Picture1.png" width="450" title="DAS">}}

### NAS
The NAS unit, compared to DAS or SAN, differs in that it is a device that sits out on the network and works solely over "standard" networking topologies. The most common NAS sold at Rackspace is the NetApp brand, but others have been sold in the past and are still in use. The device can present storage to the server using classic NFS or CIFS network shares and mounted using those standard techniques, or as an iSCSI block device that is manipulated with fdisk/parted. The EMC VNX series array is also capable of block and file storage at the same time, as outlined above - the EMC Unified Array - while we are seeing a climb of sales and deployment in this device series, NetApp is still the most prevalent.

### SAN
The easiest way to think of SAN is taking a little bit of DAS and a little bit of NAS and combining the features. The server connects to a SAN switch and uses FCP or FCoE networking like a NAS, but it interfaces with the server more like a DAS and presents the block device to the server for manipulation. In short, a SAN is a DAS with a switched network added; it's possible for a customer to purchase a compatible solution as DAS (EMC VNX 5100, for example), then upgrade it to a SAN later as their storage needs grow.

### DAS vs NAS vs SAN
It's common to think of the differences in terms of the actual type of hardware sold here at Rackspace, either past or present; this is incorrect thinking. The same brand/type of hardware can be deployed in multiple ways, and in fact we do - the EMC VNX 5100, for example, is sold as either a DAS, SAN or NAS device. In modern storage offerings it's better to think of Block vs. File level presentation to the server, or a combination of Block and File presentation commonly referred to as Unified Storage (such as the "EMC Unified Array" VNX series) that can do both at once.

So what's the difference?

{{<image src="Picture2.png" width="450" title="DAS vs NAS vs SAN">}}

### Basic Command Line Operations
The two tools that most Linux techs use on a frequent basis are multipath and powermt - they're both being used for the same purpose at a high level, to query the underlying system about the pseudo devices and their individual paths. Each tool has a myriad of command line parameters to dig down, and be aware that some options perform changes. The tools not only display information, but allow manipulation of the underlying LUN configurations.

- **Native kernel multipath**: the command **multipath -ll** is by and large the most common usage. It displays the most useful information in a concise format. This command line tool is supplied by the **device-mapper-multipath package** (RPM) that is shipped with RHEL/CentOS.
- **EMC PowerPath**: the command **powermt display dev=all** is by and large the most common usage. It displays the most useful information in a concise format. This command line tool is provided by the **EMCpower package** (RPM) supplied by EMC.

Check the --help or man pages of these tools for extended usage depending on the situation and needed outcome. Typically any other usage is done with the advice of the Storage techs or in a targeted, known situation (such as releasing a LUN that's going to get deleted) one time only.

</br>

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).