---
permalink: anyconnect-version-update/
audit_date:
title: Updating Your AnyConnect Version via Rackspace Portal
type: article
created_date: '2020-10-02'
created_by: Derek Pranger
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

Upgrade AnyConnect Version via the Rackspace Portal

Upgrading your AnyConnect version is now an automated task in the Rackspace portal. This article describes the process of upgrading your AnyConnect version via the portal.


### Prerequisites

   - Cisco ASA Firewall

### Limitations


Please note that this only applies to Cisco ASA firewalls with Cisco AnyConnect. In addition, if a device does not have a specific AnyConnect image, this process will only upgrade the existing images. For example, if a firewall has Windows and Mac images, but not a Linux image, the process will only upgrade the Windows and Mac images, not add the Linux one. If you want to install Cisco AnyConnect for the first time on a firewall, or add an image previously excluded, please raise a ticket to do so.


### Procedure

1. Log in to the your Rackspace portal (https://login.rackspace.com).

2. In the top navigation bar, click Products > Devices.

3. Find your Cisco ASA firewall in the list of devices and click the cog next to the device.

4. Select 'Upgrade AnyConnect Version', then click 'Ok' on the popup to begin the upgrade.

The firewall will now have the new safe-harbor AnyConnect version installed. When trying to connect to the VPN or connecting to the public IP of the firewall for the first time, you should be prompted to either upgrade or install the latest AnyConnect version.
