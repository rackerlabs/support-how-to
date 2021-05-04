---
permalink: rackspace-auto-scale-control-panel-user-guide-create-a-scaling-group
audit_date: '2020-09-24'
title: Create a scaling group using the Auto Scale Control Panel
type: article
created_date: '2013-11-18'
created_by: Rackspace Support
last_modified_date: '2020-09-24'
last_modified_by: Rose Morales
product: Rackspace Autoscale
product_url: rackspace-auto-scale
---

The
[Concepts](/support/how-to/rackspace-auto-scale-control-panel-user-guide-concepts
"Concepts") article reviews what Auto Scale is and the core concepts that
drive it. This article discusses how to set the parameters for scaling policies
through the scaling group configuration.

### Create a scaling group

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).
2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.
3. Click **Servers** > **Auto Scale**.
4. Click **Create Group**.
5. Specify a value for the following fields:

    - **Group Name**: Specify a meaningful name for the scaling group. In grey
            text under the text box, the names of potential servers, reflecting
            the group name, are displayed.
    - **Region**: Select the cloud data center that houses your cloud servers.
            Currently, you cannot scale across data centers; all of the servers
            in a scaling group must be in the same data center.
    - **Minimum Cooldown**: Specify a timeframe.
    - **Minimum *n* active servers**: Specify the minimum number of servers for
            the scaling group, regardless of policy execution. For example, if a
            policy to decrease servers is triggered, but the group already has the
            configured minimum number of active servers, no servers are removed.
    - **Maximum *n* active servers**: Specify the maximum number of servers
            allowed in the scaling group, regardless of policy execution. For
            example, if a policy to add servers is triggered, and the group
            already has the configured maximum number of servers, no servers are
            added.
            
6. In **Select Image** choose the image that will be used on the servers.
7. Click **Select Flavor** and select the **Flavor Class** for the servers in
    the scaling group that corresponds to the server image that you selected.
    Use the widget to adjust the size for the servers.
8. Click **Select Flavor**.
9. Click **Select Networks** and choose select the networks for the servers in the
    scaling group. Defaults are **PublicNet** and **ServiceNet**.

    **Note**: Other network selections are displayed if you have created them
    previously. You must include the **ServiceNet** network in your
    configuration if you are going to use a load balancer so the load balancer
    can retrieve the IP address of new servers.
    
10. When you are done, click **Select Networks**.

    *(Optional)* Click **Select Load Balancer** and select from the available
    load balancers. If no load balancers appear, click the **Servers** > **Load
    Balancers** tab to create and save a load balancer.

    *(Optional)* Select the load balancer and enter a value for **Server Port**.
    When done, click **Select Load Balancer**.

    **Note**: An invalid load balancer configuration will prevent servers from
    being created in a scale-up.
    
11. Select a scaling policy. If no scaling policies exist, check the following
    article: [Create a scaling
    policy](/support/how-to/rackspace-auto-scale-control-panel-user-guide-create-a-scaling-policy).

12. When you are done, click **Create Scaling Group**. When the scaling group
    is created, the status changes to **Active**.

### About the Auto Scale control panel

Following are a couple of things you should know about Auto Scale control panel:

- On the scaling groups list, you can filter by region, or choose **All Regions
  (Global)** to see all scaling groups available. Default region displayed is
  **United States**.
- The gear icon provides a menu of editing options.
- A status page is available when you click on a specific scaling group, load
  balancer, or policy with options to edit.
- You can hover your mouse over the underlined dotted options and see a tooltip
  or information about the setting. Also, over the question marks to get
  information.
- You can use the edit pencil to open a configuration area and make changes to
  an existing configuration.
- When you select a server flavor there will be a dollar sign cost icon. Hover
  over to get pricing information.
- Links take you to a status or configuration page for the linked item. However,
  the configuration page that opens might be outside of the **Servers > Auto
  Scale** page and in a different area of the **Cloud Control Panel**. For
  example, clicking a load balancer link takes you to the status page for that
  load balancer under the top-level **Load Balancer** page.

### User Guide sections

-   [Rackspace Auto Scale Control Panel User Guide - Introduction](/support/how-to/rackspace-auto-scale-control-panel-user-guide-introduction "Introduction")
-   [Rackspace Auto Scale Control Panel User Guide - Concepts](/support/how-to/rackspace-auto-scale-control-panel-user-guide-concepts "Concepts")
-   [Rackspace Auto Scale Control Panel User Guide - Create a scaling group](/support/how-to/rackspace-auto-scale-control-panel-user-guide-create-a-scaling-group "Creating Scaling Groups")
-   [Rackspace Auto Scale Control Panel User Guide - Create a scaling policy](/support/how-to/rackspace-auto-scale-control-panel-user-guide-create-a-scaling-policy "Creating Scaling Policies")
