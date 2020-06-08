---
permalink: managing-virtual-machines/
audit_date:
title: 'Managing Virtual Machines'
type: article
created_date: '2020-06-08'
created_by: Chris Silva
last_modified_date:
last_modified_by:
product: Dedicated Hosting
product_url: dedicated-hosting/
---

This article describes the different options available for managing virtual machines in your Dedicated Rackspace Portal. 

**Note**: This article only applies to managing virtual machines in your dedicated environment. If you need to manage a Rackspace Cloud server, you will need to do this via your Cloud Control Panel. 


## Powering a virtual machine on and off

Use the following steps to reboot a virtual machine:

1. Click the `Products` dropdown menu. 

2. Select `VMWare Server Virtualization` from the list.

3. Select the virtual machine that you want to power on/off from the list.

4. Click the `Actions` dropdown menu on the right-hand side. 

5. In the `Automate Action` section, select `Power VM`.


If you select `Power Off`, the action powers down the selected VM and suspends billing for the device. 

If you select `Power On`, the action powers on the previously off VM and initiates billing for the device. 

**Note**: Depending upon the length of time the virtual machine has been powered off, OS updates might need to be applied before the virtual machine is fully returned to service, for best practice and security reasons. If so, a ticket generates for the request to be reviewed by Rackspace Support.


## Rebooting a virtual machine

Use the following steps to filter the view of your virtual machines:

1. Click the `Products` dropdown menu. 

2. Select `VMWare Server Virtualization` from the list.

3. Select the virtual machine that you want to reboot from the list.

4. Click the `Actions` dropdown menu on the right-hand side. 

5. In the `Automate Action` section, select `Reboot VM`.

This automated action allows the selected Virtual Machine to be rebooted using one of the following methods:

- Soft Reboot: Graceful shutdown and restart of your server's operating system.

- Hard Reboot: Initiates an immediate shutdown and restart of your server. You need to select a reason for a Hard Reboot from the dropdown list.


## Filtering virtual machines

Use the following steps to filter the view of your virtual machines:

1. Click the `Products` dropdown menu. 

2. Select `VMWare Server Virtualization` from the list.

Click to filter the virtual machines by: 

- All Virtual Machines

- Status: Online or Powered Off

- Type: Virtual Machine, Clone, or Template

- Region (Datacenter)

- Hypervisor


## Snapshotting a virtual machine

A VMware snapshot is a copy of the virtual machine's disk file (VMDK) at a given point in time. Snapshots provide a change log for the virtual disk and are used to restore a VM to a particular point in time when a failure or system error occurs.

**Important**: As snapshot files grow, it can affect all virtual machines on the hypervisor. For this reason, Rackspace recommends keeping no longer than a two-day snapshot. After this time, you can delete the snapshot, or we can revert to the to the snapshot and original disks.

Use the following steps to snapshot a virtual machine:

1. Click the `Products` dropdown menu. 

2. Select `VMWare Server Virtualization` from the list.

3. Select the virtual machine that you want to snapshot from the list.

4. Scroll to the `Snapshot` section. 

5. Click `Create Snapshot`. 

6. Enter a description for your new snapshot.


## Reverting snapshots

**Warning**: You will lose all changes made to this virtual machine after the snapshot was created. You cannot undo this action.

Use the following steps to revert a snapshot of a virtual machine:

1. Click the `Products` dropdown menu. 

2. Select `VMWare Server Virtualization` from the list.

3. Select the virtual machine that you want to revert from the list.

4. Scroll to the `Snapshot` section. 

5. Click the gear icon next to the selected Snapshot name.

6. Click `Revert to Snapshot`.

7. Click `Revert`.


## Deleting snapshots

**Important**: Deleting a snapshot means that all changes that have occurred to the virtual machine will get committed to the parent disk or snapshot. You will lose the ability to restore to your pre-snapshot virtual machine.

Use the following steps to delete a snapshot of a virtual machine:

1. Click the `Products` dropdown menu. 

2. Select `VMWare Server Virtualization` from the list.

3. Select the virtual machine that you want to delete from the list.

4. Scroll to the `Snapshot` section. 

5. Click the gear icon next to the selected Snapshot name.

6. Click `Delete Snapshot`.


### Resizing and adjusting virtual machines

**Note**: It is important to size VMs as close to what is required as possible as resources like CPU, memory, and disk can be easily added but removal requires a restart and results in downtime.

Rackspace recommends the following resource allocation ratios:

- 1:5 physical CPU to virtual CPU
- 1:1.5 physical RAM to virtual RAM

**Important**: Before resizing a virtual machine, note that overallocation of resources has the potential to negatively impact the performance of the virtual machine and other virtual machines within your environment.

Use the following steps to resize and adjust a virtual machine:

1. Click the `Products` dropdown menu. 

2. Select `VMWare Server Virtualization` from the list.

3. Select the virtual machine that you want to resize from the list. This action opens up your individual virtual machine's details.

4. Click the `Actions` dropdown menu on the right-hand side.

5. In the `Automate Action` section, select `Resize VM`. This automatically shuts down your VM, applies your change, and powers the VM back on.

6. Choose the new number of `vCPUs` and amount of `vRAM`.

7. Click `Resize Virtual Machine`.

**Note**: Clicking Resize Virtual Machine causes your virtual machine to power off immediately. This process takes approximately 5 minutes plus the required boot time.


### Re-imaging virtual machines

Use the following steps to request a re-image a virtual machine:

1. Click the `Products` dropdown menu. 

2. Select `VMWare Server Virtualization` from the list.

3. Select the virtual machine that you want to re-image from the list. This action opens up your individual virtual machine's details.

4. Click the `Actions` dropdown menu on the right-hand side.

5. In the `Automate Action` section, select `Re-Image VM`.

6. This action request reprovisions this VM with a new Guest OS version or a new Guest OS. Provide details of any needing to be retained in current VM prior to reprovisioning.

7. Click `Request Re-Image`.

8. This action creates a ticket to track your re-imaging.

**Warning**: You lose all data on your VM once re-imaged. Save any data you might need elsewhere. The VM will be unavailable for several hours during the re-imaging process.


### Removing and deleting virtual machines

1. Click the `Products` dropdown menu. 

2. Select `VMWare Server Virtualization` from the list.

3. Select the virtual machine that you want to delete from the list. This action opens up your individual virtual machine's details.

4. Click the `Actions` dropdown menu on the right-hand side.

5. In the `Request Action` section, select `Delete VM`.

6. Enter any `Special Instructions` to include in the support ticket to be generated. 

7. Select `Request Deletion`.

This action triggers a ticket for Rackspace Support to action. To track the progress of this, see the Tracking Orders section below.


### Tracking orders

If you have requested the creation of a new VM, re-imaging, or the deletion of a VM you can track your order through the MyRack portal.

1. Click the `Products` dropdown menu. 

2. Select `VMWare Server Virtualization` from the list.

3. Select `Track Orders`.


If you have any questions or concerns about the action you are requesting, please reach out to Rackspace Support via phone or ticket. 
