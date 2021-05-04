---
permalink: configure-multiple-SSL-certificates-on-cloud-load-balancers
audit_date: '2020-03-25'
title: Configure multiple SSL certificates on Cloud Load Balancers
type: article
created_date: '2020-03-24'
created_by: Chris Silva
last_modified_date: '2020-03-31'
last_modified_by: Cat Lookabaugh
product: Cloud Load Balancers
product_url: cloud-load-balancers
---

The following article provides information about how to configure multiple Secure Sockets Layer (SSL) certificates on your load balancer.

You can configure Cloud Load Balancers to terminate SSL connections. SSL-terminated load balancers decrypt the traffic at the load balancer and pass unencrypted traffic to the nodes behind the load balancer. This feature is available to HTTP load balancers. Additionally, you can configure **Certificate Mappings** through Server Name Indication (SNI) on your Cloud Load Balancer through the Cloud Control Panel. This configuration enables you to serve multiple SSL certificates on a single Cloud Load Balancer. 

### Prerequisites

- You must create an HTTP (port 80) load balancer.
- You must have an SSL certificate and private key for your domain in **.pem** format.
- You must configure your domain on the server behind the load balancer. 
- You must have already configured an SSL on your load balancer.

**NOTE**: If you haven't added a main certificate to your load balancer, see [Configure SSL certificates on Cloud Load Balancers](/support/how-to/configure-SSL-certificates-on-cloud-load-balancers/)


### Apply multiple SSL certificates to a Cloud Load Balancer

**NOTE**: Load balancers can host a total of 20 domains, including the main certificate on the load balancer. Each domain requires its own certificate mapping, even if you use the same certificate. For example, if you have an SSL certificate that is valid for **\*.example.com**, and you want to host **abc.example.com** and **def.example.com** from the Cloud Load Balancer, you must create a mapping for both domains.

By using SNI, your Cloud Load Balancer can serve multiple certificates to provide secure connections to your domains. 

1. From the **Cloud Control Panel**, select **Networking** > **Load Balancers**. 

2. Select the load balancer to which you want to apply your SSL certificate. 

3. Under the **Optional Features** section, click **Add Certificate Mapping**. 

4. Enter the **hostname** for your certificate. 

**NOTE**: The hostname must match either the certificate's **Common Name** or **Alt. Names**. 

5. Click **Save Certificate Mapping** to apply the certificate. 

6. The load balancer takes a moment to build and apply the certificate. 

You can repeat steps 3 through 6 for any additional certificates. 

After the build completes, you should see a new clickable item under **Certificate Mappings** that indicates the number of **Certificate Mappings** on the load balancer. 

At this point, if you've configured your server to receive traffic for the mapped domain, you can now access the site over HTTPS. 

### Remove or replace a certificate mapping

If you need to remove or replace a certificate mapping, use the following steps: 

1. From the **Cloud Control Panel**, select **Networking** > **Load Balancers**. 

2. Select the load balancer that you need to edit. 

3. Under the **Optional Features** section, click **(n) Certificate Mapping**.

   **NOTE**: The `(n)` value differs depending on how many certificates you have on the load balancer. 

4. Click the gear icon next to the mapping you want to remove or modify. 

   a. If you need to modify the certificate, click **Edit Mapping**, make the changes, and click **Save Certificate Mapping**. 

   b. If you need to delete the certificate mapping, click **Delete Mapping**.

**IMPORTANT**: If you are updating the certificate, you need to provide the private key even if the key did not change. This is done intentionally for security purposes. 


If you've followed the steps in this article, you can now add, update, or remove certificate mappings on your Cloud Load Balancer. 
