---
permalink: troubleshoot-failed-email-connection
audit_date: '2021-07-05'
title: Troubleshoot a failed email connection
type: article
created_date: '2017-05-29'
created_by: William Loy
last_modified_date: '2021-07-05'
last_modified_by: Rose Morales
product: Rackspace Email
product_url: rackspace-email
---

If your local email client cannot make a connection to your mailbox, try these
troubleshooting recommendations.

### Prerequisites

- **Applies to:** User
- **Difficulty:** Challenging
- **Time needed:** 1 hour
- **Tools required:** Access to the offending device, online email access,
  a non-primary computer, and a non-primary Internet network

For more information about prerequisite terminology, see
[Cloud Office support terminology](/support/how-to/cloud-office-support-terminology).

### Troubleshooting

We recommend a methodical troubleshooting approach. Address each
of the following questions before moving on to the next one.

1. Can you log in to [apps.rackspace.com](https://apps.rackspace.com/)?

   Log in to the online version of your mailbox to verify email is incoming. If
   so, the mailbox is functioning properly.

2. When did the issue start?

   An event that occurred about the same time could have caused the problem. For
   example, if changes to your office or home network occurred or you updated
   your mailbox password, update your software settings or password to fix the
   issue.

3. Have you migrated from another provider?

   After migrating a mailbox to Rackspace Cloud Office from an external
   company, your [mail client](/support/how-to/cloud-office-support-terminology/#cloud-office-terminology)
   must connect to the mailbox on the new server. Instructions to configure
   a mail client to connect a migrated mailbox are available at
   [emailhelp.rackspace.com](https://emailhelp.rackspace.com/).

4. Have you upgraded the mailbox at Rackspace Cloud Office?

    A version upgrade generates a copy of the mailbox under the
    new server version. For example, if you upgrade a mailbox from Exchange 2010
    to 2016, the data migrates from an Exchange 2010 mailbox to a new mailbox on
    Exchange 2016. This means that you must configure your
    [local mail client](/support/how-to/cloud-office-support-terminology/#cloud-office-terminology)
    to connect to the mailbox on the new server. For instructions to configure
    your mail client after an upgrade, see
    [emailhelp.rackspace.com](https://emailhelp.rackspace.com/).

5. Is the connectivity issue happening on all domain users?

   Verify with your administrator that your DNS configuration properly
   [receives email at Rackspace Cloud Office](/support/how-to/set-up-dns-records-for-cloud-office-email/).
   DNS changes might cause synchronization issues between a new email and your
   local mail client when a domain expires.

6. Can you connect to your mailbox from another computer?

   If you can connect to your mailbox from another computer, the issue might be
   local to your primary computer.

7. Can you connect to your mailbox by using a different
   [Internet network](/support/how-to/cloud-office-support-terminology/#cloud-office-terminology)?

   If you can connect to your mailbox by using a different Internet network, the
   issue exists within the regular network you use. In this case, contact your
   network administrator or your internet service provider for more information.

If you address these steps and your email client still does not connect to your
mailbox, contact your administrator for help.

### References

- [Cloud Office support terminology](/support/how-to/cloud-office-support-terminology/)
- [Cloud Office email login portal](https://apps.rackspace.com/index.php)
- [Email Help Tool](https://emailhelp.rackspace.com/)
- [Set up DNS records for Cloud Office email](/support/how-to/set-up-dns-records-for-cloud-office-email/)
