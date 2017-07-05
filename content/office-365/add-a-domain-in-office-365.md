---
permalink: add-a-domain-in-office-365/
audit_date:
title: Add a domain in Office 365
type: article
created_date: '2017-06-29'
created_by: William Loy
last_modified_date: '2017-06-30'
last_modified_by: William Loy
product: Office 365
product_url: office-365
---

This article to describes how to add a domain in Office 365.

### Prerequisites

- **Applies to:** Office 365 Administrator
- **Difficulty:** Easy
- **Time needed:** 24-48 hours for domain to be verified
- **Tools required:**  Office 365 tenant Administrator access

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology/).


### Add a domain in Office 365

After you have [created your Office 365 tenant with Rackspace](/how-to/office-365/#create-your-tenant-id/) and [added the product licenses](/how-to/add-an-office-365-license/) you need, you can set up your domain in the Office 365 portal.

1. Log in with your Office 365 Administrator credentials at [portal.office.com](portal.office.com).

2. Select the **Admin** tile.

   <img src="{% asset_path office-365/add-a-domain-in-office-365/add-a-domain-in-office-365-sc1.png %}" />

3. Expand **Settings** on the left hand side of the screen and select **Domains**.
4. In the **Domains** section, click **Add Domain**.
5. On the next page enter the domain name that you want to add.

   <img src="{% asset_path office-365/add-a-domain-in-office-365/add-a-domain-in-office-365-sc3.png %}" />

6. Verify that you own the domain. This step will require to log into your domain's DNS host portal. If you do not not who your DNS host is, see [Find your DNS host](/how-to/find-your-dns-host/).

    - Copy the TXT record information provided in the Office 365 portal

      <img src="{% asset_path office-365/add-a-domain-in-office-365/add-a-domain-in-office-365-sc3.png %}" />

    - Log into your domain's DNS host portal

    - Add the TXT record provided in the Office 365 portal

    - Save this change at your DNS host.

    **Note:** The TXT record could take 24-48 hours to be verified by Office 365.

7. After your domain has been successfully verified by Office 365, Office 365 prompts you to **Set up your online services**:

    - **Set up my online services for me**: Sets up a domain with it's own DNS record in Office 365.
    - Option 2: **I'll manage my own DNS records**: Provides a list of DNS records which need to be changed on your DNS host to utilize Office 365 services.

    **Warning:** Do not change your DNS records until you are ready to start using your Office 365 services.

### Next step

After you have added your domain in Office 365, you are ready to [create Office 365 users](/how-to/add-an-office-365-license/#assign-an-office-365-license/).
