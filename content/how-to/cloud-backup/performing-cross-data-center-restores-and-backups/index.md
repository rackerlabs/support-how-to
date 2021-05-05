---
permalink: performing-cross-data-center-restores-and-backups
audit_date: '2019-12-16'
title: 'Performing cross-data-center restores and backups'
type: article
created_date: '2019-12-16'
created_by: Brett Johnson
last_modified_date: '2019-12-16'
last_modified_by: Brett Johnson
product: Cloud Backup
product_url: cloud-backup
---

A dedicated agent can restore files to a different data center (DC)
than the DC where the agent machine is actually located.

This article provides the instructions to do
a cross-DC restore.

**Note:** We do not recommend doing this, and it is implemented as a hack, but you can do it
in a pinch.

Also note that as long as you use the agent installed as a dedicated
server, the cost savings of using the internal network for data transfer to Cloud
Files and the Cloud Backup API are not realized. In other words, this is a significantly more
expensive way to register and operate a Cloud Backup agent.

Currently, we do not have cross-DC restores officially implemented, and they are not
yet on the roadmap. However, there is a way to do them. There are multiple
approaches&mdash;the short way with one server, and the longer way that involves an intermediate
server.

### Caveats

Some of the instructions below are pure theory and have not actually been tested.
If you run into difficulties, contact the Cloud Backup development team for help.

Customers are charged for every bit of data that is backed up as all of the
data is transferred over the public Internet. 

These instructions do something that was not built into Cloud Backup by design. Things
such as private net (and all the free network goodness that implies) are not available
to you. Other surprises might await you. We make no guarantees and support for this
operation is limited.

### Cross-DC backups the easy way

Use the following steps to do a cross-DC backup by using a dedicated server in Cloud Servers,
for example a server in IAD being backed up to DFW:

1. On the target machine in IAD, you must manually install the agent as a dedicated
   instance and assign it to the data center code where you want to keep your backups
   (DFW in this case). This should enable the agent to use the resources in the DFW
   data center (such as Cloud Files storage).
2. Set up backups to run in the normal way.

### Cross-DC restores the easy way

Cross-DC restores use a dedicated server in the target DC to restore from the
source DC. For example, if you want to restore to a new server in IAD from a DFW
backup, use the following steps:

1. On the target machine in IAD, you must manually install the agent as a dedicated
   instance and assign it to the data center code where you want to keep your backups
   (DFW in this case). This gives that agent access to the resources in the DFW
   data center, including cross-server restores.
2. Do a normal cross-server restore from the source backup in DFW to the target
   server in IAD.

### Cross-DC restores to servers already registered in another DC

If the server you want to restore to is already registered in its own domain, you
need to use a mediary server. Use the following steps:

1. Create a brand new server in the target domain (IAD, continuing with the
   previous example) to be your mediary. This server should be as identical to your
   target server as possible for compatibility reasons. Register it as you would
   for a cross-DC restore. You now have a portal to the source DC (DFW, in this
   example).
2. Do a cross-server restore to the mediary server as described above.
3. Now you have two choices. You can use Cloud Backup to transfer the files, or you can
   use an ephemeral drive to do this more efficiently. Of the two methods, using
   an ephemeral drive is probably the more practical. They are both outlined below.

#### Transfer using an ephemeral drive

Use the following steps to transfer using an ephemeral drive:

1. Create an ephemeral drive with sufficient space and attach it to the mediary
   server. Copy the files to the ephemeral drive.
2. Detach the ephemeral drive from the mediary server and attach it to the target
   server. Copy the files to the target server.

#### Transfer by using Cloud Backup

Use the following steps to transfer by using Cloud Backup:

1. Re-register the mediary server in the target DC (in this case, register it in
   IAD instead of DFW).
2. Create a backup for the mediary server to back up the files that you just restored
   from the backup in the source DC. Run that backup manually.
3. Do a cross-server restore from the mediary server to the target server.

