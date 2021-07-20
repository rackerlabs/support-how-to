---
permalink: grep-basics/
title: grep basics
type: article
created_by: Coral Moore
created_date: 2021-05-14
last_modified_date: 
last_modified_by: 
audit_date:
product: Cloud Servers
product_url: cloud-servers
---

# grep Basics
*For understanding grep, how to search through output.*

# What is grep?
++Official answer:++
grep searches the named input FILEs (or standard input if no files are named, or if a single hyphen-minus (-) is given as filename) for lines containing a match to the given PATTERN.
By default, grep prints the matching lines.

++Nicer answer:++
Search a file or output for something specific.
Like Ctrl+F in Windows.
Instead of a huge wall of information, only show me what I'm looking for

# Basics
Often the easiest way to show how a command works, is with examples!

Show standard users:
```sh
# cat /etc/passwd
rack:x:1001:1001::/home/rack:/bin/bash
apache:x:48:48:Apache:/usr/share/httpd:/sbin/nologin
mysql:x:27:27:MariaDB Server:/var/lib/mysql:/sbin/nologin
sher:x:1002:1002::/home/sher:/bin/bash
```

Using grep, we can now narrow down that list to find a single user.

Find a specific user:
*(Show standard users, take that output, and only show me the line with 'sher' in it)*
```sh
# cat /etc/passwd | grep 'sher'
sher:x:1002:1002::/home/sher:/bin/bash
```

Quicker find a specific user:
*(find the line with 'sher' in the users file)*
```sh
# grep 'sher' /etc/passw
rack:x:1001:1001::/home/rack:/bin/bash
sher:x:1002:1002::/home/sher:/bin/bash
```

Find all users with bash access:
```sh
# grep 'bash' /etc/passwd
rack:x:1001:1001::/home/rack:/bin/bash
sher:x:1002:1002::/home/sher:/bin/bash
```

### Flags
Like most Linux commands, grep uses flags with a '-letter' to add extra behaviours.

**-v** means show me everything EXCEPT what I specified:
```sh
# grep -v 'nologin' /etc/passwd
rack:x:1001:1001::/home/rack:/bin/bash
sher:x:1002:1002::/home/sher:/bin/bash
```
**-i** means ignore upper case and lower case:
*Very useful when you don't know exactly what you're looking for*
```sh
# grep -i 'SHER' /etc/passwd
sher:x:1002:1002::/home/sher:/bin/bash
```

### Search for multiple things
grep uses the pipe symbol | to mean 'or' allowing you to search for more than 1 thing at a time.
But to use it this way, there are 3 methods:

**\\** escapes the next character **|** , allowing it to work as 'or':
```sh
# grep 'sher\|rack' /etc/passwd
rack:x:1001:1001::/home/rack:/bin/bash
sher:x:1002:1002::/home/sher:/bin/bash
```

**-E** is a flag allowing special characters like **|** to be interpreted as things like 'or':
```sh
# grep -E 'sher|rack' /etc/passwd
rack:x:1001:1001::/home/rack:/bin/bash
sher:x:1002:1002::/home/sher:/bin/bash
```

**egrep** is also the easiest way to achieve the exact same thing:
```sh
# egrep 'sher|rack' /etc/passwd
rack:x:1001:1001::/home/rack:/bin/bash
sher:x:1002:1002::/home/sher:/bin/bash
```

### All together
You can use a variety of these different flags, all together if you wish to really refine a search.
Show me all users who AREN'T sher or rack, regardless of uppercase or lowercase:
```sh
# egrep -vi 'SHER|RACK' /etc/passwd
```

# Practical Examples
### Ignore comments
In Linux, lines are often 'commented out' by adding the # symbol at the beginning of the line.
This way, you can add your own notes, or old information which any scripts/programs will know to ignore and not try to run as code.
But there is a way to read files whilst ignoring those comments ourselves.

Read something and ignore commented out lines:
```sh
# grep -v ^'#' /file
```

You can even run a grep, on top of another grep!

Read something, ignore commented out lines, and THEN look for something specific:
```sh
# grep -v ^'#' /file | grep 'hello'
```

### Search history
Most Linux systems keep a log of commands run, which you can access with the command 'history'
But pair 'history' up with 'grep', and you can very effectively investigate what has been run on your system so far.

Check what commands were run regarding the word 'passwd':
```sh
# history | grep 'passwd'
```

Check what commands were run on a specific day:
```sh
# history | grep '2021-05-10'
```

Check what commands were run at a specific time:
```sh
# history | grep '2021-05-10 11:00:'
```

### Check ports and root login
List the web traffic ports 80 + 443, and what's running on them:
```sh
# netstat -plnt | egrep '80|443'
```

**^** asks grep so only show lines starting with what you're searching for.

Check if root logins are enabled:
```sh
# grep ^'Permit' /etc/ssh/sshd_config
```

### Search logs with head + tail
Show the **top** of the log in attempt log:
```sh
# head /var/log/secure
```

Show the **end** of the log in attempt log:
```sh
# tail /var/log/secure
```

Show the **top 10 lines** of who logged in last:
```sh
# last | head -10
```

Show the **end** of the log in attempt log **with a live feed**:
So if someone tries to log in, you’ll see it update right then and there
```sh
# tail -f /var/log/secure
Ctrl + C to exit
```

# How to play/experiment
### With vim / nano
vi, vim, or nano are the most commonly recognised text editors in Linux.
You can use them to freely type into a file, like you would in Windows with Notepad.

Open up and create a new file called test:
```sh
# vim /test
```

Actions | Press these keys in this order | Explanation
-|-|-
To start typing new content: | i | i stands for insert
To exit without saving: | Esc : q !	| Escape insert mode, and quit
To exit and save: | Esc : w q ! | Escape insert mode, write, and quit

### With echo
echo is a simple command which tells Linux to echo what you say back to you.
This is effective for testing grep commands without going to the trouble of creating a new file.

Say hello:
```sh
# echo 'hello'
hello
```

Say hello, then search for the middle:
```sh
# echo 'hello' | grep 'ell'
hello
```

You can even echo onto multiple lines by using **-e** and **\n** to mean 'new line'

Say hi and ho on separate lines:
```sh
# echo -e 'hi\nho'
hi
ho
```

Say hi and ho on separate lines, but then only look for hi:
```sh
# echo -e 'hi\nho' | grep 'hi'
hi
```

### With sed
sed has a whole variety of uses like grep, but here are some basic examples of how to single out specific lines.

Use vim to make a file:
```sh
# vim /test
1 Hi
2 How
3 Are
4 You
```

Read your new file:
```sh
# cat test
1 Hi
2 How
3 Are
4 You
```

Exclude only the first line:
```sh
# sed 1d test
2 How
3 Are
4 You
```

Include only the first line:
```sh
# sed 1q test
or
# sed '1!d' test
1 Hi
```

Include only the second to fourth lines:
```sh
# sed '2,4!d' test
2 How
3 Are
4 You
```

There are many other tools which you can use such as awk, cut, sort, xargs etc.
But now that you know how to create a file/echo, you can more effectively experiment with them.
