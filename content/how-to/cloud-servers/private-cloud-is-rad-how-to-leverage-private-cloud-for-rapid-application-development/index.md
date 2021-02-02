---
permalink: private-cloud-is-rad-how-to-leverage-private-cloud-for-rapid-application-development/
audit_date: '2021-01-29'
title: 'Private Cloud is RAD: How to leverage Private Cloud for Rapid Application Development'
type: article
created_date: '2011-03-27'
created_by: Rackspace Support
last_modified_date: '2021-01-29'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

Rapid Application Development (RAD) refers to a type of software
development methodology that uses minimal planning in favor of rapid
prototyping. One of the many challenges of RAD is the constant demand
for rapid deployment of stable computing platforms for development and
testing. A pronounced reliance on prototyping is characteristic of RAD
methodologies. For this reason, the advanced features of 
private cloud](https://www.rackspace.com/cloud/private/) computing can
offer significant advantages for developers employing RAD. 

This article describes how private cloud computing can help developers 
more efficiently create rapidly deployed, stable systems that include 
advanced features not available in traditional dedicated systems.

In a traditional dedicated hardware model, you also provision new hardware
when you create new prototypes or initiate new projects. This can result in weeks 
of planning and research that put additional pressure on stretched IT 
project budgets and potentially threaten delivery timelines. By implementing a 
private cloud, computing resources are ready for deployment before project kick-off. 
When projects are ready, you can reuse the resources quickly and easily. The advanced 
features of private cloud computing also can provide additional productivity gains 
that are well suited for RAD.

One of the core features of private cloud computing is the
capacity to create stable and predictable virtual machines (VM). A RAD
developer can configure a VM with all the necessary tools, applications,
and OS tweaks necessary for a stable platform for development or
testing. When you create a VM system image, the VM system can clone the image
many times over to provision many VMs, which can significantly reduce the
time required to provision new systems for development or testing. Pre-built images 
can allow you to complete development tasks much more quickly. Those tasks would
require weeks of labor in a traditional dedicated hardware environment.

Stable systems with a predictable and consistent configuration are
important to successful regression testing. As described earlier, VM
system images can provide technicians with a predictable starting point
for testing. By using advanced hypervisors, technicians can create
snapshots of virtual machines that can simplify system testing and reduce 
related risks. You can test changes on the virtual machine and 
undo those changes as needed by initiating a rollback. Snapshots 
and rollbacks enable faster regression testing and allow you to reset VMs 
to a known state with fewer steps.

An optimal environment includes the following components:

-  **Hypervisors**: The physical servers that run the various virtual
   machines under hypervisor control.
-  **Fiber SAN Network**: The Fiber Channel Storage Array Network (SAN), which is
   a shared storage component that stores the VM image files.
-  **Firewall**: An important security requirement, even in your private cloud.

By using the preceding configuration, you can create base VM images in the
hypervisors and store them on the Fiber SAN. When new projects kick-off, you can deploy
the base images quickly to provide a rapid, stable environment. These productivity gains 
achieved by using private cloud computing contribute to faster project 
startup, reduce development time, and optimize resource usage, resulting in happier customers.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 
