---
permalink: "sjc2-data-center-relocation"
audit_date: '2020-11-16'
type: article
title: "SJC2 data center relocation"
created_date: '2020-11-16'
created_by: Sarah Wellburn
last_modified_date: '2020-11-16'
last_modified_by: Cat Lookabaugh
product: General
product_url: general
---

### Overview 

Rackspace Technology brought the SJC2 data center, located in downtown San Jose,
under the Rackspace banner with the Datapipe acquisition in 2017. It is a nine MW
facility comprising 11 data halls covering 65,000 square feet of raised-floor
space. The lease for SJC2 expires in 2022, and the landlord has advised that
they will not renew the lease because they are planning to sell the building.

Rackspace is negotiating the lease on a new facility, SJC3, and is currently
designing the underlying infrastructure to enable us to migrate into that space.

This document relates specifically to customers on managed or shared
infrastructure. If you are a colocation customer, request a copy or see the
[SJC2 data center relocation colocation customer FAQ](/support/how-to/sjc2-data-center-relocation-colocation-customer-faq).


### When is the relocation expected to take place? 

Rackspace assigns all customers on managed infrastructure to a move group and
allocates each group a move date between June and August 2021. The scheduled
move for a group runs in a maintenance window starting on either a Friday or
Saturday night and finishes the following morning. We plan to keep the
maintenance window below 12 hours. We will confirm the exact timings after we
allocate the move groups at least 60 days in advance of the move date.

### Will there be an interruption to service?

Yes, we are physically migrating your environment, which means that all devices will be
offline while we move them to the new location.

### How will the migration be carried out?

We use a physical migration method. We power down the source data center
devices, remove them from the cabinets, and physically transport them to the
destination data center at the scheduled time. Upon arrival, we rack the devices
in their new locations and bring the environment back online. The high-level
stages for the move are as follows:

- We assign you to a move group at least two months in advance of the date.
- In the run-up to your maintenance date, Rackspace works with you and your
  account team to establish any specific requirements for the move.
- During this period, Rackspace performs non-intrusive audits on your
  environment to ensure that the information in our system is up to date and to
  get a better understanding of how it might perform when it is shut down and
  restarted. The output from these audits might require input from you.
  We also replicate data on our shared storage platforms to the destination data
  center.
- On the night of the migration, shortly before the maintenance window is due
  to start, we run a final audit, place all devices under alert suppression,
  and make any required changes to Rackspace management IPs. If you asked Rackspace
  to shut down your devices in a specific order, we do this shortly before the
  maintenance window officially opens.
- At the start of the maintenance window, Rackspace runs an automated script to
  shut down all servers. After all the servers are offline, we remove physical
  devices from the cabinets and dedicated storage. Then, we shut down net
  devices and remove them from the cabinets.
- We place all devices on a truck and transport them to the new facility where
  we rack all devices in new locations that we prepared in advance with the
  appropriate cabling and power.
- Your environment undergoes basic connectivity testing, and the team performs
  any custom testing that all parties agreed to before the maintenance. You
  should also be prepared to carry out tests after the move completes. You can
  request that we contact you after we finish our tests.
  
### Will there be any IP changes?

In most cases, we don't need to change public IP addresses. In rare situations
where this might be required, we will work with you to minimize the impact of
such a change.

We might need to make private IP address changes as we transition your devices
to Rackspace Managed Backup service. This product uses a separate network
exclusively for backups to avoid public traffic degradation as the system takes
backups. Rackspace is responsible for making these changes to devices to which
we have access. If you have devices that use managed backup that Rackspace
cannot access, we can give you the new IP information so that you can make the
necessary changes.

### My environment is backed up using Rackspace’s backup service. Will this continue after the migration?

As part of this migration, we switch from NetBackup to Commvault-managed backup services.
Before the migration, we notify you of our intention to install the Commvault agent on all
backed-up servers. The installation of the agent is non-disruptive. However, in some cases,
we will need to reboot the device. We will not reboot any servers without your permission.
Our goal is to have your backups running on Commvault before the migration. 

### My environment is sensitive to the way it is handled during a shutdown and start up. Can you help?

Yes, if you tell us the order in which we should shut down and start up devices,
we can follow that order on the night of your move. Note, however, that if you
need us to shut down the devices in a specific order, we might need to start
the process before the standard maintenance window begins. It is also likely that a complex
start-up order could extend the downtime you experience. If you prefer to
shut down your devices or want to start them, we can agree to this in advance
of the move.

### My data is replicated to another location. How will the migration affect the replication? 

It depends on the replication method that you have set up. We recommend that
you tell us about any replication or log shipping so we can work with you to
ensure that it is re-established following the move.

### I have devices within my managed environment that Rackspace does not have access to. How will these be migrated?

