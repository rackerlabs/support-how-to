---
node_id: 356
title: Installing Active Directory Domain Services on Windows Server 2008 R2 Enterprise 64-bit
type: article
created_date: '2011-03-16'
created_by: Rackspace Support
last_modified_date: '2015-12-29'
last_modified_by: Nate Archer
product: Cloud Servers
product_url: cloud-servers
---

This article provides prerequisites and steps for installing Active
Directory Domain Services (AD DS) on Microsoft Windows Server 2008 R2
Enterprise 64-bit (W2K8).
This article does *not* provide instructions for adding a Domain
Controller (DC) to an already existing Active Directory Forest
Infrastructure.

<div id="toctitle">

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><h2 id="contents"><strong>Contents</strong></h2>
<ol>
<li><a href="#Preparation_for_Active_Directory"><span class="toctext">Prepare for Active Directory Domain Services Installation</span></a></li>
<li><a href="#Installation_of_Active_Directory_Domain_Services_.28DCPROMO.29"><span class="toctext">Install Active Directory Domain Services (DCPROMO)</span></a></li>
</ol></td>
</tr>
</tbody>
</table>

</div>



<span class="mw-headline">Prepare for Active Directory</span>
-------------------------------------------------------------

<span>Before you install AD DS on a Rackspace Cloud Server running
Windows Server 2008 R2 Enterprise 64-bit (W2K8), you must perform the
following prerequisite tasks</span>.

### Select Domain Name and Password

<span>Select your domain name and know the domain administrator password
that you want to use.</span>

**Note**: Your domain name should be reliably unique.  Do not use the
same domain as your website, for example, and avoid extensions like
&ldquo;.local&rdquo; unless you have registered that domain name in DNS.  We suggest
a domain name that is not used for anything else, like
"internal.example.com"..

### Specify the Preferred DNS Server

<span>Windows Server 2008 can properly install and configure DNS during
the AD DS installation if it knows that the DNS is local. You can
accomplish this by having the private network adapter&rsquo;s preferred DNS
server address point to the already assigned IP address of the same
private network adapter, as follows:</span>

1.  <span>From the Windows **Start** menu, open **Administrative
    Tools &gt; Server Manager**</span>.
