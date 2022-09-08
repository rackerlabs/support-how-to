---
permalink: linux-patching-details
audit_date: '2022-07-29'
title: 'Linux Patching details'
type: article
created_date: '2022-07-29'
created_by: Osvaldo Ambrosio
last_modified_date: '2022-07-29'
last_modified_by: Jorge Garcia
product: Cloud servers
product_url: cloud-servers
---

This document will explain the different Supported Operating Systems, their patching layout, and supported patching methodologies under Dedicate Platform Hosting.

### Introduction
Applying updates to all software installed on your systems is an important part of protecting against security vulnerabilities, and pro-actively fixing problems which could affect services and uptime before the problem surfaces. 

### OS Options
On dedicated with Managed or Intensive SLA, there are the following Linux OS options:
- Red Hat Enterpise Linux 7 or 8.
- Alma Linux 8
- Rocky Linux 8
- CentOS 7
- Oracle Linux 7 or 8
- Ubuntu 18.04 LTS or 20.04 LTS

Only 64-bit x86 versions of the above are supported. 32-bit, or non-x86 versions are not available. Not all services are available with all OS choices: for example Managed Storage is not available with Ubuntu. New OS releases go through an internal qualification process, which creates a gap of at least a few months between the OS being released by the vendor, and it being supported at Rackspace.

### Channels
Channels contain a set of packages available to a system. When an update is released by the vendor, it is added to the channel thus making it available to all servers subscribed to that channel. All systems are subscribed to a main channel, and may also have some child channels for additional features.
For the main channel an OS is subscribed to, there are the following options:

#### Red Hat Enterpise Linux Base
In Rackspace terminology, the RHEL "Base" channel is equivalent to the "standard" version of Red Hat which customers get with a regular Red Hat subscription.
The "Base" channel tracks the latest minor release of RHEL at all times. When subscribed to this channel, servers will receive the latest versions of all packages released by Red Hat. This is appropriate for most servers without specific RHEL version requirements or OS platform certification/validation. Using Base there can occasionally be regressions which slip through Red Hat validation, but this is rare. Rackspace recommends using the base channel. EUS is only offered under approval from senior Linux engineers.

Support time frames for the base channels:
- RHEL 6 (ended November 30, 2020)
- RHEL 7 (ends June 30, 2024)
- RHEL 8 (ends May 31, 2029)

**NOTE:** RHEL is not available on Rackspace Cloud for customers whose accounts were created after 30th June 2016 due to Red Hat licensing restrictions. Customers with existing accounts will be able to continue to create new RHEL cloud servers. CentOS is the most similar alternative option.

#### CentOS
CentOS is a community project based on RHEL which is developed, maintained and supported by its community. Some key differences between RHEL and CentOS:
- CentOS does not have upstream support or vendor escalation available
- CentOS has different build environments and QA processes for its packages
- CentOS will receive updates later than RHEL, since packages can't be built until the source code is made available by Red Hat. CentOS has a target of making updates available within 72 hours following package release by Red Hat.
- Not eligible for hot fixes or other out of band packages provided by Red Hat support
- Extended Update Support (EUS) is not available for CentOS

CentOS end of life dates are the same as for RHEL:
- CentOS 7 (ends June 30, 2024)

#### AlmaLinux / Rocky Linux
AlmaLinux is an Open Source, community owned and governed, forever-free enterprise Linux distribution, focused on long-term stability, providing a robust production-grade platform. [AlmaLinux]: <https://almalinux.org>

Rocky Linux is an open-source enterprise operating system designed to be 100% bug-for-bug compatible with Red Hat Enterprise Linux®. It is under intensive development by the community. [Rocky Linux]: <https://Rockylinux.org>

Applies to both:
- Does not have upstream support or vendor escalation available
- Has different build environments and QA processes for its packages
- Both will receive updates later than RHEL, since packages can't be built until the source code is made available by Red Hat.
- Not eligible for hot fixes or other out of band packages provided by Red Hat support
- Extended Update Support (EUS) is not available - only latest base release is supported.
- End of life by their respective vendors will be inline with upstream vendor, Red Hat.

#### Red Hat Enterpise Linux EUS (Extended Update Support)
Available on Dedicated only. Not available on Rackspace Cloud.

With EUS, Red Hat commits to providing backports of Critical-impact security updates and urgent-priority bug fixes for minor releases of Red Hat Enterprise Linux, even for systems that are still one or two minor releases behind the current one. EUS enables customers to remain with the same minor release of Red Hat Enterprise Linux for up to approximately 24 months, allowing for extremely stable production environments for mission-critical applications. Once a system is subscribed to an EUS channel, it will receive only EUS errata updates.

As above, typical use cases for EUS are customers who need to remain on a particular minor release, usually for software certification reasons or for internal validation and testing. EUS channels are retired by Red Hat around 24 months after their release. When a particular channel (e.g. 6.1 EUS) is retired, no new updates are released to that channel. Once an EUS channel is retired, devices can be moved to the next EUS channel to continue to receive updates.

EUS support time frames for recent versions are as follows:
- RHEL 6 no longer supports EUS releases
- RHEL 7.9 EUS (Final RHEL 7 EUS Release)
- RHEL 8.4 (ends May 31, 2023)
- RHEL 8.6 (ends May 31, 2024)

