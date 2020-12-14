---
permalink: hkg2-data-center-migration-customer-faq/
audit_date: '2019-12-13'
title: HKG2 data center migration customer FAQ
type: article
created_date: '2019-12-13'
created_by: Sarah Wellburn
last_modified_date: '2020-06-03'
last_modified_by: Cat Lookabaugh
noindex: true
---

### Overview

In November 2017 Rackspace completed its acquisition of Datapipe. The
acquisition increased Rackspace’s data center footprint across the globe. In
some regions, including Hong Kong, this has resulted in multiple locations
within a small geographical area. Rackspace leaders identified which data
centers offer the most reliability, high availability, and efficiency while
offering our customers access to the full range of Rackspace products and services.

The landlord of the other data center in Hong Kong, HKG1, recently notified
Rackspace of their intention to refurbish some floors in their building and that
they would not be renewing the lease. Since then, Rackspace identified a new
location and is currently building out a data hall within the new facility. We
are building the new facility, HKG5, based on Rackspace standards. See
[this article](https://www.rackspace.com/about/data-centers) for more
information on the specification of our data centers.

After reviewing our global footprint of data centers and with the lease for
HKG2 coming to an end in 2020, Rackspace decided to reduce our footprint in
Hong Kong and plans to move all customers from HKG2 to the new HKG5 facility.

**Note:** This article relates specifically to customers on managed or shared
infrastructure. If you are a colocation customer, request a copy of the *HKG2
Colocation Customer FAQ* from your account manager.

#### When will the relocation occur?

Rackspace will assign all customers on managed infrastructure to a move group
and each move group will be scheduled for a date in October 2020. The move
groups will be scheduled to run in a maintenance window starting on either a
Friday or Saturday night and ending on the following morning. We plan to keep
the maintenance window less than 12 hours. We will confirm the exact timings
at least 60 days in advance of the move date when the move groups are allocated.

#### Will service be interrupted?

Yes, we will physically migrate your environment, so it will be offline while
it is moved to the new location.

#### How does Rackspace carry out the migration?

We use the physical migration method. This means that at the given time,
we power down the devices in the source data center, remove them from the
cabinets, and physically transport them to the destination data center. Upon
arrival, we rack the devices in their new locations and bring the environment
back online.

The high-level stages for the move are as follows:

-	We allocate you to a move group at least two months in advance of the date.
-	As the maintenance date approaches, Rackspace works with you and your
   account team to establish any specific requirements for the move.
-	During this period, Rackspace performs non-intrusive audits on your
   environment to make sure that the information in our system is up to date
   and to get a better understanding of how your environment might perform when
   it is shut down and restarted. The result of these audits might require input
   from you. We also replicate data on our shared storage platforms to the
   destination data center.
-	On the night of the migration, shortly before the maintenance window is due
   to start, we run a final audit, place all devices under alert suppression,
   and make any required changes to Rackspace-managed IP addresses. If you
   requested us to shut down your devices in a specific order, we do this
   just before the maintenance window officially opens.
-	At the start of the maintenance window, Rackspace runs an automated script
   to shut down all servers. After all servers are offline, we remove physical
   devices from the cabinets and dedicated storage and power down net devices
   and remove them from the cabinets.
-	We place all devices on a truck and transport them to the new facility where
   we rack all devices in new locations, which we prepare in advance with the
   appropriate cabling and power.
-	Rackspace performs basic connectivity testing on your environment, and the
   team performs any custom testing requested in advance of the maintenance.
   You should also be prepared to carry out tests once the move is completed.
   You can request that we contact you after we have completed our tests.

#### Will there be any IP address or DNS changes?

In most cases, you do not need to change public IPs. In the rare situations
where this might be necessary, we work with you to minimize the impact of this
change.

Private IP addresses might need to change as we transition your devices to the
Rackspace Managed Backup service. This product uses a separate backup
exclusively for backups to avoid degradation of public traffic during backups.
Rackspace is responsible for making these changes to devices to which we have
access. If you have devices that use managed backup services that Rackspace
cannot access, we provide the new IP information so that you can make the
necessary changes.

#### My data is replicated to another location. How will the migration affect the replication?

It depends on the replication method that you have set up. We recommend that you
tell us about any replication or log shipping so that we can work with you to
ensure that it is re-established following the move.

#### I have devices within my managed environment that Rackspace does not have access to. How will these be migrated?

Because we do not normally have access to your colocation devices, you are
responsible for shutting these down. If you do not take any action, our standard
approach is to remove the power cables from the colocation devices after all
managed devices in the environment are offline. We then rack them in the
destination data center following the same cabling configuration that was used
in the source data center. They are cabled and racked in their new locations
and turned on, unless you provide other instructions.

#### How will you keep me informed about the migration?

We provide official notification by creating a ticket in the customer portal
approximately 100 days in advance of the move. This ticket is closed out
approximately after 25 days, and we create another ticket 60 days in advance
of the move that includes the date and time of your move. All further updates
are posted into the 60-day notification ticket. Do not close the 60-day ticket
until the migration has been completed.

#### What if I need to make changes to my environment between now and the move date?

We perform non-intrusive audits on your environment approximately four weeks
and two weeks before your move date. After the second audit, we ask that you
make no more environment configuration changes, such as adding hardware or
expanding drives on shared storage platforms. We will remind you of the change
freeze and the items that are included in that freeze nearer to the time of your
maintenance window.

The freeze does not include changes to your applications or data.

#### I have more than one environment with Rackspace. Will they all be migrated at the same time?

We plan to move all devices within an account in the same move group. However,
this might not be possible without some configuration changes. In these
instances, we work with you to determine the best way to move your environments.

#### How do I prepare for the move?

Rackspace will use all of its experience with data center migration projects to
help support you before and during the migration. We have assembled a dedicated
migration team, made up of some of the best Rackers from across the business.
This team will run audits on your servers before the migration to identify and
resolve any potential migration issues in advance. Ensure that you work with the
migration team and your account team to resolve any issues in a timely manner.
If you fail to resolve issues that we are auditing, we might have to perform a
manual shutdown in advance of the official maintenance window start time.

The team will work with you and your account team to determine and agree to any
special requirements that you might have for pre-migration and post-migration
instructions as we turn off and turn on your environment. The migration team
will focus on successfully executing your instructions on the night of the
migration.

We strongly encourage you to back up your data, either by using the
Rackspace Managed Backup service or making your own offsite backups. If your
solution is not currently being backed up, you can talk to your account team
about putting a backup solution in place before the migration date.

In addition to the backups, consider taking the following steps before the move
night:

-   Correct any known disk issues before migration night. Ensure that there
    are no disk corruption issues by running a check disk (`chkdsk`). Doing so
    prevents any forced `chkdsk` operations when your server is turned on.

-   Fully install any pending Windows&reg; updates before the scheduled migration.
    If updates stop us from being able to turn off your servers gracefully,
    the downtime for the entire move group could be extended, and we might need
    to remove the power before the update process concludes.

-   Perform a test reboot of your servers before the migration to ensure that
    applications and services start correctly. If you want Rackspace to do this,
    raise a request by using the customer portal.

#### Will I continue to receive the same services that I currently receive?

Yes, you will continue to receive the same services.

#### We have a leased line that terminates in HKG2. What happens to this?

If the leased line is provided through Rackspace, we take care of this and work
with you to schedule the change. If not, you must work with your leased-line
provider to provision a line into the destination data center. Lead times for
leased lines can be significant, so we advise you to reach out to your provider
at your earliest convenience. Your account team can provide the pertinent
information relating to the new data center that your telecoms provider requires.
