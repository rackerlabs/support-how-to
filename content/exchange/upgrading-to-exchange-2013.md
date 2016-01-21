---
node_id: 3886
title: Upgrading to Exchange 2013
type: article
created_date: '2014-02-03'
created_by: Mawutor Amesawu
last_modified_date: '2016-01-15'
last_modified_by: Stephanie Fillmon
product: Microsoft Exchange
product_url: exchange
---

Welcome to the Exchange 2013 upgrade portal. Here you will find
information regarding your upgrade from your current Exchange
environment to Exchange 2013. Follow the required steps explained in
this article to successfully migrate to Exchange 2013.

Prior to your Migration
-----------------------

We do not anticipate any issues with the migration; however, if you have
any mission critical data, we highly recommend that you back up that
data prior to the migration. You can back up your data by performing a
PST export using Outlook.  It is important to note that any corrupt data
will not move.

### Autodiscover

It is important to setup your Autodiscover DNS record for Exchange 2013.
Features such as Automatic Outlook Configuration, Free/Busy Time, Out of
Office, and Public Folders will function only if this record is in
place.

Complete instructions for setting up your Autodiscover record are
located here: [Set up DNS records for Cloud Office email and Skype for
Business](/how-to/set-up-dns-records-for-cloud-office-email-and-skype-for-business)

### Outlook Web Access

The Outlook Web Access (OWA) tool will be available via two links:

-   Rackspace Unified Login - <https://apps.rackspace.com>
-   Direct Login - <https://mex08.emailsrvr.com>

    Note: Exchange 2013 Upgrades completed prior to January 27, 2015
    still use Direct Login - <https://mex06.emailsrvr.com>

### Public Folders

Exchange 2013 now offers public folders on a hosted environment. Public
folders on Exchange 2013 will have the following limitations:

-   25 folders with a max size of 250MB per folder. (Root
    Folder included)
-   Exchange 2013 admins must use Control Panel to manage public folders

-   Public folder administration (create, edit, move, etc.) is disabled
    in Outlook for 2013 customers

-   User permissions (such as granting read/edit/delete access) is not
    available
    Note: For a complete list of public folder limitations, please
    review the migration plan provided.

### Spam Filtering

The spam handling in Exchange 2013 is the same as Exchange 2010, and is
different from Exchange 2007. We are no longer utilizing the quarantine
manager for exchange mailboxes and any spam messages that are sent to
the users will be delivered to the junk/spam folder of the email client.

The domain quarantine will still receive spam messages for other
exchange addresses (contacts, distribution lists, public folders,
resources). You can set the user's spam to be delivered to the domain
quarantine but only an admin will be able to access this quarantine
manager.

### Data Handling

Users may see an increase in the mailbox size due to the way Exchange
2013 handles data. The increase in mailbox size is due to the inclusion
of all item properties into quota calculations such as the recover
deleted items folder.

Post Migration: Mail Client and Mobile Device Configuration
-----------------------------------------------------------

Note: Outlook 2003 and Entourage 2004 are not supported with Exchange
2013. Users on Outlook 2007 must be running Service Pack 3.

### Autodiscover

Once your migration is complete, an alert will appear indicating that
Autodiscover is requesting to reconfigure your email profile. Check
"Always Do This Option," and select  "Allow." Exchange 2013 mailbox will
then begin to re-sync.

### Manual Configurations

We highly recommend using Autodiscover to configure users. If a manual
configuration is needed, visit the following link for our set up guides:
[Configure email clients and mobile devices for email hosted on
Exchange](/how-to/configure-email-clients-and-mobile-devices-for-email-hosted-on-exchange)



### Rackspace Auto Configuration Tool (Outlook 2007, Outlook 2010, Outlook 2013)

Your users can download the Rackspace Auto Configuration Tool to make
setup very easy. The tool only requires the user's email address and
password to automatically configure Outlook for Rackspace Exchange.

    ftp://connect.emailsrvr.com/OutlookProfileConfigTool.exe.

Frequently Asked Questions
--------------------------

1.  **Do I need to change my MX records?**

    *In most cases, you do not need to change your MX records since they
    should already be pointed to our environment. Our MX record details
    are located here:* [Set up DNS records for Cloud Office email and
    Skype for
    Business](/how-to/set-up-dns-records-for-cloud-office-email-and-skype-for-business)

2.  **Could we migrate a portion of our mailboxes?**

    *This type of migration requires all users to migrate at once. This
    is due to our environment allowing the domain to reside in one
    exchange environment.*

3.  **If Autodiscover is not setup, and I set it up now, will my users
    receive a prompt?**

    *The reconfiguration prompt will occur in the following situations:*

    -   *The user is using Outlook 2007, 2010 or 2013.*
    -   *The user set up their profile using Autodiscover*
    -   *The Autodiscover CNAME points to autodiscover.emailsrvr.com and
        the profile was configured using Autodiscover. *


4.  **Is there any downtime?**

    *There is no downtime during the migration. Mail will be delivered
    without interruption. Users will still be able to send/receive
    normally until their mailbox has completed migrating.*

5.  **How long does the migration take?**

    *Unfortunately, there are many factors that affect the speed of the
    migration, so it is difficult to accurately judge the
    migration time.*

6.  **Will I need to reconfigure my mobile devices?**

    *Yes, all mobile devices will need to be reconfigured. For all
    ActiveSync devices, you can simply update the existing entries or
    remove the account and re-add. Blackberry devices configured as BES
    must be wiped to ensure proper re-activation on the new
    Exchange platform. We recommend backing up any data prior to wiping.
    For Blackberry devices with software version 10.0 and above using
    ActiveSync, no wipe will be necessary.*

7.  **Will I have access to my Control Panel during the migration?**

    *You will still be able to access your admin control panel but it is
    important that no changes are made to your domain. If changes are
    made during the migration, it will cause issues.*



