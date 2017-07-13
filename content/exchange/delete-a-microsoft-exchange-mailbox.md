---
permalink: delete-a-microsoft-exchange-mailbox/
audit_date:
title: Delete a Microsoft Exchange mailbox
type: article
created_date: '2017-06-09'
created_by: William Loy
last_modified_date: '2017-07-13'
last_modified_by: Nate Archer
product: Microsoft Exchange
product_url: Exchange
---

This article describes how to delete a Microsoft Exchange mailbox in the Cloud Office Control Panel.

### Prerequisites

- **Applies to:** Administrator
- **Difficulty:** Easy
- **Time needed:** Approximately 5 minutes
- **Tools required:**  Cloud Office Control Panel access

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology).

### Disable vs. delete

It is important to know the difference between disabling a mailbox and deleting a mailbox.

**Disable a mailbox**: Prevents access to the mailbox. If a mailbox is disabled it remains on your account and you continue to be billed for that mailbox. The mailbox retains its previous data and still receives new mail sent to it.

**Delete a mailbox**: Removes that mailbox and all of it's data from Rackspace's servers. After you have deleted a mailbox, you must contact support to have that change reflected on your bill.

You should be certain that you do not need any of the data stored in the mailbox. If you do need data in the mailbox, you must export the data before deleting the mailbox. Data exports must be performed through a [local mail client](/how-to/cloud-office-support-terminology) such as Outlook.


### How to delete a mailbox

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com/) using your Rackspace Cloud Office admin ID and password.
2. In the **Microsoft Exchange** section, click **Mailboxes**.

   <img src="{% asset_path exchange/delete-a-microsoft-exchange-mailbox/delete-hexbox-sc1.png %}" />


3.	If you have multiple domains, select the domain that contains the mailbox you want to delete.
4. In the domains screen, check the box to the left of the mailbox that you want to delete.

**Warning:** A deleted mailbox can only be recovered for 14 days. For more information, see [Recover a deleted Microsoft Exchange mailbox](/how-to/recover-a-deleted-microsoft-exchange-mailbox/).

5. Expand the **Select Action** drop down menu at the bottom of the mailbox list and then click **Delete Mailboxes**.

   <img src="{% asset_path exchange/delete-a-microsoft-exchange-mailbox/delete-hexbox-sc2.png %}" />

   A box appears asking you to confirm the deletion. To confirm, click **Delete Mailboxes**.  
