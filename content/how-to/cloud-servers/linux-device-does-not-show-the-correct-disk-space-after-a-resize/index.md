---
permalink: linux-device-does-not-show-the-correct-disk-space-after-a-resize
audit_date: '2020-03-24'
title: Linux device does not show the correct disk space after a resize
type: article
created_date: '2020-03-10'
created_by: John Garcia
last_modified_date: '2020-03-24'
last_modified_by: Chris Silva
product: Cloud Servers
product_url: cloud-servers
---

This article explains why a Linux&reg; root partition might appear unchanged after you resize a server
and how to correct the issue. 

### Disk configuration types

Some Linux images enable you to select one of the following disk configurations when you create a server:

-  **Automatic**: The default option that formats additional drive space and expands the root partition
to fill the entire system disk with a resize.  
-  **Manual**: The option that provides additional customization options for the disk and avoids additional boot process time.
This option leaves the root partition unchanged and leaves any additional space unformatted and unpartitioned.  

**Note:** Use the ``df -h``  command to view filesystem information, such as **Name**, **Size**, **Used Space**,
**Available Space**, **Use Percentage**, and **Mount**. 

#### Sample ``df -h`` command output

    [root@expanse ~]# df -h
    Filesystem      Size  Used Avail Use% Mounted on
    /dev/xvda1       40G  1.7G   36G   5% /

### The issue and the solution

With the manual disk configuration, the root partition shows as unchanged after the resize completes.
To correct this error, use the following command to perform a file system extension:

    resize2fs /dev/xvd<xx>

**NOTE**: You need to replace the `<xx>` portion of the command with the appropriate filesystem name, such as `/dev/xvda1`.

After the command completes, rerun the ``df -h`` command to confirm success. You should see output similar to the following:

    [root@expanse ~]# df -h
    Filesystem      Size  Used Avail Use% Mounted on
    /dev/xvda1       79G  1.7G   74G   3% /
    
