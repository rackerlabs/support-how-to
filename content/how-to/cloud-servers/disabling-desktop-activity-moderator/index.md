---
permalink: disabling-desktop-activity-moderator/
audit_date:
title: 'Disabling Desktop Activity Moderator'
type: article
created_date: '2021-03-29'
created_by: Travis Gentry
last_modified_date: '2021-04-14'
last_modified_by: Karoline Mills
product: Rackspace Cloud
product_url: cloud-servers
---

This article describes the process of disabling the Desktop Activity Moderator (DAM) on Windows Server.

The Desktop Activity Moderator uses its own driver and service to help increase battery efficiency when a laptop screen is being utilized. It is designed to ensure consistent, long battery life for devices that support connected standby. Connected standby occurs when the device is powered on, but the screen is turned off. However, this feature is not relevant to servers or VMs.

### Procedure

You can change the Service Control Manager configuration to keep this service from starting at all. To do this, open a command prompt with administrative privileges on the respective server. Then, enter the following command:
`SC CONFIG "dam" START= DISABLED`

The command prompt should then return the following output:
`[SC] ChangeServiceConfig SUCCESS`

The Desktop Activity Moderator service and driver are now disabled.
