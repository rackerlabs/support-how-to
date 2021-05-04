---
permalink: attach-a-cloud-network-to-an-existing-fortigate-vm
audit_date: '2019-04-18'
title: Attach a Cloud Network to an existing Fortigate-VM
type: article
created_date: '2019-04-18'
created_by: Brian King
last_modified_date: '2019-04-18'
last_modified_by: Cat Lookabaugh
product: Cloud Networks
product_url: cloud-networks
---

Use the following steps to attach a Cloud Network to an existing Fortigate&reg;-VM:

### Add the Cloud Network in the Cloud Control Panel

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).

2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.

3. Select **Servers > Cloud Servers**.

4. Navigate to the **Server Details** page for your Fortigate-VM as shown in the
   following image:

   {{<image src="cloud_servers_details.png" alt="" title="">}}

5. In **Networks and Security Groups**, click **Add Network** and choose the
   Cloud Network that you want to attach as shown in the following image:

   {{<image src="add_network.png" alt="" title="">}}


6. Click **Add Network** in the dialog box.

7. Record the Cloud Networks IP address that displays after a few seconds.

### Verify the Classless Inter-Domain Routing (CIDR) (subnet mask)

1. From the Cloud Control Panel, navigate to **Networking > Networks**.

2. Find the Cloud Network that you attached previously and record its CIDR,
which is usually `ip-address/24`) as shown in the following image.

{{<image src="cloud_networks.png" alt="" title="">}}

### Set the IP address in the Fortigate-VM GUI

1. Browse to your Fortigate-VM by using the virtual machine (VM) PublicNet IP
address, for example `http:\\104.239.141.198`.

2. Click on **Network > Interfaces** to see a list of interfaces.

3. Click the highest-numbered interface, which is `port3` in this example, and
click **Edit**.

4. In the **Address** section, fill in the Cloud Network IP address and CIDR
that you recorded earlier and click **OK** as shown in the following images.

{{<image src="display_fgvm.png" alt="" title="">}}

{{<image src="ipset.png" alt="" title="">}}

### (Optional) Backup the new configuration

Because you just changed its configuration, we recommend that you
[back up the Fortigate-VM](/support/how-to/back-up-the-fortinet-fortigate-vm/).

