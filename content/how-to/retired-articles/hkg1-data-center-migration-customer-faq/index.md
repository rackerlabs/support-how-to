---
permalink: hkg1-data-center-migration-customer-faq
audit_date: '2019-09-12'
title: HKG1 data center migration customer FAQ
type: article
created_date: '2018-10-03'
created_by: Sarah Wellburn
last_modified_date: '2018-10-03'
last_modified_by: Cat Lookabaugh
noindex: true
---

Rackspace’s HKG1 data center, located in the Fo Tan area of Hong Kong, has been
in operation since 2008. It is a 2.5 MW facility composed of three data halls
covering approximately 1,233 square meters, currently consuming around 650 kW of
power. The lease for HKG1 expires in 2020, and the landlord has advised that
they will not be renewing the lease because they are planning to refurbish the
building.

Rackspace has identified a new facility, HKG5, and is currently building out
the underlying infrastructure to enable us to migrate into that space.

All customers currently hosted in the HKG1 facility will be moved to the HKG5
data center during Q1 of 2020. We're building out HKG5 based on the most
current Rackspace standards and taking the opportunity to upgrade the
hardware used to support our core network infrastructure where appropriate.

Rackspace has had widespread success in data center migrations over the past
decade. During this time, our dedicated migration teams have performed the
following migrations:

-   In 2009: 15,000 devices from our LON2 facility.
-   In 2011: 3,828 devices from our SAT1 and SAT2 facilities.
-   In 2012: 8,200 devices from our IAD1 facility.
-   In 2015: 11,200 devices from our LON1 and LON3/DH4 facilities.
-   In 2017 and 2018: 22,000 devices from our DFW1 to DFW3 facilities.
-   In 2019: 4,500 devices from IAD2 to IAD3 facilities.

You can rest assured that we are investing significant resources to ensure a
smooth migration for all customers.

{{<accordion title="Where is HKG5 located?" col="in" href="accordion1">}}

The new facility is located at:

33 Chun Choi Street,<br>
Tseung Kwan O<br>
Hong Kong
{{</accordion>}}
{{<accordion title="Will service be interrupted?" col="in" href="accordion2">}}

Yes. Rackspace will schedule a maintenance window of up to 10 hours, starting
at 22:00 local data center time on a Friday or Saturday and closing at 08:00 the
following morning. The goal is to return customers to service as quickly as
possible within that window. Rackspace has designed the migration plan to occur
in small, manageable blocks to minimize the amount of downtime for customers.
Our project plan also aims to reduce the amount of unplanned downtime by
including additional resources and multiple contingency plans.
{{</accordion>}}
{{<accordion title="Will there be any IP address or DNS changes?" col="in" href="accordion3">}}

The public IP addresses of the devices are retained and moved with the
devices to the new location. In this case, you do not need to make any changes
to your Domain Name System (DNS). IP addresses used by Rackspace for managed
backups, managed virtualization, and Dell Remote Access Controller (DRAC) will
change. The Rackspace migration team is responsible for changing these IP
addresses.
{{</accordion>}}
{{<accordion title="Exception for Rackspace Managed Backup service" col="in" href="accordion4">}}

The IP addresses used for the network that runs the Rackspace Managed Backup
service (BackupNet/ServiceNet) will change for all customers. Because Rackspace
does not have access to Managed Colocation servers, Managed Colocation
customers using the Rackspace Managed Backup service need to change the
Managed Backup service IP address themselves. Rackspace will take responsibility
for updating the Managed Backup service IP addresses for all other customers
who use this service.

If you are using BackupNet/ServiceNet for any purpose other than Rackspace
Managed Backup or ObjectRocket, you need to make the necessary
arrangements to move to ExNet before your move night. In HKG5,
BackupNet/ServiceNet will be available for use only for Rackspace Managed
Backup and ObjectRocket.
{{</accordion>}}
{{<accordion title="What are the high-level stages of the migration?" col="in" href="accordion5">}}

The migration will happen in the following stages:

1.	You are allocated to a move group around 100 days before the migration.

2.	Leading up to your migration date, Rackspace works with you and your account
   team to establish any specific requirements for the move. For example, do
   you have a specific order in which your devices should be turned off?

3. Around 2 hours before the maintenance window opens, automated scripts
   are run to place all devices under alert suppression and to make the
   necessary DRAC IP address changes. All managed backup jobs in progress are canceled.

4.	At the start of your migration window, all affected devices are powered off
   by using another automated script and ServiceNet IPs are changed if applicable.
   Any servers that need to be turned off in a specific order need to be
   shut down before the automated shutdown script runs at 22:00. If your devices
   must be turned off in a specific order, your account team provides you with
   a revised maintenance start time at least seven days before the maintenance
   date.

