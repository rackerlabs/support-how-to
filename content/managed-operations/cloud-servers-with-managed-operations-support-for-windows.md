---
node_id: 514
title: Cloud Servers with Managed Operations support for Windows
type: article
created_date: '2011-03-16'
created_by: David Hendler
last_modified_date: '2016-01-13'
last_modified_by: Nate Archer
product: Managed Operations
product_url: managed-operations
---

<p>Managed Operations provides support beyond Managed Infrastructure, including direct assistance with resizes, snapshots, host machine issues, adding and removing servers, and managing IP addresses.&nbsp;To ensure Fanatical Support, Rackspace provides support for specific software and server configurations on Cloud Servers with Managed Operations.</p>

<h2>Operating Systems</h2>

<p>The Managed Operations spheres of support include the following operating systems for Windows cloud servers:</p>

<ul>
	<li>
	<p><a href="http://technet.microsoft.com/library/dd349801">Windows Server 2008 with Service Pack R2</a></p>
	</li>
	<li>
	<p><a href="http://technet.microsoft.com/en-US/windowsserver/hh534429">Windows Server 2012</a></p>
	</li>
</ul>

<p><strong>Note:</strong> Detailed information on Linux support can be found in <a href="/how-to/cloud-servers-with-managed-operations-support-for-linux">Cloud Servers with Managed Operations support for Linux</a>.</p>

<h3>IIS 7.5</h3>

