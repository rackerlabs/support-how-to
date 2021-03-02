---
permalink: create-remove-swap-file-in-ubuntu/
audit_date:
title: Create/Remove Swap File in Ubuntu
type: article
created_date: ‘2021-02-28’
created_by: Ivan Arteaga
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---


How to Create and Remove a swap file in Linux Ubuntu.

There are two basic type of memory, the Random Access Memory which is used to store data while working on the computer, this type of memory is required to run programs and services and whithout RAM it wouldn’t be possible however this data will not be stored once you turn off the computer, precisely its only in charge of a temporary allocation to run such programs.

Whenever we use a hard drive to store data permanently in the computer, mainly allocated in our hard drive which is classified as electro-mechanical data storage device, this allows us to locate this type of data in our system even when we turn off the device, we require data to be transfered to RAM and then CPU will be able to run programs and services as requested.

Then we have Swap File, created in order to use Disk Space whenever we fill up our RAM and used for allocation of data under our kernel memory management.

Usually Sawp File is used in Low RAM systems (1GB ~) and it is important to mention that we don’t necessarily require swap file to run our Linux enviroment however its recommended to avoid our system presenting a degraded performance whenever we run high demanding programs and processes.

Recommended Swap File Size based on RAM memory.
RAM Size	Swap Size (Without Hibernation)	Swap size (With Hibernation)
256MB	256MB	512MB
512MB	512MB	1GB
1GB	1GB	2GB
2GB	1GB	3GB
3GB	2GB	5GB
4GB	2GB	6GB
6GB	2GB	8GB
8GB	3GB	11GB

Procedure

1.- The first step while creating the swap file is to verify the curret swap file size.

We can use free -m and swapon -s to determine the size of the existing swap file (see the image below.)

A swapon -show will work too and remember that if there’s no output or the output is 000, the swap file might not be configured.

2.- To create the swap file we will dd if =/dev/zero of=/swapfile bs=1024 count=1048576

if= input file (will always be the same)
of= output file (you can name this file as you want)
bs= block size (keep value at 1024)
count= amount of blocks to read and write (will be determined for how much space is required to create swap file for)

Remember that if we require an specific size we can modify the Count value by mutiplying the bs value for the new size ( in MB) f.e 1024x4096=4194304, the new value for count will be 4194304

3.- Provide root user read/write permissions to the swap file with chmod 600 /swapfile

4.- Setup swap area with mkswap /swapfile

5.-Activate swap memory with swapon /swapfile and using your text editor we need to add /swapfile swap swap defaults 0 0 to the 

/etc/fstab file.

Filesystem	Mount Point	Type	Options	Dump	Pass

/swapfile	none	swap	defaults	0	0

For more information regarding fstab please visit https://wiki.archlinux.org/index.php/Fstab

6.-Verify that the new swap file is configured with free -m, swapon -s or swapon -show

Removing Swap File

1.- Deactivate swap file with swapoff -v /swapfile then remove the /etc/fstab entry and lastly, remove the swapfile with rm -f /
