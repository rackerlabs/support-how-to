---
permalink: configure-active-directory-with-integrated-dns
audit_date: '2020-09-17'
title: Configure Active Directory with integrated DNS
type: article
created_date: '2020-08-12'
created_by: Karoline Mills
last_modified_date: '2020-09-17'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to set up an Microsoft&reg; Active Directory&reg; domain with integrated DNS services and join a computer
to the domain. You need administrator permissions on the server to perform these tasks.

### Install the Active Directory and DNS server roles

Perform the following steps to install the **Active Directory Domain Services** and **DNS Server** roles on your server:

1. Open the **Server Manager** from the taskbar. 
2. In the upper-right corner, select **Manage** -> **Add Roles and Features**.
3. Under **Server Roles**, click **Active Directory Domain Services** and **DNS Server**. 
4. You can add the default features by selecting **Add Features** or manually configure the services and features you want
   to install. The wizard ensures that you have selected all the necessary services if you choose the default settings.

### Promote your server to a Domain Controller

After the installation of these two roles finishes, perform the following steps to promote your server to Domain Controller:

1. Navigate to the **Server Manager** dashboard.
2. Click on the notification alert in the upper-right corner.
3. Select **Promote this server to a domain controller**. 
4. If you are setting up a new domain, select **Add a new forest**.
5. Enter the name for your domain. To follow best practices for naming an Active Directory domain, choose an unused sub-domain
   of a domain you own, such as *ad.testdomain.com* (if you own and manage *testdomain.com*).
6. When prompted, select a **Directory services restore password (DSRM)**. You need this password in case you need to
   repair or recover your Active Directory database.
7. When you are asked to enter the **NetBIOS** domain name, select the same domain that you used previously. In this
   example, it is *testdomain*.
8. You can then choose the folders in which to store the various files. You can leave these as the default locations.
9. After all prerequisite checks complete, click **Install**. The server reboots to complete the installation and converts
   all local users that existed before the installation to domain users.

### Configuring DNS

When creating a DNS server with Active Directory, two primary DNS zones are created by default. You can configure and
manage them in the **DNS Manager**, found under **Server Manager** -> **Tools** -> **DNS**. View the two default zones
under **Forward Lookup Zones**. 

The previous example created two DNS zones, **ad.testdomain.com** and **\_msdcs.ad.testdomain.com**. When looking at the
type, you can verify that both zones show as **Active Directory-Integrated Primary**. You can replicate these integrated
zones to all your Domain Controllers because the system stores them within the Active Directory database. All writeable
Domain Controllers in your domain, which have the DNS Server role installed, can manage and configure DNS information for
the domain.

Perform the following steps to configure your DNS settings:

1. Right-click **Reverse Lookup Zones** in the left panel and select **New Zone**.
2. Follow the default settings recommended in the wizard until you are prompted for a **Network ID**, for which you should
   use the first three parts or octets of your private IP address. If you are configuring this domain on a Rackspace Cloud
   Server, you can find this information in your Rackspace portal under **Servers** -> **Cloud Servers** -> **Your Server Name**
   -> **Networks and Security Groups** -> **servicenet**. 
   
    **Note:** Remember that the servicenet private IP addresses only works if your Domain Controller and the to-be-joined client
    computers are in the same region. Alternatively, you can open a PowerShell&reg; prompt and type **ipconfig**. You can find
    the necessary information under **ethernet adapter private** -> **ipv4 address**. 

3. Click **Next** to finish the zone setup.

After you create the zone, perform the following steps to add a PTR record:

1. Click **Reverse Lookup Zones** on the left side. 
2. Right-click the newly created zone and select **New Pointer**.
3. Fill in the full host IP address as it appears in your portal or when using `ipconfig`.
4. To find your hostname, open PowerShell and type **hostname**. When filling in the hostname, type your hostname followed
   by your domain name, such as **server1.ad.testdomain.com**.

Perform the following steps to confirm your configuration:

1. Navigate to the main menu of the **DNS manager**.
2. Right-click your server name and select **Launch nslookup**.
3. Type the name of your server, such as **server1.ad.testdomain.com**, and click enter. You should now see the private IP
   address listed within the results. 
4. To verify that the reverse lookup is working as well, type the IP address, and click **Enter**. The result should show the
   name of your server.

### Join a computer to the domain

Perform the following steps to configure the computer to use the domain controller of your domain as a DNS server:

1. Log in to the computer you would like to join.
2. Right-click the network connection symbol on the taskbar, and select **Open Network and Sharing Center**.
3. Click on your private network adapter, **private0** for Rackspace Cloud Servers, and select **Properties**.
4. Under **Properties**, click on **Internet Protocol Version 4 (TCP/IPv4)** and select **Properties**.
5. Enter your domain controller's private IP address as found in the last step under **Preferred DNS server**.
6. Click **OK** to apply these changes.

Now that you configured the DNS server, perform the following steps to join the computer to your domain:

1. Click on the Windows symbol in the taskbar and type **Control Panel**.
2. Select **System** and **Change settings**.
3. Under **Computer Name**, click on **Change…**.
4. Type the name of your domain, **ad.testdomain.com**.
5. When prompted for administrator credentials for the domain controller, enter them. This joins the computer to the domain.
6. When prompted, reboot the workstation to apply all changes.
