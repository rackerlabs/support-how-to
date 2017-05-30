---
permalink: clear-your-sitecore-cache/
audit_date:
title: Clear your Sitecore cache
type: article
created_date: '2017-09-02'
created_by: Juan Garza
last_modified_date: '2017-05-31'
last_modified_by: Nate Archer
product: Managed Operations
product_url: managed-operations
---

Sitecore administrators can view Sitecore's cache administration page using the URL **http://{sitecoreurl}/sitecore/admin/cache.aspx**. You can make sure your Sitecore site performs well by clearing your cache.

However, Sitecore caches templates in administration pages are blocked for security purposes. Therefore, clearing your Sitecore caches in the Sitecore Dashboard requires customization and is not recommended.

Sitecore recommends clearing your cache by restarting your Sitecore sites respective Webapp in the Azure portal. This creates a fresh cache for your website's content.

### Prerequisite

- Your login credentials for the Azure portal. For information about how to log in to the Azure portal, see [Sitecore Cloud portals and account management](/how-to/sitecore-cloud-portals-and-account-management/).

### Restart your Azure Webapp

1. Log in to the [Azure portal](https://portal.azure.com/).

2. Browse to your Sitecore sites respective Webapp.

3. In the Overview section click **Restart**. You are prompted if you wish the restart your Webapp. Select **Yes**.