5.	The affected devices are removed from the cabinets and securely transported
   to the new data center.

6.	In the new data center, all devices are racked and turned on.

7.	Your configuration is tested and verified at an infrastructure level.
   Further testing can be carried out by the migration team if you have
   provided clear instructions in advance of the move date.
{{</accordion>}}
{{<accordion title="When are my servers scheduled to be migrated?" col="in" href="accordion6">}}

The migration period starts in January 2020 and runs through March 2020.
One hundred days before your migration date, you receive notification via
a ticket in the Rackspace Customer Portal that includes the specific date and
time that your solution will be moved. All migrations have been scheduled to
occur on either a Friday or Saturday night, starting at 22:00 and running
through to 08:00 on the following morning local data center time.
{{</accordion>}}
{{<accordion title="My solution is sensitive to the way it is handled during a shutdown. Can you help?" col="in" href="accordion7">}}

Yes, we can work with you to understand what needs to be done to ensure a
smooth migration, and we can help in various ways, including turning off and
turning on your devices in a specific order.
{{</accordion>}}
{{<accordion title="I want to shut down the environment myself. Is this possible?" col="in" href="accordion8">}}

Yes, you may turn off your devices. However, because we make changes to ServiceNet
and DRAC IP addresses in the hours before the migration, you must tell
us in advance and ensure that all devices are turned off before 22:00 on your
allocated move night. If they are still turned on when we start to remove
devices from the cabinets, we will power them down by removing the power
cables.

You also need to tell us if you want to be responsible for turning on your
devices after the migration. In this case, we will rack your devices in the
new cabinets and await instructions from you to turn them on. If you do not give
us instructions to keep the devices turned off, we will turn them on by default.
{{</accordion>}}
{{<accordion title="I am a Managed Colocation customer, and you do not have access to my servers. How will the migration work for me?" col="in" href="accordion9">}}

Because Rackspace cannot access devices under the Managed Colocation terms, you
must turn off your devices before the start of the maintenance window. If
devices are not turned off by the time that we need to remove them from the
cabinets, we will remove their power cables. If you do not want Rackspace to
turn on your devices when they arrive in HKG5, you must inform us at least
seven days before your move night.

If you are using the Rackspace Managed Backup service, you might need to change
the IP addresses for the network used to run this service.  If this applies to
you, at least a week before your migration, we will create a ticket that
contains the new IP addresses and provides instructions for updating them. We
recommend that you make this change before to the migration.
{{</accordion>}}
{{<accordion title="My data is replicated to another location. How will the migration affect this replication?" col="in" href="accordion10">}}

The effects of the migration depend on the replication method that you have
set up. We recommend that you tell us about any replication or log shipping so
that we can work with you to ensure that it is re-established following the
maintenance.
{{</accordion>}}
{{<accordion title="I have colocation devices that Rackspace does not have access to. How will these be migrated?" col="in" href="accordion11">}}

Because we do not have access to your colocation devices, you are
responsible for shutting these devices down. If you contact us, Rackspace might
be able to assist you, but we will manage this on a case-by-case basis. Our
standard approach is to remove the power cables from the devices in HKG1
and reconnect them in HKG5.
{{</accordion>}}
{{<accordion title="I have a leased line that terminates in HKG1. What will happen to this?" col="in" href="accordion12">}}

You must work with your leased-line provider to understand the options available
to you. Lead times for leased-line provisioning can be significant,
so we recommend that you talk to your provider as soon as possible to
determine the options and timeframes.

Because your telco provider needs it, send them the following address of the new
facility:

33 Chun Choi Street,<br>
Tseung Kwan O<br>
Hong Kong

Ask your account team for further information on leased lines in HKG5.
{{</accordion>}}
{{<accordion title="Who tests my environment following the maintenance?" col="in" href="accordion13">}}

Rackspace will test for basic connectivity. If you want us to run further
tests, for example, to check whether a website is online, you can provide us
with the steps to follow to run these checks and with instructions about what
to do if we encounter issues that we cannot resolve.
{{</accordion>}}
{{<accordion title="How do I prepare for the migration?" col="in" href="accordion14">}}

Rackspace will use all of its experience with data center migration projects to
help support you during the migration to HKG5. We have assembled a dedicated
migration team, made up of some of the best Rackers from across the business.
This team will run audits on your servers before the migration to identify and
resolve any potential migration issues in advance. Ensure that you work with the
migration team and your account team to resolve any issues in a timely manner.
If you fail to resolve issues that we are auditing, we might have to perform a
manual shutdown in advance of the official 22:00 maintenance start time.

