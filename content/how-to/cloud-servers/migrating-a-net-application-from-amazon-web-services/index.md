---
permalink: migrating-a-net-application-from-amazon-web-services
audit_date: '2021-04-22'
title: Migrate a .NET application from Amazon Web Services
type: article
created_date: '2013-07-02'
created_by: Rackspace Support
last_modified_date: '2021-04-22'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

**Previous section:** [Provision cloud resources when migrating from Amazon Web Services](/support/how-to/provisioning-cloud-resources-when-migrating-from-amazon-web-services)

This article describes how to migrate a .NET web application from
Amazon Web Services&reg; (AWS&reg;) to the Rackspace Cloud. It takes approximately 30 minutes
to complete if you follow the instructions step by step.

The following figure shows the topology of the application in this scenario:

{{<image src="4-2-1.png" alt="" title="">}}

### Prerequisites

- Microsoft&reg; Windows&reg; Server on AWS running a .NET&reg; web application on Internet
    Information Services (IIS&reg;) This article's examples used a Windows Server 2012 with IIS 8.
- Valid and enabled account on the Rackspace Cloud.

### Preparation

- Identify the resources to migrate, including application and
    database resources.
- If you have not already, [create a Cloud Server instance](/support/how-to/provisioning-cloud-resources-when-migrating-from-amazon-web-services)
    and any supporting Rackspace Cloud services.

### Install software packages

1. Install the Rackspace Cloud Files client as follows:

    1. Connect to the AWS instance by using Remote Desktop Connection.

        {{<image src="4-2-6.png" alt="" title="">}}

    2. Install an FTP client application for backing up data to
       Rackspace Cloud Files. You can use any browser to download the client.

    3. Create a connection to Rackspace Cloud Files by using your Rackspace
       account user name and API key. You will use this connection to back up
       data during the migration steps.

        {{<image src="4-2-7.png" alt="" title="">}}

2. Install IIS 8 by using the instructions located at <https://www.iis.net/learn/get-started/whats-new-in-iis-8/installing-iis-8-on-windows-server-2012> .

### Back up data from AWS to Rackspace Cloud Files

Using the FTP client that you installed in the preceding section, upload the
.NET project folder to the Rackspace Cloud Files container that you created in
the article [Provision cloud resources when migrating from Amazon Web Services](/support/how-to/provisioning-cloud-resources-when-migrating-from-amazon-web-services/).

### Restore data from Cloud Files to Cloud Servers

1. Connect to your Rackspace Cloud Servers instance by using Remote Desktop
   Connection.
2. Copy the .NET web application folder from the Cloud Files container to the
   cloud server at the following location:

        C:\inetpub\wwwroot

3. Open IIS Manager, click **Add Website**, and enter details: site name,
   physical path, and hostname.

    {{<image src="4-2-8.png" alt="" title="">}}

4. After creating the website, stop the **Default Web Site** pre-installed
   application and start your web application.

### Test your application

Click on **Browse \*:80 (http)** to see the application in the browser.

### Next step

[Post-migration considerations when migrating from Amazon Web Services](/support/how-to/post-migration-considerations-when-migrating-from-amazon-web-services)

For other migration scenarios, see the following articles:

- [Migrate an application built on a LAMP stack from Amazon Web Services](/support/how-to/migrating-an-application-built-on-a-lamp-stack-from-amazon-web-services)
- [Migrate a Java web application from Amazon Web Services](/support/how-to/migrating-a-java-web-application-from-amazon-web-services)
- [Migrate an application based on Backbone.js, Node.js, and MongoDB from Amazon Web Services](/support/how-to/migrating-an-application-based-on-backbonejs-nodejs-and-mongodb-from-amazon-web-services)
