---
permalink: sitecore-overview/
audit_date:
title: Sitecore Cloud portals and account management
type: article
created_date: '2017-04-04'
created_by: Juan Garza
last_modified_date: '2017-04-12'
last_modified_by: Nate Archer
product: Managed Operations
product_url: managed-operations
---

Customers using Managed Environments for Sitecore Cloud are given a fully customizable dedicated environment designed by experts at Rackspace, allowing you to focus on producing the best web content for your application or website

While Rackspace manages your Sitecore environment, access to three portals give you greater control and direction over your Sitecore environment and website.

- [MyRackspace portal](https://my.rackspace.com/portal/): Manages your account and billing information with Rackspace.

- [Azure portal](https://portal.azure.com/): Manages your Sitecore environment.

- **Sitecore Cloud portal**: Manages the content of your Sitecore application or website.

### Log in credentials

The MyRackspace provides the log in credentials for both the Azure and Sitecore portals. While these credentials are typically sent through a link in the Welcome email received after you signed up, you can also find the credentials inside a support ticker in the MyRackspace portal. To find this ticket:

1. Log in to the [MyRackspace portal](https://my.rackspace.com/portal/).
2. Click **Support** in the top navigation bar and select **Create or View a Ticket** in the pop-up window.
3. Click on your Account in the top navigation bar, and in the drop-down menu, select **Support Tickets**.

4. You will see a list displaying your currently open tickets, and a tab with the option to view your closed tickets. Each ticket entry displays the name, the date it was last updated, the ticket status, and ticket ID number. Azure and Sitecore portal credentials are found in the very first ticket opened on the account.

### Azure portal

Sitecore runs on Windows .NET services, hosted on Azure webapps. Therefore, all Rackspace Sitecore environments use Azure credentials to make changes to a Sitecore environment. Through the Azure portal, you can:

- Get the URL to your Sitecore content management website (Example:  **http://gsdk-cm.azurewebsites.net/**). This URL is needed to log in to Sitecore.
- Reset deployment credentials
- Restart their website or application
- Access logs

Log in to the [Azure portal](https://portal.azure.com/) using the credentials sent to you by Rackspace on a support ticket. This ticket is accessible through the [MyRackspace portal](https://my.rackspace.com/portal/).

**Note:** You can not delete your application or website through the Azure portal. To delete your application, contact [Rackspace Support](https://www.rackspace.com/en-us/information/contactus).

#### Find the URL for content management site

The Azure portal contains the URL for the content management site. This URL is used to log in to the Sitecore portal. To find the URL:

1. Log in to the [Azure portal](https://portal.azure.com/) using the credentials sent to you by Rackspace.

2. Select **Resource Groups**. A list of resource groups appears. Select the resource group containing the Sitecore application you wish to access.

3. In the device list select the device named similary to `appname-cm`. The device type should be **App Service**.

4. On the app service overview screen, you can find the content management website url under *URL*.

### Sitecore portal

The Sitecore portal manages the content of your website or application. It does manage your environment, which is managed through the Azure portal.

1. Enter the URL of your content management website to verify the site loads. The URL should look similar to **http://gsdk-cm.azurewebsites.net/**. You can find the URL by logging in to the Azure portal.

2. Add `/sitecore/login` to the URL to open the Sitecore login page. The URL should look similar to **https://gsdk-cm.azurewebsites.net/sitecore/login**.

3. Enter your Sitecore credentials (which can be found in a ticket in MyRackspace portal) and click **Log in**.
