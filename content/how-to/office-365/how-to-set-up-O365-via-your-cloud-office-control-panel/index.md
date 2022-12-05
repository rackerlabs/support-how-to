---
permalink: how-to-set-up-O365-via-your-cloud-office-control-panel
audit_date: '2022-12-02'
title: How to set up O365 via your Cloud Office Control Panel
type: article
created_date: '2022-12-02'
created_by: Nina Canutt
last_modified_date: '2022-12-02'
last_modified_by: Steven Salinas
product: Office 365
product_url: office-365
---

Get quick answers to common questions about setting up Rackspace Office 365.

### Prerequisites

- **Applies to:** Cloud Office Administrator
- **Difficulty:** Moderate
- **Time Needed:** 30-60 minutes
- **Tools required:** Cloud Office Control Panel & Office 365 Administrator access

The purpose of this document is to provide instruction on how to setup a brand new Office 365 environment through Rackspace.

For more information about prerequisite terminology, see
[Cloud Office support terminology](/support/how-to/cloud-office-support-terminology/).

### Create a tenant ID
The tenant ID that you create is permanent. If you have an existing tenant ID for your Office 365 account, open a support ticket so we can transfer it for you.

1.	Log in to the [Cloud Office Control Panel](https://cp.rackspace.com/) using your Rackspace Cloud Office admin ID and password.
2.	In the Microsoft Office 365 section, select **Manage Office 365**.
3.	Enter a tenant name using only letters and numbers.
A tenant is a unique name for your organization within the Office 365 portal. Your tenant name is your **account ID** on Microsoft’s systems.
If the tenant ID that you enter is valid and available, a green check box appears next to the name.
4.	Fill in the requested information. All fields are required.
5.	Click **Create Tenant**.

#### Log in to the Office 365 portal
1.	Log in to the [Manage Office 365 at Rackspace Control Panel](https://manage365.rackspace.com/) with the Global Administrator of your tenant.
2.	In this portal, you can manage users (add or edit users, reset passwords, and edit assigned licenses) and licenses (add, edit, and remove licenses). If you need to manage any other settings, such as the Exchange Admin Center or the Security and Compliance center, click on **Office 365 Admin Center** on the left sidebar to be logged in to the Office 365 Admin Center automatically.

When you first log in, the Office 365 portal requires you to enter and confirm a new password. After you confirm the password, the only user who can log in to your Office 365 account is **admin@{tenantName}.onmicrosoft.com**, until new users are created.

After you create an Office 365 tenant. Follow the below steps to complete setup.

#### Add a domain in Office 365
The default domain in Office 365® is **{tenantName}.onmicrosoft.com**. Until you add your own domain to Office 365, any new users that you create contain the default domain name.  To add a domain follow the steps below.

1.	Log in to your [Office 365 Control Panel](https://manage365.rackspace.com/).
2.	From the left menu, select a drop-down menu labeled “More”. 
3.	Select **Manage In Microsoft 365 Admin Center**.
4.	From the left menu, select **Show All** -> **Settings**, and then select **Domains**.
5.	In the Domains section, click **Add Domain**.
6.	Enter the domain name when prompted, and then click **Use this domain**.
7.	You will be taken to a page titled “Verify that you own the domain.”


#### Verify that you own the domain
This step requires you to log in to your domain’s DNS host portal. If you do not know what your DNS host is, see [Find your DNS host](https://docs.rackspace.com/support/how-to/find-dns-host/).

1.	Select the **Add a TXT record to the domains DNS record** option, and then select **Continue**.
2.	Copy the TXT record information provided on the **Verify domain** page.
3.	Log in to your domain’s DNS host portal.
4.	Add the TXT record by using the information provided on the **Verify domain** page.
5.	Save this change at your DNS host & allow 15-30 mins for your record to propagate.
6.	After the TXT record fully propagates, select **Verify in the Microsoft Admin Center**.

After Office 365 verifies your domain and you are ready to use your services, you need to finalize your setup by configuring the remaining DNS entries for your Office 365 services.


### Add an Office 365 license
1.	In the [Manage Office 365 at Rackspace Control Panel](https://manage365.rackspace.com/), click on **Product Catalog** -> **Select Microsoft365** on the left sidebar.
2.	Scroll down and Select **Exchange Online (Plan 1)** and click **Add Product**. 
3.	Enter the number of licenses to match mailbox quantity required and select “Monthly” commitment option.
4.	Click **Add Product**.
5.	It may take a moment for provisioning to complete.


### Add an Office 365 User
1.	Log in to your [Office 365 Control Panel](https://manage365.rackspace.com/).
2.	From the left menu, select **My Users**.
3.	Select Add User & complete new user form
4.	Now assign a license to the newly added user (steps below)


### Assign a license to a user
1.	Log in to your [Office 365 Control Panel](https://manage365.rackspace.com/).
2.	From the left menu, select **My Users**.
3.	Find the user you want to assign the license to and select **Manage**.
4.	Select the license you’d like to apply to the user.
5.	Click **Save** at the bottom of the page to finish the process.

#### Do my users have to create new profiles for their desktop mail clients and mobile devices?
Yes, all users must create new profiles. We’ve created an online mail client setup tool that walks users through configuring their email for use on all of the most popular desktop and mobile platforms: https://emailhelp.rackspace.com/

#### Does Rackspace update the customer’s DNS records?
No. Admins are responsible for updating their domain’s DNS records. Rackspace does not have access to your externally hosted DNS and cannot accept access to external DNS hosting accounts.


### Configuring DNS records for your Office 365 services
Use the following steps to configure the DNS records for your Office 365 services:
1.	Log in to your [Office 365 Control Panel](https://manage365.rackspace.com/).
2.	From the left menu, select a drop-down menu labeled “More”. 
3.	Select **Manage In Microsoft 365 Admin Center**.
4.	From the left menu, select **Show All** -> **Settings**, and then select **Domains**.
5.	In the Domain section select the Domain you want to configure services for.
6.	From the Domain setup wizard, select **Continue Setup** from the top menu.
7.	On the **Set up your online services** screen, select **I’ll manage my own DNS records** and click **Next**.
8.	When prompted, select the online services you want to configure. The selection is based on the current licenses that are assigned to your users.
9.	After selecting your online services, click **Next**.
This step requires you to log in to your domain’s DNS host portal.
10.	Log in to your DNS host and copy the records from the table provided into your DNS host. Save this change at your DNS host & allow 15-30 mins for your record to propagate.
11.	Once your new DNS records have propagated, go back to your Microsoft Admin Center & select **Verify**.

**Note:** In rare cases it can take up to 24-48 hours for the DNS records to fully propagate from your DNS host and for Office 365 to verify them.
