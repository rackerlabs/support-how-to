---  
permalink: /migrations-in-rackspace-cloud/  
audit_date:  
title: 'Migrations in the Rackspace Cloud'  
type: article  
created_date: '2020-12-18'  
created_by: Brian A  
last_modified_date: '2020-12-18'  
last_modified_by: Brian A  
product: Cloud Servers  
product_url: cloud-servers  
---

This article covers frequently asked questions about Reboot Migrations and Live Migrations as they pertain to the Rackspace Cloud.

## Why does Rackspace migrate my servers?

Migrations are carried out for a number of reasons. The majority of the time, migrations are done in order to optimize datacenter resource usage, increase platform stability, and apply important patches and upgrades to portions of the infrastructure. Rackspace Technology also periodically performs maintenance or decommission work on our cloud server infrastructure which may require the migration of cloud servers. Typically, migrations can be carried out using the Live Migration method which is generally non-impacting to a server's uptime and responsiveness. However, there are times when Live Migrations cannot be performed, or are not allowed at the request of a customer, and so an alternative method known as a Reboot Migration can be performed.

## What is the difference between a Live and Reboot Migration?

#### Live Migration
With Live Migrations, the virtual machine continues to run for the duration of the migration. Operations can continue as expected, and no downtime is expected to occurr during the course of the migration. Any data written or changed on the server while the migration takes place will be captured and copied over to the new hypervisor as well.

#### Reboot Migration
With Reboot Migrations, the server again can continue to run during the course of the migration, however for the migration to complete the cutover from the old to the new hypervisor, a reboot must be carried out. During this reboot, differential and changed data on the server is also copied over to the new hypervisor. The reboot process generally lasts between 5-30 minutes depending on the amount of data to transfer, and the size of the server itself.

## How long do migrations take to complete?

The time it takes for a migration to complete is dependent on a few factors. The biggest determining factor is the underlying size of the VHD files that make up the server's data footprint. Servers which are larger, and/or have been running for a long time will generally take longer to migrate than a server which has recently been built. For example, a 4GB General Purpose server that has been running for 6 years is likely to have more VHD data than a newly created 8GB General Purpose server. With that being said, it is difficult to know exactly how long a migration will take.

## I received a ticket titled "[ACTION REQUIRED] Server Migration". What is this about?

In cases where a Live Migration could not be performed for any reason, a ticket is generated and sent to your account to make you aware of an upcoming Reboot Migration. This ticket contains information on the migration process, why it is happening, and most importantly provides you a date and time that the Reboot Migration is scheduled to occur. At this point, you can choose to allow our automation to perform the Reboot Migration at the scheduled time or you can request in the ticket that the migration be delayed or moved to another date and time which works best for you. Once your server has migrated, your ticket will once again be updated and closed to let you know of it's completion. You can also choose to migrate the server through your Customer Portal as described below.

## How can I migrate my server?

At this time, initiating your own Live Migration is not possible, but you can initiate a Reboot Migration on your server at any time. For more information on how to migrate your server yourself, see [this article](https://docs.rackspace.com/support/how-to/migrate-a-cloud-server-to-a-new-physical-host/?_ga=2.141912818.1764449038.1606744842-1747592811.1576078357).

## Why didn't I receive advanced notice of a Live Migration?

Since Live Migrations are non-impactful for the vast majority of servers, notifications are not sent out prior to every Live Migration. Additionally, some Live Migrations are carried out as part of an unplanned, emergency maintenance to move cloud servers away from unstable hypervisors. For these reasons, notifications are not provided ahead of Live Migrations. 

## What causes a Live Migration to fail?

Live Migrations can fail for a number of reasons. Primarily, they will fail because the cloud server itself operates outdated kernels which do not cooperate with the hypervisor's effort to migrate the server. In such cases, the cloud server can become unresponsive and ultimately fail to migrate to the new hypervisor. In these cases, tickets are generated and Reboot Migrations are scheduled. 

## How can I improve the success rate of Live Migrations on my server? 

The more up-to-date your cloud server's operating system and kernel is, the higher success rate you'll see with Live Migrations. Also, servers with very large data footprints can result in the Live Migrations timing out while migrating to a new hypervisor, so avoiding older larger flavors like 15GB or 30GB Standard will help Live Migrations succeed.
