---
permalink: set-up-lsyncd-locally-and-over-ssh-to-sync-directories
title: 'Set up Lsyncd locally and over SSH to sync directories'
type: article
created_date: '2022-03-29'
created_by: Alfonso Murillo
last_modified_date: '2022-03-29'
last_modified_by: Jorge Garcia
audit_date: '2022-03-29'
product: Cloud Servers
product_url: cloud-servers
---
This article explains how to set up the **Lsyncd** tool both locally and over SSH to keep directories synchronized.

**Lsyncd** stands for Live Syncing Mirror Daemon, and it is a tool used in Linux systems to keep directories synchronized. These directories can be found locally, within the same machine, or remotely, on different machines. For remote synchronization, this article focuses on using SSH to accomplish it.

The advantage of using **Lsyncd** is that it is a free and lightweight solution that will not affect the filesystem's performance. It monitors the files periodically for any changes and then uses `rsync` to perform the synchronization.

## Requirements
For **Lsyncd** to work properly you need to have `rsync` installed.

**NOTE:** Is recommended to run the following commands as sudo

To install `rsync` in CentOS, Fedora, or Red Hat systems use:
```sh
yum install rsync
```

For Ubuntu or Debian systems use:
```sh
apt-get update
apt-get install rsync
```

### Install Lsyncd
To install `lsyncd` on a CentOS, Fedora, or Red Hat system it is necessary to enable the EPEL repository before installing `lsyncd`. The following commands are used to accomplish the installation:
```sh
yum install epel-release
yum install lsyncd
```

For an Ubuntu or Debian system, the `lsyncd` tool is included in the default repositories, so the following commands should be enough for the installation:

```sh
sudo apt-get update
sudo apt-get install lsyncd
```

To confirm that the installation was successful and verify the installed version, use the following command:
```sh
lsyncd -version
```

### Lsyncd configuration files
The default configuration file for Lsyncd is created automatically at `/etc/lsyncd.conf` when the installation is completed.

This file contains all the parameters used to perform the synchronization between directories, either locally or remotely.

For example configuration files you can review the contents in `/usr/share/doc/lsyncd*/examples/` (the * refers to the Lsyncd version installed).

```sh
cd /usr/share/doc/lsyncd-2.2.2/examples/
ls -lh
total 40
-rw-r--r--. 1 root root 715 Feb 16 2017 lalarm.lua
-rw-r--r--. 1 root root 1055 Feb 16 2017 lbash.lua
-rw-r--r--. 1 root root 534 Feb 16 2017 lecho.lua
-rw-r--r--. 1 root root 3376 Feb 16 2017 lftp.lua
-rw-r--r--. 1 root root 2278 Feb 16 2017 lgforce.lua
-rw-r--r--. 1 root root 2737 Feb 16 2017 limagemagic.lua
-rw-r--r--. 1 root root 2770 Feb 16 2017 lpostcmd.lua
-rw-r--r--. 1 root root 211 Feb 16 2017 lrsync.lua
-rw-r--r--. 1 root root 204 Feb 16 2017 lrsyncssh.lua
-rw-r--r--. 1 root root 4047 Feb 16 2017 lsayirc.lua
```

For the purposes of this article, the configuration files that can be useful examples are `lrsync.lua` for local synchronization, and `lrsyncssh.lua` for remote synchronization.

A configuration file will have the following structure:

```sh
cat /usr/share/doc/lsyncd-2.2.2/examples/lrsync.lua
[...]
-- User configuration file for lsyncd.
-- Simple example for default rsync.
settings {
    statusFile = "/tmp/lsyncd.stat",
    statusInterval = 1,
}

sync{
    default.rsync,
    source="src",
    target="trg"
}
```

As mentioned before, Lscynd uses the `rsync` tool to perform the synchronization, so you are able to use the `rsync` flags to personalize the process by adding an `rsync` parameter to the `sync` statement:

```sh
[...]
sync {
    default.rsync,
    source="src",
    target="trg",
    rsync = {
        archive = false,
        compress = true,
        links = false,
        owner = false,
        perms = false,
        verbose = true
    }
}
[...]
```

Also, it is important to consider that Lsyncd aggregates the events for a default of 20 seconds before verifying if any changes have been done. This time can be modified by using the `delay` parameter in the `sync` section of the configuration file:

```sh
sync {
    default.rsync,
    source = "src",
    target = "trg",
    delay = 5,
}
```

