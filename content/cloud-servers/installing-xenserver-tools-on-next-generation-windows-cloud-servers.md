---
permalink: installing-xenserver-tools-on-next-generation-windows-cloud-servers/
node_id: 3232
title: Upgrade to XenServer Tools on migrated First Generation Cloud Windows servers
type: article
created_date: '2012-12-07'
created_by: Jered Heeschen
last_modified_date: '2016-03-07'
last_modified_by: Nate Archer
product: Cloud Servers
product_url: cloud-servers
---

An earlier version of the XenServer Tools software that is installed on First Generation Cloud Windows Servers has been found to cause server instability in rare cases.

To prevent any issues from occurring, follow the steps in this article to upgrade to XenServer Tools version 6.2 on First Generation servers that have been migrated to Next Generation.

We *strongly* recommend backing up any important data (and possibly taking a snapshot of your server) before attempting the installation, to be on the safe side.

### Upgrade, don't uninstall 

If your cloud server is affected by this issue, *do not uninstall* the existing Citrix XenServer Tools package. Instead, upgrade the package in place.  Uninstalling the existing XenServer Tools software will render your server inaccessible.

### Affected instances 

[nextcp]:https://mycloud.rackspace.com

This issue affects only First Generation servers that have been migrated to Next Generation.  First Generation Cloud Servers (which appear with asterisks next to their names in the [Cloud Control Panel][nextcp] are not affected.

To determine whether you need to upgrade to a newer version of XenServer Tools installed, check your current version in the Windows Control Panel, under **Programs and Features**.

If the listed version is earlier than 6.2 you should upgrade.

Note that the upgrade requires a reboot of your instance to complete the process.

### Upgrade to XenServer Tools 6.2

1. Download the version 6.2 of XenServer Tools by [clicking this link](http://8d268c176171c62fbd4b-7084e0c7b53cce27e6cc2142114e456e.r30.cf1.rackcdn.com/xstools-6.2.zip) or by pasting the following URL into a browser:

        http://8d268c176171c62fbd4b-7084e0c7b53cce27e6cc2142114e456e.r30.cf1.rackcdn.com/xstools-6.2.zip
    
2. Extract the XenServer Tools zip file to a directory of your choosing.

3. Navigate to the software directory and run the **xensetup.exe** program to launch the installer.

4. Change the target installation directory from the default (**Program Files (x86)**) to **C:\Program Files\Citrix\XenTools.** 

   Pointing the installer to the **C:\Program Files\Citrix\XenTools** directory ensures that the existing XenServer Tools files is overwritten.
   
5. After the installation is complete, reboot the server so that the change will take effect.

6. After the instance has rebooted, confirm that the upgrade was successful by checking the version of XenServer Tools in Programs and Features, as described earlier. The version should now be 6.2.


