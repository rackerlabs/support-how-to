---
permalink: what-caused-windows-server-shutdown/
audit_date:
title: 'What Caused Windows Server Shutdown'
type: article
created_date: '2020-05-4'
created_by: Dave Myers
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

## Overview

There are a few basic reasons for a Windows Server to shutdown. It is either initiated by a user, initiated by system. These can be identified by searching the Event Viewer for their associated Event IDs located in the System Event Viewer logs:
**Event ID 41 - The system has rebooted without cleanly shutting down first. This error could be caused if the system stopped responding, crashed, or lost power unexpectedly.**
**Event ID 1074 - "Logged when an app (ex: Windows Update) causes the system to restart, or when a user initiates a restart or shutdown."**
**Event ID 6006 - Logged as a clean shutdown. It gives the message "The Event log service was stopped".**
**Event ID 6008 - Logged as a dirty shutdown. It gives the message "The previous system shutdown at time on date was unexpected".**

## Searching for Shutdown Events in the Event Viewer 

Press Windows start button + R keys to open the Run dialog, type eventvwr and press enter key or navigate to the Event Viewer - Control Panel\All Control Panel Items\Administrative Tools\Event Viewer.

Expand the **'Windows Folder'** and right click the ***'System'***  log and select  ***Filter Current Log...*** and place **41, 1074, 6006, 6008** in the search field to search all four shutdown conditions and enter. 

The timestamp can be used to corrolate other events and root cause for Event 6008 shutdown.

## Related articles:

https://answers.microsoft.com/en-us/windows/forum/windows_7-performance/how-can-you-find-the-cause-of-unexpected-shutdown/54cf6947-0cc2-4719-ab47-9f9cb989de8f

https://support.microsoft.com/en-us/help/326564/event-id-6008-is-unexpectedly-logged-to-the-system-event-log-after-you
