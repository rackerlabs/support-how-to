---
permalink: upload-an-ssl-certificate-to-a-custom-domian/
audit_date:
title: Upload an SSL certificate to a custom domain
type: article
created_date: '2017-05-08'
created_by: Juan Garza
last_modified_date: '2017-05-08'
last_modified_by: Nate Archer
product: Managed Operations
product_url: managed-operations
---

To secure a Webapp that has a custom domain name, you need to use HTTPS. By default, Azure secures the **.azurewebsites.net** wildcard domain with a single SSL certificate, so you can already access your Webapp using the URL **https://\<appname>.azurewebsites.net**.

However, the Azure default certificate will not work if you use a custom domain for your Webapp. A custom domain with it's own SSL certificate is more secure than the default. This article describes to add an SSL certificate to a Webapp with a custom domain.

### Prerequisite

- Your log in credentials for the Azure portal. For information on how to log in to the Azure portal, see [Sitecore Cloud portals and account management](/how-to/sitecore-cloud-portals-and-account-management/)

### Get an SSL certificate

If you do not already have SSL certificate, you need to get one from a trusted certificate authority (CA). The certificate must meet all the following requirements:

- Must be signed by a trusted CA (no private CA servers).

- Contains a private key.

- Must be created for key exchange, and exported to a .PFX file.

- Uses a minimum of 2048-bit encryption.

- A subject name matches the custom domain it needs to secure. To secure multiple domains with one certificate, you need to use a wildcard name (e.g. *.contoso.com*) or specify subjectAltName values.

- Merged with all intermediate certificates used by your CA. Otherwise, you may run into irreproducible interoperability problems on some clients.

<!---Need to figure out rules for linking to Azure documentation--->

### Add the SSL Certificate to Azure

1. Log in to the [Azure portal](https://portal.azure.com).

2. Click **App service** on the left side of the page.

3. Select the Webapp to which you want to assign the certificate.

4. Navigate to the Settings and click **SSL certificate**.

5. Select the .pfx file that contains your SSL certificate, and enter the password you wish to use for this certification.

6. Click **Upload**. You can now navigate to your SSL certificate through the Webapp screen.

    <!---Screenshot might be useful here--->

7. In the "SSL bindings" section of the SSL certificate screen, select **Add bindings**. A new screen called *SSL Bindings* will appear.

8. Use the drop down menu to select the custom domain URL you wish to secure using SSL, followed by the name of SSL certificate. You can also select whether to use Server Name Indication (SNI) or IP based SSL.

9. Click **Add binding**. This enables SSL for your custom domain.
