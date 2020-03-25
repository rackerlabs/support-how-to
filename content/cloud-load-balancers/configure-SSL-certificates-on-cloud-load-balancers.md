---
permalink: configure-SSL-certificates-on-cloud-load-balancers/
audit_date: '2020-03-24'
title: Configure SSL certificates on Cloud Load Balancers
type: article
created_date: '2020-03-24
created_by: Chris Silva
last_modified_date: '2020-03-24'
last_modified_by: Chris Silva
product: Cloud Load Balancers
product_url: cloud-load-balancers
---

Cloud Load Balancers can be configured to accept SSL connections. SSL-terminated load balancers decrypt the traffic at the Load Balancer and pass unencrypted traffic to the nodes behind the Load Balancer. This functionality can be applied to HTTP Load Balancers. Additionally, you can configure Server Name Indication (`SNI`) on your Cloud Load Balancer through your Rackspace Portal. This allows you to serve multiple SSL certificates on a single Cloud Load Balancer. More information is available at this link: [Configure multiple SSL certificates on Cloud Load Balancers](https://support.rackspace.com/how-to/configure-multiple-SSL-certificates-on-cloud-load-balancers/)

The following article provides information on how to configure an SSL certificate on your Load Balancer.

**NOTE**: Load Balancers can host a total of 20 SSL certificates including the main certificate on the Load Balancer. 

### Prerequisites
	- You must create an HTTP (80) Load Balancer
	- You must have an SSL certificate and Private Key for your domain in .pem format.
	- Must have your domain configured on you server behind the load balancer. 

### SSL Termination

The SSL termination feature enables you to terminate SSL traffic at the load balancer layer versus at the web server layer. You can choose to configure SSL termination using a key and an SSL certificate or an (Intermediate) SSL certificate. When SSL termination is configured on a load balancer, a secure shadow server is created that listens only for secure traffic on a user-specified port. This shadow server is only visible to and manageable by the system. Existing or updated attributes on a load balancer with SSL termination also applies to its shadow server. For example, if Connection Logging is enabled on an SSL load balancer, it is also enabled on the shadow server and Cloud Files logs contain log files for both.

The following table shows the possible response codes for the operation.

| Response Code  | Name  | Description  |
|:-:|:-:|:-:|---|---|
| 200  | Success  | Request succeeded.  |
| 400  |  Bad Request | The request is missing one or more elements, or the values of some elements are invalid.  |
| 401  |  Unauthorized | You are not authorized to complete this operation. This error can occur if the request is submitted with an invalid authentication token.  |
| 404  |  Not Found | The requested item was not found.  |
| 413  |  Over Limit | 	The number of items returned is above the allowed limit.  |
| 422  |  Immutable Entity | This fault is returned when a user attempts to modify an item that is not currently in a state that allows modification. For example, load balancers in a status of PENDING_UPDATE, BUILD, or DELETED may not be modified.  |
| 500  |  Load Balancer Fault | The load balancer has experienced a fault.  |
| 503  |  Service Unavailable | The service is not available.  |


### Applying SSL certificate to Cloud Load Balancer

1.	From your **Rackspace Portal** select **Networking** > **Load Balancers**. 

2.	Select the Load Balancer to which you want to apply your SSL Certificate. 

3.	Under the **Optional Features** section, select the pencil next to the **Secure Traffic (SSL)** section. 

4.	Paste the SSL certificate data in the appropriate boxes.

**NOTE**: You can choose to allow secure and insecure traffic, however when terminating the SSL on the Load Balanacer, the preferred option will be to only allow secure traffic. You can also select your **TLS** and **Cipher Profile** in this section. For more information on **Cipher Profiles** see this link: [Update Cipher Profile on Cloud Load Balancer](https://support.rackspace.com/how-to/update-the-cipher-profile-on-a-cloud-load-balancer). For more information on TLS version, please refer to this link: [Disable TLS 1.0 Cloud Load Balancers](https://support.rackspace.com/how-to/disable-tls1-for-cloud-load-balancers/)

5.	Click **Save Configuration** to apply the certificate. 

If you've followed these steps and your server has been configured to accept traffic for this domain behind the load balancer, you should now be able to access the site securely. 

### Removing or updating your SSL certificate

**IMPORTANT**: If updating the certificate, you will need to provide the Private Key even if the Key did not change. This is intentional and is done for security purposes. 

1.	From your **Rackspace Portal** select **Networking** > **Load Balancers**. 

2.	Select the Load Balancer to which you want to apply your SSL Certificate. 

3.	Under the **Optional Features** section, select the pencil next to the **Secure Traffic (SSL)** section. 

	a. If you need to modify the certificate, paste the new certificate data in the boxes. 
	
	b. If removing the certificate from the Load Balancer, click **Remove SSL Configuration**. 

**WARNING**: If you remove the main certificate, it will also remove the **ALL** certificate mappings for the Load Balancer. 


If you've followed this guide, you're now equipped with the knowledge to add, remove, or modify your SSL certificate on your Cloud Load Balancer.
