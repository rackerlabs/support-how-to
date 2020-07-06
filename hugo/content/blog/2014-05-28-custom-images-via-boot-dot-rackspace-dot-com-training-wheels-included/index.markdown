---
layout: post
title: 'Custom images via boot.rackspace.com:Training wheels included'
date: '2014-05-28'
comments: true
author: Mike Metral
published: true
categories:
  - Cloud Servers
  - OpenStack
---

With the recent announcement of
[Cloud Images](http://www.rackspace.com/cloud/images/), creating custom images
for the [Rackspace Public Cloud](http://www.rackspace.com/cloud/servers)
is now a functionality users have at their disposal.

To simplify the custom image creation process, Rackspace released
[boot.rackspace.com](http://boot.rackspace.com), a collection of iPXE scripts
that allows you to rapidly network boot Operating Systems, Utilities and other
tools very easily. It's especially useful for remote access environments when
you don't want to utilize remote attached CD's in a Dell DRAC, HP iLO or some other
type of remote tool. It's especially awesome for bootstrapping your own custom
installation on a Cloud Server!

<!-- more -->

In this post, I walk you through each of the steps required to get you up &
running a custom version of __Ubuntu 12.04__ via boot.rackspace.com.

### Assumptions

* You have an existing [Public Cloud](http://mycloud.rackspace.com) account.
* [python-novaclient](http://www.rackspace.com/knowledge_center/article/installing-python-novaclient-on-linux-and-mac-os) is installed.

### Notes

Versions of the Ubuntu operating system newer than 12.04 have not been thoroughly tested with this tutorial.
Therefore, I recommend that you too use Ubuntu 12.04.

### How-to steps

#### 1. Boot the boot.rackspace.com ISO

This command boots a Cloud Server with a small 1 MB iPXE based ISO. In turn, it
sets up the server’s assigned networking within the virtual BIOS and
netboots into a menu of operating system options hosted over HTTP on
boot.rackspace.com. (Note: Example image ID updated on 9/14/2018.)

```
nova boot --image=7c526505-bc72-4e3c-8d9a-e700c0acf299 --flavor=performance1-2 my_ubuntu_1204
```

#### 2. Connect to the boot.rackspace.com VM via the Console

* Log into [mycloud.rackspace.com](http://mycloud.rackspace.com)
* Once the VM is **Active**, click on the **Actions** available in the **Server
  Details**, and select **Connect Via Console**.

{% img 2014-05-28-custom-images-via-boot-dot-rackspace-dot-com-training-wheels-included/connect_via_console.png %}

#### 3. Select Linux Operating Systems from the Boot Menu

{% img 2014-05-28-custom-images-via-boot-dot-rackspace-dot-com-training-wheels-included/menu.png %}

#### 4. Select the Ubuntu operating system from the list of Distros

{% img 2014-05-28-custom-images-via-boot-dot-rackspace-dot-com-training-wheels-included/distro.png %}

#### 5. Select 12.04 from the list of Versions

{% img 2014-05-28-custom-images-via-boot-dot-rackspace-dot-com-training-wheels-included/version.png %}

#### 6. Select the Ubuntu operating system install from the the Boot Paramaters

{% img 2014-05-28-custom-images-via-boot-dot-rackspace-dot-com-training-wheels-included/params.png %}

#### 7. Proceed through the install & setup accordingly

In addition to custom modifications, make sure to do the following:

* During partioning:
  * Select **Guided - use entire disk**.
  * Use the **Virtual disk 1 (xvda) - 42.9 GB** choice.
* Select OpenSSH server during the software install process.
* Install the GRUB boot loader to the master boot record.

{% img 2014-05-28-custom-images-via-boot-dot-rackspace-dot-com-training-wheels-included/install.png %}

#### 8. Reboot from local hdd

Once the installation is complete, the VM reboots and the console
disconnects. Reconnect to the console, but this time, select to boot
from the Local HDD because we've already installed the OS and because iPXE by
default does a netboot.

{% img 2014-05-28-custom-images-via-boot-dot-rackspace-dot-com-training-wheels-included/localboot.png %}

#### 9. Instance configuration required by Rackspace

To configure the instance, you must first get to the prompt. You can do
this via the console from the browser or by SSH'ing into the VM (SSH may be easier to work
with).

{% img 2014-05-28-custom-images-via-boot-dot-rackspace-dot-com-training-wheels-included/os_console.png %}

Run the following command to install curl:

```
sudo apt-get update && sudo apt-get install curl -y
```

Now proceed to install XenServer Tools and the Nova Agent.

* XenServer Tools
    * The XenTools are needed for communication between the host and the guest
      for configuration via the xenstore

```
curl -skS -L http://git.io/nUeUrA | sudo bash
```

* Nova Agent
    * The Nova Agent is used for configuration of the instance. It handles
      detection of the Operating System type and sets the appropriate
      networking configuration. It also handles password resets, configuration
      of any licensing for Red Hat and Windows, versioning, and the ability to
      handle updates of itself.

```
curl -skS -L http://git.io/_tdvZw | sudo bash
```

* Clear out the network interfaces

```
(cat | sudo tee /etc/network/interfaces) << EOF
auto lo
iface lo inet loopback
EOF
```

#### 10. Make custom OS modifications

This is the opportunity to install, configure, and set up any custom system level
modifications that you want to persist for future instances of the image.

#### 11. After you complete the modifications, cleanup your image

Typically, you should remove the following before taking the snapshot
to have a clean, pristine image:

* local files in root & other user home directories
* log files
* history
* ssh_host keys
* unnecessary files
* and so on

#### 12. After modifications and cleanup is done, snapshot your image

In the **Server Details**, select **Create Image** to snapshot the image as-is and
give it a name, such as `my_ubuntu_1204`.

{% img 2014-05-28-custom-images-via-boot-dot-rackspace-dot-com-training-wheels-included/create_image.png %}

#### 13. Set metadata for the image

Set vm_mode to:

* `xen` for a Paravirtualized (PV) Instance. For most Linux VMs, PV is typically
    the best option.
* `hvm` for HVM Mode, typically used for FreeBSD, Linux PVHVM and Windows. When
    using with Linux, make sure you're using one of the newer 3.x kernels for the
    best experience.

If using Nova Agent:

* Set `xenapi_use_agent=true`.

If using Cloud-Init exclusively, the Agent isn't needed, so make sure to
disable it so that the build isn't actively polling for responses from the Nova
Agent:

* set `xenapi_use_agent=false`

```
nova image-meta my_ubuntu_1204 set vm_mode=xen
nova image-meta my_ubuntu_1204 set xenapi_use_agent=true
```

#### 14. After snapshotting, its time to boot your custom image

```
nova boot --image="my_ubuntu_1204" --flavor=performance1-2 my_ubuntu_1204_test
```

#### 15. Log in to the VM by using the console or SSH and enjoy your new custom image \:)

### Notes

* After you save or snapshot your custom image, you __must__ use a Performance
  Flavor to boot the VM.
* After snapshotting and testing the boot of the custom image, you can safely
  delete the initial **boot.rackspace.com** ISO VM.

### About the author

Mike Metral is a Solution Architect at Rackspace in the Private Cloud Product
organization. Mike joined Rackspace in 2012 with the intent of helping
OpenStack become the open standard for cloud management. At Rackspace, Mike has
led the integration effort with strategic partner RightScale; aided in the
assessment, development, and evolution of Rackspace Private Cloud; as well as
served as the Chief Architect of the Service Provider Program. Prior to joining
Rackspace, Mike held senior technical roles at Sandia National Laboratories
performing research and development in Cyber Security with regards to
distributed systems, cloud and mobile computing. You can follow Mike on Twitter
[@mikemetral](http://twitter.com/mikemetral) and Github as
[metral](http://github.com/metral)

### Reference Material / Official Documentation

* [Developing With Cloud Images for Fun and Profit](https://developer.rackspace.com/blog/announcing-cloud-images.html)
* [Introducing boot.rackspace.com](https://developer.rackspace.com/blog/introducing-boot-dot-rackspace-dot-com.html)
* [Source for boot.rackspace.com](https://github.com/rackerlabs/boot.rackspace.com)
* [Wiki for boot.rackspace.com](https://github.com/rackerlabs/boot.rackspace.com/wiki)
