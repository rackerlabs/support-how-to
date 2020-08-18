---
permalink: setup-exchange-general-365/
audit_date:
title: General Exchange Online Email Setup
type: article
created_date: '2020-08-18'
created_by: Allison Battles
last_modified_date: '2020-08-18'
last_modified_by: Nicholas Ramirez
product: Office 365
product_url: office-365
---


### Prerequisites 

- **Applies to:** User (Admin to enable authentication via SMTP)
- **Difficulty:** Easy
- **Time needed:** 5-10 Minutes for initial configuration (sync time varies based on network speed)
- **Tools required:** Licensed Microsoft 365 user, active network connection

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology).

For additional information about Microsoft 365 licensing, see our [product comparison chart](https://www.rackspace.com/sites/default/files/2020-06/Rackspace-Data-Sheet-Microsoft-365-Plans-and-Pricing-Sheet-CLO-TSK-1487.pdf).

The following article will walk you through enabling **Authenticated SMTP** for Microsoft 365 Exchange Online mailboxes, as well as outlining the server settings for SMTP, IMAP, and POP protocols.


***If you are unsure of whether or not your license includes Exchange Online, please contact your administrator.***


### Enabling SMTP authentication for Microsoft 365 Exchange Online mailboxes


In order to send via SMTP from an Exchange Online mailbox, an administrator will first need to enable **Authenticated SMTP** for the desired user via the [Microsoft 365 Admin Center](https://portal.office.com/Adminportal/Home) by taking the following steps:

1. **Sign In** via [Microsoft 365 Admin Center](https://portal.office.com/Adminportal/Home).

2. Select **Users**, then **Active Users**.

3. Click the display name of the mailbox you wish to enable **Authenticated SMTP** for.

4. Within the mailbox details, select **Mail**, then select **Manage email apps**.

5. Click the checkbox to enable **Authenticated SMTP**, and then select **Save changes**.


### Configuring Microsoft 365 Exchange Online mailboxes via SMTP, IMAP, and POP


To configure your Microsoft 365 Exchange Online mailbox for use via **SMTP**, reference the following settings:

- **Outgoing server:** smtp.office365.com

- **Port:** 587

- **Encryption method:** TLS or STARTTLS


To configure your Microsoft 365 Exchange Online mailbox for use via **IMAP**, reference the following settings:

- **Incoming Server:** outlook.office365.com

- **Port:** 993

- **Encryption method:** SSL


To configure your Microsoft 365 Exchange Online mailbox for use via **POP**, reference the following settings:

- **Incoming Server:** outlook.office365.com

- **Port:** 995

- **Encryption method:** SSL
