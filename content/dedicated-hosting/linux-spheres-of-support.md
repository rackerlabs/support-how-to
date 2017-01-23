---
permalink: linux-spheres-of-support/
audit_date: '2017-01-17'
title: Linux Spheres of Support
type: article
created_date: '2017-01-17'
created_by: Alex xJuarez
last_modified_date: '2017-01-22'
last_modified_by: Kevin Grigsby
product: Fanatical Support
product_url: dedicated-hosting
---

Our Linux Spheres of Support outlines our Fanatical Support® of software and server configurations for machines (virtual and physical) running a supported Linux operating system.


### Operating systems

Fanatical Support® for Linux includes the following operating systems.

- CentOS 7
- CentOS 6
- Debian 8 (Jessie) <sup>2</sup>
- Debian 7 (Wheezy) <sup>2</sup>
- Red Hat Enterprise Linux 7
- Red Hat Enterprise Linux 6
- Ubuntu 16.04 LTS (Xenial Xerus)
- Ubuntu 14.04 LTS (Trusty Tahr)
- Ubuntu 12.04 LTS (Precise Pangolin)

**Note:** Rackspace makes every effort to align our support dates for operating systems with the manufacturer's support dates. If a manufacturer decides to shorten the support life of an operating system, Rackspace might be forced to end support sooner than originally anticipated. For full details on support life see [Rackspace EOL Terms Page](https://www.rackspace.com/information/legal/eolterms)

<sup>1</sup>All new kicks are 64-bit architecture only

<sup>2</sup>Only supported in Managed Cloud

### Web Servers

Fanatical Support® for Linux supports the following types of web servers:

