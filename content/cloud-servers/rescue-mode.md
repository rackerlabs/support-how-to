---
node_id: 1358
title: Rescue Mode
type: article
created_date: '2012-03-27'
created_by: Rackspace Support
last_modified_date: '2015-12-31'
last_modified_by: Kyle Laffoon
product: Cloud Servers
product_url: cloud-servers
---

### Previous section

[Getting Started with Cloud
Servers](/how-to/create-a-cloud-server)



If your Linux system has become non-bootable or is suffering from
critical system errors, you can use **Rescue Mode** to recover your
system data. These problems may be caused by file system corruption,
boot file corruption, or other configuration errors. Normally, if your
system encounters any problem during the boot process, you would boot in
to a maintenance mode environment known as Single User Mode that would
allow you to login with your root password and check for any errors.
Unfortunately, using Single User Mode has its share of problems:

-   **Your system is read-only and you cannot make corrective changes.**
-   Most services such as networking are disabled. This would prevent
    you from copying your data to another server.
-   You would have to access your server using the Console, which is
    slower than using a traditional SSH login.

To avoid having to use Single User Mode, you can bring your server up
in **Rescue Mode** through the Rackspace Cloud Control Panel.

Contents
--------

-   [What is Rescue mode?](#What_is_Rescue_mode)
-   [Getting your server into Rescue
    mode](#Getting_your_server_into_Rescue_mode)
-   [Connecting to your server in Rescue
    Mode](#Connecting_to_your_server_in_Rescue_Mode)
-   [Troubleshooting your server in Rescue
    Mode](#Troubleshooting_your_server_in_Rescue_Mode)
-   [Exiting Rescue Mode](#Exiting_Rescue_Mode)

#### **What is Rescue mode?**

Rescue mode grants the root user full access to your non-bootable
server&rsquo;s filesystem. You can use it to modify problems in configuration
files or to copy data from your Cloud Server to a remote location.
Rescue Mode through the Rackspace Cloud Control Panel is similar to
booting into single-user mode with networking enabled.

**Getting your server into Rescue mode**

1.  Log in to the [Cloud Control Panel](https://mycloud.rackspace.com/),
    and click **Servers**.
2.  From your list of servers, click the Actions cog next to the server
    that you want to bring up in Rescue Mode and select **Enter Rescue
    Mode **from the drop-down menu.

    <img src="http://www.rackspace.com/knowledge_center/sites/default/files/field/image/Enter%20Rescue%20Mode%20in%20Action%20Cog.png" width="203" height="280" />

3.  Read the text in the Rescue Mode pop-over and then click **Enter
    Rescue Mode**.

    <img src="http://www.rackspace.com/knowledge_center/sites/default/files/field/image/Enter%20Rescue%20Mode.png" width="410" height="237" />

4.  The temporary password is displayed. Copy the password to a safe
    location since you won't be able to see it again after closing
    this message.

    <img src="http://www.rackspace.com/knowledge_center/sites/default/files/field/image/Rescue%20Mode%20Temporary%20Password_2.png" width="382" height="207" />

5.  After copying the temporary password click **Dismiss Password**.

The server will start to enter Rescue Mode and display an orange status
field next to the server name. The initial status should be **Preparing
Rescue**.

<img src="http://www.rackspace.com/knowledge_center/sites/default/files/field/image/Preparing%20Rescue%20Mode.png" width="388" height="251" />

When the Rescue Mode build is complete, the status will turn red and
display **Rescue**.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/server_in_rescue.png" width="600" />

Notice that the rescue environment is limited to 24 hours. This means
that you will have one day to correct the problems on your server before
it automatically reverts to its original state.

#### Connecting to your server in Rescue Mode

You can now use an SSH client to connect to your server using the public
IP address and the temporary root password to login to Rescue Mode.

<img src="http://c579335.r35.cf2.rackcdn.com/RootAtRescue.png" alt="RootAtRescue.png" width="600" />

#### Troubleshooting your server in Rescue Mode

Before you can access the files on your server you'll need to mount the
server's file system. To do that you'll need to look at your partitions
to determine your file system's device. **NOTE: If you plan on using
fsck on this filesystem, DO NOT MOUNT the fiesystem.**

After you've logged into your server in Rescue Mode, run the command:

    fdisk -l

You'll get output that looks similar to what is below:

<img src="http://c579335.r35.cf2.rackcdn.com/fdisk.png" alt="fdisk.png" width="600" />

Look at the different disk names that are found. A disk entry looks
like:

    Disk /dev/sdb1: 2147 MB

This shows us the device and the size of the disk. Here is a description
of the different disks in the screenshot:

1.  The first block, the one with the size of about 2GB, is the rescue
    mode filesystem.
2.  The second block, the one in the screenshot with a size of 10.2GB,
    is the server's file system. Its size will be different depending on
    the size of your server.
3.  The third block will be your swap space.

Once you've identified the block for your server's file system check out
the part after "*Disk*" that looks like a file path. In the example
above, the device is:

    /dev/sda1

It can be different depending on the distribution image used to build
your server.  Now that you know your file system's device you can assign
it a directory and mount it for access. Plug your file system device
into the following command in place of "/dev/diskdevice":

    mount /dev/diskdevice /mnt

For example, for /dev/sda1 the command would be:

`mount /dev/sda1 /mnt`

Now you can access your files through the "/mnt" directory. Just
remember that you'll need to put "/mnt" in front of the usual paths
you'd use to get to files. For example, if you have a problem in the
/etc/fstab file you need to fix, you'd actually access that file at:

    /mnt/etc/fstab

If you were to just edit "/etc/fstab" while in rescue mode you'd change
the fstab for the rescue mode file system, not your normal file system.

#### **Exiting Rescue Mode**

After you are done troubleshooting your system, you can exit Rescue Mode
by clicking the button labeled **Exit Rescue Mode** in the Rackspace
Cloud Control Panel on your Server Details page.

Now that we've seen different ways to connect to a Linux Cloud Server,
we're going to cover some important security concepts for keeping them
safe, starting with a discussion about [Host Key
Fingerprints](/how-to/rackspace-cloud-essentials-checking-a-server-s-ssh-host-fingerprint-with-the-web-console).



### Next section

[Rebuild a Cloud
Server](/how-to/rebuild-a-cloud-server)

