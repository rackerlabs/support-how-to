---
node_id: 3277
title: Apache Hadoop on Rackspace Private Cloud
type: article
created_date: '2013-01-24'
created_by: Alyssa Hurtgen
last_modified_date: '2013-04-12'
last_modified_by: Jered Heeschen
product: Rackspace Private Cloud Powered by OpenStack
product_url: rpc-openstack
---

Overview
--------

Rackspace Private Cloud Software allows businesses to quickly and
seamlessly implement a stable and reliable Apache Hadoop cluster quickly
and simply in an open cloud solution.

Apache Hadoop and the Cloud
---------------------------

Two major trends in the technology zeitgeist include Cloud Computing and
Big Data and it now makes sense to look at the both of them together.
However, this combination is not without some challenges. Big Data
technologies such as Hadoop are taxing on servers, storage and network
requirements, while the cloud promises elasticity and agility. How can
Hadoop take advantage of this framework and how can the cloud meet the
needs of a demanding Hadoop cluster?

This paper investigates the synergies and challenges presented by Apache
Hadoop and its role in Rackspace Private Cloud powered by OpenStack.

OpenStack
---------

OpenStack is an open cloud standard and implementation that can be used
to build both public and private clouds. A private cloud is an on-demand
and scalable server environment reserved for your data alone, whether
you host it in your datacenter, Rackspace&rsquo;s or any third party&rsquo;s.
Private cloud is intended for companies who want to host the servers
themselves for security and compliancy requirements and any other
reasons they may have.

The attraction of using a free and open source cloud operating system
without the worry of vendor lock-in has already led several companies to
power their public and private clouds with OpenStack.

Rackspace Private Cloud Software Powered by OpenStack
-----------------------------------------------------

