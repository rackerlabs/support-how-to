---
permalink: grep-basics/
audit_date: '2021-07-23'
title: grep basics
type: article
created_by: Coral Moore
created_date: '2021-05-14'
last_modified_date: '2021-07-23'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article introduces some tools, especially `grep`, a Linux&reg; command-line
tool that you can use to search directories or files that match specified
regular expressions.

### What is `grep`?

**Official answer:**

`grep` searches the named input files (or standard input if you don't
specify a file or use a single hyphen (**-**) as the filename)
for lines containing a match to the given pattern. By default, `grep`
prints the matching lines.

**Nicer answer:**

Search a file, directory, or output for something specific, similar to
**Ctrl** + **f** in Windows&reg;. Use this function to target exactly
what you need.

### Basics

Often, the easiest way to show how a command works, is with examples.

You can see all users in the **/etc/passwd** file with the following command:

```sh
# cat /etc/passwd
rack:x:1001:1001::/home/rack:/bin/bash
apache:x:48:48:Apache:/usr/share/httpd:/sbin/nologin
mysql:x:27:27:MariaDB Server:/var/lib/mysql:/sbin/nologin
sher:x:1002:1002::/home/sher:/bin/bash
```

Using `grep`, you can narrow down that list to find a single user.

**Find a specific user**:

List the users but filter the output showing only the line with **sher** in it.

```sh
# cat /etc/passwd | grep 'sher'
sher:x:1002:1002::/home/sher:/bin/bash
```

Or, find the same user with a single command:

```sh
# grep 'sher' /etc/passw
rack:x:1001:1001::/home/rack:/bin/bash
sher:x:1002:1002::/home/sher:/bin/bash
```

In the following example, find all users with bash access:

```sh
# grep 'bash' /etc/passwd
rack:x:1001:1001::/home/rack:/bin/bash
sher:x:1002:1002::/home/sher:/bin/bash
```

### Flags

Like most Linux commands, `grep` uses flags, usually one or more
letters preceded by one or more dashes, to add extra functionality.

`-v`: Show everything that does not include the specified
search pattern:

```sh
# grep -v 'nologin' /etc/passwd
rack:x:1001:1001::/home/rack:/bin/bash
sher:x:1002:1002::/home/sher:/bin/bash
```

`-i`: Show matches, ignoring the case, which is useful when
you don't know exactly what you need:

```sh
# grep -i 'SHER' /etc/passwd
sher:x:1002:1002::/home/sher:/bin/bash
```

### Search for multiple patterns

`grep` uses the pipe symbol (**|**) to mean *or* allowing you to search
for more than one thing at a time. Use one of the following methods
to search for several things at once:

**\\**: Escapes the next character, a pipe (**|**) allowing it to work as *or*:

```sh
# grep 'sher\|rack' /etc/passwd
rack:x:1001:1001::/home/rack:/bin/bash
sher:x:1002:1002::/home/sher:/bin/bash
```

**-E**: Interprets special characters, such as **|** as *or*:

```sh
# grep -E 'sher|rack' /etc/passwd
rack:x:1001:1001::/home/rack:/bin/bash
sher:x:1002:1002::/home/sher:/bin/bash
```

The `egrep` command does the same thing:

```sh
# egrep 'sher|rack' /etc/passwd
rack:x:1001:1001::/home/rack:/bin/bash
sher:x:1002:1002::/home/sher:/bin/bash
```

### Combining flags

You can use various flags in combination to refine a search.

The following example shows all users who aren't **sher** or **rack**,
regardless of the case of the pattern of file content:

```sh
# egrep -vi 'SHER|RACK' /etc/passwd
```

### Practical examples

The following sections cover other uses for `grep` and introduce other useful commands.

#### Ignore comments

In Linux, you comment out lines by adding the pound symbol (**#**) at the
beginning of the line. This way, you can add your own notes, and scripts or programs
ignore the comments and do not execute those lines.

To display files ignoring those comments, use tbe following command:

```sh
# grep -v ^'#' /file
```

You can even run a `grep` on top of another `grep` command.

For example, list a file ignoring commented lines, and then look for something specific:

```sh
# grep -v ^'#' /file | grep 'hello'
```

#### Search history

Most Linux systems keep a log of executed commands, which you can access with
the command `history`. When you combine `history` with `grep`, you can very
effectively investigate what has been run on your system so far.

Check the `passwd` commands run and other commands containing the
**passwd** pattern:

```sh
# history | grep 'passwd'
```

Find commands run on a specific day:

```sh
# history | grep '2021-05-10'
```

Check which commands ran at a specific time:

```sh
# history | grep '2021-05-10 11:00:'
```

#### Check ports and root login

List the web traffic running on ports `80` and `443`:

```sh
# netstat -plnt | egrep '80|443'
```

You can use **^** in a `grep` command to show only those lines
starting with your search pattern.

For example, run the following command to check whether the system allows
root logins:

```sh
# grep ^'Permit' /etc/ssh/sshd_config
```

#### Search logs with head and tail

Use `top` to show the first ten lines of the login attempts log:

```sh
# head /var/log/secure
```

Use `tail` to show the lines at the end of the login attempts log:

```sh
# tail /var/log/secure
```

Use the `last` command to show the first ten lines of the most recent logins:

```sh
# last | head -10
```

Use the `tail -f` to watch a file grow in real time. For example, you can see
the most recent login attempts and watch ongoing attempts. If someone tries to
log in, you can see it as it happens with the following command:

```sh
# tail -f /var/log/secure
Ctrl + C to exit
```

### Other tools

You can experiment with your newfound skills by using the tools in this section.

#### vim or nano

`vi`, `vim`, and `nano` are the most common text editors in Linux.
You can use them to edit a file, similar to using Notepad in Windows.

Open up and create a new file, **test**:

```sh
# vim /test
```

Actions | Key sequence | Explanation
-|-|-
To start typing new content: | `i` | Prepare to insert text
To exit without saving: | **Esc** `:q!`	| Escape insert mode and quit
To exit and save: | **Esc** `:wq!` | Escape insert mode, write, and quit

#### echo

`echo` is a simple command that tells Linux to repeat what you just typed.
This is effective for testing `grep` commands without first creating a new file.

For example, make **hello** display:

```sh
# echo 'hello'
hello
```

Display **hello** and search for the middle letters:

```sh
# echo 'hello' | grep 'ell'
hello
```

You can even use `echo` to display multiple lines by using `-e` and `\n` to
add new lines.

Display **hi** and **ho** on separate lines:

```sh
# echo -e 'hi\nho'
hi
ho
```

Display **hi** and **ho** on separate lines and search for **hi**:

```sh
# echo -e 'hi\nho' | grep 'hi'
hi
```

#### sed

Like `grep`, `sed` has many uses, but you primarily use this command to
search for and replace specified content. Here are some basic examples of how
to single out specific lines:

First, Use `vim` to create a file:

```sh
# vim /test
```

When the editor opens, enter the following lines:

```sh
1 Hi
2 How
3 Are
4 You
```

Display the new file:

```sh
# cat test
1 Hi
2 How
3 Are
4 You
```

Use `sed` to return everything except the first line:

```sh
# sed 1d test
2 How
3 Are
4 You
```

Return only the first line:

```sh
# sed 1q test
```

or

``` sh
# sed '1!d' test
1 Hi
```

Return only the second to fourth lines:

```sh
# sed '2,4!d' test
2 How
3 Are
4 You
```

### Conclusion

There are many other tools that you can use, such as `awk`, `cut`, `sort`, `xargs`,
and so on. Now that you know how to create a file by using `echo`, you can
experiment more effectively with them.