### Synchronize local directories
To synchronize the contents of the local directory `/path/source_dir` to the local directory `/path/destination_dir` we need to perform some changes in the configuration file and it is recommended to create a log file and a status file to keep track of the task progress, although it is an optional step:

```sh
mkdir /var/log/lsyncd
touch /var/log/lsyncd/lsyncd.{log,status}
```

The next step is to modify the configuration file in `/etc/lsyncd.conf` to specify the source and target directories and, if created, the location of the log and status files. The configuration will be as follows:

```sh
-- User configuration file for lsyncd.
-- Simple example for default rsync, but executing moves through on the target.
-- For more examples, see /usr/share/doc/lsyncd*/examples/
settings {
    logfile = "/var/log/lsyncd/lsyncd.log",
    statusFile = "/var/log/lsyncd/lsyncd.status"
}

sync {
    default.rsync,
    source = "/path/source_dir",
    target = "/path/destination_dir"
}
```

To activate this new configuration start the service with the following command:

```sh
systemctl start lsyncd
```

After following the above instructions, the Lsyncd will start synchronizing the contents from `/path/source_dir` to `/path/destination_dir`.

**WARNING**: It is only safe to enable Lsyncd to start on boot if you are certain that the destination directories are never changed by anything other Lsyncd. Otherwise, do not enable Lsyncd on boot and make sure the MOTD contains a line to show that Lsyncd is installed and in use. For example:

On reboot, take the following steps:

rsync check if you are in a "remote/server" situation:
```sh
rsync -n -avrc root@REMOTE_SERVER:/PATH_TO_FOLDER_TO_BE_SYNCED/* /PATH_TO_FOLDER/
```
Start Lsyncd with:
```sh
systemctl start lsyncd.service
```

#### Need to synchronize multiple local directories?
To synchronize more than one pair of directories it is possible to add more `sync` statements in the configuration file:

```sh
[...]
sync{
default.rsync,
    source = "/path/source_1",
    target = "/path/target_1"
}

sync{
    default.rsync,
    source = "/path/source_2",
    target = "/path/target_2"
}
[...]
```

### Synchronize remote directories through SSH
To accomplish a remote synchronization using Lsyncd, the source server must have passwordless SSH access to the target server. This is done by creating SSH keys in the **source** server.

#### Generate keys for SSH passwordless access
Use the following command **on the source server** to generate the keys:

```sh
ssh-keygen -t rsa
```

You will be prompted to enter the file where you want to save the key; unless you have a special configuration, leave it empty to use the default location. After this, another prompt will ask for a passphrase; leave this empty as you need complete passwordless login.

Now that the keys are generated, copy the key to the **destination** server. To copy it into the `authorized_keys` file in the destination server, use the following instruction on the **source** server where the keys have been generated:

```sh
sudo su
ssh-copy-id DESTINATION_SERVER_IP
```

To test that the passwordless connection is accomplished, log into the **destination** server from the **source** one:

```sh
ssh DESTINATION_SERVER_IP
```

If you are able to log without being prompted for a password, the process has succeeded.

Now that you are logged in, create a directory on the remote host that will work as the destination folder and exit the SSH session:

```sh
mkdir /path/remote_destination_dir
exit
exit
```

#### Edit the configuration file
The structure of the configuration file will remain as explained in the section for synchronizing local directories, but some changes will be made to the `sync` statement:
- The `default.rsync` property will be changed to `default.rsyncssh` to enable the `rsync` tool over SSH.
- The `target` property will be replaced with two properties to specify the remote destination: `host` and `targetdir`.

The configuration file will look like this:

```sh
[...]
settings = {
    logfile = "/var/log/lsyncd/lsyncd.log",
    statusFile = "/var/log/lsyncd/lsyncd.status"
}

servers = {
 "REMOTE_IP"
}
sourceList =
{
        "PATH_TO_FOLDER_TO_BE_SYNCED",
}
for _, source in ipairs( sourceList ) do
        for _, server in ipairs(servers) do

sync {
    default.rsyncssh,
    source = "/path/source_dir",
    host = "DESTINATION_SERVER_IP",
    targetdir = "/path/remote_destination_dir"
}
[...]
```

Once the changes have been made to the configuration file start the service as explained above:

```sh
systemctl start lsyncd
```

If the Lsyncd service is already running, just restart it:

```sh
sudo service lsyncd restart
```

**WARNING:** It is only safe to enable Lsyncd to start on boot if you are certain that the destination directories are never changed by anything other Lsyncd. Otherwise, do not enable Lsyncd on boot and make sure the MOTD contains a line to show that Lsyncd is installed and in use. For example:

