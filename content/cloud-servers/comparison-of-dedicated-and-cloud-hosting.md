---
node_id: 1292
title: Comparison of dedicated and cloud hosting
type: article
created_date: '2012-02-21'
created_by: Rackspace Support
last_modified_date: '2016-01-15'
last_modified_by: Stephanie Fillmon
product: Cloud Servers
product_url: cloud-servers
---

Rackspace&reg; offers both dedicated and cloud hosting solutions. Deciding
which is best for your particular scenario can be difficult. Following
are important features to consider when choosing a hosting solution for
your business.



<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Product or Service</th>
<th align="left">Dedicated</th>
<th align="left">Cloud Managed Operations service level</th>
<th align="left">Cloud Managed Infrastructure service level</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Support level</p></td>
<td align="left"><p>Dedicated hosting includes unlimited Fanatical Support for all supported products, services, and software.</p></td>
<td align="left"><p>The Cloud Managed Operations service level includes support of the datacenter environment, host server hardware, and Internet connectivity.</p>
<p>Managed Operations support also gives Rackspace employees direct server access to perform troubleshooting and configuration of supported applications for <a href="/how-to/cloud-servers-with-managed-operations-support-for-linux">Linux</a> and <a href="/how-to/cloud-servers-with-managed-operations-support-for-windows">Windows</a>.</p></td>
<td align="left"><p>The Cloud Managed Infrastructure service level includes support of datacenter environment, host server hardware, and Internet connectivity only.</p>
<p>Rackspace employees are prohibited from logging in to customers' servers to provide systems administration support.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Firewall</p></td>
<td align="left"><p>Dedicated firewalls are available as an option, and are a strongly recommended security precaution.</p></td>
<td align="left"><p>Optional dedicated firewall if using RackConnect.</p></td>
<td align="left"><p>Optional dedicated firewall if using RackConnect.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Monitoring</p></td>
<td align="left"><p>RackWatch monitoring is included and is enabled by default for PING service checks. Upon request, six additional service checks and one free URL monitor can be configured.</p></td>
<td align="left"><p>Managed Operations includes several checks and alerts through the Cloud Monitoring service. Support helps you with the creation and configuration of monitoring checks.</p>
<p> </p></td>
<td align="left"><p>Monitoring is not preconfigured for Managed Infrastructure, but Cloud Monitoring can be manually set up after server creation. There is no charge for the Cloud Monitoring service.</p>
<p>Without a third-party monitoring solution or use of the Cloud Monitoring service, you are not notified when individual services on your cloud server stop working. You are notified only if the host server where your cloud server is located is impacted.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Backups</p></td>
<td align="left"><p>Managed Backup is an optional service that captures file-level server images. There is a backup limitation of 1.5 TB per server unless you are using the optional High Capacity Backup service.  Database and Exchange Backup agents are available for an additional charge.  Service extends to database flat file dumps and maintenance plans. </p></td>
<td align="left"><p>The file-level Cloud Backup service is available to Managed Infrastructure customers for the price of storage on Cloud Files and any bandwidth used if backup data is sent between regions..</p>
<p>Snapshots are an alternative backup approach at the system level.  Daily snapshot scheduling is not enabled by default but can be manually configured. Customers should perform database backups before creating an image.</p></td>
<td align="left"><p>Our file-level Cloud Backup service is available to Cloud Servers for the price of storage on Cloud Files and any bandwidth used if backup data is sent between regions.</p>
<p>Cloud Server snapshot images are an alternative approach at the system level. Customers should perform database backups before creating an image.</p>
<p>Daily snapshot scheduling is not enabled by default and can be manually configured when the server is created.</p>
<p>Server snapshot images are stored on Cloud Files.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Bandwidth</p></td>
<td align="left"><p>Dedicated servers include a specific amount of bandwidth.</p>
<p>Additional bandwidth is available at prepaid rates (bandwidth overage rates apply if your subscription is exceeded).</p></td>
<td align="left"><p>Outgoing bandwidth is not included unless your solution includes RackConnect. If the server is set up with RackConnect, the cloud servers can consume any available bandwidth included in the dedicated configuration.</p>
<p>If the server is not set up with RackConnect, you are charged for outgoing bandwidth only.</p></td>
<td align="left"><p>Outgoing bandwidth is not included unless your solution includes RackConnect. If the server is set up with RackConnect, the cloud servers can consume any available bandwidth included in the dedicated configuration.</p>
<p>If the server is not set up with RackConnect, you are charged only for outgoing bandwidth.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Operating system availability</p></td>
<td align="left"><p>Red Hat Enterprise Linux</p>
<p>CentOS</p>
<p>Windows Server</p></td>
<td align="left"><p>Ubuntu</p>
<p>Debian</p>
<p>Red Hat Enterprise Linux</p>
<p>CentOS</p>
<p>Windows Server</p></td>
<td align="left"><p><span style="text-decoration: underline;">Linux distributions</span></p>
<p>Arch</p>
<p>CentOS</p>
<p>CoreOS</p>
<p>Debian</p>
<p>Fedora</p>
<p>Gentoo</p>
<p>openSUSE</p>
<p>Red Hat Enterprise Linux</p>
<p>Scientific Linux</p>
<p>Ubuntu<br />
<br />
</p>
<p><span style="text-decoration: underline;">Other operating systems</span></p>
<p>FreeBSD</p>
<p>Windows Server</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Ticketing system, control panel</p></td>
<td align="left"><p><a href="http://my.rackspace.com">My.Rackspace.com</a></p></td>
<td align="left"><p><a href="https://mycloud.rackspace.com">Cloud Control Panel</a> and API Access</p>
<p>If your server is set up with RackConnect or linked to managed Dedicated services, you still use My.Rackspace.com. However, My.Rackspace.com does not replace the Cloud Control Panel for managing Cloud services.</p></td>
<td align="left"><p><a href="https://mycloud.rackspace.com">Cloud Control Panel</a> and API</p>
<p>If you are using RackConnect, you can also leverage My.Rackspace.com to manage your Cloud services.</p></td>
</tr>
</tbody>
</table>



