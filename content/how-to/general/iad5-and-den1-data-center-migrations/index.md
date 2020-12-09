---
permalink: iad5-and-den1-data-center-migrations/
audit_date: '2020-12-09'
type: article
title: IAD5 and DEN1 data center migrations
created_date: '2020-12-09'
created_by: Carrie Feiss
last_modified_date: '2020-12-09'
last_modified_by: Cat Lookabaugh
product: General
product_url: general
noindex: true
---

### Overview 

In 2017, Rackspace acquired Datapipe, which increased Rackspace's data center footprint
across the globe. Rackspace leaders carried out a review to identify which data centers
offer the most reliable, largest growth capacity, highly available, and efficient design
while also offering our customers access to the full range of Rackspace products and
services. Rackspace decided to exit the DEN1 and IAD5 facilities due to aging
infrastructure and minimal growth capacity. We plan to migrate your hosted environment in
DEN1 and IAD5 to the Rackspace DFW3 and IAD9 data center in a scheduled maintenance window,
which begins on either a Friday or Saturday night between March and December 2021. We will
communicate your maintenance window date to you at least 60 days before the move date.

Rackspace has extensive experience migrating highly complex, mission-critical solutions. As
your partner, our goal is to ensure this upgrade has little impact on your business. We
understand that these types of changes can present a challenge to your business. As such,
we have a dedicated team that focuses on ensuring that your service migration gives minimal
disruption to your business.

If your DEN1 or IAD5 environment has a leased line deployed, we want to give you more than
our standard notice period to initiate this process because lead times for telco providers
can be lengthy. Because you own the contract for the leased lines, customers are responsible
for arranging to have the line relocated to the new facility.

### When is the relocation expected to take place?

Rackspace assigns all customers to a move group and schedules each move group for a date
between March and December 2021. The move groups run in a maintenance window starting on
either a Friday or Saturday night and running through to the following morning. We will
confirm the exact timings when we allocate the move groups at least 60 days before the move
date.

### Will there be an interruption to service?

Yes, we perform a physical or logical migration to the new data center, which means that
it is offline for a portion of the maintenance.

### How will the migration be carried out?

We deploy infrastructure in DEN1 and IAD5 to allow us to execute customer migrations
logically. Server, networking, and storage infrastructure are in place and configured for
each customer in advance of their scheduled migration date. Some devices might require a
physical lift-and-shift to the new data center. 

- We allocate devices to a specific migration group.
- Leading up to the scheduled migration dates, the migration team coordinates the migration
  details with the account teams and customers to determine any special move instructions.
  The OS teams run audits and replicate data on storage platforms to the destination data
  center in advance of the move date.
- On the night of the move, we shut down devices in a safe and controlled manner by using
  an automated script if possible. Account teams use a revised maintenance start time to
  communicate to any customers that require a manual (custom order) shutdown. Manual shut
  down could take place in the hour before the official maintenance start time. We strictly
  follow any special instructions for shut down provided by the customer.

For devices being physical transported:

- Colocation devices and dedicated servers that cannot be virtualized require coordination
  with each customer to determine the approach. The customer could send us a new device,
  Rackspace could procure a new device, or the customer could accept up to 48 hours of
  downtime while we physically ship the device from DEN1 to DFW3. Transportation times are
  less from IAD5 to IAD9. 
- A company specializing in sensitive equipment transportation securely transports devices
  to the destination data center. The trucks have GPS enabled for tracking purposes and are
  locked with uniquely identified security bolts.
- Upon arrival at the destination data center, all devices are racked, reconnected to the
  network, and powered back on. Customers can provide instructions for the order in which
  to power up servers in advance if required.
- The Rackspace migration team carries out connectivity testing after the customer
  environment is back online. Customers can provide us with instructions for testing content
  as needed.

We expect to follow a similar process for colocation customers where the customer is
responsible for shutting down devices. In some cases, we might be able to lift-and-shift
the colocation customer device and transport it to the new DFW3/IAD5 locations.

### Will IP addresses change? 

Yes, as a result of the upcoming data center move, some IP address changes are going to occur.

These IP changes could include, but are not limited to, private and third-party VPN tunnel
Peer IPs, public-facing servers, and load balancer VIPs with public IPs, whitelists, and
third-party network gear.

If your IPs are changing for the data center move, Rackspace provides documented
information of previous IP mapping and the new IP mapping before the migration. Review the
information carefully and prepare a plan in advance to make the necessary changes to
accommodate the new IP addresses, such as VPN tunnels, DNS, application interface whitelisting,
and so on.

