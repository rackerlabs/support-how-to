---
permalink: expand-and-shrink-volumes-with-disk-management
audit_date: '2020-04-14'
title: 'Expand and shrink volumes with Disk Management'
type: article
created_date: '2020-04-06'
created_by: Derek Benson
last_modified_date: '2020-04-14'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article shows you how to expand or shrink a disk volume by using Disk Management on Windows&reg; servers.

### Access Disk Management

1. Log in to the server connected to the disk of the volume you want to expand.

2. Click **Start > Run**.

3. Enter **diskmgmt.msc** in the box and click **OK** or use Windows search to search for **Disk Management**.

### Expand a volume

**Note:** The additional disk space must be adjacent to the volume you want to expand.

1. Locate the volume you want to expand in the list. Alternatively, use the graphical version at the bottom of the window.

2. Right-click the volume and choose **Extend Volume** to open the **Extend Volume Wizard**.

3. On the **Welcome** screen, click **Next**.

4. Select the disk that contains the additional space you'd like to add to the volume in the **Available** column and click **Add**.

5. Select the amount of space, in megabytes, you would like to add to the volume. You can choose an amount of space to add up to the amount listed next to **Maximum available space in MB**.

6. Click **Next** to proceed.

7. Click **Finish** to finalize the changes shown on the confirmation page.

### Shrink a volume

1. Locate the volume you want to shrink in the list. Alternatively, use the graphical version at the bottom of the window.

2. Right-click the volume and choose **Shrink Volume**.

3. Select the amount of space, in megabytes, you'd like to remove from the volume. You can choose an amount of space up to the amount listed next to **Size of available shrink space in MB**.

4. Click **Shrink** to finalize the changes shown.  The total size of the disk after the shrink completes is listed next to **Total size after shrink in MB**.
