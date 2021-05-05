---
permalink: create-a-maintenance-backup-plan-in-sql-server-2008-r2-using-the-wizard
audit_date: '2020-10-14'
title: Create a maintenance backup plan in SQL Server 2008 R2 using the wizard
type: article
created_date: '2014-04-04'
created_by: Kyle Laffoon
last_modified_date: '2020-10-14'
last_modified_by: Rose Morales
product: Cloud Backup
product_url: cloud-backup
---

When you create a maintenance backup plan in SQL Server&reg; 2008 R2, you must
identify how you want the plan to be set up. This example sets up the maintenance
plan with full backups, differentials, and transaction logs.

### Check SQL Server Agent service

Verify that the SQL Server Agent service is running and set to automatic. The
maintenance plan depends on this service to run.

1. On the server, open the **Run** dialog box, type in **services.msc**, and
    press **Enter**.
2. Find the SQL Server Agent service in the list and double-click it.
3. Click the **Recovery** tab and set the failure value to **Restart the
    Service**.
4. Click the **General** tab, select **Automatic** as the startup type, and
    then start the service by clicking on **Start**.

    {{<image src="CheckSQLServerAgent3.png" alt="" title="">}}

### Create the maintenance plan

1. Launch the SQL Server Management Studio and log in.

2. In the **Object Explorer** pane, expand the **Management** folder,
   right-click on **Maintenance Plans**, and select **Maintenance Plan Wizard**.

    {{<image src="CreatingtheMaintenancePlan1_0.png" alt="" title="">}}
3. On the welcome page of the wizard, click **Next**.
4. On the **Select Plan Properties** page, specify a name for the plan, select
    **Separate schedules for each task**, and then click **Next**.

5. On the **Select Maintenance Tasks** page, select the **Back Up Database
    (Full)**, **Back Up Database (Differential)**, and **Back Up Database
    (Transaction Log)** checkboxes, and then click **Next**.

    {{<image src="Creatingthemaintenanceplan4.png" alt="" title="">}}

6. On the **Select Maintenance Task Order** page, leave the order as shown, and
    then click **Next**.

### Define full backup settings

On the **Define Back Up Database (Full) Task** page, set up the full backup
according to the following instructions.

1. Select the databases that you want to back up (typically **All user
    databases**).

2. Specify when you want the backups to expire. The following example
    specifies 14 days.

    **Note**: This setting overwrites the oldest backup file for rotation.

3. Select your backup media (typically **Disk**).

4. Specify a location (either Default or as assigned by you) for your backup
    files.

5. Select the **Verify backup integrity** check box.

6. To configure the scheduling options for this task, click **Change** near the
    bottom of the page.

    {{<image src="fullbackupsetttings1.png" alt="" title="">}}

7. In the **Job Schedule Properties** dialog box, select **Recurring** for the
    Schedule type.

8. Specify the frequency of the backup. The following example shows full backups
    running on Monday, Wednesday, and Friday. Alter this to fit your backup
    plan.

9. Adjust the daily frequency according to when your backup needs to run.

10. Under **Duration**, adjust the **Start** and **End** dates. The example
    selects **No end date**.

    {{<image src="fullbackupsetttings2.png" alt="" title="">}}

11. Click **OK**.

12. On the **Define Back Up Database (Full) Task** page of the Maintenance Plan
    Wizard, click **Next**.

### Define differential Backup Settings

On the **Define Back Up Database (Differential) Task** page, set up the
differential backup according to the following instructions. The settings are
similar to the settings for the full backup.

1. Select the databases that you want to back up (typically **All user
    databases**).

2. Specify when you want the backups to expire.

3. Select your backup media (typically **Disk**).

4. Specify a location (either Default or as assigned by you) for your backup
    files.

5. Select the **Verify backup integrity** check box.

6. To configure the scheduling options for this task, click **Change** near the
    bottom of the page.

7. In the Job Schedule Properties dialog box, select **Recurring** for the
    schedule type.

8. Specify the frequency of the backup. For example, you could choose to run
    differential backups on Tuesday, Thursday, Saturday, and Sunday.

9. Under **Duration**, adjust the daily frequency according to when your backup
    needs to run.

10. Adjust the **Start** and **End** dates.

11. Click **OK**.

12. On the **Define Back Up Database (Differential) Task** page of the
    Maintenance Plan Wizard, click **Next**.

### Define transaction log backup settings

On the **Define Back Up Database (Transaction Log) Task** page, set up the
transaction log backup according to the following instructions.

1. Select the databases that you want to back up (typically **All user
    databases**).

2. Do *not* select the **Backup set will expire** check box.

    The following **Set up the transaction log cleanup task** section configures
    the expiration of transaction log backups.
    
3. Select your backup media (typically **Disk**).

4. Specify a location (either Default or as assigned by you) for your backup
    files.

5. Copy the path for the backup file and paste it to Notepad. You will need to
    refer to this path in later steps.

