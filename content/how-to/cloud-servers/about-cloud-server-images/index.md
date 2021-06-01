---
permalink: about-cloud-server-images
audit_date: '2021-05-28'
title: About Cloud Server images
type: article
created_date: '2012-07-24'
created_by: Rackspace Support
last_modified_date: '2021-05-28'
last_modified_by: Ana Corpus
product: Cloud Servers
product_url: cloud-servers
---

Creating an image enables you to have saved images for later use as a
template or primary image. You can then use the saved images to easily
restore a server to a known configuration or rapidly deploy additional
servers with an identical configuration. Using the
[Cloud Control Panel](https://login.rackspace.com), you can create images 
on-demand.

**Note:** Because the system does not automatically verify images, you
should not use them as a backup solution.

### Considerations for all server types

Note the following limitations when creating server images:

-   Cloud Server images are good for storing configuration and static
    data but are not a reliable way to back up a dynamic database.

    Standard backup tools such as `mysqldump` or the SQL Server Management
    Studio are more suitable for backing up databases. Be sure to always back up
    your database before you create an image of your Cloud Server.


-   You can share Cloud Server images between accounts but not between 
    regions.
    
    You *can* share images between accounts in the same region. This 
    enables you to build a server from the shared image and then create a 
    copy of the newly created server. To move images between regions, see
    [Transfer images between regions of the Rackspace open cloud](https://docs.rackspace.com/support/how-to/transfer-server-images-between-cloud-regions-with-pitchfork/).

-   Image creation can take several hours if the disk is extremely large, 
    so be sure to allot an appropriate amount of time to create an image 
    of your server.

-   Image creation can have a delayed start if there are a large number
    of image requests at one time for a group of servers. The number of
    concurrent images is limited to keep the disk activity of
    multiple images from affecting performance on a host. If the image
    takes longer than 24 hours to complete, contact Rackspace
    Support.

-   When an image creation begins, the system runs a process that
    attempts to reclaim space that has been freed by deleting files
    and images. That process continues even if the image creation
    process aborts because of disk limits at the time the
    process begins. That means that in some cases, trying to create an image
    again after it fails could result in a successful image process thanks to
    that cleanup operation.

-   If you are using a boot-from-volume server, you cannot create an 
    image of it. You can, however, create snapshots and clones of a 
    boot-from-volume server.

### Considerations for virtual appliances

Turnkey virtual appliances typically do not support decloning.
Thus, while an image technically preserves the exact state of the 
appliance, any servers built from the image can't set 
the following elements:

* Hostname
* IP configuration
* Admin password
* License key

Instead of using Cloud Server Images, consult your appliance's vendor
documentation for the recommended backup and restore procedures.

#### Fortinet Fortigate-VM

For Fortinet&reg; Fortigate-VM, see the following references:

- [Back up the Fortinet Fortigate-VM (Rackspace Guide)](/support/how-to/back-up-the-fortinet-fortigate-vm/)
- [How to download a FortiGate configuration file and upload firmware file using secure file copy (Vendor doc)](https://kb.fortinet.com/kb/microsites/search.do?cmd=displayKC&docType=kc&externalId=FD43754)

### Considerations for Windows servers

If you take a snapshot of a Windows&reg; Cloud Server configured as a
Domain Controller (DC), you cannot restore from
that image. Our build system relies on the local administrator
account to perform configuration tasks, and the system disables that
account after you promote a server to be a DC. If you want to create
an image of a server that is also a DC, you must first
demote it from being a DC before performing the image creation process.

### Other limitations

-   You cannot upload ISO images to Cloud Files and use them to build a new Cloud Server.

-   To be successful, images imported to Rackspace must conform to the general
    requirements described in
    [Preparing an image for import into the Rackspace OpenCloud](/support/how-to/preparing-an-image-for-import-into-the-rackspace-opencloud).

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/).    
