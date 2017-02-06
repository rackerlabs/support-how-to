---
permalink: linux-spheres-of-support/
audit_date: '2017-01-17'
title: Linux Spheres of Support
type: article
created_date: '2017-01-17'
created_by: Alex xJuarez
last_modified_date: '2017-02-05'
last_modified_by: Kevin Grigsby
product: Fanatical Support
product_url: dedicated-hosting
---

Our Linux Spheres of Support outlines our Fanatical Support® of software and server configurations for machines (virtual and physical) running a supported Linux operating system.


### Operating systems

Fanatical Support® for Linux includes the following operating systems.

- CentOS 7
- CentOS 6
- Debian 8 (Jessie) <sup>1</sup>
- Debian 7 (Wheezy) <sup>1</sup>
- Red Hat Enterprise Linux 7
- Red Hat Enterprise Linux 6
- Ubuntu 16.04 LTS (Xenial Xerus)
- Ubuntu 14.04 LTS (Trusty Tahr)

**Note:** Rackspace makes every effort to align our support dates for operating systems with the manufacturer's support dates. If a manufacturer decides to shorten the support life of an operating system, Rackspace might be forced to end support sooner than originally anticipated. For full details on support life see [Rackspace EOL Terms Page](https://www.rackspace.com/information/legal/eolterms)

<sup>1</sup>Only supported in Managed Cloud


### Web Servers

Fanatical Support® for Linux supports the following types of web servers:

|    | **Installation** | **Configuration** | **Troubleshooting** | **Patching** |
| --- | --- | --- | --- | --- | --- |
| **Apache** | **Yes** | **Yes** | **Yes** | **Yes** |
| **NGINX** | **Yes** | **Yes** | **Yes** | **Yes** |

**Note:** Not all add on modules are supported. Please contact Rackspace Support for further information.


### Database Servers

Fanatical Support® for Linux supports the following types of database servers:

|    | **Installation** | **Configuration** | **Troubleshooting** | **Patching** | 
| --- | --- | --- | --- | --- | --- | --- | --- |
| **MySQL / MariaDB** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Percona** | **Yes** | **Yes** | **Yes** | **Yes** |

**Note:** Linux OS Administrators handle basic database support topics, advanced topics may require DBA support assistance. PostgresSQL, MongoDB, and Oracle are not supported by Linux OS Administrators. The Rackspace DBA team supports Oracle & MySQL; PostgreSQL requests can be considered on a case-by-case basis. The Rackspace DBA team is available for support consultation on database issues, fees may apply.


### File Servers

Fanatical Support® for Linux supports the following File Servers:

|   | **Installation** | **Configuration** | **Modules** | **Patching** |
| --- | --- | --- | --- | --- |
| **Vsftpd** | **Yes** | **Yes** | **Yes** | **Yes** |
| **NFS** | **Yes** | **Yes** | **Yes** | **Yes** |
| **CIFS (client)** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Lsyncd** | **Yes** | **Yes** | **Yes** | **Yes** |

**Note:** While Lysncd is not strictly a file server technology, we commonly use it at Rackspace in place of NFS services on cloud servers. Bidirectional data transfer with lsyncd is unsupported.


### Mail Servers

The Managed Operations service supports the following Mail Servers:

|    | **Installation** | **Configuration** | **Troubleshooting** | **Patching** |
| --- | --- | --- | --- | --- | --- |
| **Postfix** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Dovecot** | **Yes** | **Yes** | **Yes** | **Yes** |

