---
permalink: troubleshoot-failed-email-connection
audit_date: '2017-06-05'
title: Troubleshoot a failed email connection
type: article
created_date: '2017-05-29'
created_by: William Loy
last_modified_date: '2021-07-05'
last_modified_by: Rose Morales
product: Rackspace Email
product_url: rackspace-email
---

If your local email client cannot make a connection to your mailbox, try this
troubleshooting recommendations.

### Prerequisites

- **Applies to:** User
- **Difficulty:** Challenging
- **Time needed:** 1 hour
- **Tools required:** Access to offending device, online email access, access to
  a non-primary computer, and access to a non-primary Internet network

For more information about prerequisite terminology, see
[Cloud Office support terminology](/support/how-to/cloud-office-support-terminology).

### Troubleshooting

We recommend a methodical approach to troubleshooting this issue. Address each
of the following questions before moving on to the next one.

1. Can you log in to [apps.rackspace.com](https://apps.rackspace.com/)?

   Log in to the online version of your mailbox to verify email is incoming. If
   so, the mailbox is functioning properly.

2. When did the issue start?

   An event that occurred about the same time could have caused the problem. For
   example, if changes to your office or home network occurred, or a password is
   updated on your mailbox, update the password on your software to fix the
   issue.

3. Have you migrated from another provider?

   After migrating a mailbox to Rackspace Cloud Office from an external
   company, your [mail client](/support/how-to/cloud-office-support-terminology/#cloud-office-terminology)
   must connect to the mailbox on the new server. Instructions to configure
   a mail client to connect a migrated mailbox are available at
   [emailhelp.rackspace.com](https://emailhelp.rackspace.com/).

4. Have you upgraded the mailbox at Rackspace Cloud Office?

   After a version upgrade, it generates a copy of the mailbox under another a
    new server version. For example, if you upgrade a mailbox from Exchange 2007
    to 2016, the data migrates from an Exchange 2007 mailbox to a new mailbox on
    Exchange 2016. This means that you must configure your
    [local mail client](/support/how-to/cloud-office-support-terminology/#cloud-office-terminology)
    to connect to the mailbox on the new server. For instructions to configure
    your mail client after an upgrade, see
    [emailhelp.rackspace.com](https://emailhelp.rackspace.com/).

5. Is the connectivity issue happening on all domain users?

   Verify with your administrator that your DNS is properly configured to
   [receive email at Rackspace Cloud Office](/support/how-to/set-up-dns-records-for-cloud-office-email/).
   When a domain expires DNS changes may occur that sincronization issues between a
   new email and your local mail client.

6. Can you connect to your mailbox from another computer?

   If you can connect to your mailbox from another computer, the issue might be
   local to your primary computer.

7. Can you connect to your mailbox by using a different
[Internet network](/support/how-to/cloud-office-support-terminology/#cloud-office-terminology)?

   If you can connect to your mailbox by using a different Internet network, the
   issue resides within your regular network you use. In this case, contact your
   network administrator or your internet service provider for more information.

If you address these steps and your email client still does not connect to your
mailbox, contact your administrator for help.

### References

- [Cloud Office support terminology](/support/how-to/cloud-office-support-terminology/)
- [Cloud Office email login portal](https://apps.rackspace.com/index.php)
- [Email Help Tool](https://emailhelp.rackspace.com/)
- [Set up DNS Records for Cloud Office email](/support/how-to/set-up-dns-records-for-cloud-office-email/)