### My environment is sensitive to the way it is handled during a shutdown and restart. Can you help? 

Yes, if you tell us the sequence to shut down your devices and restart them, we can follow
these steps on the night of your move. Note, however, that if you require us to shut down
the devices in a specific order, we might need to start the process before the standard
maintenance window start time.

### My data is replicated to another location. How will the migration affect the replication?

It depends on the replication method that you have set up. We recommend that you tell us
about any replication or log shipping so that we can work with you to ensure that it is
re-established following the move.

### I have devices within my managed environment that Rackspace does not have access to. How will these be migrated?

Because we do not normally have access to your colocation devices, you will be responsible
for shutting these down. If you take no action, our standard approach is to remove the power
cables from the colocation devices after all managed devices in the environment are offline.
We rack them in the destination data center following the same cabling configuration as in
the source data center. We cable and rack them in their new locations and start them unless
you provide other instructions.

### How will you keep me informed about the migration?

We create a customer portal ticket approximately 60 days in advance of the moves, which is
your official notification. This ticket remains open until your migration to DFW3 and IAD9
completes. We post any further updates into the 60-day notification ticket. Do not close
the ticket until the migration completes.

### What if I need to make changes to my environment between now and the move date?

Approximately one month out from your move date, we perform a non-intrusive audit on your
environment and then do so again two weeks later. After the second audit runs, we ask that
you make no more configuration changes to the environment, such as adding hardware or
expanding drives on storage platforms. We remind you of the change freeze and the items
included in that freeze nearer to your maintenance window.

### I have more than one environment with Rackspace at DEN1/IAD5. Will they all be migrated
at the same time?

We plan to move all devices within an account in the same move group. However, there might
be instances where this is not possible without some configuration changes. In these
instances, we reach out and work with you on the best way to move your environments.

### We have a leased line that terminates in DEN1/IAD5. What will happen to this?

If Rackspace provides the leased line, we take care of this and work with you to schedule
the change. If not, you must work with your leased line provider to provision a line into
the DFW3/IAD9 destination data center. Lead times for leased lines can be significant, so
we advise you to reach out to your provider at your earliest convenience. Your Customer
Success Manager can provide pertinent information relating to the new data center details
that your telecoms provider requires.

### Will I continue to receive the same services as I currently receive?

Yes, you continue to receive the same services and support as the DEN1/IAD5 location.

### How do I prepare for the move?

Rackspace uses all its experience with data-center migration projects to help support you
in the run-up to and during the migration. We have a dedicated migration team made up of
some of the best Rackers from across the business. This team runs audits on your servers
before the migration to identify and resolve potential migration issues in advance. Ensure
that you work with the migration team and your Customer Success Team to resolve any issues
in a timely manner. If you don't resolve the identified issues, we might have to perform a
manual shutdown in advance of the official maintenance window start time.

The team works with you and your Customer Success Team to determine and agree to any special
requirements you might have for pre-migration and post-migration instructions as we turn off
your environment in its current location and turn it back on in the new location. The
migration team then focuses on successfully executing your instructions on the migration
night.

We strongly encourage customers to back up their data. If you do not currently back up your
solution, you can talk to your account team about putting a backup solution in place before
the migration date.

In addition to the backups, consider taking the following steps before the move night:

- Correct any known disk issues before migration night and ensure there are no disk
  corruption issues by running a check disk (`chkdsk`). Doing so prevents any forced `chkdsk`
  operations when your server restarts.
- Fully install any pending Windows updates before the scheduled migration. Suppose updates
  stop us from being able to turn off your servers gracefully. In that case, the downtime
  for the entire move group could be extended. We might need to remove the power before the
  update process concludes.
- Perform a test reboot of your servers before the migration to ensure that applications
  and services start correctly. If you want Rackspace to take care of this, you can raise
  a request through the customer portal.

### What happens to my data in IAD5 and DEN1 after the migration to the new data center completes?

Rackspace follows our standard default drive wiping process. If any customers require the
Data Destruction Certificate, request it through your Customer Success Manager two weeks
before your migration date. The customer must request this service before the device's
decommissioning date. After we decommission a device, we wipe the hard drives immediately
per our Default Drive Wiping Standard, so the device is no longer available for this
service.

### Who should I contact with questions about the relocation?

Contact us in one of the following ways:

- Reach out to your Rackspace Customer Success Manager.
- Update one of the ticket notifications published in the Customer Portal.
