---
permalink: What-are-inodes-in-Linux
audit_date:
title: 'What are inodes in Linux'
type: article
created_date: '2021-03-19'
created_by: Miguel Salgado
last_modified_date: '2021-03-19'
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

# Inodes in Linux
This article provides you an overview on what is an inode and helpful commands that will allow you to check the usage.

## What is an inode?
In linux, every file and directory requires an index node (inode) to be allocated in the filesystem. Inodes do not store actual data, instead they store the metadata where the storage blocks of each file's data can be found.

## What metadata can be found in an inode?
The metadata in an inode are the following:
1. File type
2. Permissions
3. Owner ID
4. Group ID
5. Size of file
6. Time last accessed
7. Time last modified
8. Soft/Hard Links
9. Access Control List (ACLs)

## How to check the inode number in a specific file?
We have different ways to check the inode number. In the following example we have created the files named ***test***, with the command 'stat' we can see the file statistics, in this case we will focus in the inode number:
```
[root@Rackspace-Server /]# touch test
[root@Rackspace-Server /]# stat test
File: test
Size: 0               Blocks: 0          IO Block: 4096   regular empty file
Device: ca01h/51713d    Inode: 13          Links: 1
Access: (0644/-rw-r--r--)  Uid: (    0/    root)   Gid: (    0/    root)
Context: unconfined_u:object_r:etc_runtime_t:s0
Access: 2021-03-26 15:51:27.036124392 -0500
Modify: 2021-03-26 15:51:27.036124392 -0500
Change: 2021-03-26 15:51:27.036124392 -0500
Birth: -
```

Another way to check the inode number of the ***test*** file, you can list it by the contents of the directory. We can run a combination of commands in the directory, it is located by using 'ls' and 'grep'.
```
[root@Rackspace-Server /]# ls -lhi | grep test
    13 -rw-r--r--.   1 root root    0 Mar 26 15:51 test
```

Or also with the command 'ls -i' specifying the file/directory:
```
[root@Rackspace-Server /]# ls -i test
13 test
```

***Note: Take in count that 'test' is the name of the file we are using to show the inode number, it can be under any other name or directory and it will bring a different inode number.***

## How to check the inode usage on the Filesystems?
We are going to check the inodes in all the mounted filesystems, but focus on '/dev/xvda1' where we have a maximum inodes number of 1,310,720.
```
[root@Rackspace-Server ~]# df -i
Filesystem      Inodes IUsed   IFree IUse% Mounted on
devtmpfs         99906   318   99588    1% /dev
tmpfs           103934     1  103933    1% /dev/shm
tmpfs           103934   500  103434    1% /run
tmpfs           103934    17  103917    1% /sys/fs/cgroup
/dev/xvda1     1310720 47034 1263686    4% /
```
Adding the flag '-h' to the command 'df -h' will give you a readable output, it will not give you an exact number but it gives you a more readable output.
```
[root@Rackspace-Server ~]# df -ih
Filesystem     Inodes IUsed IFree IUse% Mounted on
devtmpfs          98K   318   98K    1% /dev
tmpfs            102K     1  102K    1% /dev/shm
tmpfs            102K   500  102K    1% /run
tmpfs            102K    17  102K    1% /sys/fs/cgroup
/dev/xvda1       1.3M   46K  1.3M    4% /
```
## How to count inodes under a certain directory?
In order to check the number of inodes in a specific directory you need to run the following command:
```
find <DIRECTORY> | wc -l
```

In the following example we are going to check the file count in the '/root' directory. We are getting 11 files created under /root.
```
[root@Rackspace-Server ~]# pwd
/root
[root@Rackspace-Server ~]# find . | wc -l
11
```

***Note: Since this was done in a new server, your output will be different.***

## What happens to the inode assigned when moving or copying a file?
When a file is copied, a different inode is assigned to the second file.
```
[root@Rackspace-Server inodes]# touch file1
[root@Rackspace-Server inodes]# ls -lhi
total 0
262446 -rw-r--r--. 1 root root 0 Mar 26 19:30 file1

[root@Rackspace-Server inodes]# cp file1 file2

[root@Rackspace-Server inodes]# ls -lhi
total 0
262446 -rw-r--r--. 1 root root 0 Mar 26 19:30 file1
262440 -rw-r--r--. 1 root root 0 Mar 26 19:31 file2
```
Things are different when moving a file, the inode is still the same as long as it does not move from filesystems.
```
[root@Rackspace-Server inodes]# ls -lhi directory1/file1
262440 -rw-r--r--. 1 root root 0 Mar 26 19:34 directory1/file1

[root@Rackspace-Server inodes]# mv directory1/file1 directory2/

[root@Rackspace-Server inodes]# ls -lhi directory2/file1
262440 -rw-r--r--. 1 root root 0 Mar 26 19:34 directory2/file1
```

In the following example we moved the file 'file1' from '/dev/xvda1' to the '/dev/xvdb1' filesystem.
```
[root@Rackspace-Server inodes]# df -hP {/,/backups}
Filesystem      Size  Used Avail Use% Mounted on
/dev/xvda1       20G  2.4G   17G  13% /
/dev/xvdb1      391M     0  391M   0% /backups

[root@Rackspace-Server inodes]# pwd
/inodes

[root@Rackspace-Server inodes]# mv test /backups

[root@Rackspace-Server inodes]# ls -lhi /backups/test
117329 -rw-r--r--. 1 root root 0 Mar 26 19:34 /backups/test
```

When the file was moved to another filesystem, it got a different inode assigned.

## Best practices to keep low the inode usage
It is always recomended to check on the inode usage since it can lead to issues to create newer files.
1. Delete unnecessary files and directories
2. Delete cache files
3. Delete old email files
4. Delete temporary files

## What could happen if inodes are never attended to?
Even though the server has free disk space, the server can run out of inodes. These are the consequences that can occur when the server does not have enough inodes when creating more files.
1. Data loss
2. The applications may crash
3. The server may restart
4. Processes may not restart
5. Scheduled tasks may not run



