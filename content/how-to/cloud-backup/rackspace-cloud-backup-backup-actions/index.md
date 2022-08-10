---
permalink: rackspace-cloud-backup-backup-actions
audit_date: '2017-07-05'
title: Cloud Backup backup actions
type: article
created_date: '2012-08-22'
created_by: David Hendler
last_modified_date: '2022-08-09'
last_modified_by: Rahul Gupta
product: Cloud Backup
product_url: cloud-backup
---


**Previous section**: [View backup information with Cloud Backup](/support/how-to/rackspace-cloud-backup-view-backup-information)

This article describes the actions that you can perform during a single backup.

You can access the **Backup Actions** menu in the following ways:

-   Log in to the [Cloud Control Panel](https://login.rackspace.com), click the
    **Select a Product** drop-down menu in the top navigation bar,
    then select **Rackspace Cloud**. Next, select **Backups** and then click
    on the gear icon next to the backup name on the **Configured Backups**
    page.

    {{<image src="ScreenShot2022-08-09at4.20.11PM.png" alt="" title="">}}

-   Click on the **Actions** menu at the top of the **Configuration Details**
    page for a configured backup.

    {{<image src="ScreenShot2022-08-09at4.18.36PM.png" alt="" title="">}}

From the **Actions** menu, you can perform the following actions:

-   Perform a backup
-   Restore a snapshot
-   Configure a backup
-   Configure files
-   Disable a backup
-   Delete a backup

### Perform a backup

When you select **Perform Backup** from the **Actions** menu, you trigger a manual backup on your
system, based on the configurations that are currently set for that configured backup.
If you are looking at the **Configuration Details** page, the backup
progress bar is displayed until the backup is completed.

{{<image src="ScreenShot2015-10-15at4.29.20PM.png" alt="" title="">}}

### Restore a snapshot

1.  From the **Actions** menu, select **Restore snapshot**.

2.  On the first page of the **Restore a snapshot** wizard, select the
    backup date to restore from, and then click **Next Step**.

3.  On the next page, select the destination system, and then click
    **Next Step**.

    -   You can limit the list of systems by using the search box.
    -   You can restore your backup to the system that was backed up, or to
    another system.

4.  On the next page, select the folders and files to restore.

    1.  On the **Browse Files & Folders** tab, select the check boxes of the
    files and folders that you want to restore. You can move through your folders by clicking **Up** or an individual folder name at the top of the file or folder list.
    2. After you have selected your files, you can confirm your selection
    by clicking the **Selected & Excluded Items** tab. The files included in the restore and specifically excluded are listed.
    3. When you are done, click **Next Step**.

    {{<image src="ScreenShot2022-08-09at4.53.59PM.png" alt="" title="">}}

5.  On the next page, select the destination folder.

    You can choose to restore the files to their original folder or to restore to a selected restore destination. You can also select whether to overwrite files with the same name. Then, click **Next Step**.

6.  Confirm your restore settings and then click **Start Restore**.

    The **Activity** page is displayed when the restore is complete.

### Configure a backup

You can change the name, recurrence, and notifications for your backup job.

From the **Actions** menu, select **Configure Backup**.

{{<image src="ScreenShot2015-10-16at1.23.19PM.png" alt="" title="">}}

1.  Enter a new name for your backup job, and under **Schedule**, select
    how often you want to run the backup. All times are Central Time.

    You can schedule your backups to occur as often as you expect your files to change. Cloud Backup uses block-level deduplication, which means only those parts of a file that have changed are saved. In this way, a unique piece of data is saved only once, which maximizes the effectiveness of the backup, while minimizing your storage overhead. Another benefit of using this method is that you can retrieve previous versions of files, up to the limits specified by the customer-defined retention settings.

    To save additional overhead, Cloud Backup might compress the files if it reduces the size of the block. You can expect compression rates equivalent to those of gzip. You should not try to manually compress or encrypt your data before running backups; if you do, deduplication does not work, and  you will create larger backups than you need. If you want to encrypt your backups, see the "Encrypting your System" section in this article.

    For advanced Linux&reg; users, if you create tarballs with `gzip` that get backed up, use the ` --rsyncable` option, which enables Cloud Backup to use deduplication on those files as well.

2.  Select how long you want to keep your backups: 30 days, 60 days, or
    indefinitely.

3.  Under **Notifications**, enter the email address where you want to
    receive notifications of failed backups. You can also elect to have
    emails sent for successful backups.

4.  When you are satisfied with your settings, click **Next Step**.

5.  Select the folders and files for the backup, along
    with any files you want to exclude. Then click **Next Step**.

6.  Review your backup configuration settings. If the
    settings are correct, click **Save**. Otherwise, click **Back** to
    make changes.

### Configure files

You can change the files and folders that are saved in your backup.

1. From the **Actions** menu, select **Configure Files**.

2.  On the **Browse Files & Folders** tab, select the folders and
    files by clicking the folder name to view which files are inside.
    Select the check boxes of the files and folders that you want to
    back up.

3.  Confirm your selection by clicking the **Selected & Excluded
    Items** tab. The files included, as well as those specifically
    excluded, are listed.

4.  Click **Next Step**.

5. Confirm the settings on the next page and click **Save** to save
   your file configuration.

### Disable a backup

You can prevent a backup from running by selecting **Disable Backup**
from the **Actions** menu.

{{<image src="ScreenShot2022-08-09at2.36.44PM.png" alt="" title="">}}

When you disable a backup, the following actions occur:

-   The backup status changes to ``Disabled``.
-   The **Perform Backup** button is not available.

To re-enable your backup, from the **Actions** menu, select
**Enable Backup**. Your backup returns to ``Active`` status with all its
previous settings.

### Delete a backup

You can delete your backup by selecting **Delete Backup** from the
**Actions** menu.

Confirm that you want to delete the backup.

After a backup is deleted, it cannot be recovered.

**Next step**: [Cloud Backup system actions](/support/how-to/rackspace-cloud-backup-system-actions)
