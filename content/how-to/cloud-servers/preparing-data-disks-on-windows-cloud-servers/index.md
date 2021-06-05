---
permalink: preparing-data-disks-on-windows-cloud-servers
audit_date: '2021-06-04'
title: Prepare data disks on Windows 2016, 2019 and 2012 Cloud Servers
type: article
created_date: '2013-10-31'
created_by: Jered Heeschen
last_modified_date: '2021-06-04'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

The data disks attached to some Cloud Servers flavors, specifically I/O flavors,
are not formatted when created. Before you can use them to hold data on Windows,
they have to be formatted and assigned a drive letter each.

1. Click the **Server Manager** button on the taskbar.

2. Navigate to the list of the system's attached storage volumes. Select **File
      and Storage Services** in the left panel, then select **Disks**.

3. For each unassigned disk in the list, delete any existing partitions.
      Rright-click the drive and select **Bring Online**. When the disk is
      online, right-click the disk and select **Reset Disk** to ensure all disk
      space is available for your use.

4. For each unassigned disk in the list, run the New Volume Wizard to format it
   as NTFS and assign it a drive letter. Right-click the disk and select **New
   Volume**.

5. Open the Computer window to view your server's active disks and confirm the
   new volume or volumes are available.

Now you can install any required software to the appropriate drives.
