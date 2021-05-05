---
permalink: prevent-server-overload-with-cloud-load-balancers
audit_date: '2020-10-01'
title: Prevent server overload with Cloud Load Balancers
type: article
created_date: '2012-07-24'
created_by: Rackspace Support
last_modified_date: '2020-10-01'
last_modified_by: Rose Morales
product: Cloud Load Balancers
product_url: cloud-load-balancers
---

You can prevent a server from becoming overloaded by using the
connection-throttling feature on Cloud Load Balancers. Connection throttling
limits the number of simultaneous connections that are allowed from each IP
address. This feature helps prevent malicious or abusive traffic from reaching
your server and its installed applications.

### Prerequisites

You need an existing load balancer. If you don't have a load balancer yet, create one by following the
instructions in the article, [Configure a load balancer](/support/how-to/configure-a-load-balancer/).

### Configure connection throttling

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).
2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.
3. Select **Networking** > **Load Balancers**.
4. Click on the gear icon next to the load balancer that you want to configure,
    then select **Edit Connection Throttling** from the menu.
5. Enter a value between 1 and 100000 for **Max. Connections**.
6. Click **Save Connection Throttling**.
