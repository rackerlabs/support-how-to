---
permalink: add-a-domain-in-office-365/
audit_date: '2017-07-09'
title: Add a domain in Office 365
type: article
created_date: '2017-06-29'
created_by: William Loy
last_modified_date: '2019-11-29'
last_modified_by: Walter Stubbs
product: Office 365
product_url: office-365
---

The default domain in Office 365 is **{tenantName}.onmicrosoft.com**.  Until you add your own domain to Office 365, any new users that you create contain the default domain name.

This article describes how to add a domain in Office 365. By adding your own domain, you can create users specific to that domain.

### Prerequisites

- **Applies to:** Office 365 Administrator
- **Difficulty:** Easy
- **Time needed:** 24-48 hours for the domain to be verified
- **Tools required:**  Office 365 Global Administrator access

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology/).

Before you can set up a domain in the Office 365 portal, you must [create your Office 365 tenant with Rackspace](/how-to/office-365/set-up-office-365/) and [add the product licenses](/how-to/add-an-office-365-license/) that you need.

### Add a domain in Office 365

1.	Login to your [Office 365 Control Panel](https://office365.cp.rackspace.com).

2.	From the left menu, select **Office 365 Admin Center**.

3.  From the left menu, select **Settings**, then select **Domains**.

4. In the **Domains** section, click **Add Domain**.

5. Enter the domain name when prompted, then **Next**.

6. Verify that you own the domain.

   This step requires you to log in to your domain's DNS host portal. If you do not know who your DNS host is, see [Find your DNS host](/how-to/find-your-dns-host/).

    1. Select the **Add a TXT record instead** option, then **Next**.

    2. Copy the TXT record information provided on the **Verify domain** page.

    2. Log in to your domain's DNS host portal.

    3. Add the TXT record using the information provided on the **Verify domain** page.

    4. Save this change at your DNS host.

    5. Once the TXT record is fully propagated, select **Verify**.

    **Note:** The TXT record could take 24-48 hours to be verified by Office 365.

    **Warning:** It is important to consult your migration plan before continuing through the domain setup. Changing your MX Records before you are ready to migrate can result in a loss of service.

    After your domain has been successfully verified by Office 365, you can begin to assign it to your users. You will not be able to fully utilize your Office 365 services until you [add the appropriate DNS entries to your domain's DNS host](/how-to/configure-dns-for-office-365-services/).
