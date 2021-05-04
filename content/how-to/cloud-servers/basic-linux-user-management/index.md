---
permalink: basic-linux-user-management
audit_date: '2020-04-20'
title: 'Basic Linux User Management'
type: article
created_date: '2020-04-20'
created_by: Chris Silva
last_modified_date: '2020-04-24'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---
This article describes the options for basic Linux&reg; server user management. It shows you how to
add, remove, lock, expire, and modify users on a Linux server. 

### Prerequisites

You need to have the following prerequisites:

- Basic understanding of Secure Shell (SSH).
- Sudo or administrative access to your server. An administrative user can refer to the following articles:
  - [Grant sudo access in RHEL&reg; and CentOS&reg;](/support/how-to/grant-sudo-access-in-rhel-and-centos/) 
  - [Grant sudo access in Debian and the Ubuntu operating system](/support/how-to/grant-sudo-access-in-debian-and-the-ubuntu-operating-system/)
- A Cloud Server running supported versions of Linux.

Log in to your server by using SSH and then complete the steps in the following sections to
perform the actions:

### Add a basic SSH user

Use the following steps to add a basic user to your Linux server with default settings:

1. Run the following command to create the user:

          useradd <user>

2. Set the password for the user:

         passwd <some-secure-password>

### Add a user with flags

You can use the following common flags with the `useradd` command to specify the new user's configuration:

- `-G`, `--groups <group_names>`: to add the new account to groups
- `-d`, `--home-dir <home_directory>`: to set home directory of the new account
- `-s`, `--shell <shell_name>`: to set the login shell of the new account

For example, you can create a user and specify the home directory, the login shell, and also add the
user to a supplemental group, as shown in the following example: 

       useradd -d /home/nonDefaultHome/ -s /bin/bash -G developers <newuser> 

This command creates a new user with a home directory of **/home/nonDefaultHome/** and the `/bin/bash/`
shell. The command also adds this user to the group **developers**. 

You can see other options for customizing the new user by using the following command:

         useradd --help
       
### Locking or expiring users

If you need to disable a user's access to your server, you can either expire or lock the Linux
user account.  

### Lock or unlock a user

Locking a user changes the user's password to an unreadable string, which prevents the user from 
logging in by using password authentication. Use the following command to lock a Linux user account:

       passwd -l <user>

You can verify the user was successfully locked by using the following command: 

       passwd -S <user>

If the user was successfully locked, the following message displays:

     <user> LK <date> 0 99999 7 -1 (Password locked.)

If you need to unlock the user, use the following command:

     passwd -u <user>

You can verify the user is unlocked with the following command:

     passwd -S <user>

If the command was successful, the following message displays:

     <user> PS <date> 0 99999 7 -1 (Password set, SHA512 crypt.)


### Expire and unexpire a user

While locking a user disables password access, this option does not disable other forms of
authentication such as SSH Key authentication. To disable a user's access completely, expire
the account by using the following command:

      usermod -e $(date '+1970-01-01') <user>

**Note**: This command expires the user as of the date January 1, 1970. You can also set the
expiriation date to the current date by replacing the date section with: `$(date '+%Y-%m-%d')`

You can verify the user was successfully expired by running the following command:

       chage -l <user>

The following output displays for the user:

       Last password change					       : Apr 20, 2020
       Password expires					    	: never
       Password inactive						: never
       Account expires						: Jan 01, 1970
       Minimum number of days between password change		: 0
       Maximum number of days between password change		: 99999
       Number of days of warning before password expires	: 7

If you need to unexpire the user on the server, run the following command:

       usermod -e -1 <user>

In order to verify the user has been unexpired, run the following command:

       chage -l <user>

The following output displays for the user:

       Last password change					       : Apr 20, 2020
       Password expires					    	: never
       Password inactive						: never
       Account expires						: never
       Minimum number of days between password change		: 0
       Maximum number of days between password change		: 99999
       Number of days of warning before password expires	: 7

### Delete a user

If you are certain that you no longer need a Linux user, you can delete the user from the server. 

**Note**: While this does not delete the user's home directory, this can cause issues with ownership
    or other permissions on the server. Before deleting the user, ensure removing the user does not
    cause applications on your server to break. 

To delete a user on your server, run the following command:

       userdel <user>

You can verify the user has been deleted with the following command:

       getent passwd <user>

If the user was successfully deleted, you should not receive any output as the user does not exist
within the **/etc/passwd** file. 
