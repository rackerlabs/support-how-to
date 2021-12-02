---
permalink: updating-apache-to-the-latest-version-in-linux
audit_date: '2021-12-02'
title: 'Updating Apache to the Latest Version in Linux'
type: article
created_date: '2021-12-02'
created_by: Jorge Garcia
last_modified_date: '2021-12-02'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: cloud-servers
---

The following instructions detail updating Apache to the latest version in CentOS, Redhat Linux, Ubuntu or Debian distributions.

### Prerequisites
- Dedicated server or virtual machine running Red Hat® Enterprise Linux, CentOS, Ubuntu or Debian.

### Backup Apache configuration File
First it is needed to extract the backup configuration file. Bellow are the posibles destinations files were the file could be located:
Ubuntu y debian:
- /etc/apache2/httpd.conf
- /etc/apache2/apache2.conf

CentOS y Redhat:
- /etc/httpd/httpd.conf
- /etc/httpd/conf/httpd.conf

Run the following command to copy the configuration file into a backup file.
```sh
$ sudo cp /etc/apache2/httpd.conf /etc/apache2/httpd-backup.conf
```

### Install the EPEL repository.
Follow this guide for you to install the EPEL repository. See [Install EPEL and IUS repositories on CentOS and Red Hat](https://docs.rackspace.com/support/how-to/install-epel-and-additional-repositories-on-centos-and-red-hat/) for follow steps

**Note:** This step only applies for CentOS and RedHat based distributions.

### Update Apache Version

Run the following command in order to update Apache.
```sh
RHEL and CentOS based distributions:
# yum update httpd

Ubuntu and Debian based distributions:
# apt-get update && apt-get install apache2
or
# apt update && apt install apache2
```

### Restart Apache Server
In order to restart the apache server, you can run the following command
 ```sh
 RHEL and CentOS based distributions:
 # systemctl restart httpd

 Ubuntu and Debian based distributions:
 # systemctl restart apache2
 ```
### Check Apache version

To check the package version that was instlled, you can run the following commands:

```sh
RHEL and CentOS based distributions:
#yum info httpd
or
#httpd -v
```

```sh
Ubuntu and Debian based distributions:
#dpkg -L apache2
or
#apache2 -v
```

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
