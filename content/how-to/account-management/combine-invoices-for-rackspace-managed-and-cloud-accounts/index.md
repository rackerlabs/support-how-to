---
permalink: combine-invoices-for-rackspace-managed-and-cloud-accounts/
audit_date: '2020-10-19'
title: 'Combine invoices for Rackspace Public Cloud, Rackspace Private Cloud, and third-party cloud accounts'
type: article
created_date: '2017-08-07'
created_by: Stephanie Fillmon
last_modified_date: '2020-10-19'
last_modified_by: Stephanie Fillmon
product: Account Management
product_url: account-management
---

Instead of paying separate bills for multiple Rackspace accounts, you can
combine your bills into a single invoice and pay only once. This article describes
how to combine invoices, how your billing due date is affected, and how to
separate a combined invoice.

Currently, you can combine bills for the following products and services:

- Rackspace Private Cloud
- Rackspace Public Cloud
- Third-party cloud accounts, such as Amazon Web
  Services&reg; (AWS), Microsoft&reg; Azure&trade;, and Google Cloud
  Platform&trade;

You cannot combine accounts that:

- Are billed in different currencies
- Are already combined with another invoice
- Are contracted with different contracting entities
- Have an outstanding balance on a child account

### Combine invoices

1. Log in to the [Rackspace Customer Portal](https://login.rackspace.com/).
2. In the upper-right corner of the page, click **Billing**.

   The Billing Overview page displays.

3. In the **Consolidate Invoices** section on the left-hand side of the page, click
   **Add Account**.

   You can also combine invoices from the **Invoice Details** page. On the left-hand
   side of the page, click **Add Account**.

4. On the **Add Account** screen, enter the account number that you want to add to the invoice.

   {{<image src="add-account.png" alt="" title="">}}

5. Enter the username and password for that account.

   {{<image src="add-account-details.png" alt="" title="">}}

6. Select the check box to agree to the terms of service, and then click **Add Account**.

7. A pop-up dialog box displays the account information that you want to add to the invoice. Click **Add Account** to confirm.

   {{<image src="confirm-add-account.png" alt="" title="">}}

After the accounts are consolidated, the **Invoiced Accounts** section of the
**Billing Settings** page displays the new account.

### Billing cycle

If your combined invoice includes only Rackspace Public Cloud accounts, you receive
your next invoice on your normal billing date for your primary account.

If your combined invoice includes a Rackspace Private Cloud or third-party
cloud account, your next invoice is billed on the first day of the month.

The following example describes how your billing is affected when you combine
Rackspace Public Cloud and AWS account invoices:

- The AWS account is the primary account with a billing date of February 1, and the billing date for the Public Cloud account is February 15.
- Combined invoicing is set up on February 20.
- On March 1, an invoice is generated for only the primary account.
- On March 15, no invoice is generated for the Public Cloud account.
- On April 1, the combined invoice is generated with all AWS and Public Cloud charges, including the owed Public Cloud account amount from February 15 to March 31.
- From this point on, the combined invoice is billed on the first of the month.

**Note**: If your Public Cloud account has discounts applied to it, they are prorated for the period during which no bill was generated.

### Separate a combined invoice

To separate a combined invoice, you must contact the account manager to update
your billing preferences.