Because we do not usually have access to your colocation devices, you are
responsible for shutting these down. If you take no action, our standard
approach is to remove the power cables from the colocation devices after all
managed devices in the environment are offline. We then rack them in the
destination data center following the same cabling configuration as in the source
data center. Finally, we cable and rack them in their new locations and start
them unless you provide other instructions.

### How will you keep me informed about the migration?

We create the following tickets in the customer portal:

1. The first ticket, in advance of the moves, is your official notification. We
   close this ticket after approximately 25 days.
2. Sixty days in advance of the move, we create another ticket that includes
   your move's date and time.
3. Two weeks out from your move date, we create a final reminder ticket.
4. On the move night, we create a ticket to keep you updated during the
   maintenance window.

### What if I need to make changes to my environment between now and the move date? 

Approximately one month out from your move date, we perform a non-intrusive
audit on your environment and then again two weeks later. After we run the
second audit, we ask that you make no more configuration changes to the
environment, such as adding hardware or expanding drives on shared storage
platforms. We will remind you of the change freeze and the items included in
that freeze nearer to the time of your maintenance window. Changes to your
applications and data are not included in the freeze.

### I have more than one environment in this data center. Will they all be migrated at the same time?

We plan to move all devices within an account in the same move group, but this
might not be possible without some configuration changes in some cases. In these
instances, we will work with you on the best way to move your environments.

### How do I prepare for the move?   

Rackspace uses all our experience with data-center migration projects to help
support you in the run-up to and during the migration. We have a dedicated
migration team made up of some of the best Rackers from across the business.
This team runs audits on your servers before the migration to identify and
resolve potential migration issues in advance. Ensure that you work with the
migration team and your account team to resolve any issues in a timely manner.
If the identified issues are not resolved, we might have to perform a manual
shutdown in advance of the official maintenance window start time. It could also cause 
issues with bringing the environment back online, causing us to overrun the maintenance
window.

The team works with you and your account team to identify and agree to any
special requirements you might have for pre-migration and post-migration
instructions to shut down your environment in its current location and start it
in the new location. The migration team then focuses on successfully executing
your instructions on the night of the migration.

We strongly encourage customers to back up their data. If you are not backing
up your solution currently, you can talk to your account team about putting a
backup solution in place before the migration date.

In addition to the backups, consider taking the following steps before the move
night:

- Correct any known disk issues before migration night and ensure there are no
  disk corruption issues by running a check disk (`chkdsk`). Doing so prevents
  any forced `chkdsk` operations when we turn on your server.
- Fully install any pending Windows updates before the scheduled migration. If
  updates prevent us from gracefully turning off your servers, the delay might
  extend the downtime for the entire move group, and we might need to remove the
  power before the update process completes.
- Perform a test reboot of your servers before the migration to ensure that
  applications and services start correctly. If you need Rackspace to take care
  of this, raise a request through the customer portal.


### Will I continue to receive the same services as I currently receive? 

Yes, you will continue to receive the same services, except for managed backup services, 
as described in the
**My environment is backed up using Rackspace’s backup service. Will this continue after the migration?**
section.

### We have a leased line that terminates in SJC2. What happens to this? 

If Rackspace provided the leased line, we take care of this and work with you
to schedule the change. If not, you must work with your leased line provider to
provision a line into the destination data center. Lead times for leased lines
can be significant, so we advise you to reach out to your provider at your
earliest convenience. Your account team can provide the pertinent information
relating to the new data center details that your telecoms provider will require.

Some customers might decide to take this as an opportunity to review the need for a
traditional dedicated link and consider alternative options. The Rackspace RackConnect
Global (RCG) product is one such product that might suit your needs. If you want more
information on the RCG product please contact your Customer Success Manager. 

### Will there be any changes to DNS? 
 
Yes. As part of the migration, we will move from the legacy Datapipe DNS service to the
Rackspace DNS service. We are decommissioning the legacy Datapipe DNS servers. During the
migration event, Rackspace replaces the legacy Datapipe DNS entries with the new Rackspace
DNS entries on any devices that we can access and directly support. You need to change servers
that Rackspace does not support or access. We can provide the necessary information before the
migration event in a ticket in DP1. 
 
### Will there be any other configuration changes? 
 
Potentially, yes. VLAN ID tags might need to change if there is an overlap between the VLAN ID
tags used in the source data center and those in the destination data center. Rackspace makes
these changes during the migration for the devices to which we have access. For devices that
we can't access, Rackspace provides you with the information to make the necessary changes.

### Who should I contact with questions about the relocation?

Contact us in one of the following ways:

- Reach out to your Rackspace account team 
- Update one of the ticket notifications that we will publish in the Customer Portal. 

