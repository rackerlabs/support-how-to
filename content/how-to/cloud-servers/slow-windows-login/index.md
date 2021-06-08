---
permalink: slow-windows-login/
audit_date: '2021-05-24'
title: Slow Windows logins
type: article
created_date: '2021-04-12'
created_by: Travis Cook
last_modified_date: '2021-05-24'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

Many remote connections or requests to a Windows&reg; server can cause delayed logins with
your users. This article covers some basic steps you can take to confirm and troubleshoot
this issue.

### Problem

A slow login on Windows is characterized by long user login attempts, which take a minute
or two before getting disconnected. The disconnnect results in an alert in Event Viewer.
High resource usage on the local server or Domain Controller can cause some of these
issues. However, if you don't see slow overall performance and the resource utilization
for CPU, RAM and disk were below 40%, the following solution might be helpful:

You might see an entry similar to the following example alert in the Event Viewer if you
are having a slow login issue with your server:

- **Log Name:**     `Microsoft-Windows-TerminalServices-RemoteConnectionManager/Admin`
- **Source:**       `Microsoft-Windows-TerminalServices-RemoteConnectionManager`
- **Date:**         `12/17/2019 2:40:15 PM`
- **Event ID:**     `20499`
- **Task Category:**`None`
- **Level:**        `Warning`
- **Keywords:**     
- **User:**         `NETWORK SERVICE`
- **Computer:**     `123456-exampledomain.com`
- **Description:**  *Remote Desktop Services has taken too long to load the user configuration from server \\123456-exampledomain.com for user rsadmin*

### Resolution:

You can now turn off the Domain Controller requests during user logon, which avoids the window for
the deadlock and fixes the performance issues. To fix this issue in Windows Server 2012, you must
upgrade to Windows Server 2012 R2. On Windows Server 2012 R2, create the `fQueryUserConfigFromLocalMachine`
registry entry according to the following steps.

**Note:** This change does not require a reboot of the system.

To make the registry change, follow these steps:

1. To start the Registry Editor, press the Windows logo key + R, type `regedit.exe` in the
   **Open** box, and click **OK**.  
2. In the Registry Editor, locate and click one of the following registry subkeys:

        HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows NT\Terminal Services

3. In the **Edit** menu, select **New**, and then select **DWORD Value**.
4. Enter `fQueryUserConfigFromLocalMachine`.
5. Press and hold (or right-click) `fQueryUserConfigFromLocalMachine` and select **Modify**.
6. In the **Value** data box, type `1` and select **OK**.
7. Exit the Registry Editor.

**Note: For Windows Server 2016, you don't have to update registry keys in Windows
Server 2016 because the updated behavior is the default.

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact). 
