---
permalink: add-a-domain-in-office-365/
audit_date:
title: Add a domain in Office 365
type: article
created_date: '2017-06-29'
created_by: William Loy
last_modified_date: '2017-06-29'
last_modified_by: William Loy
product: Office 365
product_url: office-365
---
Add a domain in Office 365 at Rackspace Cloud Office.

### Prerequisites

- **Applies to:** Office 365 Administrator
- **Difficulty:** Easy
- **Time needed:** 24-48 hours for domain to be verified
- **Tools required:**  Office 365 tenant Administrator access

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology/).


### Add a domain in Office 365

Once you have [created your Office 365 tenant with Rackspace](/how-to/office-365/#create-your-tenant-id/), and [added your product licenses](/how-to/add-an-office-365-license/) you will need, you are ready to set up your domain in the Office 365 portal.


1. Log in with you Office 365 Administrator credentials at portal.office.com.

2. Select the **Admin** tile once logged in.

3. Within the **Domains** section Click **Add Domain**.

4. On the next page enter the domain name that you would like to add.

5. Verify you own the domain. This step will require to log into your domain's DNS host portal. Not sure who your DNS host is? Read [Find your DNS host](/how-to/find-your-dns-host/).

    - Copy the TXT record information provided in the Office 365 portal

    - Log into your domain's DNS host portal

    - Add the TXT record provided in the Office 365 portal

    picture

    - Save this change at your DNS host.

    Note: The TXT record could take 24-48 hours to be verifiable at Office 365.

6. When your domain has been successfully verified by Office 365, you will be prompted to **Set up your online services**

    - Option 1 **Set up my online services for me.**
    - Option 2 **I'll manage  my own DNS records.**

7. If you elect to manage your own DNS records, Office 365 will provide a list of DNS records that will need to be change to utilize Office 365 service.

    Warning: Do not change your DNS records until you are ready to start using your Office 365 services.



Once you have added your domain in Office 365 you are ready to [start creating users]().
