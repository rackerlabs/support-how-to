---
permalink: determine-dfsr-staging-quota/
audit_date:
title: Determine DFSR Staging Quota
type: article
created_date: '2020-11-20'
created_by: Steven Mondragon-DeVoss
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

*This article is applicable to the following Windows Server versions: 2008 and up*

Distributed File System Replication (DFSR) is used to replicate data from DFS namespaces across a group of servers which are called a replication group. This will allow data to stay synchronized on multiple servers. This document is used to aid in determining the staging quota size.

# Rule of thumb

Windows Server 2008 and 2008 R2

* The staging area quota must be as large as the 32 largest files in the replicated folder.

# How to find the largest files

1. Using PowerShell
- Run the following to get the names and sizes of the largest 32 files in bytes.
  > Get-ChildItem c:\temp -recurse | Sort-Object length -descending | select-object -first 32 | ft name,length -wrap -auto
- Run the following to get the total size of the 32 largest files.
  > Get-ChildItem c:\temp -recurse | Sort-Object length -descending | select-object -first 32 | measure-object -property length –sum
- Running the following will be the most useful as it will provide the total size of the 32 largest files in gigabytes.
  > $big32 = Get-ChildItem c:\temp -recurse | Sort-Object length -descending | select-object -first32 | measure-object -property length –sum<br>
  $big32.sum /1gb

# Calculate the minimum size required

- From the output of one of the commands above, you will get the following.
  - Name = file name | 
  - Length = size in bytes | 
  - One gigabyte = 1073741824 bytes

Here is an example of the output using the 16 largest files.

Name | Length
------------ | -------------
File1.zip | 10286089216
File2.zip | 6029853696
File3.zip | 5751522304
File4.zip | 5472683008
File5.zip | 5241586688
File6.zip | 4321264640
File7.zip | 4176765952
File8.zip | 4176765952
File9.zip | 4078994432
File10.zip | 4058424320
File11.zip | 3858056192
File12.zip | 3815138304
File13.zip | 3815138304
File14.zip | 3576931328
File15.zip | 3307488256
File16.zip | 3274982400


To get the minimum staging area quota using the first two powershell commands, you would take the sum of the total number of bytes and divide it by one gigabyte. In the above example, we used 16 files instead of 32. You would take the sum which is 75241684992and divide it by 1073741824.
 >75241684992 / 1073741824 = 70.07 GB

The third powershell command will be the easiest as it will do the math for you.
 >PS C:\> $big32 = Get-ChildItem c:\temp -recurse | Sort-Object length -descending | select-object -first32 | measure-object -property length -sum<br>
PS C:\>$big32.sum /1gb<br>
70.07427978515625

You would set the staging quota to 71 GB.

A reboot is not needed once the quota is set, but you will need to wait on the Active Directory (AD)  and DFSR AD polling cycle for the changes to apply.
