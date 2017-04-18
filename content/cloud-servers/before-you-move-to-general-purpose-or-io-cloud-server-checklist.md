---
permalink: before-you-move-to-general-purpose-or-io-cloud-server-checklist/
audit_date:
title: Before you move to General Purpose or I/O Cloud Server (checklist)
type: article
created_date: '2013-11-04'
created_by: David Hendler
last_modified_date: '2017-04-18'
last_modified_by: Brian King
product: Cloud Servers
product_url: cloud-servers
---

General Purpose and I/O-optimized Cloud Servers offer an increase in
drive and networking speed,but there are some factors to consider before
moving your current environment. This checklist provides information
that you need to consider to ensure that you are ready to move.

### Premigration considerations

Best practices include splitting your web and application servers from your database
server and putting them behind a load balancer. This split will enable
you to easily scale horizontally in the future without the need for
downtime or requiring DNS changes.

### Premigration actions

-   Migrating from "Standard" or "Classic" flavors
    - An image from a Classic or Standard server can build a server that is "next size up" in General Purpose. For example, a 1 GB Standard server image can build a 2 GB General Purpose server. If your Standard or Classic server is 8 GB or above, you cannot do an image-based migration due to the larger disk allotment on the older flavors. If you have an older Linux server, you may be able to resize down to 4 GB or smaller, then create an image that will build a General Purpose server.

-  Migrating from "Performance" flavors 
    - Any Performance server image can build a General Purpose server. However, 2 GB and larger Performance servers have a data disk that is not captured when you image the server. Thus, you must copy the data from the data disks manually via rsync, Robocopy or some other method.
    
-  Understand the flavor differences in resizing policy
    - General Purpose servers can resize, but only up, and only to a maximum size of 8 GB RAM/160 GB. Rather than resizing, we recommend scaling horizontally (adding multiple cloud servers) instead of vertically (making a single cloud server) as this increases the fault tolerance of your application.
    - Standard and Classic servers can resize up to 30 GB/1.2TB. Some Linux servers may be able to 
    
-   If you use Cloud Backup, ensure that all of your data is backed up on your current server, and test a restore.

-   Before deleting the current server, build a test server from your image and verify that it boots correctly.
