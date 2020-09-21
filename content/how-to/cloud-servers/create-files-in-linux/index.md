---
permalink: create-files-in-linux/
audit_date:
title: Create Files in Linux
type: article
created_date: '2020-09-21'
created_by: James Andrade
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

# Create Files in Linux

Creating files in Linux is simple!

The following are ways to create a file in Linux:

Using touch.

```
~]$ touch testfile
~]$ ls testfile 
testfile
```
The "touch" command simply creates the file with whatever name you specified.


Using echo.

```
~]$ echo "some text" > testfile
~]$ ls testfile 
testfile
~]$ cat testfile 
some text
```

This simultaneously creates and writes to the new file.

Using vim:

```sh
~]$ vim testfile
(press "i" to insert then enter the text)
~                                                                               
~                                                                               
~                                                                               
-- INSERT --          
(then press "esc" and ":wq" to save and quit)
```

The file is now created and saved.
