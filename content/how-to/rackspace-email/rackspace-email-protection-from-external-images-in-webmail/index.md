---
permalink: rackspace-email-protection-from-external-images-in-webmail
audit_date: '2021-03-26'
title: Protection from external images in Webmail
type: article
created_date: '2015-10-19'
created_by: Beau Bailey
last_modified_date: '2021-03-26'
last_modified_by: Rose Morales
product: Rackspace Email
product_url: rackspace-email
---

Emails can contain links hosted on a separate server from the sender.
To display these images the email client sends a request to the image server
that includes your IP address, browser version, and any cookies that
the image server has set. The server can use this information to
track your online behavior.

To protect yourself from this common practice, you can control external
image tracking by using Webmail. Images are not displayed by default when you read
an email that links to images hosted on a separate server from your email.
Instead, a caution bar is displayed at the top of the email (as shown in the
following screenshot), and you can click that bar to display the images.

{{<image src="ImageProtection-1_0.jpg" alt="" title="">}}

If you understand the risks and prefer to have images always loaded by default,
you can disable image blocking within the Webmail settings.

1. Open the **Settings** dialog box.
2. Click **General Settings**.
3. Select the **Email Options** tab.
4. Clear the **Block external images** check box.
5. Click **Save**.

{{<image src="ImageProtectionWebmail.png" alt="" title="">}}

You can enable external image blocking at any time.