|    | **Installation** | **Configuration** | **Troubleshooting** | **Patching** |
| --- | --- | --- | --- | --- | --- |
| [**Apache**](http://httpd.apache.org/) | **Yes** | **Yes** | **Yes** | **Yes** |
| [**NGINX**](http://nginx.net) | **Yes** | **Yes** | **Yes** | **Yes** |

**Note:** Not all add on modules are supported. Please contact Rackspace Support for further information.


### Database Servers

Fanatical Support® for Linux supports the following types of database servers:

|    | **Installation** | **Configuration** | **Troubleshooting** | **Patching** | 
| --- | --- | --- | --- | --- | --- | --- | --- |
| [**MySQL/**](http://www.mysql.com) [**MariaDB**](http://mariadb.org)<sup>1</sup> | **Yes** | **Yes** | **Yes** | **Yes** |
| [**Percona**](https://www.percona.com) | **Yes** | **Yes** | **Yes** | **Yes** |

**Note:** PostgresSQL, MongoDB, and Oracle are not supported by Linux OS Administrators. Oracle & MySQL are supported by the DBA team and PostgreSQL requests can be considered on a case-by-case basis, but no support guarantees are offered at this time. The Rackspace DBA team is available for support consultation on database issues and Database Services are available to customers for a fee.

<sup>1</sup>MariaDB is supported for Red Hat Enterprise Linux 7 and CentOS 7

<sup>2</sup>Only Master/Slave replication is supported


### File Servers

Fanatical Support® for Linux supports the following File Servers:

|   | **Installation** | **Configuration** | **Modules** | **Patching** |
| --- | --- | --- | --- | --- |
| [**Vsftpd**](https://security.appspot.com/vsftpd.html) | **Yes** | **Yes** | **Yes** | **Yes** |
| [**ProFTPD**](http://www.proftpd.org/) | **Yes** | **Yes** | **Yes** | **Yes** |
| [**NFS**](http://linux-nfs.org/wiki/index.php/Main_Page) | **Yes** | **Yes** | **Yes** | **Yes** |
| [**CIFS (client)**](https://wiki.samba.org/index.php/LinuxCIFS_utils) | **Yes** | **Yes** | **Yes** | **Yes** |
| [**Lsyncd**](https://axkibe.github.io/lsyncd/) | **Yes** | **Yes** | **Yes** | **Yes** |

**Note:** While Lysncd is not strictly a file server technology, we commonly use it at Rackspace in place of NFS services on cloud servers due to network. Bidirectional data transfer with lsyncd is unsupported.


### Mail Servers

The Managed Operations service supports the following Mail Servers:

|    | **Installation** | **Configuration** | **Troubleshooting** | **Patching** | **Notes** |
| --- | --- | --- | --- | --- | --- |
| [**Postfix**](http://www.postfix.org/) | **Yes** | **Yes** | **Yes** | **Yes** | **Default for El6+, Ubuntu, Debian** |
| [**Dovecot**](https://www.dovecot.org/) | **Yes** | **Yes** | **Yes** | **Yes** | **Default for El5.x** |
| [**Qmail**](http://www.qmail.org/top.html) | **Yes** | **Yes** | **Yes** | **Yes** | **Plesk Servers less than 10.x Only** |
| [**Courier**](http://www.courier-mta.org/) | **Yes** | **Yes** | **Yes** | **Yes** | **Plesk Servers 10.x forward Only** |

**Note:** Rackspace cloud servers only support outgoing email due to blacklisting of our cloud IP address blocks. If you only need a mail server to send outgoing email, [**MailGun**](https://www.mailgun.com) may be a good option.


### Application Servers

Fanatical Support® for Linux supports the following application servers:

|   | **Installation** | **Configuration** | **Modules** | **Patching** |
| --- | --- | --- | --- | --- |
| [**PHP-FPM**](https://php-fpm.org/) | **Yes** | **Yes** | **Yes** | **Yes** |


### Authentication

Fanatical Support® for Linux supports the following authentication tools:

|   | **Installation** | **Configuration** | **Modules** | **Patching** | **Notes** |
| --- | --- | --- | --- | --- | --- |
| [**SSSD-AD**](https://fedorahosted.org/sssd/) | **Yes** | **Yes** | **Yes** | **Yes** | **SSSD-AD is the preferred solution over legacy LDAP or Winbind** |
| [**Duo 2FA**](https://duo.com/) | **Yes** | **Yes** | **Yes** | **Yes** | **Supported for SSH with passwords** |

**Note:** Legacy LDAP/Winbind clients continue to receive support


### Caching

Fanatical Support® for Linux supports the following caching tools:

|    | **Installation** | **Configuration** | **Troubleshooting** | **Patching** |
| --- | --- | --- | --- | --- |
| [**Memcached**](http://memcached.org) | **Yes** | **Yes** | **Yes** | **Yes** |
| [**Redis**](https://redis.io/) | **Yes** | **Yes** | **Yes** | **Yes** |
| [**Varnish**](http://varnish-cache.org)<sub>1</sub> | **Yes** | **Yes** | **Yes** | **Yes** |

<sub>1</sub>Rackspace does not support VCL customization for Varnish


### Clustering (Red Hat Cluster Suite)

Fanatical Support® for Linux supports the following Services on RHCS:

|    | **Installation** | **Configuration** | **Troubleshooting** | **Patching** |
| --- | --- | --- | --- | --- |
| [**MySQL**]()/[**MariaDB**](http://mariadb.org)/[**Percona**](https://www.percona.com) | **Yes** | **Yes** | **Yes** | **Yes** |
| [**NFS**](http://linux-nfs.org/wiki/index.php/Main_Page) | **Yes** | **Yes** | **Yes** | **Yes** |
| [**Redis**](https://redis.io/) | **Yes** | **Yes** | **Yes** | **Yes** |

**Note:** RHCS is only supported on physical hardware platforms (not including OnMetal offerings). Oracle on RHCS is supported by the DBA team and OS Admins will support the cluster aspect of that service.

**Note:** Please note that EL7 PCS Clusters are not yet supported and that all cluster builds are still being built on EL6.

**Note:** Restrictions around the clustered services are the same as their restrictions in the standard support sections.

### Control Panels

Fanatical Support® for Linux supports the following control panels:

|    | **Installation** | **Configuration** | **Troubleshooting** | **Patching** |
| --- | --- | --- | --- | --- |
| [**Plesk**](https://www.plesk.com/)<sub>1</sub> | **Yes** | **Yes** | **Yes** | **Yes** |
| [**PHPMyAdmin**](https://www.phpmyadmin.net/) | **Yes** | **Yes** | **Yes** | **Yes** |

<sub>1</sub>Unsupported on Ubuntu/Cloud offerings at this time


### Monitoring

Fanatical Support® for Linux supports the following monitoring solutions:

|    | **Installation** | **Configuration** | **Troubleshooting** | **Patching** |
| --- | --- | --- | --- | --- |
| [**Munin**](http://munin-monitoring.org/) | **Yes** | **Yes** | **Yes** | **Yes** |
| [**New Relic**](https://newrelic.com/partner/rackspace) | **Yes** | **Yes** | **Yes** | **Yes** |

**Note:** Third party plugins are not supported on any monitoring configuration

**Note:** Rackspace Monitoring and Additional Service Level specific offerings are not mentioned in the above. Please contact your support team for further information about internal monitoring offerings that may be included at no cost.


### Programming languages

Fanatical Support® for Linux supports the following programming languages:

|   | **Installation** | **Configuration** | **Limited Troubleshooting** | **Patching** |
| --- | --- | --- | --- | --- |
| [**PHP**](http://www.php.net) | **Yes** | **Yes** | **Yes** | **Yes** |
| [**Java**](http://openjdk.java.net/)<sup>1</sup> | **Yes** | No | **Yes** | **Yes** |

**Note:** Support for programming languages is limited to installation and does not include assistance with code or add-on
frameworks like Ruby on Rails. For any available programing language, Rackspace will support installation from supported channels and limited troubleshooting to validate the installations functionality. In addition Rackspace only supports installation of modules from OS channels and repos.


### Security

Fanatical Support® for Linux supports the following security software tools:

|    | **Installation** | **Configuration** | **Troubleshooting** | **Patching** |
| --- | --- | --- | --- | --- |
| [**Iptables**](http://www.netfilter.org/projects/iptables/)<sub>1</sub> | **Yes** | **Yes** | **Yes** | **Yes** |
| [**UFW**](https://wiki.ubuntu.com/UncomplicatedFirewall)<sub>2</sub> | **Yes** | **Yes** | **Yes** | **Yes** |
| [**Firewalld**](http://www.firewalld.org/)<sub>2</sub> | **Yes** | **Yes** | **Yes** | **Yes** |
| [**Fail2ban**](http://www.fail2ban.org/wiki/index.php/Main_Page)<sub>3</sub> | **Yes** | **Yes** | **Yes** | **Yes** |

**Note:** Customers needing additional security support may consult the [Rackspace Managed Security Team](https://www.rackspace.com/managed-security-services)

**Note:** A dedicated Managed Hardware Firewall is still the standard supported solution for server network security.

<sub>1</sub>Required for RCv2, Recommended Software Firewall

<sub>2</sub>Disabled by default on dedicated kicks; iptables recommended

<sub>3</sub>Installed from EPEL repositories


### Version Control

Fanatical Support® for Linux supports the following version control clients:

|    | **Installation** | **Configuration** | **Troubleshooting** | **Patching** |
| --- | --- | --- | --- | --- |
| [**Subversion (client)**](https://subversion.apache.org/packages.html) | **Yes** | **Yes** | **Yes** | **Yes** |
| [**Git (client)**](https://git-scm.com/download/linux) | **Yes** | **Yes** | **Yes** | **Yes** |


### Backups

Fanatical Support® for Linux supports the following backup software:

|    | **Installation** | **Configuration** | **Troubleshooting** | **Patching** |
| --- | --- | --- | --- | --- |
| [**Holland**](https://git-scm.com/download/linux) | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |

**Note:** Holland is a publicly available, internally developed and maintained tool for the backup of databases. Consult [http://hollandbackup.org/](http://hollandbackup.org/) Rackspace currently only supports MySQL-like database options (MariaDB/Percona) using mysqldump and mysql-lvm only. For issues with unsupported plugins like XtraBackup our DBA team is available for further information.


### Anti-Virus

Fanatical Support® for Linux supports the following anti-virus software:

|    | **Installation** | **Configuration** | **Troubleshooting** | **Patching** |
| --- | --- | --- | --- | --- |
| **Sophos (Managed Anti-Virus)** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |

**Note:** Rackspace requires the use of anti-virus software on any configurations utilizing domain controllers and to assist in maintaining PCI compliance. If you are interested in using Sophos as an anti-virus solution please contact Rackspace for further information.


### Other packages

Although we don’t support all technologies, we do offer reasonable endeavor support, which extends our support into
offering alternative solutions. Reasonable endeavor support can include help from Rackspace partners and other third-party
services.

-  **API support**:  Managed Operations offers all the support functions listed in the [developer guides](https://developer.rackspace.com/docs/).
-  **Cloud Files**:  Integration with Cloud Files is supported via the API, however no development support is offered to help utilize Cloud Files via the API.
-  **Load Balancing**: Cloud Load Balancers are supported by Fanatical Support® for Linux .
-  **DNS**: Rackspace supports the use of the public Rackspace nameservers for DNS.  Bind/named are *not* supported at this time.
-  **VNC**: While unsupported VNC can be installed upon request as packages for VNC are from supported channels.


### Third Party Repositories

Fanatical Support® for Linux will, under reasonable endeavors and without warranty, configure repository access and install any packages from the following list of supported repositories. Some of the below repositories are also mirrored local to our data centers.

- [EPEL](http://fedoraproject.org/wiki/EPEL)
- [IUS](https://ius.io/)
- [Nginx (vendor)](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/)
- [Percona (vendor)](https://www.percona.com/doc/percona-server/LATEST/installation.html#installing-percona-server-from-repositories)
- [MariaDB (vendor)](https://downloads.mariadb.org/mariadb/repositories/#mirror=osuosl)
- [MySQL (vendor)](https://dev.mysql.com/downloads/repo/)
- [Varnish (vendor)](https://www.varnish-cache.org/releases/install_redhat.html)
