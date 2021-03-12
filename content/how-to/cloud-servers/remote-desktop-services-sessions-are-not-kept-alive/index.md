---
permalink: remote-desktop-services-sessions-are-not-kept-alive/
audit_date: '2021-03-10'
title: Remote Desktop services sessions are not kept alive
type: article
created_date: '2020-03-04'
created_by: Maru Gonzalez
last_modified_date: '2021-03-10'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---


This article describes how to troubleshoot Remote Desktop Services sessions that are not kept alive as
expected after you install the `Remote Desktop Session Host` role service. In some situations, the Remote
Desktop Services service doesn't apply the keep-alive setting correctly. A Group Policy refresh on the
Remote Desktop Services session host might have caused this malfunction.

### Prerequisites 

Have these items before proceeding:

   - Windows Server&reg; 2008 R2 Datacenter&reg;, Windows Server 2008 R2 Enterprise&reg;,
     Windows Server 2008 R2 Standard&reg;, or Windows Server 2008 R2 Foundation&reg;
   - Rackspace account

### Limitations 

This article applies only to Windows Server 2008 R2 Datacenter, Windows Server 2008 R2 Enterprise,
Windows Server 2008 R2 Standard, and  Windows Server 2008 R2 Foundation.

### Procedure 

Perform the following steps to troubleshoot Remote Desktop Services sessions that are not kept alive as expected:

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).

2. Click **Select a Product > Rackspace Cloud** in the top navigation bar.

3. Select **Servers > Cloud Servers** at the top of the panel.

4. In the **Cloud Servers** section, you can see all the Cloud Servers in your account. Click **Windows Server 2008 R2**
   and log in to the server. If you need more information on how to log in, review this article:
   [Log in to your server via RDP (Windows)](https://docs.rackspace.com/support/how-to/log-in-to-your-server-via-rdp-windows).

5. Microsoft has a supported hotfix available, but it applies only to systems that are experiencing the problem
   described in this article.

The global version of this hotfix installs files that have the attributes listed in the following tables. The dates and
times for these files are listed in Coordinated Universal Time (UTC). On your local computer, the dates and times display
in your local time together with your current daylight saving time (DST). Additionally, the dates and the times might change
when you perform certain operations on the files.

**For all supported x64-based versions of Windows Server 2008 R2**

| File Name     | File Version  | File Size  |   Date  |
| ------------- |:-------------:| -----:| :-------------: |
| Agp440.sys    | 6.1.7600.16385| 61,008 | 14-Jul-2009 | 
| Isapnp.sys    | 6.1.7600.16385| 20,544 | 14-Jul-2009  | 
| Msisadrv.sys  | 6.1.7600.16385| 15,424| 14-Jul-2009| 
| Mssmbios.sys  | 6.1.7600.16385| 32,320 | 14-Jul-2009 | 
| Nv_agp.sys    | 6.1.7600.16385| 122,960 | 14-Jul-2009  |
| Pci.sys       | 6.1.7601.21866| 185,200 | 24-Nov-2011 |     
| Streamci.dll  | 6.1.7600.16385| 24,144 | 14-Jul-2009  | 
| Swenum.sys    | 6.1.7600.16385| 12,496 | 14-Jul-2009  |    
| Termdd.sys    | 6.1.7601.21866| 63,344| 24-Nov-2011 |   
| Uliagpkx.sys  | 6.1.7600.16385| 64,592 | 14-Jul-2009   | 
| Vdrvroot.sys  | 6.1.7600.16385| 36,432 | 14-Jul-2009  | 
| Volmgr.sys    | 6.1.7601.21866| 70,512| 24-Nov-2011 |  
| Termsrv.dll   | 6.1.7601.21866| 680,960 | 24-Nov-2011  | 


To obtain this hotfix, contact [Microsoft Customer Service and Support](https://support.microsoft.com/contactus/?ws=support).


### Related articles 

- [How to Log in to your Server Via RDP Windows](https://docs.rackspace.com/support/how-to/log-in-to-your-server-via-rdp-windows)

Use the Feedback tab to make any comments or ask questions. You can also click **Sales Chat** to [chat now](https://www.rackspace.com/) and start the conversation.

