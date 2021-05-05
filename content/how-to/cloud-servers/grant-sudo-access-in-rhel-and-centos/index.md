---
permalink: grant-sudo-access-in-rhel-and-centos
audit_date: '2020-04-20'
title: 'Grant sudo access in RHEL and CentOS'
type: article
created_date: '2020-04-20'
created_by: Chris Silva
last_modified_date: '2020-04-23'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article provides the steps to grant an existing Linux&reg; user sudo or administrative access on a RHEL&reg; or CentOS&reg; server. 


### Prerequisites

You need to have the following prerequisites:

- A basic understanding of Secure Shell (SSH)
- Sudo or administrative access to your server
- A Cloud Server running distributions based on RHEL or CentOS

### Grant sudo or administrative permissions in RHEL or CentOS

You can use the following method to grant an existing user sudo-level permissions on a default RHEL or
CentOS system:

1.  On a RHEL or CentOS server, the default group **wheel** has sudo permissions. To add a user to this
group and grant a user sudo permissions, run the following command:

       usermod -aG wheel <user>

2.  Run the following command to verify that you added the user to the wheel group:

       id <user> 

If you added the user to the group successfully, you should see the **wheel** group listed in the **groups**
section. 


### Modify the sudoers file

Another method of granting sudo permissions on a Linux server is to modify the **/etc/sudoers**
file to include the desired user. This method provides direct control by the user rather than by adding
a user to a group. 

**Warning**: Editing the **/etc/sudoers** file might be destructive to the server, and the system might
lock you out if there is any incorrect syntax in the file. Exercise caution when you modify this file. 

To edit the **/etc/sudoers** file, we recommend that you use the `visudo` command. 

After you open the file by using `visudo`, add the following line to the end of the file:

       <user> ALL=(ALL)		ALL

After you make the change, save and exit the file. This modification grants the user sudo permissions
without adding the user to the **wheel** group. 
