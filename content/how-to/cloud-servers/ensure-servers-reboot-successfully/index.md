---
permalink: ensure-servers-reboot-successfully
audit_date: '2020-10-15'
title: Ensure servers reboot successfully
type: article
created_date: '2019-01-21'
created_by: Rackspace Community
last_modified_date: '2019-12-20'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

This article provides tips to ensure that server restarts, or reboots, are fast
and minimally disruptive.

### Ensure you configure and run server backups properly

We recommend that you use backups to keep your data up to date. Rackspace [Cloud Backups](https://www.rackspace.com/en-us/cloud/backup) run a
differential backup on a set frequency. You can set a cloud backup to run
on any number of directories.

**Important**: Performance cloud servers that have a data disc don't include data
partitions in any image snapshots you take. Ensure that your data scheme includes
these data partitions.

#### Back up Linux

If you are running a Linux&reg; server, you might need to back up the
following directories:

- **/home**
- **/root**
- **/etc** (This directory contains most of your configuration files.)
- **/var/www** (This directory often contains your websites and files.)
- **/var/lib/mysqlbackup** (Servers built by using Rackspace Managed
  Operations have an automated process that automatically runs a MySQL&reg; `mysql dump`
  to this folder.)

#### Back up Windows

If you are running a Windows&reg; server, we recommend that you back up
locations where you store data, such as the following locations:

- **C:\inetpub**
- **C:\Users**
- Any additional drives such as **D:** and **E:**

### Back up live databases

Cloud Backup does not back up live databases. You must back up these databases by using tools such as 
Microsoft&reg; SQL Server Management Studio.

We recommend that you carefully consider your specific applications and their backup needs.

### Ensure you configure services to start after the boot (start)

The default installation setup doesn't include an automatic restart. You must configure services to restart after the server reboots, or restarts. To learn how to perform this task, select the following resource that corresponds to your server's operating system (OS):

- Windows: [Prepare to migrate a Windows server](/support/how-to/prepare-to-migrate-a-windows-server/#ensureAutoStart)
- Ubuntu&reg; operating system: [UPDATE-RC.D(8)](https://manpages.debian.org/wheezy/sysv-rc/update-rc.d.8.en.html)
- RHEL&reg; and CentOS&reg;: [Using the chkconfig utility](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/deployment_guide/s2-services-chkconfig)

### Ensure that you configure iptables or Windows Firewall to restart on reboot

Ensure that the firewall rules that you configure stay
active on reboot. This section shows you how to perform this task.

#### SSL passphrase

We do not recommend using a passphrase when you generate a Secure Sockets
Layer (SSL) certificate. However, if you already have a passphrase in place
for your SSL certificate, you need to input that into the server when it
reboots. The services on the server cannot start until you enter that
passphrase.

#### Ensure that Cloud Block Storage volumes attach on reboot

If you have data on a Cloud Block Storage volume attached to a cloud server, you must
ensure that you connect any volumes properly after a reboot.

To do this, you need to add your volume to the static file system information
in the `fstab` file.

**Note**: If you are using Windows, make sure the mounted block storage remains mounted after the server reboots.

### FSCK (File system consistency check)

A file system consistency check (`fsck` operation) generally runs automatically at boot time.  Two common triggers
automatically execute an `fsck`. Either the OS detects that a file system is in an inconsistent state (due to a
non-graceful shutdown such as a crash or loss of power) or the number of times that the system is mounted exceeds the limit.

After you reboot your server, this check might happen automatically. If it does, the `fsck` might delay your server
coming back online. While delays are usually negative experiences, in this case, the delay could save your server.
We recommend that you allow the file system check to complete, regardless of the delay. If you attempt to reboot the
server again, it resumes the file system check and extends the delay.

### Test

To ensure that you understand how your servers and other cloud products react during and after a reboot, we strongly recommend
that you take a few minutes to test the reboot process.

Perform testing during the development phase or on separate servers to limit customer impact.

### Mitigate the impact of a reboot

Use the tips in this section to reduce the impact of server reboots.

***Horizontal scaling***

One of the best ways to prevent the prolonged impact of a reboot is to distribute your application over multiple
redundant, tiered servers. This approach, called *horizontal scaling*, is a great way to minimize the risk of downtime
due to a single server going down.

***Custom error pages***

The use of a cloud load balancer lets you set a custom error page if a server connected to the load balancer is offline
or unresponsive. When you proactively configure that error page, a visitor to your site receives an error message specific
to your unique application.

