---
permalink: deploy-to-sitecore-cloud/
audit_date:
title: Deploy to Sitecore Cloud
type: article
created_date: '2017-05-02'
created_by: Juan Garza
last_modified_date: '2017-05-02'
last_modified_by: Nate Archer
product: Managed Operations
product_url: managed-operations
---

This article describes how to deploy your application using your Sitecore Cloud environment.

### Prerequisites

Before you can deploy to Sitecore Cloud, you need the following:

- Credentials for the Azure portal from the Managed Sitecore team

- An FTP client (for example, FileZilla or Cyberduck)

### Set up your FTP server

### Set deployment credentials

To access the FTP server of your app, you need to set up your deployment credentials.

1. [Sign in to the Azure portal](https://portal.azure.com/). For information on where to find your credentials to log in to the Azure portal see [Sitecore Cloud portals and account management](/how-to/sitecore-cloud-portals-and-account-management/).

2. Click **App Service > APP > Deployment credentials**.

3. Change your user name and password, then click Save.

### Copy your deployment files to the FTP client

After your deployment credentials are set up, you need to set up your FTP client to access the FTP server.

1. In the Azure portal, select **App Service > App > Settings > Properties**.

2. Copy either the **FTP deployment user**, **FTP Host Name**, or **FTPS Host Name**. Copy the FTP values exactly as displayed in the Azure Portal, including the application name, in order to give the FTP client proper context for the FTP server. The value should look similar to `app-cm\Deployuser`.

3. Open your FTP client. Use the FTP connection values you copied to connect to your app. <!---Need more instructions for this--->.

4. Copy your deployment files and it's directory structure to the `/site/wwwroot` directory.

5. Browse to the url of your application to verify that your application is running. <!---Might need more information here--->
