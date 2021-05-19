---
permalink: common-windows-issues-why-password-resets-fail-on-a-domain-controller
audit_date: '2021-05-14'
title: 'Common Windows&reg; issues:  Why resetting a password fails on a domain controller'
type: article
created_date: '2011-08-16'
created_by: Richard Goodwin
last_modified_date: '2021-05-14'
last_modified_by: Ana Corpus
product: Cloud Servers
product_url: cloud-servers
---

###Problem
After you request a password reset for a Windows Server&reg; that acts as a Domain Controller (DC), the password does not reset.

The Rackspace Cloud Server Agent service attempts to alter the local Security Accounts Manager (SAM) account for the administrator and reports a failure, but the password reset appears as if it completed successfully.

###Explanation
A domain controller does not have any local accounts. When a server is promoted to a domain controller, all local accounts are removed and authentication, access permissions, group memberships, etc. are handled by the active directory database. Because there are no local accounts, the password reset commamd applied to the local administrator account fails.

When you attempt to clone a domain controller, the operation fails on multiple levels. Even if the cloned domain controller allows you to reset the administrator's password, it is not functional because it detects a duplicate domain controller within the forest. This scenario is impossible when a server is installed (and not cloned) because of the way an active directory handles computer names by ensuring that all names are unique.

When you change the name of the cloned domain controller, another failure occurs because DNS (and hence active directory because they are tied together) cannot locate the name of the Start of Authority (SOA) for the active directory domain zone file. The computer object in the domain controller's container in active directory does not match, so the cloned domain controller abides to all the rules when it boots, but after it starts, it isolates from the network and shuts down all directory services attributes. The cloned domain controller gets to the login prompt but you have to boot into **Directory Services Restore Mode** to clean all the metadata.

###Conclusion

Do not clone a Rackspace Cloud Server configured as domain controller. Demote the domain controller before you save the server image to create new servers.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/).
