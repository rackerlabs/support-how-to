---
permalink: create-copy-move-delete-files/
audit_date:
title: Linux - File Management Commands - Create/Copy/Move/Delete Files
type: article
created_date: '2020-04-12'
created_by: John Garcia
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

### This article explains introductory File Management Commands in Linux.

# VIEW

## Viewing Files and Directories

The **ls** command can be used to show the contents of a directory.  Using **ls** command options such as **ls -lah** will provide additional information and include a listing of all files (including hidden files) in a Long List view in a Human Readible format.

**ls and ls -lah** 

````
[root@server-01 testdir]# ls
[root@server-01 testdir]#
[root@server-01 testdir]# ls -lah
total 8.0K
drwxr-xr-x. 2 root root 4.0K Apr 14 01:46 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
````

**Note:** In the previous example **ls** returned no files, while **ls -lah**  returns hidden files and directories (Directories are shown with a line starting with "d").

# CREATE

## Creating a File(s)

One way to create an empty file at a specifed location is using the **touch** command:

**touch filename**

Example:  Using the **touch** command to create New Files "demo" and "sample.txt".
```
[root@server-01 testdir]# ls -lah
total 8.0K
drwxr-xr-x. 2 root root 4.0K Apr 14 01:49 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
[root@server-01 testdir]# touch demo
[root@server-01 testdir]# touch sample.txt
[root@server-01 testdir]# ls -lah
total 8.0K
drwxr-xr-x. 2 root root 4.0K Apr 14 01:50 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
-rw-r--r--. 1 root root    0 Apr 14 01:50 demo
-rw-r--r--. 1 root root    0 Apr 14 01:50 sample.txt
```
The **touch** command can also be used to create multiple files:

Example:  Using **touch** command to create New Files "sample1", "sample2", and "sample3".
```
[root@server-01 testdir]# ls -lah
total 8.0K
drwxr-xr-x. 2 root root 4.0K Apr 14 01:50 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
-rw-r--r--. 1 root root    0 Apr 14 01:50 demo
-rw-r--r--. 1 root root    0 Apr 14 01:50 sample.txt
[root@server-01 testdir]# touch sample1 sample2 sample3
[root@server-01 testdir]# ls -lah
total 8.0K
drwxr-xr-x. 2 root root 4.0K Apr 14 01:52 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
-rw-r--r--. 1 root root    0 Apr 14 01:50 demo
-rw-r--r--. 1 root root    0 Apr 14 01:52 sample1
-rw-r--r--. 1 root root    0 Apr 14 01:52 sample2
-rw-r--r--. 1 root root    0 Apr 14 01:52 sample3
-rw-r--r--. 1 root root    0 Apr 14 01:50 sample.txt
```

Addional option is using **cat >** to create a new text file followed by inputting the files contents:

**cat > filename**

Example:  Using **cat >** command to create New File "test.txt" followed by providing it's content.
```
[root@server-01 testdir]# ls -lah
total 8.0K
drwxr-xr-x. 2 root root 4.0K Apr 14 01:57 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
-rw-r--r--. 1 root root    0 Apr 14 01:57 demo
-rw-r--r--. 1 root root    0 Apr 14 01:57 sample.txt
[root@server-01 testdir]# cat > test.txt
This is Only a Test.
[root@server-01 testdir]# ls -lah
total 12K
drwxr-xr-x. 2 root root 4.0K Apr 14 01:57 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
-rw-r--r--. 1 root root    0 Apr 14 01:57 demo
-rw-r--r--. 1 root root    0 Apr 14 01:57 sample.txt
-rw-r--r--. 1 root root   21 Apr 14 01:57 test.txt
```


Another option is using just the **Standard Redirect Symbol (>)** to create a single new file without it's content:

**CAUTION:** Usage of the **Redirect Symbol** should be executed with care as it is possible to overwrite existing files and these changes are **PERMANENT** with **NO RECOVERY** options for its previous contents.

**> filename**

