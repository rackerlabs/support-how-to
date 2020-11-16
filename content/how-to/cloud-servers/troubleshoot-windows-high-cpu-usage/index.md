---
permalink: troubleshoot-windows-high-cpu-usage/
audit_date: '2020-10-23'
title: Troubleshoot high CPU usage on Windows Server
type: article
created_date: '2020-10-21'
created_by: Derek Benson
last_modified_date: '2020-10-23'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

*This article applies to the following Windows&reg; Server versions: 2012, 2012 R2, 2016, 2019*

### Overview

This article helps you determine which application is causing high CPU usage on your server.


### Determine top CPU consuming processes

Multiple methods allow a user to determine the top processes based on CPU utilization. The following sections outline each of
these methods.

#### Use Task Manager to view CPU consumption

1. To access **Task Manager**, right-click the taskbar and click **Task Manager**.

2. If you see a single list of tasks in the **Task Manager** window, click the **More Details** arrow to show the expanded view.

3. Click the **Processes** tab if it is not already selected by default.

4. Click the **CPU** header at the top of the table to sort by CPU usage. Ensure the arrow that appears on the header points
   down to sort the data from highest to lowest.

The processes consuming more resources display at the top of the list. If any of these processes are higher than expected based
on your environment, start looking at these top processes when determining the cause.


#### Use the Resource Monitor to view CPU consumption

1. Press **WIN** + **R** on the keyboard to open the **Run** dialogue. Type `resmon` in the text box and press **Enter** to open
   the **Resource Monitor**.

2. Click the **CPU** tab. 

   **Note:** You might need to maximize the window to see all the data.

3. Click the **Average CPU** column header to sort by overall CPU usage. Ensure the arrow that appears on the header points
   down so the data is sorted from highest to lowest.

The processes consuming more resources display at the top of the list. If any of these processes are higher than expected based
on your environment, start looking at these top processes when determining the cause.


### Resolve high CPU usage

You can determine the best path to resolve or prevent high CPU usage, depending on the process causing the high CPU usage.
Following are a few examples and some general recommendations to help you resolve high CPU usage:

#### The top consuming process is w3wp (IIS Worker Process)

High CPU usage with the *IIS worker process* typically occurs when higher than normal traffic comes to your website. If you expect
an increase in traffic and you notice performance degradation, alleviate the server load by increasing the resources on the server.
If you don't expect this increase, check the IIS connection logs to get more information about the source of the excess traffic to
determine if you want to block these connections.

#### The top consuming process is MSSQL&reg;SERVER (The SQL server process for a database instance)

High CPU usage with MSSQL Server can occur if a Job or a large user query is currently running. Check the MSSQL Agent logs to
determine if this is the case.

#### The top consuming process is a native Windows process

Native Windows processes don't normally cause High CPU usage, but it can occur. If you notice this, a restart (reboot) of the server
during non-impacting or low-impacting hours might resolve the issue. When you don't reboot servers on a regular schedule, you might
experience this problem. Schedule regular reboots to start the server anew and release unused resources that might get stuck after
process allocation.

#### The top consuming process is something else

If the offending process is something else, such as a third-party application, check support information for that product to identify
logs that might help you identify the cause. Often, restarting the application can correct high resource usage.

### General Recommendations when you don't identify a single top consuming process

When a single top consuming process fails to stand out, perform a reboot. If you notice high resource usage for an extended period, even
after rebooting, the device might not have sufficient resources for its purpose. In this case, options include migrating high usage
applications such as SQL&reg; or IIS&reg; to other servers or resizing the server to add additional resources.

