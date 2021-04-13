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

This article explains how to fix CentOS&reg; server issues
with the `yum` cache not updating due to a failed check update.
Several errors might display during this process depending on
the issue's cause.  The following breakdown shows how to identify and resolve
these issues:

### Clear yum cache

The following command ensures that no issues exist relating to corrupted metadata
files, missing references, or temporarily free up disk space.

```
yum clean all
```

### Check for missing repositories

Run the following command to ensure there are no missing repositories.

```
yum repolist all
```

You can also verify this inside the **/etc/yum.repos.d** folder.  You can then
install any missing repositories with the `yum install` command or add a
file manually into the **/etc/yum.repos.d** folder.

### Check for disabled repositories

If the necessary repositories are available but not working, perform the following steps 
to edit the repository file:

1. Run the following command replacing **[filename]** with the
   repository filename and **[extension]** with the respective extension:

    ```
    cat [filename].[extension]
    ```

2. Open the repository file in the editor of your choice and change the value
   **enabled=0** to **enabled=1**.
3. Run the following command to update the package list and install the
   software:

    ```
    yum update
    ```

### Troubleshoot a PycURL error

Several different types of errors might display if the repository file is
corrupted. For example, if the `yum install` command fails with the following
error, it might be due to an incorrect repository URL, as shown in this example:

```
[Errno 14]  - "The requested URL returned error: 403"  
Trying other mirror.
```

Correcting the repository URL in the repository file and cleaning the `yum` cache
should fix this issue.

```
yum clean all
```

Additionally, you can use the `yum clean metadata` command to clear the metadata
cache if any additional XML files caused the corruption.

### Troubleshoot a *Fatal error, run database recovery* error

If `yum` fails with a *Fatal error, run database recovery* message, you should delete
the database and manually rebuild it by using the following commands:

```
rm -f /var/lib/rpm__db*
rpm -rebuilddb
yum clean all
yum update
```

### Check for dependency conflicts

If you can't install a package because of a missing dependency or
mismatched version, manually installing each dependency might fix this issue.
Additionally, deleting and reinstalling the local package might resolve version
mismatches.  

Unfortunately, there is no easy fix for most dependency issues because of the many
factors involved.  In those cases, consider adding a repository that
contains the correct dependency.
