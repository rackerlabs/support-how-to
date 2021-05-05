---
permalink: rackspace-directory-sync-operation-guide
audit_date: '2020-11-24'
title: 'Rackspace Directory Sync Operation Guide'
type: article
created_date: '2014-04-29'
created_by: Aaron Medrano
last_modified_date: '2020-11-24'
last_modified_by: Rose Morales
product: Microsoft Exchange
product_url: exchange
---

This article explains how to use your Active Directory to synchronize email objects by
using Rackspace Directory Sync and Rackspace Hosted Email. It also provides instructions
for creating new email addresses, distribution lists, and contacts for Microsoft&reg; Exchange.

### Add a new mailbox

If the email address does not exist in the Control Panel, the system creates a new mailbox
during the next synchronization.

**Note:** User objects must be direct members of the specified email
security group. Nested groups cause Directory Sync to create a
distribution group instead of creating mailboxes for users in the nested
group.

1. Set the Active Directory user's email address property
   **mail attribute** to the email address you want.

2. Add the new user to the email security group.

Directory Sync creates a mailbox for the user and synchronizes the user's
password. If this is a first-time setup, you must change the password to
ensure that it synchronizes.

### Create a mailbox for an existing user

If the email address exists in the Control Panel, the Active Directory
user synchronizes to the existing mailbox.

**Note:** User objects must be direct members of the specified email
security group. Nested groups cause Directory Sync to create a
distribution group instead of creating mailboxes for users in the nested
group.

1. Verify that the Active Directory user's email address property
    **mail attribute** matches the existing email address.

2. Add the User object to the email security group.

Directory Sync creates a mailbox for the user and synchronizes the
user's password. If this is a first-time setup, you must change the password to
ensure that it synchronizes.

### Remove a user mailbox

Use the following steps to remove a user mailbox:

1. Remove the user from the email security group.

    **Note**: Directory Sync disables the user's mailbox.

2. Navigate to the Cloud Office Control Panel.

3. Confirm that the mailbox is disabled.

4. Delete the mailbox.

**Note:** To prevent accidental deletions, Directory Sync
does not automatically delete mailboxes.

### Create a distribution list

Use the following steps to create a distribution list:

1. Create a group within the Active Directory or use an already
    existing group. This Active Directory group can be either a
    security group or a distribution list.

2. Set the group email **mail attribute**.

    - For new distribution lists, provide an email address before
        subscribing to the **Hosted Exchange** security group.

    - For existing distribution lists, add an email address if it
        doesn't exist, or update the email address to match the email in
        the Cloud Office Control Panel before synchronizing. If the
        email address doesn't match what is in the Cloud Office Control
        Panel, a new distribution list is created.

3. Subscribe to the new group created in step 1 to the **Hosted Exchange**
    group specified in the Directory Sync settings. You must set the
    email address in step 2 before you subscribe the distribution group
    to the **Hosted Exchange** security group.

**Note:** To synchronize members of the distribution list created in step 1 to
members of the distribution list in the Control Panel, you must also
subscribe the members to either the **Hosted Exchange** group
or the **Rackspace Email** group specified in the Directory Sync settings.

### Delete a distribution list

To delete a distribution list, remove the **Distribution List** group from
the **Hosted Exchange** security group specified in the Directory Sync
settings.

**Note:** After the next synchronization, the system deletes the distribution list
from the Cloud Office Control Panel.

### Create a contact (Exchange)

Use the following steps to create a contact:

1. Create a Contact object within the Active Directory.

    **Note:** When you create the contact, the **Display Name** within
    the object creates the **Display Name** for the contact within the
    Cloud Office Control Panel.

2. After you create the Contact object, set the email address to
    point to the external email address of the contact.

3. Subscribe the new contact to the **Hosted Exchange** group specified in
    the Directory Sync settings.

**Note:** The **objectGUID** attribute of the contact serves as the
username for the contact within the Cloud Office Control Panel. Active
Directory automatically creates this attribute, and Directory Sync uses it to
reference the contact through our API.

Customers with multiple email domains must edit the Contact object's
**otherMailBox** attribute to specify the domain to synchronize.
You only need to have the domain set within this attribute.

### Delete a contact (Exchange)

To delete a contact from Exchange, remove the contact from the **Hosted
Exchange** security group specified in the Directory Sync settings.

**Note:** After the next synchronization, the system deletes the contact
from the Cloud Office Control Panel.

### Change the external email address of a contact (Exchange)

Use the following steps to change an external mail address for a contact:

1. Remove the contact from the Hosted Exchange security group set in
   the Directory Sync settings.

2. Allow the Directory Sync tool to synchronize the new changes. Either
    a manual or an automatic operation can synchronize the new changes.

3. Change the email address of the contact.

4. Add the contact address to the Hosted Exchange security group
    and synchronize.

### Rename a Hosted Service security group

Use the following steps to rename a Hosted Service security group:

1. On the Directory Sync **Settings** page, select **Do Not Sync** from the email
    service list, and click **Save & Start Sync**.

2. In Active Directory, rename the security group and the **pre-Windows
    2000** group name. The group name and **pre-Windows 2000** group name must
    be identical.

3. Back on the **Settings** page, select the new group name from the list
    and click **Save & Start Sync**.

### Add an alternate email address (optional synchronization)

Use the following steps to add an alternate email address:

1. Enable synchronization. This value is turned off by default.

      a. In the **\\Directory Sync Service\\web** directory, open the
        **appSettings.config** file.
      b. Find the following configuration value:

            `<add key="SyncProxyAddresses" value="False" />`

      c. Change the **value** attribute to **True** to enable synchronization
            of the proxy addresses. This setting is persistent.

2. Open Active Directory **Users and Computers**.

3. Open the **Attribute Editor** of the User Object. Enable the **Advanced
    Features** tab in the **View** settings to display this tab.

4. Go to the **proxyAddresses** attribute and click **Edit**.

5. Add the alternate email address.

**Note:** The alternate email addresses are formatted as
**SMTP:userA@example.com**. For all alternate email addresses beginning
with `SMTP:`, you must list the full email address. You cannot place domain aliases
in this attribute. Because the primary domain automatically creates domain aliases,
you can list only the Primary Domain and Accepted Domains in this attribute.
