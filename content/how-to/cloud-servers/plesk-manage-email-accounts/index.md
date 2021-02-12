---
permalink: plesk-manage-email-accounts/
audit_date: '2021-02-12'
title: 'Plesk: Manage email accounts'
type: article
created_date: '2021-02-10'
created_by: Robert Kane
last_modified_date: '2021-02-12'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

Plesk includes an email service that can be set up per domain name basis.
This allows customers to create email accounts for their domain names through
the Plesk web interface. It also includes a webmail feature. IMAP and
POP3 is provided via Courier or Dovecot.

SSL/TLS connections for IMAP, POP3 and SMTP, use a generated self-signed
certificate by default. This may cause a conflict for certain email clients and
in the event a customer is using Gmail&reg; the **Send Mail as** function it
will reject the self-signed certificate. To prevent this conflict, Plesk has the
ability to secure services with a **Let's Encrypt** certificate based on the
server's hostname. The customer will need to allow the creation of an **A
record** for the server's hostname.

### Prerequisites

- Dedicated server or Virtual Machine running RHEL&reg; or CentOS&reg;
- Plesk Obsidian or later

### Procedure

1. Log into Plesk. (Please review Plesk: Introduction for these steps)
2. Navigate to **Domains** listed on the left side of the page panel
3. Select a domain.
4. Click **Mail Accounts**.
5. Select an account to modify.
6. This section will allow you to adjust the user name, password and mailbox
   size.
