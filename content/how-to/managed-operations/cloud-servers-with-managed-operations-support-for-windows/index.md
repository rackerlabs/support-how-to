---
permalink: cloud-servers-with-managed-operations-support-for-windows
audit_date: '2018-09-04'
title: Cloud Servers with Managed Operations support for Windows
type: article
created_date: '2011-03-16'
created_by: David Hendler
last_modified_date: '2019-07-18'
last_modified_by: Cat Lookabaugh
product: Managed Operations
product_url: managed-operations
---

The Managed Operations service level provides support beyond the
Managed Infrastructure service level, including direct assistance
with resizes, snapshots, host machine issues, adding and removing
servers, and managing IP addresses. To ensure that you have a Fanatical
Experience, Rackspace provides support for
specific software and server configurations on Windows&reg; cloud servers
with Managed Operations support.

### Operating systems

The Managed Operations spheres of support include the following
operating systems for all Windows cloud servers:

- [Windows Server 2008 with Service Pack
 R2](https://technet.microsoft.com/library/dd349801)

- [Windows Server 2012 with Service Pack
 R2](https://technet.microsoft.com/en-US/windowsserver/hh534429)
 
For OnMetal Windows cloud servers, the Managed Operations spheres of support also includes the following
operating system:

- [Windows Server 2016](https://docs.microsoft.com/en-us/windows-server/windows-server)

**Note:** Detailed information about Linux&reg; support is located in [Linux Spheres of Support for Dedicated and Managed Operations](/support/how-to/linux-spheres-of-support-for-dedicated-and-managed-ops).

### Web servers

The Managed Operations service level supports the following types of web servers:

#### IIS 7, 7.5

|    | **Installation** | **Configuration** | **Troubleshooting** | **Monitoring** | **Patching** |
| --- | --- | --- | --- | --- | --- |
| [Web HTTP/HTTPS](https://www.iis.net/) |**Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
|[FTP](https://www.iis.net/) | **Yes** | **Yes** | **Yes** |**Yes** | **Yes** |

#### IIS 8, 8.5

|    | **Installation** | **Configuration** | **Troubleshooting** | **Monitoring** | **Patching** |
| --- | --- | --- | --- | --- | --- |
| [Web HTTP/HTTPS](https://www.iis.net/) |**Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
| [FTP](https://www.iis.net/) | **Yes** | **Yes** | **Yes** |**Yes** | **Yes** |

### Database servers

The Managed Operations service level supports the following types of database servers:

|    | **Installation** | **Configuration** | **Troubleshooting** | **Monitoring** | **Patching** |
| --- | --- | --- | --- | --- | --- |
| [SQL Server 2008 R2 (Standard and Web Edition)](https://www.microsoft.com/en-us/server-cloud/products/sql-server/) |**Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
| [SQL Server 2012 (Standard and Web Edition)](https://www.microsoft.com/en-us/server-cloud/products/sql-server/)| **Yes** |**Yes** | **Yes** | **Yes** | **Yes** |
| [SQL Server 2014 (Standard and Web Edition)](https://www.microsoft.com/en-us/server-cloud/products/sql-server/)| **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
| [MySQL](https://www.mysql.com/why-mysql/windows/) | **Yes** | No | No | **Yes** | No |

**Note:** Rackspace does not support Microsoft&reg; SQL Server&reg; Express 2008, 2012, and 2014.

### Programming languages

The Managed Operations service level supports the following programming languages:

|    | **Installation** | **Configuration** | **Troubleshooting** | **Monitoring** | **Patching** |
| --- | --- | --- | --- | --- | --- |
| [ASP](https://msdn.microsoft.com/en-us/library/aa286483.aspx) |**Yes** | **Yes** | **Yes** | **Yes** | **Yes**|
| [ASP.NET](https://www.asp.net/) | **Yes** | **Yes** |**Yes** | **Yes** | **Yes** |
| [PHP (Fast CGI)](https://www.php.net/) | **Yes** | **Yes** | No | No | No |

### Software firewall

The Managed Operations service level supports the following firewall software:

|    | **Installation** | **Configuration** | **Troubleshooting** |
| --- | --- | --- | --- |
| [Windows Firewall](https://windows.microsoft.com/en-us/windows-8/windows-firewall-from-start-to-finish)| **Yes** | **Yes**| **Yes** |

### FTP

The Managed Operations service level supports the following FTP tools:

|    | **Installation** | **Configuration** | **Troubleshooting** | **Monitoring** | **Patching** |
| --- | --- | --- | --- | --- | --- |
| [IIS 7.5 FTPS](https://www.microsoft.com/en-us/download/details.aspx?id=14045) |**Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
| [IIS 8.5 FTPS](https://technet.microsoft.com/en-us/library/hh831655.aspx)| **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |

### SMTP

The Managed Operations service level supports the following SMTP tool:

|    | **Installation** | **Configuration** | **Troubleshooting** | **Monitoring** | **Patching** |
| --- | --- | --- | --- | --- | --- |
| [IIS Outgoing Only](https://www.iis.net/) |**Yes** | **Yes** | **Yes** | **Yes** | No |

### Active Directory

Active Directory (AD) is not currently supported. Reach out to [Rackspace support](https://www.rackspace.com/en-us/support) to evaluate alternative solutions.


### Other packages

Although we don't support all technologies, we do offer reasonable-endeavor
support, which extends our support into offering alternative solutions.
Reasonable-endeavor support can include help from Rackspace partners and other
third-party services.

-   **Load balancing:** Support is provided through the use of Cloud
    Load Balancers.

-   **DNS:** The use of the Rackspace Cloud name servers for DNS
    is supported. Windows DNS is currently not supported.

-   **Exchange:** Exchange is not supported at this time.

-   **SharePoint:** SharePoint is not supported at this time.

-   **Terminal Services:** We will install the role and license.

-   **Cloud Files:** Integration with Cloud Files is supported by using the
    API; however, no development assistance with using the API is provided.

### End-of-life support dates

Rackspace makes every effort to align our support dates for operating
systems with the manufacturer's support dates. The following end-of-life
support dates are provided by the manufacturer and are subject to change.
If the manufacturer decides to shorten the support life of an
operating system, Rackspace might be forced to end support sooner than the
published date.

| Operating system name | End-of-life support date |
| --------------------- | ------------------------ |
| Windows Server 2008 R2 | January 14, 2020 |
| Windows Server 2012 R2 | January 10, 2023 |
