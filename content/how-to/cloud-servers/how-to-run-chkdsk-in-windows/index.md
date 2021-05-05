---
permalink: how-to-run-chkdsk-in-windows
audit_date: '2020-04-17'
title: 'How to run chkdsk in Windows'
type: article
created_date: '2020-04-14'
created_by: Dave Myers
last_modified_date: '2020-04-17'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

### What is `chkdsk`

The name of the `chkdsk` command comes from _check disk_. You can use this Microsoft&reg; Windows&reg; utility
to analyze the integrity and reliability of systems storage devices. Originally intended for hard drives,
you can use the command on any storage device that uses a filesystem and formatting. 

`chkdsk` performs the following activities:

- Checks the hard drive for potential failure due to read or write errors. 
- Repairs errors found by moving stored data to other areas of a drive, which are physical locations
  called sectors. 
- Attempts to salvage any bad or unreliable data stored in the sector and move it to another sector. The
  operation then marks the original sector as unusable and unavailable for the operating system.
- Scans the filesystem and analyzes the integrity of the files, the filesystem, and the file metadata on the drive.
- Fixes misaligned time stamps, file size data, and security flags on files on the drive.
- Conducts a complete scan of the drive, accessing and testing every sector of the hardware. Because this method
  is a more thorough check, you should perform it in a maintenance window. The operation divides a hard drive
  into logical sectors, which are defined areas of the drive where a certain defined quantity of data is stored.
  If sectors develop soft errors, the operation rewrites the data.

### Prerequisites

You must have an administrator account to use `chkdsk`.

### Invoke PowerShell or the command prompt

To launch Windows PowerShell&reg;, use the following instructions:

1. Press the **Windows Key + X** to bring up the **power users** menu in the **Start** menu. 
2. Select **PowerShell** from there or type **powershell** at the **Start** menu.
3. Right-click the PowerShell icon and launch it as administrator. 

To use the command prompt, perform the following steps:

1. Click the **Windows** key and type **cmd**.
2. Right-click the command prompt application and launch as administrator. 

### Invoke `chkdsk`

To invoke the utility in read-only mode, enter `chkdsk` followed by a space, and then the letter of the
drive you wish to examine. In this mode, you can use the utility safely on an active system because no
changes or repairs occur. `chkdsk` simply runs in diagnosic mode and displays the results when completed.
Because the utility makes no changes, you don't need administrator privileges. As a best practice, you
should run `chkdsk` in this mode before you add arguments to repair. To run `chkdsk` on system drive C:,
use `chkdsk c:`. 

### Commonly used parameters

The following `chkdsk` parameters are most commonly used:

-  **chkdsk C:**: Performs a read-only check, displays errors found, with no administrator privileges needed.
-  **chkdsk /f /v**: Runs after a reboot, and checks and fixes errors, in verbose mode.
-  **chkdsk /r**: Runs after reboot and assumes the functions of `/f`, relocates bad sectors.

### `chkdsk` operation and parameters

The following description of the operations and parameters might help you with your use of `chkdsk`:

**Syntax**: `chkdsk [drive:] [parameters]`

Checks a disk and displays a status report.

`chkdsk [volume[[path]filename]]] [/F] [/V] [/R] [/X] [/I] [/C] [/L[:size]] [/B] [/scan] [/spotfix]`

`chkdsk` has the following parameters:

- **volume**: Specifies the drive letter (followed by a colon), mount point, or volume name.

- **filename**: FAT/FAT32 only: Specifies the files to check for fragmentation.

- **/F**: Fixes errors on the disk.

- **/V**: On FAT/FAT32: Displays the full path and name of every file on the disk.
          On NTFS: Displays cleanup messages, if any.
                        
- **/R**: Locates bad sectors and recovers readable information (implies `/F`, when `/scan` not specified).

- **/L:size**: NTFS only:  Changes the log file size to the specified number of kilobytes.  If size is not
               specified, displays the current size.
                        
- **/X**: Forces the volume to dismount first, if necessary. All opened handles to the volume are invalid (implies `/F`).
                        
- **/I**: NTFS only: Performs a less vigorous check of index entries.

- **/C**: NTFS only: Skips checking of cycles within the folder structure.

- **/B**: NTFS only: Re-evaluates bad clusters on the volume (implies `/R`).

- **/scan**: NTFS only: Runs an online scan on the volume.

- **/forceofflinefix**: NTFS only: Must be used with `/scan`. Bypass all online repair. Queues all defects
                        for offline repair, which you run with `chkdsk /spotfix`.
                        
- **/perf**: NTFS only: Must be used with `/scan`. Uses more system resources to complete a scan as
             fast as possible. This might have a negative performance impact on other tasks running on the system.
                        
- **/spotfix**: NTFS only: Runs spot fixing on the volume.

- **/sdcleanup**: NTFS only: Garbage collect unneeded security descriptor data (implies /F).

- **/offlinescanandfix**: Runs an offline scan and fix on the volume.

- **/freeorphanedchains**: FAT/FAT32/exFAT only: Frees any orphaned cluster chains instead of recovering their contents.

- **/markclean**: FAT/FAT32/exFAT only: Marks the volume clean if no corruption was detected, even if `/F` not specified.
                  The `/I` or `/C` switch reduces the amount of time required to run `chkdsk` by skipping certain checks
                  of the volume.
