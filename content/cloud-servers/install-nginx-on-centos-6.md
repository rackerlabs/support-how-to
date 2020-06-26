---
permalink: install-nginx-on-centos-6/
audit_date:
title: Install Nginx on CentOS 6
type: article
created_date: '2020-06-25'
created_by: John Garcia
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

This article will explain how to install nginx on CentOS 6 using yum.

**Step 1.** Install the nginx repo by using the following **wget** command to pull from the listed address:

```
[root@server-01 ~]# wget http://nginx.org/packages/centos/6/noarch/RPMS/nginx-release-centos-6-0.el6.ngx.noarch.rpm
```

**Step 2.**  Install RPM Package "nginx-release-centos-6-0.el6.ngx.noarch.rpm":

```
[root@server-01 ~]# rpm -ivh nginx-release-centos-6-0.el6.ngx.noarch.rpm
```
**Note:** The following options were used in the previous step:

```
-i Installs Package
-v Verbose Mode (Nicer Displaying)
-h  Include Hashmarks to note progress during unpacking
```

**Step 3.**  Install nginx using yum:
```
[root@server-01 ~]# yum install nginx
```

**Step 4.** Set nginx service to automatically start after reboot and turn on the nginx service with the following two commands:

```
[root@server-01 ~]# chkconfig nginx on
[root@server-01 ~]# service nginx start
```

**Step 5.** Verify nginx service is on:

```
[root@server-01 ~]# service nginx status
nginx (pid  3020) is running...
```

**Step 6.** Make changes to Firewall and Save with the following two commands:

```
[root@server-01 ~]# iptables -I INPUT -p tcp --dport 80 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
[root@server-01 ~]# service iptables save
iptables: Saving firewall rules to /etc/sysconfig/iptables:[  OK  ]
```
**Note:** Failure to make changes to firewall may result in a "No Route to Host " message when attempting the final step.

**Step 7.** Navigate to your server's IP address in your web browser and you should see the following to confirm nginx is installed and running correctly:

```
Welcome to nginx!
If you see this page, the nginx web server is successfully installed and working. Further configuration is required.

For online documentation and support please refer to nginx.org.
Commercial support is available at nginx.com.

Thank you for using nginx.
```
