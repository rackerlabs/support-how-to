---
permalink: create-sudo-user-in-centos/
audit_date:
title: 'Create Sudo User in CentOS'
type: article
created_date: '2020-05-20'
created_by: John Garcia
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

This article describes the process of granting sudo access to a new or existing user on CentOS.

# New User - Granting Sudo Access

### Creation of New User

1. Use the **adduser** command followed by the desired **<username>** to begin user creation.
```
[root@server-01 ~]# adduser newuser
```

2.  Use the **passwd** command with  the **<username>**  to set up a password for the New User. You will be prompted to enter this password twice to verify.

```
[root@server-01 ~]# passwd newuser
Changing password for user newuser.
New password:
Retype new password:
passwd: all authentication tokens updated successfully
```

### Grant Root Permissions for New or Existing User.

1.  Use the **visudo** command to edit the sudoers file.

```
[root@server-01 ~]# visudo
```

2.  You will see similiar text displayed. 

```
## Next comes the main part: which users can run what software on
## which machines (the sudoers file can be shared between multiple
## systems).
## Syntax:
##
##      user    MACHINE=COMMANDS
##
## The COMMANDS section may have other options added to it.
##
## Allow root to run any commands anywhere
root    ALL=(ALL)       ALL

## Allows members of the 'sys' group to run networking, software,
## service management apps and more.
# %sys ALL = NETWORKING, SOFTWARE, SERVICES, STORAGE, DELEGATING, PROCESSES, LOCATE, DRIVERS

## Allows people in group wheel to run all commands
%wheel  ALL=(ALL)       ALL

## Same thing without a password
# %wheel        ALL=(ALL)       NOPASSWD: ALL

## Allows members of the users group to mount and unmount the
## cdrom as root
# %users  ALL=/sbin/mount /mnt/cdrom, /sbin/umount /mnt/cdrom

## Allows members of the users group to shutdown this system
# %users  localhost=/sbin/shutdown -h now

## Read drop-in files from /etc/sudoers.d (the # here does not mean a comment)
#includedir /etc/sudoers.d

```

3. Use the **"i"** Key to enter Insert Mode, followed by using the **"j"** Key to move the cursor down and the **"k"** Key to move it up to the following section.

```
## Allow root to run any commands anywhere
root    ALL=(ALL)       ALL
```

4.  Add the following line below the previously mentioned line as shown.  **<username> ALL=(ALL) ALL**  

```
## Allow root to run any commands anywhere
root    ALL=(ALL)       ALL
newuser ALL=(ALL)       ALL
```

5.  Press the "**i**" Key to exit Insert Mode, followed by typing **":wq"** to Save and Exit.  

### Verify Permission Change

1. Use the **su** command followed with **"- <username>"** to switch to accounts.
```
[root@server-01 ~]# su - newuser
[newuser@server-01 ~]$ 
```

2. Use the **sudo -i** command to test if user account can elevate permissions.  You will be prompted to enter the user's password.

```
[newuser@server-01 ~]$ sudo -i

We trust you have received the usual lecture from the local System
Administrator. It usually boils down to these three things:

    #1) Respect the privacy of others.
    #2) Think before you type.
    #3) With great power comes great responsibility.

[sudo] password for newuser:
[root@server-01 ~]# 
```

3. Use the **whoami** command to verify you are currently the root user.

```
[root@server-01 ~]# whoami
root
```
