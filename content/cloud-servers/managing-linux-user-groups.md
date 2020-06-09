---
permalink: managing-linux-user-groups/
audit_date: '2020-06-09'
title: 'Managing Linux user groups'
type: article
created_date: '2020-06-09'
created_by: Chris Silva
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

This article goes over the basics of mananging user groups on a Linux server. 

### Prerequisites
You need to have the following prerequisites:
- Basic understanding of Secure Shell (SSH)
- Sudo or administrative access to your server
- A Cloud Server running supported versions of Linux.
- Basic understanding of file/directory permissions on a Linux server.


### User groups

User groups in Linux are used to allow specific access or permissions to directories or files on the Linux operating system to a group of users. This is based on the GROUP permissions for the file or directory. 

**Note**: For more information on directory and file permissions, please review the following link: [Changing Linux permissions](https://support.rackspace.com/how-to/changing-linux-permissions/#permissions)


The following example shows how GROUP permissions affect a user's access. For the purposes of this example, we will be using the user called `testuser`. 

Below is the file and directory permissions on a server. 

```
drwxr-xr-x. 5 root     root   4096 Jun  9 11:09 .
drwxr-xr-x. 3 root     root   4096 Jun  9 11:03 ..
drwxr-xr-x. 2 root     apache 4096 Jun  9 11:04 files
-rw-rw-r--. 1 root     apache    0 Jun  9 11:09 somefile
drwxr-xr-x. 2 root     apache 4096 Jun  9 11:04 test
drwxr-xr-x. 2 testuser apache 4096 Jun  9 11:04 websitefiles
```

As seen above, the `testuser` is the owner of the directory `websitefiles`. The permissions for this directory indicate the owner has `rwx` which translates to read, write, and execute on the directory. Additionally, the `apache` user has `r-x` which means that they can read and execute on the directories. The `apache` user also has `rw-rw-r--` on the file `somefile` which means they can read and write to the file.  


### Directory vs File Permissions

There are a few differences between directory and file permissions to consider when adding a user to a group. For a file, read, write, and execute mean exactly that. The user can perform thoses tasks on a file. However, in a directory, things work a bit differently for read, write, and execute. 

In a directory, the read permissions allows a user to get a listing of the contents of a directory. The write permission allows a user to create new files or directories within the directory. Finally, the execute permission allows a user to traverse into the directory. 


### Supplemental Groups

In the situation where you need a user to share the permissions associated with a group, the user will need to be added to the associated group.  

First, let's take a look at the `testuser` group permissions: 

```
# id testuser
uid=1002(testuser) gid=1002(testuser) groups=1002(testuser)
```

This shows that the user only has their default groups and has not been assigned to any supplemental groups. 

In order to give the `testuser` access to the `files` directory (above), they will need to be part of the `apache` user group. This is a fairly common operation but some users will also create a separate group for their webdevelopers that includes the `apache` user so that functionality of Apache on the directory is not disabled. For the purposes of this example, we will be using the `apache` group. 


### Adding users to groups

In this example, we will be adding `testuser` to the `apache` group. First, we can check the `apache` group before making changes:

```
# getent group apache
apache:x:48:
```
This shows that no other users are part of the `apache` group. 

In order to add `testuser` to the group, the following command is run from the terminal:

       usermod -aG apache testuser

The flags `-aG` translates to append and groups. The use of `-a` ensures that the user is added to a group rather than replacing their default group. 

Now, if we view the groups for `apache` we see `testuser` is listed.

```
# getent group apache
apache:x:48:testuser
```
Additionally, if we view `testuser`, we can see the `apache` group is added to the user.

```
# id testuser
uid=1002(testuser) gid=1002(testuser) groups=1002(testuser),48(apache)
```

The test user now has access to the GROUP level permissions for directories and files with a group ownership of `apache`. 


The same process can be used to add users to other groups. The following syntax is used to add a user to a group:

       usermod -aG <group> <user>

You can also add the user to multiple groups at once:

       usermod -aG <group1>,<group2>,etc <user>


With this in mind, as long as the group to which the user is added has the appropriate permissions for the directory they need to access, this will give the user the access they need to manage the files and directories. 
