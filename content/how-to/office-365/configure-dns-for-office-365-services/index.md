---
permalink: configure-dns-for-office-365-services
audit_date:
title: Configure DNS for Office 365 services
type: article
created_date: '2019-11-29'
created_by: Simon Ponder
last_modified_date: '2020-09-02'
last_modified_by: Stephanie Fillmon
product: Office 365
product_url: office-365
---

The default domain in Office 365&reg; is **{tenantName}.onmicrosoft.com**.  Until you add your own domain to Office 365, any new users that you create contain the default domain name.

This article describes how to add a domain in Office 365. By adding your own domain, you can create users specific to that domain.

### Prerequisites

- **Applies to:** Office 365 Administrator
- **Difficulty:** Easy
- **Time needed:** 24-48 hours for the domain to be verified
- **Tools required:**  Office 365 Global Administrator access and access to your DNS host

For more information about prerequisite terminology, see [Cloud Office support terminology](/support/how-to/cloud-office-support-terminology/).

Before you can set up a domain in the Office 365 portal, you must [create your Office 365 tenant with Rackspace](/support/how-to/set-up-office-365/) and [add the product licenses](/support/how-to/add-an-office-365-license/) that you need.

After Office 365 verifies your domain and you are ready to use your services, you need to finalize your setup by configuring the DNS entries for your Office 365 services.

**Warning:** It is important to consult your migration plan before continuing through the domain setup. Changing your MX Records before you are ready to migrate can result in a loss of service.

### Configuring DNS records for your Office 365 services

Use the following steps to configure the DNS records for your Office 365 services:

1.	Log in to your [Office 365 Control Panel](https://manage365.rackspace.com).

2.	From the left menu, select **Office 365 Admin Center**.

3.  From the left menu, select **Settings**, and then select **Domains**.

4.  In the **Domains** section, select the domain you want to configure services for.

5.  From the domain setup wizard, select **Continue Setup** from the top menu.

6.  On the **Set up your online services** screen, select **I'll manage my own DNS records** and click **Next**.

  **Warning:** We strongly advise against using the **Set up my online services for me** option because this can affect services attached to your domain that are not associated with Office 365, such as your website.

7.  When prompted, select the online services you want to configure. The selection is based on the current licenses that are assigned to your users.

**Note:** We recommend setting up all available services to prevent issues later.

8.  After selecting your online services, click **Next**.

This step requires you to log in to your domain's DNS host portal. If you do not know who your DNS host is, see [Find your DNS host](/support/how-to/find-your-dns-host/).

9.  Log in to your DNS host and copy the records from the table provided into your DNS host.

10. After all records are entered into your DNS host, select **Verify**.

**Note:** It might take up to 24-48 hours for the DNS records to fully propagate from your DNS host and for Office 365 to verify them.
