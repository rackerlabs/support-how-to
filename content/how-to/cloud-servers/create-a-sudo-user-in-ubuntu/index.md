---
permalink: create-a-sudo-user-in-ubuntu
audit_date: '2021-05-26'
title: 'Create a sudo user in Ubuntu'
type: article 
created_date: '2020-05-20'
created_by: John Garcia
last_modified_date: '2021-05-26'
last_modified_by: Ana Corpus
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to grant sudo access to a new or existing user on the Ubuntu&reg; operating system.

### Create a new user

1. Use `adduser` followed by the new `<username>` in `newuser` to begin user creation.

       root@server-01:~# adduser newuser
       Adding user `newuser' ...
       Adding new group `newuser' (1001) ...
       Adding new user `newuser' (1001) with group `newuser' ...
       Creating home directory `/home/newuser' ...
       Copying files from `/etc/skel' ...

2. Enter password for the new user. At the prompt, enter this password twice to set and verify it.

       New password:
       Retype new password:
       passwd: password updated successfully

3. If you want to add contact information for the new user, enter them at the prompt or press **ENTER** to proceed with the defaults. When you finish, press **y** to verify that the entered information is correct.  

       Changing the user information for newuser
       Enter the new value, or press ENTER for the default
         Full Name []: New Hire
         Room Number []:
         Work Phone []:
         Home Phone []:
         Other []:
       Is the information correct? [Y/n] y

### Grant root permissions for a new or existing user.

1.  Use `visudo` to edit the **sudoers** file.

        root@server-01:~# visudo

2. Text similiar to the following example displays:

       GNU nano 4.8                       /etc/sudoers.tmp
       #
       # This file MUST be edited with the 'visudo' command as root.
       #
       # Please consider adding local content in /etc/sudoers.d/ instead of
       # directly modifying this file.
       #
       # See the man page for details on how to write a sudoers file.
       #
       Defaults        env_reset
       Defaults        mail_badpass
       Defaults        secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:>

       # Host alias specification

       # User alias specification

       # Cmnd alias specification

       # User privilege specification
       root    ALL=(ALL:ALL) ALL

       # Members of the admin group may gain root privileges
       %admin ALL=(ALL) ALL

       # Allow members of group sudo to execute any command
       %sudo   ALL=(ALL:ALL) ALL

       # See sudoers(5) for more information on "#include" directives:

       #includedir /etc/sudoers.d

3. Use the **Down Arrow** key to move the cursor to the following section.

       # User privilege specification
       root    ALL=(ALL:ALL) ALL

4. Add the newly created user by inserting `<username> ALL=(ALL:ALL) ALL` at the end of the user privilege section as shown in the following example.

       # User privilege specification
       root    ALL=(ALL:ALL) ALL
       newuser ALL=(ALL:ALL) ALL

5. Press the **Ctrl x** to exit. Press **y** to save and **ENTER** to complete the change.

### Verify the permission change

1. Use `su` followed by `- <username>` to switch to the new user account.

       root@server-01:~# su - newuser
       newuser@server-01:~$ 

2. Use `sudo -i` to verify that the user account can elevate permissions. At the prompt, enter the new user's password.

       newuser@server-01:~$ sudo -i
       [sudo] password for newuser:
       root@server-01:~#

3. Use `whoami` to verify that you are currently the root user.

       root@server-01:~# whoami
       root

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/).
