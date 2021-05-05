---
permalink: add-domains-with-the-cloud-office-control-panel
audit_date: '2020-06-01'
title: Add domains with the Cloud Office Control Panel
type: article
created_date: '2014-04-10'
created_by: William Loy
last_modified_date: '2020-06-01'
last_modified_by: William Loy
product: Rackspace Email
product_url: rackspace-email
---

This article explains how to add a domain in your Cloud Office Control Panel.

### Prerequisites

- **Applies to:** Administrator
- **Difficulty:** Easy
- **Time needed:** About 15 minutes
- **Tools required:**  Cloud Office Control Panel access


### Add domains in the Cloud Office Control Panel

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com).

2. From the **Go to section** menu, select **Domains**.

3. In the **Manage** section, click **Domains**.

4. Click **Add Domain**.

5. Enter the domain name in the **Domain Name** field, and then select one of the following options and complete their respective steps:

#### I own this domain

Continue to use your current domain registrar and DNS hosting company by pointing your [MX records](/support/how-to/dns-record-definitions) to Rackspace servers.

1. Select the services you would like to include on the domain, and then click **Save**.

2. [Create mailboxes](/support/how-to/add-rackspace-email-mailboxes).

3. [Set up DNS records for Cloud Office email](/support/how-to/set-up-dns-records-for-cloud-office-email) to start receiving email at Rackspace.

#### I own this domain and want Rackspace to host my DNS

Continue to use your current domain registrar, but have Rackspace to host your [DNS](/support/how-to/set-up-dns-records-for-cloud-office-email).  

1. Select the services you would like to include on the domain, and then click **Save**.

2. [Create mailboxes](/support/how-to/add-rackspace-email-mailboxes).

3. [Set up DNS records for Cloud Office email](/support/how-to/set-up-dns-records-for-cloud-office-email). In order for these records to become active, you must first contact your domain's current registrar and request that the Name Server records be switched over to Rackspace's Name Servers.

4. [Configure your DNS records](/support/how-to/set-up-dns-records-for-cloud-office-email) in the Cloud Office Control Panel **BEFORE** you change the Name Server records to avoid any interruption of service. Update the following Name Server records at your registrar to the following records:

       Primary:   DNS1.NAME-SERVICES.COM
       Secondary: DNS2.NAME-SERVICES.COM
       Secondary: DNS3.NAME-SERVICES.COM
       Secondary: DNS4.NAME-SERVICES.COM
       Secondary: DNS5.NAME-SERVICES.COM

#### I want to register this domain

Rackspace charges an annual renewal fee to register this domain and hosts your DNS records. Domain registration prices vary depending on the domain.

1. Select the services you would like to include on the domain, and then click **Save**.

2. Confirm your purchase by clicking **Register Domain**.

3. A verification email confirming your domain purchase is sent to the email address on record. You must click the verification link in the email within 15 days to avoid any disruption to your domains. For more information, see [Additional information about Registrant Benefits and Responsibilities](https://www.rackspace.com/information/legal/RAAInfo).

4. [Create mailboxes](/support/how-to/add-rackspace-email-mailboxes).

5. [Set up DNS records for Cloud Office email](/support/how-to/set-up-dns-records-for-cloud-office-email) to start receiving email.

You have successfully added a domain to your Cloud Office account!
