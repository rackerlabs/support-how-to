---
permalink: grant-sudo-access-in-debian-and-the-ubuntu-operating-system
audit_date: '2020-04-20'
title: 'Grant sudo access in Debian and the Ubuntu operating system'
type: article
created_date: '2020-04-20'
created_by: Chris Silva
last_modified_date: '2020-04-23'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article provides the steps to grant an existing Linux&reg; user sudo, or administravive, access on
a Debian&reg; server or a server with the Ubuntu&reg; operating system. 


### Prerequisites

You need to have the following prerequisites:

- Basic understanding of Secure Shell (SSH)
- Sudo or administrative access to your server
- A Cloud Server running distributions based on Debian or the Ubuntu operating system.


### Grant sudo or administrative permissions in Debian or the Ubuntu operating system

The following methods can be used to grant an existing user sudo-level permissions on a default Debian
or Ubuntu operating system.

On a server with Debian or the Ubuntu operating system, the default group **admin** has sudo
permissions. To add a user to this group and grant a user sudo permissions, run the following command:

       usermod -aG admin <user>

Run the following command to verify that you added the user to the **admin** group:

       id <user> 

If you added the user to the group successfully, you should see the **admin** group listed in the **groups** section.

### Modify the sudoers file

Another method of granting sudo permissions on a Linux server is to modify the **/etc/sudoers**
file to include the desired user. This method provides direct control by user rather than by adding
a user to a group. 

**Warning**: Editing the **/etc/sudoers** file might be destructive to the server, and the system might
lock you out if there is any incorrect syntax in the file. Exercise caution when modifying this file. 

To edit the **/etc/sudoers** file, we recommend that you use the `visudo` command. 

After you open the file, add the following line to the end of the file:

       <user> ALL=(ALL)		ALL

After you make the change, save and exit the file. This modification grants the user sudo permissions
without adding the user to the **admin** group.  
