---
permalink: prepare-to-migrate-a-linux-server
audit_date: '2020-10-01'
title: Prepare to migrate a Linux server
type: article
created_date: '2012-03-13'
created_by: Jered Heeschen
last_modified_date: '2020-10-01'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

This article provides recommended actions from Rackspace support technicians that you can perform before
you migrate your Linux&reg; server to mitigate occurrences and optimize your server for a faster transition.
Some of these recommendations can cause significant downtime, so schedule them accordingly.

For Windows&reg; migration preparation, see [Prepare to migrate a Windows server](/support/how-to/prepare-to-migrate-a-windows-server).

### Back up your data

Before you perform any migration, create a backup of important data. You can use Rackspace Cloud Backup to
automate storing and retrieving backup data from Cloud Files or `rsync` to copy your data to another server.

-   [Rackspace Cloud Backup - Install the agent on Linux](/support/how-to/rackspace-cloud-backup-install-the-agent-on-linux)
-   [Backing up your files with rsync](/support/how-to/backing-up-your-files-with-rsync)

### Prepare for a system reboot

Shut down your server during the final stages of a migration to safely copy dynamic content to the new host.
During a Rackspace-automated migration, the server shuts down.

Ensure that your server reboots quickly and safely when the migration completes.

### General preparation

The following tasks prevent issues with server time and the size of the disk space on the server.

#### Set accurate time via NTP

Set up and configure Network Time Protocol (NTP) on your server to avoid migration issues related to the
server date or file timestamps. Some older cloud servers pull time from their host machine and don't keep
time independently from the host. This might lead to inaccuracies.

For details on setting up NTP on your server, see [Using NTP to sync time](/support/how-to/using-ntp-to-sync-time).

#### Reduce the number and size of files

You can reduce the time required for migration and improve the reliability of a resulting image by limiting
the number and size of files that might change during the migration operation.

#### Lock databases

If a database changes during migration, the database in the image could be corrupted, or data could be lost.

**Note**: We recommend that you bring the database down entirely for the migration and set your tables to
`read-only` to protect them from accidental data loss during the operation.

To lock your tables in MySQL&reg;, run the following command on the command line:

    mysql -u root -p --execute="FLUSH TABLES WITH READ LOCK"

### Postmigration tasks

After the migration finishes and your new server starts, test your websites and applications. Ensure that
applications are responsive and that they can write information to their databases.

If you have any services that need to communicate with other servers, explicitly test their connectivity to
ensure that they still talk to each other.
