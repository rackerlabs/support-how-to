---
permalink: set-up-office-365/
audit_date:
title: Set up Office 365
type: article
created_date: '2017-07-05'
created_by: Nate Archer
last_modified_date: '2017-07-05'
last_modified_by: Nate Archer
product: Office 365
product_url: office-365
---

This article helps you set up Office 365 for the first time if you're an existing Cloud Office customer.

### Prerequisites

- **Applies to:** Office 365 Administrator
- **Difficulty:** Easy
- **Time needed:** 10 minutes
- **Tools required:**  Office 365 tenant Administrator access

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology/).


### Create a tenant ID

**Note:** The tenant ID you create is permanent. If you wish to remove a tenant ID from your Office 365 account, contact Microsoft Support. This will allow you to create a new tenant ID for your account.

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com/) using your Rackspace Cloud Office admin ID and password.
2. In the Cloud Office section, select **Manage Office 365**.
3. Enter a tenant name. A tenant is a unique name for your organization within the Office 365 Portal. Your tenant name forms your Office 365 User ID.  A tenant is not a domain.

    - Use only letters and numbers for your tenant name.
    - If your tenant ID is valid and available, a green checkbox appears next to the name field.

4. Fill out the the following fields. All fields are required.

   - **User name**: Enter a unique user name.
   - **Password**: Enter a unique password. This password is temporary The Office 365 portal will prompt you to create a new password when you first visit the site.
   - **Company information**: Enter the information for your company.

5. Click **Create Tenant**.

   The tenant name, user name, and password you enter in Cloud Office form your Office 365 User ID. Your Sharepoint (**{tenantname}.sharepoint.com**) and OneDrive (**{my-tenantname}.sharepoint.com**) URL's use the tenant ID for the life of your account.

### Add a subscription

After you have created an Office 365 tenant ID, chose an Office 365 subscription. To compare Office 365 subscriptions offered by Rackspace, see [Office 365 - Pick your plan](https://www.rackspace.com/office-365/pick-your-plan).

1. In the [Cloud Portal Office 365 manager](https://cp.rackspace.com/Office365#/Manage), click **Add Subscription**.
2. Select a plan. To compare Office 365 subscriptions offered by Rackspace, see [Office 365 - Pick your plan](https://www.rackspace.com/office-365/pick-your-plan).
3. Enter the number of licenses you need.
4. Click **Add Subscription**.

Pending subscriptions display yellow in the subscription list. Active subscriptions display green.

#### Add-on plans

Add-ons become available after you add a subscription. Add-ons appear below your subscription list.

Click an add-on to see a description and confirm its addition to your service. Note that add-on pricing is per license.

*Email Archiving* is currently available as an add-on for all subscriptions. *Extra SharePoint Storage* will be available in December 2015 for plans with SharePoint.

### Manage your subscription

Click the gear icon for your subscription to manage its features.

To change the number of licenses for your subscription, click **Edit License Quantity...** to select a different number, then click **Save**.

To delete your subscription, click **Suspend/Delete** and click **Suspend Subscription** to confirm.

**Note**: Suspended subscriptions retain your data for 60 days before being permanently deleted. You will not be billed while a subscription is suspended.

### Log in to the Office 365 portal

1. In the [Cloud Portal Office 365 manager](https://cp.rackspace.com/Office365#/Manage), click **Log in to Office 365 Control Panel**.

2. Enter the tenant ID and password you created in Cloud Office.

When you first log in, the Office 365 Portal requires you to enter and confirm a new password. After you have confirmed the password, the only User that can log in to your Office 365 account will be **admin@{tenantname}.onmicrosoft.com**, until new Users are created.
