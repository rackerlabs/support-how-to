---
permalink: power-off-VM-in-myrackspace-portal/
audit_date: '2021-05-24'
title: Power off VM in MyRackspace portal
type: article
created_date: ‘2021-03-04’
created_by: Karoline Mills
last_modified_date: '2021-05-24'
last_modified_by: Carlos Arriaga
product: Rackspace Dedicated
---
This article explains how to power off/shut down VMware Virtual Machines (VMs) through the MyRackspace customer portal to disable monitoring, backups and pause billing. This applies to Rackspace dedicated customers utilizing VMware VMs.

### Shutting down VM from within the Operating System

If you shut down a Rackspace managed VM through the Operating System (OS), monitoring will not be suppressed and charges will still be incured. Based on the monitoring configuration of the device, various alerts will be generated.

### Shutting down VM from MyRackspace portal

The correct way to power off a VM is through the MyRackspace customer portal. This will disable monitoring and backups, and pause billing while the VM is offline. 

The VM can also be brought back online in the portal. To manage your VM within MyRackspace, follow these steps:

1.	Log in to your customer portal at [login.rackspace.com](login.rackspace.com)
2.	Navigate to **Rackspace Dedicated** -> **Products** -> **VMware Server Virtualization**
    ->All *online* VMs are highlighted in green, and all *offline* VMs are highlighted in red
3.	Click the *cogwheel* next to the respective VM, and select **Power VM…**, and confirm
    -> Depending on the current status of the VM, this will *power on* or *power off* the VM.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 


