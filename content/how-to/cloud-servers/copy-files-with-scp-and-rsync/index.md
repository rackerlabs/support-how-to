---
permalink: copy-files-with-scp-and-rsync
audit_date: '2021-05-04'
title: 'Copy files with SCP and Rsync'
type: article
created_date: '2020-06-18'
created_by: Jose Quezada
last_modified_date: '2021-05-04'
last_modified_by: Ana Corpus
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to transfer a file from and to a remote server.

### Copying files and directories with SCP or Rsync

You can use SecureShell (SSH) or Remote Sync (Rsync) to transfer files to a remote server.
Secure Copy (SCP) uses SSH to copy only the files or directories that you select. On first
use, Rsync copies all files and directories and then it copies only the files and directories
that you have changed. It does not copy all the files and directories again.

### SSH and SCP examples

Copy a file from a remote server:

```sh
~$ scp user@IP.address:/path/file_name /local/destination/path/
```

Copy a directory from a remote server:

```sh
~$ scp -r user@IP.address:/path/directory[/] /local/destination/path/
```

Copy a file to a remote server:

```sh
~$ scp /local/path/file_name user@IP.address:/destination/path/
```

Copy a directory to a remote server:

```sh
~$ scp  -r /local/path/directory[/]  user@IP.address:/destination/path/
```

### Rsync examples

Because Rsync transfers files recursively, you do not need to add the `-r`
flag. You can use the following commands to transfer the files in an archived
or compressed manner:

- `-a` or `--archive`: Like recursion, this option preserves source characteristics, such as permissions.
- `-v` or `--verbose`: This option shows you more information during the transfer.
- `-z` or `--compress`: With this option, Rsync compresses the file data sent to the destination machine.

Copy a file from a remote server:
 
```sh
	~$ rsync [-avz] user@IP.address:/path/file_name /local/destination/path/
```

Copy a directory from a remote server:

```sh
	~$ rsync [-avz] user@IP.address:/path/directory[/] /local/destination/path/
```

Copy a file to a remote server:

```sh
	~$ rsync [-avz] /local/path/file_name user@IP.address:/destination/path/
```

Copy a directory to a remote server:

```sh
	~$ rsync [-avz] /local/path/directory[/]  user@IP.address:/destination/path/
```

#### Trailing slash on source path

A  trailing  slash ( \/ ) on the source path changes the transfer behavior to 
avoid creating an additional directory level at the destination. With the slash,
Rsync copies the directory content without creating a new folder. Without the slash,
it creates a new directory with the source directory name. Following are examples with
and without the slash:

`
~$ rsync [-avz] /local/path/directory/  user@IP.address:/destination/path/
`

`
~$ rsync [-avz] /local/path/directory  user@IP.address:/destination/path/
`

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/).
