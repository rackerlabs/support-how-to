---
permalink: system-disk-and-data-disk-faq
audit_date: '2021-05-17'
title: System disk and data disk FAQ
type: article
created_date: '2013-10-02'
created_by: Ross Diaz
last_modified_date: '2021-05-17'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

{{<accordion title="System disk and data disk architecture explanation" col="in" href="accordion1">}}

Some Cloud Servers use an architecture that pairs a *system disk* with a
separate *data disks*. The benefits of implementing this architecture
include improved provisioning times and more flexibility for
local data storage and disaster recovery. Server images don't include
data disks, but they do include local system disks. This means
that you need to use a separate method for saving information
located on the data disks.
{{</accordion>}}
{{<accordion title="Save your configuration by using system images" col="in" href="accordion2">}}

You can retain the operating system and configuration information from
your system disk by using our Cloud Servers imaging feature. However, this
process does not save any information from the data disks. To save your
data disks, you can use [Rackspace Cloud Backup](/support/how-to/cloud-backup),
which is a granular file-level backup system that you can configure to save
the files and folders you want to keep.
{{</accordion>}}
{{<accordion title="How do I back up a data disk?" col="in" href="accordion3">}}

Because system images save data from only the system disk, you
need to use a backup solution like the Rackspace Cloud Backup service to
retain information from the data disks.
{{</accordion>}}
{{<accordion title="What about scaling and resizing servers?" col="in" href="accordion4">}}

You can scale your servers by hosting your application
on a load-balanced cluster (horizontal scaling) or recreating the
server with a different server flavor.

Horizontal scaling is the most flexible approach, but
your application must work in a clustered environment. With
horizontal scaling in place, you can add and remove servers on-demand,
either manually or with our [Auto Scale features](/support/how-to/rackspace-auto-scale).

To recreate the server, you can take an image of your server and build a new
server with a different size. Alternately, you can migrate data to a new server
by using a tool like `rsync`. If you use a Cloud Block Storage volume as your
server's boot device, you can also clone your boot volume and use the
clone to create a new server (see [Boot a server from a Cloud Block
Storage
volume](/support/how-to/boot-a-server-from-a-cloud-block-storage-volume)).
Note that none of these approaches preserves the server IP address.
If you require a persistent IP address, consider a load balancer or other
proxying solution that maintains the IP address separately from your
application servers.
{{</accordion>}}

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 