On reboot, take the following steps:

rsync check if you are in a "remote/server" situation
```sh
rsync -n -avrc root@REMOTE_SERVER:/PATH_TO_FOLDER_TO_BE_SYNCED/* /PATH_TO_FOLDER/
```

Start Lsyncd with
```sh
systemctl start lsyncd.service
```

### Excluding directories from Lsyncd
Sometimes you need to exclude some selected folders in a specific directory. Examples include: 
- NFS mounted media files.
- Log files. When synchronized, log files create a lot of unnecessary chatter and bandwidth usage. In some cases, this can cause significant delays in synchronization.
- Temporary files used by running processes.

In order to exclude folders only you need to put the relative path of the excluded folder. For example:
- */var/www* is the destination directory being synced to the slaves
- */var/www/vhosts/www.example.com/wp-content/uploads* is the directory that is mounted from your NFS server, or that you otherwise don't want synced.
- Create an excludes in the lsyncd configuration. Assuming you're using Lsyncd 2.1.5 on CentOS 6, first ensure you have an excludes file in place within 
Lsyncd's configuration as shown below next to the 'excludeFrom line:
```sh
vim /etc/lsyncd/lsyncd.conf
[...]
sync {
    default.rsyncssh,
    source="/var/www/",
    host=server,
    targetdir="/var/www/",
    excludeFrom="/etc/lsyncd-excludes.txt",
    rsync = {
```

Next exclude the path relative to the source directory specified for synchronization. Since the target directory is /var/www, and the directory we want to exclude is /var/www/vhosts/www.example.com/wp-content/uploads, our entry would be:
```sh
cat /etc/lsyncd-excludes.txt
vhosts/www.example.com/wp-content/uploads
```
*CAUTION: Make sure the excludes file has no empty lines in it. If it does, lsyncd treats this as "exclude /" and then everything gets excluded.*


### Lsyncd on NFS solutions
Lsyncd is commonly used to replicate files in a master-slave architecture. While this works great for handling content/code updates, for user-contributed or media files, it is often easier to use NFS to share a folder between the various web servers. Be very careful to exclude folders shared over NFS from Lsyncd. In the worst case scenario, where your master server is rebooted but the NFS share fails to mount, this could result in Lsyncd wiping out the contents of your NFS share.

There are a couple of ways to handle this. 

#### Option 1: Excluding directories from Lsyncd
For more details see the section 'Excluding directories from Lsyncd'

#### Option 2: Use a symbolic link
Rsync by default does not work with the targets of symbolic links. We can use this to protect the NFS-mounted content.

Instead of:

*/var/www* <-- root folder for Lsyncd replication
*/uploads* <-- NFS share mount point

Mount the NFS share under a different folder, say /nfsmount, then do the following (assuming the uploads content has already been copied to /nfsmount/uploads):
```sh
cd /var/www
rm -Rf uploads
ln -s /nfsmount/uploads uploads
```
Now your NFS-mounted content is safely located outside of the Lsyncd-replicated directory tree.

#### Option 3: Set rsync parameters
Rsync supports a -x option that tells rsync not to cross file-system boundaries.  But before proceeding, there are several notes that you need to be aware of before trying this:

- This will not work with Cloud Block Storage volumes, extra LVM volumes, etc. 
- This will not work if Lsyncd resides on the same server as the NFS server. This option assumes you have a dedicated NFS server
- This only works if the source is a single filesystem

For Lsyncd 2.0.x:
Add this option to the options Lsyncd passes to rsync by editing the rsyncOpts line in /etc/lsyncd.lua:
```sh
sync{
        default.rsyncssh,
        source="/var/www",
        host="10.x.x.x",
        targetdir="/var/www",
        delete="running",
        rsyncOpts="-avzx"
}
```

For Lsyncd 2.1.x:
With Lsyncd 2.1.x, rsyncOpts has been changed to rsync={options} with the use of options with a full name rather than just a letter like before.  Add the following to /etc/lsyncd.conf:
```sh
sync{
        default.rsyncssh,
        source="/var/www",
        host="10.x.x.x",
        targetdir="/var/www",
        delete="running",
        rsync={ one_file_system=true }
 }
```

## Conclusions
Using Lsyncd to keep local and remote folders synchronized is an economic and efficient alternative and, thanks to the multiple options available for the configuration file, it can be personalized to meet your needs.

## Related articles
- [Using rsync to Synchronize Files](https://docs.rackspace.com/support/how-to/using-rsync-to-synchronize-file)

<br>

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
