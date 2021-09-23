---
permalink: /create-or-remove-a-swap-file-in-rhel-based-distributions
audit_date:
title: 'Create or Remove a swap file in RHEL-based distributions'
type: article
created_date: '2021-08-23'
created_by: Ivan Arteaga
last_modified_date: '2021-09-03'
last_modified_by: Miguel Salgado
product: Cloud Product
product_url: cloud-product
---

By default, a swap partition is not present on Cloud Servers, but you can add swap to a server
by allocating a swap file. The performance of a swap file is similar to that of a swap partition.
However, using a swap file makes it easier to control the swap size without repartitioning a
volume. You can control how aggressively the server uses this swap space by modifying the system
swappiness value.

### Create and remove a swap file in Linux CentOS7

There are two basic types of memory: Random access memory (RAM) and swap files.

You need RAM, used to store data while working on the computer, to run programs and services.
Data in RAM is not stored when you turn off the compute becaue its only in charge of a temporary
allocation to run those programs.

When you use a hard drive to store data permanently in the computer, you use a hard drive,
classified as electro-mechanical data storage device. This enables you to locate this type of
data in the system even after you power cycle the device. Later, the system can transfer the
data to RAM so the CPU can run programs and services as requested.

The system creates swap file to use disk space when you fill up the RAM and uses this memeory
to allocate data under kernel memory management.

Usually low RAM systems (approximately 1 GB) use swap files. However, you don't necessarily
require swap file to run your Linux enviroment, but we recommend it to avoid degraded system
performance when you run high-demand programs and processes.

### Recommended swap file size based on RAM

We recommmed the following swap files sizes based on RAM:

|RAM size | Swap size (without hibernation) | Swap size (with hibernation) |
|---------|---------------------------------|------------------------------|
| 256MB | 256MB | 512MB |
| 512MB | 512MB | 1GB |
| 1GB | 1GB | 2GB |
| 2GB | 1GB | 3GB |
| 3GB | 2GB | 5GB |
| 4GB | 2GB | 6GB |
| 6GB | 2GB | 8GB |
| 8GB | 3GB | 11GB |

#### Create a swap file

1. The first step to create the swap file is to verify the curret swap file size.
   Use `free -m` and   `swapon -s` to determine the size of the existing swap file.

```sh
 free -m

 swapon -s

 swapon -show
```

   The `swapon -show` command works, too, but remember that if there's no output
   or the output is **000**,  the swap file might not be configured. 

2. To create the swap file, run the following command:

```sh
dd if=/dev/zero of=/swapfile bs=1024 count=1048576`
```

   Following are the parts of the command:

   - **if**: input file  (always the same)
   - **of**: output file (you can name this file)
   - **bs**: block size  (keep value at **1024**)
   - **count**: amount of blocks to read and write (determineds how much space you need to create a swap file)

   Remember: If you require an specific size, you can modify the **count** value by mutiplying
   the **bs** value for the new size (in MB). For example, 1024 x 4096 = 4194304, so the new value
   for **count** is **4194304**. 

3. Provide the root user with read and write permissions to the swap file by using the following command:

```sh
chmod 600 /swapfile
```

4. Set up the swap area by suing the following command:

```sh
mkswap /swapfile`
```

5. Activate swap memory with `swapon /swapfile` and use your text editor to add 
   `/swapfile    swap    swap    defaults    0   0` to the **/etc/fstab** file.

   | Filesystem|Mount Point|Type |Options| Dump|Pass|
   | ----------- | ----------- |--|---|---|--|
   | /swapfile | none |swap |defaults|0 |0 |

   For more information regarding fstab, visit [https://wiki.archlinux.org/index.php/Fstab](https://wiki.archlinux.org/index.php/Fstab).

6. Verify that the new swap file is configured with `free -m`, `swapon -s` or `swapon -show`.

#### Remove a swap file

1. Run the following command to deactivate the swap file:

        swapoff -v /swapfile

2. Use a text editor to remove the **/etc/fstab** entry.

3. Run the following command to remove the swapfile:

        rm -f /swapfile
