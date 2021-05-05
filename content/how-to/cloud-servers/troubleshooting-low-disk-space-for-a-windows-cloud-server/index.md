---
permalink: troubleshooting-low-disk-space-for-a-windows-cloud-server
audit_date: '2018-08-16'
title: Troubleshooting low disk space for a Windows cloud server
type: article
created_date: '2018-08-16'
created_by: Cat lookabaugh
last_modified_date: '2018-10-25'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article is intended to help customers who have received a low disk space
warning for a Microsoft&reg; Windows&reg; cloud server by providing remediation
steps.

### Check Rackspace status

Before using the following steps, check
[https://status.rackspace.com](https://status.rackspace.com) for open issues
that might be impacting your server instance.

### Process overview

The following troubleshooting steps are described in detail in this article:

-  Log in to the device.
-  Check for open tickets.
-  Determine the amount of disk space available.
-  Clean up the C:\ drive.
-  Verify disk space after the cleanup.

#### Log in to the device

Log in to your server by opening a remote desktop connection.  For instructions,
see [Log in to your server via RDP](/support/how-to/log-in-to-your-server-via-rdp-windows/).

#### Check support tickets

Check your open support tickets for information about any incidents that might
be affecting the service. To check your open support tickets, log in to the
[Cloud Control Panel](https://login.rackspace.com/) and click **Tickets >
Ticket List** in the top navigation bar.

#### Determine the amount of disk space

To determine disk space, run the following steps:

1. Open the Windows File Explorer and click **This PC**.
2. Under **Devices and drives**, make note of the amount of free space.

#### Clean up the C:\ drive

If the low disk warning was for the C:\ drive, perform the following steps
to delete old or unnecessary system files and folders:

**Note:** To delete a file from the command line, change directory to the
file's location and type `del <file name>`.

1. Open a command prompt.
2. Change directory to `C:\temp`. If the directory exists, delete all files and
folders that are  older than 7 days.
3. Change directory to `C:\DRV`. If the directory exists, delete all files and
folders.
4. Change directory to `C:\WINDOWS\Installer\$PatchCache$\UnManaged`. If the
directory exists, delete all files and folders that are older than 60 days.
5. Change directory to `C:\WINDOWS\Installer\$PatchCache$\Managed`. If the
directory exists, delete all files and folders that are older than 60 days.
6. Change directory to `C:\Windows\Minidump\`. If the directory exists, delete
all `*.dmp` files that are older than 60 days.
7. Change directory to `C:\ProgramData\Microsoft\Windows\WER\ReportQueue\`. If
the directory exists, delete all files and folders.
8. Empty the Recycle Bin by right clicking on the desktop icon and clicking on
 **Empty**.

#### Verify disk space after the cleanup

To determine disk space, run the following steps:

1. Open the Windows File Explorer.
2. Under **Devices and drives**, make note of the amount of free space.

### Conclusion

If you've followed these troubleshooting steps  but disk space is still low,
contact the Rackspace Support team by creating a support ticket in the
[Cloud Control Panel](https://login.rackspace.com/) by clicking **Tickets > Create Ticket**
in the top navigation bar. To expedite the issue, include all of the
troubleshooting steps that you have already taken.
