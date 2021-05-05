---
permalink: security-defaults-office365
audit_date: '2020-04-13'
title: How to enable Azure Active Directory security defaults in Office 365
type: article
created_date: '2020-04-09'
created_by: Walter Stubbs
last_modified_date: '2020-04-13'
last_modified_by: William Loy
product: Office 365
product_url: office-365
---

### Prerequisites

- **Applies to:** Administrator
- **Difficulty:** Moderate
- **Time Needed:** Approximately 30 minutes
- **Tools Needed:** Office 365&reg; Global Administrator access

For more information about prerequisite terminology, see [Cloud Office support terminology](/support/how-to/cloud-office-support-terminology).

Administrators looking for a simple solution to secure their Office 365 tenant have the option of turning on security defaults for their organization. Security defaults make the following changes to your organization's tenant:

-  Unifies the Multi-Factor Authentication (MFA) registration experience for all users.
-  Enforces MFA for users and administrators.
-  Blocks legacy authentication methods such as Internet Message Access Protocol (IMAP), Simple Mail Transfer Protocol (SMTP), and Post Office Protocol (POP3).
-  Blocks requests made by clients that don't use modern authentication.
-  Requires extra authentication when accessing highly privileged areas such as the Office 365 Admin Center and Azure&reg; Portal.
-  Requires the Microsoft&reg; Authenticator app for MFA.

This article lists the steps to enable Azure Active Directory&reg; security defaults.

**Warning:** Security defaults only support MFA by using the Microsoft Authenticator app with the notification method. If any users in your organization don't have a mobile device or are unable to use the Microsoft Authenticator app, don't enable this feature.

### Enable security defaults

1.	Log in to your [Office 365 Control Panel](https://office365.cp.rackspace.com).

2.	From the left menu, select **Office 365 Admin Center**.

3.	From the left menu, select **Azure Active Directory** under **Admin centers**.

    **Note:** If you don't see the **Admin centers** section, you might need to select **Show all...**.

4.	Select **Azure Active Directory** from the left menu, then **Properties**.

5.	Select **Yes**, and then **Save**.

### Additional resources

To learn more about security defaults, see ["What are security defaults?"](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/concept-fundamentals-security-defaults).

To learn more about setting up MFA with a mobile device, see [Set up two-factor sign-in on your phone](https://support.office.com/en-us/article/set-up-multi-factor-authentication-in-microsoft-365-business-a32541df-079c-420d-9395-9d59354f7225).
