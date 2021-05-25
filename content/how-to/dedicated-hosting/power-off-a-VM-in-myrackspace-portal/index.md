---
permalink: power-off-a-VM-in-myrackspace-portal/
audit_date:
title: ‘Power off a VM in MyRackspace portal’
type: article
created_date: ‘2021-03-04’
created_by: Karoline Mills
last_modified_date: '2021-03-04'
last_modified_by: Karoline Mills
product: Rackspace Dedicated
---

This article explains how to correctly power off or shut down VMware&reg; virtual machines
(VMs) through the MyRackspace Customer Portal. This applies to Rackspace dedicated customers
using VMware VMs.

### Shutting down a VM from within the operating system

If you shut down a Rackspace managed VM through the operating system (OS), the system does not
suppress monitoring, and you still incur charges. Based on the monitoring configuration of the
device, the system might generate various alerts.

### Shut down VM from the MyRackspace portal

The correct way to power off a VM is through the MyRackspace Customer Portal, which disables
monitoring and backups and pauses billing while the VM is offline. You can also bring the VM
back online in the portal. To manage your VM within MyRackspace, use the following steps:

1. Log in to your Customer Portal at [login.rackspace.com](login.rackspace.com).
2. Navigate to **Rackspace Dedicated** -> **Products** -> **VMware Server Virtualization**
	 All *online* VMs display in green, and all *offline* VMs display in red.
3. Click on the cog next to the respective VM, select **Power VM…**, and confirm.
   Depending on the current status of the VM, this action powers the VM on or off.
