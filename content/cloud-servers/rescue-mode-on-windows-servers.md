---
node_id: 4812
title: Rescue Mode on Windows Cloud Servers
type: article
created_date: '2015-09-15'
created_by: Richard Hinojosa
last_modified_date: '2016-01-04'
last_modified_by: Nate Archer
product: Cloud Servers
product_url: cloud-servers
---

#### When should I use Rescue Mode?

If your Windows system has become non-bootable or is suffering from
critical system errors, you can use **Rescue Mode** to recover your
system data. These problems may be caused by file system corruption,
boot file corruption, or other configuration errors. Normally, if your
system encounters any problem during the boot process, you would boot in
to a maintenance mode environment known as Safe Mode that would allow
you to login with your root password and check for any errors.
Unfortunately, using Safe User Mode has its share of problems:

-   Most services such as networking are disabled. This would prevent
    you from copying your data to another server.
-   You would have to access your server using the Console, which is
    slower than using a traditional RDP login.

To avoid having to use Safe Mode, you can bring your server up in
**Rescue Mode** through the Rackspace Cloud Control Panel.

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

Rescue mode grants the Administrator user full access to your
non-bootable server&rsquo;s filesystem. You can use it to modify problems in
configuration files or to copy data from your Cloud Server to a remote
location. Rescue Mode through the Rackspace Cloud Control Panel is
similar to booting into safe mode with networking enabled.

**Getting your server into Rescue mode**

1.  Log in to the Cloud Control Panel, and click **Servers**.
2.  From your list of servers, click the Actions cog next to the server
    that you want to bring up in Rescue Mode and select **Enter Rescue
    Mode **from the drop-down menu.
    <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Windowsenter.png" width="201" height="400" />
3.  Read the text in the Rescue Mode pop-over and then click **Enter
    Rescue Mode**.
    <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/rescuepopup.png" width="600" height="327" />
4.  The temporary password is displayed. Copy the password to a safe
    location since you won't be able to see it again after closing
    this message.
5.  After copying the temporary password click **Dismiss Password**.

The server will start to enter Rescue Mode and the initial status should
be **Entering rescue mode**.


 <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/winrescue.png" width="600" height="327" />

When the Rescue Mode build is complete, the status will turn red and
display **Rescue**.


 <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/rescueactive.png" width="600" height="338" />

Notice that the rescue environment is limited to 24 hours. This means
that you will have one day to correct the problems on your server before
it automatically reverts to its original state.

#### Connecting to your server in Rescue Mode

You can now use a RDP client to connect to your server using the public
IP address and the temporary Administrator password to login to Rescue
Mode.


  <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/rdpclient.png" width="387" height="450" />

#### Troubleshooting your server in Rescue Mode

Before you can access the files on your server you'll need to mount the
server's file system. To do that you'll need to look at your partitions
to determine your file system's device. **NOTE: If you plan on using
chkdsk on this filesystem, DO NOT MOUNT the filesystem.**

Once you've logged into your server in Rescue Mode, Click on the
**Start** button and enter the search box **diskmgmt.msc**. Click
**diskmgmt **to start the program.


  <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/diskmgmt.png" width="320" height="400" />

Once the program is running, the output should resemble this:


 <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/diskmgmtoutput.png" width="600" height="373" />

This shows us the device and the size of the disk. Here is a description
of the different disks in the screenshot:

1.  Disk 0 is the rescue file system and is currently being used as C:\\
2.  Disk 1 is your system disk and will need to be set to online in
    order to work with your data.

Right click on the Disk 1 and select online.


  <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/disk1.png" width="417" height="260" />

Your system disk will be set as drive D:\\ and you will now be able to
access your data.


 <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/ddrive.png" width="600" height="374" />

#### **Exiting Rescue Mode**

Once you are done troubleshooting your system, you can exit Rescue Mode
by clicking the button labeled **Exit Rescue Mode** in the Rackspace
Cloud Control Panel on your Server Details page.

**Note:** Some versions of the Windows OS will modify the original disk
signature when mounted a secondary drive.  If you reboot, you'll
probably get a winload.exe error or a 0xc000000e error.  This occurs
with the BCD boot loader and not with the NTLDR loader.

