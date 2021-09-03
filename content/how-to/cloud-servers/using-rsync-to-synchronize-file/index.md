---
permalink: '/using-rsync-to-synchronize-files'
audit_date:
title: 'Using rsync to Synchronize Files'
type: article
created_date: '2021-08-25'
created_by: Alfonso Murillo
last_modified_date: '2021-09-25'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: cloud-servers
---

## Using rsync to synchronize files
The purpose of this article is to provide an understanding of using the `rsync` tool.

Rsync stands for "remote synchronization" and it is an efficient tool for copying and synchronizing files or directories locally or remotely. The efficiency is achieved by moving only those parts of the files that have changed, instead of copying everything again.

### Usage

##### Syntax
The `rsync` syntax is really simple:

`rsync [OPTIONS] SOURCE DESTINATION`

##### Options
The following are some of the most useful options to add to the `rsync` command:
- `-v` or `--verbose`: the verbose flag will display information about the progress of the task.
- `-a` or `--archive`: equals -rlptgoD. The archive flag sets the most common options instead of setting them individually. 

The following are the options set with `-a` that can also be set one by one:
- `-r` or `--recursive`: recurses into directories. Must be used when you need to copy all the contents inside a directory.
- `-l` or `--links`: copies symlinks as symlinks, does not copy the file to which they point to avoiding loopbacks to other directories.
- `-p` or `--perms`: preserves the permission of the file.
- `-t` or `--times`: preserves the original modification timestamps.
- `-g` or `--group`: preserves the files' groups ownership.
- `-o` or `--owner`: preservers the files' owners.
- `-D`: preserves the device files and special files. You can use the options `--devices` and `--specials` to accomplish this.

Some other options that can be used are:
- `-progress`: displays the progress status per file.
- `--max-size=SIZE`: avoids transferring files larger than the specified size.
- `--min-size=SIZE`: avoids transferring files smaller than the specified size.

##### Source and destination paths
It is important to take into consideration how the source and destination paths are specified since a slash can change the behavior.

For exmample, to copy everything inside a directory called in `/home` into another one called `/new/destination/` the correct `rsync` syntax would be:

```sh
rsync -a /home/ /new/destination
```

To copy the directory so that a new folder called `home` is also created in the destination directory the syntax would be:

```sh
rsync -a /home /new/destination
```

Note that a single slash after `/home` will change the end result.

#### Using rsync with a remote host
When having SSH access to a remote host it is possible to use `rsync` with a really similar syntax. To copy the contents from the `/home` directory to the `/home/new` directory in a host called `REMOTE_HOST` a **push** operation is needed. The syntax would be:

```sh
rsync -a /home USER@REMOTE_HOST:/home/new
```

It is possible to retrieve files from a remote host to your local machine using `rsync` with a **pull** operation. The syntax is similar as the mentioned above but now the remote host is the source:

```sh
rsync -a USER@REMOTE_HOST:/home/new /home
```

### Conclusions
Using the `rsync` tool is a reliable and efficient way to synchronize files between directories or hosts. A traditional copy command would not preserve all of the files' properties and would take a longer time since it copies everything.

With the options mentioned in this article it is possible to determine the properties that should also be copied and the `rsync` algorithm will reduce the task time by copying only the differences between both source and destination.

### Related articles
- [Copy files with SCP and Rsync](https://docs.rackspace.com/support/how-to/copy-files-with-scp-and-rsync/)
- [Back up your files with rsync](https://docs.rackspace.com/support/how-to/backing-up-your-files-with-rsync)
