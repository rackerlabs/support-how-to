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

- **Applies to:** Office 365 Administrator
- **Difficulty:** Easy
- **Time Needed:** 10 minutes
- **Tools required:** Office 365 tenant Administrator access

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

#### Add a subscription
After you create an Office 365 tenant, choose an Office 365 subscription. To compare Office 365 subscriptions offered by Rackspace, see Office 365 - Pick your plan.

1.	In the [Manage Office 365 at Rackspace Control Panel](https://www.rackspace.com/office-365/pick-your-plan), click on **Products** -> **Product Catalog** on the left sidebar.
2.	Select a plan and click **Add Product**. You can learn more about each license by clicking on the arrow next to the details. To compare Office 365 subscriptions offered by Rackspace, see [Office 365 - Pick your plan](https://www.rackspace.com/office-365/pick-your-plan).
3.	Enter the number of licenses that you need and review the charges.
4.	Click **Add Product**.

#### Add a domain in Office 365
The default domain in Office 365® is **{tenantName}.onmicrosoft.com**. Until you add your own domain to Office 365, any new users that you create contain the default domain name.

### Add a domain in Office 365
1.	Log in to your [Office 365 Control Panel](https://manage365.rackspace.com/).
2.	From the left menu, select **Office 365 Admin Center**.
3.	From the left menu, select **Settings**, and then select **Domains**.
4.	In the **Domains** section, click **Add Domain**.
5.	Enter the domain name when prompted, and then click **Next**.

#### Verify that you own the domain
This step requires you to log in to your domain’s DNS host portal. If you do not know what your DNS host is, see [Find your DNS host](https://docs.rackspace.com/support/how-to/find-dns-host/).
1.	Select the **Add a TXT record instead** option, and then select **Next**.
2.	Copy the TXT record information provided on the **Verify domain** page.
3.	Log in to your domain’s DNS host portal.
4.	Add the TXT record by using the information provided on the **Verify domain** page.
5.	Save this change at your DNS host.
6.	After the TXT record fully propagates, select **Verify**.

After Office 365 verifies your domain and you are ready to use your services, you need to finalize your setup by configuring the DNS entries for your Office 365 services.


### Configuring DNS records for your Office 365 services
Use the following steps to configure the DNS records for your Office 365 services:
1.	Log in to your [Office 365 Control Panel](https://manage365.rackspace.com/).
2.	From the left menu, select **Office 365 Admin Center**.
3.	From the left menu, select **Settings**, and then select **Domains**.
4.	In the **Domains** section, select the domain you want to configure services for.
5.	From the domain setup wizard, select **Continue Setup** from the top menu.
6.	On the **Set up your online services** screen, select **I’ll manage my own DNS records** and click **Next**.
7.	When prompted, select the online services you want to configure. The selection is based on the current licenses that are assigned to your users.
8.	After selecting your online services, click **Next**.
This step requires you to log in to your domain’s DNS host portal.

9.	Log in to your DNS host and copy the records from the table provided into your DNS host.
10.	After all records are entered into your DNS host, select **Verify**.

**Note:** It might take up to 24-48 hours for the DNS records to fully propagate from your DNS host and for Office 365 to verify them.

### Add an Office 365 license
1.	Log in to your [Office 365 Control Panel](https://manage365.rackspace.com/).
2.	From the left menu, select **Products**, and then select **Business Catalog**.
3.	Select Exchange Online Plan 1 and click **Add Product**. 
4.	Enter the number of licenses that you need and review the charges.
5.	Click **Add Product**.

### Assign a license to a user
1.	Log in to your [Office 365 Control Panel](https://manage365.rackspace.com/).
2.	From the left menu, select **Users**.
3.	Find the user you want to assign the license to and select **Manage**.
4.	Select the license you’d like to apply to the user.
5.	Click **Save** at the bottom of the page to finish the process.

#### Do my users have to create new profiles for their desktop mail clients and mobile devices?
Yes, all users must create new profiles. We’ve created an online mail client setup tool that walks users through configuring their email for use on all of the most popular desktop and mobile platforms: https://emailhelp.rackspace.com/

#### Does Rackspace update the customer’s DNS records?
No. Admins are responsible for updating their domain’s DNS records. Rackspace does not have access to your externally hosted DNS and cannot accept access to external DNS hosting accounts.
