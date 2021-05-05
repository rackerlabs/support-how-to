---
permalink: factors-that-affect-the-duration-of-email-migrations
audit_date: '2020-12-01'
title: Factors that affect the duration of email migrations
type: article
created_date: '2013-12-03'
created_by: Milton Prado
last_modified_date: '2020-12-01'
last_modified_by: Carlos Arriaga
product: Rackspace Email
product_url: rackspace-email
---

Accurately determining how much time it takes to migrate email data to
Rackspace is difficult because of several factors, including system
load, bandwidth, average item size, and source or destination
bottlenecks. Migrations of mailboxes that are between 350 MB and 1.5 GB
typically take up to an hour, and you can migrate groups of mailboxes
overnight.

The following sections provide more detail about the factors that can
affect how long a migration can take to complete.

### Simultaneous mailbox migrations

The migration tool that Rackspace Technology&reg; uses, **MigrationWiz**, has reached 
speeds of over 1.5 GB per hour per mailbox when connecting to high availability
infrastructures. Migrating more mailboxes at the same time allows
parallel processing and reduces the duration of your migration.

MigrationWiz can migrate hundreds of thousands of mailboxes
simultaneously at no additional cost to you. If you migrate all of your
mailboxes at the same time, the migration duration is the time it takes
to migrate the largest mailbox.

### Network speed

How fast are the source and destination servers connected to the
Internet? MigrationWiz is only as fast as the slowest link.
MigrationWiz can work across even the slowest links,
connecting to networks that range from T1 speed to networks that host
multiple gigabit connections.

### Network latency

The network latency depends on the quality of the connection between
the source and destination servers.

### Number of mailbox items

Mailboxes with more email messages take longer to migrate. For example,
if two mailboxes are the same size but have a different number of items,
the mailbox with fewer items migrates faster than the mailbox with more
items. The servers talk to each other to introduce each message, so
multiple messages have more overhead from network chatter than a single
large message.

MigrationWiz greatly reduces network chatter. It has moved over a
thousand items in less than a minute in some cases.

### Mailbox size

Although the volume of data in a mailbox can affect a migration, the
number of items in a mailbox has a much greater impact on the duration
of a migration.

### Mailbox errors

Errors can occur for many reasons, including corrupt items and
network outages. MigrationWiz contains automated self-healing technology
that can automatically manage errors in most cases.

### Throttling

If the source or destination system throttles the amount of data the system
can read or write, the migration might not be able to use all the available 
network bandwidth.

