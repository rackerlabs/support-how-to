---
permalink: preparing-an-image-for-import-into-the-rackspace-opencloud
audit_date: '2019-12-18'
title: Prepare an image for import into the Rackspace Open Cloud
type: article
created_date: '2014-02-16'
created_by: Cloud Images
last_modified_date: '2020-06-08'
last_modified_by: Brian King
product: Cloud Images
product_url: cloud-images
---

You can use the Cloud Images service to import custom virtual machine
disk images into the Rackspace&reg; Open Cloud. For these images to boot
correctly, prepare them according to the following requirements and instructions.

### Overview

**Difficulty:** Advanced

**Time:** 1-2 hours

**Skills needed:** Linux&reg; command-line interface (CLI)

**Tools used:**

- [xcp-ng](https://xcp-ng.org)
- [Swiftly](/support/how-to/install-the-swiftly-client-for-cloud-files/)
- [Pitchfork](https://pitchfork.rax.io/)

Beginning with an on-premises virtual machine (VM), we demonstrate how to import and boot a
Linux VM into the Rackspace Public Cloud. 

**Note:** The VM's system disk size must be 160 GB or smaller, or you cannot import it into 
the Rackspace Cloud.

### Microsoft Windows

Microsoft&reg; product use rights do not allow the use of License Mobility for Windows&reg; licenses.

**Note:** Because of the limitations related to this software platform, import is not available
for Windows images.

### Prepare your Linux VM

Use the following steps to prepare your Linux VM.

#### Make a user with sudo privileges

When the server boots in the Rackspace Cloud, it might not have networking. Make a local user
with sudo privileges, so you can log in via the emergency console and manually set the network
configuration.

#### Export your VM as an image

After you complete these steps, stop your current VM, and export its image to a format that the
`qemu-img` tool can handle, such as .vmdk (VMWare), .qcow2 (KVM), .img (RAW), and so on.

### Copy and convert to the dynamic VHD format

Use the following steps to convert the image format to the virtual hard disk (VHD) format.

#### Build a new CentOS 7 Rackspace Cloud Server and copy your image there

Choose the Rackspace Cloud region in which you want to import your image (such as IAD, DFW,
SYD, and so on). Next, build a Rackspace Cloud CentOS&reg; 7 server in that region. To avoid potential
memory starvation issues and speed up image conversion, build the server as a 4 GB General Purpose server.
Use this server to convert the image into a Rackspace Cloud-compatible format.

Log in to your image-conversion server, switch to the root user, and execute the following steps:

1. Use a secure method (such as `scp`) to copy your VM image to the image-conversion server. 
2. If the image does not fit onto your 4 GB General Purpose server's disk (80 GB), then add a
   Cloud Block Storage volume to hold the image. The VM's system disk size must be 160 GB or smaller;
   you cannot import it into the Rackspace Cloud.

#### Install the xcp-ng repos

[xcp-ng](https://xcp-ng.org) is a hypervisor-based Citrix&reg;'s commercial offering (XenServer&reg;).
Because the Rackspace Cloud runs on Citrix XenServer, `xcp-ng` is the best freely available choice to
convert the image.

Use the following steps:

1. Import and check the xcp-ng repository signing key. See [https://xcp-ng.org/docs/mirrors.html#security](https://xcp-ng.org/docs/mirrors.html#security) for details.

2. Create a repository file for `xcp-ng` repositories and install packages. As root, create a file 
**/etc/yum.repos.d/xcp-ng.repo**, which should look exactly the same as the repository file posted
under **WANT TO TEST IT ALREADY?** at [this xcp-ng forum thread](https://xcp-ng.org/forum/topic/1250/xcp-ng-mirrors?lang=en-US).

3. Install image conversion packages. The Rackspace Cloud uses a dynamic VHD format particular
to XenServer and `xcp-ng`. Thus, you must install the associated packages from their repositoriess. Also, use
the following instruction to install `qemu-img` from the base repositories:

        $sudo yum -y install blktap vhd-tool qemu-img

#### Convert the image

In this example, the exported VM image is called **export.vmdk**, and is sourced from a VMWare® hypervisor.

##### Convert to fixed VHD (Conversion step 1/2)

      $qemu-img convert -p -O vpc /root/export.vmdk /root/import.fixed.vhd

##### Convert to dynamic VHD (Conversion step 1/2)

      $vhd-util coalesce -n /root/import.fixed.vhd -o /root/import.dynamic.vhd

##### Confirm the correct format

Use `vhd-tool` to confirm that your VHD (**import.dynamic.vhd**, in the example) is in the correct format
for the Rackspace Cloud. You want to see a ``creator-application`` of ``tap``.

**Good example**:

      $vhd-tool info $GOOD | grep creator
      
      creator-application      |tap
      
**Bad example**:
      $vhd-tool info $BAD.vhd

      creator-application      |qemu   

If the ``creator-application`` is ``qemu``, the VHD doesn't resize, and any builds from this image fail.


### Upload the VHD image to the Rackspace Cloud Files

For the next steps, you need [Swiftly](/support/how-to/install-the-swiftly-client-for-cloud-files/),
a Rackspace Cloud Files client. Install and configure Swiftly according to the linked article.

Next, create a Cloud Files container, which receives your VHD image file. In this example, create
a Cloud Files container called **rs-img-build-00**:

      $ swiftly put rs-img-build-00

Now, upload the image itself. Note that Cloud Files only accepts files of 5 GB or smaller. If your image
is larger than that, see the Swiftly documentation on how to segment uploads.

After you create the container, upload the file into the container:

      $swiftly put -i export.dynamic.vhd rs-img-build-00/import.dynamic.vhd

### Import the image and set image tags

Follow the steps in the following sections to import the image and set the image tags.

#### Import the image

After the VHD is available in Cloud Files, you use the Cloud Images API to import it. The easiest way to do this is with [Pitchfork](https://pitchfork.rax.io/), the unofficial GUI API application.

When you make the [image import call](https://pitchfork.rax.io/images/#import_task-images) to the Cloud Images API, the API  responds with an image task ID. Wait a few minutes, then use [the Get Task Details call](https://pitchfork.rax.io/images/#get_task_details-images) to check the status of your import. When the image imports successfully, the Get Task Details  call contains an image ID.

#### Set Proper Image Tags

The image is now imported, but you need to add a few image tags (metadata) before the server
can boot properly. Using the image ID you got from the previous step, make the [Update Image call](https://pitchfork.rax.io/images/#update_image-images) for all following key/value pairs:

| parameter | value |
| --------- | ----- |
|image_id  | Image UUID|
|operation |	add|
|path (the slash is important)|	/key|
|value	|value|

| Key | Value | What it Does |
| --- | ----- | ------------ |
| vm_mode | hvm | Boots in the correct virtualizaton mode. If you do not set this correctly, you get bootloader errors. |
| img_config_drive | mandatory| Attaches the OpenStack&reg; config-drive for metadata information (network, SSH keys) to servers built from this image. |
| xenapi_use_agent | False | Don't use [the nova-agent](/support/how-to/nova-agent-unix-and-rackspace-agent-windows/) to set up the server. |

<br/>

### Build a Rackspace Cloud Server from the image and verify the operation

Use the Rackspace Cloud Control Panel to launch a server from the image.

Be sure to pick a flavor that has a large enough disk for your image. For example, if the server
image is 40 GB, you should choose a 2 GB General Purpose server or larger because it has a
40 GB disk. Consult the portal for more details about flavors and disk size.

When the server reaches **ACTIVE** status, log in via SSH with the user you created in Step 1. 
Ideally, `cloud-init` set the IP address configuration properly, and you can log in. If so, your
image is finished. 

If the login fails, networking is not set up properly. Use the following steps to correct the 
configuration.


#### Log in via the emergency console and configure your network

Use the [emergency console](/support/how-to/start-a-console-session/) to
log in to your new Rackspace Cloud Server and switch to the root user. Find the network configuration
including DNS servers, routes, and so on on the server's OpenStack config-drive (**/dev/xvdd**),
in a file called **network-data.json**. To read the **network-data.json** file, execute the
following commands as root:

      #mkdir /mnt/cd
      #mount -t iso9660 /dev/xvdd /mnt/cd/
      #cd /mnt/cd/openstack/latest/
      #cat network_data.json |python -m json.tool

If Python&reg; is not available on your system, you might have to read the file manually. The specific
commands for setting IP vary based on what Linux distribution you have chosen.

#### Verify operations

After your server is up and responding, follow any other necessary steps to verify operation and
complete the migration (update DNS records, monitoring configuration, and so on).

