---
permalink: disable-insecure-access
audit_date: '2023-09-21'
title: Disable Insecure Access
type: article
created_date: '2022-09-21'
created_by: Rackspace Support
last_modified_date: '2022-09-21'
last_modified_by: Daniel Boyle
product: Rackspace Email
product_url: rackspace-email
---

We recently announced that we will be removing the option to allow insecure access for all mail domains. In this article, we will walk through how to proactively disable insecure access so that you can troubleshoot any connection issues on your schedule.

## Process Overview

Removing insecure access is a simple 3 step process.

1. Communicate with your users
2. Toggle insecure access for the domain
3. Address any clients that have lost access

## Communicate with your users

It will be helpful if your users can help you troubleshoot connection issues. They can only that if they know what to look for, and how to contact you if trouble arises.

It helps to set a date and time when you will disable insecure access, and to communicate that date and time with your users, while letting them know what to expect when you make the change.

>NOTE: The most common clients to use insecure connections are printers, scanners, fax, CRM's, or other non-human users.

**So what *SHOULD* you expect?**

While insecure access is disabled, you can expect that email clients that are configured securely will continue to operate without disruption. Email clients that are configured insecurely won't be able to send or read email while the insecure access is disabled. Don’t worry, any mail sent to these accounts will still be stored on the server, so there will be no data loss. Reconfiguring clients to connect securely will restore their access.

## Toggle insecure access for the domain

###To disable insecure access for a domain:

1. Log in with your admin credential at https://cp.rackspace.com
1. Click “Domains” in the Top Nav menu
1. Click “Global Access Rights” in the Left Nav menu
1. Ensure that the checkbox for “Secure (SSL/TLS)” is checked for any protocols that your clients use. If in doubt, check them all:
    - POP3 (SSL)
    - IMAP (SSL)
    - Webmail (SSL)
    - SMTP (SSL)
1. Uncheck the checkbox for “Standard” for all protocols:
    - POP3
    - IMAP
    - Webmail
    - SMTP
1. Select the “Override” radio button
1. Click the “Save” button

### If you need to restore insecure access:

1. Log in with your admin credential at https://cp.rackspace.com
1. Click “Domains” in the Top Nav menu
1. Click “Global Access Rights” in the Left Nav menu
1. Ensure that the checkbox for “Secure (SSL/TLS)” is checked for any protocols that your clients use. If in doubt, check them all:
    - POP3 (SSL)
    - IMAP (SSL)
    - Webmail (SSL)
    - SMTP (SSL)
1. Check the checkbox for “Standard” for all protocols:
    - POP3
    - IMAP
    - Webmail
    - SMTP
1. Select the “Override” radio button
1. Click the “Save” button

## Address any clients that have lost access

If you receive reports from users who have lost access to their email, you can help them reconfigure their client. We suggest directing the user to the [Email Help Tool](https://help.emailsrvr.com/) for simple instructions to setup their email client.

If individual users are having trouble reconfiguring their client after following the instructions in the Email Help Tool, you can re-enable insecure access for just those users to temporarily mitigate their connectivity issues. See instructions for that below (Toggle insecure access for individual mailboxes).

If you receive an overwhelming number of reports from users who have lost access to their email, you can reenable insecure access at a domain level to temporarily recover to your starting state.

Make sure to take note of any users that remain with insecure connection settings, as you’ll need to work with them to reconfigure their connection settings before Insecure Access options are permanently removed in 2023.

## Toggle insecure access for individual mailboxes

### To enable insecure access for an individual mailbox:

1. Log in with your admin credential at https://cp.rackspace.com
1. Click Rackspace Email in the Top Nav menu
If you have multiple domains, click on your domain
1. Click “Manage” for the mailbox which you would like to enable insecure access
1. Click the “Settings” tab
1. Ensure that the checkbox for “Secure (SSL/TLS)” is checked for any protocols that your clients use. If in doubt, check them all:
    - POP3 (SSL)
    - IMAP (SSL)
    - Webmail (SSL)
    - SMTP (SSL)
1. Check the checkbox for “Standard” for all protocols:
    - POP3
    - IMAP
    - Webmail
    - SMTP
    - Click “Update Mailbox”

### To disable insecure access for an individual mailbox:

1. Log in with your admin credential at https://cp.rackspace.com
1. Click Rackspace Email in the Top Nav menu
If you have multiple domains, click on your domain
1. Click “Manage” for the mailbox which you would like to enable insecure access
1. Click the “Settings” tab
1. Ensure that the checkbox for “Secure (SSL/TLS)” is checked for any protocols that your clients use. If in doubt, check them all:
    - POP3 (SSL)
    - IMAP (SSL)
    - Webmail (SSL)
    - SMTP (SSL)
1. Uncheck the checkbox for “Standard” for all protocols:
    - POP3
    - IMAP
    - Webmail
    - SMTP
1. Click “Update Mailbox”