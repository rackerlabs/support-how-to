---
permalink: configure-email-encryption-o365
audit_date: '2020-04-13'
title: How to enable email encryption in Office 365
type: article
created_date: '2020-04-13'
created_by: Jon Muckenfuss
last_modified_date: '2020-04-13'
last_modified_by: William Loy
product: Office 365
product_url: office-365
---

### Prerequisites

- **Applies to:** Administrator
- **Difficulty:** Moderate
- **Time Needed:** Approximately 30 minutes
- **Tools Needed:** Office 365&reg; Global Administrator access, Azure&reg; Information Protection Plan 1 or 2

For more information about prerequisite terminology, see [Cloud Office support terminology](/support/how-to/cloud-office-support-terminology).

This article lists the steps to enable Office Message Encryption (OME) through the use of an Exchange Transport Rule. Administrators can set conditions that automatically encrypt emails.

**Note:** All users must have Azure Information Protection Plan 1 or 2 licenses for encryption to work.

### Create the encryption transport rule

1.	Log in to your [Office 365 Control Panel](https://manage365.rackspace.com).

2.	From the left menu, select **Office 365 Admin Center**.

3.	From the left menu, select **Exchange** under **Admin centers**.

4.	Select **mail flow** from the left menu, then select **rules** from the top menu.

5.	Select **+** and then **Create a new rule...**. A pop-up window displays.

6.  In the pop-up window, name your rule by using the **Name:** field.

7.  Select **More options...** at the bottom of the page.

8.  Under **Apply this rule if...** select the conditions that must be met to apply encryption to an email message.

    **Note:** This option is customizable based on how you want to send out encrypted email. The following is a list of recommended conditions:

    -	To encrypt all messages, use **The Sender is… “Internal”**.
    -	Encrypt messages sent to specific domains by using the  **“The Recipient Address Includes…”** condition and adding those domains.
    -	Encrypt messages with a keyword by using the **“The Subject or Body Includes…”** condition and then select the words which you would like to encrypt a message automatically.

9.  Under **Do the following...** choose **Modify the message security...**, and then **Apply Office 365 Message Encryption and rights protection**.

10.  Select **Encrypt** from the **RMS template** options, and then click **OK**.

11.  Select **Save**.

Messages that meet the specified criteria now have OME applied to them when you send them.

### Additional resources

To learn more about OME, see [Office 365 Message Encryption](https://docs.microsoft.com/en-us/microsoft-365/compliance/ome?view=o365-worldwide).

To learn more about applying OME by using Exchange transport rules, see [Define mail flow rules to encrypt email messages in Office 365](https://docs.microsoft.com/en-us/microsoft-365/compliance/define-mail-flow-rules-to-encrypt-email?view=o365-worldwide).
