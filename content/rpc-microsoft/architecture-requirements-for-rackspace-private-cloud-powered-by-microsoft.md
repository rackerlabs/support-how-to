---
node_id: 4574
title: Architecture requirements for Rackspace Private Cloud powered by Microsoft
type: article
created_date: '2015-03-02'
created_by: Gerry Lecanu
last_modified_date: '2015-06-02'
last_modified_by: David Hendler
product: Rackspace Private Cloud Powered by Microsoft Cloud Platform
product_url: rpc-microsoft
---

To compete in the global economy and keep up with the pace of
innovation, organizations must improve their ability to quickly and
flexibly respond to changing business needs, improve efficiency, and
better manage costs.  Some ways to accomplish this include automation of
repeatable tasks, cross-platform interoperability, and the creation and
deployment of modern, self-service, and highly available applications
that can span data centers. The Microsoft Cloud Platform powered by
Rackspace helps you realize your data center transformation goals by
delivering enterprise-class capabilities including best-in-class
management of your Windows Server infrastructure and first-party
Microsoft workloads.

Rackspace has worked directly with Microsoft to design a product line
architecture (PLA) compliant cloud to help our customers develop and
implement private cloud infrastructures quickly while reducing
complexity and risk. The Microsoft Cloud Platform powered by Rackspace
provides a solution that combines Microsoft software, consolidated
guidance, and best-practice architecture with Rackspace&rsquo;s vast
experience providing Fanatical Support^&reg;^ hosting and supporting
solutions for compute, network, and storage architectures.

The Microsoft Private Cloud PLA uses the core capabilities of the
Microsoft Windows Server operating system, Hyper-V, and System Center to
deliver a private cloud infrastructure as a service offering. Following
are the key software features and components used for every
implementation hosted at Rackspace.

Cloud Platform Base Cloud
-------------------------

Base Cloud is a basic System Center 2012 R2 plus Windows Azure Pack that
allows for the minimum compliant Cloud Platform. It is composed of the
following applications and roles:

<div class="table-wrap">

<table style="width:100%;">
<colgroup>
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><strong>Application or role</strong></p></td>
<td align="left"><p><strong>VM name</strong></p></td>
<td align="left"><p><strong>Quantity</strong></p></td>
<td align="left"><p><strong>Software suite</strong></p></td>
<td align="left"><p><strong>vCPU</strong></p></td>
<td align="left"><p><strong>vRAM</strong></p></td>
<td align="left"><p><strong>vDisk</strong></p></td>
</tr>
<tr class="even">
<td align="left"><p>Microsoft SQL Server Standard Edition</p></td>
<td align="left"><p>DB</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>System Center</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>8 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Operations Manager</p></td>
<td align="left"><p>SCOM</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>System Center</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="even">
<td align="left"><p>Service Provider Foundation</p></td>
<td align="left"><p>SPF</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>System Center</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Virtual Machine Manager</p></td>
<td align="left"><p>VMM</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>System Center</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>8 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="even">
<td align="left"><p>Operations Manager Reporting Server</p></td>
<td align="left"><p>OMRP</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>System Center</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Orchestrator</p></td>
<td align="left"><p>OR</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>System Center</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="even">
<td align="left"><p>Service Reporting</p></td>
<td align="left"><p>SR</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>System Center</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Service Manager</p></td>
<td align="left"><p>SM</p></td>
<td align="left"><p>3</p></td>
<td align="left"><p>System Center</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="even">
<td align="left"><p>Library Server</p></td>
<td align="left"><p>LIB</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>System Center</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>1 TB</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Service Management Automation</p></td>
<td align="left"><p>SMA</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>Windows Azure Pack</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="even">
<td align="left"><p>Service Management Automation Reporting Worker</p></td>
<td align="left"><p>SMARW</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>Windows Azure Pack</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Management Portal for administrators</p></td>
<td align="left"><p>WAPADMIN</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>Windows Azure Pack</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="even">
<td align="left"><p>Management Portal for tenants</p></td>
<td align="left"><p>WAPTENANT</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>Windows Azure Pack</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Admin Authentication Site</p></td>
<td align="left"><p>WAPADMINAUTH</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>Windows Azure Pack</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="even">
<td align="left"><p>Admin API</p></td>
<td align="left"><p>WAPADMINAPI</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>Windows Azure Pack</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Tenant API</p></td>
<td align="left"><p>WAPTENANTAPI</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>Windows Azure Pack</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="even">
<td align="left"><p>Tenant Public API</p></td>
<td align="left"><p>WAPTENPUBAPI</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>Windows Azure Pack</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Tenant Authentication Site</p></td>
<td align="left"><p>WAPTENAUTH</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>Windows Azure Pack</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="even">
<td align="left"><p>Active Directory Domain Controller</p></td>
<td align="left"><p>DC</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>Windows Server</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>160 GB</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Remote Desktop Services</p></td>
<td align="left"><p>RD</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>Windows Server</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="even">
<td align="left"><p>Windows Server Update Services</p></td>
<td align="left"><p>WSUS</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>Windows Server</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>100 GB</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Active Directory Certificate Authority</p></td>
<td align="left"><p>PKI</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>Windows Server</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="even">
<td align="left"><p>Fileserver</p></td>
<td align="left"><p>FS</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>Windows Server</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>200 GB</p></td>
</tr>
</tbody>
</table>

</div>



The minimum system requirements to run the Base Cloud components are 60
vCPU, 136 GBs of RAM, and 3 TB of storage.  This workload is split
across two physical host servers that are configured in a failover
cluster.

Additional Cloud Platform components
------------------------------------

