---
permalink: linux-nobootwait-vs-nofail
audit_date: '2022-05-31'
title: 'Diferences Between Nobootwait and no fail in Linux Filesystems'
type: article
created_date: '2022-05-31'
created_by: Marco Estrada
last_modified_date: '2022-05-31'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: cloud-servers
---

 As a linux user we often would need to add/change the storage options in our system, and likely we will start using the **/etc/fstab**  file, which is crucial that we dominate in order to have a good administration of our server before that we continue with the main topic I would like to give a brief introduction to the fstab file. 

### The fstab file.
When we power up our device the linux boot process starts. and one of the "steps" (if you will) would be to mount the filesystems. The fstab file stores the filesystems that will be mounted at boot that is, in order to avoid the manual mounting of the filesystems, we would need to specify which filesystems would be mounted at boot. Usually the different distributions of linux have by default a fstab file with the necesary filesystems to run linux for example **"/"** or the root, the **/boot** filesystem etc.

Fstab is a plaintext file in a very simple format, but also can be very confusing at the first time.

!{{<image src="Image1.png">}}
<p align="center">1.1 Image of a default fstab file

In the fstab file we could find six fields which are:

1. The UUID or device: This is to list which device are we using, but the "modern" linux systems prefer using the UUID. For example we could have the following:
    ```sh
    Device: /dev/sda1
    UUID:   70ccd6e7-6ae6-44f6-812c-51aab8036d9
    ```
    *The device and the UUID is in practical terms the same, but as we stated before, it will be more common that we see the UUID.*

2. **The mount point:** This indicates where the filesystem is attached or where are we going to attach the filesystem.
3. **The filesystem type:** As the name says it shows the filesystem type. One example in the image would be swap.
4. **Options:** long options for the filesystem for example Nobootwait, nofail, noauto etc.
5. **Backup information** (used by the dump command): This is no longer relevant and should always be set to 0.
6. **The filesystem Integrity test order.**

To conclude with the this brief introduction to the fstab file, It is worth mentioning that there are other options that we can configure in the server, the most interesting being instead of using one file to mount the filesystems, use, the /etc/fstab.d directory where we would have individual files for our filesystems. The other alternative would be to use systemd units for the filesystems, but this is out of the scope of this article.

### Nobootwait
Nobootwait is an option that we can use to stop the boot process from trying to mount a filesystem that resides in a hardware device that is not available or present,allowing us to continue with the boot proccess. This will help us prevent the boot sequence to "hang" at start.

Example of nofail option in the fstab file.
```sh
Device		            Filesystem	    format  options		                                min max
dev/vg_data/log_data    /var/log/backup ext3    defaults,nobootwait                         1   2
/dev/sda2               /mnt/other      auto    defaults,nofail,x-systemd.device-timeout=9  0   2
```

### NoFail
The NoFail option would be the opposite to the nobootwait because if we add this option to one filesystem in the fstab file, at boot time, the system will trying to mount the filesystem even if said filesystem  is not present. What would happen is that the system will not boot until the filesystem is mounted. This option is often use in filesystems that are critical to the linux system and that need to be mounted no matter what.

As we can see, this options can be used depending on what we want to accomplish, if we need that the system boots even if some filesystem are not present or cannot mount, we can use the **nobootwait** option in those filesystems that are not that "important" for us.

On the other hand if we need that one filesystem, (because is critical and needed for our operations) is mounted, we could use the Nofail option.

## References
- [How do I disable mounting of a filesystem if the hardware has failed. - Redhat] (https://access.redhat.com/solutions/343003)
<br>

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
