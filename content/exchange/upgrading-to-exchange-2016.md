---
permalink: upgrading-to-exchange-2016/
audit_date:
title: Upgrading to Exchange 2016
type: article
created_date: '2016-10-25'
created_by: Aaron Medrano
last_modified_date: '2016-10-25'
last_modified_by: Nate Archer
product: Microsoft Exchange
product_url: exchange
---

This article provides instructions on how to upgrade your current Exchange environment to Exchange 2016 using a self-service upgrade tool.

### Supported email clients for Exchange 2016

Only the following email clients can safely migrate to Exchange 2016. If a client is not listed, that client cannot support Exchange 2016.

- Outlook 2016
- Outlook 2013
- Outlook 2011 for Mac
- Outlook 2010
- Outlook 2007 SP3
- Entourage 2008 EWS
- Mac Mail

#### What is migrated

Everything from your current Exchange environment is migrated including:

**Note**: Outlook 2003 and 2007 and Entourage 2004 are not supported with Exchange 2016. Users on Outlook 2003 or 2007 must be upgraded to Outlook 2010 or later.

  - Exchange Mailboxes
  - Email data
  - Contacts
  - Calendar
  - Tasks
  - Notes
  - Exchange Contacts
  - Distribution Lists
  - Resources

### Before migration

You can run an Exchange upgrade with the tool at any time. The migration requires that all users of your Exchange server migrate during the migration.  If you receive an error while using the tool, contact [Rackspace Support](https://www.rackspace.com/support).

It is recommended that you perform the following tasks before migrating to Exchange 2016.

#### Back up data

We do not anticipate any issues with the migration; however, we recommend that you back up your data before the migration. You can back up your data by performing a PST export using Outlook. Note that any corrupt data will not be migrated.

#### Autodiscover

Make sure that your Autodiscover DNS record points to Rackspace. For instructions on how to set up a DNS record, see [Set up DNS records for Cloud Office email and Skype for Business](how-to/set-up-dns-records-for-cloud-office-email-and-skype-for-business/).

#### Public Folders

Exchange 2016 offers public folders on a hosted environment and has the following limitations:

- There is a limit of 25 folders with a maximum size of 250 MB per folder (root folder included).

- Exchange 2016 administrators must use the Control Panel to manage public folders.

- Public folder administration (create, edit, move, and so on) is disabled in Outlook for Exchange 2016 customers.

- User permissions (such as granting read, edit, and delete access) is not available.

#### Spam filtering

The spam handling in Exchange 2016 is the same as Exchange 2013, and is different from Exchange 2007 and 2010. We are no longer using the quarantine manager for Exchange mailboxes, and any spam messages that are sent to users will be delivered to the junk/spam folder.

The domain quarantine will still receive spam messages for other Exchange addresses (contacts, distribution lists, public folders, and resources). You can set the user's spam to be delivered to the domain quarantine, but only an administrator can access this quarantine manager.

#### Length of migration

The following items will affect the length of your migration:

- Item count.
- Mailbox size.
- Total size of attachments.
- Number of mailboxes on the domain.
- Provisioning delays in our Exchange environment. See the [Rackspace Status Page](http://status.apps.rackspace.com/) for notice on this type of issue.

### Using the Exchange self-service migration tool

1. Log in to [Rackspacemigrations.com](https://rackspacemigrations.com/Account/Login) with the following information:

  - Account number
  - Admin ID
  - Password

2. The migration portal lists all of your domains that use Exchange services. Select the gear icon next to the domain you would like to upgrade:

  ![Exchagne Upgrades 1.jpg]

3. Select a date and time to schedule the migration.

 ![Exchagne Upgrades 2.jpg]

4. Click **Submit Migration**.

5. After the migration information has been submitted, you will be taken back to the [Rackspace migrations home page](https://rackspacemigrations.com/).

  On the home page, you can see the status of your migration as well the Support ticket number used to track your migration. No automatic responses from this support ticket will be emailed to you, unless you log in to the control panel and update the ticket.

 ![Exchagne Upgrades 3.jpg]

  You can also reschedule or cancel your migration before the scheduled time by clicking the gear icon next to the domain you are migrating.

  ![Exchagne Upgrades 5.jpg]

When the migration completes you can log into the [Mail Control Panel](https://apps.rackspace.com/) and manage the mailboxes.

 ![Exchagne Upgrades 5.jpg]


### Frequently asked questions

This section provides answers to questions that you might have about the Exchange 2016 migration.

#### Do I need to change my MX records?

In most cases, you do not need to change your MX records because they should already be pointed to our environment. Our MX record details are located here in [Set up DNS records for Cloud Office email and Skype for Business](https://admin.rackspace.com/knowledge_center/article/set-up-dns-records-for-cloud-office-email-and-skype-for-business).

#### Could we migrate a portion of our mailboxes?

No. This type of migration requires all users to migrate at once. This is because our environment allows the domain to reside in one exchange environment.

#### If Autodiscover is not set up, and I set it up now, will my users receive a prompt?

The reconfiguration prompt will occur in the following situations:

  - The user is using Outlook 2010 or 2013.
  - The user's profile was set up using Autodiscover.
  - The Autodiscover CNAME points to **autodiscover.emailsrvr.com** and the profile was configured using Autodiscover.

#### Is there any downtime?

There is no downtime during the migration. Mail will be delivered without interruption. Users can send and receive email normally throughout the migration process.

#### How long will the migration take?

Many factors affect the speed of the migration, so we cannot accurately predict how long the migration will take.

#### Will I need to reconfigure my mobile devices?

Yes, all mobile devices must be reconfigured. For all ActiveSync devices, you can either update the existing entries or remove the account and then add it again. Blackberry Enterprise Server 5 is not compatible with Exchange 2016. For Blackberry devices with software version 10.0 and later using ActiveSync, no wipe is necessary.

#### Will I have access to my Admin Control Panel during the migration?

Yes, but it is important that you do not make any changes to your domain. Changes made during the migration will cause issues.
