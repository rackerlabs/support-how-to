---
permalink: rackspace-public-cloud-servers-features-that-are-not-available-on-the-fortigste-vm/
audit_date: '2019-04-18'
title: Rackspace Cloud Servers features that are not available on the Fortigate-VM
type: article
created_date: '2019-04-18'
created_by: Brian King
last_modified_date: '2019-04-18'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

Because it's a secure turnkey appliance, the Fortigate&reg;-VM does not support
some features that are available on typical Microsoft&reg; Windows&reg; or Linux&reg;
Rackspace Cloud Servers. This article lists the missing features and the recommended
workarounds.

### Image creation

Images are disabled on the Fortigate-VM because they cannot be used for backups.
For details on how to backup your Fortigate-VM in the Rackspace Cloud, see
[Back up the Fortinet Fortigate VM](/support/how-to/back-up-the-fortinet-fortigate-vm/).

### Administrator password resets

Because the Fortigate-VM cannot run
[nova-agent](https://docs.rackspace.com/docs/user-guides/infrastructure/cloud-config/compute/cloud-servers-product-concepts/nova-agent/),
you cannot make administrator (admin) password resets by using the Cloud Control Panel
or the Cloud Servers application programmer interface (API).

### Rescue mode

Instead of rescuing a server, you can troubleshoot it by using the Emergency
Console or rebuild the server and
[restore its configuration from a backup](http://docs.fortinet.com/document/fortigate/6.4.2/administration-guide/702257/configuration-backups).

**Note:** Rebuilding a server destroys all the data on that server.

### Automatic IP address configuration on existing servers

IP addresses are set automatically at server build time, but adding a new Cloud
Network to an existing server requires you to log in to the Fortigate-VM and set
the interface IP address manually. See
[Attach a Cloud Network to an existing Fortigate-VM](/support/how-to/attach-a-cloud-network-to-an-existing-fortigate-vm/)
for more details.
