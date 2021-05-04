---
permalink: create-scheduled-tasks-on-a-windows-server
audit_date: '2020-06-30'
title: 'Create scheduled tasks on a Windows server'
type: article
created_date: '2020-04-28'
created_by: Derek Benson
last_modified_date: '2020-04-29'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to create scheduled tasks on a Microsoft&reg; Windows&reg; server.

### Access the Task Scheduler

Perform the following steps to access the Task Scheduler:

1. Open the Windows **Run** command by pressing the **Windows key** and **r** together.

2. In the **Run** window, enter **taskschd.msc** and press **Enter**.

### Create a scheduled task

Perform the following steps to create a scheduled task:

1. *Optional* If a folder for custom tasks does not exist already, create one to separate automatically
   created tasks from custom tasks. Right-click **Task Scheduler Library** in the left-hand pane, click
   **New Folder**, enter a name such as **My Custom Tasks**, and click **OK**.

2. To select the folder in which to store the task, such as the previously created
   **My Custom Tasks** folder, click the folder.

3. To create a new task, right-click the chosen folder and click **Create Basic Task** to launch the
   **Create Basic Task Wizard**.

   **Note:** For more advanced options, choose **Create Task**, which provides additional tools beyond
   the common options.

4. On the first screen, enter a **Name** and **Description** and then click **Next**.

5. On the **Trigger** screen, choose when you want the task to run. You can trigger tasks on a
   schedule or by a computer event, such as when Windows starts or when a user logs on. Click **Next**.

6. Depending on the trigger you choose, the next screen might ask you for more trigger configuration details,
   such as recurrence frequency or request details about the event that triggers the task. Click **Next**.

7. Choose an action to perform after the trigger event occurs. You can set an action to launch a program
   or script, send an email notification, or display a message to users. Click **Next**.

8. Configure the specifics of the action such as the email address or the application you want to launch
   and click **Next**.

9. Review the details of the task and click **Finish** to finalize task creation.