Example:  Using **Redirect (>)** to create New File "example.txt".
```
[root@server-01 testdir]# ls -lah
total 12K
drwxr-xr-x. 2 root root 4.0K Apr 14 01:59 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
-rw-r--r--. 1 root root    0 Apr 14 01:57 demo
-rw-r--r--. 1 root root    0 Apr 14 01:57 sample.txt
-rw-r--r--. 1 root root   21 Apr 14 01:58 test.txt
[root@server-01 testdir]# > example.txt
[root@server-01 testdir]# ls -lah
total 12K
drwxr-xr-x. 2 root root 4.0K Apr 14 02:04 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
-rw-r--r--. 1 root root    0 Apr 14 01:57 demo
-rw-r--r--. 1 root root    0 Apr 14 02:04 example.txt
-rw-r--r--. 1 root root    0 Apr 14 01:57 sample.txt
-rw-r--r--. 1 root root   21 Apr 14 01:58 test.txt
```

**CAUTION EXAMPLE:  Ability to Accidentally Rewrite Contents of Existing File "Important".**
```
[root@server-01 testdir]# cat Important
DON'T DELETE THIS TEXT.
[root@server-01 testdir]# cat Important
DON'T DELETE THIS TEXT.
[root@server-01 testdir]# > Important
[root@server-01 testdir]# cat Important
[root@server-01 testdir]#
```
**Note:** As previously mentioned, the Redirect Symbol can Rewrite  as shown in the above example with no option to recover lost data.  This can cause catastrophic issues if you rewrite over critical files.

However, using **2 Redirect Symbols (>>)** can be used to write content onto the end of a file.

Example:  Using **(>>)** command to write at the end of file "edit.txt" by adding contents of file "change.txt".  This will prevent to complete rewrite of a file as we previously noted in this article.

```
[root@server-01 testdir]# cat edit.txt
Examples
Are
[root@server-01 testdir]# cat change.txt
Great
[root@server-01 testdir]# cat change.txt >> edit.txt
[root@server-01 testdir]# cat edit.txt
Examples
Are
Great
```

## Creating a Directory

The **mkdir** command will create an empty directory:

**mkdir directory name**

Example:  Using **mkdir** command to create New Directories "folder1" and "folder2".
```
[root@server-01 testdir]# ls -lah
total 12K
drwxr-xr-x. 2 root root 4.0K Apr 14 03:14 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
-rw-r--r--. 1 root root    0 Apr 14 01:57 demo
-rw-r--r--. 1 root root    0 Apr 14 02:04 example.txt
-rw-r--r--. 1 root root    0 Apr 14 02:10 Important
-rw-r--r--. 1 root root    0 Apr 14 01:57 sample.txt
-rw-r--r--. 1 root root   21 Apr 14 01:58 test.txt
[root@server-01 testdir]# mkdir folder1
[root@server-01 testdir]# mkdir folder2/
[root@server-01 testdir]# ls -lah
total 20K
drwxr-xr-x. 4 root root 4.0K Apr 14 03:15 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
-rw-r--r--. 1 root root    0 Apr 14 01:57 demo
-rw-r--r--. 1 root root    0 Apr 14 02:04 example.txt
drwxr-xr-x. 2 root root 4.0K Apr 14 03:15 folder1
drwxr-xr-x. 2 root root 4.0K Apr 14 03:15 folder2
-rw-r--r--. 1 root root    0 Apr 14 02:10 Important
-rw-r--r--. 1 root root    0 Apr 14 01:57 sample.txt
-rw-r--r--. 1 root root   21 Apr 14 01:58 test.txt
```

The **mkdir** command can also be used to create multiple directories:

Example:  Using the **mkdir** command to create New Directories "folderA", "folderB", and "folderC".
```
[root@server-01 testdir]# mkdir folderA folderB folderC
[root@server-01 testdir]# ls -lah
total 32K
drwxr-xr-x. 7 root root 4.0K Apr 14 03:16 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
-rw-r--r--. 1 root root    0 Apr 14 01:57 demo
-rw-r--r--. 1 root root    0 Apr 14 02:04 example.txt
drwxr-xr-x. 2 root root 4.0K Apr 14 03:15 folder1
drwxr-xr-x. 2 root root 4.0K Apr 14 03:15 folder2
drwxr-xr-x. 2 root root 4.0K Apr 14 03:16 folderA
drwxr-xr-x. 2 root root 4.0K Apr 14 03:16 folderB
drwxr-xr-x. 2 root root 4.0K Apr 14 03:16 folderC
-rw-r--r--. 1 root root    0 Apr 14 02:10 Important
-rw-r--r--. 1 root root    0 Apr 14 01:57 sample.txt
-rw-r--r--. 1 root root   21 Apr 14 01:58 test.txt
```

# COPY
## Copying a File or Directory

The **cp** command will copy an existing file into new file:

