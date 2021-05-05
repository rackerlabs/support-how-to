---
permalink: configure-SSL-certificates-on-cloud-load-balancers
audit_date: '2020-03-25'
title: Configure SSL certificates on Cloud Load Balancers
type: article
created_date: '2020-03-24'
created_by: Chris Silva
last_modified_date: '2020-03-31'
last_modified_by: Cat Lookabaugh
product: Cloud Load Balancers
product_url: cloud-load-balancers
---

The following article provides information about how to configure a Secure Sockets Layer (SSL) certificate on your load balancer.

You can configure Cloud Load Balancers to accept SSL connections. SSL-terminated load balancers decrypt the traffic at the load balancer and pass unencrypted traffic to the nodes behind the load balancer. You can apply this functionality to HTTP load balancers. Additionally, you can configure Server Name Indication (SNI) on your Cloud Load Balancer through your Cloud Control Panel. This configuration allows you to serve multiple SSL certificates on a single Cloud Load Balancer. For more information, see [Configure multiple SSL certificates on Cloud Load Balancers](/support/how-to/configure-multiple-SSL-certificates-on-cloud-load-balancers/).

### SSL termination

The SSL termination feature enables you to terminate SSL traffic at the load balancer layer versus at the web server layer. You can choose to configure SSL termination by using a key and an SSL certificate or an intermediate SSL certificate. When you configure SSL termination on a load balancer, a secure shadow server is created that listens only for secure traffic on a user-specified port. This shadow server is only visible to and manageable by the system. Existing or updated attributes on a load balancer with SSL termination also apply to its shadow server. For example, if *Connection Logging* is enabled on an SSL load balancer, it is also enabled on the shadow server. Also, Cloud Files logs contain log files for both servers.

The following table shows the possible response codes for the operation:

**Response Code**|**Name**|**Description**
-----|-----|-----
200|Success|Request succeeded.
400|Bad Request|The request is missing one or more elements, or the values of some elements are invalid.
401|Unauthorized|You are not authorized to complete this operation. This error can occur if the request is submitted with an invalid authentication token.
404|Not Found|The requested item was not found.
413|Over Limit|The number of items returned is above the allowed limit.
422|ImmutableEntity|This fault is returned when a user attempts to modify an item that is not currently in a state that allows modification. For example, load balancers in a status of PENDING\_UPDATE,BUILD, or DELETED may not be modified.
500|Load Balancer Fault|The load balancer has experienced a fault.
503|Service Unavailable|The service is not available.


### Prerequisites

- You must create an HTTP (port 80) load balancer.
- You must have an SSL certificate and private key for your domain in **.pem** format.
- You must configure your domain on the server behind the load balancer. 

### Apply the SSL certificate to a Cloud Load Balancer

1. From the **Cloud Control Panel**, select **Networking** > **Load Balancers**. 

2. Select the load balancer to which you want to apply the SSL Certificate. 

3. Under the **Optional Features** section, select the pencil next to the **Secure Traffic (SSL)** section. 

4. Paste the SSL certificate data into the appropriate boxes.

    **NOTE**: You can choose to allow secure and insecure traffic. However, when terminating the SSL on the load
    balancer, you should only allow   secure traffic, as a best practice. You can also select your Transport Layer
    Security (**TLS**) and **Cipher Profile** in this section. For more information about your **Cipher Profile**,
    see [Update Cipher Profile on Cloud Load Balancer](/support/how-to/update-the-cipher-profile-on-a-cloud-load-balancer).
    For more information on TLS version, see [Disable TLS 1.0 Cloud Load Balancers](/support/how-to/disable-tls1-for-cloud-load-balancers/).

5. Click **Save Configuration** to apply the certificate. 

At this point, if you configured your server to accept traffic for the domain behind the load balancer, you should now be able to access the site securely. 

### Remove or update an SSL certificate

**IMPORTANT**: When you update a certificate, you need to provide the private key even if the key did not change. This is done intentionally for security purposes. 

1. From the **Cloud Control Panel**, select **Networking** > **Load Balancers**. 

2. Select the load balancer to which you want to apply the SSL Certificate. 

3. Under the **Optional Features** section, select the pencil next to the **Secure Traffic (SSL)** section. 

   a. If you need to modify the certificate, paste the new certificate data in the boxes. 
	
   b. If you want to remove the certificate from the load balancer, click **Remove SSL Configuration**. 

**WARNING**: If you remove the main certificate, it also removes **ALL** certificate mappings for the load balancer. 


If you've followed the steps in this article, you can now add, remove, or modify your SSL certificate on your Cloud Load Balancer.
