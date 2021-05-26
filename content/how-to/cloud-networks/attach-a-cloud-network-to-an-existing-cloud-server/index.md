---
permalink: attach-a-cloud-network-to-an-existing-cloud-server
audit_date: '2021-05-24'
title: Attach a Cloud Network to an Existing Cloud Server
type: article
created_date: '2012-09-21'
created_by: Susan Million
last_modified_date: '2021-05-24'
last_modified_by: Carlos Arriaga
product: Cloud Networks
product_url: cloud-networks
---

When you create a new cloud server, you can attach an isolated network
to it. You can also attach an isolated network to an existing server by
using one of the following methods:

-   By using the [Cloud Networks API](https://docs.rackspace.com/docs/cloud-networks/v2/developer-guide/)
-   By creating an image of the server and building a new server based
    on that image in the Cloud Control Panel

If you use the Cloud Networks API to attach network interfaces to or
detach them from a cloud server, you might experience a brief
interruption (lasting 3-4 seconds) in traffic hitting your cloud
server while the sytem resets networking on the server.

**Warning**: For servers running Rackconnect v2.0, do not attach or
detach a cloud network to or from the server. Attaching or detaching
a cloud network, in this case, causes the system to reset the network
stack, which breaks the cloud server's connectivity to Rackconnect
v2.0. If you need to attach a network to a cloud server that currently
runs Rackconnect v2.0, contact support before making the change.

### Attach a network by cloning it

To attach an isolated network to an existing cloud server by cloning it
in the Cloud Control Panel, perform the following steps:

1.  Log in to the Cloud Control Panel.
2.  In the **Cloud Servers** list, click the server to which you want to
    attach the isolated network.
3.  On the **Server Details** page, scroll to the **Images** section.
4.  If you already have an image for this server, skip to **step 5**.

    To create an image for the server, in the **Details** page of the
    server in the **Images** section, click **Create Image**, enter a
    name for the image, and then click **Create Image**.

    It might take a few minutes to create the image.

5.  In the **Images** section, click **View Images**.
6.  Next to the image you want to use, click the gear icon and then
    select **Create Server with Image**.
7.  On the **Create Server** page, enter the name of the new server. The
    image is preselected for you.
8.  Select a size, or flavor, or the server.
9.  Expand the **Advanced Options** section and click **Select Networks**.
10. Select an existing isolated network in the pop-up dialog box, or
    click **Create Network** to create a new one. If you are creating a
    network, enter a network name and then click **Create Network**.

    **Note**: The system automatically attaches all new servers to the
    PublicNet (the Internet) and ServiceNet (the Rackspace data center
    network) networks. Before removing these networks from the server,
    we strongly recommend that you read
    [Removing Networks from a Cloud Server](/support/how-to/removing-networks-from-a-cloud-server)
    to fully understand the limitations on this server if you remove
    these networks.

11. Click **Create Server**.

The preceding steps create a new server with new public and private IP
addresses and attaches it to your selected networks.

### More information about Cloud Networks

[Create an Isolated Cloud Network](/support/how-to/create-an-isolated-cloud-network-and-attach-it-to-a-server)

[Removing Networks from a Cloud Server](/support/how-to/removing-networks-from-a-cloud-server)

[Using CIDR notation in Cloud Networks](/support/how-to/using-cidr-notation-in-cloud-networks)

[Cloud Networks Developer Guide](https://docs.rackspace.com/docs/cloud-networks/v2/)
