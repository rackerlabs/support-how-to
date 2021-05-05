---
permalink: create-files-in-linux
audit_date: '2020-09-24'
title: Create files by using the command line in Linux
type: article
created_date: '2020-09-21'
created_by: James Andrade
last_modified_date: '2020-09-24'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

This article shows you how to create files by using the command line in Linux&reg;. 

### Create a file

There are three main ways that you can create a file at the command line:

1. The `touch` command
2. The `echo` command
3. A text editor such as `vim` or `nano`

The following steps show you how to create a new file by using each of these methods:

Open the command line and navigate to the directory in which you want to create a file.

#### Touch

The `touch` command creates a new blank file that you can then open by using a text editor to add or edit text.

Type `$ touch` followed by the name of the file you want to create.

    ~]$ touch testfile

To verify that you created the file successfully, type `$ ls <name of your file>`.

    ~]$ ls testfile 
    testfile
   
You should see the new file in the list of files in the directory.

#### Echo

The `echo` command enables you to add text to the file at the same time that you create it.

Use the following format to create a file by using `echo`:

    echo "your text" > <name of your file>

For example, the following command creates a file called **testfile** that contains the text "some text": 

    ~]$ echo "some text" > testfile

To verify that you created the file successfully, type `ls <name of your file>`:

    ~]$ ls testfile 
    testfile

You should see the new file in the list of files in the directory.

To read the information that you included in the file, type `cat <name of your file>`.  

    ~]$ cat testfile 
    some text

#### Text editor

If you have a large amount of text to add to a new file you can use a text editor, such
as `vim` or `nano`, to create a file and edit it at the same time.

1. Create and open the file by entering `vim <name of your file>` and then press `i` to enter Insert Mode.
2. Enter the text that you want to add to the file.
   
   Creating your file by using `vim` should look similar to the following example:

       ~]$ vim testfile
       ~
       ~  write your text here                                                                             
       ~                                                                               
       ~                                                                               
       -- INSERT --          

3. When you are finished editing, press "esc", ":wq" and then "enter" to save and quit.

To see the new information that you added, type `cat <name of your file>`.  

