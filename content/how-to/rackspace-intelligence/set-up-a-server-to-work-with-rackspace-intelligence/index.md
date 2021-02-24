---
permalink: set-up-a-server-to-work-with-rackspace-intelligence/
audit_date: '2021-02-23'
title: Set up a server to work with Rackspace Intelligence
type: article
created_date: '2015-07-12'
created_by: Rose Coste
last_modified_date: '2021-02-23'
last_modified_by: Rose Morales
product: Rackspace Intelligence
product_url: rackspace-intelligence
---

You can use Rackspace Intelligence to help you observe your server status if you
configure it up to be visible by Rackspace Intelligence. This can be done
through the **Cloud Control Panel** by following these steps:

1. Log in to the [Cloud Control Panel](https://login.rackspace.com/).

    **Note**: You can open the control panel by clicking the **Rackspace
    Intelligence** menu at the top of the interface and selecting **Rackspace
    Cloud**.
2. From the top navigation bar, click **Select a Product** > **Rackspace Cloud**.
3. Create a server, or select an existing server. 

    **Note**: For instructions on creating a server, see [Create a Cloud Server](/support/how-to/create-a-cloud-server).
4. List the server's details by selecting **Servers** > **Cloud Servers** and then
    clicking the server's name.
5. Scroll down to the **Monitoring Data** section and click the **View Server's
    Metrics in Rackspace Intelligence** link.
6. Install the monitoring agent on the server by clicking **Get Started**.
7. Choose the platform installed on your server and choose the kind of
     instructions that you prefer.

    **Note:** The Monitoring Agent can be automatically installed when creating
    a new cloud server. After choosing your server image and flavor, select
    **Monitor recommended server metrics** under **Recommended Installs**.

    The following example shows the **Step By Step** instructions for a Linux
    platform. Follow the instructions to install, configure, and start the
    agent.

    {{<image src="intelligence-install-agent-linux_0.png" alt="" title="">}}

    The instructions require you to send commands to the server. The commands
    vary depending on the server's operating system. Similarly,
    detailed procedures for sending commands to a server vary depending on what
    kind of workstation you use when you communicate with the server. For
    example, [Connecting to Linux from Mac OS X by using Terminal](/support/how-to/connecting-to-linux-from-mac-os-x-by-using-terminal)
    shows how to install and use the Terminal utility on a Mac OS X workstation
    communicating with a Linux server; if you are working in a different
    configuration, adapt these instructions to match your environment

    **Note:** No matter what kind of server you want to monitor, you
    must know the server's IP address and password before you can log in
    and begin installing the monitoring agent there. The server's IP
    address is provided when you use the **Cloud Control Panel** to list
    details about the server. If you do not know the server's password
    but you are able to log in to the Cloud Control Panel for your
    account, you can change the server's password as described at [How to change your server root/admin password from your account](/support/how-to/support/how-to-change-your-server-rootadmin-password-from-your-account).

    In the terminal session you can confirm the installation succeeded if you
    see the message **Your Agent configuration is now complete**. When the agent
    is running, if you look again at the **Monitoring Agent Installation** page
    you can see that the agent connection status is **Connected**.
8. Click **Setup Checks** to configure at least one check. In the
    following example, two CPU-related checks are configured, monitoring
    CPU usage and average CPU load.

    {{<image src="intelligence-check-selection.png" alt="" title="">}}
9. Click **Apply Checks** to activate the checks that you defined. When
    the checks are activated, their status is reported on the **Entities
    details** page for the server, in the **Monitoring Checks** section.
10. To make the checks useful, define alarms that identify boundaries
    between **OK**, **Warning**, and **Critical** statuses. For instructions,
    see [Working with alarms](/support/how-to/working-with-alarms).
