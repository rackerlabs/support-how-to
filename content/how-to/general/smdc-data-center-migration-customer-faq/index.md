---
permalink: smdc-data-center-migration-customer-faq
audit_date: '2020-02-15'
title: SMDC data center migration customer FAQ
type: article
created_date: '2020-02-15'
created_by: Carrie Feiss
last_modified_date: '2020-02-15'
last_modified_by: Cat Lookabaugh
product: General
product_url: general
noindex: true
---

### Overview

In 2017, Rackspace completed its acquisition of TriCore, which increased the
Rackspace data center footprint across the globe. In some regions, including
Somerville, Massachusetts, this expansion resulted in multiple locations within
a small geographical area. Rackspace leaders identified the data
centers that offer the most reliability, high availability, and efficiency while
providing our customers access to the full range of Rackspace products and
services.

Because of previous outages at the Somerville, Massachusetts data center (SMDC)
facility, as well as limited capacity
and aging infrastructure, Rackspace plans to exit the SMDC facility. We will
migrate your hosted environment from SMDC to the Rackspace IAD3 data center in
a scheduled maintenance window, occurring on either a Friday or Saturday night
between April and September 2020. We will communicate the date of your
maintenance window to you at least 60 days before the move date. We will
deploy the new infrastructure in the IAD3 data center and logically migrate
your virtual machines.

Located in Ashburn, Virginia, the IAD3 data center offers a more robust networking
and electrical infrastructure. It consumes 5.525 MW of power with capacity for
an additional 3.143 MW. This data center also provides our entire suite of products,
including RackConnect Global. RackConnect Global enables you to connect your Rackspace
environment directly to AWS, Google Cloud, or Microsoft Azure. IAD3 also has a
large team of datacenter operations technicians, staffed 24x7x365, to support
your environment.

#### When will the relocation occur?

Rackspace assigns all customers to a move group, and each move group is
scheduled for a date in April through September 2020. Rackspace will schedule
the move groups to run in a maintenance window starting on either a Friday or Saturday
night and ending on the following morning. We will confirm the exact timings
at least 60 days in advance of the move date after we have allocated the move
groups.

#### Will service be interrupted?

Yes, we will migrate your physical or logical environment, so it will be
offline while we move it to the new location.

#### How does Rackspace carry out the migration?

We are deploying duplicate infrastructure in IAD3 to enable us to execute
customer migrations logically. We will put the server, networking, and storage
infrastructure in place and configure it for each customer well in advance of
the scheduled migration date.

The high-level stages for the move are as follows:

-	We allocate you to a move group at least two months in advance of the date.
-	As the maintenance date approaches, Rackspace works with you and your
   account team to establish any specific requirements for the move.
-	During this period before the migration window, Rackspace performs
   non-intrusive audits on your environment and replicates data on shared
   storage platforms to the shared data storage platform in IAD3.
-	At the start of the maintenance window on the night of the migration,
   Rackspace runs an automated script to shut down all servers safely or shuts
   down the servers manually. If customers require a manual shutdown, account
   teams communicate the revised start time, which could be up to an hour before
   the scheduled maintenance window. Rackspace strictly follows all special
   instructions provided by the customer. For more information on manual
   shutdowns, see the
   **My environment is sensitive to the way it is handled during a shutdown. Can you help?**
   section.
-  Complete the migration, including environment validation.

Rackspace performs the following steps for migrating virtual machines (VMs):

-	Shut down services at SMDC.
-	Shut down the VMs at SMDC.
-	Perform the final synchronization.
-	Perform the migration tasks, including stop replication jobs and present data
   to the target host.
-	Perform post-migration steps, including map disks to VMs, take a snapshot
   (VMWare&reg;), add the ServiceNet interface, and power on devices.
-	Perform connectivity and infrastructure validations.
-	Perform the handoff to the application team.

Rackspace performs the following steps for physically transporting devices:

-	For any colocation devices and dedicated servers that we cannot virtualize,
   we coordinate with customers to determine the correct migration approach.
   The customer can send us a new device, Rackspace can procure a new
   device, or the customer can accept downtime of up to 48 hours while we
   physically ship the device to IAD3.
-	A company that specializes in sensitive equipment transportation securely
   transports devices to IAD3. Their trucks have GPS enabled for tracking
   purposes and are locked with uniquely identified security bolts.
-	At the destination data center, we rack the devices, reconnect them to the
   network, and start them up. If required, customers can provide instructions
   in advance of the migration with the order in which to start up their servers.
-	Rackspace performs necessary connectivity testing on your environment, and
   the team conducts any custom testing requested in advance of the maintenance.

For colocation customers, we expect to follow a similar process, but the
customer is responsible for shutting down devices. In some cases, we might be
able to lift and shift the colocation customer device and transport it to the
new IAD3 locations.

