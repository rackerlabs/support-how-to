---
permalink: OnMetal-cloud-server-overview
audit_date: '2020-09-29'
title: OnMetal Cloud Server Overview
type: article
created_date: '2014-06-19'
created_by: Kyle Laffoon
last_modified_date: '2020-09-29'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

OnMetal servers are single-tenant, bare metal servers provisioned via the same OpenStack Application Program Interface (API) as our cloud. They can be spun up or down as quickly as Virtual Machines (VMs) to offer the agility of multi-tenant environments with the performance of single-tenant hardware. Rackspace OnMetal servers are solid-state and have external cooling. This increases mean time between failures (MTBF) and because of their large size, you need fewer of them.

Rackspace designs OnMetal servers for large fast-growing Internet businesses moving from colocation data centers to cloud, or vice versa. You can see some of their advantages here:

-   Pay by the minute, just like with VMs.  
-   OnMetal servers are simpler and more powerful than VMs.
-   Built on OpenStack software and Open Compute hardware. 
-   OnMetal uses the OpenStack Nova API. Increased familiarity for users of any OpenStack public cloud.  
-   Vendor lock-in free.
-   OnMetal servers are customized for specific workloads.
-   No hypervisor, no virtualization tax.
-   No metal sharing with other users.

### Disk structure

OnMetal combines performance consistency, colocation economy and cloud elasticity. Running your high-traffic production environment on consistently performing bare metal machines reduces over-engineering and allows for lower costs. OnMetal is a part of the Rackspace Managed Cloud portfolio, this allows you to save money managing your servers.

The chassis is solid-state. We removed cooling fans and any spinning media from the boxes to reduce heat, vibration, and to increase MTBF. To deliver the customer-required economy of colocation, we optimized the configuration based on specific workload requirements such as "database transactions per second per dollar" or "total RAM per dollar per hour", resulting in the following configurations:

| Instance name  | CPU/RAM/disk/network         | Description                              |
|----------------|------------------------------|------------------------------------------|
|**OnMetal GP v2 Small**   | **2.4 Ghz, 6 core Intel® Xeon® E5-2620 v3**, 32GB RAM, redundant 800GB hot-swappable SSDs configured in a RAID 1 mirror, redundant 10Gb/s network   | Great for all-around cloud needs and workloads. Perfect for large network requests, load balancers like HA Proxy, handling web server workloads and doing background processing. |
| **OnMetal GP v2 Medium** | **Dual 2.4 Ghz, 6 core Intel® Xeon® E5-2620 v3**, 64GB RAM, redundant 800GB hot-swappable SSDs configured in a RAID 1 mirror, redundant 10Gb/s network  | Optimized for larger web server workloads and most common open source databases, also container platforms like Docker.    |
| **OnMetal GP v2 Large**  | **Dual 2.4 Ghz, 6 core Intel® Xeon® E5-2620 v3**, 128GB RAM, redundant 800GB hot-swappable SSDs configured in a RAID 1 mirror, redundant 10Gb/s network  | Optimized for memory-heavy workloads. Especially useful for high RAM activity like in-memory SQL configurations, caching servers, and search indexes.   |
| **OnMetal I/O v2**  | **Dual 2.6 GHz, 10 core Intel® Xeon® E5-2660 v3**, 128GB RAM, 240GB hot-swappable SSDs configured in a RAID 1 mirror, **Dual Seagate Nytro XP6302 1.6 TB PCIe flash cards**,  redundant 10Gb/s network  | Designed to support low-latency and extreme throughput to local storage. Optimized for large relational databases and NoSQL data stores like Cassandra or MongoDB, latency-sensitive applications, online transaction processing and real-time analytics.   |

### OnMetal Servers Highlights

-   OnMetal v2 servers are built on second generation Open Compute hardware

-   General Purpose v2 utilize Intel Xeon E5-2620 v3 processors and I/O v2 - Intel Xeon E5-2660 v3 processor. 

-   Enhanced network performance through a fast and redundant 10-gigabit network. 

-   Integration with Cloud Networks and RackConnect API 3.0 allows traffic isolation for complete security. 

-   OnMetal v2 server flavors have redundant hot-swappable SSDs configured in a RAID 1 mirror to prevent lost data.  

-   I/O v2 flavor also has two Seagate Nytro XP6302 1.6 TB PCIe flash cards for extreme throughput to local storage. 

-   Cloud Block Storage can be attached to any OnMetal server instance (see [Attach a Cloud Block Storage volume to an OnMetal server](/support/how-to/attach-a-cloud-block-storage-volume-to-an-onmetal-server)). However, you can increase configuration speed by using available flash drives as data drives. See [Configure flash drives in High I/O instances as Data drives](/support/how-to/configure-flash-drives-in-high-io-instances-as-data-drives) for more information.

### What sets OnMetal Cloud Servers apart from other cloud servers?

API-driven instant provisioning of OnMetal Cloud Servers brings the agility and elasticity of the cloud without the problems of multi-tenant environments. All OnMetal flavors include dual 10-gigabit Ethernet (10 GigE) 10G NICs in a high-availability bonded configuration, and use VLAN tagging to access ServiceNet (for traffic within a Rackspace data center) and PublicNet (the Internet).

OnMetal servers are not offered as single-tenant VMs for the following reasons:

-   Virtualization tax becomes more important as the number of servers grows. While hypervisors continue to improve, customers feel the impact of this tax.
-   Software is rendering virtualization less useful. In a single-tenant environment like OnMetal, the application management and isolation isn't necessary.
-   The progress in operating systems has delivered a native capability to isolate applications by using containers. Companies, such as [Docker](https://www.docker.com/) and [CoreOS](https://coreos.com/) provide tools to run fully isolated applications without relying on virtualization, following the "containers on bare metal" trend. 

You can mix and match multi-tenant VMs with bare metal instances depending on your application needs. Use SSH key pairs to create OnMetal servers. Don't use or modify the administrator password generated by the server build operation. For information on generating SSH keys, see [Manage SSH Key Pairs for Cloud Servers with python-novaclient](/support/how-to/manage-ssh-key-pairs-for-cloud-servers-with-python-novaclient).

### Limitations

After you build an OnMetal server, the network needs 3-4 minutes to complete the network configuration. When it's ready, the status reads "ACTIVE". After the new OnMetal server pings successfully, you can use it.

You can attach a private network to OnMetal V2 servers at boot time, but post-boot attachment to OnMetal v2 servers is not supported yet. OnMetal V1 servers do not support configuration of private networks. With OnMetal v1
servers, use ServiceNet for internal traffic, and remember to secure your OnMetal server because ServiceNet is open to other Rackspace customers.

No hypervisor implies no web terminal or console as on other Rackspace cloud servers. This limits the options available if you lose access to your OnMetal Cloud Server. If access is lost, you must reprovision your OnMetal Cloud Server. Use  your login information and network configuration with caution.

Other limitations for OnMetal servers include:

-   Server rebuild
-   Server resize
-   Server image creation
-   Password change
-   Emergency Console