**cp original(file) new (file)**

Example:  Using the **cp** command to make a New File "samplecopy.txt" from the Existing File "sample.txt".
```
[root@server-01 testdir]# ls -lah
total 12K
drwxr-xr-x. 3 root root 4.0K Apr 14 03:19 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
-rw-r--r--. 1 root root    0 Apr 14 01:57 demo
-rw-r--r--. 1 root root    0 Apr 14 02:04 example.txt
drwxr-xr-x. 2 root root 4.0K Apr 14 03:15 folder1
-rw-r--r--. 1 root root    0 Apr 14 01:57 sample.txt
[root@server-01 testdir]# cp sample.txt samplecopy.txt
[root@server-01 testdir]# ls -lah
total 12K
drwxr-xr-x. 3 root root 4.0K Apr 14 03:29 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
-rw-r--r--. 1 root root    0 Apr 14 01:57 demo
-rw-r--r--. 1 root root    0 Apr 14 02:04 example.txt
drwxr-xr-x. 2 root root 4.0K Apr 14 03:15 folder1
-rw-r--r--. 1 root root    0 Apr 14 03:29 samplecopy.txt
-rw-r--r--. 1 root root    0 Apr 14 01:57 sample.txt
```

Example: Using **cp -r** command to make a New Directory "copyfolder1" from Existing Directory "folder1".

```
[root@server-01 testdir]# cp -r folder1 copyfolder1
[root@server-01 testdir]# ls -lah
total 16K
drwxr-xr-x. 4 root root 4.0K Apr 14 03:32 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
drwxr-xr-x. 2 root root 4.0K Apr 14 03:32 copyfolder1
-rw-r--r--. 1 root root    0 Apr 14 01:57 demo
-rw-r--r--. 1 root root    0 Apr 14 02:04 example.txt
drwxr-xr-x. 2 root root 4.0K Apr 14 03:15 folder1
-rw-r--r--. 1 root root    0 Apr 14 03:29 samplecopy.txt
-rw-r--r--. 1 root root    0 Apr 14 01:57 sample.txt
```

# MOVE
## Moving a File or Directory

The **mv** command can be used to move a file into another directory:

**mv filename destination** 

Example:  Using the **mv** command to move File "sample.txt" from its Current Directory to Directory "folder1". 
```
[root@server-01 testdir]# ls -lah
total 16K
drwxr-xr-x. 3 root root 4.0K Apr 14 03:58 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
-rw-r--r--. 1 root root    0 Apr 14 01:57 demo
-rw-r--r--. 1 root root   19 Apr 14 03:49 edit.txt
-rw-r--r--. 1 root root    0 Apr 14 02:04 example.txt
drwxr-xr-x. 2 root root 4.0K Apr 14 03:15 folder1
-rw-r--r--. 1 root root    0 Apr 14 01:57 sample.txt
[root@server-01 testdir]# mv sample.txt folder1/
[root@server-01 testdir]# ls -lah
total 16K
drwxr-xr-x. 3 root root 4.0K Apr 14 03:58 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
-rw-r--r--. 1 root root    0 Apr 14 01:57 demo
-rw-r--r--. 1 root root   19 Apr 14 03:49 edit.txt
-rw-r--r--. 1 root root    0 Apr 14 02:04 example.txt
drwxr-xr-x. 2 root root 4.0K Apr 14 03:58 folder1
[root@server-01 testdir]# cd folder1
[root@server-01 folder1]# ls -lah
total 8.0K
drwxr-xr-x. 2 root root 4.0K Apr 14 03:58 .
drwxr-xr-x. 3 root root 4.0K Apr 14 03:58 ..
-rw-r--r--. 1 root root    0 Apr 14 01:57 sample.txt
```
As you can see File "sample.txt" is no longer present in the Previous Directory and is now in Directory "folder1".

The **mv** command can also be used to **Rename** Existing Files or Directories:

Example:  Using the **mv** command to Rename File "demo" to "newdemo". 

