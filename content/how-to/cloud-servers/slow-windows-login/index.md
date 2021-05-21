---
permalink: slow-windows-login/
audit_date: '2021-05-24'
title: Slow Windows logins
type: article
created_date: '2021-04-12'
created_by: Travis Cook
last_modified_date: '2021-05-24'
last_modified_by: Carlos Arriaga
product: Cloud Product
product_url: cloud-product
---


### Slow Login on Windows Server Troubleshooting

When there is a high number of remote connections/requests to a server you can see delayed logins with your users. This article will go over some basic steps you can take to confirm and troubleshoot this issue.

A Slow login on Windows is characterized by long user login attempts &mdash;a minute or two before getting disconnected, that produce an alert within Event Viewer. Some of these issues can be caused by high resource usage on the local server or Domain Controller. However, if you don't see slow overall performance, the resource utilization for CPU, RAM and disk were below 40% the following solution might be of help.

The following example alert can be found in the Event Viewer if you are having a slow login issue into your server:

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
#### Resolution:

There now is an option to turn off the Domain Controller requests during user logon. This avoids the window for the dead-lock, and fixes the performance issues. To fix this issue in Windows Server 2012, you must upgrade to Windows Server 2012 R2. On Windows Server 2012 R2, create the fQueryUserConfigFromLocalMachine registry entry according to the following steps &mdash;this change does not require a reboot of the system.

To make the registry change, follow these steps:
- Start Registry Editor. (Press Windows logo key + R, type regedit.exe in the Open box, and then click OK.)
    In Registry Editor, locate and then click one of the following registry subkeys:
 
        HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows NT\Terminal Services

-  On the Edit menu, select New, and then select DWORD Value.
- Type fQueryUserConfigFromLocalMachine.
- Press and hold (or right-click) fQueryUserConfigFromLocalMachine, and then select Modify.
- In the Value data box, type 1, and then select OK.
- Exit Registry Editor.

# Note for Windows Server 2016:
You don't have to update registry keys in Windows Server 2016, the updated behavior is the default.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 




