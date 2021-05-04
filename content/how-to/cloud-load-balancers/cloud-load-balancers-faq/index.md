---
permalink: cloud-load-balancers-faq
audit_date: '2019-01-14'
title: Cloud Load Balancers FAQ
type: article
created_date: '2015-12-08'
created_by: Rackspace Support
last_modified_date: '2019-01-15'
last_modified_by: Kate Dougherty
product: Cloud Load Balancers
product_url: cloud-load-balancers
---

### Load balancing

{{< accordion title="What is a Rackspace Cloud Load Balancer?" col="in" href="accordion1" >}}

Your business's website, applications, and web-based workloads depend
on high availability. Rackspace [Cloud Load
Balancers](https://www.rackspace.com/cloud/load-balancing/) enable you
to quickly balance the workload of multiple Rackspace Cloud Servers for optimal
traffic management and maximum failover protection. Load balancers
distribute workloads across two or more servers, network links, or
other resources to maximize throughput, minimize response time, and
avoid network overload.
{{< /accordion >}}
{{< accordion title="How do I see the original IP address of a connection to a load balancer?" col="in" href="accordion2" >}}

The connection's `X-Forwarded-For` HTTP header stores a visitor's
originating Internet Protocol (IP) address by default. For more information,
see [the API documentation for creating a Cloud Load
Balancer](https://docs.rackspace.com/docs/cloud-load-balancers/v1/developer-guide/#creating-a-load-balancer).
{{< /accordion >}}
{{< accordion title="Do Cloud Load Balancers support SSL termination?" col="in" href="accordion3" >}}

Secure Sockets Layer (SSL) termination enables you to terminate your secure
traffic at the load balancer with centralized certificate management. This
service has the following features:

-   SSL acceleration for improved throughput
-   Reduced central processing unit (CPU) load at the application level
    for better performance
-   HTTP and HTTPS session persistence

Both [the
API](https://docs.rackspace.com/docs/cloud-load-balancers/v1/developer-guide/#document-api-operations/ssl-termination) and the [Cloud Control
Panel](https://login.rackspace.com/) support SSL termination on Cloud Load
Balancers.

**Note**: You should not use SSL termination when you are transferring certain
types of [Personally Identifiable Information
(PII)](/support/how-to/definition-of-personally-identifiable-information-pii).
{{< /accordion >}}
{{< accordion title="How do I configure SSL termination by using the Cloud Control Panel?" col="in" href="accordion4" >}}

You can quickly configure SSL termination for an existing Cloud Load
Balancer by using the following steps:

1. Log in to the [Cloud Control Panel](https://login.rackspace.com/).
2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.
3. Select **Networking > Load Balancers**.
4. Click on an existing load balancer to open its **Details** page.
5. Scroll to the **Optional Features** section.
6. Click the pencil icon to the right of the **Secure Traffic (SSL)**
   field.
7. In the pop-up dialog box, paste your certificate (**.crt**) file from your
   SSL vendor (or your own self-signed certificate) in the **Certificate**
   field.
8. Paste your private key (**.key**) in the **Private Key** field.
9. Click **Save SSL Configuration**.

**Note**: If you see the message `service unavailable` when you test your
website in your browser or health monitoring on the load balancer is removing
your web server node, ensure that your firewall allows connections on port 80.
Also verify that your virtual host is configured to listen on port 80.
{{< /accordion >}}
{{< accordion title="How can I raise my API rate limits for Cloud Load Balancers?" col="in" href="accordion5" >}}

To modify imposed API rate limits, contact Rackspace Support.
{{< /accordion >}}
{{< accordion title="What is the maximum throughput of each load balancer?" col="in" href="accordion6" >}}

A single Cloud Load Balancer is connected through a 10 GB per second network
to both the public network and Rackspace's internal network, which has
been tested to achieve about 9 GB per second of actual throughput. Some
limiting factors might influence the actual throughput at any given
time.
{{< /accordion >}}
{{< accordion title="How long does it take to provision a load balancer?" col="in" href="accordion7" >}}
How long does it take to provision a load balancer?

In most cases, it takes less than one minute to provision a load
balancer after the
[API](https://www.rackspace.com/cloud/cloud_hosting_products/loadbalancers/api/)
request is submitted. During periods of extreme system load, it should
take no more than a few minutes to complete the provisioning process.
{{< /accordion >}}
{{< accordion title="Who should not use SSL termination on Cloud Load Balancers?" col="in" href="accordion8" >}}

You should not use SSL termination when transferring certain types of
sensitive customer data classified as [Personally Identifiable Information
(PII)](/support/how-to/definition-of-personally-identifiable-information-pii).
Examples of PII include information protected by the Health Insurance
Portability and Accountability Act of 1996 (HIPAA) and
Gramm-Leach-Bliley acts, credit card information, or any personal data
that might result in identity theft if it is disclosed.
{{< /accordion >}}
{{< accordion title="How do you manage and distribute IP addresses?" col="in" href="accordion9" >}}

Each load balancer comes with one public IPv4 address and one public IPv6
address.
{{< /accordion >}}
{{< accordion title="How many concurrent connections can the service handle?" col="in" href="accordion10" >}}

A single load balancer is capable of consistently handling 20,000
concurrent connections with support for periodic spikes estimated at up
to 100,000 concurrent connections. Because Cloud Load Balancers are
implemented in a multi-tenant environment, estimates are not guaranteed
and might vary depending on the number of concurrent connections that
other customer load balancers are processing.
{{< /accordion >}}
{{< accordion title="Do Cloud Load Balancers work with dedicated servers?" col="in" href="accordion11" >}}

Yes, but we recommend using RackConnect&reg; to include [dedicated
servers](https://www.rackspace.com/managed-hosting/dedicated-servers/)
except in low-traffic scenarios, due to the potential for
significant bandwidth charges. If you don't use RackConnect, you are billed
bandwidth charges for outbound requests from the load balancer, outbound
responses to the load balancer from the dedicated firewall, and also for
outbound messages from the load balancer to the user.
{{< /accordion >}}
{{< accordion title="Can I use Cloud Load Balancers in conjunction with RackConnect?" col="in" href="accordion12" >}}

You can use the
[RackConnect](https://www.rackspace.com/cloud-connectivity/rackconnect)
Cisco&reg; Adaptive Security Appliance (ASA) solution to connect dedicated
servers and Cloud Servers while leveraging Cloud Load Balancers
to balance the workload between the Cloud Servers. Charges apply for
outgoing bandwidth through the dedicated environment, as well as
inbound and outbound traffic associated with the load balancers.

To include dedicated and cloud servers in the same resource pools (to
balance the workload between both platforms), use the RackConnect F5&reg;
BIG-IP&reg; Local Traffic Manager (LTM) solution.
{{< /accordion >}}
{{< accordion title="Can I manage my Cloud Load Balancer by using the API?" col="in" href="accordion13" >}}
Yes, you can implement and manage Cloud Load Balancers
through the Rackspace Cloud Control Panel and the API. To use the
Cloud Load Balancers API, you should have a general understanding of
the load balancing service and be familiar with the following technologies:

-   RESTful web services
-   HTTP/1.1 conventions
-   JSON and data serialization formats
-   Atom Syndication Format
{{< /accordion >}}
{{< accordion title="How does Rackspace charge for bandwidth?" col="in" href="accordion14" >}}
Following are the bandwidth charges for public and private traffic:

-   **Public**: Standard bandwidth rates apply for outbound transfers.
    There is no charge for inbound transfers.
-   **Private**: No charges apply for inbound or outbound bandwidth
    transfers over the Rackspace internal network.
{{< /accordion >}}
{{< accordion title="How much does a Rackspace Cloud Load Balancer cost?" col="in" href="accordion15" >}}
See [Rackspace Cloud Load
Balancers](https://www.rackspace.com/cloud/load-balancing/pricing/)
for detailed information about pricing. If you enable log delivery
to your Cloud Files account, standard charges for Cloud Files apply.
In addition, standard charges apply for additional (unique) virtual IP
addresses per load balancer.
{{< /accordion >}}
{{< accordion title="What are the requirements for using SSL termination?" col="in" href="accordion16" >}}

When you are using SSL termination on your load balancers, you should
understand the following requirements:

-   Additional fees apply when SSL termination is enabled.
-   SSL termination is available to Rackspace Cloud Load Balancer
    customers in the US and UK with a valid SSL certificate or intermediate
    certificate and an associated private key.
-   You cannot enable SSL termination when a Cloud Load Balancer is
    provisioned. You must configure it on existing load balancers by
    issuing a command through the API.

    To learn how to complete this process by using the API,
    see [SSL termination](https://docs.rackspace.com/docs/cloud-load-balancers/v1/api-reference/ssl-termination/).

    To learn how to complete this process by using the Cloud Control Panel,
    see "How do I configure SSL termination by using the Cloud Control Panel?"
    in this FAQ.
{{< /accordion >}}
{{< accordion title="What is ServiceNet?" col="in" href="accordion17" >}}


ServiceNet is an internal-only, multi-tenant network connection within
a Rackspace data center. ServiceNet IP addresses are not accessible
from the public Internet and are local to each data center.

**Note**: You can configure your account resources, such as Cloud
Servers and Cloud Load Balancers, to use a ServiceNet IP address
instead of the public IP address. Any traffic that occurs between your
cloud resources on the Rackspace network does not incur bandwidth
charges.

If you filter traffic to your servers by using a firewall, the best
practice is to allow the subnet range in which your load balancer
resides. For more information about how to filter traffic from
a load balancer on your servers, see [Using Cloud Load Balancers with
RackConnect](/support/how-to/using-cloud-load-balancers-with-rackconnect).
{{< /accordion >}}
{{< accordion title="What are the security concerns with SSL termination?" col="in" href="accordion18" >}}

After SSL termination decrypts the data at the Cloud Load Balancer, it
passes the unencrypted data to any nodes that are configured for that
device. If you have nodes that are not in the same data center as the
SSL-enabled load balancer, that unencrypted data is sent over the public
Internet to those nodes. Therefore, we recommend that you use an
SSL-enabled load balancer *only with nodes that reside in the same data
center as the load balancer.* The proximity allows the load balancer to
use the nodes' private IP addresses (the ServiceNet) to limit
unencrypted traffic to within the data center's network.
{{< /accordion >}}
{{< accordion title="What are the benefits of using SSL termination on the Cloud Load Balancer?" col="in" href="accordion19" >}}

With SSL termination, traffic is decrypted at the Cloud Load
Balancer, and unencrypted traffic can be distributed to one or more
Cloud Servers to be processed.

Following are other benefits:

-   The ability to configure a load balancer that accepts either secure and
    unsecured traffic, or secure traffic only
-   Potentially less expensive than using a dedicated F5 load balancer solution
-   Offers another alternative to using HAProxy&reg; with Cloud Servers
{{< /accordion >}}
{{< accordion title="How is SSL traffic normally handled?" col="in" href="accordion20" >}}

Secure traffic comes in to your site over an encrypted SSL connection,
and it must be decrypted by the web server that holds the SSL
certificate. The Cloud Load Balancer passes all of the traffic directly
to the Cloud Server with the corresponding SSL certificate,
placing the burden of the decryption on that server alone.
This occurs because each device (Cloud Server or Cloud Load Balancer)
that is handling traffic through an SSL connection requires either
its own SSL certificate or a Licensed Certificate Option.
{{< /accordion >}}
