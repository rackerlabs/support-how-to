---
permalink: vmware-server-virtualization-faq
audit_date: '2020-07-29'
title: VMware Server Virtualization FAQ
type: article
created_date: '2015-12-10'
created_by: Rackspace Support
last_modified_date: '2020-07-29'
last_modified_by: Cat Lookabaugh
product: VMware Server Virtualization
product_url: vmware-server-virtualization
---

### Architecture
{{<accordion title="What type of disaster recovery (DR) solutions does Rackspace offer?" col="in" href="accordion1">}}

Rackspace offers two different solutions for DR:

- [Replication Manager](https://docs.rackspace.com/docs/docs-vmware-server-virt/server-virt-handbook/getting-started/replication-manager/):

  Replication Manager (SRM) is an add-on service for VMware&reg; Server Virtualization
  that utilizes VMware vCenter&trade; Site Recover Manager&trade; (SRM) to automate portions
  of the customer’s disaster recovery (DR) plan.

- [VM Replication](https://docs.rackspace.com/docs/docs-vmware-server-virt/server-virt-handbook/getting-started/vm-replication/):

  VM Replication provides geographical redundancy and helps protect
  business-critical VMs in the event of a data center outage or unplanned
  downtime. Geographical redundancy is a key component of any sound
  DR strategy. VM Replication helps protect and recover
  VMware Server Virtualization VMs by easily and cost-effectively
  replicating VMs between our data centers.
{{</accordion>}}
{{<accordion title="Are image-based backups part of the VMware Server Virtualization offering?" col="in" href="accordion2">}}

- [Virtual Machine Recovery](https://docs.rackspace.com/docs/docs-vmware-server-virt/server-virt-handbook/getting-started/vm-recovery/):

  Managed Backup Virtual Machine Recovery (VMR) is the Rackspace-productized
  version of VMware’s API for Data Protection (VADP) based backups to
  protect VMware Server Virtualization VMs. Managed Backup (MBU) VMR is a
  fully managed multi-tenant Backup and Recovery service for VMware
  Server Virtualization environments hosted in the Rackspace data centers.
{{</accordion>}}
{{<accordion title="What are the benefits of Rackspace VMware Server Virtualization?" col="in" href="accordion3">}}

With VMware Server Virtualization, you can use the MyRackspace Web Portal
to easily administer your hosted environment and resources. Offload the
maintenance and monitoring of the infrastructure, VMware stack, and Guest
OS layer to your virtual IT team consisting of VMware Certified Professionals
and experts in storage, networking, and infrastructure. This way you can focus more
on your core business. With industry-leading SLAs that include 100% network
uptime guarantees and one-hour hardware replacement guarantees, we can help
make sure your mission-critical applications stay up and running.
{{</accordion>}}
{{<accordion title="With VMware Server Virtualization, can I log in to the hypervisor?" col="in" href="accordion4">}}

No. However, you can view the performance and other statistics
through the MyRackspace&reg; portal. Contact your Rackspace VMware support team
for more details.
{{</accordion>}}
{{<accordion title="With VMware Server Virtualization, do I get API access to the virtual centers or hypervisors?" col="in" href="accordion5">}}

No. Rackspace does not provide API access. If you are interested in gaining
access to the software, speak to your Rackspace account team about
[Rackspace Private Cloud powered by VMware](https://www.rackspace.com/en-gb/vmware/private-cloud).
{{</accordion>}}

------------------------------------------------------------------------

### Features

{{<accordion title="How do I re-image a VM?" col="in" href="accordion6">}}

You can request this through an action in the MyRackspace Portal.
{{</accordion>}}
{{<accordion title="Are image-based backups part of the VMware Server Virtualization offering?" col="in" href="accordion7">}}

Yes, they are available for an additional service fee by using VM Recovery.
{{</accordion>}}
{{<accordion title="Can I use fault tolerance with my Rackspace VMs?" col="in" href="accordion8">}}

VMware Server Virtualization does not currently allow VMware vSphere&reg; Storage vMotion&reg;
so you cannot enable fault tolerance.
{{</accordion>}}
{{<accordion title="Can I turn off utility billing for VMs?" col="in" href="accordion9">}}

You can suspend the utility billing of virtual machines when
they are not in use by powering down VMs through the MyRackspace Portal.
By powering off a VM from within the OS, you not only generate an
alert ticket for support to investigate, but the VM continues billing
at the daily utility rate. To power down VMs through the portal, see
[Powering a virtual machine on and off](https://docs.rackspace.com/docs/docs-vmware-server-virt/server-virt-handbook/user-manual/managing-vms/#svh-power-vm).
{{</accordion>}}
{{<accordion title="How are my VMs backed up?" col="in" href="accordion10">}}

Rackspace can back up VMs through Rackspace Managed Backup service.
Guest OS agent-based backups are available along with image-level
backup through the VM Recovery add-on Service.
{{</accordion>}}
{{<accordion title="What is a snapshot, and how does it work?" col="in" href="accordion11">}}

A snapshot is a point-in-time delta file to track all changes to a virtual
machine. Snapshots give you the ability to roll back (Windows
patching at the disk level), but they are not a permanent backup. You
generally should not keep them for more than 72 hours.
{{</accordion>}}
{{<accordion title="What can I use the MyRackspace Portal for?" col="in" href="accordion12">}}

-  Ordering new or multiple VMs
-  Change the resources of a VM
-  Resize VMs
-  Request re-imaging of a VM
-  Cloning and copying VMs
-  Power on or off and reset VMs
-  Performance metrics for VMs, hypervisors, and clusters (CPU/RAM utilization, network, disk utilization)
-  Requesting deletion of VMs
{{</accordion>}}

------------------------------------------------------------------------

### Implementation

{{<accordion title="How do I appropriately size my VMs?" col="in" href="accordion13">}}

Less is better. It is more important to size VMs closer to what they
need as opposed to loading in extra capacity that you might not use.
Assigning too many CPUs slows performance down. Begin with two CPUs, and go to
four if necessary. Very rarely start with four or more. Regardless of vendor
recommendation for a physical environment, virtual CPUs do not map 1 to 1
to physical CPUs. It's a completely different architecture.
{{</accordion>}}
{{<accordion title="Why does Rackspace require overhead storage?" col="in" href="accordion14">}}

This overhead is necessary to perform functions like
cloning, snapshotting, or vMotion.
{{</accordion>}}

------------------------------------------------------------------------

### Maintenance

{{<accordion title="How do I add RAM or CPU to a VM?" col="in" href="accordion15">}}

To add RAM or CPU to your VM, request a ticket with your Rackspace VMware
support team through the MyRackspace Portal.
{{</accordion>}}
{{<accordion title="What are the differences between snapshots, clones, and templates?" col="in" href="accordion16">}}

-   **Snapshot**: A snapshot is a point-in-time instance of a VM that
    can be reverted or remerged (deleted). When you take a snapshot, the
    hypervisor software begins recording changes in the
    *delta disk*. If you revert the snapshot, the system removes the delta disk
    and restores the parent disk, which has the effect of taking the
    VM back to the instant you created the snapshot. Any subsequent
    changes after the snapshot no longer exist. If you remerge (or delete)
    the snapshot, the system merges the delta disk into the parent disk,
    and you can no longer jump back to the snapshot.
    Use snapshots in situations such as patching, where you revert or remerge
    (delete) a snapshot depending on the patch success. Snapshots are stored
    with the VM and therefore use your storage allocation. We recommend that you
    keep snapshots for only two to three days to prevent overusing the disk.
-   **Clone**: A clone is a one-to-one image copy of an existing VM. It
    acts independently from a parent VM, but it is an exact copy of the
    parent VM when it is initially created. You can create new VMs from
    the clones. You can create one clone per VM on the
    Rackspace infrastructure. The clone is also stored on the Rackspace
    infrastructure, so it doesn't use up your storage allocation. While
    clones can act and operate independently of the parent,
    snapshots cannot.
-   **Template**: A template is a clone that is designed for the deployment
    of future VMs. A template is also stored on the Rackspace
    storage infrastructure. You can create one template per VM.
{{</accordion>}}
{{<accordion title="Where is data stored if I create a snapshot, copy as a clone, or template?" col="in" href="accordion17">}}

-   Snapshots are stored with the parent disk of VM and consume your
    allocated storage infrastructure. You must carefully manage snapshots to
    ensure that they don’t consume all the disk space.
-   You must have sufficient additional storage to store clones and templates.
{{</accordion>}}
{{<accordion title="How can I expand or shrink my virtual disk?" col="in" href="accordion18">}}

You can expand your virtual disk, but you can't shrink it. To expand it, submit a ticket and
specify the virtual disk that you want expanded.
{{</accordion>}}
{{<accordion title="How do I view the performance or monitor my available resources of a VM or host?" col="in" href="accordion19">}}

You can use the MyRackspace Portal to view hypervisor and virtual machine
performance. For instructions on how to view performance, see the
[Viewing hypervisor and virtual machine performance section](https://docs.rackspace.com/docs/docs-vmware-server-virt/server-virt-handbook/user-manual/managing-hyps-clusters/) of
the Server Virtualization Customer Handbook.
{{</accordion>}}
{{<accordion title="How do I create and delete clones or templates?" col="in" href="accordion20">}}

For information on how to create and delete clones or templates, see the [Copy and cloning virtual machines
section](https://docs.rackspace.com/docs/docs-vmware-server-virt/server-virt-handbook/user-manual/copy-clone-vms/)
of the Server Virtualization Customer Handbook.
{{</accordion>}}
{{<accordion title="How do I create and delete snapshots?" col="in" href="accordion1">}}

For information on how to create and delete snapshots, see the [Snapshotting a virtual machine section](https://docs.rackspace.com/docs/docs-vmware-server-virt/server-virt-handbook/user-manual/managing-vms/#snapshotting-a-virtual-machine) of
the Server Virtualization Customer Handbook.
{{</accordion>}}
{{<accordion title="Can I have a copy of my Rackspace VM?" col="in" href="accordion21">}}

Due to our licensing agreements with vendors, we cannot provide a
licensed VM image. If you want to have a copy of a Rackspace VM,
we can export the VM and remove the licensing. Speak to your
VMware support team for more information.
{{</accordion>}}
{{<accordion title="Do powered-down VMs count toward my available resources?" col="in" href="accordion22">}}

Yes. The **Available RAM (or CPU)** field in the portal takes into
account all VMs, whether powered down or not. However, powered-down VMs
prevent the VM from consuming resources on the hypervisor.
{{</accordion>}}
{{<accordion title="How many clones, templates, and snapshots can I have active?" col="in" href="accordion23">}}

You can have one clone, one template, and unlimited snapshots. Snapshots can be "unlimited"
in that they take up to the original size of the original disk. The
snapshots take up customer storage and do count toward the required 15%
overhead.

**IMPORTANT** We do not recommend having more snapshots than is necessary. Snapshots
can consume your resources and cause performance issues. Speak to your
VMware support team for more information.

{{</accordion>}}
{{<accordion title="How long will it take to provision a VM?" col="in" href="accordion24">}}

Deployment times can vary based on the request, availability of resources
or IP addresses, and storage or compute resources (CPU and RAM) and
hypervisors.
{{</accordion>}}
