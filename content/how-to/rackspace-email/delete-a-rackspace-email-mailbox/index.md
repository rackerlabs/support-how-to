---
permalink: delete-a-rackspace-email-mailbox
audit_date: '2021-07-09'
title: Delete a Rackspace Email mailbox
type: article
created_date: '2017-06-09'
created_by: William Loy
last_modified_date: '2021-07-09'
last_modified_by: Rose Morales
product: Rackspace Email
product_url: rackspace-email
---

This article explains how to delete a Rackspace email mailbox in your Cloud
Office Control Panel.

### Prerequisites

- **Applies to:** Administrator
- **Difficulty:** Easy
- **Time needed:** 5 minutes
- **Tools required:**  Cloud Office Control Panel access

For more information about prerequisite terminology, see
[Cloud Office support terminology](/support/how-to/cloud-office-support-terminology).

### Block access versus delete

Some of the differences between blocking access to a mailbox and deleting a
mailbox include the following ones:

- Blocking a mailbox prevents users from accessing it. It remains on your
  account, and you continue getting billed for that mailbox while retaining its
  previous data and receiving new mail sent to it.

- Deleting a mailbox removes that mailbox and all its data from the Rackspace
  servers.

If you need any of the data in the mailbox, you must export it before
deletion, performing the data export through a
[local mail client](/support/how-to/cloud-office-support-terminology), such as Outlook&reg;.

### Delete a mailbox

Perform the following steps to delete a mailbox:

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com/) by
   using your Rackspace Cloud Office admin ID and password.
2. In the **Rackspace Email** section, click **Mailboxes**.
3. If you have more than one domain, select the domain that contains the mailbox
   that you want to delete.
4. Click **Manage** to the right of the mailbox you want to delete.
5. Click **DELETE MAILBOX** in the upper-right corner.
6. A pop-up message appears informing you of what services and data the operation deletes.
   After you review the information and want to continue deleting the
   mailbox, click **YES, DELETE MAILBOX**.

    **Warning:** You can recover a deleted mailbox for up to 14 days. For
    instructions, see [Recover a deleted mailbox](/support/how-to/recover-a-deleted-rackspace-email-mailbox/).
7. The mailbox list displays, and you can see that the mailbox is no longer on
   the list.

### Delete multiple mailboxes

Perform the following steps to delete multiple mailboxes:

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com/) by
   using your Rackspace Cloud Office admin ID and password.
2. In the **Rackspace Email** section, click **Mailboxes**.
3. If you have multiple domains, select the domain that contains the mailbox
   that you want to delete.
4. Check the box to the left of all the mailboxes you intend to delete.
5. Expand the **Select Action** menu at the bottom of the mailbox list, and
   select **Delete mailboxes**
6. A pop-up message appears confirming the services and data selected.
   After you review the information and want to continue deleting the
   mailbox, click **Delete # mailboxes**.
7. The mailbox list appears, so you can confirm that the mailbox disappeared from
   the list.
