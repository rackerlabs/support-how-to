---
permalink: linux-clustering-concepts
audit_date: '2022-05-31'
title: 'Linux Clustering Concepts'
type: article
created_date: '2022-05-31'
created_by: Guillermo Casillas 
last_modified_date: '2022-05-31'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: cloud-servers
---

A cluster is a group of computers (nodes) which work together to provide a shared solution. At a high level, a cluster can be viewed as having three parts (often defined as cluster stack).

### Basic concepts 
- **Resources:** These are the reason for the cluster‘s being the services that need to be kept highly available.
- **Resource Agents:** These are scripts operating system components that start, stop, and monitor resources, given a set of resource parameters. 
- **Fence Agents:** These are scripts that execute a node fencing actions, given a target and fence device.   
- **Fencing:** The ability to disable nodes.
- **Quorum:** Encapsulates the ability to determine whether the cluster can continue to operate safely or not.

### Cluster types
The four types are as follows: 
- **High Availability (HA):** Used for Fault Tolerance to keep server services available to employees or customers.
- **Load Balancing:** Balances the load between multiple systems when a service needs to be available to numerous systems at once (can be used for other three types of Clusters).
- **Distributed:** Jobs will be managed by different systems.
- **Parallel (Beowulf):** Jobs are managed by multiple processors on multiple systems.

As well by the configuration there are several types of clusters: 
- **Manual clustering:** Lets you classify, merge, split clusters manually if the output of the automatic spike sorting algorithms are not satisfactory. 
- **Merging clusters:** When multiple clusters seem to correspond to the same unit.
- **Splitting clusters:** You can create a new cluster by drawing a polygon around a set of spikes in the feature view, the amplitude view, the template amplitude view, or the spike attribute views.

**NOTE:** We here in Rackspace, mostly use HA and at times LB clusters. At Rackspace we use the term Red Hat Cluster Suite (RHCS) on RHEL 6 and Pacemaker Configuration System csd daemon daemonm (PCS) on RHEL 7 to provide connectivity between cluster nodes and provide a platform for clustered services.

The cluster suite provides tools for building, configuring and controlling the cluster.

### Reasons to have a cluster
There are different reasons for using a cluster. We use them to provide a resilient, highly available backend for solutions. This is primarily for backend services like MySQL, NFS or Redis where the service can be behind a front end of web servers.

High availability is provided via automatic failover - if there is a failure on a cluster node, the clustered services running on that node will automatically relocate away to a node that is running properly.

Clusters will generally use shared storage (SAN) so that data will be persistent when services move between nodes.

In the event if a node becomes unresponsive, typically that node will be rebooted (fenced) by other nodes in order to preserve data integrity of the shared storage and floating IP ownership.

### Linux Open Source High Availability Clustering 
Some Linux operating system vendors offer clustering software, such as SUSE Linux HAE; Red Hat Enterprise Linux (RHEL); and Oracle Real Application Clusters (RAC).

While they allow you to create a failover cluster, they present a variety of challenges, thist is highly manual and prone to human error.

Linux open-source HA extensions require a high degree of technical skill, creating complexity and reliability issues that challenge most operators.

### SUSE
SUSE Linux Enterprise Server and Red Hat Enterprise Linux both solutions offer both a SAN and SANless environment but require that a replication software called DRBD be installed and configured in the OS to support data replication in the SANless environment. Unfortunately, this requires heavy custom scripting, which can take a long time to test and validate and requires retesting when any updates are made to the environment. Since these companies are operating system companies first and foremost, their support is geared towards operating system-level issues and often there is little to no HA expertise to help a customer with their issues.

### Oracle Reak Application Clusters (RAC)
Oracle RAC is a high availability solution, but it is primarily architected for the database management tier. This means you will need a different HA solution for those components that do the monitoring, management, and recovery of your application tiers. Oracle RAC is also very expensive, requiring you to upgrade to Oracle Enterprise Edition in addition to paying for the RAC option, when compared to other Linux clustering solutions, such as SIOS Protection Suite.

### SIOS Protection Suite for Linux Clustering 
The SIOS Protection Suite for Linux provides a tightly integrated combination of high availability failover clustering, continuous application monitoring, data replication, and configurable recovery policies, protecting your business-critical applications from downtime and disasters. While SIOS Protection Suite can operate in a SAN environment to support a traditional HA hardware-based cluster, the architecture takes a shared-nothing approach to server clustering allowing it to run SANless. It delivers a robust, versatile and easily configurable solution with automatic and manual failover/failback recovery policies for a wide variety of applications. 

SIOS Protection Suite for Linux includes: 
- **SIOS LifeKeeper:** Provides flexible failover clustering software that monitors the entire application stack.
- **SIOS DataKeeper:** Provides fast, efficient host-based, block-level data replication for mirroring local storage in a SANless cluster configuration or replicating to remote locations or cloud for disaster recovery.
- **Multiple Application Recovery Kits (ARKs):** With automated configuration and validation tools built into the product to protect your business-critical applications and data from downtime and disasters.

