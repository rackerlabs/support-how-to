---
permalink: using-configure-as-a-gateway-for-virtual-net-devices/
audit_date: '2019-05-16'
title: Using Configure as a Gateway
type: article
created_date: '2019-05-16'
created_by: Brian King
last_modified_date: '2019-05-16'
last_modified_by: William Loy
product: Cloud Networks
product_url: cloud-networks
---

This article describes the results of selection the option to **Configure as a Gateway** in the **Advanced Options** section of a Cloud Server network configuration. The article also discusses the possible errors you might experience and how best to address those errors.

**Note:** The option to configure as a gateway is only available for virtual net devices and is enabled by default.

#### Enable or disable the Configure as a Gateway option

1. Log in to [my.rackspace.com](https://my.rackspace.com).
2. Select **Rackspace Cloud** from the **Product** drop down menu.
3. Select **Cloud Servers** from the **Servers** drop down menu.
4. Click the **Create Server** button.
5. After selecting your operating system and flavor you should expand the **Advanced Options** section.
6. Select your preferred network settings and then check or uncheck the **Configure as a Gateway** option.
7. Click the **Create Server** button.


#### Possible Cloud Networks configuration errors and solutions

| Action | What could go wrong? | What state is the device left in? | Recommended nest step. |
|--------|----------------------|-----------------------------------|------------------------|
|Build server with "Configure as Gateway" checked in mycloud.rackspace.com, or build_config=gateway in the API.| Infrastructure issues, unrelated to your specific server build.| Server stuck in error state. | Delete the server and build a new one. If issue persists, open a support chat or ticket.|
|Create Cloud Network with name "$servername-net" | Creation could fail due to Cloud Networks quota (10 allowed per region). Response from API: 409 OverQuotaClient: Quota exceeded for resources: ['network']	| Server built, but Cloud Network configuration is not complete.| Delete unused Cloud Networks in the region, or open a support ticket to request a quota increase (subject to approval). Next, delete the server and build a new one. If issue persists, open a support chat or ticket.|
