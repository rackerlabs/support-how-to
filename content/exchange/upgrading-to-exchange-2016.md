---
node_id: 5068
title: Upgrading to Exchange 2016
type: article
created_date: '2015-12-16'
created_by: Ronnie Canizales
last_modified_date: '2016-01-18'
last_modified_by: Kyle Laffoon
product: Microsoft Exchange
product_url: exchange
---

This article provides information about the upgrade from your current
Exchange environment to Exchange 2016. Follow the required steps in this
article to successfully migrate to Exchange 2016.



**Note:** Migrations from Exchange 2007 to Exchange 2016 are not
available. The Exchange 2007 domain must be upgraded to Exchange 2013
first.



Before migration
----------------

Before migration, you should be aware of how the Exchange 2016
environment is different. You should also perform some actions to ensure
a seamless migration.



### Back up data

We do not anticipate any issues with the migration; however, we
recommend that you back up your data before the migration. You can back
up your data by performing a PST export using Outlook. Note that any
corrupt data will not move.

### Autodiscover

Set up your Autodiscover DNS record for Exchange 2016. Features such as
Automatic Outlook Configuration, Free/Busy Time, Out of Office, and
Public Folders function only if this record is in place.

Complete instructions for setting up your Autodiscover record are
located in [Set up DNS records for Cloud Office email and Skype for
Business](/how-to/set-up-dns-records-for-cloud-office-email-and-skype-for-business).

### Outlook Web Access

The Outlook Web Access (OWA) tool will be available via the following
links:

-   Rackspace unified login - <https://apps.rackspace.com>
-   Direct login -
    [https://mex09.emailsrvr.com](https://mex08.emailsrvr.com)


### Public folders

Exchange 2016 offers public folders on a hosted environment and will has
the following limitations:

-   There is a limit of 25 folders with a maximum size of 250 MB per
    folder (root folder included).
-   Exchange 2016 administrators must use the Control Panel to manage
    public folders.

-   Public folder administration (create, edit, move, and so on) is
    disabled in Outlook for Exchange 2016 customers.

-   User permissions (such as granting read, edit, and delete access) is
    not available.

**Note**: For a complete list of public folder limitations, please
review the migration plan provided.

### Spam filtering

The spam handling in Exchange 2016 is the same as Exchange 2013, and is
different from Exchange 2007 and 2010. We are no longer using the
quarantine manager for Exchange mailboxes and any spam messages that are
sent to the users will be delivered to the junk/spam folder.

The domain quarantine will still receive spam messages for other
Exchange addresses (contacts, distribution lists, public folders, and
resources). You can set the user's spam to be delivered to the domain
quarantine but only an administrator can access this quarantine manager.



After migration: Mail client and mobile device configuration
------------------------------------------------------------

**Note**: Outlook 2003 and 2007 and Entourage 2004 are not supported
with Exchange 2016. Users on Outlook 2003 or 2007 must be upgraded to
Outlook 2010 or later.

### Autodiscover

After your migration is complete, an alert will appear indicating that
Autodiscover is requesting to reconfigure your email profile. Select
**Always Do This Option**, and then select **Allow**. The Exchange 2016
mailbox will begin to resyncronize.

### Manual configurations

We recommend using Autodiscover to configure users. If a manual
configuration is needed, visit the following link for our setup guides:
[Setup Up Microsoft Exchange Email Clients and Mobile
Devices](/how-to/configure-email-clients-and-mobile-devices-for-email-hosted-on-exchange)

### Rackspace Auto Configuration Tool (Outlook 2010 and Outlook 2013)

Your users can download the Rackspace Auto Configuration Tool to set up
Outlook for Rackspace Exchange. The tool requires ony the user's email
address and password to automatically configure Outlook for Rackspace
Exchange.



Frequently asked questions
--------------------------

This section provides answers to questions that you might have about the
Exchange 2016 migration.

**Do I need to change my MX records?**

In most cases, you do not need to change your MX records because they
should already be pointed to our environment. Our MX record details are
located here in [Set up DNS records for Cloud Office email and Skype for
Business](/how-to/set-up-dns-records-for-cloud-office-email-and-skype-for-business).

**Could we migrate a portion of our mailboxes?**

No. This type of migration requires all users to migrate at once. This
is because our environment allowis the domain to reside in one exchange
environment.

**If Autodiscover is not set up, and I set it up now, will my users
receive a prompt?**

The reconfiguration prompt will occur in the following situations:

-   The user is using Outlook 2010 or 2013.
-   The user's profile was set up using Autodiscover.
-   The Autodiscover CNAME points to **autodiscover.emailsrvr.com** and
    the profile was configured using Autodiscover.


**Is there any downtime?**

There is no downtime during the migration. Mail will be delivered
without interruption. Users can send and receive email normally until
their mailbox throughout the migration process.

**How long will the migration take?**

Many factors affect the speed of the migration, so we cannot accurately
predict how long the migration will take.

**Will I need to reconfigure my mobile devices?**

Yes, all mobile devices must be reconfigured. For all ActiveSync
devices, you can either update the existing entries or remove the
account and then add it again. Blackberry Enterprise Server 5 is not
compatible with Exchange 2016. For Blackberry devices with software
version 10.0 and later using ActiveSync, no wipe is necessary.

**Will I have access to my Control Panel during the migration?**

Yes, but it is important that you do not make any changes to your
domain. Changes made during the migration will cause issues.

