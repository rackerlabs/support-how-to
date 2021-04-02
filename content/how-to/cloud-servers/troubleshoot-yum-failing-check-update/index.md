---
permalink: /troubleshoot-yum-failing-check-update/
audit_date:
title: 'Troubleshoot yum failing check update'
type: article
created_date: '2021-04-01'
created_by: Uriel Amar
last_modified_date: '2021-04-01'
last_modified_by: Uriel Amar
product: Cloud Servers
product_url: cloud-servers
---

This article will explain how to fix issues with CentOS server's yum cache not updating due to a failed check update.  There are many types of errors that can be displayed during this process depending on the cause of the issue.  Below is a breakdown on how to identify and resolve these issues:


### Clearing the yum cache

Run the command 'yum clean all' to clear the yum cache.  This will ensure there are no issues relating to corrupted metadata files or missing references as well as temporarily free up disk space.  

### Checking for missing repositories
Run the command 'yum repolist all' to ensure there is no missing repositories.  This can also be vefified inside the /etc/yum.repos.d folder.  You can then install any missing repositories with the 'yum install' command or by adding a file manually into the /etc/yum.repos.d folder.

### Checking for disabled repositories 

In the event that all repositories necessary are available but not working, you would need to edit the repo file in question.  To do this, run the 'cat' command along with the filename like the example below:

>$ cat /etc/yum.repos.d/MariaDB.repo
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/10.1/centos7-amd64
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
enabled=0
gpgcheck=1
priority=99
>
Once here, change the value of 'enabled=0' to 'enabled=1' then run 'yum update' onto this repo which will update the package list and install the software.

### Checking for broken or corrupted repositories

There are many different types of errors that may be displayed in the event that the repository file is corrupted. For example, in the event that 'yum install' fails with the below error, it may be due to an incorrect repository URL as shown below:

>[Errno 14] PYCURL ERROR 22 - "The requested URL returned error: 403"  
Trying other mirror.
>

In this case, correcting the repository URL in the repo file and cleaning the yum cache should fix this issue.  Running a search engine result for the repository in question should provide the correct information in case your repo file does not match.  

Additionally, the 'yum clean metadata' command can be used to clear the metadata cache in case any additional XML files caused the corruption. 

### Checking for database issues

In the event that yum fails with a 'Fatal error, run database recovery' message, you would need to delete the database and manually rebuild it with the following commands:

>rm -f /var/lib/rpm__db*
rpm -rebuilddb
yum clean all
yum update
>

### Checking for dependency conflicts

In the event that a package cannot be installed due to a missing dependency or mismatched version, manually installing each dependency may fix this issue.  Additionally, deleting and reinstalling the local package may resolve version mismatches.  

Unfortunately, there is no easy fix for most dependency issues due to many possible causes.  In those cases, it may be best to simply add an additional repository that contains the correct dependency.
