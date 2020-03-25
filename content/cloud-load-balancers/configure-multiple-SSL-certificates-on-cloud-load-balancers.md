---
permalink: configure-multiple-SSL-certificates-on-cloud-load-balancers/
audit_date: '2020-03-25'
title: Configure multiple SSL certificates on Cloud Load Balancers
type: article
created_date: '2020-03-24
created_by: Chris Silva
last_modified_date: '2020-03-25'
last_modified_by: Chris Silva
product: Cloud Load Balancers
product_url: cloud-load-balancers
---

The following article provides information on how to configure multiple SSL certificates on your Load Balancer.

Cloud Load Balancers can be configured to terminate SSL connections. SSL-terminated load balancers decrypt the traffic at the Load Balancer and pass unencrypted traffic to the nodes behind the Load Balancer. This feature is available to HTTP Load Balancers. Additionally, you can configure **Certiciate Mappings** through Server Name Indication (`SNI`) on your Cloud Load Balancer through your Cloud Control Panel. This allows you to serve multiple SSL certificates on a single Cloud Load Balancer. 

### Prerequisites
	- You must create an HTTP (80) Load Balancer
	- You must have an SSL certificate and Private Key for your domain in .pem format.
	- Must have your domain configured on you server behind the load balancer. 
	- You must have already configured an SSL on your load balancer.

**NOTE**: If you haven't added a main certificate to your Load Balancer, please refer to this link: [Configure SSL Certificates on Cloud Load Balancers](https://support.rackspace.com/how-to/configure-SSL-certificates-on-cloud-load-balancers/)


### Applying multiple SSL certificates to Cloud Load Balancer

**NOTE**: Load Balancers can host a total of 20 domains, including the main certificate on the Load Balancer. Each domain requires its own certificate mapping, even if the same certificate is used. For example, if you have an SSL certificate that is valid for \*.example.com , and you want to host *abc.example.com* and *def.example.com* from the Cloud Load Balancer, you must create a mapping for both domains.

Using `SNI`, your Cloud Load Balancer can serve multiple certificates to provide secure connections to your domains. 

1.	From the **Cloud Control Panel**,  select **Networking** > **Load Balancers**. 

2.	Select the Load Balancer to which you want to apply your SSL Certificate. 

3.	Under the **Optional Features** section, click the **Add Certificate Mapping** button. 

4.	Enter the **hostname** for your certificate. 

**NOTE**: The hostname will need to match as either the certificate's **Common Name** or **Alt. Names**. 

5.	Click **Save Certificate Mapping** to apply the certificate. 

6. 	The Load Balancer will take a moment to build and apply the certificate. You can repeat steps 3 -6 for any additional certificates. 


Once completed, you should see a new clickable item under **Certificate Mappings** indicating the number of **Certificate Mappings** on the Load Balancer. 


### Removing or replacing a certificate mapping

If you need to remove or replace a certificate mapping, you can do so by following these steps. 

1.	From your **Cloud Control Panel** select **Networking** > **Load Balancers**. 

2.	Select the Load Balancer that you need to edit. 

3.	Under the **Optional Features** section, click the **(n) Certificate Mapping** button.

**NOTE**: The `(n)` value will differ depending on how many certificates you have on the Load Balancer. 

4.	Click the gear icon next to the mapping you want to remove or modify. 

	a.	If you need to modify the certificate, click the **Edit Mapping** button, make the changes, and click **Save Certificate Mapping**. 

	b.	If you need to delete the certificate mapping, click the **Delete Mapping** button.

**IMPORTANT**: If updating the certificate, you will need to provide the Private Key even if the Key did not change. This is intentional and is done for security purposes. 


If you've followed this guide, you are now equipped to add, update, or remove Certificate Mappings on your Cloud Load Balancer. Should you experience any issues with this interface or need further information, please reach out to us via ticket or phone. 
