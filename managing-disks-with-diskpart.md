---
permalink: managing-disks-with-diskpart/
audit_date:
title: 'Managing Disks with DiskPart'
type: article
created_date: '2020-03-19'
created_by: Derek Benson
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

## Managing Disks with DiskPart

**Warning:** The commands available in the DiskPart utility have the potential to cause data loss. Proceed with caution.

### Accessing DiskPart

**Note:** A user account with administrator privileges is required to use diskpart

1. Open an elevated (Administrator) PowerShell window using one of the following methods:
    * Right click the start button and click **Windows PowerShell (Admin)**.
    * Using the search function, type **PowerShell**. Right click **Windows PowerShell** under **Apps** in the results and choose **Run as Administrator**.
2. In the PowerShell window, type "**diskpart**" and press enter/return.
    * If done correctly, you should have a prompt that looks like this: **DISKPART>**

**Note:** DiskPart can be accessed via Command Prompt as well if desired. Command Prompt can be accessed by running the command ```cmd```.

### Listing disk and partition details

#### Disk Information

* From the DiskPart prompt mentioned above, type "**list disk**" and press enter/return.
* This command returns the **Disk number**, **Status**, **Total Size**, **Free Space**, whether it is a **Dynamic Disk**, and if the partition table is **GPT**.

#### Partition Information

* From the DiskPart prompt mentioned above, type "**select disk #**" replacing the '**#**' symbol with the number of the disk found in the **Disk Information** section.
Once a disk is selected, type "**list partition**" and press enter/return.
* This command returns the **Partition number**, **Type**, **Size**, and **Offset** from the start of the disk.

**Important:** The **Primary** partition is typically where user and OS data is stored. Partitions with the types **Recovery**, **System**, and **Reserved** are typically created by the system and should not be altered.

### Important DiskPart Commands

The following commands are commonly used to perform tasks within DiskPart. 

**Note:** These will run on the selected **disk/partition** as described above.

* Create
    - Used to create a **partition**, a **volume**, or a **virtual hard disk (VHD)**. 
    - Example commands:

    ```create partition```

    ```create volume```

    ```create vdisk```

* Delete
    - Used to delete a **partition** or **volume** *(Running this will cause all data on the partition or volume to be lost)*. 
    - Example commands:

    ```delete disk```

    ```delete partition```

    ```delete volume```

* Format
    - Used to format a **partition** or **volume** using the specified file system *(Running this will cause all data on the partition or volume to be lost)*.
    - Example command:

    ```format d:```

* Clean
    - Removes any formatting on the **partition** or **volume** *(Running this will cause all data on the partition or volume to be lost)*.
    - Example commands:

    ```clean```

    ```clean all```

* Convert
    - Used to convert a **FAT** or **FAT32** partition or volume to **NTFS** while keeping data intact.
    - Example command:

    ```convert d: /fs:ntfs /v```

* Online
    - Sets a disk's status to **ONLINE**.
    - Example commands:

    ```online disk```

    ```online volume```

* Offline
    - Sets a disk's status to **OFFLINE**.
    - Example commands:

    ```offline disk```

    ```offline volume```

* Exit
    - Allows for exiting diskpart and returning to a powershell prompt.
    - Example:

    ```exit```
