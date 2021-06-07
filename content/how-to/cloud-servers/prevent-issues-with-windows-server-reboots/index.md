---
permalink: prevent-issues-with-windows-server-reboots
audit_date: '2021-05-26'
title: Prevent issues with Windows server reboots
type: article
created_date: '2015-08-18'
created_by: Rose Contreras
last_modified_date: '2021-06-07'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to restore your Windows&reg; server to a working
state automatically after a reboot. After you complete the procedures in this
article, you should not need to launch applications manually or apply firewall
rules after your Windows server reboots.

### Verify that your server is fully patched

If your Windows server is not fully patched, install all pending updates.

1. Move the cursor to the bottom-right corner of the screen and activate the
    **Charms** menu.

2. Click **Search** and type `Control Panel`.

3. On the ribbon under the search field, click **Control Panel**.

4. Click **System and Security**.

5. Click **Windows Update** to see if there are pending updates to install. If
   so, install the updates at a convenient time.

### Automatically start all critical services

1. Review and confirm that you have set critical services to your processes to
   start automatically. Run the following PowerShell&reg; script to grab all
   services that have an automatic startup:

        Get-Service | Select-Object Name, State, StartType | Where-Object StartType -eq 'Automatic' | Format-Table

2. Move the cursor to the bottom-right corner of the screen and activate the
    **Charms** menu.

3. Click **Search**, then type `services.msc`.

4. On the ribbon under the search field, click **services.msc**.

5. In the **Services Management** window, double-click a service that you want
    to configure for automatic startup.

6. Set the startup type to **Automatic**.

### Perform a test reboot

Next, schedule a maintenance window during off-peak hours and test your work by
rebooting the server. Perform a soft reboot through the **Action** menu in the
Cloud Control Panel or run the `reboot` command on the server.

When you perform a test reboot, dedicate time in your maintenance window to
troubleshoot any issues that arise.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/).
