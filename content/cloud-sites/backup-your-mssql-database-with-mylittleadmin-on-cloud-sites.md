---
node_id: 660
title: Backup your MSSQL database with myLittleAdmin on Cloud Sites
type: article
created_date: '2011-03-16'
created_by: Rackspace Support
last_modified_date: '2016-01-12'
last_modified_by: Stephanie Fillmon
product: Cloud Sites
product_url: cloud-sites
---

Follow the instructions below to backup your MSSQL database.

**Note:** The Rackspace Cloud recommends using Internet Explorer when
managing your MSSQL databases via myLittleAdmin.

**Note:** Our system will only allow one backup file to be stored at
one time. It may be necessary to go to "Manage Backup Files" and delete
any existing backup file before you can create a new one.



### Backing Up Your MSSQL Database

1.  To manage your MSSQL database, you'll first need to [login to the
    online
    manager (myLittleAdmin)](/how-to/rackspace-cloud-sites-essentials-mylittleadmin-database-management-interface "Working with a MSSQL database").
2.  After you are logged into the online manager, click on **Tools** in
    the bottom of the left frame.

3.  Then on the **Tools** menu, click **Database Backup and Restore.**

    This will open the myLittleBackup interface in a new window:

4.  From myLittleBackup, click on **Backup databases** from the left
    menu.

    The database backup form will load in the window's right frame.

5.  In step 1, choose the database you would like to backup from the
    drop-down menu (which should be the only one listed) and click OK to
    continue.

6.  Step 2 is just for information and verification; you will find
    generic information about your database in this step. Keep in mind
    that the backup process duration depends on the database size you
    see in this step. Since you only have one database you can just
    click OK:.
    -   **Note:** If you see the notification (*There are too many
        backup files in your backup folder*), it means you all ready
        have a backup file saved in myLittleBackup.

7.  Step 3 is **optional**, but feel free to choose a backup set name
    and description.

    If you don't want choose a backup set name and description or you're
    not sure what to use, just leave it blank or use the database name
    as both!

8.  If everything above looks correct, you're ready to click the
    **Backup** button in Step 4.

    During this time you will see a loading message on the screen.
    Please take heed of the warning myLittleBackup gives: **You're now
    ready to backup your database. The process can take several minutes.
    Be patient and do not click the stop button until done.**




### Finish Line

You have just created a backup of your MSSQL database. You should now see a link to download your database backup in Step 5.

If you experience a problem or you have further questions or concerns,
please do not hesitate to contact our technical support 24x7 via phone,
chat or by submitting a ticket through your control panel.

