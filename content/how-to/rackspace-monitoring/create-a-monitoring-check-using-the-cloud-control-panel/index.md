---
permalink: create-a-monitoring-check-using-the-cloud-control-panel/
audit_date: '2020-11-18'
title: Create a monitoring check using the Cloud Control Panel
type: article
created_date: '2012-08-15'
created_by: Susan Million
last_modified_date: '2020-11-18'
last_modified_by: Rose Morales
product: Rackspace Monitoring
product_url: rackspace-monitoring
---

This article describes how to create monitoring checks by using
Rackspace Monitoring through the Cloud Control Panel. Each of the
monitoring checks you can create with the Cloud Control Panel is
based on predefined check templates.

You can view the settings for each check template in the [Rackspace Monitoring Developer
Guide](https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#alarm-example-operations).

You can also use [raxmon](/support/how-to/getting-started-with-rackspace-monitoring-cli),
a command-line interface, to perform these and other actions on a monitoring check.

For the latest information about Rackspace Monitoring pricing and other
general questions, see the [Rackspace Monitoring
FAQ](/support/how-to/rackspace-monitoring-faq)
and the [Rackspace Monitoring main product
page](https://www.rackspace.com/cloud/monitoring/).

**Note:** With General Purpose servers, Rackspace Monitoring monitors
only the system disk and does not monitor the data disk.

### Create a monitoring check

1. Log in to the [Cloud Control Panel](https://login.rackspace.com/).
2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.
3. Click **Servers > Cloud Servers**.
4. In the list of servers, click the name of the server for which you
    want to create a check.
5. On the server **Details** page, scroll to the **Monitoring Checks** section
    and click **Create Check**.
6. From the **Check Type** list, select the service that you want
    to monitor.

    There are two types of checks that you can monitor:

    a. Remote Service Checks
       - HTTP Check (Website)
       - TCP Check (Port)
       - Ping Check (Server)

    b. Agent Checks
       - Memory
       - CPU
       - Load Average (Linux)
       - Filesystem
       - Network

7. Enter a descriptive name for the monitoring check in the **Check Name** box.

8. If you selected the **HTTP Check (website)** check, enter the URL of
    the website you want to monitor.

    *(Optional: HTTP Check Only)* Click **Advanced Options** and enter in the 
    **Body Match** box a word or phrase that appears on the
    page when it loads successfully. For example, you can do a body
    match on the copyright date.

### Check parameters

Each check is configured by default to originate from the following regions:
DFW, ORD, and LON. After you create your monitoring check, you can
edit the **Parameters** under **Check Details** by clicking the edit pencil.

You can change the **Check Every** and **Timeout After**.

### Check status

The check status is calculated by determining if there is an agreement
from a majority of the monitoring zones (two out of three monitoring
zones running the check). This method helps to avoid reporting false
negatives. A check has to fail in two of the three monitoring zones
before the check state is deemed **CRITICAL**.

The combined results of the check from all three monitoring zones
determine the check's state. The check state can be one of the
following:

- **Green** = OK
- **Yellow** = WARNING
- **Red** = CRITICAL. The technical contact (the primary contact on the
    Rackspace account) receives an email describing the situation.
