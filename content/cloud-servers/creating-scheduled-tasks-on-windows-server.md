---
permalink: creating-scheduled-tasks-on-windows-server/
audit_date:
title: 'Creating Scheduled Tasks on Windows Server'
type: article
created_date: '2020-04-28'
created_by: Derek Benson
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

## Accessing Task Scheduler

1. Open the Windows **Run** command by pressing the **Windows key** and **r** together.

2. In the **Run** window that appears, enter **taskschd.msc** and press enter.

## Creating a Scheduled Task

1. Start by creating a folder for custom tasks if one does not exist already. This helps separate automatically created tasks from custom tasks.
    * To do this, right-click **Task Scheduler Library** in the left and pane and then click **New Folder**
    * Enter a name such as *My Custom Tasks* and click **OK**.
    
2. To create a new task, click the folder you would like to store the task in, such as the previously created *My Custom Tasks* folder to select it. Once selected, right-click the folder and click **Create Basic Task** to launch the **Create Basic Task Wizard**.

**Note:** For more advanced options, choose **Create Task**. This will provide additional tools beyond the common options if needed.

3. On the first screen, enter a **Name** and **Description** and then click **Next**.

4. On the **Trigger** screen, choose when you would like the task to run. This can be triggered on a schedule, or by a computer event such as when Windows starts or when a user logs on. Once chosen, click **Next**.

5. Depending on the trigger chosen in **Step 4**, the next screen will ask you to configure the trigger further such as recurrence frequency, or details about an event that will trigger the task. Once configured, click **Next**.

6. Choose an action to perform once the trigger event occurs. This can be set to launch a program or script, send an email notification, or display a message to users. Once an action is chosen, click **Next**.

7. Configure the specifics of the action such as email address or the application you want to launch and click **Next**.

8. Review the details of the task and click **Finish ** to finalize creation.
