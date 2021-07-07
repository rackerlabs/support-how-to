---
permalink: view-your-network-device-configuration
audit_date: '2017-01-08'
title: View your network device's configuration
type: article
created_date: '2017-12-21'
created_by: Trevor Becker
last_modified_date: '2021-07-07'
last_modified_by: Cat Lookabaugh
product: Dedicated Hosting
product_url: dedicated-hosting
---

The MyRackspace Portal contains a self-service feature that enables you to
download a copy of the running configuration for your firewall or load balancer.
You can use this feature for your documentation and auditing purposes.

### View the configuration of your network device

1. Log in to the [MyRackspace Portal](https://login.rackspace.com/) by
   using your username and password.

2. In the top navigation bar, click **Select a Product > Rackspace Dedicated**.

3. Select **Products** > **Devices**.

4. On the **Devices** page, click the gear icon to the left of the network
   device to view action options.

   If you cannot find your network device, use the search box on the top right
   of the page. Search for the term **Firewall** or **Load Balancer**.

5. Click **Download Network Config**.

   The length of the download depends on the size of your network device
   configuration. After the download completes, the configuration displays
   in your browser download folder as a **.txt** file.

   **Note:** The network device configuration includes a section
   named **REMOVED**, which contains fields removed because they contain
   Rackspace-specific infrastructure settings.

### View client VPN users within your firewall's configuration

The firewall running configuration stores client virtual private network (VPN)
users. The structure of a client VPN user is as follows:

    Syntax:  username <username> password <password>
    Example: username rackspace-test password Abc123

If you want to perform a client VPN user audit of your firewall, perform the
steps in the **View the configuration of your network device** section and search
through the document for the client VPN syntax shown above.
