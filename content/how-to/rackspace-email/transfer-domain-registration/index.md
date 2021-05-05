---
permalink: transfer-domain-registration
audit_date: '2019-04-15'
title: Transfer domain registration
type: article
created_date: '2019-04-15'
created_by: Jerod Piatt
last_modified_date: '2019-04-15'
last_modified_by: William Loy
product: Rackspace Email
product_url: rackspace-email
---


This article instructs you about how to transfer your domain registration from your current registrar to Rackspace Cloud Office.

### Prerequisites
- **Applies to:** Administrator
- **Difficulty:** Easy
- **Time needed:** The transfer process takes between 4–7 business days.
- **Tools required:** Access to Cloud Office Control Panel, access to your current domain registrar, and access to the current WHOIS contact email address.


#### Preparing your domain for transfer

1. Contact your current domain registrar and request that they unlock your domain and provide an Extensible Provisioning Protocol (EPP) transfer code.

2. Create a ticket with Rackspace Support requesting transfer of domain registration to your Rackspace account. Include the domain you want to transfer as well the EPP code provided by your current domain registrar.

3. When Rackspace Support initiates the transfer request, you receive an email at your WHOIS contact address from your current domain registrar. You are instructed in the email to click a link confirming that you allow the domain transfer to take place. The transfer process does not commence until you complete this step.

4. Reply to the ticket you created with Rackspace Support by stating that you have completed the previous step. The automated transfer process takes 4–7 business days to complete.

#### Monitor the transfer from your Cloud Office Control Panel

1.	Log in to the [Cloud Office Control Panel](https://cp.rackspace.com).

2.	Scroll down to the **Domains** section and select **DNS Settings**.

3.	On this page, you see your domains listed as well as the status of the service. The transfer is complete when the status of the service changes from **Pending Authorization** to **Registration**.
