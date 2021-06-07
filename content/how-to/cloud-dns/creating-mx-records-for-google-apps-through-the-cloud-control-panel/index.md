---
permalink: creating-mx-records-for-google-apps-through-the-cloud-control-panel
audit_date: '2021-06-04'
title: Create MX records for Google Apps through the Cloud Control Panel
type: article
created_date: '2012-09-19'
created_by: Lee Jelley
last_modified_date: '2021-06-04'
last_modified_by: Rose Morales
product: Cloud DNS
product_url: cloud-dns
---

This article shows you how to add [Google Apps](https://www.google.com/enterprise/apps/business/pricing.html)
MX records to a domain managed through the Cloud Control Panel.

**Important:** Be sure to verify your domain with Google Apps through their
administrative interface.

After verifying your domain, the next step is to add Google MX records
to the domain information in the Domain Name Service (DNS) section of the
[Cloud Control Panel](https://login.rackspace.com/).

Google Apps provides five MX records for you to add to the domain DNS settings. You
can find the latest MX record values on [the Google Apps website](https://support.google.com/a/bin/answer.py?hl=en&answer=174125).

### Add MX records to a domain

Use the following steps to add MX records to a domain:

1. Log in to the [Cloud Control Panel](https://login.rackspace.com/).

2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.

3. Select **Networking > Cloud DNS**.

4. Click the gear icon next to your domain and select **Add DNS Record**.

5. In the pop-up dialog box, select **MX Record** as the record type.

    {{<image src="addrecord.png" alt="" title="">}}

6. Enter the following information:

    - The hostname for your domain (optional)
    - Mail-server domain
    - Priority
    - Time to Live (TTL)

   You can find the five MX record mail-server domains, priority numbers, and
   recommended TTL on the [Google Apps website](https://support.google.com/a/answer/174125?hl=en).

   **Note**: Don't include a period at the end of the mail-server domain when you
   enter it. The system adds that for you behind the scenes if it's required.

7. Click **Add Record**.

After you add the first MX record, repeat the process for the other four MX
records.

### Check and test

Now that you stored the MX records in the DNS settings for your
domain, the changes should propagate after the time specified in the TTL has
passed. You can test your changes with a DNS checker.

Send an email through the Google Apps webmail interface to an email address you
can access on a different domain, and then reply to it. If the email to your domain
gets back to Google Apps, you know the DNS changes worked.
