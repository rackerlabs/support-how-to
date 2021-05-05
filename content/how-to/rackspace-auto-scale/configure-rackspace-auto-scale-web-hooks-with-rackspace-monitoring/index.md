---
permalink: configure-rackspace-auto-scale-web-hooks-with-rackspace-monitoring
audit_date: '2020-09-28'
title: Configure Rackspace Auto Scale web hooks with Rackspace Monitoring
type: article
created_date: '2015-06-04'
created_by: Jake Coe
last_modified_date: '2020-09-28'
last_modified_by: Rose Morales
product: Rackspace Autoscale
product_url: rackspace-auto-scale
---

Auto Scale uses webhooks to initiate scaling events. A webhook is an
industry-standard protocol to send events between systems, and for Auto Scale,
they are used to execute policies. A webhook consists of an HTTP callback
triggered by some user-defined event, such as an alarm set through
Rackspace Monitoring or another monitoring service. When that event occurs, the
source site makes an HTTP request to the URI configured for the webhook.

### Before you begin

Before you can configure the webhooks, you must [create an Auto Scale
group](/support/how-to/rackspace-auto-scale-control-panel-user-guide-create-a-scaling-group).

### Create Auto Scale policies

1. Log in the [Cloud Control Panel](https://login.rackspace.com/).
2. Click **Servers > Auto Scale**.
3. Select an Auto Scale group from the list.
4. Click **Policies** > **Create Policy**.
5. Create two policies, one for scaling up and one for scaling down, by
   specifying the following values:
    - **Name:** Specify a name to identify each policy.
    - **Scale Trigger:**  Select **Webhook URL** for both policies.
    - **Amount:** Specify the number of servers you are removing or adding.
    - **Cooldown Period:** Specify the cooldown period, which prevents scaling
        up or down too fast. The policy waits for the policy cooldown period
        to elapse or the group's minimum cooldown to elapse, whichever is
        longer.
6. Click **Create Policy**.

### Create a webhook

Create a corresponding webhook to activate each of the Auto Scale
policies created.

1. On the **Scaling Group details** page, click the gear icon next to the
    policy name and select **View Webhooks**.
2. Click **Create Webhook.**.
3. Enter a name for the webhook.
4. Click **Save Webhook**.
5. Save the webhook address for later use.

    **Note**: You can execute a POST request on the URL to use your webhook
    manually via cURL. For more information, see the [Auto Scale Developer
    Guide](https://docs.rackspace.com/docs/autoscale/v1/developer-guide/#webhooks-and-capability-urls).

### Set up Rackspace Monitoring

1. On the **Scaling group details** page, select the cloud server.
2. Log in to the server and [install the Rackspace Monitoring
   Agent](/support/how-to/install-and-configure-the-rackspace-monitoring-agent).
3. Open **Rackspace  Intelligence** > **Notify**.
4. Create a new **Notification Plan** called **AutoScale**.
5. Select a notification plan from the list and select **Add Notifications >
    Create a new notification**.
6. In the pop-up dialog box, specify the following values:
    - **Name**: Should match the webhook name used in the previous section,
        such as **ScaleUp**.
    - **Type**: Select **Webhook**.
    - **URL**: Enter the Auto Scale Policy webhook URL. If you did not copy this
        URL in an earlier step, you can find it by selecting the gear icon
        next to the policy name and selecting **View Webhooks**.
7. Click **Create and Select Notification**.
8. Specify the monitoring alarm type to trigger the notification. For
    example, you could specify that a critical or warning monitoring alarm trigger
    the ScaleUp notification and specify that when the monitoring alarm clears, the system
    triggers the ScaleDown notification. 
9. Click Save **Notification Plan**.
10. At the top of the Rackspace Intelligence window, select **Monitor**.
11. Click the cloud server name > **Monitoring Checks** > **Create Check**.
12. Enter the following information:
    - **Check Type:** You can select from the list a wide range of
        monitoring checks such as **CPU** or **Memory**. Select the monitoring
        check appropriate for your environment.
    - **Check Name:** Enter a name to identify the check.
13. Click **Create Check**. The details page for the check displays.
14. Click **Create Alarm**.