|  | Installation | Configuration | Troubleshooting | Monitoring | Patching |
| --- | ------------ | ------------- | --------------- | ---------- | -------- |
| [Web HTTP/HTTPS](http://www.iis.net/) | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
| [FTP](http://www.iis.net/) | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |

<h3>IIS 8</h3>

|  | Installation | Configuration | Troubleshooting | Monitoring | Patching |
| --- | ------------ | ------------- | --------------- | ---------- | -------- |
| [Web HTTP/HTTPS](http://www.iis.net/) | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
| [FTP](http://www.iis.net/) | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |

<h3>Database Servers</h3>

|  | Installation | Configuration | Troubleshooting | Monitoring | Patching |
| --- | ------------ | ------------- | --------------- | ---------- | -------- |
| [SQL Server 2008 R2](http://www.microsoft.com/en-us/server-cloud/products/sql-server/) | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
| [SQL Server 2012 (Standard and Web Edition)](http://www.microsoft.com/en-us/server-cloud/products/sql-server/) | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
| [SQL Server 2014](http://www.microsoft.com/en-us/server-cloud/products/sql-server/) | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
| [MySQL](http://www.mysql.com/why-mysql/windows/)  | **Yes** | No | No | **Yes** | No |

<p><strong>Note:&nbsp;</strong>Rackspace does not support SQL express 2008, 2012, and 2014.</p>

<h3>Programming Languages</h3>

|  | Installation | Configuration | Troubleshooting | Monitoring | Patching |
| --- | ------------ | ------------- | --------------- | ---------- | -------- |
| [ASP](https://msdn.microsoft.com/en-us/library/aa286483.aspx) | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
| [ASP.NET](http://www.asp.net/) | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
| [PHP (Fast CGI)](http://www.php.net/) | **Yes** | **Yes** | No | No | No |

<h3>Software Firewall</h3>

|  | Installation | Configuration | Troubleshooting |
| --- | ------------ | ------------- | --------------- |
| [Windows Firewall](http://windows.microsoft.com/en-us/windows-8/windows-firewall-from-start-to-finish) | **Yes** | **Yes** | **Yes** |

<h3>FTP</h3>

|  | Installation | Configuration | Troubleshooting | Monitoring | Patching |
| --- | ------------ | ------------- | --------------- | ---------- | -------- |
| [Windows FTP 7.5](https://www.microsoft.com/en-us/download/details.aspx?id=14045) | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
| [IIS 8 FTP](https://technet.microsoft.com/en-us/library/hh831655.aspx) | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
| [FileZilla](https://filezilla-project.org/) | **Yes** | **Yes** | **Yes** | **Yes** | No |

<h3>SMTP</h3>

|  | Installation | Configuration | Troubleshooting | Monitoring | Patching |
| --- | ------------ | ------------- | --------------- | ---------- | -------- |
| [IIS Outgoing Only](http://www.iis.net/) | **Yes** | **Yes** | **Yes** | **Yes** | No |

<h3>Active Directory (US Only)</h3>

| Supported | Windows 2008  | Windows 2012 |
| --------- | ------------- | ------------ |
| Set up AD Controller | **Yes** | **Yes** |
| Add Users to AD | **Yes** | **Yes** |
| Establish AD Trust to customer's on-premises AD (their DC) using [RackConnect](https://www.rackspace.com/cloud/hybrid/rackconnect) | **Yes** | **Yes** |
| Establish AD Trust between customer's dedicated and cloud environments, hosted at Rackspace | **Yes** | **Yes** |
| Establish AD Trust to Rackspace Intensive domain | No | No |
| Replication | **Yes** | **Yes** |
| Authentication for Web | **Yes** | **Yes** |
| Internal DNS for Active Directory | **Yes** | **Yes** |
| LDAP | **Yes** | **Yes** |
| Application partitions when using other Rackspace Application Services (for example, SharePoint and Exchange) | **Yes** | **Yes** |
| Development for Federated Services | No | No |
| Development for Application integration | No | No |
| Snapshots or Backups of Domain Controller | No | No |
| Group Policy Objects | No | No |
| Distributed File System (DFS) | No | No |
| RackConnect to Dedicated environment | **Yes** | **Yes** |
| Multiple Domain Controllers	 | **Yes** | **Yes** |
| Rights Management | No | No |
| Federated Services | No | No |
| CA Services | No | No |

<h2>Other Packages</h2>

<p><span>While we do not support all technologies, we do offer reasonable endeavor support which extends our support into offering alternative solutions. &nbsp;The reasonable endeavor support can i</span><span>nclude</span><span>&nbsp;help from Rackspace partners and other third party services.</span></p>

<ul>
	<li>
	<p><strong>Load Balancing</strong> - Support is provided through the use of Cloud Load Balancers.</p>
	</li>
	<li>
	<p><strong>Email </strong>- Support is provided through Rackspace Email and using IIS SMTP on the server. Cloud Servers with a Managed Service Level are pre-configured to use our mail relay service Mailgun to ensure reliable mail delivery. &nbsp;The first 50,000 emails sent each month are free, and your mail package can be upgraded if higher volume is expected. For more details see our <a href="http://www.mailgun.com/rackspace" target="_blank">Mailgun Rackspace pricing page</a>.</p>
	</li>
	<li>
	<p><strong>DNS </strong>- The use of the Rackspace Cloud nameservers for DNS is supported. Windows DNS is currently not supported.</p>
	</li>
	<li>
	<p><strong>Exchange</strong>&nbsp;- Exchange is not supported at this time.</p>
	</li>
	<li>
	<p><strong>SharePoint</strong>&nbsp;- SharePoint is not supported at this time.</p>
	</li>
	<li>
	<p><strong>Terminal Services</strong> - We will install the role and license.</p>
	</li>
	<li>
	<p><strong>Cloud Files -</strong>&nbsp;Integration with Cloud Files is supported via the API, however no development assistance will be offered in utilization via the API.</p>
	</li>
</ul>

<p>&nbsp;</p>

<h2>End of life support dates</h2>

<p>Rackspace makes every effort to align our support dates for operating systems with the manufacturer's support dates. The 'end of life' support dates listed are provided by the manufacturer and are subject to change. Should the manufacturer decide to shorten the support life of an operating system, Rackspace may be forced to end support sooner than the published date.</p>

| Operating System Name | End of Life Support Date |
| --------------------- | ------------------------ |
| Windows Server 2008 R2 | January 14, 2020 |
| Windows Server 2012 R2 | January 10, 2023 |
