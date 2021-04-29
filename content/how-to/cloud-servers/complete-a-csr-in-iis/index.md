---
permalink: completing-a-csr-in-iis/
audit_date: ‘2021-03-12’
title: Complete a CSR in IIS
type: article
created_date: ‘2021-03-12’
created_by: Karoline Mills
last_modified_date: ‘2021-03-12’
last_modified_by: William Loy
product: Cloud Servers
product_url: cloud-servers
---

This article explains how to complete a Certificate Signing Request (CSR) with Internet Information Services (IIS) on a Windows&reg; server.

Before completing the steps in this article, you must create a CSR by using the following instructions:
[How to generate a CSR](https://docs.rackspace.com/support/how-to/generate-a-csr).

#### What is a CSR, and when do you need one?

A CSR is required when purchasing an Secure Sockets Layer (SSL) certificate for a website. You can generate and CSR on a server
or use CSR generators provided by various third parties and SSL vendors. The CSR contains information regarding the domain names
that the certificate secures, as well as the respective organization or company details. A CSR is typically a **.txt** file that
requires a CSR decoder to read its contents. You can find various CSR decoders online.

If you want to renew an existing certificate, a new CSR isn't always needed. You only have to generate a new CSR if
the domain names or the organization information changes. If there are no changes, the existing CSR is renewable.

#### Verify that you created  the CSR on the server

To complete the CSR with IIS on your Windows server, you must create the CSR on the server. Use the following steps to verify
you did this correctly:

1. Open Microsoft Management Console (MMC) by clicking on the Windows icon in your taskbar and typing `mmc`.

2. At the top of the window, select **File** and **Add/Remove Snap-in**.

3. Click **Certificates** and then click **Add**.

4. Select **Computer Account**, **Next**, and **Finish**.

5. Expand the menu in the left-hand pane and navigate to **Certificate Enrollment Requests** -> **Certificates**.
     - If the CSR was created on the server, you can see it listed here, and you can move on to the next section.
     - If you don't see the CSR listed, the CSR was not created on the server, and you need to obtain the private
       key from your certificate vendor to proceed with the SSL installation.

#### Complete the CSR in IIS

When you complete the CSR request in IIS, you are installing the SSL certificate so that it is ready for use with your site. 

1. Upload the **.crt** or **.cer** file from your SSL vendor to your Windows server.

2. Open IIS by clicking on the Windows icon in your taskbar and typing **IIS**.

3. On the dashboard, double-click **Server Certificates**.

4. In the right-hand pane, select **Complete Certificate Request**.

5. Select the location of the certificate file.

6. Provide an easily recognizable name for your certificate under **Friendly Name**.

7. Select **Personal** under **Certificate Store** and click **OK**.

The certificate is now ready for use, and you can bind it to the respective site.
