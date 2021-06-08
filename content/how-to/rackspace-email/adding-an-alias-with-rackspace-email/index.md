---
permalink: adding-an-alias-with-rackspace-email
audit_date: '2021-01-29'
title: Add an alias with Rackspace Email
type: article
created_date: '2012-01-18'
created_by: Rae D. Cabello
last_modified_date: '2021-01-29'
last_modified_by: Carlos Arriaga
product: Rackspace Email
product_url: rackspace-email
---

This article shows how to create an alias that forwards emails to another mailbox or multiple mailboxes on a domain.

### Prerequisites

- **Applies to:** Administrator
- **Difficulty:** Easy
- **Time needed:** 5 minutes
- **Tools required:** Cloud Office Control Panel access

For more information on prerequisite terminology, see [Cloud Office support terminology](/support/how-to/cloud-office-support-terminology).

Aliases are a way to create an alternate email address name for an existing email address. For example, John wants to receive emails from
business partners at *John@domain.com* (his actual email address) and from friends and family at *Johnny@domain.com* (an alias email
address), without checking two different accounts. In this case, he needs the system to deliver everything sent to johnny@domain.com
to john@domain.com.

### Add a single alias

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com/).
2. In the **Rackspace Email** section, click **Aliases**.

    {{<image src="aliases_CP1.png" alt="" title="">}}

3. On the **Aliases** page, click **Add Alias**.

    **Note**: If you have multiple domains, select the appropriate domain name. To change domains, select the **change domain** link.

4. In the **Create New Alias** box, enter a name for this alias.
5. From the **Members inside this Domain** box, select one or more mailboxes and drag them into the **Current Members** box.
   Then, go into the **Members of this Alias** box.

    {{<image src="members_of_domain.png" alt="" title="">}}

    {{<image src="members_of_alias.png" alt="" title="">}}

    **Note**: Move the address to which you want mail delivered to the right side under **Current Members** so that it can receive the
    mail sent to the alias address.

6. *(Optional)* Add up to four external addresses for domains like **gmail.com**, **yahoo.com**, or **hotmail.com**.
7. Click **Save**.

### Add multiple aliases

1. In the **Rackspace Email** section of the Cloud Office Control Panel, click **Aliases**.

    {{<image src="aliases_CP1.png" alt="" title="">}}

2. On the **Aliases** page, click **Add Multiple Aliases**.
3. Create a CSV or Excel file that contains the information detailed in the **Data Format** section of the **Import Aliases**
   page. You can download a template by clicking the **CSV template** or **Excel template** link.

    {{<image src="multiple_aliases.png" alt="" title="">}}

4. In the **Import File** section, click **Choose file**, select the CSV or Excel file you created, and click **Open**.
5. On the **Import Aliases** page, click **Import**.
    
See the **Import Summary**, which is displayed after the import completes, for any errors that occur.

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact). 

