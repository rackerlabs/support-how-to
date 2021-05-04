---
permalink: managing-virtual-machines
audit_date: '2020-06-10'
title: 'Managing Virtual Machines'
type: article
created_date: '2020-06-08'
created_by: Chris Silva
last_modified_date: '2020-06-10'
last_modified_by: William Loy
product: Dedicated Hosting
product_url: dedicated-hosting/
---

This article describes the different options available for managing virtual machines in your Dedicated Rackspace Portal. 

This article only applies to managing virtual machines in your dedicated environment. If you need to manage a Rackspace Cloud server, you need to do this via your Cloud Control Panel. 


### Powering a virtual machine on and off

Use the following steps to reboot a virtual machine:

1. Click the **Products** dropdown menu. 

2. Select **VMWare Server Virtualization** from the list.

3. Select the virtual machine that you want to power on or off from the list.

4. Click the **Actions** dropdown menu on the right-hand side. 

5. In the **Automate Action** section, select **Power VM**.


- If you select **Power Off**, the action powers down the selected virtual machine (VM) and suspends billing for the device. 

- If you select **Power On**, the action powers on the VM and initiates billing for the device. 

**Note**: Pending operating system (OS) updates should be applied before the virtual machine is fully returned to service. If updates are pending, a ticket generates for review by Rackspace Support.


## Rebooting a virtual machine

Use the following steps to filter the view of your virtual machines:

1. Click the **Products** dropdown menu. 

2. Select **VMWare Server Virtualization** from the list.

3. Select the virtual machine that you want to reboot from the list.

4. Click the **Actions** dropdown menu on the right-hand side. 

5. In the **Automate Action** section, select **Reboot VM**.

This automated action enables the selected VM to reboot by using one of the following methods:

- **Soft Reboot**: Graceful shutdown and restart of your server's operating system.

- **Hard Reboot**: Initiates an immediate shutdown and restart of your server. You need to select a reason for a Hard Reboot from the dropdown list.


## Filtering virtual machines

Use the following steps to filter the view of your virtual machines:

1. Click the **Products** dropdown menu. 

2. Select **VMWare Server Virtualization** from the list.

Click to filter the virtual machines by: 

- All Virtual Machines

- Status: Online or Powered Off

- Type: Virtual Machine, Clone, or Template

- Region (Datacenter)

- Hypervisor


## Snapshotting a virtual machine

A VMware snapshot is a copy of the virtual machine's disk file (VMDK) at a given point in time. Snapshots provide a change log for the virtual disk and can restore a VM to a particular point in time when a failure or system error occurs.

**Important**: Growing snapshot files can impact all virtual machines on the hypervisor. For this reason, Rackspace recommends limiting snapshots to two days. After this time, you can delete the snapshot, or revert to the snapshot and original disks.

Use the following steps to snapshot a virtual machine:

1. Click the **Products** dropdown menu. 

2. Select **VMWare Server Virtualization** from the list.

3. Select the virtual machine that you want to snapshot from the list.

4. Scroll to the **Snapshot** section. 

5. Click **Create Snapshot**. 

6. Enter a description for your new snapshot.


## Reverting snapshots

**Warning**: All changes made to this virtual machine after creating the snapshot are lost. This action can't be undone.

Use the following steps to revert a snapshot of a virtual machine:

1. Click the **Products** dropdown menu. 

2. Select **VMWare Server Virtualization** from the list.

3. Select the virtual machine that you want to revert from the list.

4. Scroll to the **Snapshot** section. 

5. Click the gear icon next to the selected Snapshot name.

6. Click **Revert to Snapshot**.

7. Click **Revert**.


## Deleting snapshots

**Important**: Deleting a snapshot means that all changes that have occurred to the virtual machine are committed to the parent disk or snapshot. You lose the ability to restore to your pre-snapshot virtual machine.

Use the following steps to delete a snapshot of a virtual machine:

1. Click the **Products** dropdown menu. 

2. Select **VMWare Server Virtualization** from the list.

3. Select the virtual machine that you want to delete from the list.

4. Scroll to the **Snapshot** section. 

5. Click the gear icon next to the selected Snapshot name.

6. Click **Delete Snapshot**.


### Resizing and adjusting virtual machines

**Note**: VM resources like CPU, memory, and disk can be easily added but thier removal requires a restart which results in downtime.

Rackspace recommends the following resource allocation ratios:

- 1:5 physical CPU to virtual CPU
- 1:1.5 physical RAM to virtual RAM

**Important**: Before resizing a VM, note that overallocation of resources can negatively impact the performance of the VM and other virtual machines within your environment.

Use the following steps to resize and adjust a VM:

1. Click the **Products** dropdown menu. 

2. Select **VMWare Server Virtualization** from the list.

3. Select the VM that you want to resize from the list. This action opens up your individual virtual machine's details.

4. Click the **Actions** dropdown menu on the right-hand side.

5. In the **Automate Action** section, select **Resize VM**. This automatically shuts down your VM, applies your change, and powers the VM back on.

6. Choose the new number of `vCPUs` and amount of `vRAM`.

7. Click **Resize Virtual Machine**.

**Note**: Clicking **Resize Virtual Machine** causes your VM to power off immediately. This process takes about five minutes in addition to the required boot time.


### Re-imaging virtual machines

Use the following steps to request a re-image a VM:

1. Click the **Products** dropdown menu. 

2. Select **VMWare Server Virtualization** from the list.

3. Select the VM that you want to re-image from the list. This action opens up your individual virtual machine's details.

4. Click the **Actions** dropdown menu on the right-hand side.

5. In the **Automate Action** section, select **Re-Image VM**.

6. This action request reprovisions the VM with a new Guest OS version or a new Guest OS. Provide details of what to retain in the current VM before reprovisioning.

7. Click **Request Re-Image**.

8. This action creates a ticket to track your re-imaging.

**Warning**: You lose all data on your VM after it is re-imaged. Save any data you might need elsewhere. The VM is unavailable for several hours during the re-imaging process.


### Removing and deleting virtual machines

1. Click the **Products** dropdown menu. 

2. Select **VMWare Server Virtualization** from the list.

3. Select the VM that you want to delete from the list. This action opens up your individual virtual machine's details.

4. Click the **Actions** dropdown menu on the right-hand side.

5. In the **Request Action** section, select **Delete VM**.

6. Enter any **Special Instructions** to include in the support ticket. 

7. Select **Request Deletion**.

This action triggers a ticket for Rackspace Support. To track the progress of this, see the Tracking Orders section below.


### Tracking orders

If you have request the creation of a new VM, re-imaging, or the deletion of a VM you can track your order through the MyRack portal.

1. Click the **Products** dropdown menu. 

2. Select **VMWare Server Virtualization** from the list.

3. Select **Track Orders**.
