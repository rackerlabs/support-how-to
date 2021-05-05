---
permalink: guide-to-windows-resource-monitoring
audit_date: '2020-05-11'
title: 'Guide to Windows resource monitoring'
type: article
created_date: '2020-05-06'
created_by: Steven Mondragon-DeVoss
last_modified_date: '2020-05-11'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

*This article applies to the following Microsoft&reg; Windows Server&reg; versions: 2008, 2012, 2016, and 2019.*

You can use the Windows&reg; Resource Monitor tool, which is similar to the Task Manager, to analyze server
performance, such as program, application, network connection, and memory usage. It provides
performance monitoring data combined with Windows event tracing data to allow for more in-depth
troubleshooting of issues than the Task Manager provides in real time. 

### Launching the Resource Monitor

Launch the Resource Monitor by using one of the following methods:

- On the **Performance** tab of the Task Manager, click the link at the bottom to switch to
  **Open Resource Monitor**.
  
- In the Control Panel, find the **Resource Monitor** under **Administrative Tools**.

- Run `resmon.exe` from the command line or PowerShell&reg;.

- Select the Windows icon at the bottom-left of the desktop and type `resmon.exe`.

### Initial view

The Resource Monitor opens with **Overview** (default), **CPU**, **Memory**, **Disk**, and **Network** tabs. To the right
of the tabs, you see graphs of each resource in action in real time. The tabs include the following information:

* **Overview** tab
    * CPU
    * Disk
    * Network
    * Memory
* **CPU** tab
    * Processes
    * Services
    * Associated handles
    * Associated modules
* **Memory** tab
    * Processes
    * Physical memory
* **Disk** tab
    * Processes with disk activity
    * Disk activity
    * Storage
* **Network** tab
    * Processes with network activity
    * Network Activity
    * TCP Connections
    * Listening Ports

### Uses

Use the **CPU** and **Memory** tabs to determine which service or application is consuming resources.

The **Disk** tab shows the different disks on the server, disk input and output, and processes with disk
activity.

The **Network** tab shows processes that have network activity and active Transmission Control Protocol (TCP)
connections. It also provides the listening ports on the server where you can view what service is listening
on which port.
