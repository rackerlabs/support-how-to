---
permalink: /ip-over-https-in-cloud-load-balancer
audit_date:
title: 'Client IP issue over HTTPS - Cloud Load Balancer'
type: article
created_date: '2021-07-19'
created_by: Jorge Mijangos
last_modified_date: '2021-09-06'
last_modified_by: Miguel Salgado
product: Cloud Load Balancers
product_url: cloud-load-balancers
---

### Client IP issue over HTTPS - Cloud Load Balancer 

There are some points to consider at the moment when configuring a cloud load balancer, in this article we are going to split it in small parts.

It is *not recommendable enable SSL termination on a load balancer* which has an external node and here are two reasons why not:

**A)**  In case there is sensitive data classified as Personally Identifiable Information (PII); i.e.
 1. Information protected by the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and Gramm-Leach-Bliley
 2. Credit card information or any data that might result in identity theft if it is disclosed.

**B)** Load balancer receive an user request and pass it to the nodes in plain text, once the node that had received the request replies to the load balancer, it will encrypt the data and send it back to the user, which saw the https termination all the time. But in the mean time decrypted data and customer information had been espoused to the red throughout the load balancer and external node communication, becoming it in security breach that could be exploited for sniffers.

### Recommendation is to disable the SSL termination, the way to achieve this:

#### Via Rackspace cloud;
1.  Log in to the [Cloud Control Panel](https://login.rackspace.com/).

2.  In the top navigation bar, click **Select a Product > Rackspace Cloud**.

3.  Select **Networking > Load Balancers**.

4.  Select the desired Load Balancer.

5.  Scroll down to *Optional features*

6.  *Click on the pencil next to **HTTPS Redirect** and disable it.

#### With the API

```
DELETE /v1.0/{account}/loadbalancers/{loadBalancerId}/ssltermination
```

Where:
**{account}**         *String The ID for the tenant or account in a multi- tenancy cloud.*
**{loadBalancerId}**  *String The ID for the load balancer.*

    **Note**: If you are using **Ligjttpd**  to polish up the traffic, in the case that current external node is to far away of the Load balancer region, your users won't feel any positive change, because the distance between the node being balanced and the region of the Load Balancer can impact the performance of the load balancer, to solved this the rule of thumb is choose the region that is geographically closest to the external node.

#### Example:
You are located in **New Jersey**, even though he has Chicago(**ORD**) and Northern Virginia (**IAD**) region close to you, the best option is a Load Balancer in **IAD** region, due **IAD** is geographically closest to your location.

On the other hand it is possible to configure a pool member of servers to receive the original client IP address, but it is only and typically used for the *HTTP* protocol, in cloud server is **not possible** to allow this with the *HTTPS* protocol.

To do so, we can use the directive *X-Forwarded-for* (**XFF**), this is used to identify the origin of th IP address of the client connecting to the server.

*XFF Header Example Collapse source*
```
create ltm profile http HTTP-XFF insert-xforwarded-for enabled defaults-from http save sys config
list ltm profile http HTTP-XFF

(lb-965415)(cfg-sync In Sync)(Active)(/Common)(tmos)# list ltm profile http HTTP-XFF
ltm profile http HTTP-XFF

{ app-service none defaults-from http insert-xforwarded-for enabled }

(lb-965415)(cfg-sync In Sync)(Active)(/Common)(tmos)#
```

Finally, the directive  *X-Forward Proto*, helps with SSL offloading within the server, but is not configured in Cloud Load Balancer.

    **Note**: At the end of the day, if you still want to see the source IP, is strongly recommended to use Apache.

#### On Apache configuration file, this line:

```
LogFormat "%h %l %u %t \"%r\" %&gt;s %b \"%{Referer}i\" \"%{User-Agent}i\"" combined
```

*Should be modified to:*

```
LogFormat "%{X-Forwarded-For}i %h %l %u %t \"%r\" %&gt;s %O \"%{Referer}i\" \"%{User-Agent}i\"" combined
```

And also, the *Vhost* configuration has to be changed to something as follows:

```
ServerAdmin webmaster@example.com
DocumentRoot /var/www/html/example.com
ServerName example.com
ErrorLog logs/example.com-error_log
CustomLog logs/example.com-access_log combined
```
