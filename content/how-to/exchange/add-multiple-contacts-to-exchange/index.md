---
permalink: add-multiple-contacts-to-exchange
audit_date: '2020-12-14'
title: Add multiple contacts to Exchange
type: article
created_date: '2011-03-18'
created_by: Rackspace Support
last_modified_date: '2020-12-14'
last_modified_by: Rose Morales
product: Microsoft Exchange
product_url: exchange
---

Microsoft&reg; Exchange&reg; allows only internal addresses for email forwarding and distribution
lists. To use an external address for either of these functions, you must set it
up as a contact, which is simply an Exchange alias that points to a real mailbox
outside of your domain.

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com/).

2. In the **Microsoft Exchange** section, click **Contacts**.

   {{<image alt="Contacts link highlighted." src="cp-contacts.jpg" title="Contacts link highlighted.">}}

3. If you have multiple domains, select the appropriate domain name. Or, to
   change domains, click **Change Domain**.

4. Click **Add Multiple Contacts**.

5. Create a CSV or Excel&reg; file containing the information detailed in the **Data
   Format** section:

   Use the following column headers:

   - Username (**Required**. It is used for the email address, such as
     **username@example.com**.)
   - DisplayName (**Required.**)
   - ExternalEmail (**Required.**)
   - VisibleToGAL (**Required.**. 1=Visible, 0=Hidden)
   - Last Name
   - First Name
   - Title
   - Company
   - Department
   - Phone Number
   - Street
   - City
   - State
   - Postal Code
   - Country
   - Notes

   Or, to download a template, click **CSV template** or **Excel template**.

6. In the **Import File** section, click **Browse**.

7. Locate and select the CSV or Excel file created in Step 5.

8. Click **Open**.

9. Click **Import**.

Any errors that occur display in the import summary, which appears after the import is complete.
