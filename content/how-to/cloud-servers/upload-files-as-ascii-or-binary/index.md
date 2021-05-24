---
permalink: upload-files-as-ascii-or-binary-via-ftp
audit_date: '2021-05-24'
title: Upload files as ASCII or binary via FTP
type: article
created_date: '2011-03-15'
created_by: Rackspace Support
last_modified_date: '2021-05-24'
last_modified_by: Ana Corpus
product: Cloud Servers
product_url: cloud-servers
---

Deciding how you should upload a file depends strictly on the type of file. Upload files such as HTML, ASP, PHP, CGI, and PL in ASCII mode.

A general rule when uploading a file is that anything that you can view with a text editor should be transferred in ASCII mode. Binary files, such as GIF or JPEG images, ZIP files, and executables should be transferred in **binary** mode.

The majority of FTP programs have an **Auto** mode which switches dynamically between ASCII or binary upload modes depending on the type of file. If you use the Auto feature, verify the list of ASCII file extensions of the FTP program. Any file that is not included in the list of ASCII extensions will be uploaded in binary mode.
