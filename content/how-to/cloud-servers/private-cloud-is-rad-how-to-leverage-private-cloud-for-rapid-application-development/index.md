---
permalink: private-cloud-is-rad-how-to-leverage-private-cloud-for-rapid-application-development/
audit_date: '2021-01-29'
title: 'Private Cloud is RAD: How to Leverage Private Cloud for Rapid Application Development'
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
methodologies. For this reason, the advanced features of [private cloud](https://www.rackspace.com/cloud/private/) computing can offer significant advantages for developers employing RAD. 

This article will discuss how private cloud computing can increase developer 
efficiency in creating rapidly deployed, stable systems that include 
advanced features not available in traditional dedicated systems.

In a traditional dedicated hardware model, when you create new prototypes or 
initiate new projects, you also provision new hardware. This can result in weeks 
of planning and research that put additional pressure on stretched IT 
project budgets and potentially threaten delivery timelines. By implementing a 
private cloud, computing resources are ready for deployment before project kick-off. 
When projects are ready, the resources can be reused quickly and easily. The advanced 
features of private cloud computing also can provide additional productivity gains 
that are well suited for RAD.

One of the core features of private cloud computing is the
capacity to create stable and predictable virtual machines (VM). A RAD
developer can configure a VM with all the necessary tools, applications,
and OS tweaks necessary for a stable platform for development or
testing. When a VM system image is created, the VM system can clone the image
many times over with the provision of many VMs, which can significantly reduce the
time required to provision new systems for development or testing. Pre-built images 
can allow development tasks that would require weeks of labor in a traditional 
dedicated hardware environment to be completed much more quickly.

Stable systems with a predictable and consistent configuration are
important to successful regression testing. As described before, VM
system images can provide technicians with a predictable starting point
for testing. Using advanced hypervisors, technicians can create
snapshots of virtual machines that can simplify system testing and reduce 
related risks. Changes can be tested on the virtual machine, and 
you can undo these changes as needed by initiating a rollback. Snapshots 
and rollbacks enable faster regression testing and allow virtual machines 
to be reset to a known state with fewer steps.

An optimal environment would include the following components:

-   Hypervisors - The physical servers that run the various virtual
    machines under hypervisor control.
-   Fiber SAN Network - The Fiber Channel Storage Array Network that is
    the shared storage component where the virtual machine image files
    are stored.
-   Firewall - Firewalls are an important security requirement, even in private cloud.

Using the configuration above, you can create base VM images in the
hypervisors and store them on the Fiber SAN. When new projects kick-off, the base images 
can deploy quickly to provide a rapid, stable environment. The productivity gains 
achieved by using private cloud computing can contribute to faster project 
startup, reduce development time, and optimize use of resources. Resulting in happier customers.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 