**Note:** By their nature, cloud servers have ephemeral IP addresses which most email providers blacklist. Sending emails from a cloud server must go through a third party such as  [**Mailgun**](https://www.mailgun.com).


### Application Servers

Fanatical Support® for Linux supports the following application servers:

|   | **Installation** | **Configuration** | **Modules** | **Patching** |
| --- | --- | --- | --- | --- |
| **PHP-FPM** | **Yes** | **Yes** | **Yes** | **Yes** |


### Authentication

Fanatical Support® for Linux supports the following authentication tools:

|   | **Installation** | **Configuration** | **Modules** | **Patching** |
| --- | --- | --- | --- | --- |
| **SSSD-AD** | **Yes** | **Yes** | **Yes** | **Yes** |
| [**Duo 2FA**](https://duo.com/) | **Yes** | **Yes** | **Yes** | **Yes** |


### Caching

Fanatical Support® for Linux supports the following caching tools:

|    | **Installation** | **Configuration** | **Troubleshooting** | **Patching** |
| --- | --- | --- | --- | --- |
| **Memcached** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Redis** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Varnish** | **Yes** | **Yes** | **Yes** | **Yes** |

**Note:** Rackspace does not support VCL customization for Varnish.


### Clustering (Red Hat Cluster Suite)

Fanatical Support® for Linux supports the following Services on RHCS:

|    | **Installation** | **Configuration** | **Troubleshooting** | **Patching** |
| --- | --- | --- | --- | --- |
| **MySQL / MariaDB / Percona** | **Yes** | **Yes** | **Yes** | **Yes** |
| **NFS** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Redis** | **Yes** | **Yes** | **Yes** | **Yes** |

**Note:** RHCS is only supported on physical hardware platforms (not including OnMetal offerings). Oracle on RHCS is supported in tandem by the DBA team and OS Admins.


### Control Panels

Fanatical Support® for Linux supports the following control panels:

|    | **Installation** | **Configuration** | **Troubleshooting** | **Patching** |
| --- | --- | --- | --- | --- |
| [**Plesk**](https://www.plesk.com/) | **Yes** | **Yes** | **Yes** | **Yes** |

**Note:** Only supported on dedicated RHEL/CentOS platforms.


### Backups

Fanatical Support® for Linux supports the following backup software:

|    | **Installation** | **Configuration** | **Troubleshooting** | **Patching** |
| --- | --- | --- | --- | --- |
| **Holland** | **Yes** | **Yes** | **Yes** | **Yes** | 

**Note:** Holland is a publicly available solution leveraged by Rackspac for the backup of databases, consult [http://hollandbackup.org/](http://hollandbackup.org/). Rackspace currently only supports MySQL-like database options (MariaDB / Percona) using mysqldump and mysql-lvm only. For issues with unsupported plugins like XtraBackup, our DBA team is available for further consultation.


### Anti-Virus

Fanatical Support® for Linux supports the following anti-virus software:

|    | **Installation** | **Configuration** | **Troubleshooting** | **Patching** |
| --- | --- | --- | --- | --- |
| **Rackspace Managed Anti-Virus** | **Yes** | **Yes** | **Yes** | **Yes** | 

**Note:** Rackspace requires the use of anti-virus software on any configurations utilizing domain controllers and to assist in maintaining PCI compliance. 


### Other packages

Although we don’t support all technologies, we do offer reasonable endeavor support, which extends our support into
offering alternative solutions. Reasonable endeavor support can include help from Rackspace partners and other third-party
services.

-  **API support**:  Managed Operations offers all the support functions listed in the [developer guides](https://developer.rackspace.com/).
-  **Cloud Files**:  Integration with Cloud Files is supported via the API, however no development support is offered to help utilize Cloud Files via the API.
-  **DNS**: Rackspace supports the use of the public Rackspace nameservers for DNS.  Bind/named are *not* supported at this time.
-  **Firewall**: Support is provided for iptables, Ubuntu ufw, and fail2ban.
-  **Load Balancing**: Cloud Load Balancers are supported by Fanatical Support® for Linux.


### Third Party Repositories

Fanatical Support® for Linux will, under reasonable endeavors and without warranty, configure repository access and install any packages from the following list of supported repositories. Some of the below repositories are also mirrored local to our data centers.

- [EPEL](http://fedoraproject.org/wiki/EPEL)
- [IUS](https://ius.io/)
- [MariaDB (vendor)](https://downloads.mariadb.org/mariadb/repositories/#mirror=osuosl)
- [MySQL (vendor)](https://dev.mysql.com/downloads/repo/)
- [Nginx (vendor)](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/)
- [Percona (vendor)](https://www.percona.com/doc/percona-server/LATEST/installation.html#installing-percona-server-from-repositories)
- [Varnish (vendor)](https://www.varnish-cache.org/releases/install_redhat.html)
