---
permalink: extend-a-volume-in-windows-server-with-diskpart
audit_date: '2020-05-12'
title: 'Extend a volume in Windows Server with diskpart'
type: article
created_date: '2020-05-10'
created_by: Karoline Mills
last_modified_date: '2020-05-12'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to extend a volume in Windows Server&reg; 2008 R2, 2012 R2,
and 2016 with `diskpart`. It also explains the difference between extending and shrinking
or partitioning a volume.

### Extending

Extending a volume increases the size of an already existing partition. You can do this only if
unallocated space is available.

To extend a volume, you can either use the built-in *disk management* tool or the command-line
tool `diskpart`. Keep in mind that you need administrator permissions to perform these tasks.

#### Extending by using `diskpart`

To extend a volume by using the `diskpart` command-line tool, use the following steps. The code uses
the `C:\` drive (`disk 0`) as an example.

1. To open the command-line prompt, click the **Start** button and type **cmd**.

2. To start the `diskpart` utility, type **diskpart**.

3. To view the current disk information, enter **list disk**.

4. To select the disk you want to extend, enter **select disk 0**.

5. To view the volume information, enter **list vol**.

6. To select the desired volume, enter **select vol 0**.

7. To extend the volume to the maximum available size, enter **extend**.

   You can specify the amount of space to add to the volume in megabytes by typing
   **extend size=1000**, which adds 1000 MB to the existing volume.

8.	To verify the new volume size, enter **list vol**.
