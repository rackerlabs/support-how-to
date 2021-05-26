---
permalink: disable-third-party-applications-with-a-clean-boot-in-windows/
audit_date: '2021-05-24'
title: 'Disable third-party applications with a clean boot in Windows'
type: article
created_date: '2021-04-09'
created_by: Pablo Moreno
last_modified_date: '2021-04-26'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to perform a clean boot in Windows&reg; to troubleshoot
issues within the booting process.

Sometimes, installing an application or service might inadvertently create conflicts
and interfere with other applications. This could lead to system crashes, error
messages at startup, or poor CPU performance.

Using *safe mode* to restart can help. However, you can't control which drivers and
services safe mode starts, so it might not be useful for testing system behavior.

Instead, use a clean boot, which disables the programs and services that run when
the computer starts. That way, you can see if there is something wrong with Windows
or if those programs or services are causing the problems.

**Note:** Before starting, you should create a restore point in Windows or create
a backup. Then, you can return to the previous configuration if something fails.

### Perform a clean boot

To perform a clean boot, you must sign in to the computer as an administrator. Note
the server might temporarily lose some functionality during this process, but it
recovers when you boot it in standard mode.

1. Click **Win+R** to open the **Run** window, type `msconfig` in the box, and
   click **Enter**.

2. On the **Services** tab in **System Configuration**, select
   **Hide all Microsoft services** and then select **Disable all**.

   **Note**: Document the services currently configured to run at startup
   so you can enable them again after troubleshooting.

3. Click **OK**. When prompted to restart the computer, click
   **Exit Without Restart** on the pop-up warning window.

4. Click **Ctrl+Shift+Esc** to open the **Task Manager** and then select
   the **Startup** tab.

5. You have to disable startup applications individually because you can't
   disable them simultaneously. Select each enabled app on the tab and click
   **Disable**.

   **Note**: Keep track of the startup applications you disable so you
   can enable them after troubleshooting.

6. When you have disabled the applications, restart your computer. It should
   boot without any of those services or startup programs running.

### Determine the cause of the problem after the clean boot

Is the problem still happening after the clean boot? If the problem has disappeared,
then one of the deactivated applications or services is the culprit. Although the
process is simple, it might take longer to identify which application or service
is causing the problem.

To do this, perform the following steps:

1. Go to the **Services tab** of the **System Configuration** window. 

2. Activate and deactivate services and applications until you detect the problem.
   You can start by activating or deactivating half of the list of services and
   gradually eliminating the elements until you identify the cause of the problem.
   
3. Keep activating or deactivating services until you find the issue.

After you find which startup item or service caused the problem, you need to check
for an update that might fix the problem or contact the program manufacturer to
determine whether the problem has a resolution.

In the meantime, uninstall the program or run Windows with the problem item disabled.
To do this, run the **System Configuration** utility and enable the other services and
startup services and applications.  Be sure to clear the check box for the problem item.

### Reset the computer to start normally after clean boot troubleshooting

After you finish troubleshooting, follow these steps to reset the computer to start normally. 

1. Click **Win+R** to open the **Run** window. Type `msconfig` in the box and click **Enter**.
2. On the **General** tab, select **Normal Startup**.
3. Click **Services**, clear the check box beside **Hide all Microsoft services**, and
   then click **Enable all**.
4. Click **Startup** and **Open Task Manager**.
5. In the **Task Manager**, enable all of your startup programs and click **OK**.
6. When prompted to restart the computer, click **Restart**.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 
