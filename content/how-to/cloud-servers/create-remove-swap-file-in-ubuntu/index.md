---
permalink: create-remove-swap-file-in-ubuntu
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

There are two basic types of memory: Random Access Memory (RAM) and swap files.

Computers use RAM to store data and to run programs and services. Because this data is not
stored when you turn the computer off, the allocation is only temporary allocation.

When you use a hard drive, classified as an electro-mechanical data storage device, to
store data permanently in a computer, you can save data in your system in a swap file even
when the device is off. When the computer reboots, it transfers data to RAM so the CPU can
run programs and services as needed.

The system also creates swap files to use disk space when it needs to allocate data for
kernel memory management but is out of RAM.

Usually, you use swap files in low-RAM systems (around 1 GB). You don’t necessarily
need swap files to run in a Ubuntu&reg; operating system or Linux&reg; environment. However,
without swap files, your system might experience degraded performance when running
high-demand programs and processes.

### Recommended swap file size based on RAM

The following table shows the recommended swap sized based on how much RAM you have and
whether you choose *hibernation*. Hibernation requires more space because it saves the system state
when you shut down and restores the system state when you restart.

|RAM Size | Swap size (without hibernation) | Swap size (with hibernation) |
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

1. Verify the current swap file size. You can use any of the following
   commands to determine the size of the existing swap file:

        free -m

        swapon -s

        swapon -show

    **Note**: If there’s no output or the output is `000`, the swap file might
    not be configured.

2. To create the swap file, run the following command:

        dd if =/dev/zero of=/swapfile bs=1024 count=1048576

    Where:

    - **if**: input file (will always be the same)
    - **of**: output file (you can name this file as you want)
    - **bs**: block size (keep value at 1024)
    - **count**: amount of blocks to read and write, which helps you determine how
      much space you need for the swap file.

    **Note**: Remember that if you require a specific size, you can modify the
    `count` value by multiplying it by the block size value for the new size (in MB).
    For example, multiplying the old block size, `1024`, by the new size, `4096`,
    results in `4194304` for the **count**.
    
3. Provide the `root` user with read and write permissions for the swap file
   by running the following command:

        chmod 600 /swapfile

4. Set up the swap area:

        mkswap /swapfile

5. Activate swap memory:

        swapon /swapfile 

6. Use a text editor to add the line `/swapfile swap swap defaults 0 0` to the
   **/etc/fstab** file.

7. Verify that the new swap file configuration using any of the commands in
   step 1.

For more information on `fstab`, visit:
[https://wiki.archlinux.org/index.php/Fstab](https://wiki.archlinux.org/index.php/Fstab)

### Remove a swap file

1. Run the following command to reactivate the swap file:

        swapoff -v /swapfile

2. Use a text editor to remove the **/etc/fstab** entry.

3. Run the following command to remove the swapfile:

        rm -f /
