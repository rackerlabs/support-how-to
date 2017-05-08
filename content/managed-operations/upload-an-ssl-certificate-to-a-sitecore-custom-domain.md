---
permalink: upload-an-ssl-certificate-to-a-Sitecore-custom-domian/
audit_date:
title: Upload an SSL certification to a Sitecore custom domain
type: article
created_date: '2017-05-08'
created_by: Juan Garza
last_modified_date: '2017-05-08'
last_modified_by: Nate Archer
product: Managed Operations
product_url: managed-operations
---


To secure an Azure Webapp that has a custom domain name, you need to use HTTPS. By default, Azure secures the **.azurewebsites.net** wildcard domain with a single SSL certificate, so you can already access your Webapp using the the URL **https://\<appname>.azurewebsites.net**.

However, the Azure default certificate will not work if you use a custom domain for your Webapp. A custom domain with it's own SSL certificate is more secure than the default. This article describes to add an SSL certificate to a Webapp with a custom domain.

### Prerequisite

- Your log in credentials for the Azure portal. For information on how to log in to the Azure portal, see [Sitecore Cloud portals and account management](/how-to/sitecore-cloud-portals-and-account-management/)

### Get an SSL certificate
