---
permalink: converting-your-server-from-pv-to-pvhvm
audit_date: '2018-03-05'
title: Why converting your server from PV to PVHVM is a good idea
type: article
article created_date: '2018-02-21'
created_by: Brian King
last_modified_date: '2020-02-04'
last_modified_by: Catherine Richardson
---

XenServer, which is the virtualization platform used by the Rackspace public cloud, supports multiple
virtualization modes. For better performance and security, convert your Rackspace cloud server from
the older paravirtualization (PV) mode to the newer paravirtualization with full hardware
virtualization (PVHVM) mode. Newer distributions, such as CentOS 7 and Ubuntu 16, are offered as only
PVHVM, so conversion is unnecessary.

In general, PVHVM offers better performance than PV, especially for disk and network I/O operations.

You can convert the following operating systems from PV to PVHVM:

- Ubuntu 12/14
- RHEL/CentOS 6
- Debian 7

If your server does not support this conversion, we recommend that you deploy a new server from an existing base image and
migrate your data to the new server.

The following sections describe some advantages and disadvantages of PVHVM.

### Performance

PVHVM performance considerations include the following:

-  Network and disk I/O are faster with PVHVM images because Quick Emulator (QEMU) emulation is bypassed.
-  PVHVM requires a bit more memory overhead than PV.
-  Work-optimized Rackspace servers, such as Compute, I/O, and Memory, require PVHVM images.

If you try to create a work-optimized server by using a non-PVHVM image, the following error message displays:

`Image cannot be built with provided flavor.`

### File system

File system considerations include the following items:

-  The lower-performance ext3 file system is used for all PV Linux images.
-  The higher-performance ext4 file system is used on PVHVM Linux images.

### Boot loader

Boot loader considerations include the following items:

-  PV images boot by using pygrub.
-  PVHVM images boot by using the boot loader in the master boot record of the operating system.

### Disk configuration

You can use automatic disk configuration with PV images but not with PVHVM images.

If you try to use automatic disk configurtion with a PVHVM image, the following error message displays:

`ERROR: Requested image $UUID has automatic disk resize disabled. (HTTP 400)`
