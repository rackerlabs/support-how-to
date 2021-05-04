---
permalink: create-sudo-user-in-centos
audit_date: '2020-05-20'
title: 'Create a sudo user in CentOS'
type: article
created_date: '2020-05-20'
created_by: John Garcia
last_modified_date: '2020-05-20'
last_modified_by: William Loy
product: Cloud Servers
product_url: cloud-servers
---

This article describes the process of granting sudo access to a new or existing user on CentOS&reg;.

### Create a new user

1. Create a new user by using the `adduser` command followed by the new user's `<username>` as shown in the following example:

        [root@server-01 ~]# adduser newuser
  
2.  Use the `passwd` command followed by the new user's `<username>` to set up a password for `newuser`. Enter the new password in the verification prompt twice.

        [root@server-01 ~]# passwd newuser
        Changing password for user newuser.
        New password:
        Retype new password:
        passwd: all authentication tokens updated successfully

### Grant root permissions to a new or existing user

1. Edit the **sudoers** file by using the following command:

        [root@server-01 ~]# visudo


2.  You then see a version similar to following text:

    
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

3. Press the **i** key on your keyboard to enter insert mode. Next press the **j** key to move the cursor down and the **k** key to move it up to the following section:

        ## Allow root to run any commands anywhere
        root    ALL=(ALL)       ALL

4.  Add the newly created user by inserting `<username> ALL=(ALL) ALL` on a new line as show in the following example:

        ## Allow root to run any commands anywhere
        root    ALL=(ALL)       ALL
        newuser ALL=(ALL)       ALL

5.  Press the **i** key to exit insert mode, followed by typing **:wq** to save and exit.  

### Verify permission change

1. Use the `su` command followed by `- <username>` to access the new user account.

        [root@server-01 ~]# su - newuser
        [newuser@server-01 ~]$ 

2. Use the `sudo -i` command to test if the new user account can elevate permissions. Enter the new user's password. Verify these steps by using the following example:


        [newuser@server-01 ~]$ sudo -i

        We trust you have received the usual lecture from the local System
        Administrator. It usually boils down to these three things:

         #1) Respect the privacy of others.
         #2) Think before you type.
         #3) With great power comes great responsibility.

        [sudo] password for newuser:
        [root@server-01 ~]# 


3. Use the `whoami` command to verify you are currently the root user.

        [root@server-01 ~]# whoami
        root
