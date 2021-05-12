---
permalink: disable-desktop-activity-moderator/
audit_date: '2021-05-12'
title: 'Disable Desktop Activity Moderator'
type: article
created_date: '2021-03-29'
created_by: Travis Gentry
last_modified_date: '2021-05-12'
last_modified_by: Rose Morales
product: Rackspace Cloud
product_url: cloud-servers
---

The Desktop Activity Moderator uses its own driver and service to help increase
battery efficiency when a laptop screen is on and is designed to ensure
consistent, long battery life for devices that support connected standby.
Connected standby occurs when the device is powered on, but the screen is turned
off.

**Note**: This feature is not relevant to servers or virtual machines.

### Procedure

You can change the Service Control Manager configuration to keep this service
from starting at all.

1. Open a command prompt with administrative privileges on the respective
   server.
2. Then, enter the following command:

       SC CONFIG "dam" START= DISABLED

The message for a successful outcome is the following output: `[SC]
ChangeServiceConfig SUCCESS`

The Desktop Activity Moderator service and driver are now disabled.
