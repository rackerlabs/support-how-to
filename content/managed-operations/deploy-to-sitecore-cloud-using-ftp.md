---
permalink: deploy-to-sitecore-cloud-using-ftp/
audit_date:
title: Deploy to Sitecore Cloud using FTP
type: article
created_date: '2017-05-02'
created_by: Juan Garza
last_modified_date: '2017-05-02'
last_modified_by: Nate Archer
product: Managed Operations
product_url: managed-operations
---

This article describes how to deploy application files to your Sitecore Cloud environment using an FTP client.

### Prerequisites

To set up your deploy, you need the following:

- An FTP client (for example, [FileZilla](https://filezilla-project.org/) or [Cyberduck](https://cyberduck.io/?l=en)).

### Set deployment credentials and deploy application files

You can deploy using FTP or FTPS protocol. To access the file system of your Webapp, you need to set deployment credentials and copy your FTP hostname. These credentials and the FTP hostname allow you to deploy your application files.

1. Sign in to the [Azure portal](https://portal.azure.com/). For information on where to find your credentials to log in to the Azure portal see [Sitecore Cloud portals and account management](/how-to/sitecore-cloud-portals-and-account-management/).

2. Click **All resources**, then select the Webapp you wish to set credentials for.

3. In the app screen under Deployment, select **Deployment credentials**

4. Change your user name and password, then click Save.

5. After your credentials are set, click **Overview**.

6. Copy the **FTP hostname** or **FTPS hostname**. Copy the FTP values exactly as displayed in the Azure Portal, including the application name, in order to give the FTP client proper context for the FTP server. The value should look similar to `app-cm\Deployuser`.

7. Open your FTP client. Create a new session using the hostname you copied and the credentials you set.

8. Upload your application files and it's directory structure to the `/site/wwwroot` directory.

9. Browse to website to verify that deployment was successful.

  **Note:** If you need the URL for the website, go back to the Azure portal and navigate to the Overview of your Webapp. The URL will be listed there.