#### Will there be any IP address or DNS changes?

Yes, as a result of the upcoming data center move, IP address changes are going
to occur.

These IP changes include, but are not limited to, the following:

-  Private-party and third-party VPN tunnel peer IPs
-  Public-facing servers
-  Load balancer virtual IP addresses (VIPs) with public IPs
-  Whitelists
-  Third-party network gear

Before the migration, Rackspace will provide documented information about the
previous IP mapping and the new IP mapping. Review the information carefully and
prepare a plan, in advance, to make the necessary changes to accommodate the new
IP addresses, such as  VPN tunnels, DNS, and application interface whitelisting.

#### My environment is sensitive to the way it is handled during a shutdown. Can you help?

Yes, if you tell us the order in which we should shut down and power up your
devices, we can follow these steps on the night of your move.

**Note**: If you require us to shut down devices in a specific order, we might
need to start the process before the standard maintenance window start time. If
you prefer to shut down your devices or want us to involve you in the start-up,
we can also agree to the process for this in advance of the move.

#### My data is replicated to another location. How will the migration affect the replication?

It depends on the replication method that you have set up. We recommend that you
tell us about any replication or log shipping so that we can work with you to
ensure that we re-established it following the move.

#### I have devices within my managed environment that Rackspace does not have access to. How will these be migrated?

Because we do not normally have access to your colocation devices, you are
responsible for shutting these down. If you do not take any action, our standard
approach is to remove the power cables from the colocation devices after all
managed devices in the environment are offline. We then rack them in the
destination data center following the same cabling configuration used
in the source data center. They are cabled and racked in their new locations
and turned on, unless you provide other instructions.

#### How will you keep me informed about the migration?

We provide official notification by creating a ticket in the Customer Portal
approximately 60 days in advance of the move. This ticket remains open until
your migration to IAD3 completes. We post all further updates into the 60-day
notification ticket. Do not close the 60-day ticket until the migration is
complete.

#### What if I need to make changes to my environment between now and the move date?

We perform nonintrusive audits on your environment approximately four weeks
and two weeks before your move date. After the second audit, we ask that you
make no more environment configuration changes, such as adding hardware or
expanding drives on shared storage platforms. We will remind you of the change
freeze and the items that are included in that freeze nearer to the time of your
maintenance window.

#### I have more than one environment with Rackspace at SMDC. Will they all be migrated at the same time?

We plan to move all devices within an account in the same move group. However,
this might not be possible without some configuration changes. In these
instances, we work with you to determine the best way to move your environments.


#### We have a leased line that terminates in SMDC. What happens to this?

If Rackspace provides the leased line, we take care of this and work
with you to schedule the change. If not, you must work with your leased-line
provider to provision a line into IAD3. Lead times for leased lines can be
significant, so we advise you to reach out to your provider at your earliest
convenience. Your Engagement manager can provide pertinent information
relating to the new data center that your telecom provider requires.

#### Will I continue to receive the same services that I currently receive?

Yes, you will continue to receive the same services and support that you have
at SMDC.

#### How do I prepare for the move?

Rackspace will use all of its experience with data center migration projects to
support you before and during the migration. We have assembled a dedicated
migration team, made up of some of the best Rackers from across the business.
This team will run audits on your servers before the migration to identify and
resolve any potential migration issues in advance. Ensure that you work with the
migration team and your Customer Success team to resolve any issues in a timely
manner. If you fail to resolve issues that we are auditing, we might have to
perform a manual shutdown in advance of the official maintenance window start
time.

The team will work with you and your Customer Success team to determine and
agree to any special requirements that you might have for premigration and
post-migration instructions as we turn off and turn on your environment. The
migration team will focus on successfully executing your instructions on the
night of the migration.

We strongly encourage you to back up your data, either by using the
Rackspace Managed Backup service or making your own offsite backups. If you
are not currently backing up your solution, you can talk to your account team
about putting a backup solution in place before the migration date.

In addition to the backups, consider taking the following steps before the move
night:

-   Correct any known disk issues before migration night. Ensure that there
    are no disk corruption issues by running a check disk (`chkdsk`). Doing so
    prevents any forced `chkdsk` operations when your server is turned on.

-   Fully install any pending Windows&reg; updates before the scheduled migration.
    If updates stop us from being able to turn off your servers gracefully,
    the downtime for the entire move group could be extended. Also, we might need
    to remove the power before the update process concludes.

-   Perform a test reboot of your servers before the migration to ensure that
    applications and services start correctly. If you want Rackspace to do this,
    raise a request by using the Customer Portal.

#### Who should I contact if I have more questions about the migration?

Contact us in any of the following ways:

-   Ask your Rackspace Engagement manager or Customer Success manager for more
    information.
-   Update one of the ticket notifications that will be published in the
    Customer Portal.
