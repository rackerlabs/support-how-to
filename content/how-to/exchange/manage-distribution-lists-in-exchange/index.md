---
permalink: manage-distribution-lists-in-exchange
audit_date: '2020-12-29'
title: Manage distribution lists in Exchange
type: article
created_date: '2014-11-18'
created_by: Joanna Salazar
last_modified_date: '2020-12-29'
last_modified_by: Rose Morales
product: Microsoft Exchange
product_url: exchange
---

When you create a distribution list in Hosted Microsoft&reg; Exchange, you are
generating a group of email addresses. When someone sends an email to that email
address, the email is automatically sent to all the members of the distribution
list. These members can be mailboxes within the domain, contacts outside of the
domain, or both.

### View all distribution lists

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com/).

2. In the top navigation bar, click **Hosted Exchange > Lists**.

   {{<image src="list1.jpg" alt="" title="">}}

3. If you have multiple domains, select the appropriate domain name.

   **Note**: To change domains at any time, click the arrow next to the domain.

   {{<image src="list2.jpg" alt="" title="">}}

Use the steps in the following sections for the available actions that you can perform.

### Add or edit a distribution list

1. In the distribution lists view, click the display name of the list that you want
   to edit. If you are creating a new list, click **Add Distribution List**.

2. On the **General** page, enter or edit the following fields:

    - **Display Name:** Enter a descriptive id for the list.
    - **Email Address:** Enter a unique address ID such as *sales* or *staff* for the list.
    - **Hide from Global Address List:** To hide the distribution list so that
      it cannot by viewed by others from the Global Address List, select this
      check box.

3. To add a mailbox as a member of a list, select the check box next to
   the mailbox `userID` in the **Members** section.

   **Note**: The search tool is available to locate specific email addresses.

   {{<image src="list3.png" alt="" title="">}}

4. To configure the following optional sections, click **Advanced**:

   - **Members:** Use the search tool to filter specific users.
   - **Senders:** To assign who can send emails to this list, select **Anyone** or **Selected addresses on this domain**.

      **Note**: If you choose **Selected addresses on this domain**, specify the user or users.
   
   - **Email Addresses:** Create alias (or alternative) email addresses for the
     list.

   {{<image src="list4.png" alt="" title="">}}

5. Click **Create Distribution List** or **Save Distribution List**.

### Delete a distribution list

1. In the distribution lists view, select the check box next to each list that
   you want to delete.

   **Note**: To select all lists, select the check box that appears next to the **Delete** button at the bottom of the page.

2. Click **Delete** and a pop-up box appears to confirm that you want to delete the list.
   
   {{<image src="list5.png" alt="" title="">}}

3. Click **Delete** `n` **Distribution List**, where `n` is the number of lists
   that you selected.
