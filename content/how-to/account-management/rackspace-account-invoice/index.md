---
permalink: rackspace-account-invoice
audit_date: '2018-03-16'
title: Rackspace account invoice
type: article
created_date: '2014-09-01'
created_by: Kenny Johnston
---

Your monthly Rackspace account invoice includes account and billing
information, payment information, tax information, and summaries of your
services, promotions, and discounts. This article provides a detailed
description of the pages in your PDF or CSV invoice.

**Note:** For an explanation of a detailed invoice that shows an itemized,
per-service, per-device overview of your billing charges, see [Billing services overview](/support/how-to/billing-services-overview/).

### Account and billing information

The first page of your PDF invoice provides a detailed overview of your
account and billing information.

### Account summary

The bottom portion of the first page of your invoice includes the
following information:

- **Invoice Number**: The transaction number associated with the invoice.
- **Invoice Date**: The date the invoice was generated.
- **Currency**: The monetary currency in which your account is invoiced.
- **Invoice Amount Due**: The total amount due for your current invoice
  charges. This amount does not include any past due balance.
- **Payment Terms**: The time range within which payment should
  be received, in days.
- **Due Date**: The date that the payment is due.
- **Remit Section** (if applicable): The section to detach and send with your
  payment.

### Service summary

The second page of your invoice provides a summary of all support charges,
product charges, and other charges. This page is organized in the following
way:

- **Service**: The support, product, or other charges applied to your
  current bill.
- **Gross Charge**: The total charge before promotions and discounts.
- **Promotion & Discount**: The promotions and discounts associated
  with a product charge.
- **Net Charge**: The pretax amount for a product charge. This amount is the
  difference between the **Gross Charge** and the **Promotion & Discount** for
  a product charge.
- **Taxes**: The tax amount applied. Taxes are calculated based
  on the **Net Charge**.
- **Total Charges**: The sum of the **Net Charge** and the **Taxes** for a
  product.

While most of the service summary items are self-explanatory, two services
warrant additional description:

- **Cloud Servers**: This field includes all of the Cloud Servers flavor
  classes, such as OnMetal.
- **Cloud Bandwidth**: This field includes both Public and CDN Bandwidth.

### Other services

The third page of your invoice includes other charges accrued during the
billing period.

- **Service**: The support, product, or other charges applied to your
  current bill, including a descriptive name for the product or charge.
- **Gross Charge**: The total charge before promotions and discounts.
- **Promotion & Discount**: The promotions and discounts associated
  with a product charge.
- **Net Charge**: The pretax amount for a product charge. This amount is the
  difference between the **Gross Charge** and the **Promotion & Discount** for
  a product charge.
- **Taxes**: The tax amount applied. Taxes are calculated based
  on the **Net Charge**.
- **Total Charges**: The sum of the **Net Charge** and the **Taxes** for a
  product.
- **Total Current Invoice Charges**: The total for all of the accumulative
  charges applied to the invoice.

### Promotion and discount summary

The fourth page of your invoice provides a summary of the promotions and
discounts for the billing period.

- **Category and Description**: The names and descriptions of the
  promotions and discounts that are applied to your bill.
- **Net Discount**: The total amount that is deducted from your bill due
  to promotions and discounts.

### Tax summary

The fifth page of your invoice contains a **Tax Summary** section that
explains the taxes that are applied to your bill in detail.

If you are assessed a Goods and Services Tax (GST), you will also see the
aggregate product charges. These charges are broken down into taxable (T) and non-taxable charges for the billing period.

### Invoice details document (CSV)

Invoice detail documents in CSV format provide detailed information on daily usage that occurred during the billing cycle. Each row contains a daily usage item and an associated charge. Each row also enables you to view summaries of charges across the entire billing cycle in the following three views:

- **Resource**: To view a summary for a specific resource, create a PivotTable
  on the **RES_ID** column.
- **Service**: To view a summary for a specific service, create a PivotTable
  on the **SERVICE_TYPE** column.
- **Data center**: To view a summary for a specific data center, create a
  PivotTable on the **DC_ID** column.

### CSV file field descriptions

Invoices in CSV format have the following columns:

- **ACCOUNT_NO**: The customer account number.
- **PARENT_ACCOUNT_NO**: The paying account, when the account is in a
  hierarchy.
- **PURCHASE_ORDER**: The purchase order that is associated with the invoice.
- **BILL_NO**: The invoice number.
- **BILL_START_DATE**: The start date for the billing cycle.
- **BILL_END_DATE**: The end date for the billing cycle.
- **SERVICE_TYPE**: The service or product name. (Rows dealing with taxes
  display the value **ACCOUNT** in this field.)
- **EVENT_TYPE**: The sub-type for each service or product.
- **EVENT_START_DATE**: The start date and time of the usage or activity.
- **EVENT_END_DATE**: The end date and time of the usage or activity.
- **IMPACT_TYPE**: Indicates if the event is a **CHARGE**, **DISCOUNT**,
  **Local Sales Tax**, or **State Tax**.
- **QUANTITY**: The total quantity of the event measurement.
- **UOM**: The unit of measure for the quantity and event measurement.
- **RATE**: The rate that is applied to this event.
- **CURRENCY**: The monetary currency in which charges are billed.
- **AMOUNT**: The charge that is applied, based on the **RATE** and the
  **QUANTITY**.
- **USAGE_RECORD_ID**: A unique, system-generated ID for the event and charge.
- **DC_ID**: The data center that is associated with the usage or activity.
- **REGION_ID**: The geographical region that is associated with the usage or
  activity.
- **RES_ID**: A unique resource ID.
- **RES_NAME**: The customer-provided resource name.
- **ATTRIBUTE 1**: An attribute of the resource. For Cloud Servers, this
  value is the **Flavor Name**.
- **ATTRIBUTE 2**: An attribute of the resource. For Cloud Servers, this
  value is the **Option Name**.
