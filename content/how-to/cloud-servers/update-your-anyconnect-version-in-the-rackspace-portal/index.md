---
permalink: update-your-anyconnect-version-in-the-rackspace-portal
audit_date: '2020-10-13'
title: Update your AnyConnect version in the Rackspace Portal
type: article
created_date: '2020-10-02'
created_by: Derek Pranger
last_modified_date: '2020-10-13'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

Upgrading your Cisco&reg; AnyConnect&reg; version is now an automated task in the Rackspace portal. This article
describes how to upgrade your AnyConnect version via the Rackspace portal.

### Prerequisites

You need to install the Cisco ASA Firewall.

### Limitations

The instructions in this article apply to only Cisco ASA firewalls with Cisco AnyConnect. If a device
doesn't have a specific AnyConnect image, this process only upgrades the existing images. For example,
if a firewall has Windows&reg; and Mac&reg; images, but not a Linux&reg; image, the process only upgrades
the Windows&reg; and Mac&reg; images, and does not add the Linux&reg; one. To install Cisco AnyConnect
or add an image previously excluded for the first time on a firewall, open a support ticket.

### Procedure

1. Log in to your [Rackspace portal](https://login.rackspace.com).

2. Click **Products > Devices** in the top navigation bar. 

3. Find your Cisco ASA firewall in the list of devices and click the *cog icon* next to the device.

4. Select **Upgrade AnyConnect Version** and click **Ok** in the pop-up window to begin the upgrade.

You have now installed the new safe-harbor **AnyConnect** version on your firewall. Use it to connect to the VPN or
the public Internet Protocol (IP) address of the firewall for the first time. If necessary, the system prompts you
to upgrade or install the latest **AnyConnect** version.
