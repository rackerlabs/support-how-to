---
permalink: prepare-data-disks-on-windows-2012-2016-and-2019-cloud-servers
audit_date: '2021-06-04'
title: Prepare data disks on Windows 2012, 2016, and 2019 Cloud Servers
type: article
created_date: '2013-10-31'
created_by: Jered Heeschen
last_modified_date: '2021-06-04'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

The system does not format data disks attached to some Cloud Servers flavors,
specifically I/O flavors, when you create them. Before you can use them to hold
data on Windows&reg;, you need to format them and assign a drive letter to each
disk.

1. Click the **Server Manager** button on the taskbar.

2. Navigate to the list of the attached storage volumes. Select **File
      and Storage Services** in the left panel, and select **Disks**.

3. For each unassigned disk in the list, delete any existing partitions.
      Right-click the drive and select **Bring Online**. When the disk is
      online, right-click the disk and select **Reset Disk** to ensure all disk
      space is available for your use.

4. For each unassigned disk in the list, run the **New Volume Wizard** to format it
   as NTFS and assign it a drive letter. Right-click the disk and select **New
   Volume**.

5. Open the **Computer** window to view your server's active disks and confirm the
   new volume or volumes are available.

Now, you can install software to the appropriate drives.