### Patching infrastructure
Rackspace hosts update sources for all the Linux versions we support. This infraestructure is hosted within Rackspace data centers, meaning clients don't need Internet connectivity in order to receive updates. The Rackspace infrastructure synchronizes updates from the vendor once a day.  

### Patching Methodologies

#### Intensive Scheduled Patching
In the first week of each month a ticket for each account is generated listing the updates available from RHUI only (i.e. not including any additional repositories) at that time. An event is scheduled to apply updates to the server on either the third Wednesday or third Friday of the month, depending on patching group selected. On that day, between midnight and 4am data center time, the server will apply the set of updates listed on the ticket. Finally, in the last week of the month, failure tickets are generated for any devices which reported a non-zero exit status.

Who Can Get It? Devices with an Intensive SLA running RHEL, CentOS, AlmaLinux or Rocky Linux. Not available for Cloud, Ubuntu or Managed SLA devices.

#### Intensive Non-Managed Patching
Intensive Non-Managed Patching is a manual process where Support works with the customer to manually apply updates to their servers. In the first week of every month a ticket is generated listing the updates from RHUI channels only. This ticket requires the customer to reply, asking Rackspace to go ahead with patching for that month. Support will then work with the customer to plan, co-ordinate and execute a maintenance to update the customers server following our Rackspace Maintenance Process.

A key misconception is that the package list generated in the ticket at the start of the month is what is applied to the server when the manual patching maintenance is executed. That is not the case - when we apply updates manually, all available updates are applied including any updates released by the vendor between the monthly ticket and the time updates are applied.

Who Can Get It? Intensive Non-Managed patching is available for devices with an Intensive SLA running RHEL, CentOS, AlmaLinux, or Rocky Linux. Intensive Non-Managed patching is not available for Ubuntu, Cloud, or Managed SLA devices.

#### yum-cron / DNF-Automatic

yum-cron / DNF-Automatic is a host based package which will update a system nightly via a cron job.

Who Can Get It? yum-cron / DNF-Automatic is the default patching strategy for Managed SLA RHEL/CentOS/AlmaLinux/Rocky Linux devices at Rackspace, and runs nightly. It's also available to Intensive SLA customers if they prefer it. 

#### Auter
Auter is a Rackspace developed re-implementation of yum-cron, which aims to solve some limitations and add features targeted at Enterprise customers.

Who Can Get It? Auter can be installed for any customer running Rackspace supported RHEL or CentOS servers. Currently, Auter does not support Ubuntu. Auter is open source and available in the epel repositories, so it can also be installed on systems outside of Rackspace as well.

#### UnattendedUpgrades
Ubuntu systems at Rackspace default to automatically applying all security updates nightly via the package unattended-upgrades. This can be changed to update all packages, or to be disabled if you wish. This is the only automatic updates method available for Ubuntu at Rackspace. Unattended-upgrades is open source, so it can also be used on systems outside of Rackspace.

#### Manual Patching
Outside of Intensive SLA's Intensive Non-Managed Patching, Rackspace does not offer regular Manual Patching.

Manual Patching should only be used under the following circumstances:
- Manual Patching of PCS, or Oracle RAC servers
- Manual Patching to fix patching problem. EG: a broken dependency has resulted in hundreds of pending package updates.

#### No Patching/Customer Managed Patching
Customers can choose to manage their own patching or to not patch their servers at all. Not patching systems is strongly discouraged by Rackspace in order to prevent security vulnerabilities and avoid being affected by software bugs. With this options customers have full control and responsibility over their own patching.

#### End of Life at Rackspace
End of Life (EOL) is the date beyond which the operating system or software package will no longer receive updates and support from the vendor. The software or operating system will continue to function in its existing state. Before a supported operating system reaches end of life, Rackspace will take measures to notify and migrate customers off affected platforms. This includes engaging with account teams to start migration processes where appropriate, and proactive ticketing to raise customer awareness.

Any support Rackspace provides for servers running an EOL operating system falls under our reasonable endeavours policy and no tools or future Rackspace updates (for example, to our monitoring agents) will be guaranteed to continue working on the EOL operating system. EOL operating systems can no longer be provisioned. See  https://www.rackspace.com/information/legal/eolterms for more detail on support limitations of EOL releases.

#### Related articles
- [Linux patching for Cloud Servers with the Managed Operations service level][LPatch]
- [Patching base images][Pimg]
- [Linux Spheres of Support for Dedicated and Managed Operations][LSph]

#### References
- [RHEL support life cycle][rhel]
- [General questions about CentOS][centos]
- [Unattended-upgrades (Ubuntu)][ubuntu]

[LPatch]: <https://docs.rackspace.com/support/how-to/linux-patching-for-cloud-servers-managed-operations-service-level/>
[PImg]: <https://docs.rackspace.com/docs/user-guides/infrastructure/cloud-config/compute/cloud-images-product-concepts/base-images/patching-base-images>
[LSph]: <https://docs.rackspace.com/support/how-to/linux-spheres-of-support-for-dedicated-and-managed-ops>
[rhel]: <https://access.redhat.com/support/policy/updates/errata>
[centos]: <https://wiki.centos.org/FAQ/General>
[ubuntu]: <https://wiki.debian.org/UnattendedUpgrades>
</br>

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
