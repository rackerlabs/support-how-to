---
permalink: manage-multifactor-authentication-for-users-in-office-365/
audit_date: '2019-11-27'
title: Manage multifactor authentication for users in Office 365
type: article
created_date: '2019-11-27'
created_by: Walter Stubbs
last_modified_date: '2019-11-29'
last_modified_by: William Loy
product: Office 365
product_url: office-365
---

This article describes how administrators can manage multifactor authentication for Office 365&reg; users.

### Prerequisites

- **Applies to:** Administrator
- **Difficulty:** Easy
- **Time Needed:** Approximately 15 minutes
- **Tools Needed:** Administrators need access to the Office 365 Control Panel

For more information about prerequisite terminology, see [Cloud Office support terminology](/support/how-to/cloud-office-support-terminology).

Requiring multifactor authentication for all users safeguards access to your organization's data and applications. Multifactor authentication requires users to provide a second form of authentication when accessing their account. This second form of authentication is an additional layer of security and minimizes the chances of account compromise.

### Enable multifactor authentication for a user

Use the following steps to enable multifactor authentication for a user:

1.	Log in to your [Office 365 Control Panel](https://office365.cp.rackspace.com).

2.	From the left menu, select **Office 365 Admin Center**.

3.	From the top menu, select **Multifactor authentication**. 

4.	Select the check box next to the user you need to enable multifactor authentication for.

5.	Under quick steps, select **Enable**.

6.	When you are prompted, select **enable multifactor auth**.

7.	The selected user is now able to configure multifactor authentication for their account.

#### Require a user to use multifactor authentication

To require a user to use multifactor authentication, you must enforce multifactor authentication for their account.

Use the following steps to enforce multifactor authentication for a user:

1.	Log in to your [Office 365 Control Panel](https://office365.cp.rackspace.com).

2.	From the left menu, select **Office 365 Admin Center**.

3.	From the top menu, select **Multifactor authentication**.

4.	Select the check box next to the user you need to enforce multifactor authentication for.

5.	Under quick steps, select **Enforce**.

6.	When you are prompted, select **enforce multifactor auth**, then **close**.

7.	The selected user is now required to configure and use multifactor authentication for their account.

### Reset existing multifactor authentication configuration for a user

Your user may lose access to the device that they used to register with multifactor authentication. When this occurs, you need to reset their multifactor settings so that they can re-register.

Use the following steps to reset the existing multifactor authentication configuration for a user:

1.	Log in to your [Office 365 Control Panel](https://office365.cp.rackspace.com).

2.	From the left menu, select **Office 365 Admin Center**.

3.	From the top menu, select **Multifactor authentication**.

4.	Select the check box next to the user you need to enforce multifactor authentication for.

5.	Under quick steps, select **Manage user settings**.

6.	Select the check box next to **Require selected users to provide contact methods again**.

7.	Select **save** then **close**.

8.	The selected user can now log in to their Office 365 account and re-register with multifactor authentication.

### Disable multifactor authentication for a user

Use the following steps to disable multifactor authentication for a user:

1.	Log in to your [Office 365 Control Panel](https://office365.cp.rackspace.com).

2.	From the left menu, select **Office 365 Admin Center**.

3.	From the top menu, select **Multifactor authentication**. 

4.	Select the check box next to the user you need to disable multifactor authentication for.

5.	Under quick steps, select **Disable**.

6.	When you are prompted, select **yes**, then **close**.

7.	The selected user is now no longer be able to use multifactor authentication with their account.

### Additional information

Microsoft&reg; also provides a guide for deploying multifactor authentication for your Office 365 tenant. See [Planning a cloud-based Azure Multi-Factor Authentication deployment](https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-getstarted).

Administrators can configure organization-wide multifactor authentication requirements by creating a Conditional Access policy in their Azure&reg; Active Directory&reg; from the [Azure Portal](https://portal.azure.com). See [Conditional Access: Require MFA for all users](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/howto-conditional-access-policy-all-users-mfa) for instructions.
