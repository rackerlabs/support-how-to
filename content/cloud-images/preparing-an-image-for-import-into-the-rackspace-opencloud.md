---
permalink: preparing-an-image-for-import-into-the-rackspace-opencloud/
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
disk images into the Rackspace Open Cloud. In order for these images to boot
correctly, prepare them according to the following requirements
and instructions.

### Overview

Difficulty: Advanced

Time: 1-2 hours

Skills needed: Linux CLI


Tools used: [xcp-ng](https://xcp-ng.org), [Swiftly](https://support.rackspace.com/how-to/install-the-swiftly-client-for-cloud-files/), [Pitchfork](https://pitchfork.rax.io/)

Beginning with an on-premise virtual machine, we will walk through the process of importing and booting a Linux VM into the Rackspace Public Cloud. Note: the VM's system disk size must be 160 GB or smaller, or it will not import into Rackspace Cloud.

### Microsoft Windows

Microsoft product use rights do not allow the use of License Mobility
for Windows licenses.

**Note:** Because of the limitations related to this software
platform, import is not available for Windows images.

### Prepare your Linux VM

#### Make a user with sudo privileges

When the server boots in Rackspace Cloud, it may not have networking. Make a local user with sudo privileges, so you can login via the Emergency Console and manually set network configuration.

#### Export your VM as an image

Once you've completed these steps, stop your current VM, then export its image to a format that the qemu-img tool can handle, such as .vmdk (VMWare), .qcow2 (KVM), .img (RAW), etc.


### Copy and Convert to dynamic VHD format

#### Build a New CentOS 7 Rackspace Cloud Server and copy your image there

Choose the Rackspace Cloud region in which you would like to import your image (such as IAD, DFW, SYD, etc...). Next, build a Rackspace Cloud CentOS 7 server in that region. To avoid potential memory starvation issues and speed up image conversion, build the server as a 4 GB General Purpose. We will use this server to convert the image into a Rackspace Cloud-compatible format.

Login to your image-conversion server, become root, and execute the steps below.

Using a secure method (such as scp), copy your VM image to the image-conversion server. If the image does not fit onto your 4 GB General Purpose server's disk (80 GB), then add a Cloud Block Storage volume to hold the image. Again, the VM's system disk size must be 160 GB or smaller, or it will not import into Rackspace Cloud.

#### Install the xcp-ng repos

[xcp-ng](https://xcp-ng.org), is a hypervisor based on Citrix's commercial offering (XenServer). Since Rackspace Cloud runs on Citrix XenServer, xcp-ng is the best freely available choice for converting the image.

##### Import and check xcp-ng repo signing key

See https://xcp-ng.org/docs/mirrors.html#security for details

##### Create repo file for xcp-ng repos and install packages

As root, create a file /etc/yum.repos.d/xcp-ng.repo which should look exactly the same as the repofile posted under "WANT TO TEST IT ALREADY?" at [this xcp-ng forum thread](https://xcp-ng.org/forum/topic/1250/xcp-ng-mirrors?lang=en-US).

##### Install image conversion packages

Rackspace Cloud uses a dynamic VHD format particular to XenServer and xcp-ng. Thus, we must install the associated packages from their repos. We will also install qemu-img from the base repos.

        $sudo yum -y install blktap vhd-tool qemu-img

#### Convert the Image

In my example, my exported VM image is called "export.vmdk," and it was sourced from a VMWare® hypervisor.

###### Convert to fixed VHD (Conversion Step 1/2)

      $qemu-img convert -p -O vpc /root/export.vmdk /root/import.fixed.vhd

###### Convert to dynamic VHD (Conversion Step 1/2)

      $vhd-util coalesce -n /root/import.fixed.vhd -o /root/import.dynamic.vhd

###### Confirm the correct format

Use vhd-tool to confirm that your VHD ("import.dynamic.vhd" in the example) is in the correct format for Rackspace Cloud. You want to see a creator-application of "tap"

Good:

      $vhd-tool info $GOOD | grep creator
      
      creator-application      |tap
      
Bad:
      $vhd-tool info $BAD.vhd

      creator-application      |qemu   

If the creator-application is "qemu", the VHD won't resize and any builds from this image will fail.


### Upload the VHD image to Rackspace Cloud Files

For the next steps, you will need [Swiftly](https://support.rackspace.com/how-to/install-the-swiftly-client-for-cloud-files/), a Rackspace Cloud Files client. Install and configure swiftly per the linked article.

Next, create a Cloud Files container, which will receive your VHD image file. In this example, we create a Cloud Files container called 'rs-img-build-00':

      $ swiftly put rs-img-build-00

Now, upload the image itself. Note that Cloud Files only accepts files of 5 GB or smaller. If your image is larger than that, see the Swiftly documentation on how to segment uploads.

Once the container has been created, we will upload the file into the container:

      $swiftly put -i export.dynamic.vhd rs-img-build-00/import.dynamic.vhd

### Import the Image and Set Image Tags

##### Import the Image

Once the VHD is available in Cloud Files, you will use the Cloud Images API to import it. The easiest way to do this is with [Pitchfork](https://pitchfork.rax.io/), the unofficial GUI API application.

When you make the [image import call](https://pitchfork.rax.io/images/#import_task-images) to the Cloud Images API, the API will respond with an image task ID. Wait a few minutes, then use [the "Get Task Details" call](https://pitchfork.rax.io/images/#get_task_details-images) to check the status of your import. When the image imports successfully, the "Get Task Details" call will contain an image ID.

After the server is imported, set the following metadata key-value pairs
on the image by using the [Cloud Servers API](https://developer.rackspace.com/docs/cloud-servers/v2/api-reference/svr-images-operations/#set-image-metadata-for-specified-image):

#### Set Proper Image Tags

We have to add a few image tags (metadata) before the server will boot properly. Using the image ID you got from the previous step, make the Update Image call for all proper key/value pairs listed below.

| parameter | value |
| --------- | ----- |
|image_id	| Image UUID|
|operation |	add|
|path (the slash is important)|	/key|
|value	|value|

| Key | Value | What it Does |
| --- | ----- | ------------ |
| vm_mode | hvm | Boots in the correct virtualizaton mode. If you do not set this correctly, you get bootloader errors. |
| img_config_drive | mandatory| Attaches the Openstack config-drive for metadata information (network, SSH keys) to servers built from this image. |
| xenapi_use_agent | False | Don't use [the nova-agent](https://support.rackspace.com/how-to/nova-agent-unix-and-rackspace-agent-windows/) to set up the server |

<br/>

### Build a Rackspace Cloud Server from the Image and Verify Operation

Using the Rackspace Cloud Control Panel, launch a server from the image.

Be sure to pick a flavor that has a large enough disk for your image. For example, if the server image is 40 GB, then you should choose a 2 GB General Purpose server or larger, as it has a 40 GB disk. Consult the portal for more details above flavors and disk size.

When the server reaches ACTIVE status, attempt to login via SSH with the user you created in step one. If you are lucky, cloud-init set IP configuration properly and you can login. If so, your image is finished! More likely though, networking is not set up properly.


#### Login via Emergency Console and Configure your Network

Using the [Emergency Console](https://support.rackspace.com/how-to/start-a-console-session/), login to your new Rackspace Cloud Server and become root. The network configuration including DNS servers, routes, etc. is found on the server's Openstack config drive (/dev/xvdd), in a file called 'network-data.json'. To read the network-data.json file, execute the following commands as root:

      #mkdir /mnt/cd
      #mount -t iso9660 /dev/xvdd /mnt/cd/
      #cd /mnt/cd/openstack/latest/
      #cat network_data.json |python -m json.tool

If Python is not available on your system, you may have to read the file manually. The specific commands for setting IP will vary based on what Linux distribution you have chosen.

#### Verify Operation

Once your server is up and responding, follow any other necessary steps to verify operation and complete the migration (update DNS records and monitoring configuration, etc).

