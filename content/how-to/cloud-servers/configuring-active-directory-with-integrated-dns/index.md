---
permalink: /configuring-active-directory-with-integrated-dns/
audit_date:
title: ‘Configuring Active Directory with integrated DNS’
type: article
created_date: '2020-08-12’
created_by: Karoline Mills
last_modified_date: '2020-08-12’
last_modified_by: Karoline Mills
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to set up an Active Directory domain with integrated DNS services and how to join a computer to the domain. You will need administrator permissions on the server to perform these tasks.

### Installing the Active Directory and DNS server roles

First, you will need to install the **Active Directory Domain Services**  and **DNS Server** roles on your server. To do so, open the **Server Manager** from your task bar. On the upper right-hand side, select **Manage** -> **Add Roles and Features**, and click **Active Directory Domain Services** and **DNS Server** under **Server Roles**. You can add the default features by selecting **Add Features** or manually configure which services and features you wish to install. The wizard ensures that you have all necessary services selected if you choose the default settings.

### Promoting your server to a Domain Controller

After the installation of these two roles has finished, navigate back to the Server Manager dashboard. You should now see an alert in the upper right-hand corner. Click on the notification and select **Promote this server to a domain controller**. If you are setting up a new domain, select **Add a new forest**. You will now need to enter the name for your domain. To follow best practices for naming an Active Directory domain, choose an unused sub-domain of a domain you own, for example *ad.testdomain.com*, if you own and manage *testdomain.com*.

On the next screen, you are asked to select a **Directory services restore password (DSRM)**. This password is needed in case you need to repair or recover your Active Directory database. When you are asked to enter the **NetBIOS** domain name, select the same domain that you used previously, in this example, *testdomain*. You can then choose the folders in which the various files will be stored. You can leave these as the default locations. After all prerequisite checks have been performed, you can click **Install** and the server will reboot to complete the installation. All local users that existed prior to the installation, will be converted to domain users.

### Configuring DNS

When creating a DNS server with Active Directory, two primary DNS zones will be created by default. They can be configured and managed in the **DNS Manager**. You can find it under **Server Manager** -> **Tools** -> **DNS**. The two default zones can be viewed under **Forward Lookup Zones**. 

Based on the previous example, two DNS zones have been created, **ad.testdomain.com** and **_msdcs.ad.testdomain.com**. When looking at the type, you can verify that both zones are listed as **Active Directory-Integrated Primary**. These integrated zones can be replicated to all your Domain Controllers as they are stored within the Active Directory database. All writeable Domain Controllers in your domain, that have the DNS Server role installed, will be able to manage and configure DNS information for the domain.

To configure your DNS settings, right-click on **Reverse Lookup Zones** in the left panel and select **New Zone…** . Simply follow the default settings recommended in the wizard until you are prompted for a **Network ID**, for which you want to use the first three parts or octets of your private IP address. If you are configuring this domain on a Rackspace Cloud Server, you can find this information in your Rackspace portal under **Servers** -> **Cloud Servers** -> **Your Server Name** -> **Networks and Security Groups** -> **servicenet**. Please keep in mind that the servicenet private IP addresses will only work if your Domain Controller and the to-be-joined client computers are in the same region. Alternatively, you can open a Powershell prompt and type **ipconfig**. You will find the necessary information under **ethernet adapter private** -> **ipv4 address**. Click **Next** to finish the zone setup.

After the zone has been created, you will want to add a PTR record. To do this, click on **Reverse Lookup Zones** on the left-hand side. Right-click on the newly created zone and select **New Pointer...** Fill in the full host IP address as it appears in your portal or when using ipconfig. To find your hostname, open Powershell and type **hostname**. When filling in the hostname, you want to put in your hostname followed by your domain name, for example, **server1.ad.testdomain.com**.
To confirm your configuration, navigate back to the main menu of the DNS manager. Right-click on your server name and select **Launch nslookup**. Type the name of your server, in our example **server1.ad.testdomain.com**, and click enter. You should now see the private IP address listed within the results. To verify that the reverse lookup is working as well, type the IP address and press Enter. The result should show the name of your server.

### Joining a computer to the domain

First, log into the computer you would like to join. You need to configure the computer to use the domain controller of your domain as a DNS server. To do this, right-click the network connection symbol on the task bar and select **Open Network and Sharing Center**. Click on your private network adapter, **private0** for Rackspace Cloud Servers, and select **Properties**. Under Properties, click on **Internet Protocol Version 4 (TCP/IPv4)** and select **Properties**. You will now need to enter the private IP address of your domain controller as found in the last step under **Preferred DNS server**. Click on **OK** to apply these changes.

Now that the DNS server has been configured, you can join the computer to your domain. Click on the Windows symbol in the task bar and type **Control Panel**. Now select **System** and **Change settings**. Under **Computer Name**, click on **Change…** . Type in the name of your domain, **ad.testdomain.com**. You will be prompted for administrator credentials for the domain controller. After you have successful entered the credentials, your computer will be joined to the domain. You will be prompted to reboot the workstation to apply all changes.
