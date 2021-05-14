---
permalink: common-windows-issues-why-password-resets-fail-on-a-domain-controller
audit_date: '2021-05-14'
title: Common Windows issues \:Why password resets fail on a domain controller
type: article
created_date: '2011-08-16'
created_by: Richard Goodwin
last_modified_date: '2021-05-14'
last_modified_by: Ana Corpus
product: Cloud Servers
product_url: cloud-servers
---

### Problem

After you request a password reset for a Windows Server&reg; that acts as a Domain
Controller (DC), the password does not reset.

The Rackspace Cloud Server Agent service attempts to alter the local Security
Accounts Manager (SAM) account for the administrator and reports a failure, but
the password reset appears to complete.

### Explanation

A DC does not have any local accounts. When you promote a server to a DC, the
system removes all local accounts, and the Active Directory (AD) database handles
all authentication, access permissions, group memberships, and so on.  Because
there are no local accounts, the password reset command applied to the local
administrator account fails.

When you attempt to clone a DC, the operation fails on multiple levels. Even if
the cloned DC allows you to reset the administrator's password, it doesn't work
because it detects a duplicate DC within the forest. This scenario is impossible
when you install server (rather than cloning it) because of how AD handles
computer names by ensuring that all names are unique.

When you change the name of the cloned DC, another failure occurs because DNS
(and hence AD because they are tied together) cannot locate the name of the
Start of Authority (SOA) for the AD domain zone file. The computer object in
the DC's container in AD does not match, so the cloned DC abides by all the
rules when it boots. However, after it starts, it isolates from the network
and shuts down all directory services attributes. The cloned DC gets to the
login prompt, but you have to boot into **Directory Services Restore Mode**
to clean all the metadata.

### Conclusion

Don't clone a Rackspace Cloud Server configured as a Domain Controller.
Demote the current DC before you save the server image to create new servers.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/).

