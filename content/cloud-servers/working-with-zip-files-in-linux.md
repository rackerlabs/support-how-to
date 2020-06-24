---
permalink: working-with-zip-files-in-linux/
audit_date:
title: 'Working with ZIP files in Linux'
type: article
created_date: '2020-06-24'
created_by: Jose Quezada
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

# Working with ZIP files

This guide is intended to provide help when a user has to manipulate zip files.

Make sure that you have the necessary software:

    # zip 

    # unzip

    # whatis zip

    # whatis unzip

In case you don´t have the zip library installed you can search for it with the following command:

    # yum whatprovides zip

Install the zip library:

    # yum install -y zip

Create a zip file from a file[s]:

    # zip file_name.zip source_file [source_file2 ....]

Create a zip file from a directory

    # zip file_name.zip source_directory

Uncompress a zip file.

You can create a directory to uncompress the zip file:

    # mkdir /path/to/new/extract_directory

Uncompress zip file:

    # unzip file_name.zip

Using the target directory:

    # unzip file_name.zip -d /path/to/new/extract_directory

For more information you can review the manual pages:

    # man zip

    # man unzip
