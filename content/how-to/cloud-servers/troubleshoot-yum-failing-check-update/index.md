---
permalink: troubleshoot-yum-failing-check-update/
audit_date: '2021-04-12'
title: 'Troubleshoot yum failing check update'
type: article
created_date: '2021-04-01'
created_by: Uriel Amar
last_modified_date: '2021-04-12'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

This article explains how to fix issues with server's using CentOS&reg;
operating system with `yum` cache not updating due to a failed check update.
There are several errors that can be displayed during this process depending on
the cause of the issue.  Below is a breakdown on how to identify and resolve
these issues:

### Clear yum cache

The following command ensures there are no issues relating to corrupted metadata
files, missing references, or temporarily free up disk space.

```
yum clean all
```

### Check for missing repositories

Run the following command to ensure there is no missing repositories.

```
yum repolist all
```

This can also be vefified inside the **/etc/yum.repos.d** folder.  You can then
install any missing repositories with the `yum install` command or by adding a
file manually into the **/etc/yum.repos.d** folder.

### Check for disabled repositories

If all repositories necessary are available but not working, edit the repository
file. 

1. Run the following command Replacing **[filename]** with the
filename and **[extension]** with the respective extension:

    ```
    cat [filename].[extension]
    ```

2. Change the value **enabled=0** to **enabled=1**
3. Run the following command to update the package list and install the
   software.

    ```
    yum update
    ```

### PYCURL ERROR 22

There are several different types of errors that may be displayed in the event
that the repository file is corrupted. For example, in the event that 'yum
install' fails with the below error, it may be due to an incorrect repository
URL as shown below:

```
[Errno 14]  - "The requested URL returned error: 403"  
Trying other mirror.
```

Correcting the repository URL in the repository file and cleaning the yum cache
should fix this issue.

```
yum clean all
```

Additionally, th`yum clean metadata` command can be used to clear the metadata
cache in case any additional XML files caused the corruption.

### Error *Fatal error, run database recovery*

In the event that yum fails with a 'Fatal error, run database recovery' message, you would need to delete the database and manually rebuild it using the following commands:

```
rm -f /var/lib/rpm__db*
rpm -rebuilddb
yum clean all
yum update
```

### Checking for dependency conflicts

In the event that a package cannot be installed due to a missing dependency or
mismatched version, manually installing each dependency may fix this issue.
Additionally, deleting and reinstalling the local package may resolve version
mismatches.  

Unfortunately, there is no easy fix for most dependency issues due to the many
factors it involves.  In those cases, it may be best to add a repository that
contains the correct dependency.
