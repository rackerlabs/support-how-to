---
permalink: upgrade-citrix-tools-for-windows-cloud-servers/
node_id: 3406
title: Upgrade Citrix Tools for windows cloud servers
type: article
created_date: '2016-04-05'
created_by: Luke Repko
last_modified_date: '2016-04-05'
last_modified_by: Luke Repko
product: Cloud Servers
product_url: cloud-servers
---

Citrix tools are fundamental to the proper operation of virtualized cloud servers in our cloud infrastructure. They are the underlying drivers for the virtual machine, giving it access to virtual hardware specifically networking, and block devices.

This article explains how to upgrade the Citrix Tools for Virtual Machines on Windows cloud servers. These tools should **ONLY** during Blue Screens of Death (BSoD), or if support has recommended upgrading the tools.

**Warning:** Performing the following steps will incur network downtown. There, *do not* perform these steps on a production server, as it will result in network disruption and multiple reboots of the server.

### Prerequisites

The following should be downloaded to the *production* server before beginning this tutorial.

- [Citrix Tools for Virtual Machines 6.0](http://8d268c176171c62fbd4b-7084e0c7b53cce27e6cc2142114e456e.r30.cf1.rackcdn.com/xstools-6.0.zip)

- [Citrix Tools for Virtual Machines 6.2](http://8d268c176171c62fbd4b-7084e0c7b53cce27e6cc2142114e456e.r30.cf1.rackcdn.com/xstools-6.2.zip)

- [Cloud Servers Agent Service](http://5ef1b700b2e853350a6a-52080ce862bc0ea8ae107677959a39ad.r97.cf2.rackcdn.com/Rackspace-Cloud-Servers-Agent-Latest.zip)

### Image creation of production server

1. Take an image of the production server that needs the upgrades. This can take less than an hour or multiple hours depending on the size of your server's virtual hard drive. You can find more information about image processing [here](https://community.rackspace.com/products/f/25/t/3778).

2. Create a new server using the image you created.

3. Verify that the new server boots properly and that all data and sevices are intact.

The new server you created from the image will be considered your *non-production* server. All of the following sections should be performed on this server.

**Note:** You can skip the next section if you already have Citrix Tools 6.0.5837 installed.

### Upgrade to Xen Server Tools 6.0 on new non-production server

**Note:** Stop/disable all non-system applications/services to all for an unimpeded installation.

1. Access your server's console through the Cloud Control Panel. Find the name of your new non-production server, click the cog, then click **Console**.

2. Extract the archive named **xstools-6.0.zip** to a local directory, such as C:\.

   ![](upgrade-citrix-tools-for-windows-cloud-servers/extract-xen-tools.png)

3. In the extracted folder, run **xensetup.exe**.

4. Click **Next**, then **Install**.

5. At the end of the installation process, select **Reboot now** then **Finish**. Your server will be rebooted.

6. After your server has been rebooted, open **Programs and Features** to ensure Citrix Tools version 6.0.58937 is installed.

### Upgrade to Xen Server Tools on new non-production server

1. Access your server's console through the Cloud Control Panel. Find the name of your new non-production server, click the cog, then click **Console**.

2. Extract the archive named xstools-6.2.zip to a local directory, e.g. C:\.

3. In the extracted folder, click **installwizard**.

4. Follow the instructions on the wizard. We recommend using the default folder for your destination folder.

5. Click **Install** to prepare the Citrix Tools Installer.

6. After the setup launches, click **Install Tools**.

7. When prompted, click **Restart Now**. The server will automatically restart several time before the installation is complete.

8. Once the installation is complete, restart your computer.

### Upgrade the Rackspace Cloud Servers agent

#### Online installation

If your upgraded server has an active connection to the internet, you easily install the Rackspace Cloud Servers agent.

1. Start a command prompt as an administrator.

2. In the command prompt, run the following code:

    powershell.exe -NoProfile -ExecutionPolicy unrestricted -Command (New-Object Net.WebClient).DownloadFile('http://5ef1b700b2e853350a6a-52080ce862bc0ea8ae107677959a39ad.r97.cf2.rackcdn.com/Rackspace-Cloud-Servers-Agent-Installer-Latest.bat', '%tmp%\Rackspace-Cloud-Servers-Agent-Installer-Latest.bat') & %tmp%\Rackspace-Cloud-Servers-Agent-Installer-Latest.bat

#### Offline installation

Use the following installation instructions if your server *does not* have an active connection to the internet.

1. Extract the archive named, **Rackspace-Cloud-Servers-Agent-Latest.zip**.

   ![](upgrade-citrix-tools-for-windows-cloud-servers/extract-agent.png)

2. Inside the extracted folder, right click the **Agent-Services-Install-OR-Upgrade** batch file and choose **Run as administrator**.

### Decide which server to keep

After performing the aforementioned steps on the **NEW** server, decide if you'd like to keep it, or abandon it. See the folllowing options that are available moving forward.

#### Option 1

Now that the new server contains the updated Citrix Tools for Virtual Machines, and Rackspace Cloud Servers Agent - it may be close to ready for production use.

Option one involves deleting the original server, and contained use of the NEW server. This option will usually be the quickest, and easiest to abide by. One notable caveat is that the IP address will be different, and there is not a way for Rackspace support to transfer the original server's IP address to the new server. This can be mitigated if Cloud Load Balancers have been in use. If a load balancer(s) was already being used, simply remove the original server (node) from the load balancer, then add the new one.

Before deleting the original server, be certain ALL IMPORTANT DATA has been properly restored to the new server. This includes any data that may reside on an ephemeral disk drive which is not included in the image of the original server. If you are not sure what an ephemeral drive is, see here. If you are still uncertain, please contact Rackspace support for further guidance.

If the original server does have ephemeral storage, there are a number of ways to migrate the data to the new server. If both servers have a service network IP you can use file sharing built into Windows. Alternatively you could use FTP, FTPS, or use our cloud backup agent for cloud servers which can be installed on both Windows, and Linux instances.

You can also transfer data between servers  by adding Cloud Block Storage to the original server. Copy the data you need to the newly created and attached volume, detach it from the original server, and then reattach the volume to the new server where the ephemeral drive had been mounted before, e.g. D:\. The following article will help you get started.

- [Overview of Cloud Block Storage](cloud-block-storage-overview)
- [Prepare your Cloud Block Storage Volume](prepare-your-cloud-block-storage-volume)
- [Cloud Block Storage FAQ](cloud-block-storage-faq)

If you decide to use option one, we recommend taking a final image of the server which can be used as a base image to create new servers, or to rebuild your current server.

#### Option 2

Perform all of the installation steps on the production server during a planned maintenance window. The server will retain its original IP address.

After installing the tools on the non-production server, you should have a better understanding of how your maintenance window should be.

Having proper backups are recommended before starting this process a second time on the production server, preferably both an image of the server and backups of all important content on the server. While the previously built "NEW" server should still be accessible and contain a nearly identical root file system of the original server, multiple backups will allow to use the Rackspace backup agent, which can be installed on both Windows and Linux cloud servers.

#### Option 3

**Note:** We strongly recommend having the "proper backups" as outlined in **Option 2**.

Rebuild the production server from an image of the NEW server. The server retains its original IP address.

Out all three options, this option will take the longest amount of time. The length of time depends on how large your new non-production server's virtual hard drive is.

1. In the Cloud Control Panel, take an image of your new non-production server and wait for the image to build.

2. In the Cloud Control Panel, navigate to the original server's detail page.  Underneath the server's **UUID**, click **Rebuild**.

3. A new window will appear on the page. Select the **Saved** tab to view your saved saved image. Select the image you created in Step 1.

**Warning:** Rebuilding a server will **destroy all data** on your original server and install the image you select.

4. Click **Rebuild Server**.
