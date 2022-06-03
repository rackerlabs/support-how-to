---
permalink: rackspace-email-faq
audit_date: '2021-02-26'
title: Rackspace Email to Open-Xchange Migration FAQ
type: article
created_date: '2022-03-25'
created_by: Rackspace Support
last_modified_date: '2022-03-29'
last_modified_by: Daniel Boyle
product: Rackspace Email
product_url: rackspace-email
---

# Rackspace Email to Open-Xchange Migration FAQ
This page will be kept up to date with Frequently Asked Questions about the transformation of Rackspace Email as we migrate to a newer, bigger, and better email solution leveraging our partnership with Open-Xchange (OX).

OX is the leader in open mail platforms, and OX App Suite is THE definitive business-class email suite. This partnership joins the simplicity, affordability, and Support that have always been the focus of Rackspace Email with the feature rich and intuitive user experience provided by OX App Suite.

**Bookmark this page and watch it regularly throughout the year for updated FAQs about the migration**

## Who is Open-Xchange?
Open-Xchange was founded in 2005 and has grown to be the leader in open email platforms. They have a proven track record delivering user-friendly and secure email and collaboration software. Hundreds of millions of users worldwide use Open-Xchange products at home or work. Rackspace has been partnered with Open-Xchange for several years. This represents a deeper partnership to deliver a richer experience to Rackspace Email users.

## What is App Suite?
Open-xChange's email, communication, and collaboration platform is designed for service providers. It delivers a wide range of easy-to-use cloud‐based services for small business users, including secure email, personal and team organization, cloud storage, and online office features.

## Will I still be a Rackspace Customer?
Yes, Rackspace will continue to provide the same service and support you receive today.

## Will Rackspace Email cost change after the migration?
No, the price you pay will remain the same.

## What features are you updating? 

### The following features are changing: 
- The maximum forward address limit will change to 4 (Currently 15)
- Folder cleanup: 
	- We will implement a new global setting for the spam and trash folders.
	- The settings for inbox, draft, and sent folders will be removed.
	- You will be notified if your mailbox is affected by this change.
- Mobilesync: Will be replaced by support for open standards (Caldav, Carddav, IMAP,etc...) 
- Webmail sites: May require DNS updates. Details will be communicated in advance of the change.

### The following features are being removed:
- Split domain routing (SDR): 
	- Starting April 2022, new configurations will not be available.
	- If SDR is configured for a domain, it will remain until you disable it, or we start migrating Rackspace Email users.
	- SDR will be removed for all domains when we start migrating Rackspace Email users. 
- Domain catch-all
	- Starting April 2022, new configurations will not be available.
	- If a catch-all is configured for a domain, it will remain until you disable it, or we start migrating Rackspace Email users.
	- Catch-all will be removed for all domains when we start migrating Rackspace Email users.
- Webmail identities
	- Starting June 2022, new configurations will not be available.
	- If an identity is configured it will remain. 
	- Webmail identities will be removed from all mailboxes when we start migrating Rackspace Email users. 
- BCC archiving
	- Starting April 2022, new configurations will not be available.
	- If BCC is configured for a domain, it will remain until you disable it, or we start migrating Rackspace Email users.
	- BCC will be removed for all domains when we start migrating Rackspace Email users.
- Spam Settings
	- Starting June 2022, Administrators will no longer be able to set spam settings. 
	- The new spam delivery behavior will deliver spam messages to the recipient's spam/junk folder. 
    - This specific change applies to both Rackspace Email and Hosted Exchange.
- Allow/Block Lists
	- Starting May 2022, Administrators will no longer have access to configure allow/blocklist behavior at a domain level via the Control Panel or API. This specific change applies to both Rackspace Email and Hosted Exchange.
	- The ability to configure allow/blocklist behavior at a mailbox level via the Control Panel will be retained.
	- Limits of 250 entries will be applied to the Allow list and the Blocklist independently. 
	- IP addresses or ranges will no longer be a valid list entry on the Allow list or Blocklist.
- Admin Reply/Forward Control
	- Starting May 2022, Administrators will no longer have access to configure Out of Office auto-reply or mail forwarding via the Control Panel. 

## What about Rackspace Email Plus? 
Rackspace Email Plus will continue to exist, and your files will be migrated with your mailbox. 

## Are Hosted Exchange mailboxes migrating? 
No, Hosted Exchange mailboxes will not migrate. 

## I have Rackspace Email and Hosted Exchange on the same domain. Will this work after the migration? 
Yes, hybrid domains will still work after the migration. 

## Do I need to change my domains DNS settings (MX,SPF,DKIM)? 
No, the settings for MX,SPF,and DKIM will remain the same. 

## Do I need to change the IMAP, POP, or SMTP server or port settings?
No, the settings will remain the same. 

## Will the URL  I use to access Rackspace Email change?
No, the URL will not change.

## Will the mailbox size change?
No, the mailbox size will remain 25 GB. 

## Will the Rackspace Email API's change?
No, the API's will not change. 

## What will happen with the domain level safelist and blocklist?
The domain level safelist and blocklist (Except IP's) will be added to each mailbox on the domain. Open-Xchange has a limit of 250 entries for each list independently. If the list is larger than 250 entries when the mailbox is migrated it will be truncated so it does not exceed the limit.

## Is there an alternative for BCC archiving?
Yes, you can use Rackspace Email Archiving. 

## What is the timeline for this platform upgrade?
- April - August 2022: Preparing to migrate your mailboxes.
- April - September 2022: Update the Rackspace Email feature set to ensure compatibility with our upcoming platform launch. 
- October 2022 through March 2024: Migrate all Rackspace Email users to a **newer, bigger, and better business email solution**. 

## Will I be notified before the migration?
Yes, we will notify you via ticket before your mailboxes are migrated. 

## Can you exclude my account from the migration?
No, all Rackspace Email accounts will be migrated to the new environment. 