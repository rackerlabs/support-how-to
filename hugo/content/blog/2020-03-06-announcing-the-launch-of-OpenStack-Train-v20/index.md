---
layout: post
title: "Announcing the launch of OpenStack Train v20"
date: 2020-03-06
comments: true
author: David Krawczynski
authorAvatar: 'https://s.gravatar.com/avatar/99399c9f2a456f6f1be216d6ddde8b11'
bio: "Finding a balance for family, old cars, and IT while living by my mantra that 'luck is equal parts strength and spirit'!"
published: true
authorIsRacker: true
categories:
    - OpenStack
    - Ansible
metaTitle: "Announcing the launch of OpenStack Train v20"
metaDescription: "Rackspace is launching OpenStack Train v20, which is the latest open-source software release as part the OpenStack Ansible project."
ogTitle: "Announcing the launch of OpenStack Train v20"
ogDescription: "Rackspace is launching OpenStack Train v20, which is the latest open-source software release as part the OpenStack Ansible project."
---

Rackspace is launching OpenStack&reg; Train v20, which is the latest open-source
software release as part the OpenStack Ansible project.

<!--more-->

This release allows you to deploy or upgrade the Rackspace Private Cloud powered
by OpenStack portfolio to a community-supported version of OpenStack. This
release addresses backporting, bug fixes, and vulnerabilities.

As a co-founder of OpenStack, our community involvement remains integral to the
overall trajectory and consistency of this open-source technology. Support for
OpenStack Train v20 is an integral part of our effort to provide the most current
platforms and technologies for our customers.

OpenStack Train v20 has provided enhanced capabilities for Core Services including
enhanced security and data protection, new artificial intelligence (AI) and machine
learning support, and improved resource management and tracking. These enhancements
enable you to modernize their experience, infrastructure, and applications.

### Enhancements

OpenStack Train v20 includes enhancements to the following OpenStack services:

- **Identity (Keystone)**

        -  Improves integration with WebSSO
        -  Deprecates Keystone policies

- **Image (Glance)**

        -  Improves integration with Cinder and Barbican

- **Block Storage (Cinder)**:

        - Adds option to control Glance image compression and improve
          hardware-based compression
        - Improves Pure Storage, Dell EMC, and NetAPP drivers

- **Compute (Nova)**:

        - Adds live migration support with NUMA, pinned CPU and huge-pages,
          SR-IOV enabled hosts
        - Adds framework to support AMD Secure Encrypted Virtualization (SEV)
        - Adds support for VPMEM to provide data persistence for guest RAM
          across reboots

- **Networking (Neutron)**:

        - Adds support for SmartNIC in ML2/OVS driver
        - Enables abilty to update segmentation ID on OVS bound ports
        - Adds support for L3 conntrack helper
        - Improves notification with Baremetal service (Ironic)
        - Adds support for OVS DPDK representer

- **Orchestration (Heat)**:

        - Improves support for CoreOS Ignition config
        - Improves support for QOS Rules with direction property

- **Dashboard (Horizon)**:

        - Allows users to change a password upon first use
        - Enables Cinder backup of snapshots
        - Adds experimental support of Django 2.2
        - Adds support for multi-attachment of volumes

- **Baremetal Service (Ironic)**:

        - Adds support for building software RAID
        - Adds support of Dell iDRAC WS-MAN RAID interface
        - Adds support of BIOS interface of ilo, ilo5, redfish hardware types\
        - Improves iPXE integration
        - Improves support for HTTP Proxy Headers

- **DNS as Service (Designate)**:

        - Improves PowerDNS pool management during AFXR requests

<a class="cta teal" id="cta" href="https://www.rackspace.com/openstack/private">Learn more about Rackspace OpenStack Private Cloud</a>

Visit [www.rackspace.com](https://www.rackspace.com) and click **Sales Chat**
to get started.

Use the Feedback tab to make any comments or ask questions.
