---
permalink: rackspace-cloud-backup-view-backup-information/
audit_date: '2020-10-14'
title: View backup information with Cloud Backup
type: article
created_date: '2012-08-22'
created_by: David Hendler
last_modified_date: '2020-10-14'
last_modified_by: Rose Morales
product: Cloud Backup
product_url: cloud-backup
---

**Previous section:** [Create a backup](/support/how-to/rackspace-cloud-backup-create-a-backup).

This article describes how to confirm your backup settings, ensure that a cleanup or restore action finished
successfully, manually start a job before you schedule it, and quickly view all of your backup activity at once.

### View information for a single backup

Use the following steps to view information for a single backup:

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).
2. In the top navigation bar, click **Select a Product** > **Rackspace Cloud**.
3. Select **Backups** > **Backups**.

A list of all of the backup processes that you currently have on your account
displays, as shown in the following image:

{{<image src="1842-2039-IMG-1.png" alt="" title="">}}

The list of backups has three columns: **Name**, **System**, and **Last Run**. You can sort by each clicking on its title.

If you have a long list of backups, you can search for the one that you want in the **Search** box.

To view the settings for a particular backup, click its name in the list of backups. The **Backup details** page displays.

{{<image src="1842-2039-IMG-2.png" alt="" title="">}}

- The **Configuration Details** section displays the configuration details for the backup.

- The **Activity** list displays all the actions that a backup has performed (such as Backup, Cleanup, and Restore)
  listed historically. The most recent actions are at the top of the list.

  If the list of activities is long, you can limit the list by performing a search. Enter your search term in the
  **Search** box. You can search with the following terms:

  - Backup
  - Restore
  - Cleanup (Fail, Complete, Skipped)

View the details of a backup's activity by clicking **View Details** in its entry.

You can also view the server details by clicking the name of the server, or you can redisplay the backup **Details**
page by clicking the backup's name in the activity entry.

**Note:** If you do not want to wait for the next scheduled backup, you can trigger a manual backup by clicking
the **Perform Backup** button in the **Activity** section.

### View information for all backups

You can view the backup activity for all of your systems by selecting the **Backups** > **Activity** from the top
navigation bar of the **Cloud Control Panel**. The **Activity** list displays all the actions the backups have
performed (such as Backup, Cleanup, and Restore) listed historically. The most recent actions are at the  top.

{{<image src="1842-2039-IMG-3.png" alt="" title="">}}

If the list of activities is long, you can limit your list by performing a search. Enter your search term in the
Search box. You can search by using the following terms:

- Backup
- Restore
- Cleanup
- [Backup Name]
- [System Name]
- Fail, Complete, Skipped

You can view the details of a backup's activity by clicking **View Details** in its entry.

You can also view the server details by clicking the server's name, or you can display the **Details** page for
the backup by clicking the backup's name in the activity entry.

**Next steps:** [Cloud Backup actions](/support/how-to/rackspace-cloud-backup-backup-actions)
