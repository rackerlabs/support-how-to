---
permalink: basic-linux-directory-permissions-and-how-to-check-them/
title: Basic Linux Directory Permissions and How to Check Them
type: article
created_by: Coral Moore
created_date: 2021-03-04
last_modified_date: 
last_modified_by: 
audit_date:
product: Cloud Servers
product_url: cloud-servers
---

# Basic Linux Directory Permissions and how to check them

*For understanding what basic types of directory permissions there are, how they work, and how to check them*

## What are directory permissions and how do they apply?

In Linux, a folder in which you store files is called a directory.
When you log in to a Linux computer/server, what files and directories you can access are specified on each file/directory itself, not the user.
Imagine if the folder 'My Documents' and your Word document each get to decide who is allowed to open/view them.

In this article we will be covering how these permissions are set up, but please keep in mind that they can be overridden.
Override examples:

* If you have a **chrooted/jailed** user, they will still only be able to access the files/directories they are jailed to.
* If you have **sudo/root** level permissions, you can still bypass the file/directory permissions in place.


## List files+directories:

List only the names of files+directories:
```sh
# ls
```
List the files+directories with a lot more information:
```sh
# ls -l
# ll
```
List the files+directories and show me all hidden files:
(Please be careful with this as the hidden files are often configuration files which are hidden to be kept safe)
```sh
# ls -a
```
List the files+directories with a lot more information and with the sizes in KB/GB instead of bits:
```sh
# ls -lh
```


## Understanding the results

When you use -l, each file/directory should give you the following information:
drwxr-xr-x. | jdoe | apache | 3864 | May  8  2021 | MyStuff
-|-|-|-|-|-
Permissions. If there is a d at the beginning, it's a directory, not a file | User Owner | Group Owner | Size in bits. Use -h to convert to KB/GB | When it was last edited	| Name

Here is a [more in depth guide for how to use ls](https://docs.rackspace.com/support/how-to/checking-linux-file-permissions-with-ls)

## User, group, other

Each file/directory has 3 types of user authorities which it will recognise:
* The user who is set as the **User Owner**
* Any users in the group which is set as the **Group Owner**
* Anyone else who is not in those first two categories is known as **Other**

A common group on Linux servers is apache, so that anyone working on the websites can be added to the apache group.
They then have the access they need to all web site related files+directories.

Change the user owner of a file/directory:
```sh
# chown <user>: /MyStuff
```
Change the group owner of a file/directory:
```sh
# chown :<group> /MyStuff
```
Change the user owner + group owner of a file/directory:
```sh
# chown <user>:<group> /MyStuff
```
Change the user owner and group owner of a file/directory and ++everything++ inside of it:
(Please be careful with this command, as you are changing multiple files with no 'undo' option)
```sh
# chown -R <user>:<group> /MyStuff
```


## Read, write, execute

Once a file/directory recognises you as a user owner, group owner or other, it has 3 permissions assigned:
* r &emsp; read &emsp; To read/view
* w &emsp; write &emsp; To write to/modify
* x &emsp; execute &emsp; To execute an executable file, or search for a directory

Each user authority is assigned these, in order, where a - represents that permission being absent.
For example if you see **rwxr-xr--**:
rwx | r-x | r--
-|-|-
The first part, User Owner permissions | The second part, Group Owner permissions | The third part, Other permissions
read, write, execute | read, execute | read
This user can do anything | This user can look at and execute the file. But not modify it | This user can only look at it

An easy way to visualise this is with:
![](https://one.rackspace.com/download/attachments/745610859/image2021-3-3_12-33-44.png?version=1&modificationDate=1614774824701&api=v2)


## How to change permissions with letters

Change file/directory permissions:
```sh
# chmod ugo+-=rwx /MyStuff
```
* Use any combination of **ugo** to represent user, group, other
* Use any combination of **+\-=** to represent adding, removing, or exacting
* Use any combination of **rwx** to represent read, write, execute

For example if you want to **give other read** permissions:
```sh
# chmod o+r /MyStuff
```
If you want to **remove modify and execute** permissions for **group and other**:
```sh
# chmod go-wx /MyStuff
```

A chart which might help to visualise this:
u user | + | r read
-|-|-
g group | - | w write
o other | = | x execute

Chmod can also use -R to recursively change all files/directories within that directory.
As before, **please proceed with caution as there is no 'undo'**


## How to change permissions with numbers

Change file/directory permissions:
```sh
# chmod 777 /MyStuff
```

This method uses math, where you add up the values of each permission to produce a final 3 digit result:
&nbsp; | u user | g group | o other
-|-|-|-
r read = 4 | | |
write = 2 | | |
x execute = 1 | | |

For example if you want to give **rwxr-xr--** permissions:
&nbsp; | u user | g group | o other
-|-|-|-
r read = 4 | ✓ | ✓ | ✓
write = 2 | ✓ | |
x execute = 1 | ✓ | ✓ |
&nbsp; | 4+2+1 = **7** | 4+1 = **5** | **4**

And you would use:
```sh
# chmod 754 /MyStuff
```

Chmod can also use -R to recursively change all files/directories within that directory.
As before, **please proceed with caution as there is no 'undo'**

Here is a [more in depth guide for how to use chmod](https://docs.rackspace.com/support/how-to/changing-linux-permissions)

### ```WARNING:```
**DO NOT chmod 777 unless you KNOW it's okay!**
Linux by default has many security measures in place, and not all configuration files are intended to be executed/modified by anyone.
They are founding files which enable basic functions for the computer/server eg. How to turn on, allow users to log in.
If they are set to 777, the computer/server assumes that it has been hacked, and SHUTS EVERYTHING DOWN!
You will not be able to log in, you will not be able to turn it on, it will be irretrievable.
This is a **very easy way to entirely break your server**, so please use chmod with care.


## How to practice:

Create a directory:
```sh
# mkdir /MyStuff
```
You are then free to ls -l, chown, and chmod this empty directory as much as you like.
When you are done, you can...

Delete a directory:
```sh
# rmdir /MyStuff
```

## More Advanced Scenarios:

++Scenario:++
> The user jdoe needs access to a specific directory
But you want to keep the user owner and group owners as they are

++Options:++

* **Add jdoe to the group** which owns the directory
 Though this would give them access to all other files/directories owned by that group
* **Give more permissions to 'Other'** on that directory
 Though this would give that access to all other users on your computer/server
* **Give jdoe sudo** permissions
 sudo can be used to override individual file/directory permissions
        Though this user would then have the admin permissions to access anything on your computer/server

++Scenario:++
> Your developer wants /etc and everything in it to be changed to 777 permissions.

++Answer:++
>**TELL THEM NO**
There are many system files which will break and potentially bring down your ENTIRE SERVER!
Instead, ask them specifically which files/directories they need access to, and what type of access they need.

Here is a [more in depth guide for understanding Linux file permissions](https://docs.rackspace.com/support/how-to/linux-file-permission-concepts)

## t s S +:

If when running ls -l you see permissions which include a **t s S or +**, DO NOT PROCEED.
These are more advanced file/directory permissions like SUIDs, Sticky Bits, and ACLs.
They are more complex, but can be completely overriden with a regular chmod command.
