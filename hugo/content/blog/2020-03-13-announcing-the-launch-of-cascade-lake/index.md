---
layout: post
title: "Announcing the launch of Cascade Lake"
date: 2020-03-13
comments: true
author: Joe Wiese
published: true
authorIsRacker: true
authorAvatar: 'https://s.gravatar.com/avatar/0efd04b476144df76914f2eb1fbf86de'
bio: "I have been developing server solutions for Rackspace and our customers
since 2006. I began my time at Rackspace in our original data center in downtown
San Antonio in 2004. I also spent six years in the US Navy, where I worked on
the most advanced weapons system in the Navy at that time."
categories:
    - General
    - Architecture
metaTitle: "Announcing the launch of Cascade Lake"
metaDescription: "Rackspace has recently released the second generation of the Intel Xeon scalable architecture processor family, code-named Cascade Lake."
ogTitle: "Announcing the launch of Cascade Lake"
ogDescription: "Rackspace has recently released the second generation of the Intel Xeon scalable architecture processor family, code-named Cascade Lake."
---

Rackspace has recently released the second generation of the Intel Xeon scalable
architecture processor family, code-named Cascade Lake.

<!--more-->

Cascade Lake processors are socket compatible with the first generation Intel&reg;
Xeon Scalable Processors, code-named Skylake. We deploy Skylake in the Dell&reg;
PowerEdge R740xd and R840 models. Cascade Lake brings the following notable
updates to the family line:

- We have upgraded our standard octa-core option to 2.50GHz from the 2.10GHz
  of the previous generation.
- The memory bus has increased from 2666MHz to 2933MHz.
- Our Gold and Platinum offerings have increased slightly in clock speed across
  all options.

The changes are minimal but impactful. Note that all other attributes of a
Skylake offering carry forward to Cascade Lake including the following:

- **Memory capacities**: 96 GB starting point per CPU installed
- **Hard drives/SSDs**: minimum of two 48 GB Read Intensive SATA SSDs for a boot mirror
- **SAN/NAS options**: High Availability (HA) pairing for Emulex FC HBA or Ethernet connections,
  respective to the storage method

Rackspace identified the following processors in the myriad of options from
Intel that meet the needs for most use cases:

- Intel Xeon Silver 4215 octa-core @ 2.50 GHz (Default selection. Standard stocked item.)
- Intel Xeon Gold 6226 12-core @ 2.50 GHz (VSAN default selection. Standard stocked item.)
- Intel Xeon Gold 6248 20-core @ 2.50 GHz (Standard stocked item.)
- Intel Xeon Gold 5222 quad-core @3.80 GHz (Special selection. Non-stocked item.)
- Intel Xeon Gold 8280 28-core @ 2.70 GHz (Special selection. Non-stocked item.)

The first three items in the preceding list are standard stocked items, and the
last two are for special use cases. You can order the special processors with
less effort than other non-standard processors, but we might not have them in
stock because of low projected demand. If demand signals suggest that other
options are more desirable to our customer base, we might modify this list of
standards over time.

We leverage the Dell PowerEdge R740xd for the Cascade Lake offering. Dell made
the following changes to the R740xd:

- Included networking is still the Intel X550 quad port 10GBASE-T rNDC, four
  port 1 GB/10 GB onboard NIC. We are adding an extra dual port X550 NIC to all builds.
- The dual socket 24-bay 2.5" (SFF) version of the R740xd also includes the
  PCIe card you need to enable up to four NVMe U.2 2.5" hard drives by default.

These two changes make the R740xd even more ready *out-of-the-box* for many of
our virtualized environments, like VMware&reg; ESXi and VSAN. The additional NIC
is beneficial to enable NIC bonding, or additional networking needs for
VMware, as an example. The NVMe adapter enables the final four hard drive bays
in the 24-bay dual socket server to accept NVMe hard drives. VSAN often uses
these drives for caching, but you can use them in many other applications for
caching or fast storage. These drives are available in the following sizes
for the indicated uses:

- 1.6 TB Mixed-use NVMe
- 3.2 TB Mixed-use NVMe
- 7.68 TB Read-intensive NVMe (non-stocked item)

We believe that including Cascade Lake processors in the catalog and updating
the R740xd server create a better offering to meet your needs.

<a class="cta purple" id="cta" href="https://www.rackspace.com/dedicated-servers">Learn more about Rackspace Managed Dedicated Server Hosting.</a>

Visit [www.rackspace.com](https://www.rackspace.com) and click **Sales Chat**
to get started.

Use the Feedback tab to make any comments or ask questions.
