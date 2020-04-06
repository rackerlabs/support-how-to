---
permalink: expanding-and-shrinking-volumes-with-disk-management/
audit_date:
title: 'Expanding and Shrinking Volumes with Disk Management'
type: article
created_date: '2020-04-06'
created_by: Derek Benson
last_modified_date: 
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

## Expanding and Shrinking Volumes with Disk Management

### Accessing Disk Management

1. Log onto the server connected to the disk of the volume to be expanded.

2. To access **Disk Management**: 

    * Click **Start > Run**.
    * Enter **diskmgmt.msc** in the box and click **OK**.
    * Alternatively, you can use Windows search to search for **Disk Management**.

### Expanding a Volume

**Note:** The additional disk space must be adjacent to the volume you want to expand.

1. Locate the volume you would like to expand using the list. Alternatively, use the graphical version at the bottom.

2. Right-click the volume and choose **Extend Volume**.

3. The **Extend Volume Wizard** will open that will guide you through the expand process.

4. On the **Welcome** screen, click **Next**.

5. Select the disk that contains the additional space you'd like to add to the volume in the available column and Click **Add**.

6. Select the amound of space you would like to add to the volume (in megabytes) up to the amount listed next to **Maximum available space in MB**.

7. Click **Next** to proceed and then Click **Finish** to finalize the changes shown on the confirmation page.

### Shrinking a Volume

1. Locate the volume you would like to shrink using the list. Alternatively, use the graphical version at the bottom.

2. Right-click the volume and choose **Shrink Volume**.

3. Select the amound of space you would like to remove from the volume (in megabytes) up to the amount listed next to **Size of available shrink space in MB**.

4. The total size of the disk after the shrink completes is listed next to **Total size after shrink in MB**.

5. Click **Shrink** to finalize the changes shown.
