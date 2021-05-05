---
permalink: troubleshoot-iis-high-resource-usage
audit_date: '2020-06-26'
title: 'Troubleshoot IIS high resource usage'
type: article
created_date: '2020-06-16'
created_by: Karoline Mills
last_modified_date: '2020-06-26'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article demonstrates basic troubleshooting of high resource usage caused by Microsoft&reg; Windows&reg;
Internet Information Services (IIS).

### Check resource usage and worker processes (w3wp)

Perform the following steps to use the **Task Manager** to see which processes are consuming the most resources:

1. Right-click on the taskbar, and select **Task Manager**. 

2. Navigate to the **Processes** tab and select the checkmark next to **Show processes from all users**. 

3. Click on either **CPU** or **Memory** to sort the processes based on their resource usage. 

   If one of your sites caused high resource consumption, you should see the **w3wp.exe** (IIS worker process) towards the
   top of this list. To identify which site is causing the issue, make a note of the PID that displays next to **w3wp.exe**.

4. Open a command prompt as an administrator by clicking on the **Windows** button in the taskbar and entering **cmd**. 

5. Right-click on the result and select **Run as administrator**. 

6. At the command prompt, type **cd %windir%\System32\inetsrv** and press **Enter**:

7. Type **appcmd list wp** and press **Enter**. 

   You can now match the PID that you identified previously with the corresponding worker process to determine which site is causing
   the issue.

8. To check the running worker processes in IIS, click the **Windows** button in the taskbar and type **IIS**. 

9. Select **IIS** from the results, click on your server name, and select the **Worker processes** icon. A list of all worker
   processes and their resource usage displays.

### Analyze the current web requests

A high number of web requests targeted at your site can cause resource exhaustion. To check the current web requests, you have to
install the `Web Request Monitor` module in IIS. You need administrator permission to install the utility. 

Perform the following steps to install `Web Request Monitor`:

1. Open **PowerShell&reg;** by clicking on the **Windows** button and typing **PowerShell**. 

2. Click on the result, copy and paste the command **Install-WindowsFeature Web-Request-Monitor**, and press Enter. This
   command displays a success message after the installation completes.
   
3. Close and re-open IIS to access the newly installed module.

4. Under **Worker processes**, right-click on the worker process you are interested in, and select **View current requests**. 

5. Review the list of all active web requests to your site. This review should help you determine if a large number of requests
   come from the same client IP address.

### Other causes of high resource usage to consider

If your website is dependent on other applications, such as an SQL database, you might need to investigate further to find
the source of the issue. There could also be an issue with the .NET code for your site or application, which your software
developer would need to analyze.

### Recycle the application pool

Often, you can fix issues with a site by recycling its application pool. Perform the following steps recycle the pool:

1. Navigate to the **Application Pools** tab in IIS.

2. Right-click on the corresponding application pool and select **Recycle**. 

Recycling the application pool have only minimal impact with no downtime, but you will lose session information.
To further minimize the effect, you can set the application pool to recycle daily during low traffic times. 

To set up application pool recycling, perform the following steps:

1. Right-click on the application pool and select **Recycling…**. 

2. Select the checkmark next to **Specific time(s)** and select the preferred time for this task.
