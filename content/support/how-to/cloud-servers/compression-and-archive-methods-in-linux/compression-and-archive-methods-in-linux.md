---
permalink: compression-and-archive-methods-in-linux
audit_date: '2020-04-21'
title: Compression and archive methods in Linux
type: article
created_date: '2020-04-17'
created_by: John Abercrombie
last_modified_date: '2020-04-21'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article explains how to create and extract file archives in Linux&reg; by using various methods.

In this digital age, we commonly send data over the Internet, especially for data distribution.
When we need to send large amounts of data, we often need to send it all at once.

Thus, we need a way to send multiple files, documents, or images within a single file. Not only that, but
we need a way to deliver the data efficiently and without bogging down bandwidth in the process. Therefore,
methods of compressing data before sending it came into being. Because the compressed files are smaller,
these methods enable us to send files more quickly. The smaller size also saves space on hard drives.

Data compression and Linux are certainly not strangers. If you have ever noticed the **.xyz** at the end
of a package you have installed from a Linux repository, then you've seen an example of Linux data compression.

While there are several methods of data compression available, the most common in Linux are:

- .zip files
- .tar files
- .tar.gz files
- .tar.bz2 files

### zip

This particular method is probably to most well known and most commonly used when it comes to archiving or
compressing files today. The fact that it is cross-platform accessible gives this method an advantage over
others. You can access and open a zip file regardless of the operating system because Linux, Windows&reg;, and
MacOS&reg; all support zip files by default.

The following example shows the basic syntax for compressing a file with zip:

    $ zip -r <name of the zip file>.zip <directory or file(s) you want to compress>

You can also compress directories. The following examples show you how to create a zip archive with the file,
**example.txt** and another zip archive with the directory, **Pictures**:

    $ zip examples.zip example.txt
    $ zip -r pictures.zip /home/user/Pictures/

Both commands create a compressed **.zip** file. The `-r` option lets you recursively include all of
the files and sub-directories within the **Pictures** directory in the compressed file. While you don't need the
recursive switch for single files, you do need it for a directory. The `-r` makes sure to include everything located
within that directory in the resulting **.zip** file.

You can exclude some of the files within the directory that you plan to archiv. Suppose you want to compress the **Pictures** directory,
but you only want to include .jpg files.

After changing directory to the **Pictures**, enter the following command:

    $ zip -r pictures.zip ‘*.jpg’

This command searches **Pictures**, excludes all non-jpg files, and zips only the **.jpg** files into **pictures.zip**.
This concept works with any file format (.txt, .doc, and so on).

If you receive a zipped file (**.zip**), use the following command to unzip that file in Linux:

    $ unzip pictures.zip

What if you want to unzip the file into your Pictures directory, and you are currently in a different directory?
Use the following command:

    $ unzip pictures.zip -d /home/user/Pictures

All of the files contained within the zip file are extracted to the directory of your choice when you add the -d
option. Otherwise, `unzip` extracts the files into your current directory by default.

### tar

**Note:** Unlike the other archive options, the `tar` command does not compress **.tar** files. `tar` just bundles up
the files into a single archived file. Therefore, if you ever see a file ending in just ‘.tar’, you already know that
the archive process applied no compression on the files contained within that archive.

The `tar` command has a few more options than the zip command did. The most commonly used options for the tar command
includes the following:

- `-c`: creates a new **.tar** archive file
- `-v`: verbosely shows the tar process so you can see all the steps in the process
- `-f`: specifies the file name type of the archive file
- `-x`: extracts files from an existing **.tar** file

The following example shows the basic syntax of the `tar` command to create an archive:

    $ tar -cvf <name of archive file>.tar <directory to archive or files to archive>

Use the following command to archive the **Pictures** directory:

    $ tar -cvf pictures.tar /home/user/Pictures

To extract a preexisting .tar archive file, replace the `-c` with a `-x`, as shown the following example:

    $ tar -xvf <name of archive file>.tar

As in the case of the `unzip` command, `tar` extracts the **.tar** contents to your current location,
by default. To extract **.tar** file contents somewhere else, use the following command:

    $ tar -xvf (name of archive file).tar -C /path/to/desired/directory/location/

### tar.gz

**Tar.gz** files add compression to the archive function of the tar command by using the `gzip` function.

You need to add only the `-z` option to the basic `tar` command to add compression, as shown in the
following example:

    $ tar -zcvf <archive name>.tar.gz /directory/you/want/to/compress
    OR
    $ tar -zcvf <archive name>.tar.gz ‘*.jpg’


As with `tar`,  use ‘-c’ is used to create an archive and ‘-x’ to extract it, as shown in the following example:

    $ tar -zxvf <archive name>.tar.gz
    OR
    $ tar -zxvf <archive name>.tar.gz -C /path/to/desired/directory/

### tar.bz2

Let’s say you have an extra-large directory that you want to compress as much as possible.
If tar.gz results in an over-sized file, try using tar.bz2 instead. Note that this option does take a little
longer.

This archive method adds only one new option: `-j`, as shown in the following example:

    $ tar -jcvf <archive name>.tar.bz2 /directory/to/compress
    OR
    $ tar -jcvf <archive name>.tar.bz2 ‘*.jpg’

Again, to extract a **.tar.bz2** file, switch the `-c` for `-x`, as shown in the following examples:

    $ tar -jxvf <archive name>.tar.bz2
    OR
    $ tar -jxvf <archive name>.tar.bz2 -C /directory/to/extract/to/

### Conclusion

You now know how to use the most common data compression tools available. Each option has its place. 

- Do you need to send a compressed file to someone who uses a different operating system than you? Try zip. 
- Would you like to archive some files, but you don’t need to compress them? Use tar. 
- Perhaps you need to compress the files after all. Use tar.gz. 
- Finally, if you want that directory squeezed down as much as possible, you have .tar.bz2 at your disposal. 

With experience, you'll get comfortable with which tool is going to best suit your needs at any given time.
