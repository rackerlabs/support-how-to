---
permalink: mount-a-partition-and-chroot-into-your-primary-file-system-from-rescue-mode
audit_date: '2021-05-14'
title: Mount a partition and chroot into your primary file-system from rescue mode
type: article
created_date: '2019-01-17'
created_by: Rackspace Community
last_modified_date: '2021-05-14'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

This article shows you how to mount a partition and use chroot to access your
primary file system from rescue mode.

**Note:**This article assumes that you are using XenServer&reg;.

### Begin an investigation of a server in Rescue Mode

Use the following steps to begin an investigation of a server in rescue mode:

1. Determine what your main partition is by running the following command:

       fdisk -l

   Depending on the version of the base image that you have built from,
   the partition is either `sdb1` (Xen&reg; Classic) or`xvdb1` (XenServer&reg;).
   
   The command `fdisk -l`, chooses the largest partition. 

For more information on *Rescue Mode* refer to the following article:
[Rescue Mode](https://docs.rackspace.com/support/how-to/rescue-mode/)

2. Mount the partition by running the following command, replacing `xvdb1` if necessary:

       mount /dev/xvdb1 /mnt

   When you navigate to the `/mnt` directory, you should see your file system.

   In some cases you might need to install a new kernel, remove a bad package, or use `xvdb1` as the root (`/`) directory.

### Use `xvdb1` as the root directory

Use the following steps to set `xvdb1` as the `/` directory:

1. Mount the necessary file system directories by running the following commands:

       mount -t proc none /mnt/proc
       mount --rbind /sys /mnt/sys
       mount --rbind /dev /mnt/dev

2. Set up networking for your session on which you used the chroot 
   operation by running the following commands:

       ln -s /etc/resolv.conf /mnt/etc/resolv.conf

       chroot /mnt /bin/bash

You have successfully mounted the file system is now mounted as the root directory.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 


