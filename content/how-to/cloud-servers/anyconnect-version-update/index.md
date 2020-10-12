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

Upgrade **AnyConnect** version via the Rackspace&reg; Portal

Upgrading your **AnyConnect** version is now an automated task in the Rackspace portal. This article describes how to upgrade your **AnyConnect** version via the Rackspace portal.


### Prerequisites

   - Cisco ASA Firewall

### Limitations


**Note** This only applies to Cisco&reg; ASA firewalls with **Cisco AnyConnect**. If a device doesn't have a specific **AnyConnect** image, this process will only upgrade the existing images. For example, if a firewall has Windows&reg; and Mac&reg; images, but not a Linux&reg; image, the process will only upgrade the Windows&reg; and Mac&reg; images, not add the Linux&reg; one. To install **Cisco AnyConnect** ,or add an image previously excluded for the first time on a firewall, please raise a ticket.


### Procedure

1. Log in to your **Rackspace portal** (https://login.rackspace.com).

2. Click `Products > Devices` in the top navigation bar. 

3. Find your Cisco&reg; ASA firewall in the list of devices and click the _cog icon_ next to the device.

4. Select '**Upgrade AnyConnect Version**', then click 'Ok' on the popup to begin the upgrade.

You have now installed the new safe-harbor **AnyConnect** version on your firewall. To connect to the VPN or to the public Internet Protocol address `IP` of the firewall for the first time. If necessary, the system will prompt you to upgrade or install the latest **AnyConnect** version.
