---
permalink: sitecore-overview/
audit_date:
title: Sitecore Overviewq
type: article
created_date: '2017-04-04'
created_by: Juan Garza
last_modified_date: '2017-04-04'
last_modified_by: Nate Archer
product: Managed Operations
product_url: managed-operations
---

Customers using Managed Environments for Sitecore are given a fully customizable dedicated environment designed by experts at Rackspace, allowing you to focus on producing the best web content for your application or website

While Rackspace manages your Sitecore environment, the following processes and concepts give customers greater control and direction over their Sitecore environment.

### Sitecore and Azure

Sitecore runs on Windows .NET webservers, hosted on Azure webapps. Therefore, all Rackspace Sitecore environments use Azure credentials to make changes to a Sitecore environment. Through the Azure portal, you can:

- Get the URL to your content management website (Example:  **http://gsdk-cm.azurewebsites.net/**)
- Reset deployment credentials
- Restart their website or application
- Access logs

If you want to make changes to your Sitecore environment, log in to the [Azure portal](https://portal.azure.com/) using the credentials sent to you by Rackspace on a support ticket. This ticket is accessible through the [MyRackspace portal](https://my.rackspace.com/portal/).

**Note:** You can not delete your application or website through the Azure portal. To delete your application, contact [Rackspace Support](https://www.rackspace.com/en-us/information/contactus).

### Log in to Sitecore

In order to login into Sitecore, you need the URL for your content management website.

1. Enter the URL of your content management website to verify the site loads. The URL should look similar to **http://gsdk-cm.azurewebsites.net/**. You can find the URL by logging in to the Azure portal.

2. Add `/sitecore/login` to the URL to open the Sitecore login page. The URL should look similar to **https://gsdk-cm.azurewebsites.net/sitecore/login**.

3. Enter your Sitecore credentials then click **Log in**. These credentials are accessible in a ticket through in the [MyRackspace portal](https://my.rackspace.com/portal/).
