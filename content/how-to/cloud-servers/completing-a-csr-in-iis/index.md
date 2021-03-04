---
permalink: completing-a-csr-in-iis/
audit_date:
title: Completing a CSR in IIS
type: article
created_date: ‘2021-03-04’
created_by: Karoline Mills
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

### Completing a CSR in IIS

This article explains how to complete a Certificate Signing Request (CSR) with Internet Information Services (IIS) on a Windows server.

If you still need to create a CSR, please review the following article: [How to generate a CSR](https://docs.rackspace.com/support/how-to/generate-a-csr) 

#### What is a CSR and when is it needed

A CSR is required when purchasing an SSL certificate for a website. It can be generated on a server or using CSR generators provided by various third parties and SSL vendors. It contains information regarding the domain names that are secured by the certificate, as well as the respective organization/company details. It is typically provided in a .txt file and you will need a CSR decoder to read its contents. You can find various CSR decoders online.

If you simply want to renew an existing certificate, a new CSR is not always needed. You will only have to generate a new CSR if the domain names or the organization information has changed. Otherwise, the existing CSR can be used for the renewal.

#### Verifying that CSR was created on the server

In order to complete the CSR with IIS on your Windows server, the CRS has to have been created on the server as well. To verify this, follow the below steps:

1.	Open Microsoft Management Console (MMC) by clicking on the Windows icon in your taskbar and typing *mmc*

2.	At the very top, select **File** -> **Add/Remove Snap-in**

3.	Click **Certificates**, and click **Add**

4.	Select **Computer Account**, and **Next** -> **Finish**

5.	Expand the menu in the left-hand pane, and navigate to **Certificate Enrollment Requests** -> **Certificates**
        - If the CSR was created on the server, you will see it listed here and you can move on to the next section
        - If you do not see the CSR listed, the CSR was not created on the server and you will need to obtain the private key from your certificate vendor to proceed with the SSL installation

#### Completing the CSR in IIS

By completing the CSR request in IIS, you will install the SSL certificate and it will be ready for use with your site. 

1.	Upload the .crt or .cer file that you received from your SSL vendor to your Windows server

2.	Open IIS by clicking on the Windows icon in your taskbar and typing *IIS*

3.	On the dashboard, double-click **Server Certificates**

4.	In the right-hand pane, select **Complete Certificate Request**

5.	Select the location of the certificate file

6.	Provide an easily recognizable name for your certificate under **Friendly Name** (e.g. *example.com exp. 2022*)

7.	Select **Personal** under **Certificate Store**, and click **OK**

8.	The certificate is now ready for use and can be bound to the respective site
