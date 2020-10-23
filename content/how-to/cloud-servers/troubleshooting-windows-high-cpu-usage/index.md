---
permalink: troubleshooting-windows-high-cpu-usage/
audit_date: '2020-10-23'
title: Troubleshooting High CPU Usage on Windows Server
type: article
created_date: '2020-10-21'
created_by: Derek Benson
last_modified_date: '2020-10-23'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

*This article applies to the following Windows&reg; Server versions: 2012, 2012 R2, 2016, 2019*

## Overview

This article will help you determine what application is causing high CPU usage, if you identify high CPU usage on your server.


## Determine top CPU consuming processes

Multiple methods allow a user to determine the top processes based on CPU utilization. The following sections outline each of these methods.


### Use Task Manager to view CPU consumption

1. To access **Task Manager**, right click the taskbar and click **Task Manager**.

2. If you see a single list of tasks in the **Task Manager** window, click the **More Details** arrow to show the expanded view.

3. Click the **Processes** tab if it is not already selected by default.

4. Click the **CPU** header at the top of the table to sort by CPU usage. Make sure the arrow that appears on the header is pointing down to sort the data from highest to lowest.

The top processes will list at the top. If any of these processes are higher than expected based on your environment, this identifies where to start looking when determning the cause.


### Using Resource Monitor to view CPU consumption

1. Press **WIN** + **R** on the keyboard to open the run dialogue on the **resource monitor**. Type `resmon` in the runbox and press **enter** to open **resource monitor**.

2. Click the **CPU** tab. 

**Note:** You might need to maximize the window to fully see the data.

3. Click the **Average CPU** column header to sort by overall CPU usage. Make sure the arrow that appears on the header is pointing down so the data is sorted from highest to lowest.

The top processes list at the top. If any of these processes are higher than expected based on your environment, this identifies where to start looking to determine the cause.


## Resolve high CPU usage

You can determine the best path to resolve or prevent high CPU usage depending on the process causing the High CPU usage. We have provided a few examples and some general recommendations to help you resolve high CPU usage:

### The top consuming process is w3wp (IIS Worker Process)

High CPU usage with the _IIS worker process_ typically occurs when higher than normal traffic is arriving to your website. If you exepct this increase in traffic and you notice performance degradation, alleviate the load on the server by increasing the resources on the server. If you don't expect this increase, check the IIS connection logs to obtain more information on the source of the excess traffic to determine if you want to block these connections.


### The top consuming process is MSSQL&reg;SERVER (The SQL server process for a database instance)

High CPU usage with MSSQL Server can occur if a _Job_ or a large user query is currently running. Check the MSSQL Agent logs to determine if this is the case.


### The top consuming process is a native Windows process

Native Windows processes don't normally cause High CPU usage but it can occur. If you notice this, a restart (reboot) of the server during non-impacting or low-impacting hours might resolve the issue. When you don't reboot servers on a regular schedule, you might experience this problem. Schedule regular reboots to start the server fresh and release unused resources that might get stuck after process allocation.


### The top consuming process is something else

If the offending process is something else, such as a third-party application, check support information for that product to identify logs that might help you identify the cause. Often, restarting the application can correct high resource usage.


### General Recommendations when you don't identify a single top consuming process

When a single top consuming process fails to stand out, perform a reboot. If you notice high resource usage for an extended period, even after rebooting, the device might not count with sufficient resources for its purpose. Options in this case would be to migrate high usage applications such as SQL&reg; or IIS&reg; to their servers, or resizing the server to add additional resources.

## Final Notes

If the preceding recommendations don't correct the issue or if you would like additional advice/guidance, feel free to reach out to a member of your support team via telephone or ticket.
