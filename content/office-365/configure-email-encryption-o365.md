---
permalink: configure-email-encryption-o365/
audit_date:
title: How to enable Email Encryption in Office 365
type: article
created_date: '2020-04-09'
created_by: Jon Muckenfuss
last_modified_date: '2020-04-09'
last_modified_by: Walter Stubbs
product: Office 365
product_url: office-365
---

### Prerequisites

- **Applies to:** Administrator
- **Difficulty:** Moderate
- **Time Needed:** Approximately 30 minutes
- **Tools Needed:** Office 365 Global Administrator access, Azure Information Protection Plan 1 or 2

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology).

This article lists the steps to enable Office Message Encryption (OME) through use of an Exchange Transport Rule. Administrators can choose which conditions need to be met for email messages to be encrypted automatically by Exchange using a transport rule.

**Note:** All users must be licensed with Azure Information Protection Plan 1 or 2 for encryption to work.

### Create the Encryption Transport Rule

1.	Login to your [Office 365 Control Panel](https://office365.cp.rackspace.com).

2.	From the left menu, select **Office 365 Admin Center**.

3.	From the left menu, select **Exchange** under **Admin centers**.

4.	Select **mail flow** from the left menu, then select **rules** from the top menu.

5.	Select **+** then **Create a new rule...**. A pop-up window will appear.

6.  In the pop-up window, name your rule using the **Name:** field.

7.  Select **More options...** at the bottom of the page.

8.  Under **Apply this rule if...** select which conditions must be met to apply encryption to an email message.

**Note:** This option is customizable based on how you want to send out encrypted email. The following are a few conditions that we believe might be helpful:

a.	To encrypt all messages, use **The Sender is… “Internal”**
b.	To encrypt messages only to specific domains, use **“The Recipient Address Includes…”** and input domains that you would like to have messages encrypted when sending to.
c.	To encrypt messages with a key word, use **“The Subject or Body Includes…”** then select words such as Encrypt or Secure. When messages are sent with these keywords they will automatically be encrypted.

8.  Under **Do the following...** choose **Modify the message security...**, then **Apply Office 365 Message Encryption and rights protection**.

9.  Select **Encrypt** from the **RMS template** options, then **OK**.

10.  Select **Save**.

Your messages that meet your specified criteria will now have Office Message Encryption applied to them when sending.

### Additional resources

To learn more about Office Message Encryption see [Office 365 Message Encryption](https://docs.microsoft.com/en-us/microsoft-365/compliance/ome?view=o365-worldwide).

To learn more about applying Office Message Encryption using Exchange transport rules, see [Define mail flow rules to encrypt email messages in Office 365](https://docs.microsoft.com/en-us/microsoft-365/compliance/define-mail-flow-rules-to-encrypt-email?view=o365-worldwide).
