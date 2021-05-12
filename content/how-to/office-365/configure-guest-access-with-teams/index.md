---
permalink: configure-guest-access-with-teams
audit_date: '2020-03-18'
title: Configure Guest access in Microsoft Teams
type: article
created_date: '2020-03-18'
created_by: Simon Ponder
last_modified_date: '2020-03-18'
last_modified_by: William Loy
product: Office 365
product_url: office-365
---

Guest Access is disabled by default in Office 365&reg;. A global administrator must turn on Guest Access for teams before team owners can add guests. Users might see the message “Contact your administrator” when trying to add a guest to their team. This shows that the settings either aren't turned on or the settings are not yet in effect.

With Guest Access, organizations can offer access to teams to their partners while maintaining control over their data. All guests in teams are covered under the same compliance rules as the rest of Office 365 and can be securely managed with Azure Active Directory&reg;.

For more information about Office 365 subscriptions, see [Set Up Office 365](/support/how-to/set-up-office-365).

### Prerequisites

- **Applies to:** Administrators
- **Time needed:** Up to 24 hours for changes to take effect
- **Tools required:** Administrators need Office 365 Global Administrator access

For more information about prerequisite terminology, see [Cloud Office support terminology](/support/how-to/cloud-office-support-terminology).

### Turn on Guest Access in the Teams Admin Center

1.	Log in to your [Office 365 Control Panel](https://manage365.rackspace.com).

2.	From the left menu, select **Office 365 Admin Center**.

3.  From the left menu, select **Teams** under the Admin Center section.

4.  Select **Org-Wide settings**, then **Guest Access**

5.  Set **Allow Guest Access in Microsoft Teams** to **On**.

6.  Modify any other Calling, Meeting, or Message settings for your Guests.

**Note:** If you are using the default settings in Azure Active Directory, SharePoint Online&reg; and Office 365 Groups, you are done configuring access for external users. If you are not certain, check the remaining steps below.

### Configure Azure Active Directory for Guest Access

1.	Log in to your [Office 365 Control Panel](https://manage365.rackspace.com).

2.	From the left menu, select **Office 365 Admin Center**.

3.  From the left menu, select **Azure Active Directory**.

4.  From Azure Active Directory, select **Users**, then **User settings**.

5.  Select **Manage External collaboration settings** under the **External Users** section.

6.  Choose the policy for which you want to enable **External Collaboration** settings.

To learn more about the external collaboration settings in Azure Active Directory, see [Enable B2B external collaboration and manage who can invite guests](https://docs.microsoft.com/en-us/azure/active-directory/b2b/delegate-invitations).

### Configure Office 365 Group sharing settings to allow sharing outside of the organization

1. Log in to your [Office 365 Control Panel](https://manage365.rackspace.com).

2. From the left menu, select **Office 365 Admin Center**.

3. Select **Settings > Settings > Services**, and then **Office 365 Groups**.

4. Check the boxes, **Let group members outside the organization access group content**, and **Let Group Owners add people outside the organization to groups**.

   **Note:** If these settings are not checked, external users do not have access to group content and team owners are not be able to add new guests.

5. From the Office 365 Admin Center, select **Settings > Settings > Security and Privacy**, and then **Sharing**.

6. Select **Let users add new guests to this organization**. This permits users to add guests to the organization.

### Verify Sharing in SharePoint Online

1.	Log in to your [Office 365 Control Panel](https://manage365.rackspace.com).

2.	From the left menu, select **Office 365 Admin Center**.

3.  Select **SharePoint Admin Center** from the left menu.

4.  Select **Sites > Active Sites > Sharing**.

5.  Ensure that the option is set to **Anyone** or **New and Existing Guests**.

### View Guest Users in Teams

1.	Log in to your [Office 365 Control Panel](https://manage365.rackspace.com).

2.	From the left menu, select **Office 365 Admin Center**.

3.  From the left menu, select **Teams** under the Admin Center section.

4.  Select **Users**.

5.  All Teams users in the organization are displayed on this page. Guest users have "Guest" attached to their display name.

### Guest Experience in Microsoft Teams

After all of your configuration settings are in place and you have added an external user, your guest receives an email invite to join your teams channel.

After your Guest accepts the invite, if the email belongs to an Azure Active Directory or Office 365 work or school account, they can accept it directly. If their email does not have a Microsoft Account associated with it, they are directed to create one for free.

### Additional resources

To learn more about managing guest access for Office 365 Groups, see [Manage guest access in Office 365 Groups](https://docs.microsoft.com/en-us/microsoft-365/admin/create-groups/manage-guest-access-in-groups?view=o365-worldwide).

To learn more about managing guest access in Microsoft Teams, see [Manage guest access in Microsoft Teams](https://docs.microsoft.com/en-us/microsoftteams/manage-guests).

To learn more about guest access in Microsoft Teams, see [Guest access in Microsoft Teams](https://docs.microsoft.com/en-us/microsoftteams/guest-access)
