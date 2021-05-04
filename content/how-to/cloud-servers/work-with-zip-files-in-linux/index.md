---
permalink: work-with-zip-files-in-linux
audit_date: '2020-06-26'
title: 'Work with ZIP files in Linux'
type: article
created_date: '2020-06-24'
created_by: Jose Quezada
last_modified_date: '2020-06-26'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article demonstrates how to create and use zip files in Linux&reg;. 

Make sure that you have the necessary software:

- zip 

- unzip

If you don´t have the zip library installed, you can search for it with the following command:

    yum whatprovides zip

Install the zip library:

    yum install -y zip
    
### Zip

Zip files contain a collection of files in a compressed archive. Use zip files to keep a set of files
together, save space, or reduce transmission time.

You can create a zip file from one or more files by using the following syntax:

    zip file_name.zip source_file [source_file2 ....]

Or you can create a zip file from a directory by using the following syntax:

    zip file_name.zip source_directory
    
### Unzip

The `unzip` command uncompress a zip file.

To unzip a zip file in the current directory, run the following command:

    unzip file_name.zip

To uncompress a zip file to a new directory, run the following commands:

    mkdir /path/to/new/extract_directory
    unzip file_name.zip -d /path/to/new/extract_directory

### Resources

For more information, run the following commands to review the manual pages:

    man zip
    man unzip
