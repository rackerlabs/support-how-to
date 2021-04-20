---
permalink: basic-linux-directory-permissions-and-how-to-check-them/
audit_date: '2021-03-12'
title: Basic Linux directory permissions and how to check them
type: article
created_date: '2021-03-04'
created_by: Coral Moore
last_modified_date: '2021-04-20'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---


This article explains the basic types of directory permissions, how they work,
and how to check them.

### What are directory permissions, and how do they apply?

In Linux&reg;, a folder in which you store files is called a directory. Each
file or directory specifies which users can access them. This article explains
how you set these permissions and possibly override them.

Override examples:

* If you are a **chrooted/jailed** user, you can access only the files or
  directories to which you are jailed.
* If you have **sudo/root**-level permissions, you can bypass the file or
  directory permissions.

### List files and directories

This section contains examples on Linux list operations.

* List only the names of files and directories:

  ```sh
  # ls
  ```

* List the files and directories with a lot more information:

  ```sh
  # ls -l
  # ll
  ```

* List the files and directories and show all hidden files:

  ```sh
  # ls -a
  ```

  **Note:** The hidden files are often configuration files that the system hides to keep them safe.

* List the files and directories with a lot more information and with the sizes in KB or GB instead of bits:

  ```sh
  # ls -lh
  ```

### Understand the results

When you use `-l`, each file or directory should give you the following
information:

drwxr-xr-x. | jdoe | apache | 3864 | May  8  2021 | MyStuff
-|-|-|-|-|-
Permissions | User Owner | Group Owner | Size in bits. Use -h to convert to KB/GB | When it was last edited| Name

**Permissions note**: If there is a *d* at the beginning, it's a directory, not
a file.

Here is a [more in depth guide for how to use the `ls` command](/how-to/checking-linux-file-permissions-with-ls/).

#### User, group, other

Each file and directory has three types of user authorities which it recognizes:

* The user who is set as the **User Owner**.
* Any users in the group who is set as the **Group Owner**.
* Anyone who is not in those first two categories is known as **Other**.

A common group on Linux servers is `apache`, so you can add anyone working on
the websites to the `apache` group. They then have the access they need to all
website-related files and directories.

* Change the user owner of a file or directory:

  ```sh
  # chown <user>: /MyStuff
  ```

* Change the group owner of a file or directory:

  ```sh
  # chown :<group> /MyStuff
  ```

* Change the user owner + group owner of a file or directory:

  ```sh
  # chown <user>:<group> /MyStuff
  ```

* Change the user owner and group owner of a file or directory and everything
  inside of it:

  **Important:** Be careful with this command, as you are changing multiple
  files with no undo option.

  ```sh
  # chown -R <user>:<group> /MyStuff
  ```

#### Read, write, execute

After a file or directory recognizes you as a user owner, group owner, or other,
it assigns a combination of the following permissions:

* **r**: The read permission lets you view or read the file or directory.
* **w**: The write permission lets you write or modify the file or directory.
* **x**: The execute permission lets you execute an executable file or search a
  directory.

Each user authority is assigned these, in order, where a `-` represents that
permission being absent. For example, the following table explains the
permissions **rwxr-xr--**:

rwx | r-x | r\-\-
-|-|-
The first part, User Owner permissions | The second part, Group Owner permissions | The third part, Other permissions
read, write, execute | read, execute | read

This user can do anything | This user can look at and execute the file. But not
modify it | This user can only look at it

The following image provides an easy way to visualize this:

{{<image src="image_1.png" alt="" title="">}}

### How to change permissions with letters

* Change file or directory permissions:

  ```sh
  # chmod ugo+-=rwx /MyStuff
  ```

  * Use any combination of **ugo** to represent user, group, other.
  * Use any combination of **+\-=** to represent adding, removing, or changing the current permissions to the specified permissions.
  * Use any combination of **rwx** to represent read, write, execute.

* Give **read** permissions to **other**:

  ```sh
  # chmod o+r /MyStuff
  ```

* Remove **modify and execute** permissions for **group and other**:

  ```sh
  # chmod go-wx /MyStuff
  ```

The following chart helps illustrate this concept:

u user | + | r read
-|-|-
g group | - | w write
o other | = | x execute

**Note:** `chmod` can also use `-R` to recursively change all files and directories within that directory.
As before, proceed with caution as there is no undo option.

#### How to change permissions with numbers

* Change file or directory permissions:

  ```sh
  # chmod 777 /MyStuff
  ```

This method uses math, where you add up the values of each permission to produce a final three-digit result:

&nbsp; | u user | g group | o other
-|-|-|-
r read = 4 | | |
write = 2 | | |
x execute = 1 | | |

* Give **rwxr-xr--** permissions:

&nbsp; | u user | g group | o other
-|-|-|-
r read = 4 | ✓ | ✓ | ✓
write = 2 | ✓ | |
x execute = 1 | ✓ | ✓ |
&nbsp; | 4+2+1 = **7** | 4+1 = **5** | **4**

Use the following command:

```sh
# chmod 754 /MyStuff
```

**Note:** `chmod` can also use `-R` to recursively change all files and directories within that directory.
As before, proceed with caution as there is no undo option.

Here is a [more in depth guide for how to use chmod](/how-to/changing-linux-permissions/)

**WARNING:** Do not use `chmod 777` unless you are positive it's okay.

Linux, by default, has many security measures in place. However, some configuration files are not intended to be executed
or modified by anyone. These are founding files that enable basic functions for the computer or server. For example, they
determine how to turn on and allow users to log in. If they are set to 777, the computer or server assumes that it was
hacked and *shuts everything down*.

In that case, you cannot log in, you cannot turn the device on, and it is irretrievable.

This is a very easy way to break your server entirely, so use `chmod` with care.

### How to practice

* Create a directory:

  ```sh
  # mkdir /MyStuff
  ```

You are then free to `ls -l`, `chown`, and `chmod` this empty directory as much as you like.
When you are done, clean up after yourself.

* Delete the directory:

  ```sh
  # rmdir /MyStuff
  ```

### More advanced scenarios

Here some scenarios to explore:

#### Scenario 1

The user `jdoe` needs access to a specific directory. However, you want to keep the user owner and group owners as they are.

Options:

* **Add jdoe to the group** that owns the directory. This gives `jdoe` access to all other files or directories owned by that group.
* **Give more permissions to 'Other'** on that directory. This gives that access to all other users on your computer or server.
* **Give jdoe `sudo`** permissions. `jdoe` can use `sudo` to override individual file or directory permissions. However, 'jdoe'
  would then have the admin permissions to access anything on your computer or server.

#### Scenario 2

Your developers want to change **/etc** and everything in it to `777` permissions.

Answer: **TELL THEM NO**.

There are many system files which will break and potentially bring down your *entire server*.
Instead, ask them specifically which files or directories they need access to and what type of access they need.

Here is a [more in depth guide for understanding Linux file permissions](https://docs.rackspace.com/support/how-to/linux-file-permission-concepts)

#### Scenario 3

**t s S +:** If you run `ls -l` and see permissions which include a **t s S or +**, do not proceed.

These are more advanced file and directory permissions like SUIDs, Sticky Bits, and ACLs.
They are more complex, but can be completely overriden with a regular `chmod` command.

Use the Feedback tab to make any comments or ask questions. You can also click **Let's Talk** to [start the conversation](https://www.rackspace.com/).
