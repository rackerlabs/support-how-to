---
permalink: how-to-run-chkdsk-in-windows/
audit_date:
title: 'How to Run chkdsk in Windows'
type: article
created_date: '2020-04-14'
created_by: Dave Myers
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

# What is 'chkdsk'

'chkdsk' Stands for Check Disk and used to analyze the integrety and reliability of a systems storage devices originally for hard drives but can be used on any storage device that uses filesystem and formatting. The 'chkdsk'  utility is used to check the hard drive for potential failure due to read/write errors. The utility can repair errors found by moving stored data to other areas of a drive. These are physical locations called Sectors. 'chkdsk' will attempt to slavage any data stored in the sector that is found to be bad or unreliable and move it to another and marks the original sector as unusable and unavailable for the OS to use. CHKDSK starts by scanning the file system and analyzing the integrity of the files, file system, and file metadata on the drive. 'chkdsk' also fixes misaligned time stamps, file size data, and security flags on files on the drive. CHKDSK can then conduct a complete scan of the drive, accessing and testing every sector of the hardware. This method is a much more thourogh check and recommended to be performed in a maintenance window. A hard drive is divided into logical sectors, defined areas of the drive where a certain defined quantity of data will be stored. Sectors can develop soft errors, in which case the data is rewritten.

### Prerequisites - Administrative Rights

Requires Administrator Account

### Initiate 'chkdsk' from Command Line (Legacy Windows) and Powershell (Most Common Method) for newer versions of Windows.

To launch the Windows PowerShell press the Windows Key + X and that will bring up the power users menu in the start menu. You can select Powershell from there or just type powershell at the start menu. You will need to right click the Powershell icon and launch it as Administrator. For command prompt, click the Windows key and type cmd and right click the Command Prompt app and launch as Administrator. To run chkdisk is the same for both powershell and command prompt. 

### Invoking chkdsk

Invoking  “chkdsk”, followed by a space, then the letter of the drive you wish to examine or repair will run in read only this option can be safely used on a active system as no changes or repairs occur. chkdsk simply runs in diagnosic mode and displays the results when completed, Administration privileges is not required for this mode. Best practice is to run chkdsk in this mode prior to adding arguments to repair. To run 'chkdsk' on system drive “C:”, the command would be “chkdsk c:” 

### Commonly used parameters

chkdsk C: (Read only check, displays errors found, no administrator privileges needed)
chkdsk /f /v (Runs after reboot, checks and fixes errors, verbose mode)
chkdsk /r (Runs after reboot assumes functions of /f, relocates bad sectors)

### 'chkdsk' Help:

chkdsk [Drive:] [parameters]
Checks a disk and displays a status report.
CHKDSK [volume[[path]filename]]] [/F] [/V] [/R] [/X] [/I] [/C] [/L[:size]] [/B] [/scan] [/spotfix]

  volume              Specifies the drive letter (followed by a colon),
                      mount point, or volume name.
  filename            FAT/FAT32 only: Specifies the files to check for
                      fragmentation.
  /F                  Fixes errors on the disk.
  /V                  On FAT/FAT32: Displays the full path and name of every
                      file on the disk.
                      On NTFS: Displays cleanup messages if any.
  /R                  Locates bad sectors and recovers readable information
                      (implies /F, when /scan not specified).
  /L:size             NTFS only:  Changes the log file size to the specified
                      number of kilobytes.  If size is not specified, displays
                      current size.
  /X                  Forces the volume to dismount first if necessary.
                      All opened handles to the volume would then be invalid
                      (implies /F).
  /I                  NTFS only: Performs a less vigorous check of index
                      entries.
  /C                  NTFS only: Skips checking of cycles within the folder
                      structure.
  /B                  NTFS only: Re-evaluates bad clusters on the volume
                      (implies /R)
  /scan               NTFS only: Runs an online scan on the volume
  /forceofflinefix    NTFS only: (Must be used with "/scan")
                      Bypass all online repair; all defects found
                      are queued for offline repair (i.e. "chkdsk /spotfix").
  /perf               NTFS only: (Must be used with "/scan")
                      Uses more system resources to complete a scan as fast as
                      possible. This may have a negative performance impact on
                      other tasks running on the system.
  /spotfix            NTFS only: Runs spot fixing on the volume
  /sdcleanup          NTFS only: Garbage collect unneeded security descriptor
                      data (implies /F).
  /offlinescanandfix  Runs an offline scan and fix on the volume.
  /freeorphanedchains FAT/FAT32/exFAT only: Frees any orphaned cluster chains
                      instead of recovering their contents.
  /markclean          FAT/FAT32/exFAT only: Marks the volume clean if nocorruption was detected, even if /F was not specified.
                      The /I or /C switch reduces the amount of time required to run Chkdsk by skipping certain checks of the volume.
