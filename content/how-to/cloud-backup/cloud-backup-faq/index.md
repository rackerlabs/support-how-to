---
permalink: cloud-backup-faq
audit_date: '2020-09-15'
title: Cloud Backup FAQ
type: article
created_date: '2015-12-10'
created_by: Rackspace Support
last_modified_date: '2020-09-15'
last_modified_by: Brett Johnson
product: Cloud Backup
product_url: cloud-backup
---

### Account services
{{< accordion title="I just changed the primary user on my account. Why are my backups all failing?" col="in" href="accordion23" >}}

Backups are stored in Cloud Files. The user ID associated with a
Cloud Backup agent must have permissions to write bundles to
Cloud Files in order to store the backup data for a snapshot.

When you demote a user ID from primary, it typically loses the
permissions required to write to a Cloud Files bucket and delete
from it.

You can use two methods to fix this problem. If it is not feasible
to change permissions on a demoted user ID, there is no choice but
to re-register the agent on the affected machine and migrate the old
snapshots. If the permissions can change on the demoted user ID, you must
make a request to support to add the needed permissions to store bundles
in Cloud Files.

{{< /accordion >}}

{{< accordion title="Why do I get a 403 error when trying to migrate a vault?" col="in" href="accordion1" >}}

When you use the API endpoint to migrate an existing vault to a new
agent, you should not configure the new agent with any new backup
configurations of its own.

You also cannot migrate an encrypted vault.

