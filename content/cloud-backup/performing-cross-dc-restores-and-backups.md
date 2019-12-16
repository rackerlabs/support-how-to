---
permalink: performing-cross-dc-restores-and-backups/
audit_date: '2019-12-16'
title: 'Performing Cross-DC Restores and Backups'
type: article
created_date: '2019-12-16'
created_by: Brett Johnson
last_modified_date: '2019-12-16'
last_modified_by: Brett Johnson
product: Cloud Backup
product_url: cloud-backup
---

It is possible for a dedicated agent to restore files to a different data center
than the DC where the agent machine actually is.

The purpose of this document is to capture the instructions to help customers do
cross-DC restore hack.

**Note:** This is not recommended and is implemented as a hack, but it can be done
in a pinch.

Please also note that as long as the customer uses the agent installed as a dedicated
server, the cost savings of using the internal network for data transfer to Cloud
Files and CBU API are not realized. In other words, this is a significantly more
expensive way to register and operate a CBU agent.

Right now, we do not have cross-DC restores officially implemented, and it is not
yet on the roadmap to do so; however, there is a hacky way to it. There are multiple
approaches, the short way with one server, and the longer way involving an intermediate
server.

### Caveats

Some of the instructions below are pure theory and have not actually been tested.
If you run into difficulties, contact the CBU devs for help.

Customers will be charged for every bit of data that is backed up as all of the
data will be transferred over the public internet. 

This is a hack to do something that was not built into the CBU by design. Things
like private net (and all the free network goodness that implies) are not available
to you. Other surprises may await you. We make no guarantees and support for this
operation may be limited.

### Cross-DC Backups the Easy Way

Cross-DC backup using a dedicated server in Cloud Servers is as follows, using
for example a server in IAD being backed up to DFW.

1. On the target machine in IAD, you must manually install the agent as a dedicated
   instance and assign it to the data center code where you want to keep your backups
   (DFW in this case). This should allow the agent to use the resources in the DFW
   data center (such as Cloud Files storage).
2. Set up backups to run in the normal way.

### Cross-DC Restores the Easy Way

Cross-DC restores use a dedicated server in the target DC to restore from the
source DC. For example, if we were to restore to a new server in IAD from a DFW
backup, we would do it thus.

1. On the target machine in IAD, you must manually install the agent as a dedicated
   instance and assign it to the data center code where you want to keep your backups
   (DFW in this case). This gives that agent access to the resources in the DFW
   data center, including cross-server restores.
2. Do a normal cross-server restore from the source backup in DFW to the target
   server in IAD.

### Cross-DC Restores to Servers Already Registered in Another DC

If the server you wish to restore to is already registered in its own domain, you
will need to use a mediary server.

1. Create a brand new server in the target domain (IAD, if we are continuing our
   previous example) to be your mediary. This server should be as identical to your
   target server as possible, for compatibility reasons. Register it as you would
   for a cross-DC restore. You now have a portal to the source DC (DFW, in this
   example).
2. Do a cross-server restore to the mediary server as described above.
3. Now you have two choices. You can use CBU to transfer the files, or you can
   use an ephemeral drive to do this more efficiently. Of the two methods, using
   an ephemeral drive is probably the more practical. They are both outlined below.

Transfer using an ephemeral drive.

1. Create an ephemeral drive with sufficient space and attach it to the mediary
   server. Copy the files to the ephemeral drive.
2. Detach the ephemeral drive from the mediary server and attach it to the target
   server. Copy the files to the target server.

Transfer using Cloud Backup.

1. Re-register the mediary server in the target DC (in this case, register it in
   IAD instead of DFW).
2. Create a backup for the mediary server to backup the files you just restored
   from the backup in the source DC. Run that backup manually.
3. Do a cross-server restore from the mediary server to the target server.

