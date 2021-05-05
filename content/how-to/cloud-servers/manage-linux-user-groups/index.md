---
permalink: manage-linux-user-groups
audit_date: '2020-06-11'
title: 'Manage Linux user groups'
type: article
created_date: '2020-06-09'
created_by: Chris Silva
last_modified_date: '2020-06-11'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article covers the basics of managing user groups on a Linux&reg; server. 

### Prerequisites

You need to have the following prerequisites:

- Basic understanding of Secure Shell (SSH&reg;)
- Sudo or administrative access to your server
- A Cloud Server running supported versions of Linux
- Basic knowledge of file and directory permissions on a Linux server


### User groups

User groups in Linux allow a group of users specific access or permissions to directories or files on
the Linux operating system. This access depends on the *group* permissions for the file or directory. 

**Note**: For more information on directory and file permissions, see 
[Changing Linux permissions](/support/how-to/changing-linux-permissions/#permissions).

The following example shows how group permissions affect a user's access.

    drwxr-xr-x. 5 root     root   4096 Jun  9 11:09 .
    drwxr-xr-x. 3 root     root   4096 Jun  9 11:03 ..
    drwxr-xr-x. 2 root     apache 4096 Jun  9 11:04 files
    -rw-rw-r--. 1 root     apache    0 Jun  9 11:09 somefile
    drwxr-xr-x. 2 root     apache 4096 Jun  9 11:04 test
    drwxr-xr-x. 2 testuser apache 4096 Jun  9 11:04 websitefiles

The permissions for this directory indicate:

- The `testuser` user is the owner of the directory **websitefiles**. The owner has `rwx`,
  which translates to read, write, and execute on the directory.
- The user, `apache`, has `r-x`, which means that they can read and execute on the directories.
- The user, `apache`, has `rw-rw-r--` on the file **somefile**, which means they can read and write
  to the file.  

### Directory versus file permissions

There are a few differences between directory and file permissions to consider when adding a user to a
group. For a file, read, write, and execute mean precisely that. The user can perform those tasks on a
*file*. However, in a *directory*, the permissions have the following meanings:

- **Read**: Allows a user to list the contents of a directory. 
- **Write**: Allows a user to create new files or directories within the directory.
- **Execute**: Allows a user to traverse into the directory. 

### Supplemental groups

When you need a user to share the permissions associated with a group, you should add the user to the
associated group.  

Consider the `testuser` user permissions: 

    # id testuser
    uid=1002(testuser) gid=1002(testuser) groups=1002(testuser)

This output shows that the user has only their default groups and has not been assigned to any supplemental groups. 

To give `testuser` access to the **files** directory, the user must be part of the `apache`
user group. 

**Note**: Some users also create a separate group for their web developers that includes the `apache` user
so that the functionality of Apache&reg; on the directory is not disabled.

### Example: Add a user to a group

This example adds `testuser` to the `apache` group. 

#### Check the group

First, check the `apache` group before making changes:

    # getent group apache
    apache:x:48:

You can see that no other users are part of the `apache` group. 

#### Add `testuser` to group

To add `testuser` to the group, run the following command from the terminal:

       usermod -aG apache testuser

The flags `-aG` translates to append and groups. The use of `-a` ensures that you add the user 
to a group rather than replacing their default group. 

#### Verify

Now, if you view the groups for `apache`, you see `testuser` in the group.

    # getent group apache
    apache:x:48:testuser

If you view `testuser`, you can see the user now has the `apache` group.

    # id testuser
    uid=1002(testuser) gid=1002(testuser) groups=1002(testuser),48(apache)

The test user now has access to the group-level permissions for directories and files with a group
ownership of `apache`. 

### Syntax to add users to groups

Use the same process to add users to other groups with the following command:

       usermod -aG <group> <user>

You can also add the user to multiple groups at once:

       usermod -aG <group1>,<group2>,etc <user>

As long as the group to which you add the user has the appropriate permissions for the directory they
need to access, this operation gives the user the access they need to manage the files and directories. 
