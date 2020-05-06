---
permalink: windows-guide-to-resource-monitoring/
audit_date:
title: 'Windows Guide to Resource Monitoring'
type: article
created_date: '2020-05-06'
created_by: Steven Mondragon-DeVoss
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

*This article is applicable to the following Windows Server versions: 2008, 2012, 2016, 2019*

The Windows Resource Monitor is a tool, similar to the Task Manager, that is used to analyze server performance such as program, application, network connection, and memory usage. It provides Performance Monitoring data combined with Windows Event Tracing data to allow for a more in depth troubleshooting of issues than was the Task Manager can provide in real time. 

# Launching the Resource monitor

The following are the different ways to launch the resource monitor.
1. On the Performance tab of the Task Manager, there is a link at the bottom to switch to "Open Resource Monitor"
2. In the Control Panel, the Resounce Monitor is found under Administrative Tools.
3. Run resmon.exe from command line, powershell, or select the Windows icon in the bottom left of the desktop and type resmon.exe.

# Initial View

Once Resource Monitor is launched, you will be presented with an Overview, CPU, Memory, Disk, and Network tab with the Overview tab being the default. To the right of the tabs, you are presented with graphs of each resource in action in real time. The tabs are further broken down as follows.

* Overview tab
    * CPU
    * Disk
    * Network
    * Memory
* CPU tab
    * Processes
    * Services
    * Associated Handles
    * Associated Modules
* Memory tab
    * Processes
    * Physical Memory
* Disk tab
    * Processes with Disk Activity
    * Disk Activity
    * Storage
* Network tab
    * Processes with Network Activity
    * Network Activity
    * TCP Connections
    * Listening Ports

# Uses

The CPU and Memory tabs are useful in determining which service or application is consuming resources.

The Disk tab is broken up into the different disks on the server and shows Disk I/O and processes with disk activity.

The Network tab shows processes that have network activity and active TCP connections. It also provides the listening ports on the server where you can view what service is listening on which port.