In addition to the Base Cloud offering, there are three optional add-on
services that you can use to enhance your Microsoft Cloud Platform at
Rackspace.  You can deploy one, two, or all three of these services.
Keep in mind that if you add any of them, the minimum required compute
and storage needs to account for the additional compute and storage
loads.

### Web Sites Cloud

Web Sites Cloud is a service that helps you provide a high-density,
scalable, shared web hosting platform for ASP.NET, PHP, and Node.js web
applications. The Web Sites Cloud service includes a customizable web
application gallery of open source web applications that integrate with
source control systems for custom-developed websites and applications.

With Microsoft SQL Server and MySQL Server, you can create the ideal
environment to leverage database as a service (DBaaS) for your company,
bringing it into the cloud era while maintaining private cloud security.
You can add one or more Microsoft SQL Server or MySQL Server instances
for tenants to deploy and use. Tenants use these databases with the Web
Sites Cloud service.

<div class="table-wrap">

<table style="width:100%;">
<colgroup>
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><strong>Application or role</strong></p></td>
<td align="left"><p><strong>VM name</strong></p></td>
<td align="left"><p><strong>Quantity</strong></p></td>
<td align="left"><p><strong>Software suite</strong></p></td>
<td align="left"><p><strong>vCPU</strong></p></td>
<td align="left"><p><strong>vRAM</strong></p></td>
<td align="left"><p><strong>vDisk</strong></p></td>
</tr>
<tr class="even">
<td align="left"><p>Management Server</p></td>
<td align="left"><p>WAPWEBMN01</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>Windows Azure Pack</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Controller</p></td>
<td align="left"><p>WAPWEBCN</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>Windows Azure Pack</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="even">
<td align="left"><p>Database</p></td>
<td align="left"><p>WAPWEBDB</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>Windows Azure Pack</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>300 GB</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Publisher</p></td>
<td align="left"><p>WAPWEBPUB</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>Windows Azure Pack</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="even">
<td align="left"><p>Fileserver</p></td>
<td align="left"><p>WAPWEBFS</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>Windows Azure Pack</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>100 GB</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Front End</p></td>
<td align="left"><p>WAPWEBFE</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>Windows Azure Pack</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="even">
<td align="left"><p>Shared Web Worker</p></td>
<td align="left"><p>WAPWEBWWS</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>Windows Azure Pack</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Reserved Worker Server</p></td>
<td align="left"><p>WAPWEBWR</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>Windows Azure Pack</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="even">
<td align="left"><p>SQL Server DBaaS</p></td>
<td align="left"><p>SQLCLOUD</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>Windows Azure Pack</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>8 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="odd">
<td align="left"><p>MySQL DBaaS</p></td>
<td align="left"><p>MYSQL</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>Windows Azure Pack</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>8 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
<tr class="even">
<td align="left"><p>App Controller</p></td>
<td align="left"><p>AC</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>System Center</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
</tbody>
</table>

</div>

The minimum system requirements to run the Web Sites Cloud components
are 24 vCPU, 56 GB of RAM, and 1 TB of storage.  This workload is in
addition to the Base Cloud system, which is split across two physical
host servers configured in a failover cluster.

### Service Bus

The Service Bus service provides reliable messaging services between
distributed applications. The Service Bus service includes queued and
topic-based publish and subscribe capabilities.

<div class="table-wrap">

<table style="width:100%;">
<colgroup>
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><strong>Application or role</strong></p></td>
<td align="left"><p><strong>VM name</strong></p></td>
<td align="left"><p><strong>Quantity</strong></p></td>
<td align="left"><p><strong>Software suite</strong></p></td>
<td align="left"><p><strong>vCPU</strong></p></td>
<td align="left"><p><strong>vRAM</strong></p></td>
<td align="left"><p><strong>vDisk</strong></p></td>
</tr>
<tr class="even">
<td align="left"><p>Service Bus</p></td>
<td align="left"><p>SB</p></td>
<td align="left"><p>1</p></td>
<td align="left"><p>Windows Azure Pack</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
</tbody>
</table>

</div>

The minimum system requirements to run the Service Bus component are 2
vCPU, 4 GB of RAM, and 60 GB of storage.  This workload is in addition
to the Base Cloud system, which is split across two physical host
servers configured in a failover cluster.

### Active Directory Federation Services

Active Directory Federation Services (ADFS) provides simplified, secured
identity federation and web single sign-on (SSO) capabilities for end
users who want to access applications within an ADFS-secured enterprise,
in federation partner organizations, or in the cloud.

<div class="table-wrap">

<table style="width:100%;">
<colgroup>
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><strong>Application  or role</strong></p></td>
<td align="left"><p><strong>VM name</strong></p></td>
<td align="left"><p><strong>Quantity</strong></p></td>
<td align="left"><p><strong>Software suite</strong></p></td>
<td align="left"><p><strong>vCPU</strong></p></td>
<td align="left"><p><strong>vRAM</strong></p></td>
<td align="left"><p><strong>vDisk</strong></p></td>
</tr>
<tr class="even">
<td align="left"><p>Active Directory Federation Services</p></td>
<td align="left"><p>ADFS</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>Windows Azure Pack</p></td>
<td align="left"><p>2</p></td>
<td align="left"><p>4 GB</p></td>
<td align="left"><p>60 GB</p></td>
</tr>
</tbody>
</table>

</div>

The minimum system requirements to run the ADFS component are 4 vCPU, 8
GB of RAM, and 120 GB of storage.  This workload is in addition to the
Base Cloud system, which is split across two physical host servers
configured in a failover cluster.



