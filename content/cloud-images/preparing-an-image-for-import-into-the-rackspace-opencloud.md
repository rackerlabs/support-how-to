---
permalink: preparing-an-image-for-import-into-the-rackspace-opencloud/
audit_date: '2019-12-18'
title: Prepare an image for import into the Rackspace Open Cloud
type: article
created_date: '2014-02-16'
created_by: Cloud Images
last_modified_date: '2020-02-02'
last_modified_by: Brian King
product: Cloud Images
product_url: cloud-images
---

You can use the Cloud Images service to import custom virtual machine
disk images into the Rackspace Open Cloud. In order for these images to boot
correctly, prepare them according to the following requirements
and instructions.

### General requirements

Images must follow the following general requirements:

-   The image must be a single file in the Virtual Hard Disk (VHD) file format.

    **Note**: A Cloud Files object, whether a Dynamic Large Object (DLO) or a
    Static Large Object (SLO), is considered to be a single file for
    this purpose.

-   Images must not expand to a system disk larger than 160 GB.

    **Note**: Images with system disks larger than 160 GB can be exported but
    cannot be imported into the Rackspace Open Cloud.

-   If you have exported an image from the Rackspace Open Cloud, it is
    already in the VHD format that is required for import.

### Microsoft Windows

Microsoft product use rights do not allow the use of License Mobility
for Windows licenses.

**Note:** Because of the limitations related to this software
platform, import is not available for Windows images.

### Prepare an image

Requirements:

- Server image in vhd, raw, qcow2, or vmdk format

- Linux server with qemu-img installed

- [Citrix Hypervisor]
(https://www.citrix.com/downloads/citrix-hypervisor/)
or [XCP-ng](https://xcp-ng.org/) 7.0 or later

#### Install a Citrix Hypervisor locally

When you get to the **Virtual Machine Storage** page, choose **Enable thin
provisioning-Optimized Storage for XenDesktop**. This enables you to create
the correct image type for Rackspace cloud (VHD).

To learn more about preparing an image on Linux, see [Cloud image creation format and process](/how-to/cloud-image-creation-format-and-process).

### Export images from another cloud

Amazon EC2®, Microsoft Azure®, and Google Compute Engine® can export images
in the VHD format, which is required for Rackspace Cloud. (On Google Compute,
this format is called *VPC*). 

To export images from another cloud, use the following recommended workflow:

In the other cloud, perform the following steps:

1.  Create an image of the server that you want to bring
    over to the Rackspace Open Cloud.
2.  Boot a new server from the image that you
    just created.
3.  Make appropriate modifications to the new
    server so that it can work in the Rackspace Open Cloud.
4.  Create an image of the new server.
5.  Export the image in VHD format.

 While offline, perform the following step:
 
6.  Upload the image to your Rackspace Cloud Files account in
    the region in which you want to boot your server.
    
 Using Rackspace Cloud Images, perform the following step:
 
7.  Import the image into the Rackspace Open Cloud.

#### Set the proper image metadata

After the server is imported, set the following metadata key-value pairs
on the image by using the [Cloud Servers API](https://developer.rackspace.com/docs/cloud-servers/v2/api-reference/svr-images-operations/#set-image-metadata-for-specified-image):

| Key | Value | What it Does |
| --- | ----- | ------------ |
| vm_mode | hvm | Boots in the correct virtualizaton mode. If you do not set this correctly, you get bootloader errors. |
| img_config_drive | mandatory| Attaches the Openstack config-drive for metadata information (network, SSH keys) to servers built from this image. |
| ssh_user| varies | The default SSH user for this image (such as 'debian', 'ubuntu', 'admin', and so on.)|
