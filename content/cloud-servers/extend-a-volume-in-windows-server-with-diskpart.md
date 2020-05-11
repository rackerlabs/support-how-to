permalink: extend-a-volume-in-windows-server-with-diskpart/
audit_date:
title: ‘Extend a volume in Windows Server with Diskpart’
type: article
created_date: '2020-05-10’
created_by: Karoline Mills
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers

### Extend a volume in Windows Server

This article describes how to extend a volume in Windows Server 2008 R2, 2012 R2 and 2016 with diskpart. It also explains the difference between extending and shrinking/partitioning a volume.

#### Extending

Extending a volume increases the size of an already existing partition. This is only possible if there is unallocated space available.
To extend a volume, you can either use the built-in *disk management* tool or the command line tool *diskpart*. Both processes are outlined below. Keep in mind that you need administrator permissions to perform these tasks.

##### Extending using diskpart

To extend a volume using the diskpart command line tool, follow these steps (the C:\ drive is used for this example):

1.	Open the command line prompt by clicking on the Start button and typing in *cmd*

2.	Start the diskpart utility by typing ***diskpart***

3.	View the current disk information by typing ***list disk***

4.	Select the disk you would like to extend by typing ***select disk 0***

5.	View the volume information by typing ***list vol***

6.	Select the desired volume by typing ***select vol 0***

7.	Extend the volume to the maximum available size by typing ***extend***
You can  specify the amount of space to add to the volume in megabytes, by typing ***extend size=1000*** (this would add 1000 MB to the existing volume)

8.	Verify the new volume size by typing ***list vol***
