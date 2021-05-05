---
permalink: rackspace-cloud-backup-backing-up-databases
audit_date: '2020-10-19'
title: Back up databases with Cloud Backup
type: article
created_date: '2012-08-23'
created_by: David Hendler
last_modified_date: '2020-10-19'
last_modified_by: Rose Morales
product: Cloud Backup
product_url: cloud-backup
---

Rackspace Cloud Backup includes all files regardless if they contain database
data or pictures of your cat. Files are files.

However, databases are complicated to back up because they have multiple,
rapidly changing files, whose state must be synchronized. For instance, if the system
backs up one of the database's files and then, a few seconds (or milliseconds)
later, it backs up another one, the state of the database could get corrupted.
The database might have been in the middle of an operation while the system made
backups of the two files, and the two files represent two different points in the middle of
that operation.

You can use Rackspace Cloud Backup on your database files by following
a few steps.

### Back up your database

Most databases have a utility that dumps a consistent state of the database to
another file. `mysqldump` is one such utility for MySQL&reg;. You can safely
back up a database with Rackspace Cloud Backup by running this utility before
doing the backup. Then back up the output of the utility instead of the
internal files that the database manages. Some customers use `cron` to schedule
regular database dumps, and then schedule Rackspace Cloud Backup to
automatically back up the dump a couple of hours later.

Cloud Backup's de-duplication and compression capabilities save space and
storage costs because of the volume of duplicated data
from the various dumps stored in the **sqlbackups** folder.
Cloud Backup saves only the changed portions of the file. Because of this,
you should *never* compress or encrypt the database files you are backing up.

1. Remove the live database folder and files from your backup job.

    a.  Log in to the [Cloud Control Panel](https://login.rackspace.com).
    b.  In the top navigation bar, click **Select a Product** > **Rackspace Cloud**.
    c.  Select **Backups** > **Systems**.
    d.  Select your system from the list.
    e.  Click the gear icon next to your backup job in the backup list,
        and select **Configure Files**.
    f.  Navigate to your database folder and unselect it.
    g.  Click the **Save Changes** button.

2. Dump your database. For example, using `mysqldump`, go to your database and
    enter the following code:

        mysqldump -u root -p mytestdb > /my_directory/mytestdb.sql

3. Add your SQL dump file to your backup.

    a.  In the top navigation bar of the Cloud Control Panel, click
        **Backups > Systems**.
    b.  Select your system from the list.
    c.  Click the gear icon next to your backup job in the backup list,
        and select **Configure Files**.
    d.  Navigate to your database backup folder and select it.
    e.  Click **Save Changes**.

Remember to add your database dump file or folder as part of your backup
job. You can automate this task by scheduling these dumps with applications like
**crontab** on Linux&reg; or **Task Scheduler** on Windows&reg;.

**Warning**: If you use automated dumps, schedule them far enough ahead of your
backup to allow them plenty of time to finish before the backup starts.
Otherwise, you might experience file corruption or missing files in your
backups.