```
[root@server-01 testdir]# ls -lah
total 16K
drwxr-xr-x. 3 root root 4.0K Apr 14 03:58 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
-rw-r--r--. 1 root root    0 Apr 14 01:57 demo
-rw-r--r--. 1 root root   19 Apr 14 03:49 edit.txt
-rw-r--r--. 1 root root    0 Apr 14 02:04 example.txt
drwxr-xr-x. 2 root root 4.0K Apr 14 03:58 folder1
[root@server-01 testdir]# mv demo newdemo
[root@server-01 testdir]# ls -lah
total 16K
drwxr-xr-x. 3 root root 4.0K Apr 14 04:11 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
-rw-r--r--. 1 root root   19 Apr 14 03:49 edit.txt
-rw-r--r--. 1 root root    0 Apr 14 02:04 example.txt
drwxr-xr-x. 2 root root 4.0K Apr 14 03:58 folder1
-rw-r--r--. 1 root root    0 Apr 14 01:57 newdemo
```

Example:  Using **mv** to Rewrite File "demo" with File "final"  File "demo" had content replaced.
```
[root@server-01 testdir]# cat demo
This is a Newer Version of Demo.
[root@server-01 testdir]# cat final
Demo Replaced by Final Version.
[root@server-01 testdir]# mv final demo
mv: overwrite ‘demo’? y
[root@server-01 testdir]# cat demo
Demo Replaced by Final Version.
[root@server-01 testdir]# ls -lah
total 16K
drwxr-xr-x. 3 root root 4.0K Apr 14 04:26 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
-rw-r--r--. 1 root root   32 Apr 14 04:24 demo
drwxr-xr-x. 2 root root 4.0K Apr 14 03:58 newfolder1
```
**CAUTION:** Using the **mv** command to Overwrite an Existing File will be **PERMANENT** with **NO RECOVERY** Options for Previous File.

# DELETE

## Deleting a File
The **rm** command can be used to remove a file:

**rm filename**

Example:  Using **rm** command to remove Existing File "demo".

```
[root@server-01 testdir]# ls -lah
total 16K
drwxr-xr-x. 3 root root 4.0K Apr 14 04:26 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
-rw-r--r--. 1 root root   32 Apr 14 04:24 demo
drwxr-xr-x. 2 root root 4.0K Apr 14 03:58 newfolder1
[root@server-01 testdir]# rm demo
rm: remove regular file ‘demo’? y
[root@server-01 testdir]# ls -lah
total 12K
drwxr-xr-x. 3 root root 4.0K Apr 14 04:31 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
drwxr-xr-x. 2 root root 4.0K Apr 14 03:58 newfolder1
```
**CAUTION:** Using the **rm** command to remove an Existing File will be **PERMANENT** with **NO RECOVERY** Options for Previous File.

## Deleting an Empty Directory

The **rmdir** command can be used to remove an Empty Directory:

**rmdir directory name**

Example:  Using the **rmdir** command to Remove Empty Directory "emptyfolder".
```
[root@server-01 testdir]# ls -lah
total 16K
drwxr-xr-x. 4 root root 4.0K Apr 14 04:35 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
drwxr-xr-x. 2 root root 4.0K Apr 14 04:35 emptyfolder1
drwxr-xr-x. 2 root root 4.0K Apr 14 03:58 newfolder1
[root@server-01 testdir]# rmdir emptyfolder1
[root@server-01 testdir]# ls -lah
total 12K
drwxr-xr-x. 3 root root 4.0K Apr 14 04:36 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
drwxr-xr-x. 2 root root 4.0K Apr 14 03:58 newfolder1
```

## Deleting a Non-Empty Directory

You will be unable to use the **rmdir** command to remove a Directory with contents in it.

```
[root@server-01 testdir]# rmdir newfolder1
rmdir: failed to remove ‘newfolder1’: Directory not empty
```

Using **rm** with option **-r** will remove a Directory that has content.

Example:  Using **rm -r** to Remove Non-Empty Directory "newfolder1" and it's contained File "sample.txt".
```
[root@server-01 testdir]# ls -lah
total 12K
drwxr-xr-x. 3 root root 4.0K Apr 14 04:36 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
drwxr-xr-x. 2 root root 4.0K Apr 14 03:58 newfolder1
[root@server-01 testdir]# rm -r newfolder1
rm: descend into directory ‘newfolder1’? y
rm: remove regular empty file ‘newfolder1/sample.txt’? y
rm: remove directory ‘newfolder1’? y
[root@server-01 testdir]# ls -lah
total 8.0K
drwxr-xr-x. 2 root root 4.0K Apr 14 04:43 .
dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
```
**CAUTION:** Using the **rm** command to remove an Existing Directory will be **PERMANENT** with **NO RECOVERY** Options for Previous Directory and Contents
