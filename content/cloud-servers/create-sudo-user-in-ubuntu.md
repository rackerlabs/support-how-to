---
permalink: create-sudo-user-in-ubuntu/
audit_date:
title: 'Create Sudo User in Ubuntu'
type: article 
created_date: '2020-05-20'
created_by: John Garcia
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

This article describes the process of granting sudo access to a new or existing user on Ubuntu.

# New User - Granting Sudo Access

### Creation of New User

1. Use the **adduser** command followed by the desired **<username>** to begin user creation.
```
root@server-01:~# adduser newuser
Adding user `newuser' ...
Adding new group `newuser' (1001) ...
Adding new user `newuser' (1001) with group `newuser' ...
Creating home directory `/home/newuser' ...
Copying files from `/etc/skel' ...
```

2. Enter password for New User. You will be prompted to enter this password twice to verify.
```
New password:
Retype new password:
passwd: password updated successfully
```

3. Enter New User Contact Information (as needed). You will be prompted to Enter New User's Full Name, Room Number, Phone Numbers, and any additional information you may wish to record.  Press the **ENTER** key to proceed with defaults.  Lastly, press the **"y"** key to verify that the entered information is correct.  
```
Changing the user information for newuser
Enter the new value, or press ENTER for the default
        Full Name []: New Hire
        Room Number []:
        Work Phone []:
        Home Phone []:
        Other []:
Is the information correct? [Y/n] y
```
### Grant Root Permissions for New or Existing User.

1.  Use the **visudo** command to edit the sudoers file.
```
root@server-01:~# visudo
```

2.  You will see similiar text displayed.
```
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
```

3. Use the **"Down Arrow"** Key to move the cursor to the following section.

```
# User privilege specification
root    ALL=(ALL:ALL) ALL
```

4.  Add the following line below the previously mentioned line as shown.  **<username> ALL=(ALL) ALL**  

```
# User privilege specification
root    ALL=(ALL:ALL) ALL
newuser ALL=(ALL:ALL) ALL
```
5.  Press the **"Ctrl"** and **"x"** Keys to exit.  Press the **"y"** Key to Save and then the **ENTER** key to complete the change.

### Verify Permission Change

1. Use the **su** command followed with **- <username>** to switch to accounts.
```
root@server-01:~# su - newuser
newuser@server-01:~$ 
```

2. Use **sudo -i** command to test if user account can elevate permissions.  You will be prompted to enter the user's password.

```
newuser@server-01:~$ sudo -i
[sudo] password for newuser:
root@server-01:~#
```

3. Use **whoami** command to verify you are currently the root user.

```
root@server-01:~# whoami
root
```
