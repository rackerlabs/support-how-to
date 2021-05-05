---
permalink: cloud-servers-with-managed-operations-support-for-linux
audit_date: '2020-12-03'
title: Cloud Servers with Managed Operations support for Linux
type: article
created_date: '2011-05-26'
created_by: David Hendler
last_modified_date: '2020-12-03'
last_modified_by: Carlos Arriaga
---

The Managed Operations service level provides support beyond the Managed Infrastructure service level, including direct
assistance with resizes, snapshots, host machine issues, adding and removing servers, and managing IP addresses. Rackspace provides support for specific software and server configurations on Linux cloud
servers with Managed Operations support.

**Note:** For information about Windows support, see [Cloud Servers with Managed Operations support for Windows](/support/how-to/cloud-servers-with-managed-operations-support-for-windows).

### Operating systems

The Managed Operations service level supports the following operating systems for Linux cloud servers:

- CentOS 7 (PVHVM)
- CentOS 6 (PVHVM)
- Debian 8 (Jessie) (PVHVM)
- Debian 7 (Wheezy) (PVHVM)
- Red Hat Enterprise Linux 7 (PVHVM)
- Red Hat Enterprise Linux 6 (PVHVM)
- Ubuntu 16.04 LTS (Xenial Xerus) (PVHVM)
- Ubuntu 14.04 LTS (Trusty Tahr) (PVHVM)
- Ubuntu 12.04 LTS (Precise Pangolin) (PVHVM)
- Vyatta Network OS (6.7R9)

**Note:** Rackspace makes every effort to align our support dates for operating systems with the manufacturer's support dates. If a manufacturer decides to shorten the support life of an operating system, Rackspace might be forced to end support sooner than originally anticipated.

### Web Servers

The Managed Operations service level supports the following types of web servers:

