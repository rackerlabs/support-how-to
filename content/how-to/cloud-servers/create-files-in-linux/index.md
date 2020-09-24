---
permalink: create-files-in-linux/
audit_date: '2020-09-24'
title: Create Files in Linux
type: article
created_date: '2020-09-21'
created_by: James Andrade
last_modified_date: '2020-09-24'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

This article shows you how to create files in Linux using the command line.   

### Use the following commands:  


1. Type `$ touch` in the command line, followed by the name of the file you want to create.

```
~]$ touch testfile
```

To verify you created the file successfully, type `$ ls <name of your file>`.

```
~]$ ls testfile 
testfile
```


2. Type `$ echo` in the command line, your information, and `>` followed by `<name of your new file>`. 

```
~]$ echo "some text" > testfile
```
To verify you created the file successfully, type `$ ls <name of your file>`.


```
~]$ ls testfile 
testfile
```

To read the information you included type `cat <name of your file>`.  

```
~]$ cat testfile 
some text
```

This creates and writes to the new file.


3. Using `$ vim` command and text editor:


```sh
~]$ vim testfile
(press "i" to insert then enter the text)
~  write your text here                                                                             
~                                                                               
~                                                                               
-- INSERT --          
(then press "esc" and ":wq" and "enter" to save and quit)
```

To read the information you included type `cat <name of your file>`.  


You now have three option to create files with the Linux command line.
