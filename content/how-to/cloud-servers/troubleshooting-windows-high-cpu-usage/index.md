---
permalink: troubleshooting-windows-high-cpu-usage/
audit_date:
title: Troubleshooting High CPU Usage on Windows Server
type: article
created_date: '2020-10-21'
created_by: Derek Benson
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

*This article is applicable to the following Windows Server versions: 2012, 2012 R2, 2016, 2019*

## Overview

This article will provide guidance on determining what application is causing high CPU usage in the event that high CPU usage is identified on your server.


## Determining top CPU consuming processes

There are multiple methods that allow a user to determine the top processes based on CPU utilization. The following sections will outline each of these methods.


### Using Task Manager to view CPU consumption

1. To access **Task Manager**, right click the taskbar and click **Task Manager**.

2. If you see a single list of tasks in the **Task Manager** window, make sure to click the **More Details** arrow to show the expanded view.

3. Click the **Processes** tab if it is not already selected by default.

4. Click the **CPU** header at the top of the table to sort by CPU usage. Make sure the arrow that appears on the header is pointing down so the data is sorted from highest to lowest.

5. The top processes will be listed at the top. If any of these processes are higher than expected based on your environment, this will identify where to start looking when determning the cause.


### Using Resource Monitor to view CPU consumption

1. To open resource monitor, press **WIN** + **R** on the keyboard to open the run dialogue. In the run box, type **resmon** and press enter to open resource monitor.

2. Click the **CPU** tab. 

**Note:** You may need to maximize the window to fully see the data.

3. Click the **Average CPU** column header to sort by overall CPU usage. Make sure the arrow that appears on the header is pointing down so the data is sorted from highest to lowest.

4. The top processes will be listed at the top. If any of these processes are higher than expected based on your environment, this will identify where to start looking when determining the cause.


## Resolving high CPU usage

You can determine the best path to resolving or preventing high CPU usage based on the process causing the High CPU usage. A few examples are provided below to use as a guide and some general recommendations are included as well.


### The top consuming process is w3wp (IIS Worker Process)

High CPU usage with the IIS worker process typically occurs when higher than normal traffic is arriving to your website. If this is an expected increase in traffic and you are seeing performance degradation, increasing the resources on the server may help alleviate the load on the server. If this increase is not expected, checking the IIS connection logs may provide more information on the source of the excess traffic to determine if these connections should be blocked.


### The top consuming process is MSSQLSERVER (The SQL server process for a database instance)

High CPU usage with MSSQL Server can occur if there is a large user query being performed or a Job is currently running. Check the MSSQL Agent logs to determine if this is the case.


### The top consuming process is a native Windows process

High CPU usage caused by a native Windows process is not typical but it can occur on occassion. If you are seeing this, a reboot of the server during non-impacting or low-impacting hours may resolve the issue. This occurs most frequently on servers that are not rebooted on a regular schedule. Scheduling regular reboots is recommended to start the server fresh and release unused resources that may get stuck after being allocated to a process.


### The top consuming process is something else

If the offending process is something else, such as a third-party application, check support information for that product to determine if there are logs to help narrow down the cause. In many situations, restarting the application can correct high resource usage.


### There doesnt appear to be a single top consuming process/General Recommendations

If there isn't a clear top consuming process, a reboot is typically recommended when possible. If high resource usage is noted for an extended period of time, even after rebooting, there may be insufficient resources on the device for its designated purpose. Options in this case would be to migrate high usage applications such as SQL or IIS to their own servers, or resizing the server to add additional resources.

## Final Notes

If the above recommendations do not correct the issue or if you would like additional advice/guidance, feel free to reach out to a member of your support team via telephone or ticket.