[Rackspace Private Cloud
Software](http://www.rackspace.com/cloud/private/) (RPCS) is a free and
open source software that can be utilized to launch a cloud powered by
OpenStack<span style="line-height: 1.538em;">. RPCS provides the same
cloud platform that powers Rackspace&rsquo;s public cloud, the largest open
cloud deployment in the world.</span>

Apache Hadoop
-------------

Born out of the large Internet properties such as Yahoo, Hadoop is an
open source project that provides a platform to store and process
massive amounts of data, including structured and complex, unstructured
data. There are also a set of Apache projects such as Hive, Pig, HBase,
HCatalog and Ambari that have grown up around Hadoop to provide tools to
manipulate data and to manage and monitor this complex clustered
environment. As it has grown and added key enterprise features, its
popularity has exploded. This is due to its open source nature and the
fact that it can cost-effectively scale across clusters of commodity
hardware, while delivering high availability and reliability.

Why Not Virtualize Hadoop
-------------------------

Hadoop&rsquo;s architecture makes certain assumptions about the underlying
infrastructure. Hadoop is resilient and is architected to accommodate
and rebalance stored data and processing as nodes (servers) are added or
removed to and from the environment. This may sound a perfect fit for
the elasticity of the cloud; however, the current scheduling and
recovery mechanism found in Hadoop is built on a more static and
predictable infrastructure. It makes it difficult for Hadoop to take
advantage of the rapid dynamic nature of the cloud where machines can
join or leave from the cluster depending on a particular workload. There
are three main challenges with Hadoop in a virtualized environment:

-   Virtual disks will add IO overhead.
-   Virtual machines can be allocated on the same server, breaking
    Hadoop&rsquo;s redundancy expectations<span
    style="font: 12.0px 'Times New Roman';">.</span>
-   Hadoop assumes a static infrastructure &ndash; machines can reboot or go
    away but generally recover. The correct approach to deal with a bad
    virtual machine in cloud is to provision a new one.

Why Apache Hadoop on Rackspace Private Cloud
--------------------------------------------

Although Hadoop was originally architected for the world of big-iron,
the choice of virtual Hadoop is a very appealing one for several
reasons. With the increasing adoption of cloud, it&rsquo;s very likely that
your data is already stored in the cloud, or will be soon. In that case,
doing the analysis on the data close to where it sits is very extremely
cost-effective. With Hadoop as part of the private cloud powered by
OpenStack, you can spin up a cluster in minutes in order to extend your
current environment and there is no need to move data from internal
resources to the cloud. While this may not be the case for every Hadoop
project, it makes sense for many.

While performance of a Hadoop cluster may be superior with dedicated
hardware, the agility of running it in the cloud on demand may trump
some of the limitations for some workloads.

This is one benefit, but there are many positives of running Hadoop in
the cloud.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/masscompute-web.jpg" width="600" height="398" />



Additional benefits of Hadoop Openstack can be summarized as:

-   One<span style="font: 12.0px 'Times New Roman';">-</span>click setup
    and rapid deployment. You can go from bare-metal to an open cloud
    with Hadoop running on it within a matter of a couple of hours.
-   Ability to reuse physical infrastructure.
-   Multi-purpose cloud infrastructure, that you can use not just for
    Hadoop but for other services like hosting your web application, or
    databases within the same environment.
-   Shrink and expand cluster on demand, by adding/removing nodes from a
    cluster or resizing VMs.
-   Ability to clone a VM and boot new VMs off of snapshots.
-   OpenStack can provide persistent local disks for Hadoop to use as
    its permanent storage.
-   When the Hadoop cluster is idle, some machines can be decommissioned
    and reused for other purposes.

As Hadoop and the cloud grow together, the benefits of the combined
offer will only grow stronger. For instance, there is ongoing work in
the Apache Hadoop community to make Hadoop virtualization-aware which
will ensure optimal data placement and provide support for failures in a
cloud environment. The future looks even brighter as this will enable a
truly elastic and reliable Hadoop Cluster. This work is all being
completed in the open source community.

Hortonworks Data Platform for Hadoop
------------------------------------

Rackspace has partnered with Hortonworks to bring an enterprise-ready,
100% open source Hadoop platform to Rackspace Private Cloud powered by
OpenStack.

OpenStack was created as a collaborative software project designed to
create freely available code, badly needed standards, and common ground
for the benefit of both cloud providers and cloud customers. In this
environment, Hortonworks Data Platform (HDP) just makes sense.It is 100%
open source and is freely available; standards based and better yet open
to integrate with the ecosystem and other stack components. More
importantly, core Hadoop is compute and storage and HDP provides the
most stable and reliable distribution for this.

Hortonworks Data Platform (HDP) is the only 100% open source data
management platform for Apache Hadoop. Built and packaged by the core
architects, builders and operators of Hadoop, HDP includes all of the
necessary components to manage a cluster at scale and uncover business
insights from existing and new big data sources.  Not only is it the
most stable and reliable Hadoop distribution, but it is also the most
close to the open source trunk available and is distributed as 100% open
source with no holdbacks or proprietary components. It is perfect for
OpenStack.

Hadoop Software Installation/Setup Process
------------------------------------------

RPCS makes it easy to create a production-ready cloud powered by
OpenStack within a few of hours. Once you have your Rackspace Private
Cloud ready, you can provision Hadoop in the cluster.

There are a few ways to install Hadoop, but most of them are geared
towards installing in a dedicated environment. You could try using any
of the existing options like Apache Whirr and Ambari or manually install
the RPMs. We chose to write our own Chef Cookbooks and a Knife plugin
for OpenStack to make Hadoop installation easier for public or private
clouds powered by OpenStack and even bare metal. Please follow the
detailed installation docs of the Cookbooks and Knife plugin on how to
use them.

-   [hdp-cookbooks](https://github.com/rackerlabs/hdp-cookbooks)
-   [knife-alamo](https://github.com/rackerlabs/knife-alamo)

Once the Chef cookbooks are installed onto a chef-server, the
knife-alamo plugin can be used from a workstation to interact with the
private cloud and create both master and data Hadoop nodes. On a proper
setup, creating a new name node or data node for Hadoop is as easy as
running one command:

**Creating a Hadoop NameNode:**

    $ knife alamo server create --name hadoopmaster --image fc63cb81-aca2-47dd-896b-a7a2bf4a041a --flavor 1 --chefenv hdp

**Creating a Hadoop DataNode:**

    $ knife alamo server create --name hadoopworker8 --image 51f0b7ff-0326-4092-8568-30699e34da87 --flavor 2 --chefenv hdp --runlist 'recipe[chef-client],role[hadoop-worker]'

The command itself is pretty self-explanatory. It will spin up an
instance of flavor size 2, install chef-client, and add the role of
Hadoop-worker to it. To run the chef-client on demand for the instance,
just do this:

    $ knife alamo server chefclient 51f0b7ff-0326-4092-8568-30699e34da87

**Running a map-reduce job:**

Login to your master node and launch a job:

    $ cd /usr/lib/hadoop
    $ hadoop jar hadoop-*-examples.jar pi 10 1000000

Job progress can be tracked by using the JobTracker&rsquo;s web UI at
http://master\_node:50030/

**Deleting a node:**

When  done with  the cluster, just issue a delete for each of the
instances on the cluster:

    $ knife alamo server delete 51f0b7ff-0326-4092-8568-30699e34da87

Resources have been released and can be instantly provisioned for other
purposes.

Conclusion
----------

In conclusion, Hadoop on OpenStack is a very compelling choice that
brings benefits like agility, automation, ease of deployment, and
multi-tenancy and security through isolation of resources. Combining the
Rackspace Private Cloud and OpenStack with Hadoop and Hortonworks
creates an enterprise-ready Hadoop solution that can be deployed in
minutes into the open cloud.

