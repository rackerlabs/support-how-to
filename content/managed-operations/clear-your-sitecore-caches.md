---
permalink: clear-your-sitecore-caches/
audit_date:
title: Clear your Sitecore caches
type: article
created_date: '2017-05-31'
created_by: Juan Garza
last_modified_date: '2017-05-31'
last_modified_by: Nate Archer
product: Managed Operations
product_url: managed-operations
---

Sitecore administrators can view their Sitecore cache administration page using the URL **http://{sitecoreurl}/sitecore/admin/cache.aspx**. If you are [publishing new changes to your Sitecore site](/how-to/publish-content-to-sitecore/), you might want to manually clear your caches after publishing the changes. 

However, Sitecore cache administration pages are blocked for security purposes. Sitecore recommends clearing your caches by restarting your Sitecore site's respective Web app in the Azure portal. This creates a fresh cache for your website's content.

**Note:** Restarting your Web app can cause temporary downtime for your website.

### Prerequisite

- Your login credentials for the Azure portal. For information about how to log in to the Azure portal, see [Sitecore Cloud portals and account management](/how-to/sitecore-cloud-portals-and-account-management/).

### Restart your Azure Webapp

1. Log in to the [Azure portal](https://portal.azure.com/).

2. Browse to your Sitecore site's respective Webapp.

3. In the Overview section click **Restart**. You are prompted if you wish the restart your Webapp. Select **Yes**.


