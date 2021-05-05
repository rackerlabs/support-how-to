---
permalink: configure-a-health-monitor-in-cloud-load-balancers
audit_date: '2020-10-01'
title: Configure a health monitor in Cloud Load Balancers
type: article
created_date: '2012-07-24'
created_by: Rackspace Support
last_modified_date: '2020-10-01'
last_modified_by: Rose Morales
product: Cloud Load Balancers
product_url: cloud-load-balancers
---

Rackspace's Cloud Load Balancers service includes a health monitoring operation
that helps keep your load balancer operating smoothly by routing traffic only to
nodes that are functioning properly. You set the service by updating the load
balancer configuration settings to add one health monitor per load balancer.
After configuration, the monitor periodically checks the health of each node
associated with the load balancer, including new nodes that you add. If the
health monitor detects an unresponsive node, the system removes it from
the load balancer rotation until the health monitor determines that the node is
functional.

### Configure a health monitor

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).
2. In the top navigation bar, click **Select a Product** > **Rackspace Cloud**.
3. Select **Networking > Load Balancers**.
4. Click the gear icon next to the load balancer name, and select **Edit Health
   Monitoring**.
5. In the pop-up dialog box, select a **Monitor Type**:
    - **CONNECT**: The Connect health monitor connects to each node on its
        defined port to ensure that the service is listening correctly. The
        Connect monitor is the most basic health check and does no
        post-processing or protocol-specific health checks. Required information
        for this monitor includes the following details:

        {{<image src="1492-confighealthmon-3.png" alt="" title="">}}

        - **Interval**: Minimum number of seconds to wait before executing the
            health monitor. Must be between 1 and 3600.
        - **Timeout**: Maximum number of seconds to wait for a connection to be
            established before timing out. Must be between 1 and 300.
        - **Attempts**: Number of permissible monitor failures before removing a
            node from rotation. Must be between 1 and 10.
    - **HTTP**: The HTTP health monitor is more intelligent than the Connect
        monitor. It can process an HTTP response to determine the actual
        condition of a node. Provide the required information for this monitor.

        {{<image src="1492-confighealthmon-4.png" alt="" title="">}}

        - **Interval**: Minimum number of seconds to wait before executing the
            health monitor. Must be between 1 and 3600.
        - **Timeout**: Maximum number of seconds to wait for a connection to be
            established before timing out. Must be between 1 and 300.
        - **Attempts**: Number of permissible monitor failures before removing a
            node from rotation. Must be between 1 and 10.
        - **HTTP Path**: The HTTP path for the sample request.
        - **Status Regex**: A regular expression used to evaluate
            the HTTP status code returned in the response. For example, you
            could use the regular expression `^(500|40[1348])$` to look for
            *unsuccessful* status codes (500, 401, 403, 404, and 408) returned
            in the response, or you could use the regular expression
            `^[2][0][02]$` to look for *successful* status codes of 200 and 202
            in the response.
        - **Body Regex**: A regular expression used to evaluate the
            contents of the body of the response. For example, you could use the
            regular expression `^.*(Unauthorized|Forbidden|Not
            Found|Timeout|Server Error).*$` to look for any of those potentially
            problematic strings in the body of the response, or you could use
            the regular expression `^success$` to look for the string `success`.

            **Note:** The system evaluates only the first 2048 bytes of the
          response against the body regex you specify, so you should test
          accordingly.

6. Click **Save Monitoring Settings** to apply your changes.
7. To debug the HTTP health monitoring, test the body regex against the IP
address of the nodes that you disabled. You can use the following cURL
command to see what the health monitoring analyzes:

    $ curl -s -r 0-2048 https://YOUR_IP_ADDRESS | head -c 2048 | egrep "YOUR_REGULAR_EXPRESSION"

### Disable a health monitor

Use the following steps to disable a health monitor:

1. Click the gear icon next to the load balancer you want to update, then
    select **Edit Health Monitoring**.
2. In the health monitor form, click **Disable**.
3. Click **Disable Health Monitor** to apply the change.
