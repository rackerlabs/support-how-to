---
permalink: sin2-data-center-relocation-managed-customer-faq/
audit_date: '2021-03-11'
type: article
title: SIN2 data center relocation managed customer FAQ
created_date: '2021-03-11'
created_by: Tom Hallam
last_modified_date: '2021-03-11'
last_modified_by: Cat Lookabaugh
product: General
product_url: general
noindex: true
---

### Overview

In November 2017, Rackspace completed its acquisition of Datapipe. The acquisition served
to increase the Rackspace data center footprint across the globe. In some regions, including
Hong Kong, this has resulted in multiple locations within a small geographical area.
Rackspace leaders have carried out a review to identify which data centers can offer the
most reliability, high availability, and efficiency while offering our customers access to
the full range of Rackspace products and services.  

To enable long-term growth within the region, Rackspace is currently building a new
Singapore data center, SIN3, based on Rackspace standards. Find more information on the
specification of our data centers on our
[data center page](https://www.rackspace.com/about/data-centers).

After reviewing our global data center footprint and considering the lease for SIN2 that
comes to an end in 2021, Rackspace decided to reduce our footprint in Singapore and made
plans to move all customers from SIN2 to the new SIN3 facility.

This document relates specifically to customers on managed or shared infrastructure. If you
are a colocation customer, request a copy of the
[SIN2 Colocation Customer FAQ](/how-to/sin2-data-center-relocation-colocation-customer-faq).

### When is the relocation expected to take place?

Rackspace assigns all customers on managed infrastructure to a move group and schedules
each move group for a date in June or July 2021. We schedule the move groups to run in a
maintenance window starting on either a Friday or Saturday night and running through to the
following morning. We plan to keep the maintenance window shorter than 12 hours. We will
confirm the exact timings when we allocate the move groups at least 60 days before the move
date.

### Will there be an interruption to service?

Yes, we perform a physical migration of your environment, which means it is offline while
we move it to the new location.

### How will the migration be carried out?

We use the physical migration method. This means that we power down the devices in the
source data center at the specified time, remove them from the cabinets, and physically
transport them to the destination data center. After they arrive, we rack the devices in
their new locations and bring the environment back online. The high-level stages for the
move are as follows:

- We allocate you to a move group at least two months in advance of the date.
- As your maintenance date approaches, Rackspace works with you and your account team to
  establish any specific requirements for the move.
- During this period, Rackspace performs non-intrusive audits on your environment to ensure
  that the information in our system is up-to-date and to get a better understanding of how
  it might perform when it is shut down and restarted. The output from these audits might
  require input from you. We also replicate data on our shared storage platforms to the
  destination data center.
- On the night of the migration, shortly before the maintenance window is due to start,
  we run a final audit, place all devices under alert suppression, and make any required
  changes to Rackspace management IP addresses. If you requested that we shut down your
  devices in a specific order, we do this shortly before the maintenance window officially
  opens.
- At the start of the maintenance window, Rackspace runs an automated script to shut down
  all servers. After all servers are offline, we remove physical devices from the cabinets
  and dedicated storage and power down net devices, removing them from the cabinets.
- We place all devices on a truck and transport them to the new facility, where we rack
  them in new locations that we prepared in advance with the appropriate cabling and power.
- Your environment undergoes basic connectivity testing, and the team can perform any custom
  testing that we agreed on in advance of the maintenance. You should also be prepared to
  carry out tests after the move finishes. You can request that we contact you after we
  complete our tests.

### Will there be any IP changes?

In most cases, you don’t need to change public IPs. In the rare situations where this is
required, we work with you to minimize the impact of this change.

You might need to change private IP addresses as we transition your devices to Rackspace
Managed Backup service.  This product uses a separate backup exclusively for backups to
avoid degradation of public traffic when backups are taken. Rackspace is responsible for
making these changes to devices that we have access to. If you have devices that use
managed backup, which Rackspace cannot access, we can give you the new IP information so
you can make the necessary changes.

### My environment is sensitive to a shutdown and restart. Can you help?

Yes, if you tell us the order in which devices should be shut down and powered on, we can
follow these steps on the night of your move. Note, however, that if you require us to shut
down the devices in a specific order, we might need to start the process before the standard
maintenance window start time. If you prefer to shut down your devices or restart them, we
can also agree to the process for this before the move.

### My data is replicated to another location. How does the migration affect the replication?

It depends on the replication method that you have set up. We recommend that you tell us
about any replication or log shipping so that we can work with you to ensure that it is
re-established following the move.

### I have devices within my managed environment that Rackspace does not have access to. How will these be migrated?

Because we do not normally have access to your colocation devices, you are responsible for
shutting these down. If you do not take any action, our standard approach is to remove the
power cables from the colocation devices after all managed devices in the environment are
offline. We then rack them in the destination data center following the same cabling
configuration as in the source data center unless you provide other instructions.

### How do you keep me informed about the migration?

We create a ticket in the customer portal approximately 100 days in advance of the moves,
which is your official notification. We close this ticket after approximately 25 days and
create another 60 days before the move, including the date and time of your move. We post
all subsequent updates in the 60-day notification ticket. Do not close the ticket until
the migration completes.

### What if I need to make changes to my environment between now and the move date?

Approximately one month before your move date, we perform a non-intrusive audit on your
environment and then again two weeks later. After the second audit runs, we ask that you
make no more configuration changes to the environment, such as adding hardware or expanding
drives on shared storage platforms. We remind you of the change freeze and the items included
in that freeze nearer to your maintenance window. Changes to your applications and data are
not included in the freeze.

### I have more than one environment with Rackspace. Will they all be migrated at the same time?

We plan to move all devices within an account in the same move group, but there might be
instances where this is not possible without some configuration changes. In these instances,
we work with you on the best way to move your environments.

### How do I prepare for the move?

Rackspace uses all its experience with data-center migration projects to help support you
in the run-up to and during the migration. We have a dedicated migration team made up of
some of the best Rackers from across the business. This team runs audits on your servers
before the migration to identify and resolve potential migration issues in advance. Ensure
that you work with the migration team and your account team to resolve any issues in a timely
manner. If the identified issues are not resolved, we might have to perform a manual shutdown
in advance of the official maintenance window start time.   

The team works with you and your account team to determine and agree to any special
requirements you might have for pre-migration and post-migration instructions as we turn
off your environment in its current location and turn it back on in the new location. The
migration team then focuses on successfully executing your instructions on the night of the
migration.

We strongly encourage customers to back up their data. If you don’t currently back up your
solution, you can talk to your account team about putting a backup solution in place before
the migration date.

In addition to the backups, consider taking the following steps before the move night:

Correct any known disk issues before migration night and ensure there are no disk corruption
issues by running a check disk (`chkdsk`). Doing so prevents any forced `chkdsk` operations
when we restart your server.

Fully install any pending Windows updates before the scheduled migration. If updates prevent
us from turning off your servers gracefully, the downtime for the entire move group could
be extended, and we might need to remove the power before the update process completes.

Perform a test reboot of your servers before the migration to ensure that applications and
services start correctly. If you would like Rackspace to take care of this, you can raise
a request in the customer portal.

### Will I continue to receive the same services as I currently receive?

Yes, you continue to receive the same services.

### We have a leased line that terminates in SIN2. What happens to this?

If Rackspace provides the leased line, we take care of this and work with you to schedule
the change. If not, you must work with your leased line provider to provision a line into
the destination data center. Lead times for leased lines can be significant, so we advise
you to reach out to your provider at your earliest convenience. Your account team can
provide the pertinent information relating to the new data center details that your telecoms
provider requires.

### Who should I contact with questions about the relocation?

Contact us in one of the following ways:

-       Reach out to your Rackspace account team
-       Update one of the ticket notifications published in the customer portal.
