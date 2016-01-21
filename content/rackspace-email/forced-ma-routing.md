---
node_id: 3788
title: Forced MA Routing
type: article
created_date: '2013-11-19'
created_by: Milton Prado
last_modified_date: '2015-12-17'
last_modified_by: Nate Archer
product: Rackspace Email
product_url: rackspace-email
---

What is Forced MX Routing?
--------------------------

Typically used during an email migration to Rackspace, Forced MX Routing
allows you to add your domain and all mailboxes to the Rackspace Email
environment while still being able to send and receieve mail on your old
environment.  Enabling this feature will ensure that emails sent to your
domain from current Rackspace users do not deliver to the mailboxes on
our system.  Those emails will be routed to your live environment
instead.

Enabling Forced MX Routing is ideal for customers who wish to Pre-Stage
their email migration to Rackspace.  This allows a company to completely
mirror their current environment, migrate all data, and setup all users,
without affecting the delivery of email until the date of the MX records
change.

If Forced MX Routing has been enabled, it's important that it be
immediately disabled after the switch-over to Rackspace. Not doing so
may result in email delivery problems for the domain.

How to Enable/Disable Forced MX Routing
---------------------------------------

If you require Forced MX Routing, please contact our support team and
request that Forced MX Routing be enabled. We are available twenty-four
hours a day, seven days a week, through the following contact avenues:

1.  Chat - via the [Cloud Office Control
    Panel](https://cp.rackspace.com/)
2.  Ticket - via the [Cloud Office Control
    Panel](https://cp.rackspace.com/)


