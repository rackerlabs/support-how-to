---
permalink: enable-dkim-in-the-cloud-office-control-panel/
audit_date:
title: Enable DKIM in the Cloud Office Control Panel
type: article
created_date: '2017-04-28'
created_by: Ben Smith
last_modified_date: '2017-05-16'
last_modified_by: Nate Archer
product: Rackspace Email
product_url: rackspace-email
---

DKIM adds a secure signature to your domain to authenticate email sent from users in your company. DKIM is an industry best practice that increases the security of your email domains

### Limitations

DKIM is not available for domains on Hosted Exchange 2007. Please contact Rackspace Support team to determine the best upgrade path to a DKIM-supported product.

### Procedure

To enable DKIM for a domain, log in to the [Cloud Office Control Panel](https://cp.rackspace.com), and perform the following steps:

1. From the **Domains** section of the home page, click the link for **Sender Authentication (DKIM)**.  

   <img src="{% asset_path rackspace-email/enable-dkim-in-the-cloud-office-control-panel/domain-home-page.png %}"/>

2. On the **Sender Authentication (DKIM)** page, select the domain to enable DKIM from the domain list.  

    <img src="{% asset_path rackspace-email/enable-dkim-in-the-cloud-office-control-panel/dkim-domain-list.png %}"/>

3. Click the **Enable DKIM for <your domain>** button.  

    If your domain's DNS is managed through your Cloud Office Control Panel, then DKIM enabling is automatic.

4. If your domain's DNS is managed through another service, then you will be provided with the DNS key and value information for adding the new TXT record. Consult the help documentation of your DNS hosting provider for instructions on adding a new TXT record for your domain.  


5. After adding the DKIM TXT record, click the **Verify TXT Record** button to ensure the new DKIM record is publicly available in DNS and is correct.  

   If validation fails, then an appropriate error message will display to guide you in correcting the problem.  

   <img src="{% asset_path rackspace-email/enable-dkim-in-the-cloud-office-control-panel/domain-verify-fail.png %}"/>

   After DKIM is enabled, all new outgoing email messages are signed using your new DKIM key. You can repeat the DKIM enabling process on other supported domains.  