The team will work with you and your account team to determine and agree to any
special requirements that you might have for pre-migration and post-migration
instructions as we turn off and turn on your solution. The migration team will
focus on successfully executing your instructions on the night of the
migration.

We strongly encourage customers to back up their data, either by using the
Rackspace Managed Backup service or making their own offsite backups. If your
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
    applications and services start correctly. You can schedule reboots from
    the MyRackspace Portal.
{{</accordion>}}
{{<accordion title="I want to run a full backup before my migration. Can this be arranged?" col="in" href="accordion15">}}


Because it might not complete in time, we do not recommend that you initiate a
full backup just before the migration. Approximately three hours before the
migration is scheduled to start, our automated process kills any backup
still in progress so that we can ensure a clean shut down. If your backups
have been completing successfully in the weeks before the migration, you should
not need to run an additional backup. However, if you are concerned, you can
open a ticket with the Managed Backup team to review the possibility of
running a differential (or incremental) backup before the migration.
{{</accordion>}}
{{<accordion title="How will you keep me informed about the migration?" col="in" href="accordion28">}}


You will receive a ticket notification 100 days from your move date, and
then receive notification 45 and 14 days before the date, with the
final notification created a day before your move date. The final
notification ticket will be used to update you throughout the move night. We
will issue updates to confirm that the migration has begun, to confirm that
devices are in transit, and to confirm that the devices are back online.
{{</accordion>}}
{{<accordion title="What if I need to make changes to my environment between now and the move night?" col="in" href="accordion16">}}

We will impose a change freeze on your environment two weeks before the move
date. The change freeze applies to networking, physical hardware, disk
expansions, and so on. It does not apply to data or application changes. If
you are unsure whether the change freeze impacts a change that you need to make,
contact your account team for validation or update one of the notification
tickets with details about the change.

If there is an emergency during the change freeze and you cannot wait until
after the migration to make a change, ensure that the project team is aware of
the change by updating one of the notification tickets. Failure to do so could
result in unexpected behavior during maintenance and could increase
downtime.
{{</accordion>}}
{{<accordion title="Is the move date flexible?  Can I choose the date of the migration?" col="in" href="accordion17">}}


Much effort goes into creating the move groups and the preparations for
each move group. You will be notified 100 days before the date of your migration
so that you can plan for the downtime accordingly with your customers and
end users. To provide a set schedule for all of our customers, we cannot change
the date of your move without further impacting your solution and introducing
more risk. We recommend that you make all the necessary preparations
required to stay with the original move date.
{{</accordion>}}
{{<accordion title="I have more than one solution in HKG1. Will they all be migrated at the same time?" col="in" href="accordion18">}}

Yes, we move an entire account in one move group, so if the footprints are
in the same account, they are scheduled to move at the same time.
{{</accordion>}}
{{<accordion title="Will any of the services that Rackspace currently offers me change?" col="in" href="accordion19">}}

There will be no change to any of the services that you currently consume. The
only change to your solution will be the physical location.
{{</accordion>}}
{{<accordion title="How will my solution be transported?" col="in" href="accordion20">}}

We will use a third-party specialist transport company to migrate all
hardware. To mitigate risks and ensure the safe transportation of your
solution, Rackspace has carefully and extensively planned this migration and
selected appropriate partners.

The vehicles will be loaded within the data center compound and will be
subject to our stringent physical security controls. They will be unloaded
within the same conditions in HKG5. The tailgates of the vehicles will be
locked with special bolts by two Rackspace personnel, and photographs of the
secured bolts will be taken at both locations to prove that they have not been
tampered with.  The vehicles will have GPS tracking, will not display the
Rackspace logo, and will be followed by Rackspace personnel.

Data in our shared SAN environment will be replicated to HKG5 before each
migration date and will be kept synchronized with HKG5 until the devices are
turned off at the start of the maintenance windows.
{{</accordion>}}
{{<accordion title="Are there any guarantees that my server will not have to be migrated again afterwards?" col="in" href="accordion21">}}

Rackspace is continually reviewing its global data center footprint and makes
decisions on their management based on the needs of our customers, market
conditions, and company objectives in effect at that time. At this time, we
have no plans to relocate out of the new facility.
{{</accordion>}}
{{<accordion title="Whom should I contact if I have more questions about the migration?" col="in" href="accordion22">}}
Contact us in any of the following ways:

-   Create a ticket in the MyRackspace Customer Portal. Request in the ticket that it
    be assigned to the HKG1 Migrations ticket queue.
-   Ask a member of your account team for more information.
-   Respond to one of the ticket notifications that you receive before
    your move night.
{{</accordion>}}
