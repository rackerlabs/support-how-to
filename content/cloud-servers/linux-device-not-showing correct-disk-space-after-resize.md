---
permalink: linux-device-not-showing correct-disk-space-after-resize/
audit_date:
title: Linux - Device Not Showing Correct Disk Space After Resize
type: article
created_date: '2020-03-10'
created_by: John Garcia
last_modified_date: 
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

This article explains the cause and how to resolve the issue of a Linux Root Partition appearing unchanged after completing a server resize. 

# Disk Configuration Types
Some Linux Images allowed the selection between two types of Disk Configuration when creating a server. 
  *Automatic* is the default option that will format any additional drive space and the root partition will be expanded to fill entire system disk with a resize.  
  *Manual* allows for additional customization options of their disk and the avoidance of addtional boot process time.  This option will leave the root partition unchanged and any additional space is left unformatted and unpartitioned.  

**Note:** Use the **df -h**  command to view filesystem information (Name, Size, Used Space, Available Space, Use Percentage, Mount). 

## Sample Output for df -h Command
```[root@expanse ~]# df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/xvda1       40G  1.7G   36G   5% /
```

With the *Manual* Disk Configuration, the root partition will show as being unchanged after resize has been completed.  This can be corrected by performaing a file system extension with the following command:

**resize2fs /dev/xvd(xx)**

Once completed, re-run the df -h Command to confirm.

```[root@expanse ~]# df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/xvda1       79G  1.7G   74G   3% /
```
