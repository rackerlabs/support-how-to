---
permalink: plesk-managing-email-accounts/
audit_date:
title: 'Plesk: Managing Email Accounts'
type: article
created_date: '2021-02-10'
created_by: Robert Kane
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

Plesk includes an email service that can be set up on a per domain name basis. This allows customers to create email accounts for their domain names through the Plesk web interface. There is also a webmail facility included. IMAP and POP3 is faciliated via Courier or Dovecot

For SSL/TLS connections to IMAP/POP3/SMTP, a Plesk generated self-signed certificate is used by default. This can cause issues for certain email clients (as they'll throw warnings) and in the event a customer is using Gmail's "Send Mail as" function to send email from their Plesk hosted domain, Gmail will flat reject the self-signed certificate.

To negate these issues, Plesk can be configured to secure services with a Let's Encrypt certificate based on the server's hostname. The customer will need to permit us creating an A record for their server's hostname for this to work as Let's Encrypt will use an HTTP challenge against the hostname.



### Prerequisites 
 - Dedicated server/Virtual Machine running RHEL or CentOS
  - Plesk Obsidian or later

### Procedure

1. Log into Plesk. (Please review Plesk: Introduction for these steps)

2. Navigate to "Domains" listed on the left side of the page panel

3. Select the domain you wish to modify & select "Mail Accounts" from within the new options presented.

4. You will now see all of the email accounts configured for this domain. Select the account you wish to modify.

5. This section will allow you to adjust the user name, password and mailbox size.
