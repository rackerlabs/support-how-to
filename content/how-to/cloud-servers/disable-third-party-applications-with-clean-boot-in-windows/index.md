---
permalink: disable-third-party-applications-with-clean-boot-in-windows/
audit_date:
title: 'Disable Third Party Applications at Startup with Clean Boot'
type: article
created_date: '2021-04-09'
created_by: Pablo Moreno
last_modified_date: '2021-04-26'
last_modified_by: First Last
product: Cloud Product
product_url: cloud-product
---


Disabling Third Party Applications at Startup using "Clean Boot" functionality for Windows .


This article describes how to perform a clean-boot in Windows to troubleshoot issues within the booting process.

Sometimes, when you install an application or service it may happen that it interferes with others, something that could lead to system crashes, error messages popping up when starting the computer or slowing down the computer performance. 

Restarting in 'safe mode' can help, but as this does not start all the drivers and services it may not be very useful for testing the behavior of the computer.

Instead, what a clean boot does is to disable almost all of the programs and services that run when the computer starts up to see if there is something wrong with Windows or the problems are caused by one of them.

**Note: Before starting it is recommended to create a restore point in Windows or create a backup. This way, if something fails, you can easily return to the previous configuration.**

To perform a clean boot you must sign in to the computer as an administrator. During thes process, it is likely to temporarily lose some functionality of the equipment, but it will recover once you start the equipment in a standard way.

1. To start, hit Win+R to open the Run window. Type “msconfig” in the box and then hit Enter.

2. On the Services tab of System Configuration, select Hide all Microsoft services, and then select Disable all.

*WARNING: Please note the current services configured to run at startup in order to have them documented and to enable them again after you finish with the troubleshooting.*


3. After you hit the OK button you will be prompted to restart the computer. In the warning window that pops up, click the “Exit Without Restart” button. 

4. Hit Ctrl+Shift+Esc to open Task Manager and then switch over to the “Startup” tab.
You’ll have to disable startup apps one at a time; there’s no way to disable them all at once. Select an enabled app and then click the “Disable” button. Do that for all the enabled apps on the tab. 

**Note**: Make sure to keep track of the startup applications you disabled on the above step so you can re-enable them after troubleshooting.

5. When you’re done disabling apps, restart your computer, and it should load without any of those services or startup programs running.


### Determine the cause of the problem after clean boot

One of the first things to check is whether after the clean boot the problem continues to happen. If the problem has disappeared, then it was being caused by one of the deactivated applications or services. Although the process is simple, if you have many applications or services on your computer, it may take a little longer to identify what's originating the problem.

To do this, we must go to the Services tab of System Configuration window, and once there, activate and deactivate services and applications until we detect the problem. We can start by activating or deactivating half of the elements of the list of services and gradually narrow down until we find the responsible for the problem.

After finding out which startup item or service is causing the problem, you will need to check if there is an update that might fix the problem or contact the program manufacturer to determine whether the problem can be resolved. Either way, to avoid the problem, uninstall the program or run Windows with the problem item disabled. To do this, run the System Configuration utility and enable your Services and Startup Items, but clear the check box for the problem item.


### Reset the computer to start normally after clean boot troubleshooting

After you finish troubleshooting, follow these steps to reset the computer to start normally. 

1. Hit Win+R to open the Run window. Type “msconfig” in the box and then hit Enter.
2. On the General tab, select Normal Startup.
3. Select Services, clear the check box beside Hide all Microsoft services, and then select Enable all.
4. Select Startup, and then select Open Task Manager.
5. In Task Manager, enable all of your startup programs, and then select OK.
6. When you're prompted to restart the computer, select Restart.
