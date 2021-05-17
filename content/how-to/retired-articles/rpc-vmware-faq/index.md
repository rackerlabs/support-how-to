---
permalink: rpc-vmware-faq
audit_date:
title: Rackspace Private Cloud Powered by VMware FAQ
type: article
created_date: '2015-01-29'
created_by: Karin Levenstein
last_modified_date: '2021-05-13'
last_modified_by: Rose Morales
---

Rackspace Private Cloud Powered by VMware vCloud&reg; (hereafter refered to as RPC-V) is a private cloud offering based on VMware software defined datacenter (SDDC) services hosted on a dedicated management cluster. This list of frequently asked questions provides details about RPC-V features and management options.

For more information, see the [RPC-V product page](https://www.rackspace.com/vmware/private-cloud).

### General

{{<accordion title="How do I access RPC-V? {#general-access}" col="in" href="accordion1">}}

You can access RPC-V only through a VPN connection to Rackspace.
{{</accordion>}}
{{<accordion title="What Rackspace data centers provide RPC-V? {#general-datacenters}" col="in" href="accordion2">}}

RPC-V is available in the IAD, DFW, LON, ORD, SYD and HKG data centers.
{{</accordion>}}
{{<accordion title="Are backups included with RPC-V? {#general-backup}" col="in" href="accordion3">}}

RPC-V management environments are automatically protected by an image based CommVault solution. 
{{</accordion>}}
{{<accordion title="Is an Anti-Virus solution included with RPC-V? {#general-backup}" col="in" href="accordion4">}}

Optional antivirus software can be licensed and installed to protect Guest Operating Systems. 
{{</accordion>}}
{{<accordion title="How can I migrate virtual machines to RPC-V? {#general-migrate}" col="in" href="accordion5">}}

You can migrate data to Rackspace by using VMware vSphere replication or a number of other supported replication solutions. For more information about migrating to RPC-V, contact Rackspace Support.
{{</accordion>}}
{{<accordion title="Where can I find a list of known issues for RPC-V? {#general-issues}" col="in" href="accordion6">}}

Known issues are listed in the release notes for each version of vSphere. You can find your version number by clicking **Help** \> **About** in vCenter. For more information, see the [VMware vSphere Documentation]( https://docs.vmware.com/en/VMware-vSphere/index.html).
{{</accordion>}}


### Architecture

{{<accordion title="Are RPC-V environments deployed in a high availability (HA) configuration? {#arch-ha}" col="in" href="accordion7">}}

Yes, RPC-V environments are deployed in an HA configuration.
{{</accordion>}}
{{<accordion title="Is there a limit to the number of VMs per environment? {#arch-limit}" col="in" href="accordion8">}}

Rackspace does not impose a limit on VMs per environment. We can provide recommendations for best practices to maintain optimal performance.
{{</accordion>}}
{{<accordion title="Can I access the vCenter API? {#arch-api}" col="in" href="accordion9">}}

Yes. You can access the vCenter and vSphere APIs, subject to permissions restrictions on a user account.
{{</accordion>}}
{{<accordion title="Can I add ESXi hypervisors in my data center to a RPC-V environment? {#arch-addhyper}" col="in" href="accordion10">}}

By default only hypervisors provided by Rackspace can be added, please contact Rackspace support for additional details.
{{</accordion>}}
{{<accordion title="Can I manage vCenter plug-ins and add my own third party plug-ins? {#arch-plugins}" col="in" href="accordion11">}}

Yes, write access to vCenter is provided.
{{</accordion>}}
{{<accordion title="Are Storage RDMs supported? {#arch-rdms}" col="in" href="accordion12">}}

Yes, you can get support for raw device mappings (RDMs) by opening a support ticket with our storage and virtualization team.
{{</accordion>}}

----

### Integration

{{<accordion title="What other VMware products are supported? {#int-other}" col="in" href="accordion13">}}

RPC-V allows customers to use other VMware products like vRealize Automation, which are optional add-ons.
{{</accordion>}}
{{<accordion title="Is Rackspace RackConnect supported with RPC-V? {#int-rackconnect}" col="in" href="accordion14">}}

Yes.
{{</accordion>}}

----

### Monitoring

{{<accordion title="How are RPC-V components monitored? {#monitoring-how}" col="in" href="accordion15">}}
The management infrastructure is monitored by using the following combination of tools:

-   **HP SiteScope for vCenter services** alert Rackspace virtualization engineers when any web services associated with RPC-V are unavailable.
-   **Rackwatch for hypervisor connectivity** alerts Rackspace virtualization engineers when devices don't respond to ping requests.
-   **CA&reg; Nimsoft Monitor for vCenter alarms** alert Rackspace virtualization engineers to alarms raised in vCenter.
{{</accordion>}}
{{<accordion title="Is monitoring provided for my unmanaged VMs? {#monitoring-unmanaged}" col="in" href="accordion16">}}

No.  Rackspace does not provide monitoring for VMs designated as unmanaged.  For more information.
{{</accordion>}}
{{<accordion title="How do I know if RPC-V resources are low? {#monitoring-resources}" col="in" href="accordion17">}}

RPC-V includes the VMware vRealize Operations (vROps) suite of performance monitoring and planning tools. vROps provides advanced reporting and forecasting capabilities, and the ability to set alerts to notify you when resources are low. These tools can be useful for optimizing resources and identifying performance bottlenecks.

Rackspace can help you with the use of other monitoring software as needed.
{{</accordion>}}
