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
- CentOs 7
- Oracle Linux 7 or 8
- Ubuntu 18.04 LTS or 20.04 LTS

Only 64-bit x86 versions of the above are supported. 32-bit, or non-x86 versions are not available. Not all services are available with all OS choices: for example Managed Storage is not available with Ubuntu. New OS releases go through an internal qualification process, which creates a gap of at least a few months between the OS being released by the vendor, and it being supported at Rackspace.

### Channels
Channels contain a set of packages available to a system. When an update is released by the vendor, it is added to the channel thus making it available to all servers subscribed to that channel. All systems are subscribed to a main channel, and may also have some child channels for additional features.
For the main channel an OS is subscribed to, there are the following options:

#### Red Hat Enterpise Linux Base
In Rackspace terminology, the RHEL "Base" channel is equivalent to the "standard" version of Red Hat which customers get with a regular Red Hat subscription.
The "Base" channel tracks the latest minor release of RHEL at all times. When subscribed to this channel, servers will receive the latest versions of all packages released by Red Hat. This is appropriate for most servers without specific RHEL version requirements or OS platform certification/validation. Using Base there can occasionally be regressions which slip through Red Hat validation, but this is rare. Rackspace recommends the use of Base channel except when using SAN storage, for example with Red Hat Cluster Suite (RHCS) nodes, or when there is a third party requirement for a specific RHEL minor release.

Support time frames for the base channes:
- RHEL 6 (ended November 30, 2020)
- RHEL 7 (ends June 30, 2024)
- RHEL 8 (ends May 31, 2029)

> *Note: RHEL is not available on Rackspace Cloud for customers whose accounts were created after 30th June 2016 due to Red Hat licensing restrictions. Customers with existing accounts will be able to continue to create new RHEL cloud servers. CentOS is the most similar alternative option.

#### CentOS
CentOS is a community project based on RHEL which is developed, maintained and supported by its community. Some key differences between RHEL and CentOS:
- CentOS does not have upstream support or vendor escalation available
- CentOS has different build environments and QA processes for its packages
- CentOS will receive updates later than RHEL, since packages can't be built until the source code is made available by Red Hat. CentOS has a target of making updates available within 72 hours following package release by Red Hat.
- Not eligible for hot fixes or other out of band packages provided by Red Hat support
- Extended Update Support (EUS) is not available for CentOS

As a service, Rackspace provides "CentOS point releases" for CentOS 6 which are designed to lock package versions to those released for a certain minor version - in other words, a rough approximation of EUS for RHEL. To do this, when CentOS release a new minor release (for example CentOS 6.7), before the packages are uploaded into Rackspace's patching infrastructure, a snapshot of the channel is taken, and a "point release" channel is created based on that.

CentOS end of life dates are the same as for RHEL:
- CentOS 6 (ends November 30, 2020)
- CentOS 7 (ends June 30, 2024)

#### Red Hat Enterpise Linux EUS (Extended Update Support)
Available on Dedicated only. Not available on Rackspace Cloud.

With EUS, Red Hat commits to providing backports of Critical-impact security updates and urgent-priority bug fixes for minor releases of Red Hat Enterprise Linux, even for systems that are still one or two minor releases behind the current one. EUS enables customers to remain with the same minor release of Red Hat Enterprise Linux for up to approximately 24 months, allowing for extremely stable production environments for mission-critical applications. Once a system is subscribed to an EUS channel, it will receive only EUS errata updates.

As above, typical use cases for EUS are customers who need to remain on a particular minor release, usually for software certification reasons or for internal validation and testing. EUS channels are retired by Red Hat around 24 months after their release. When a particular channel (e.g. 6.1 EUS) is retired, no new updates are released to that channel. Once an EUS channel is retired, devices can be moved to the next EUS channel to continue to receive updates.

EUS support time frames for recent versions are as follows:
- RHEL 6 no longer supports EUS releases
- 7.4 EUS (ends August 31, 2019)
- 7.5 EUS (ends April 30, 2020)
- 7.6 EUS (ends October 31, 2020)
- 7.7 EUS (GA 2H/2019; Final RHEL 7 EUS Release)

### Patching infrastructure
Rackspace hosts update sources for all the Linux versions we support. This infraestructure is hosted within Rackspace data centers, meaning clients don't need Internet connectivity in order to receive updates. The Rackspace infrastructure synchronizes updates from the vendor once a day.  

### Patching Methodologies

#### Intensive Scheduled Patching
n the first week of each month a ticket for each account is generated by our Linux Patching team listing the updates available from RHN/Spacewalk only (i.e. not including any additional yum repositories) at that time. An event is scheduled in RHN Satellite or Spacewalk to apply updates to the server on either the third Wednesday or Friday of the month, depending on patching group selected. On that day, between midnight and 4am data center time, the server will apply the set of updates listed on the ticket. Finally, in the last week of the month the Linux Patching team generates failure tickets for any devices which reported a non-zero exit status for Support to manually investigate.