It is the SIOS’ team’s depth of knowledge in application recovery and the solution’s automation of application monitoring and recovery that makes it easier to use and a better, less expensive choice when compared to the Linux clustering solutions offered SUSE, Red Hat, and Oracle. 

In addition, SIOS LifeKeeper supports all major Linux distributions, including Red Hat Enterprise Linux, SUSE Linux Enterprise Server, CentOS, and Oracle Linux and accommodates a wide range of storage architectures. SIOS software has been adapted and optimized to run on these operating systems and the components are tested so ensure the SANless cluster solution will work on each OS. 

Lastly, with the SIOS Protection Suite for Linux, you can run your business-critical applications in a flexible, scalable cloud environment, such as Amazon Web Services (AWS) without sacrificing performance, high availability, or disaster protection. 

### Linux Clustering in AWS 
While cloud providers, such as AWS, provide high availability options, they do not provide the level of high availability and breadth of protection across the whole application infrastructure that customers demand and that you once achieved by using clusters before cloud computing. That is why AWS is partnering with SIOS. SIOS Protection Suite for Linux achieves these desired levels of high availability for our mutual customers and the critical applications they are moving to the AWS cloud. 

SIOS Protection Suite for Linux on AWS provides all the elements you need to create a high availability Linux cluster in a virtual private cloud (VPC) within a single AWS Region across two Availability Zones. It also supports out-of-the-box protection for SAP systems, Oracle databases, and other business-critical applications. 

SIOS and AWS offer SIOS Protection Suite Quickstart on AWS, which helps you create a fully configured and operational Linux high availability cluster in a few short steps. It sets up an AWS architecture for SIOS Protection Suite for Linux and deploys it into your AWS account in about half an hour. This Quick Start, available in the AWS Marketplace, is for enterprise users who want to deploy SIOS Protection Suite for Linux on AWS into their test or production environment. 

### SIOS Clustering for Linux 
SIOS is a high availability company that has spent the past 20 years focused on delivering HA that is specifically designed for SAP, SQL, Linux, Oracle, and other applications. Its experience is built into its product, and installation and configuration take a fraction of the time and cost when compared to custom scripting with the Linux distributions. In addition, SIOS tests and validates new versions of operating systems and applications so its customers don’t have to. When a customer calls SIOS for support, they are connected to a high availability expert – someone who only focuses on HA and has been doing so for a very long time. 

In Linux the most used software is **Pacemaker**

### Pacemaker overview
The High Availability Add-On cluster infrastructure provides the basic functions for a group of computers (called nodes or members) to work together as a cluster. Once a cluster is formed using the cluster infrastructure, you can use other components to suit your clustering needs (for example, setting up a cluster for sharing files on a GFS2 file system or setting up service failover). The cluster infrastructure performs the following functions:
- Cluster management.
- Lock management.
- Fencing.
- Cluster configuration management.

### Pacemaker Architecture
A cluster configured with Pacemaker comprises separate component daemons that monitor cluster membership, scripts that manage the services, and resource management subsystems that monitor the disparate resources. The following components form the Pacemaker architecture:

**Cluster Information Base (CIB)**

The Pacemaker information daemon, which uses XML internally to distribute and synchronize current configuration and status information from the Designated Coordinator (DC), a node assigned by Pacemaker to store and distribute cluster state and actions by means of the CIB to all other cluster nodes.

**Cluster Resource Management Daemon (CRMd)**

Pacemaker cluster resource actions are routed through this daemon. Resources managed by CRMd can be queried by client systems, moved, instantiated, and changed when needed.

Each cluster node also includes a local resource manager daemon (LRMd) that acts as an interface between CRMd and resources. LRMd passes commands from CRMd to agents, such as starting and stopping and relaying status information.

**Shoot the Other Node in the Head (STONITH)**

Often deployed in conjunction with a power switch, STONITH acts as a cluster resource in Pacemaker that processes fence requests, forcefully powering down nodes and removing them from the cluster to ensure data integrity. STONITH is configured in CIB and can be monitored as a normal cluster resource.

corosync is the component - and a daemon of the same name - that serves the core membership and member-communication needs for high availability clusters. It is required for the High Availability Add-On to function.

In addition to those membership and messaging functions, corosync also:

Manages quorum rules and determination.

Provides messaging capabilities for applications that coordinate or operate across multiple members of the cluster and thus must communicate stateful or other information between instances.

## Pacemaker configuration and management tools
Pacemaker features two configuration tools for cluster deployment, monitoring, and management.

PCS can control all aspects of Pacemaker and the Corosync heartbeat daemon. A command-line based program, pcs can perform the following cluster management tasks: 
- Create and configure a Pacemaker/Corosync cluster.
- Modify configuration of the cluster while it is running.
- Remotely configure both Pacemaker and Corosync remotely as well as start, stop, and display status information of the cluster.

