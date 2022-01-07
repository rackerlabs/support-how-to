---
permalink: /shut-down-a-rackspace-cloud-server
audit_date: ‘2022-01-07'
title: Shut down a Rackspace Cloud Server
type: article
created_date: ‘2022-01-07'
created_by: Jorge Garcia
last_modified_date: '2022-01-07'
last_modified_by: Jorge Garcia
product: Cloud Servers
product_url: cloud-servers
---
A common use case for shutting down a server is determining whether the server is still in use. Sometimes shutting
down a server is the quickest and easiest way to make this determination. This article describes how to shut down a
Rackspace Cloud Server. Additionally, it includes instructions to shut down a Linux® server and a Windows® server. 

**WARNING:** Because Cloud Server pricing depends on the hours that the server uses resources on the host machine,
shutting down a server is not enough to stop billing. To completely prevent any further charges incurred from this
server, you must delete it. As long as the server is using resources, it continues to accrue charges.

The following commands shut down the server, and the server no longer accepts connections. This enables you to determine 
if the server is still in use. After you execute the shutdown command, it takes a few minutes for the Cloud Control
Panel to show that the instances are offline. 

### Shut down a Linux server by using the command prompt

Use the following command to shut down a Linux server:

```sh
    shutdown -h now

    or

    systemctl poweroff
```

### Shut down a Windows server by using the command prompt

To shut down a Windows server, open a command prompt and run the following command:

```powershell
    shutdown /s
```

### Shut down a Cloud Server by using an API call.

You can also use our Application Programmer Interface (API) by using a cURL® command
via Pitchfork using [these instructions](https://docs.rackspace.com/support/how-to/use-an-api-call-to-stop-a-cloud-server)

### Next steps

If the server is not in use, you can remove it. If you want to save the content on the server, you can use
Cloud Images and Cloud Backups to back up your content into Cloud Files before removing the server from the
account.  

To retain data for possible future needs, create a [Cloud Server Image](/support/how-to/creating-an-image-backup-cloning/). 

For boot-from-volume servers, and servers where only specific files need to be saved, follow
[these instructions](https://docs.rackspace.com//support/how-to/rackspace-cloud-backup-create-a-backup).

Both Cloud Server images and Cloud Backups are stored in Cloud Files with associated storage costs, but for
individuals who want to minimize their costs, these two options are likely much cheaper than running an idle server.

If you determine that the server is in use, reboot the server by clicking the **gear icon** in the Cloud
Control Panel and selecting **reboot**.

#### If the server is actively used, you should bring it back online. 

You can bring your server back online by rebooting the server from the Cloud Control Panel by using 
the following steps:

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).
2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.
3. Select **Servers > Cloud Servers**.
3. Click the action cog next to the server that you want to reboot and select **Reboot**.

This brings your server back online.



<br>

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
