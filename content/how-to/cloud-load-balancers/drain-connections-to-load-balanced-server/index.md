---
permalink: drain-connections-to-load-balanced-server
audit_date: '2020-10-01'
title: Drain connections to load balanced server
type: article
created_date: '2013-06-26'
created_by: Kyle Laffoon
last_modified_date: '2020-10-01'
last_modified_by: Rose Morales
product: Cloud Load Balancers
product_url: cloud-load-balancers
---

Server *draining* redirects incoming calls and new connections from
a specified server to other servers connected to the same load balancer.
You can use draining to minimize service interruption when taking a server offline
for maintenance. Sessions started before you put the server into draining status
continue until completion.  When all sessions have ended, the system considered the server
to be drained and you can take it offline. The following steps help ensure
minimal service interruption when removing a cloud server from an active load
balancer.

1. Log in to the [Cloud Control Panel](https://login.rackspace.com/).
2. Select **Product** > **Rackspace Cloud**> **Networking** > **Load
   Balancers**.
3. Click on the load balancer to view its nodes.
4. Click the gear icon next to the server node.
5. Select **Edit Node Condition**.
6. Select **Draining Connections** for the server condition and click **Save
   Condition**.
7. Monitor the port from within the draining node for continued activity.
   **Note**: for Linux&reg; servers, check `netstat` for new connections.
8. When activity has ceased, you can edit the node's condition
   and select **Disabled** to prevent the system for routing new traffic to it.
