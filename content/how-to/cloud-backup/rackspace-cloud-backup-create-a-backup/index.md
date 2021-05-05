---
permalink: rackspace-cloud-backup-create-a-backup
audit_date: '2018-07-12'
title: Create a backup
type: article
created_date: '2012-08-22'
created_by: David Hendler
last_modified_date: '2020-01-15'
last_modified_by: Brett Johnson
product: Cloud Backup
product_url: cloud-backup
---

The following steps show how to use the Cloud Backup service to create a
backup of the data on your cloud server.

**Warning:** Cloud Backup does not follow symlinks. If you want to back up files or folders, do not use a symlink.

**Previous sections**:

-   [Install the Cloud Backup agent on Linux&reg;](/support/how-to/rackspace-cloud-backup-install-the-agent-on-linux)
-   [Install the Cloud Backup agent on Windows&reg;](/support/how-to/rackspace-cloud-backup-install-the-agent-on-windows)

**Note:** You can use the Cloud Backup tool to back up your data files
but cannot use it to back up a full operating system. To restore your data, you
need to restore only your files; you do not need to restore all of the
operating system files. To back up the operating system, create an image
of your server. For more information about restoring a server from an
image, see [Create an image of a server and restore a server from a saved image](/support/how-to/create-an-image-of-a-server-and-restore-a-server-from-a-saved-image).

### Create a server backup

1.  Log in to the [Cloud Control Panel](https://login.rackspace.com/).

2.  In the top navigation bar, click **Select a Product > Rackspace Cloud**.

3.  Select **Backups > Systems**.

4.  On the **Cloud Backup Systems** page, click the name of the server for
    which you want to create a backup.

    **Note:** If you do not see your server listed on this page, you
    must install the backup agent on the server. If you have an account
    with the Managed Operations service level, check with your account
    manager to install the agent. If your account has a different
    service level, follow the instructions in [How to Install the
    Agent](/support/how-to/rackspace-cloud-backup-install-the-agent-on-linux).

5.  On the **Configure Backup** page, perform the following steps:

    -   Enter a name for the backup.

    -   In the **Schedule** section, specify a schedule for the backup
        and select how many prior backup versions to retain.

    -   In the **Notifications** section, specify the email address for
        notifications and select whether you want to receive
        notifications for successful backups.

    -   Click **Next Step**.

6.  On the **Select Items to Backup** page, select the files and folder to
    back up, and then click **Next Step**.

7.  Confirm that the backup agent is set up correctly, and then click
    **Save**.


**Next steps**: [View backup information with Cloud Backup](/support/how-to/rackspace-cloud-backup-view-backup-information)
