---
permalink: schedule-network-device-reboot
audit_date: '2018-05-15'
title: Schedule a network device reboot
type: article
created_date: '2017-10-03'
created_by: Trevor Becker and Angela Howell
last_modified_date: '2018-05-15'
last_modified_by: Cat Lookabaugh
product: Dedicated Hosting
product_url: dedicated-hosting
---

You can schedule a reboot for network (or net) devices in the MyRackspace
portal. The Schedule Reboot tool enables you to schedule a net device reboot
for a predefined date and time, and it activates the reboot button process for
your net device.

For more information about the reboot button process, see the [Network device reboot FAQ](/support/how-to/network-device-reboot-faq/).

### Schedule a net device reboot

1. Log in to the [MyRackspace Portal](https://my.rackspace.com/).

2. In the top navigation bar, click **Products > Devices**.

3. On the **Devices** page, click the gear icon next to network device that you
   want to reboot, and select **Schedule Reboot**.

   {{<image src="schedule-reboot.png" alt="" title="">}}

4. On the **Schedule Reboot** page, enter the following information:

   - **Reason**: The reason that you want to reboot your net device
   - **Date/Time**: The date and time when you want your net device to reboot
   - **Devices**: The net device or devices that you want to reboot

     - **HA network devices**: Select only one net device in an HA pair for code version updates. The standby unit will be updated automatically as a part of failover/HA functionality.

   {{<image src="enter-reboot-info-rev.png" alt="" title="">}}

5. Click **Schedule Reboot**.

   A list of devices that will be impacted by the reboot displays.

6. To proceed with scheduling the net device reboot, click **Confirm Reboot(s)**
   and then click **OK** on the following warning confirmation screen.

   A message displays **Reboot(s) successfully scheduled** at the top of the panel.

   {{<image src="notification-message.png" alt="" title="">}}

You can see details on your scheduled reboots in the **Firewall Reboots** tab.
If you need to make changes to your scheduled reboot, click **Edit/Cancel** to
modify an entry. Enter a new date and time, and then click **Save Changes** and
**OK**.

{{<image src="edit-reboot.png" alt="" title="">}}