2.  <span>In the **Server Summary** section of the Server Manager
    window, click **View Network Connections**</span>.

    ![2K8\_64R2\_ADDS.jpg](http://c0625232.cdn.cloudfiles.rackspacecloud.com/2K8_64R2_ADDS.jpg)

3.  <span>In the Network Connections window, right-click the private
    adapter and select **Properties**</span>.

    ![2K8\_64R2\_ADDS(1).jpg](http://c0625232.cdn.cloudfiles.rackspacecloud.com/2K8_64R2_ADDS(1).jpg)

4.  <span>Select **Internet Protocol Version 4**, and then
    click **Properties**</span>.

    ![2K8\_64R2\_ADDS(7).jpg](http://c0625232.cdn.cloudfiles.rackspacecloud.com/2K8_64R2_ADDS(7).jpg)


5.   <span>Copy the IP address that is displayed in the **IP address**
    box and paste it into the **Preferred DNS server** box. Then, click
    **OK**</span>.

    ![2K8\_64R2\_ADDS(2).jpg](http://c0625232.cdn.cloudfiles.rackspacecloud.com/2K8_64R2_ADDS(2).jpg)

6.  <span>Click **OK** in the Properties dialog box, and close the
    Network Connections window</span>.

**Note**: The last step for prepping W2K8 for AD is adding the proper
Server Role. The &ldquo;Active Directory Domain Services&rdquo; Role will be added.
This only installs the framework for W2K8 to become a DC and run AD. It
does not promote the server to DC or install AD.

### Add the Active Directory Domain Services Role

<span>Adding the Active Directory Domain Services role installs the
framework for Windows Server 2008 to become a DC and run AD DS. It does
*not* promote the server to a DC or install AD DS</span>.

1.  <span>In the Server Manager window, open the **Roles** directory and
    in the **Roles Summary** section, click **Add Roles**</span>.

    ![2K8\_64R2\_ADDS(3).jpg](http://c0625232.cdn.cloudfiles.rackspacecloud.com/2K8_64R2_ADDS(3).jpg)

2.  <span>On the Before You Begin page of the Add Roles Wizard, click
    **Next**</span>.
3.  <span>On the Select Server Roles page, select the **Active Directory
    Domain Services** check box, and then click **Next** on this page
    and on the Confirmation page</span>.

    <img src="http://c0625232.cdn.cloudfiles.rackspacecloud.com/2K8_64R2_ADDS(4).jpg" alt="2K8_64R2_ADDS(4).jpg" width="650" height="479" />

4.  <span>On the Installation Progress page,
    click **Install**. </span>

    <img src="http://c0625232.cdn.cloudfiles.rackspacecloud.com/2K8_64R2_ADDS(5).jpg" alt="2K8_64R2_ADDS(5).jpg" width="652" height="478" />

5.  <span>On the Results page, after the role is successfully added,
    click **Close**. </span>

    <img src="http://c0625232.cdn.cloudfiles.rackspacecloud.com/2K8_64R2_ADDS(6).jpg" alt="2K8_64R2_ADDS(6).jpg" width="648" height="477" />

### Enable the Remote Registry

1.  <span>Open the Server Manager window if it is not already
    open. </span>
2.  <span>In the **Properties** area of the **Local Servers** page,
    click **Remote Managemen**. </span>
3.  <span>Select the **Enable remote management of this server from
    other computers** check box.</span>



<span class="mw-headline">Install Active Directory Domain Services (DCPROMO)</span>
-----------------------------------------------------------------------------------

<span>Now that you have prepared the server, you can install AD
DS</span>.

**<span>Tip: </span>**<span>As an alternative to performing steps 1
through 3, you can type </span><span>dcpromo.exe</span><span> at the
command prompt. Then, skip to step 4.</span>

1.  <span>If it is not already open, open the Server Manager
    window</span>.
2.  <span>Select **Roles &gt; Active Directory Domain** Services.</span>
3.  <span>In the **Summary** section,click **Run the Active Directory
    Domain Services Installation Wizard (dcpromo.exe)**.</span>

    <img src="http://c0625232.cdn.cloudfiles.rackspacecloud.com/2K8_64R2_ADDS(8).jpg" alt="2K8_64R2_ADDS(8).jpg" width="655" height="493" />

4.  <span>On the Welcome page of the Active Directory Domain Services
    Installation Wizard, ensure that the **Use advanced mode
    installation** check box is cleared, and then click **Next**.
    </span>

    <img src="http://c0625232.cdn.cloudfiles.rackspacecloud.com/2K8_64R2_ADDS(10).jpg" alt="2K8_64R2_ADDS(10).jpg" width="486" height="459" />


5.  <span>On the Operating System Capability page, click
    **Next**</span>.

    <img src="http://c0625232.cdn.cloudfiles.rackspacecloud.com/2K8_64R2_ADDS(11).jpg" alt="2K8_64R2_ADDS(11).jpg" width="493" height="466" />


6.  <span>On the Choose a Deployment Configuration page, select **Create
    a new domain in a new forest** and then click **Next**</span>.

    <img src="http://c0625232.cdn.cloudfiles.rackspacecloud.com/2K8_64R2_ADDS(12).jpg" alt="2K8_64R2_ADDS(12).jpg" width="496" height="469" />


7.  <span>On the Name the Forest Root Domain page, enter the domain name
    that you choose during preparation steps. Then, click
    **Next**</span>.

    <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Internalexamplepic.png" width="503" height="474" />

8.  <span>After the installation verifies the NetBIOS name, on the Set
    Forest Functional Level page, select **Windows Server 2008 R2** in
    the **Forest function level** list. Then, click **Next**</span>.

    ![2K8\_64R2\_ADDS(14).jpg](http://c0625232.cdn.cloudfiles.rackspacecloud.com/2K8_64R2_ADDS(14).jpg)
    <span>The installation examines and verifies your
    DNS setting.</span>

9.  <span>On the Additional Domain Controller Options page, ensure that
    the **DNS server** check box is selected, and then click **Next**.
    </span>

    ![2K8\_64R2\_ADDS(15).jpg](http://c0625232.cdn.cloudfiles.rackspacecloud.com/2K8_64R2_ADDS(15).jpg)


10. <span>In the message dialog box that appears, click
    **Yes**</span>.

    <img src="http://c0625232.cdn.cloudfiles.rackspacecloud.com/2K8_64R2_ADDS(16).jpg" alt="2K8_64R2_ADDS(16).jpg" width="573" height="466" />


11. <span>On the Location for Database, Log Files, and SYSVOL page,
    accept the default values and then click **Nex**t. </span>

    ![2K8\_64R2\_ADDS(17).jpg](http://c0625232.cdn.cloudfiles.rackspacecloud.com/2K8_64R2_ADDS(17).jpg)


12. <span>On the Directory Services Restore Mode Administrator Password
    page, enter the domain administrator password that you chose during
    the preparation steps. This is not your admin password that was
    emailed to you during the creation of your server, although you can
    use that password if you want to. Then, click **Next**</span>.

    ![2K8\_64R2\_ADDS(18).jpg](http://c0625232.cdn.cloudfiles.rackspacecloud.com/2K8_64R2_ADDS(18).jpg)


13. <span>On the Summary page, review your selections and then click
    **Next**.
    The installation begins</span>.

    ![2K8\_64R2\_ADDS(19).jpg](http://c0625232.cdn.cloudfiles.rackspacecloud.com/2K8_64R2_ADDS(19).jpg)


14. <span>If you want the server to restart automatically after the
    installation is completed, select the **Reboot on completion** check
    box</span>.

    ![2K8\_64R2\_ADDS(20).jpg](http://c0625232.cdn.cloudfiles.rackspacecloud.com/2K8_64R2_ADDS(20).jpg)


15. <span>If you did not select the **Reboot on completion** check box,
    click **Finish**<span> in the wizard</span>. Then, restart the
    server</span>.

    <img src="http://c0625232.cdn.cloudfiles.rackspacecloud.com/2K8_64R2_ADDS(21).jpg" alt="2K8_64R2_ADDS(21).jpg" width="460" height="435" />


16. <span>After a few minutes, reconnect to your server by using the
    Console in your Control Panel or RDP</span>.

17. <span>To log in, perform the following steps</span>:
        a.  <span>Click **Switch User**, and then click
    **Other User.**
        b**. ** </span><span>For the user, enter the full domain name
    that you chose, followed by a back slash and **Administrator** (for
    example, **Example.com\\Administrator**).</span>
        c.  <span>Enter the password that was emailed to you when you
    first built the server. If you changed your password
              for the local admin account to this server before you
    began the installation of Active Directory Domain Services, use
    that password.</span>
        d.  <span>Click the log in button</span>.

The installation of Active Directory Domain Services on your server is
complete.



