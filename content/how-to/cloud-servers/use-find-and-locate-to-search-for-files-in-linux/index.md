---
permalink: use-find-and-locate-to-search-for-files-in-linux
audit_date: '2021-12-02'
title: 'Use Find and Locate to search for files in Linux'
type: article
created_date: '2021-12-02'
created_by: Alfonso Murillo
last_modified_date: '2021-12-02'
last_modified_by: Miguel Salgaddo
product: Cloud Servers
product_url: cloud-servers
---

This article will introduce two useful tools to search for files within the Linux filesystem. The first one is the `find` command, which can be found in any Linux distribution, and the second one is `locate`, which needs an installation.

### Find command
The find command is part of Linux by default. It offers multiple parameters to refine your search.

#### Find by name
The simplest searching command is to search by name where you are located:

```sh
$ find -name "FILE_NAME"
```

You can specify the directory where you want to search for the file:

```sh
$ find /home -name my_file.txt
$ find / -name my_other_file.txt
```

Take into consideration that this command is case sensitive. If you want to ignore the case use:

```sh
$ find -iname "FILE_NAME"
```

#### Inverse search
In case you want to search for files that do not adhere to the specified pattern you can negate the search parameters by using the `-not` parameter or `\!`. For example:

```sh
$ find -not -name "FILE_NAME_TO_AVOID"

or

$ find \! -name "FILE_NAME_TO_AVOID"
```

#### Find by file type
The `file` command also allows you to search for file types. Some common file type descriptors are:

- `f`: regular file
- `d`: directory
- `l`: symbol link
- `c`: character devices
- `b`: block devices

The desired file type goes after the `-type` attribute.

For example, to find al JSON files under the `etc` directory:

```sh
$ find /etc -type f -name "*.json"
```

#### Find by file size
There is also a parameter used to filter the search result depending on the size of the files: `-size`.

For the size units you can use the following suffixes:
- `c`: bytes
- `k`: kilobytes
- `M`: megabytes
- `G`: gigabytes
- `b`: 512-byte blocks

And to specify if you are talking about an exact size, a less than, or greater than use the following prefixes:
- *Exact search*: no prefix
- *Less than*: `-` prefix
- *Greater than*: `+` prefix

For example, to find all 3 gigabytes files under the home directory:
```sh
$ find /home -size 3G
```

For all files under 3 gigabytes:
```sh
$ find /home -size -3G
```

Files over 3 gigabytes:
```sh
$ find /home -size +3G
```

#### Search by time
You can also search files according to their last access, modification, or change times.
- *Access time*: `-atime` for the last time the file was read.
- *Modification time*: `-mtime` for the last time the file contents were modified.
- *Change time*: `-ctime` for the last time where the file's inode meta-data was changed.

It is also possible to compare against a reference file to return the ones that are newer:
```sh
$ find / -newer file_name
```

For the times, the parameters specified are in **days**. The same prefixes as in search by size can be used:

```sh
$ find /home -mtime 3
$ find /home -atime -2
$ find /home -ctime +5
```

To find files using time in minutes you can use:
```sh
$ find /home -mmin 3
```

#### Find by owner and permissions
There are also parameters to find files according to their owners (`-user` and `-group`) and their permissions (`-perm`):

```sh
$ find /home -user my_user
$ find /home -group my_group
$ find /home -perm 777
```

#### Defining search depth
When searching under a directory, the `find` command will return all files under that directory, even if they are inside other subdirectories. To control this depth you can define a maximum depth, a minimum depth, or both.

For example, to search only on the top directory and one level of subdirectories you could set the `-maxdepth` parameter to 2:

```sh
$ find -maxdepth 2 -name my_file
```

To define the minimum depth where `find` should search you use the `-mindepth` parameter:

```sh
$ find -mindepth 5 -name my_file
```

These parameters can be combined:

```sh
$ find -mindepth 4 -maxdepth 7 -name my_file
```

#### Executing commands on results
As saw in the depth commands, all `find` parameters can be combined to obtain very specific results. When you get the results you wanted it is possible to execute commands over them by using the `-exec` parameter.

When combining search parameters you can also use the `-and` and `-or` options to personalize your search criteria. When none of them are used, the `-and` option is the default.

For example, to change the permissions to all files under the `/my_dir` directory that currently have 777 permissions to 664 use the following:

```sh
$ cd /my_dir
$ find . -type f -perm 777 -exec chmod 664 {} \;
```

### Locate tool
The `locate` command is an alternative for `find`. The difference is that it uses a database of the files in the filesystem so it can perform quicker. To install the `locate` tool you can use:

- For Ubuntu/Debian Distributions:
```sh
$ sudo apt install mlocate`
```

- For CentOS/RHEL Distributions:
```sh
$ sudo yum install mlocate`
```

Locate uses a cron job to update the database daily, but it can be manually updated by using:

```sh
$ sudo updatedb
```

For searching the "basename", namely that the query is contained only in the file's name and not in the file's path, use the `-b` flag:

```sh
$ locate -b name
```

To find files that still exist (after the last `updatedb` call) use the `-e` flag:

```sh
$ locate -e name
```

For statistics from the generated database use:

```sh
$ locate -S
```

### Conclusion
Searching for files in the Linux command line might be difficult. The tools presented in this article provide an easy way to handle and find files. By understanding the different parameters the search can be as specific as one want it to be.

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
