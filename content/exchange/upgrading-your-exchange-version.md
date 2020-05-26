---
permalink: upgrading-your-exchange-version/
audit_date: '2019-07-22'
title: Upgrading your Exchange version
type: article
created_date: '2016-10-25'
created_by: Aaron Medrano
last_modified_date: '2019-07-22'
last_modified_by: William Loy
product: Microsoft Exchange
product_url: exchange
---

This article provides instructions for upgrading your current Microsoft&reg; Exchange environment to a later Exchange version.

### Supported email clients for Exchange

Only the following email clients can safely upgrade to a newer Exchange version:

- Outlook&reg; 2016
- Outlook 2013
- Outlook 2010
- Mac&reg; Mail

**Note:** Exchange does not support Outlook 2007 and older with later Exchange versions. Users on Outlook 2003 or 2007 must upgrade to Outlook 2010 or later.

### What is migrated

Everything from your current Exchange environment is migrated, including the following:

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

Although we do not anticipate any issues with the migration, we recommend that you back up your data before the migration. You can back up your data by performing a [Personal Storage Table (PST) export with Outlook](/how-to/export-and-import-email-address-data-using-outlook/).

  **Note:** Corrupt data is not migrated.

#### Autodiscover

The [Autodiscover record](/how-to/dns-record-definitions/#cname-record) of the domain you plan to migrate must point to the Rackspace environment. For instructions on setting up a DNS record, see [Set up DNS records for Cloud Office email](/how-to/set-up-dns-records-for-cloud-office-email/).

#### Public folders

Our hosted Exchange environment offers public folders with the following limitations:

- There is a limit of 25 folders with a maximum size of 250 megabytes per folder, including the root folder.

- Exchange administrators must use the control panel to [manage public folders](/how-to/manage-public-folders-in-the-control-panel-for-hosted-exchange-2013/).

- Public folder administration actions such as create, edit, or moving of public folders in Outlook is disabled for Exchange users.

- User permissions such as granting read, edit, or delete access are not available.

#### Spam filtering

The spam handling in Exchange 2013 and later is different from Exchange 2007 and 2010. Exchange mailboxes no longer use the quarantine manager, and any spam messages sent to users go to the junk or spam folder.

The domain quarantine still receives spam messages for other Exchange addresses such as contacts, distribution lists, public folders, and resources. You can set a user's spam to go to the domain quarantine, but only an administrator can access this quarantine manager.

#### Upgrade Exchange

You can contact Support to schedule an Exchange upgrade at any time. You can request this migration through Support via ticket, chat, or phone call.

### Frequently asked questions

This section provides answers to questions that you might have about the Exchange 2016 migration.

#### Do I need to change my Mail Exchange records?

In most cases, you do not need to change your Mail Exchange (MX) records because they should already point to our environment. You can review our MX record details in the article [Set up DNS records for Cloud Office email](https://support.rackspace.com/how-to/set-up-dns-records-for-cloud-office-email/).

#### Can we migrate only some of our mailboxes?

No. This type of migration requires all users to migrate at once because our environment allows the domain to reside in one exchange environment.

#### If Autodiscover is not set up, and I set it up now, will my users receive a prompt?

The reconfiguration prompt occurs in the following situations:

  - The user is using Outlook 2010 or 2013.
  - The user's profile is set up by using Autodiscover.
  - The Autodiscover CNAME points to **autodiscover.emailsrvr.com**, and the profile is configured by using Autodiscover.

#### Is there any downtime?

There is no downtime during the migration. Mail is delivered without interruption. Users can send and receive email normally throughout the migration process.

#### How long does the migration take?

The following items can affect the length of your migration:

- Item count
- Mailbox size
- Total size of attachments
- Number of mailboxes on the domain
- Provisioning delays in our Exchange environment. See the [System Status Page](http://status.apps.rackspace.com/) for notice on this type of issue.

  **Note:** It is not possible to estimate the length of time a migration will take because of the variance in the items listed above.

#### Do I need to reconfigure my mobile devices?

Yes, you must reconfigure all mobile devices. For all ActiveSync devices, you can either update the existing settings or remove the account and then add it again. Blackberry Enterprise Server 5 is not compatible with Exchange. For Blackberry devices with software version 10.0 and later using ActiveSync, no reconfiguration is necessary.

#### Will I have access to the control panel during the migration?

Yes, but it is important that you do not make any changes to your domain. Making changes to the domain being migrated, during the migration, causes issues.