**pcsd Web UI**

A graphical user interface to create and configure Pacemaker/Corosync clusters, with the same features and abilities as the command-line based pcs utility.

In order to maintain cluster integrity and availability, cluster systems use a concept known as quorum to prevent data corruption and loss. A cluster has quorum when more than half of the cluster nodes are online. To mitigate the chance of data corruption due to failure, Pacemaker by default stops all resources if the cluster does not have quorum.

In a cluster system, there can be many nodes working on several pieces of vital production data. Nodes in a busy, multi-node cluster could begin to act erratically or become unavailable, prompting action by administrators. The problems caused by errant cluster nodes can be mitigated by establishing a fencing policy.

When Pacemaker determines that a node has failed, it communicates to other cluster-infrastructure components that the node has failed. STONITH fences the failed node when notified of the failure. Other cluster-infrastructure components determine what actions to take, which includes performing any recovery that needs to done. For example, DLM and GFS2, when notified of a node failure, suspend activity until they detect that STONITH has completed fencing the failed node. Upon confirmation that the failed node is fenced, DLM and GFS2 perform recovery. DLM releases locks of the failed node; GFS2 recovers the journal of the failed node. 

Node-level fencing through STONITH can be configured with a variety of supported fence devices, including: 
- **Uninterruptible Power Supply (UPS):** A device containing a battery that can be used to fence devices in event of a power failure.
- **Power Distribution Unit (PDU):** A device with multiple power outlets used in data centers for clean power distribution as well as fencing and power isolation services.
- **Blade power control devices:** Dedicated systems installed in a data center configured to fence cluster nodes in the event of failure.
- **Lights-out devices:** Network-connected devices that manage cluster node availability and can perform fencing, power on/off, and other services by administrators locally or remotely.

#### Red Hat high availability add-on resource classes
There are several classes of resource agents supported by Red Hat High Availability Add-On:
- **LSB:** The Linux Standards Base agent abstracts the compliant services supported by the LSB, namely those services in /etc/init.d and the associated return codes for successful and failed service states (started, stopped, running status).
- **OCF:** The Open Cluster Framework is superset of the LSB (Linux Standards Base) that sets standards for the creation and execution of server initialization scripts, input parameters for the scripts using environment variables, and more.
- **systemd:** The newest system services manager for Linux based systems, systemd uses sets of unit files rather than initialization scripts as does LSB and OCF. These units can be manually created by administrators or can even be created and managed by services themselves. Pacemaker manages these units in a similar way that it manages OCF or LSB init scripts.
- **Upstart:** Much like systemd, Upstart is an alternative system initialization manager for Linux. Upstart uses jobs, as opposed to units in systemd or init scripts.
- **STONITH:** A resource agent exclusively for fencing services and fence agents using STONITH.
- **Nagios:** Agents that abstract plug-ins for the Nagios system and infrastructure monitoring tool.

#### Monitoring resources
To ensure that resources remain healthy, you can add a monitoring operation to a resource's definition. If you do not specify a monitoring operation for a resource, by default the pcs command will create a monitoring operation, with an interval that is determined by the resource agent.

#### Resource constraints 
You can determine the behavior of a resource in a cluster by configuring constraints. You can configure the following categories of constraints:
- **Location constraints:** A location constraint determines which nodes a resource can run on. 
- **Order constraints:** An order constraint determines the order in which the resources run. 
- **olocation constraints:** A colocation constraint determines where resources will be placed relative to other resources. 

As a shorthand for configuring a set of constraints that will locate a set of resources together and ensure that the resources start sequentially and stop in reverse order, Pacemaker supports the concept of resource groups.

#### Resource groups
One of the most common elements of a cluster is a set of resources that need to be located together, start sequentially, and stop in the reverse order. To simplify this configuration, Pacemaker supports the concept of groups.

You create a resource group with the pcs resource command, specifying the resources to include in the group. If the group does not exist, this command creates the group. If the group exists, this command adds additional resources to the group. The resources will start in the order you specify them with this command, and will stop in the reverse order of their starting order.

## References 
- [Cluster Components - Clusterlabs](https://clusterlabs.org/components.html)
- [Split Brain Syndrome - Techtarget](https://whatis.techtarget.com/definition/split-brain-syndrome)
- [Linux Clustering - SIOS](https://us.sios.com/linux-clustering/)
- [Clustering - phy](https://phy.readthedocs.io/en/latest/clustering/)
- [Linux Cluster - Linux.org](https://www.linux.org/threads/linux-cluster-%E2%80%93-basics.35264/)
- [Introduction to clusters - Linux Blimp](https://www.appservgrid.com/paw92/index.php/2019/03/17/introduction-to-clusters-in-linux/)
- [Pacemaker Overview - Red Hat](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/high_availability_add-on_overview/s1-pacemakeroverview-haao)
<br>

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
