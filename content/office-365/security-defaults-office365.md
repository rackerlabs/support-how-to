---
permalink: security-defaults-office365/
audit_date:
title: How to enable Azure Active Directory Security Defaults in Office 365
type: article
created_date: '2020-04-09'
created_by: Walter Stubbs
last_modified_date: '2020-04-09'
last_modified_by: Walter Stubbs
product: Office 365
product_url: office-365
---

### Prerequisites

- **Applies to:** Administrator
- **Difficulty:** Moderate
- **Time Needed:** Approximately 30 minutes
- **Tools Needed:** Office 365 Global Administrator access

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology).

Administrators looking for a simple solution to quickly secure their Office 365 tenant have the option of turning on Security Defaults for their organization. Security Defaults makes the following changes to your organization's tenant:

-  Unifies the Multi-Factor Authentication (MFA) Registration experience for all users.
-  Enforces Multi-Factor Authentication for users and administrators.
-  Blocks legacy authentication methods (such as IMAP, SMTP, and POP3).
-  Blocks requests made my clients that do not use modern authentication (such as Office 2010).
-  Requires additional authentication when accessing highly privileged areas such as the Office 365 Admin Center and Azure Portal.
-  Requires using the Microsoft Authenticator app for MFA.

This article lists the steps to enable Azure Active Directory Security Defaults.

**Warning:** Security Defaults only supports MFA using the Microsoft Authenticator app and only using the notification method. If any users in your organization do not have a mobile device or are unable to use the Microsoft Authenticator app, do not enable this feature.

### Enable Security Defaults

1.	Login to your [Office 365 Control Panel](https://office365.cp.rackspace.com).

2.	From the left menu, select **Office 365 Admin Center**.

3.	From the left menu, select **Azure Active Directory** under **Admin centers**.

**Note:** If you do not see the **Admin centers** section, you may need to select **Show all...**.

4.	Select **Azure Active Directory** from the left menu, then **Properties**.

5.	Select **Yes**, then **Save**.

### Additional resources

To learn more about Security Defaults see ["What are security defaults?"](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/concept-fundamentals-security-defaults).

To learn more about setting up multi-factor authentication with a mobile device, see [Set up two-factor sign-in on your phone](https://support.office.com/en-us/article/set-up-multi-factor-authentication-in-microsoft-365-business-a32541df-079c-420d-9395-9d59354f7225).
