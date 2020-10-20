---
permalink: upgrading-your-exchange-version/
audit_date: '2019-07-22'
title: Upgrading your Exchange version
type: article
created_date: '2016-10-25'
created_by: Aaron Medrano
last_modified_date: '2020-07-10'
last_modified_by: Nicholas Ramirez
product: Microsoft Exchange
product_url: exchange
---

This article describes how to upgrade your current Microsoft&reg; Exchange environment to a later Exchange version.

### Supported email clients for Exchange

Only the following email clients can safely upgrade to a newer Exchange version:

- Outlook&reg; 2016
- Outlook 2013
- Outlook 2010
- Mac&reg; Mail

**Note:** Exchange does not support Outlook 2007 and older with later Exchange versions. Users on Outlook 2003 or 2007 must upgrade to Outlook 2010 or later.

### What components migrate?

The migration includes everything from your current Exchange environment, including the following items:

  - Exchange mailboxes
  - Email data
  - Contacts
  - Calendar
  - Tasks
  - Notes
  - Exchange contacts
  - Distribution lists
  - Resources

### Before migration

Before migrating to a later Exchange version, consider the following information and perform the following tasks.

#### Back up your data

Although we do not anticipate any issues with the migration, we recommend that you back up your data before the migration. You can back up your data by performing a [Personal Storage Table (PST) export with Outlook](/support/how-to/export-and-import-email-address-data-using-outlook/).

  **Note:** The process does not migrate corrupt data.

#### Autodiscover
The [Autodiscover record](/support/how-to/dns-record-definitions/#cname-record) of the domain you plan to migrate must point to the Rackspace environment. For instructions on setting up a DNS record, see [Set up DNS records for Cloud Office email](/support/how-to/set-up-dns-records-for-cloud-office-email/).

#### Public folders

Our hosted Exchange environment offers public folders with the following limitations:

- There is a limit of 25 folders with a maximum size of 250 megabytes per folder, including the root folder.

- Exchange administrators must use the control panel to [manage public folders](/support/how-to/manage-public-folders-in-the-control-panel-for-hosted-exchange-2013/).

- The environment disables public folder administration actions such as creating, editing, or moving public folders in Outlook for Exchange users.

- You cannot use user permissions such as granting read, edit, or delete access.

#### Spam filtering

The spam handling in Exchange 2013 and later differs from Exchange 2007 and 2010. Exchange mailboxes no longer use the quarantine manager, and any spam messages sent to users go to the junk or spam folder.

The domain quarantine still receives spam messages for other Exchange addresses such as contacts, distribution lists, public folders, and resources. You can set a user's spam to go to the domain quarantine, but only an administrator can access this quarantine manager.

#### Upgrade Exchange

You can contact Support to schedule an Exchange upgrade at any time. You can request this migration through Support via ticket, chat, or phone call.

### Frequently asked questions

This section provides answers to questions that you might have about the Exchange 2016 migration.

#### Do I need to change my Mail Exchange records?

In most cases, you do not need to change your Mail Exchange (MX) records because they should already point to our environment. You can review our MX record details in the article [Set up DNS records for Cloud Office email](https://support.rackspace.com/support/how-to/set-up-dns-records-for-cloud-office-email/).

#### Can we migrate only some of our mailboxes?

No. This type of migration requires all users to migrate at the same time because our environment allows the domain to reside in only one Exchange environment.

#### If I set up Autodiscover, will my users receive a prompt?

The reconfiguration prompt occurs in the following situations:

  - The user is using Outlook 2010 or 2013.
  - Autodiscover set up the user's profile.
  - The Autodiscover CNAME points to **autodiscover.emailsrvr.com**, and Autodiscover configured the profile.

#### Is there any downtime?

There is no downtime during the migration&mdash;the system delivers mail without interruption. Users can send and receive email normally throughout the migration process.

#### How long does the migration take?

The following items can affect the length of your migration:

- Item count
- Mailbox size
- Total size of attachments
- Number of mailboxes on the domain
- Provisioning delays in our Exchange environment. See the [System Status Page](http://status.apps.rackspace.com/) for notice on this type of issue.

  **Note:** You cannot estimate the length of time a migration will take because of the variance in the preceding items.

#### Do I need to reconfigure my mobile devices?

Yes, you must reconfigure all mobile devices, except for some Blackberry&reg; devices. Blackberry&reg; Enterprise Server 5 is not compatible with Exchange. For Blackberry devices with software version 10.0 and later using ActiveSync, you don't need to perform reconfiguration.

For all ActiveSync devices, you can either update the existing settings or remove the account and add it again. 

#### Will I have access to the control panel during the migration?

Yes, but you should not make any changes to your domain. Making changes to the target migration domain during the migration causes issues.