6. Select the **Verify backup integrity** check box.

7. To configure the scheduling options for this task, click **Change** near the
    bottom of the page.

    **Note**: You need to determine transaction log backup intervals based on
    transaction log growth. It might be necessary to run the transaction log
    backups at shorter intervals to prevent transaction logs from growing.

8. In the Job Schedule Properties dialog box, select **Recurring** for the
    Schedule type.

9. Specify the frequency of the backup. In the following example, the
    transaction log backups are running daily.

10. Adjust the daily frequency. The following example sets it to run
    every hour.

11. Under **Duration**, adjust the **Start date** and **End date** fields.

    {{<image src="TransactionLogBackupSettings2.png" alt="" title="">}}

12. Click **OK**.

13. On the **Define Back Up Database (Transaction Log) Task** page of the
    Maintenance Plan Wizard, click **Next**.

14. On the **Select Report Options** page, specify how you want to save the
    details of the maintenance plan, and then click **Next**.

15. On the **Complete the Wizard** page, click **Finish**.

16. On the **Maintenance Plan Wizard Progress** page, click **Close**.

17. When you return to the SQL Server Management Studio main window, press
    **F5** to refresh the maintenance plan with the new settings.

    The **Maintenance Plans** section of the Object Explorer pane lists
    the new maintennce plan.

### Set up the transaction Log Cleanup Task

This section demonstrates how to set up a maintenance cleanup task, such as a task
to clean up the transaction logs after three days. This setting keeps the
one-hour transaction logs for three days until the maintenance cleanup task
deletes the old data. The transaction log cleanup must include a series of three
days, which ensures that if you need to revert to the second differential
backup, you can apply the transaction logs from that time period. The goal is to
have enough transaction log backups between the full and differential backups.

1. Click the maintenance plan name.

2. In the **Design** pane, select **Subplan_3**.

3. In the **Toolbox** pane, select **Maintenance Cleanup Task** and drag it into the
    transaction log backup area under the Design pane.

4. Right-click on the **Maintenance Cleanup Task** and choose **Edit**.

5. In the **Maintenance Cleanup Task** dialog box, select **Backup files**.

6. Select **Search folder and delete files based on an extension**.

7. In the **Folder** text box, enter the path you pasted into a notepad in
    the previous task. Ensure that you include the same path to which your
    transaction logs are backing up.

8. Enter the file extension type, **trn**.  Do *not* precede the extension with
    a period.

9. Select the **Include the first-level sub-folders** check box.

10. Select the **Delete files based on the age of the file at task run time**
    check box, and set the file age to **3 Days**.

    {{<image src="TransactionLogCleanupTask3.png" alt="" title="">}}

11. Click **OK** to return to the Management Studio main window.

12. Drag the green arrow from the differential backup task to the maintenance
    cleanup task.

13. Double-click the connected green line.

    {{<image src="TransactionLogCleanupTask4.png" alt="" title="">}}

14. In the Precedence Constraint Editor, set **Value** to Completion.

    This setting allows the task to become conditional. Thus, if the
    differential backup did not run, then the transaction cleanup task is not
    run, or if the backup did run, the cleanup task runs.

    {{<image src="TransactionLogCleanupTask5.png" alt="" title="">}}

15. Click **OK** to return to the Management Studio main window. The line should
    now appear blue.

    {{<image src="TransactionLogCleanupTask6.png" alt="" title="">}}

16. Save your work by selecting **Save All** from the File menu. You have
    finished setting up your maintenance backup plan. You can adjust your backup
    plan to your needs, but you should first test it.

### Test your setup

After you finish setting up your maintenance plan, verify that it works. You can
wait a few days to see if the job completes, or you can force the job to run by
performing the following steps.

1. In the Object Explorer pane of SQL Server Management Studio, browse to **SQL
    Server Agent > Jobs**.

2. Right-click the maintenance plan and select **Start Job at Step**.

    This command runs the first section of the maintenance plan.

3. If the job completes without error, run the next step of the maintenance plan
    and test run the setup. Repeat this step for all sub plans that you created
    in the maintenance plan.

If all of your steps run without error, your maintenance plan works, and you are
finished.

### Troubleshoot errors by viewing the job history

If any of the jobs fail when testing the maintenance plan, view the job history
to see what failed.

1. In the Object Explorer pane, right-click the failed sub-plan and select
    **View History**.

    The Log File Viewer window, which shows the job history, is displayed.

    {{<image src="Errors2_0.png" alt="" title="">}}

    If the job failed, a red X icon is displayed next to the time that you ran
    the job.

2. Click the row for the failed job.

    Details about the error appear below the table. Scroll or expand the pane to
    see more information.

    {{<image src="Errors3.png" alt="" title="">}}

3. Troubleshoot the error and repeat the test job.

When your maintenance plan is reliable, check it in a few days to see if it is
running as expected. Verify that the **.bak** files are removed after the
expiration and that the transaction logs are cleaned up after three days.
