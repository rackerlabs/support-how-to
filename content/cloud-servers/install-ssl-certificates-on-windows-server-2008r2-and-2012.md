---
permalink: install-ssl-certificates-on-windows-server-2008r2-and-2012/
node_id: 6005
title: Installing SSL Certificates on Windows Server 2008 R2 and 2012
type: article
created_date: '2014-02-13'
created_by: Justin Bryant
last_modified_date: '2016-03-11'
last_modified_by: Stephanie Fillmon
product: Cloud Servers
product_url: cloud-servers
---

This article shows how to install SSL certificates on Windows Server 2008 R2 and 2012.

**Note**: Because SSL certificates changed little during the update from 2008 R2 to 2012, the instructions in this article apply to both versions.

### Generate a certificate signing request (CSR)

1. In the IIS Manager, select the server name and double-click on **Server Certificate**.
2. Under **Actions**, click on **Create Certificate Request**.
3. On the **Distinguished Name Properties** page of the Request Certificate wizard, complete all of the fields for your certificate and then click **Next**.
4. On the next page of the wizard, select a cryptographic service provider (the default is usually acceptable) and the bit length (the recommended minimum is 2048 bits). Then click **Next**.
5. Finally, enter the location where you want to save the certificate request file, and then click **Finish**.

### Install the certificate

1. After you get the certificate from your preferred SSL vendor in the IIS Manager, select the server and double-click on **Server Certificates**.
2. Under **Actions**, click **Complete Certificate Request**.
3. In the wizard, select the location of the certificate file.

  **Note**: This is the same location you chose when generating the CSR in the section above.

4. (*Windows Server 2012 only*) Name the file and choose your store.

### Set up the bindings

1. In the IIS Manager, right-click on your site and select **Edit Bindings**.
2. In the **Site Bindings** window, click **Add**.
3. In the **Add Site Binding** dialog box, perform the following steps:
  - Set the value of **Type** to **https**.
  - (*Windows Server 2012 only*) Specify the host name, if necessary.
  - From the **SSL certificate** list, select your certificate.
  - Click **OK**.

After the binding is set up, the **Site Bindings** window shows the binding for HTTPS.

### Import an SSL certificate

1. In the IIS Manager, double-click on **Server Certificates**.
2. Under **Actions**, click on **Import**.
3. Select the location of your certificate file, enter the password (if you set one), and choose your certificate store (*Windows Server 2012 only*). Then, click **OK*.