See the [Migrate Vault API call](https://docs.rackspace.com/docs/cloud-backup/v1/developer-guide/#migrate-vault)
for a description.
{{< /accordion >}}

{{< accordion title=`Why does my backup fail with the error "Container does not exist. Invalid snapshot id and engine, and check config_backup.json id?` col="in" href="accordion2" >}}

The Cloud Files container named **z_DO_NOT_DELETE_CloudBackup** is
required for Rackspace Cloud Backup to work properly. If you delete this
container, you receive the error `Container does not exist.
Invalid snapshot id and engine, and check config_backup.json id` when
you attempt to do a backup.

This error can have the following causes:

1.  The Cloud Files container where your backups are stored has been deleted.
2.  Clicking **View Configuration** does not display the JSON configuration.
    This issue commonly occurs when you have corrupted backup configurations.

To resolve this error, ensure that you do not delete the
**z_DO_NOT_DELETE_CloudBackup** container in your Cloud Files account because
backups use it. If you accidentally delete this container, [contact
Rackspace Support](https://www.rackspace.com/support).

------------------------------------------------------------------------
{{< /accordion >}}

### Backups

{{< accordion title="What is Rackspace Cloud Backup?" col="in" href="accordion3" >}}

Even though the cloud is engineered to prevent data loss, maintaining recent
backups of your important data is still considered a fundamental best practice.
Cloud Backup is a file-based backup solution that uses compression, encryption,
and deduplication to ensure your data is protected and recoverable.

Cloud Backup should not be confused with the ability to image your servers,
which is a strategy for horizontal scalability and not recommended for backup.

Cloud Backup is a service that enables you to select and back up
specific files and folders from your Cloud Server. You can schedule any
number of backup jobs and restore to the same system or a different
one, giving you the flexibility and power to work with your schedule and
data.

Cloud Backup has the following key features:

-   Select the files and folders that you want to back up from your cloud
    server.
-   Run your backups manually or on a schedule that works for you.
-   See the activity from all your backups, both current and previous.
-   Use AES-256 encryption with a private encryption key known only to
    you.
-   Restore individual files and folders from a particular date.
-   Save space with incremental backups that only save the changed
    portions of files.
-   Create unlimited backups.

For information on getting started with Cloud Backup, see our [introduction to
Cloud Backup](/support/how-to/cloud-backup).
{{< /accordion >}}

{{< accordion title="Why do I have to keep offsite copies of containers on non-Rackspace media?" col="in" href="accordion4" >}}

If you choose to keep offsite copies of backup containers, it provides an
extra layer of protection from bad actors who might obtain your Rackspace account
credentials from you and delete all your cloud assets.

To protect these offsite copies from the bad actor, they must reside on
media that is *not* accessible by using the stolen credentials. Otherwise, the
bad actor can delete them, too.
{{< /accordion >}}

{{< accordion title="Can Cloud Backup change my system configuration file, even after I have modified it?" col="in" href="accordion5" >}}

Yes. Some machines running the Ubuntu&reg; operating system have older agents
installed. To communicate properly with your system, you might need to overwrite the
configuration file with a current version.
{{< /accordion >}}

{{< accordion title="How does Cloud Backup handle corrupt files?" col="in" href="accordion21" >}}

Cloud Backup double-checks to make sure files get written properly when
they are backed up and restored. However, if an uploaded file is corrupt,
it is backed up and restored as corrupted. The backup and restore
processes themselves should never corrupt files. If file corruption
occurs in Cloud Files itself, it might render the backup unusable.
{{< /accordion >}}

{{< accordion title="What happens if I lose my encryption key?" col="in" href="accordion6" >}}

Rackspace does not store customer encryption keys. Only you know
and can access your encryption passphrase. If you forget your
passphrase, you are not able to restore data from your backups.

For more information, see the section on [Setting up encryption on your Cloud Backup system](/support/how-to/rackspace-cloud-backup-system-actions)
in the list of Cloud Backup actions.
{{< /accordion >}}

{{< accordion title="How do I generate a Cloud Backup encryption key?" col="in" href="accordion7" >}}

If you want to create your own encrypted key and bypass the default
client-side encryption, see [Generate your encrypted key in Cloud
Backup](/support/how-to/generate-your-encrypted-key-in-cloud-backup).
{{< /accordion >}}

{{< accordion title="Where are my Cloud Backups stored?" col="in" href="accordion8" >}}

All of your Cloud Backups are stored in your Cloud Files account.
{{< /accordion >}}

{{< accordion title="What if I never set up a Cloud Files account?" col="in" href="accordion9" >}}

When you establish your Cloud account, a Cloud Files account is set
up as well. You are not charged storage fees for your Cloud Files
account until you begin storing things in it.
{{< /accordion >}}

{{< accordion title="How many backup jobs can I have at one time?" col="in" href="accordion10" >}}

You can create any number of backup jobs for each of your servers, and
you can include a nearly unlimited number of files in each job.

For more information, see [Creating a Backup](/support/how-to/rackspace-cloud-backup-create-a-backup).
{{< /accordion >}}

{{< accordion title="What is deduplication?" col="in" href="accordion11" >}}

Our block-level deduplication backs up only those portions of files
that have changed since the previous backup, so you don't
needlessly backup the same unchanged data again and again. This
increases efficiency by reducing the amount of data transferred
for each backup and reduces your storage space by not storing duplicate
data. As an added benefit, this capability enables you to retrieve
previous versions of your files (up to the limits specified in your data
retention settings).

See the section on [Scheduling and Deduplication](/support/how-to/rackspace-cloud-backup-backup-actions)
in the list of Cloud Backup actions.
{{< /accordion >}}

{{< accordion title="Can I use Cloud Backup on my server?" col="in" href="accordion12" >}}

You can use Cloud Backup on Linux and Windows in the Rackspace Cloud. Some exceptions are
FreeBSD&reg; 9, Debian&reg; 5, and Windows&reg; 2003.

You can also use Cloud Backup on Linux and Windows servers external to Rackspace Cloud,
including most servers connected to the public internet, such as personal laptops,
servers located on your company's premeses, and servers hosted by other cloud providers.

**Note**: If you have servers that are not in the Rackspace Cloud but run operating
systems supported by Rackspace, see the following installer links for more details.

Before you can use Cloud Backup, you must have the backup agent installed and
running on your cloud server. Cloud servers with a Managed Operations service
level should have this additional piece of software installed by default. If it
is not installed, contact your Account Representative to get started. If you
have an infrastructure-only account, you must manually install the agent by
following these instructions for [Linux&reg;](/support/how-to/update-or-install-the-cloud-backup-agent-on-linux/)
or [Windows](/support/how-to/rackspace-cloud-backup-install-the-agent-on-windows-by-using-silent-installation/).

For more information, see the [Rackspace Cloud Backup introduction](/support/how-to/cloud-backup).
{{< /accordion >}}

{{< accordion title="How long are my Cloud Backups kept?" col="in" href="accordion13" >}}

You choose how long your backups are saved: 30 days, 60 days, or
indefinitely.

See the section on [Retaining your Backup](/support/how-to/rackspace-cloud-backup-backup-actions) in the list of Cloud Backup actions.
{{< /accordion >}}

{{< accordion title="How do I configure my cloud backups?" col="in" href="accordion14" >}}

You set up your backups in the Rackspace [Cloud Control Panel](https://login.rackspace.com).

In the top navigation bar, click **Select a Product > Rackspace Cloud**, then
select **Backups**.

If you need to create a new backup, click the **System** that you want to
back up, and then click **Create Backup**. If you already have a backup and
want to reconfigure it, click the gear icon next to the backup name and
select **Configure Backup**. See [Configuring a Backup through Backup Actions](/support/how-to/rackspace-cloud-backup-backup-actions)
for more information.

You can set backups to run hourly, daily, weekly, or on-demand
(manually).

Read more about [Scheduling your Backup](/support/how-to/rackspace-cloud-backup-backup-actions) in the list of Cloud Backup actions.
{{< /accordion >}}

{{< accordion title="Are 32-bit servers and agents on Linux supported?" col="in" href="accordion15" >}}

No, 32-bit servers and agents on Linux are not supported.
{{< /accordion >}}

{{< accordion title="Why does my backup fail with a 403 error from Cloud Files when the account has sub-users?" col="in" href="accordion16" >}}

**Issue**

I am registered as a sub-user and am authorized for Cloud Backup and not
for Cloud Files access. When I attempt to do a backup, all requests to
Cloud Files return a 403 error. In this case, I attempt to authenticate
again, but the new authentication token is the same as the old one.

**Solution**

Account administrators can manage permission levels in the **User Management**
section of the [Cloud Control Panel](https://login.rackspace.com).
Submit a request to your account administrator for **Full** access to your
account or **Administrative** access to Cloud Files for your sub-user account.
{{< /accordion >}}

{{< accordion title="What does Cloud Backup cost?" col="in" href="accordion17" >}}

With advanced deduplication and compression capabilities built-in,
Cloud Backup can save you money by using less storage.
Standard rates for Cloud Files storage fees apply. For current storage
fees, see the [Cloud Files storage fees](https://www.rackspace.com/cloud/cloud_hosting_products/files/pricing/).
{{< /accordion >}}

{{< accordion title="Why are the files that are being modified during backup missing or corrupted?" col="in" href="accordion18" >}}

The following three types of files change as Cloud Backup backs them up:

1.  Files that are overwritten or deleted as we back them up.
2.  Files such as logs that get appended to as we back them up.
3.  Files such as databases that might have random updates to any part of
    them as we back them up.

If the backup modifies these files, the process might handle them in the following
ways:

1.  **Overwritten or deleted**: These files are not guaranteed to be included in
    the backup.
2.  **Appended**: We make a best effort to back these up, and we expect
    to restore a reasonable and usable form of these files.
3.  **Randomly updated**: We do not guarantee that these files
    are restorable, and even if we can restore them, we do not
    guarantee that the restored content is not corrupt.

These file types either change too rapidly (databases, logs, caches) or
don't exist long enough to be backed up (session files). You should avoid
session files entirely. If the information is valuable to your
business, log files should track it. You should also avoid caches because
their data is meant to be discarded.

If you do need to back up these files, we suggest the following workarounds:

-   **For databases**: Take a snapshot of the database (a
    database dump) and back up the dump. See [Rackspace Cloud Backup - Backing up Databases](/support/how-to/rackspace-cloud-backup-backing-up-databases)
    for full instructions.
-   **For log files**: Take snapshots of your log files and back them up. To
    avoid running out of disk space, rotate your log files periodically.
{{< /accordion >}}

{{< accordion title="Does the backup agent accept incoming connections?" col="in" href="accordion19" >}}

No. The agent only makes outgoing Secure Sockets Layer (SSL) connections to
our API server on port 443.
{{< /accordion >}}

{{< accordion title="Can Cloud Backup restore files across data centers?" col="in" href="accordion20" >}}

This functionality is not officially supported, but it is physically possible
to do it. See [cross-DC restore hacks](/support/how-to/performing-cross-dc-restores-and-backups/)
for more information.
{{< /accordion >}}


{{< accordion title="Where are my backup-related files?" col="in" href="accordion22" >}}

For Linux, find them here:

-   **Configuration files**: **/etc/driveclient**
-   **Logs**: **/var/log** (This value might be different on your server,
    depending on your settings in the **log4cxx.xml** file.)
-   **Startup script**: **/etc/init.d** or **/etc/systemd/system**
-   **Application**: **/usr/local/bin**
-   **Process Identification (PID) file for running the agent**:
    **/var/run/driveclient.pid**
-   **Database**: Search for a **\*.db** file under **/var/cache/driveclient**.

For Windows, typically find them here:

-   **Configuration files**: **%ProgramData%\\Driveclient**
-   **Logs**: **%ProgramData%\\Driveclient\\logs** (This value might be different
    on your server, depending on your settings in the **log4cxx.xml** file
    under **Configuration files**.)
-   **Application**: **%ProgramFiles%\\Driveclient**
-   **Database**: Search for a **\*.db** file under **%ProgramData%\\Driveclient**.
