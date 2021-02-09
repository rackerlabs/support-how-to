---
permalink: migrate-a-cloud-server-to-a-new-physical-host/
audit_date: '2020-08-17'
title: 'Migrate a cloud server to a new physical host'
type: article
created_date: '2020-07-29'
created_by: Chris Silva
last_modified_date: '2020-08-17'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-product
---

This article describes how to migrate a cloud server to a new physical host device.


### Cloud Infrastructure

Your cloud server is a virtualized server, which lives on a physical hypervisor. The hypervisors in the hypervisor
environment managed by Rackspace sometimes experience issues that impact your server performance. Therefore,
Rackspace regularly migrates servers between hypervisor environments to ensure that your server performs to the best
of its ability.

### Reasons to migrate

If you believe that your server performance is degraded, server migration is a quick way to rule out any underlying
infrastructure issues. Common reasons to migrate include:

- Unexplained degradation of performance
- Network connectivity
- High CPU/RAM usage
- High disk usage

**Important**: While these conditions can indicate a host-level issue, the same issues could exist on the server level and
not be related to the host environment. Don't assume migration is a complete fix.

### How to migrate your servers

The following steps describe how to migrate a cloud server to a new hypervisor in your customer portal.

**Note**: This process does not assign your server a new IP address.

1. From your customer portal, select **Servers** -> **Cloud Servers**.

2. Select the server you want to migrate to open the **Server Details** page.

3. On the **Server Details** page, select **Actions** and click **Migrate Server**.

This action initiates the reboot migration process. The portal displays the status as **Resizing**, but the server size
does not change with this process. Your server remains active for most of the process but requires a reboot near
the end of the migration. This process can take a while depending on the amount of data on your server. Make sure you
account for some downtime or perform this task outside of your normal business hours.

### Next steps

After the migration has completed, log in to your server to verify the server is up and start any processes not set
to start on boot. See [Ensure servers reboot successfully](/how-to/ensure-servers-reboot-successfully/) for some things to check.

You can also verify the performance on your server to see if the migration produced any improvements. Once you have verified the performance, applications, and services on your server are running as expected, click the **Confirm Resize** button on the **Server Details** page. The option to confirm will last for 24 hours at which time the process will be completed automatically. You also have the option to  revert the change until the **Confirm Resize** button has been clicked or the confirmation period has expired.

In some rare instances,the new host environment could experience similar issues. You can migrate again as needed, but if multiple host environments produce the same results, the issue is likely occurring at the server-OS level.