|                                          | **Installation** | **Configuration** | **Troubleshooting** | **Monitoring** | **Patching** |
| ---------------------------------------- | ---------------- | ----------------- | ------------------- | -------------- | ------------ |
| [**Apache**](https://httpd.apache.org/)  | **Yes**          | **Yes**           | **Yes**             | **Yes**        | **Yes**      |
| [**lighttpd**](https://www.lighttpd.net) | **Yes**          | No                | No                  | **Yes**        | **Yes**      |
| [**NGINX**](https://nginx.net)           | **Yes**          | **Yes**           | **Yes**             | **Yes**        | **Yes**      |

### Database Servers

The Managed Operations service level supports the following types of database servers:

|                                                                                    | **Installation** | **Configuration** | **Troubleshooting** | **Replication** | **Monitoring** | **Patching** | **Backup** |
| ---------------------------------------------------------------------------------- | ---------------- | ----------------- | ------------------- | --------------- | -------------- | ------------ | ---------- |
| [**MySQL/**](https://www.mysql.com) [**MariaDB**<sup>2</sup>](https://mariadb.org) | **Yes**          | **Yes**           | **Yes**             | **Yes**         | **Yes**        | **Yes**      | **Yes**    |
| [**Oracle**](https://www.oracle.com/us/products/database/index.html)               | No               | No                | No                  | No              | No             | No           | No         |
| [**PostgreSQL**](https://postgresql.com)                                           | **Yes**          | No                | No                  | No              | **Yes**        | No           | No         |
| [**MongoDB**](https://www.mongodb.org/)                                            | **Yes**          | No                | No                  | No              | No             | No           | No         |

<sup>1</sup>MariaDB is supported for Red Hat Enterprise Linux 7 and CentOS 7

<sup>2</sup>Only Primary/Replica replication is supported

### Programming languages

The Managed Operations service level supports the following programming languages:

**Note:** Support for programming languages is limited to installation and does not include assistance with code or add-on
frameworks like Ruby on Rails.

|                                       | **Installation** | **Configuration** | **Modules** | **Patching** |
| ------------------------------------- | ---------------- | ----------------- | ----------- | ------------ |
| [**Perl**](https://www.perl.org)      | **Yes**          | No                | **Yes**     | **Yes**      |
| [**PHP**](https://www.php.net)        | **Yes**          | **Yes**           | **Yes**     | **Yes**      |
| [**Python**](https://www.python.org)  | **Yes**          | **Yes**           | **Yes**     | **Yes**      |
| [**Ruby**](https://www.ruby-lang.org) | **Yes**          | **Yes**           | **Yes**     | **Yes**      |


### Caching

The Managed Operations service level supports the following caching tools:

|                                          | **Installation** | **Configuration** | **Troubleshooting** | **Patching** |
| ---------------------------------------- | ---------------- | ----------------- | ------------------- | ------------ |
| [**Memcached**](https://memcached.org)   | **Yes**          | **Yes**           | **Yes**             | **Yes**      |
| [**Squid**](https://squid-cache.org)     | **Yes**          | No                | No                  | **Yes**      |
| [**Varnish**](https://varnish-cache.org) | **Yes**          | **Yes**           | Yes                 | **Yes**      |


### Software firewall

The Managed Operations service level supports the following firewall software:

|                                                                                  | **Installation** | **Configuration** | **Troubleshooting** |
| -------------------------------------------------------------------------------- | ---------------- | ----------------- | ------------------- |
| [**iptables**](https://www.netfilter.org/projects/iptables/)                     | **Yes**          | **Yes**           | **Yes**             |
| [**UBUNTU operating system ufw**](https://wiki.ubuntu.com/UncomplicatedFirewall) | **Yes**          | **Yes**           | **Yes**             |


### FTP

The Managed Operations service level supports the following FTP tool:

|                                                        | **Installation** | **Configuration** | **Troubleshooting** | **Monitoring** | **Patching** |
| ------------------------------------------------------ | ---------------- | ----------------- | ------------------- | -------------- | ------------ |
| [**vsftpd**](https://security.appspot.com/vsftpd.html) | **Yes**          | **Yes**           | **Yes**             | **Yes**        | **Yes**      |


### SMTP

The Managed Operations service supports the following SMTP tool:

|                                                        | **Installation** | **Configuration** | **Troubleshooting** | **Monitoring** | **Patching** |
| ------------------------------------------------------ | ---------------- | ----------------- | ------------------- | -------------- | ------------ |
| [**Postfix, outgoing only**](https://www.postfix.org/) | **Yes**          | **Yes**           | **Yes**             | **Yes**        | **Yes**      |


### Other packages

Although we don’t support all technologies, we do offer reasonable endeavor support, which extends our support into
offering alternative solutions. Reasonable endeavor support can include help from Rackspace partners and other thirdparty
services.

-  **API support**:  Managed Operations offers all the support functions listed in the [developer guides](https://docs.rackspace.com/docs/).
-  **Cloud Files**:  Integration with Cloud Files is supported via the API, however no development support is offered to help utilize Cloud Files via the API.
-  **Load Balancing**: Cloud Load Balancers are supported by Managed Operations.
-  **Email**:  The default SMTP configuration for outbound email on Linux is through Postfix.  Cloud Servers with a Managed Operations service level are preconfigured to use our mail relay service Mailgun to ensure reliable mail delivery.  The first 50,000 emails sent each month are free, and your mail package can be upgraded if higher volume is expected. For more information, see the [Mailgun Rackspace pricing page](https://www.mailgun.com/rackspace).
-  **Firewalls**: Support is provided for  [iptables](https://www.netfilter.org/),  [Ubuntu operating system ufw](https://help.ubuntu.com/community/UFW), and  [fail2ban](https://www.fail2ban.org/wiki/index.php/Main_Page).
-  **Control Panels**: Control panel applications such as Plesk, Webmin, or cPanel are  *not* supported at this time.
-  **DNS**: Managed Operations supports the use of the Rackspace Cloud name servers for DNS.  Bind is *not* supported at this time.
