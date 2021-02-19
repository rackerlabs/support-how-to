---
permalink: edit-dns-in-the-cloud-office-control-panel/
audit_date: '2021-02-03'
title: Edit DNS in the Cloud Office Control Panel
type: article
created_date: '2017-09-18'
created_by: William Loy
last_modified_date: '2021-02-03'
last_modified_by: Carlos Arriaga
product: Rackspace Email
product_url: rackspace-email    
---

This article explains how to edit your domain's DNS settings in the Cloud Office Control Panel.

### Prerequisites

- **Applies to:** Administrator
- **Difficulty:** Moderate
- **Time needed:** Approximately 24-48 hours for DNS record changes to propagate
- **Tools required:**  Cloud Office Control Panel access, DNS hosting at Rackspace Cloud Office

If you are not sure who is hosting your domain's DNS, see [Find your DNS host](/support/how-to/find-dns-host).

To edit DNS records in Cloud Office, log in to the [Cloud Office Control Panel](https://cp.rackspace.com), and perform the following steps:

1.  Select **Domains**.

2.  In the **Manage** section, click **DNS Settings**.

3. Click **DNS Records** under the **Advanced Settings** column next to the domain you want to edit.

4. Edit your DNS records to match the following example. This is the initial DNS record set up to start receiving email at Rackspace Cloud Office.

    {{<image src="rackspace_dns_setup.png" alt="" title="">}}

    **Warning:** Changes to your DNS impact other services that are tied to your domain, such as website hosting, and cause service disruption
    if not performed properly.

5. After you complete your edits, click **Save**.

If another provider hosts your DNS, see [Set up DNS records for Cloud Office email](/support/how-to/set-up-dns-records-for-cloud-office-email).

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 

