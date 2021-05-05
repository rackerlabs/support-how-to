---
permalink: linux-file-management-commands-to-create-copy-move-and-delete-files
audit_date: '2020-04-17'
title: Linux file management commands to create, copy, move, and delete files
type: article
created_date: '2020-04-12'
created_by: John Garcia
last_modified_date: '2020-04-17'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes some introductory Linux&reg; file management commands to view, create, copy, move, and delete files and directories.

### View directories and files

To view the files in a directory, use the `ls` command.  

To view the contents of a file, use the `cat` command.

#### `ls` command

You can use the `ls` command to show the contents of a directory. `ls` command options, such as `ls -lah`, provide additional information. They include a listing of all files (including hidden files) in a human-readable, long-list view.

**Syntax**: `ls directoryname`

The following example shows the listing of an empty directory. `ls` returns no files, while `ls -lah` returns hidden files and directories. Directories are shown with a line starting with _d_.

    [root@server-01 testdir]# ls
    [root@server-01 testdir]#
    [root@server-01 testdir]# ls -lah
    total 8.0K
    drwxr-xr-x. 2 root root 4.0K Apr 14 01:46 .
    dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..

#### `cat` command

The `cat` command displays the contents of a file.

**Syntax**: `cat filename`

The following example shows how to view the contents of the **Important** file with the `cat` command:

    [root@server-01 testdir]# cat Important
    DON'T DELETE THIS TEXT.

### Create a file

You can create files by using the following commands:

- `touch`
- `cat >`
- `>`

#### `touch` command

The `touch` command creates empty files.

**Syntax**: `touch newfilename`

The following example uses the **touch** command to create the new files, **demo** and **sample.txt**:

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

You can also use the **touch** command to create multiple files with a single command.

The following example uses the **touch** command to create the new files, **sample1**, **sample2**, and **sample3**:

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

#### `cat >` command

The `cat >` command creates a non-empty file by entering the contents after the greater-than sign.

**Syntax**: `cat > text-to-be-added`

The following example uses `cat >` followed by the content to create the new file, **test.txt**, with one line of content:

    [root@server-01 testdir]# ls -lah
    total 8.0K
    drwxr-xr-x. 2 root root 4.0K Apr 14 01:57 .
    dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
    -rw-r--r--. 1 root root    0 Apr 14 01:57 demo
    -rw-r--r--. 1 root root    0 Apr 14 01:57 sample.txt
    [root@server-01 testdir]# cat > test.txt
    This is only a test.
    [root@server-01 testdir]# ls -lah
    total 12K
    drwxr-xr-x. 2 root root 4.0K Apr 14 01:57 .
    dr-xr-x---. 8 root root 4.0K Apr 14 01:47 ..
    -rw-r--r--. 1 root root    0 Apr 14 01:57 demo
    -rw-r--r--. 1 root root    0 Apr 14 01:57 sample.txt
    -rw-r--r--. 1 root root   21 Apr 14 01:57 test.txt

#### `>` command

**Syntax**: `> newfilename`

The standard redirect symbol, `>`, creates a single new file without any content or replaces an existing file with an empty file of the same name.

**CAUTION:** You should use the redirect symbol with care because you can accidentally overwrite existing files. These changes are permanent. You cannot recover the previous contents.

The following example uses `>` to create the new file, **example.txt**:

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

The following example demonstrates how you can accidentally rewrite the contents of the existing file, **Important**:

    [root@server-01 testdir]# cat Important
    DON'T DELETE THIS TEXT.
    [root@server-01 testdir]# > Important
    [root@server-01 testdir]# cat Important
    [root@server-01 testdir]#

**Note:** As previously mentioned, the redirect symbol can rewrite, as shown in the preceding example, with no option to recover lost data. If you rewrite critical files, this can cause catastrophic issues.

However, you can use two redirect symbols, `>>`, to append content to the end of a file. If no file exists, `>>` creates the file and adds the contents. If the file already exists, `>>` appends the new contents to the end of the file.

**Syntax**: `>> filename`

The following example uses `>>` to add the contents of **change.txt** to the end of the file, **edit.txt**. The `>>` command prevents a complete rewrite of **edit.txt**.

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

### Create a directory

Use `mkdir*` to create an empty directory.

**Syntax**: `mkdir new-dirname`

The following example uses `mkdir` to create the new directories, **folder1** and **folder2**:

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

You can also use the `mkdir` command to create multiple directories with a single command.

The following example uses `mkdir` to create the new directories, **folderA**, **folderB**, and **folderC**:

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

### Copy a file or directory

The `cp` command copies an existing file into a new file.

**Syntax**: `cp orig-filename new-filename`

The following example uses the `cp` command to make a new file, **samplecopy.txt**, from the existing file, **sample.txt**:

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

The following example uses `cp -r` to make a new directory, **copyfolder1**, from an existing directory, **folder1**:

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

### Move a file or directory

You can use the `mv` command to move a file into another directory.

**Syntax**: `mv filename destination`

The following example uses the `mv` command to move **sample.txt** from its current directory to the **folder1** directory: 

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

As you can see, **sample.txt** moved from the previous directory and now shows in the **folder1** directory.

You can also use the `mv` command to rename existing files or directories.

The following example uses the `mv` command to rename the **demo** file to **newdemo**: 

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

The following example uses `mv` to rewrite the **demo** file with the **final** file. This action replaces **demo**.

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

**CAUTION:** Using the **mv** command to overwrite an existing file is permanent. You cannot recover the previous file.

### Delete a file

Use the `rm` command to remove a file.

**Syntax***: rm filename

The following example uses the `rm` command to remove the existing file, **demo**:

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

**CAUTION:** Using the **rm** command to remove an existing file is permanent. You cannot recover the previous file.

### Delete an empty directory

Use the `rmdir` command to remove an empty directory.

**Syntax**: rmdir directoryname

The following example uses the `rmdir` command to remove an empty directory, **emptyfolder**:

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

### Delete a non-empty directory

The **rmdir** command cannot remove a directory with contents in it, as shown in the following example:

     [root@server-01 testdir]# rmdir newfolder1
     rmdir: failed to remove ‘newfolder1’: Directory not empty

However, you can use `rm` with the option `-r` to remove a directory that has content.

**Syntax:**: rm -r directoryname

The following example uses `rm -r` to remove the non-empty directory, **newfolder1**, and its file, **sample.txt**:

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

**CAUTION:** Using the `rm` command to remove an existing directory is permanent. You cannot recover the previous directory and contents.
