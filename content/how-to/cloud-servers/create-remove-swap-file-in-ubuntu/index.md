---
permalink: create-remove-swap-file-in-ubuntu/
audit_date: '2021-03-08'
title: Create and remove swap files in Ubuntu
type: article
created_date: '2021-02-28'
created_by: Ivan Arteaga
last_modified_date: '2021-03-08'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

There are two basic type of memory, the **Random Access Memory** (RAM) which is used
to store data while working on the computer and is required to run programs and
services. This data will not remain stored once you turn off the computer, its
only in charge of a temporary allocation to run such programs.

Whenever we use a hard drive to store data permanently in a computer, which is
classified as electro-mechanical data storage device, this allows us to locate
data in our system even when the device is off. Afterwards, we require data to be
transfered to the RAM for the CPU to be able to run programs and services as
requested.

Swap files are created in order to use disk space whenever the RAM runs out of
 space and is used to allocate data under our kernel memory management.

Usually sawp files are used in Low RAM systems (1GB ~) and it is important to
mention that we don’t necessarily require swap file to run our Linux enviroment,
however, its recommended to avoid our system presenting a degraded performance
whenever we run high demanding programs and processes.

### Recommended Swap File Size based on RAM memory

|RAM Size | Swap Size (Without Hibernation) | Swap size (With Hibernation) |
|---------|---------------------------------|------------------------------|
| 256MB | 256MB | 512MB |
| 512MB | 512MB | 1GB |
| 1GB | 1GB | 2GB |
| 2GB | 1GB | 3GB |
| 3GB | 2GB | 5GB |
| 4GB | 2GB | 6GB |
| 6GB | 2GB | 8GB |
| 8GB | 3GB | 11GB |

### Create a swap file

1. Verify the current swap file size. You can use either of the following 3
   commands to determine the size of the existing swap file:

        free -m

        swapon -s

        swapon -show

    **Note**: If there’s no output or the output is `000`, the swap file might
    not be
    configured.

2. To create the swap file use:

        dd if =/dev/zero of=/swapfile bs=1024 count=1048576

    Where:

    - `if` = input file (will always be the same)
    - `of` = output file (you can name this file as you want)
    - `bs` = block size (keep value at 1024)
    - `count` = amount of blocks to read and write (will be determined for how
      much space is required to create swap file for)

    **Note**: Remember that if you require an specific size the `count` value
   can be modified by mutiplying the block size value for the new size (in MB).
   For example, 1024x4096=4194304, the new value for count will be 4194304.

3. Provide the `root` user with **read/write** permissions to the swap file
   using:

        chmod 600 /swapfile

4. Setup swap area:

        mkswap /swapfile

5. Activate swap memory:

        swapon /swapfile 

6. Using a text editor add the line `/swapfile swap swap defaults 0 0` to the
   **/etc/fstab** file.

7. Verify that the new swap file is configured using either of the commands in
   step 1.

For more information on `fstab` please visit:
https://wiki.archlinux.org/index.php/Fstab

### Remove a swap file

1. Deactivate swap file:

        swapoff -v /swapfile

2. Using a text editor remove the `/etc/fstab` entry.

3. Remove the swapfile:

        rm -f /