Who Can Get It? Devices with an Intensive SLA running RHEL or CentOS. Not available for Cloud, Ubuntu or Managed SLA devices.

#### Intensive Non-Managed Patching
Intensive Non-Managed Patching is a manual process where Support works with the customer to manually apply updates to their servers. In the first week of every month a ticket is generated by our Linux Patching team, listing the updates from RHN/Spacewalk channels only available for devices on an account at that particular time. This ticket remains in the Segment Support queue until the customer replies to the ticket asking Rackspace to go ahead with patching for that month, at which point the ticket will move into the general support queue. Support will then work with the customer to plan, co-ordinate and execute a maintenance to update the customers server following our Rackspace Maintenance Process.

A key misconception is that the package list generated in the ticket at the start of the month is what is applied to the server when the manual patching maintenance is executed. That is not the case - when we apply updates manually, all available updates are applied including any updates released by the vendor between the monthly ticket and the time updates are applied, and any updates from non-RHN/Spacewalk channels.

Who Can Get It? Intensive Non-Managed patching is available for devices with an Intensive SLA running RHEL or CentOS. Intensive Non-Managed patching is not available for Ubuntu, Cloud, or Managed SLA devices.

#### yum-cron

yum-cron is a host based package which will update a system nightly via a cron job.

Who Can Get It? yum-cron is the default patching strategy for Managed SLA CentOS and RHEL devices at Rackspace, and runs nightly. It's also available to Intensive SLA customers if they prefer it. yum-cron is open source (part of the yum project), so it can also be installed on systems outside of Rackspace as well.

#### Auter
Auter is a Rackspace developed re-implementation of yum-cron, which aims to solve some limitations and add features targeted at Enterprise customers.

Who Can Get It? Auter can be installed for any customer running Rackspace supported RHEL or CentOS servers. Currently, Auter does not support Ubuntu. Auter is open source and available in the epel repositories, so it can also be installed on systems outside of Rackspace as well.

Ubuntu systems at Rackspace default to automatically applying all security updates nightly via the package unattended-upgrades. This can be changed to update all packages, or to be disabled if you wish. This is the only automatic updates method available for Ubuntu at Rackspace. unattended-upgrades is open source, and so you can also use it on any systems you have outside of Rackspace as well

#### Manual Patching
Outside of Intensive SLA's Intensive Non-Managed Patching, Rackspace does not offer regular Manual Patching. Since Manual Patching is labour intensive, customers should be discouraged from creating monthly/regular tickets for GTS SysAds to perform Manual Patching Maintenances, and instead steered towards one of the other options.

Manual Patching should be used under the following circumstances:
- Manual Patching of RHCS, PCS, or Oracle Clusters (note: Current RHCS/PCS standard is to yum exclude cluster and service packages, and allow the SLA's default patching standard to take care of all other OS level updates)
- Manual Patching to fix patching problem. EG a broken dependency has resulted in the culmination of hundreds of packages.

#### No Patching/Customer Managed Patching
Customers can choose to manage their own patching or to not patch their servers at all. Not patching systems is strongly discouraged by Rackspace in order to prevent security vulnerabilities and avoid being affected by software bugs. With this options customers have full control and responsibility over their own patching.

#### End of Life at Rackspace
End of Life (EOL) is the date beyond which the operating system or software package will no longer receive updates and support from the vendor. The software or operating system will continue to function in its existing state. Before a supported operating system reaches end of life, Rackspace will take measures to notify and migrate customers off affected platforms. This includes engaging with account teams to start migration processes where appropriate, and proactive ticketing to raise customer awareness.

Any support Rackspace provides for servers running an EOL operating system falls under our reasonable endeavours policy and no tools or future Rackspace updates (for example, to our monitoring agents) will be guaranteed to continue working on the EOL operating system. EOL operating systems can no longer be provisioned. See  https://www.rackspace.com/information/legal/eolterms for more detail on support limitations of EOL releases.

#### Related articles
[Linux patching for Cloud Servers with the Managed Operations service level][LPatch]
[Patching base images][Pimg]
[Linux Spheres of Support for Dedicated and Managed Operations][LSph]

#### References
[RHEL support life cycle][rhel]
[General questions about CentOS][centos]
[Unattended-upgrades (Ubuntu)][ubuntu]

[LPatch]: <https://docs.rackspace.com/support/how-to/linux-patching-for-cloud-servers-managed-operations-service-level/>
[PImg]: <https://docs.rackspace.com/docs/user-guides/infrastructure/cloud-config/compute/cloud-images-product-concepts/base-images/patching-base-images>
[LSph]: <https://docs.rackspace.com/support/how-to/linux-spheres-of-support-for-dedicated-and-managed-ops>
[rhel]: <https://access.redhat.com/support/policy/updates/errata>
[centos]: <https://wiki.centos.org/FAQ/General>
[ubuntu]: <https://wiki.debian.org/UnattendedUpgrades>
</br>

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
