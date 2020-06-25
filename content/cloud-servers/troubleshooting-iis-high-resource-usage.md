---
permalink: troubleshooting-iis-high-resource-usage/
audit_date:
title: ‘Troubleshooting IIS high resource usage’
type: article
created_date: '2020-06-16’
created_by: Karoline Mills
last_modified_date: '2020-06-24’
last_modified_by: Karoline Mills
product: Cloud Servers
product_url: cloud-servers
---

### Troubleshooting IIS high resource usage

This article describes basic troubleshooting for high resource utilization caused by Internet Information Services (IIS).

#### Checking resource utilization and worker processes (w3wp)

You can use **Task Manager** to see which processes are consuming the most resources. To open it, right-click on the task bar, and select **Task Manager**. Navigate to the **Processes** tab and ensure that the checkmark next to **Show processes from all users** is set. Click on either **CPU** or **Memory** to sort the processes based on their resource usage. If high resource consumption is due to an issue with one of your sites, you should see the **w3wp.exe** (IIS worker process) towards the top of this list. To identify which site is causing the issue, make note of the PID that is shown next to w3wp.exe.
As a next step, open a command prompt as an administrator. To do this, click on the Windows button in the task bar and type in **cmd**. Right-click on the result and select **Run as administrator**. In the command prompt, type 

*cd %windir%\System32\inetsrv* 

and press Enter. Then type *appcmd list wp* and press Enter. You can now match the PID from earlier with the corresponding worker process to determine which site is causing the issue.
You can also check the running worker processes in IIS. Click on the Windows button in the task bar and type **IIS**. Select IIS from the results. Click on your server name and select the **Worker processes** icon. You will see a list of all worker processes and their resource utilization.

#### Analyzing current web requests

If there is a high number of web requests targeted at your site, it can cause resource exhaustion. To check the current web request, you have to install the web request monitor module in IIS. You will need administrator permission to do that. Open **Powershell** by clicking on the Windows button and typing *Powershell*. Click on the result, copy and paste the command 

*Install-WindowsFeature Web-Request-Monitor*

and press Enter. You will see a success message once it has been installed. You will need to close and re-open IIS to access the newly installed module. Under Worker processes, right-click on the worker process you are interested in and select **View current requests**. You will be presented with a list of all active web requests to your site. This will help you determine if a large number of requests are coming from the same client IP.

#### Other reasons to consider

If your website is dependent on other applications, for example a SQL database, you might need to investigate further to find the source of the issue. There could also be an issue with the .NET code of your site or application, which would need to be analyzed by your software developer.

#### Recycling the application pool

Often times, issues with a site can be fixed by recycling its application pool. To do so, navigate to the **Application Pools** tab in IIS, right-click on the corresponding application pool and select **Recycle**. Recycling the application pool should only result in minimal impact. No downtime is to be expected, however, session information will be lost. To further minimize the impact, you can set the app pool to recycle daily during a time of low traffic. To set this up, right-click on the application pool and select **Recycling…** . Set the checkmark next to **Specific time(s)** and select the preferred time for this task.
