---  
permalink: /migrations-in-rackspace-cloud/  
audit_date:  
title: 'Migrations in the Rackspace Cloud'  
type: article  
created_date: '2020-12-18'  
created_by: Brian A  
last_modified_date: '2020-12-28'  
last_modified_by: Carlos Arriaga  
product: Cloud Servers  
product_url: cloud-servers  
---

This article covers frequently asked questions about Reboot Migrations and Live Migrations as they pertain to the Rackspace Cloud.

## Why does Rackspace Technology migrate my servers?

Rackspace Technology migrates your servers for several reasons. Migrations optimize data center resource usage, increase platform stability, and apply important patches and upgrades to portions of the infrastructure. Rackspace Technology periodically performs maintenance or decommissioning work on our cloud server infrastructure, which might require the migration of cloud servers. Typically, migrations use the live migration method, which is generally non-impacting to a server's uptime and responsiveness. When you can't perform live migrations, or a customer doesn't allow you to do so, you can perform an alternative method known as a *Reboot Migration*.

### What is the difference between a Live and a Reboot migration?

#### Live Migration

With Live Migrations, the virtual machine continues to run for the duration of the migration. Operations can continue as expected, and no downtime is expected to occur during the course of the migration. Any data written or changed on the server while the migration takes place, floats over to the new hypervisor as well.

#### Reboot Migration

With Reboot Migrations, the server continues to run during migration, however for the migration to complete the cutover from the old to the new hypervisor, the system reboots. During this reboot, differential and changed data on the server floats over to the new hypervisor. The reboot process generally lasts from five to thirty minutes depending on the amount of data to transfer, and the size of the server.

#### How long do migrations take?

The time it takes for a migration to complete is dependent on a few factors. The biggest determining factor is the underlying size of the VHD files that make up the server's data footprint. Larger servers or servers that have been running for a long time generally take longer to migrate than a server of a recent build. For example, a 4GB general-purpose server that has been running for six years is likely to have more VHD data than a newly created 8GB general-purpose server. That being said, it is difficult to know exactly how long a migration takes.

#### What is the ticket titled "[ACTION REQUIRED] Server Migration" about?

In cases where you can't perform a Live Migration for any reason, the system generates a ticket and sends it to your account to make you aware of an upcoming Reboot Migration. This ticket contains information on the migration process, why it is happening, and most importantly, it provides you with the date and time of the Reboot Migration. At this point, you can choose to allow our automation to perform the Reboot Migration as scheduled or you can request, in the ticket, that the migration happens at another date and time that works for you. Once your server migrates, your ticket information updates and closes to let you know of its completion. You can also choose to migrate the server through your Customer Portal as we describe in the following section.

#### How can I migrate my server?

At this time, initiating your own Live Migration is not possible, but you can initiate a Reboot Migration on your server at any time. For more information on how to migrate your server, see [this article](https://docs.rackspace.com/support/how-to/migrate-a-cloud-server-to-a-new-physical-host/?_ga=2.141912818.1764449038.1606744842-1747592811.1576078357).

#### Why didn't I receive advanced notice of a Live Migration?

Since Live Migrations are non-impactful for the vast majority of servers, you don't get notifications before every Live Migration. Additionally, some Live Migrations are part of an unplanned, emergency maintenance to move cloud servers away from unstable hypervisors. For these reasons, you don't receive notifications ahead of Live Migrations. 

#### What causes a Live Migration to fail?

Live Migrations can fail for several reasons. Primarily, they will fail because the cloud server operates outdated kernels that don't cooperate with the hypervisor's effort to migrate the server. In such cases, the cloud server can become unresponsive and ultimately fail to migrate to the new hypervisor. In these cases, tickets are generated and Reboot Migrations are scheduled. 

#### How can I improve the success rate of Live Migrations on my server? 

The more up-to-date your cloud server's operating system and kernel is, the higher success rate you'll see with Live Migrations. Also, servers with very large data footprints can result in the Live Migrations timing out while migrating to a new hypervisor, so avoiding older larger flavors like 15GB or 30GB Standard will help Live Migrations succeed.

<a class="cta red" id="cta" href="https://www.rackspace.com/professional-services/data">Learn more about Rackspace Data Services.</a>

Use the Feedback tab to make any comments or ask questions. You can also click
**Sales Chat** to [chat now](https://www.rackspace.com/) and start the conversation.



