---
permalink: delete-a-rackspace-email-mailbox
audit_date: '2017-07-14'
title: Delete a Rackspace Email mailbox
type: article
created_date: '2017-06-09'
created_by: William Loy
last_modified_date: '2018-12-06'
last_modified_by: Stephanie Fillmon
product: Rackspace Email
product_url: rackspace-email
---

This article explains how to delete a Rackspace email mailbox in your Cloud Office Control Panel.

### Prerequisites

- **Applies to:** Administrator
- **Difficulty:** Easy
- **Time needed:** Approximately 5 minutes
- **Tools required:**  Cloud Office Control Panel access

For more information about prerequisite terminology, see [Cloud Office support terminology](/support/how-to/cloud-office-support-terminology).


### Block access versus delete

It is important to know the difference between blocking access to a mailbox and deleting a mailbox.

- Blocking access to a mailbox prevents users from accessing the mailbox. When mailbox access is blocked, it remains on your account and you continue to be billed for that mailbox. The mailbox retains its previous data and receives new mail sent to it.

- Deleting a mailbox removes that mailbox and all of its data from Rackspace's servers.

If you need any of the data in the mailbox, you must export the data before you delete the mailbox. Data exports must be performed through a [local mail client](/support/how-to/cloud-office-support-terminology), such as Outlook.

### Delete a mailbox

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com/) by using your Rackspace Cloud Office admin ID and password.
2. In the Rackspace Email section, click **Mailboxes**.

   {{<image src="add-mailbox-sc1.png" alt="" title="">}}

3. If you have multiple domains, select the domain that contains the mailbox that you want to delete.
4. Click the name of the mailbox you want to delete.

    {{<image src="click_username.png" alt="" title="">}}

5. Click **DELETE MAILBOX** in the upper-right corner.

    {{<image src="delete_button.png" alt="" title="">}}

6. A pop up appears informing you of what services and data will be deleted. After you review the information and want to continue with deleting the mailbox click **YES, DELETE MAILBOX**.

    {{<image src="yes_delete.png" alt="" title="">}}

    **Warning:** A deleted mailbox can be recovered for up to 14 days. For instructions, see [Recover a deleted mailbox](/support/how-to/recover-a-deleted-rackspace-email-mailbox/).

7. You are returned to the mailbox list where you can see that the mailbox has been removed from the list.

### Delete multiple mailboxes

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com/) by using your Rackspace Cloud Office admin ID and password.
2. In the Rackspace Email section, click **Mailboxes**.

   {{<image src="add-mailbox-sc1.png" alt="" title="">}}

3. If you have multiple domains, select the domain that contains the mailbox that you want to delete.

4. Check the box to the left of all the mailboxes you intend to delete.

5. Expand the **Select Action** menu at the bottom of the mailbox list, and select **Delete mailboxes**

   {{<image src="delete-rse-box-sc2.png" alt="" title="">}}

6.  A pop up appears informing you of what services and data will be deleted. After you review the information and want to continue with deleting the mailbox click **Delete # mailboxes**.

    {{<image src="delete_mult_mailboxes.png" alt="" title="">}}

7. You are returned to the mailbox list where you can see that the mailbox has been removed from the list.
