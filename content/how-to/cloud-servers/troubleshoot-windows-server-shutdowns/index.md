---
permalink: troubleshoot-windows-server-shutdowns
audit_date: '2020-05-04'
title: 'Troubleshoot Windows server shutdowns'
type: article
created_date: '2020-05-04'
created_by: Dave Myers
last_modified_date: '2020-05-06'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

### Overview

Microsoft&reg; Windows&reg; servers might shut down as the result of a user action or a system event. You
can identify the cause by searching the **Event Viewer** for the following associated Event IDs located
in the **System Event Viewer** logs:

- **Event ID 41**: The system rebooted without cleanly shutting down first. This error occurs when the
  system stopped responding, crashed, or lost power unexpectedly.
- **Event ID 1074**: Logged when an app (such as **Windows Update**) causes the system
  to restart, or when a user initiates a restart or shutdown.
- **Event ID 6006**: Logged as a clean shutdown. It gives the message, "The Event log service was stopped."
- **Event ID 6008**: Logged as a dirty shutdown. It gives the message, "The previous system shutdown at
  time on date was unexpected."

### Search for shutdown events in the Event Viewer 

Use the following steps to open the **Event Viewer**:

1. Press the Windows **Start** button and the **R** key at the same time to open the
   **Run** dialog. 

2. Type `eventvwr` and press **Enter**.

You can also open the Event Viewer by using the Control Panel. Navigate to 
**Control Panel->All Control Panel Items->Administrative Tools->Event Viewer**.

Use the following steps to search for shutdown events in the **Event Viewer**:

1. Expand the **Windows Folder** and right-click the **System** log.

2. Select **Filter Current Log**.

3. Enter `41, 1074, 6006, 6008` in the search field to search all four shutdown conditions
   and press **Enter**. 

You can use the timestamp to correlate other events and identify the root cause for an `Event 6008` shutdown.

### Related articles

Refer to the following articles for additional help:

[How can you find the cause of unexpected shutdown after you put your computer to sleep?](https://answers.microsoft.com/en-us/windows/forum/windows_7-performance/how-can-you-find-the-cause-of-unexpected-shutdown/54cf6947-0cc2-4719-ab47-9f9cb989de8f)

[Event ID 6008 is unexpectedly logged to the System event log after you shut down and restart your computer](https://support.microsoft.com/en-us/help/326564/event-id-6008-is-unexpectedly-logged-to-the-system-event-log-after-you)
