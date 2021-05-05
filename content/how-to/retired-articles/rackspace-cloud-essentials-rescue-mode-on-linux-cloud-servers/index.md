---
permalink: rackspace-cloud-essentials-rescue-mode-on-linux-cloud-servers
audit_date: '2018-10-25'
title: Rackspace Cloud Essentials - Rescue Mode on Linux Cloud Servers
type: article
created_date: '2013-02-11'
created_by: Renee Rendon
last_modified_date: '2018-10-26'
last_modified_by: Kate Dougherty
---

If your Linux system has become non-bootable or is suffering from critical system errors, you can use rescue mode to recover your system data. These problems might be caused by file system corruption, boot file corruption, or other configuration errors. Normally, if your system encounters any problem during the boot process, you would boot in to a maintenance-mode environment known as **Single User Mode** that would enable you to log in with your root password and check for any errors.

Using Single User Mode can cause the following issues:

- Your system is read-only and you cannot make corrective changes. Most services,
such as networking, are disabled. This prevents you from copying your data to
another server.

- You would have to access your server using the Console, which is slower than
using a traditional Secure Shell (SSH) login.

To avoid having to use single user mode, start your server up in rescue mode by
using the Cloud Control Panel.

### Put your server into rescue mode

Rescue mode grants the root user full access to your non-bootable server's
filesystem. You can use it to modify problems in configuration files or to copy
data from your Cloud Server to a remote location. Using Rescue Mode through the
Cloud Control Panel is similar to booting into single-user mode with networking
enabled.

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).

2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.

3. Select **Servers > Cloud Servers**.

4. Click the gear menu next to the server and select **Enter Rescue Mode**.

5. Read the information in the pop-up window, then press **Enter Rescue Mode**.

6. Copy the temporary password and click **Dismiss Password**.

   **Note:** The green bar to the left of the server name will turn yellow
   during the process of building into Rescue Mode and then red when the process
   has completed. This may take several minutes.

7. After your server is in rescue mode, use an SSH client to connect to your
   server using the public IP address and the temporary root password to log in
   to rescue mode.

### Troubleshoot your server in rescue mode

Before you can access the files on your server, you must mount the server's file
system. To do that, look at your partitions to determine your file system's device.

**Note:** If you plan to use `fsck` on this filesystem, **do not mount** the filesystem.

1. Log into your server in rescue mode and run the following command:

        fdisk -l

    The output shows different disk names. The disk entry displays the device and size
    of the disk. For example: `Disk /dev/xvdb1: 20 GiB`

    The first block, **/dev/xvdb1**, with size 20 GiB, is the rescue mode file system.

    The second block, **/dev/xvda1**, with size of 20 GiB, is the server's file system.
    The size will vary depending on the size of your server.

    If a third block is displayed, it is the swap volume. **Note:** This only
    occurs only on older cloud servers.

2. When you've identified the block for your server's file system, note the part
   after `disk` that looks like a file path. In the example above, the device
   is **/dev/xvda1**. The device varies depending on the distribution image
   used to build your server. Now that you know your file system's device, you
   can assign it a directory and mount it for access. Plug your file system device
   into the following command in place of **/dev/diskdevice**.

        mount /dev/diskdevice /mnt

3. For example, for **/dev/sda1** the command would be:

        mount /dev/xvda1 /mnt

4. Now you can access your files through the **/mnt** directory. Just remember
   that you need to put `/mnt` in front of the usual paths you'd use to get to
   files. For example, if you have a problem in the **/etc/fstab** file you need
   to fix, you'd actually access that file at:

        /mnt/etc/fstab

5. If you just edited **/etc/fstab** while in rescue mode, you would change the
   `fstab` for the rescue mode file system, not your normal file system.

### Exit rescue mode

Once you are done troubleshooting your system, click **Exit Rescue Mode** in the
Cloud Control Panel on your **Server Details** page.
