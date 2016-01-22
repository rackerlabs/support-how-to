---
node_id: 5018
title: Rackconnect v2.0 FAQ
type: article
created_date: '2015-12-10'
created_by: Rackspace Support
last_modified_date: '2016-01-20'
last_modified_by: Stephanie Fillmon
product: RackConnect
product_url: rackconnect
---

**Applies to:** RackConnect v2.0. For questions on RackConnect v3.0, see
[RackConnect 3.0 -
FAQ](/how-to/rackconnect-faq).

### Getting Started

#### How do I get RackConnect?

Customers with a dedicated account should speak to their Account Manager
for information about the actions involved in getting RackConnect, and
how best to proceed. Be aware that RackConnect is supported only where
Rackspace Cloud infrastructure exists. At this time, the Rackspace Cloud
is available from our Chicago, Dallas, Virginia, Sydney, Hong Kong, and
London data centers.

If you are an existing Cloud customer, you will need to speak to a
member of our Sales team. They can guide you through the process of
acquiring a device that may be used in a RackConnected environment.

#### What can RackConnect do for me?

You need RackConnect in order to build a hybrid hosting solution that
combines the best of dedicated and cloud hosting by creating connections
between dedicated servers and Cloud Servers. RackConnect can be
implemented on certain Cisco ASA series FIREWALLS, or an F5 BIG-IP load
balancer that is used to interconnect dedicated physical servers with
cloud-based servers on the Rackspace internal network known as
ServiceNet.

#### Where do I go for help with RackConnect

If you need help with RackConnect please contact us via any of our usual
Support channels, and our team will help you with your issue or direct
you on to the relevant support group. We are available via phone, chat,
or tickets 24x7x365.

If you believe your issue is Cloud Server specific, please raise the
appropriate query with the Cloud team via the Cloud Control Panel,
otherwise please raise other requests via the my.rackspace.com portal.

------------------------------------------------------------------------

### Account Services

#### I already have a cloud account, can I connect to my exisiting servers?

You may RackConnect an existing Cloud account, but any existing servers
will not be RackConnected. If existing servers need to be RackConnected,
they will need to be rebuilt after the RackConnect implementation has
been completed. This may be done by first saving a Cloud Server image,
and then using the image to rebuild the existing server a a new
RackConnected server - or to simply build a new server.

Please be aware that this process for RackConnecting an existing server
will result in a new IP being assigned to the server. Since you are
essentially creating a new server, unfortunately this cannot be avoided.

An important consideration to take into account is the region you will
use to provision your servers. Because RackConnect relies on a service
net connection to link your dedicated servers and your cloud servers,
you will need to provision your RackConnected servers in the same
geographic region as your dedicated servers. Your saved server images
will only be available for creating servers in the same region as the
original server.

#### Which cloud account do I need for Rackconnect?

RackConnect may be used with both Managed Operations Service Level and
Managed Infrastructure accounts.

Be aware that the usual service-level limitations still apply for
RackConnect Cloud accounts, and you should use the appropriate account
type for the implementation based on your support requirements. It is
possible to use RackConnect with more than one cloud account, so you can
have a mix of both if you prefer.

#### I have Rackconnect v2.0, how can I build unconnected Cloud Servers?

During normal circumstances, if your Cloud account has been enabled with
RackConnect v2.0, your Cloud account is linked to your dedicated hosting
account and your dedicated servers will be able to communicate using the
service net with your Cloud Servers in the same region. If you wish to
provision Cloud Servers that are **not** linked to your dedicated
Rackspace Hosting account, there are a couple of ways you can work
around this condition.

1\) You can provision Cloud Servers in a region other than the one where
your dedicated servers are located. For example, if your dedicated
servers are in the DFW region, and your linked Cloud Servers are also in
the the DFW region, any Cloud Servers you provision in ORD or IAD will
not be linked to your dedicated servers and should function
independently.

2\) You can also sign up for a second Cloud account. The drawback of
doing this is that you will not be able to access any custom server
images between accounts.

#### How am I charged for bandwidth usage?

For Cloud Servers that are a part of your RackConnect configuration,
all network traffic will leave via the dedicated firewall device. The
traffic between the Cloud Servers and the RackConnect device travels
over the internal, unmetered Cloud ServiceNet. Any traffic between the
Cloud Servers and dedicated networks will similarly be unmetered and not
incur bandwidth charges.

The bandwidth usage costs for Internet related traffic entering and
leaving the RackConnect device is charged using Dedicated Hosting
bandwidth pricing plans. Our Sales representatives will discuss this in
more detail with you when you inquire about RackConnect.

------------------------------------------------------------------------

### Security

#### What are "Network Policies"?

RackConnect Network Policies are the equivalent of firewall rules that
are applied via the RackConnect web interface. These policies are then
applied to the firewall device and any Cloud Servers referenced.

The Network Policies are a useful means of centralising all your
firewall rules for the RackConnect device, any dedicated networks and
any RackConnected Cloud servers.

------------------------------------------------------------------------

### Monitoring and troubleshooting

#### My Cloud Servers have no network connectivity, what's wrong?

Please check the current RackConnect Network Policies in place to ensure
that the relevant access rules will permit the required connectivity.
For example creating an Internet-to-Cloud rule to permit traffic
originating from the Internet to reach your Cloud Servers.

If adjusting the Network Policies does not resolve the issue, please
contact Support via phone, chat, or ticket so that we can help
investigate this further with you.

------------------------------------------------------------------------

### Databases

#### Can Cloud Databases be used with Rackconnect?

Yes, RackConnect cloud servers can be used to connect to Cloud
Databases, but dedicated servers in a RackConnect configuration will not
be able to connect to Cloud Databases.

------------------------------------------------------------------------

### Network

#### Can I use RackConnect across different data centers?

No. Because RackConnect is intended to interconnect devices on a local
network, any involved servers need to be within the same data center.

If you have existing dedicated hardware, ensure that your Cloud account
is provisioned to build your Cloud Servers in the same data center.
Contact our Cloud support team for help with this. Rackspace has cloud
infrastructure in Chicago, Dallas, and Virginia in the US, and global
cloud infrastructure in London, Sydney, and Hong Kong.

#### I need VPN connectivity to my Cloud Servers. Can RackConnect help?

Yes, because RackConnect is a dedicated firewall, it is possible to
terminate a site-to-site VPN on the device, or to use a client-based
VPN. This enables secure VPN communication between your office or home
into the cloud environment.

------------------------------------------------------------------------

### General

#### Where can I find answers to questions about RackConnect v3.0?

See the [RackConnect v3.0
FAQ](/how-to/rackconnect-faq),
for question and answer items specific to this new version.

#### Does RackConnect enhance my ability to connect to my Cloud Files?

Most areas of our data centers have access to our &ldquo;ServiceNet&rdquo; in which
a customer can connect privately to our Cloud Files infrastructure
without traversing the public network (provided the cloud files are in
the same DC as the dedicated server making the connection). The older
areas of our DFW DC that do not have ServiceNet will need RackConnect to
connect to the cloud ServiceNet, which will allow for a private
connection to Cloud Files.

#### Can RackConnect be used if the dedicated firewall is already set up with multiple segments?

Yes. RackConnect connects your Rackspace Cloud as an additional
interface on your firewall; therefore it allows you to connect to a
firewall that has multiple segments set up if enough ports available.
Our data center can perform a visual inspection of the firewall to
ensure that there is an available port to connect to RackConnect.

#### Can I extend my Active Directory (AD) domain across RackConnect into the cloud?

Customer-owned Active Directory domains can be extended over
RackConnect. This includes Active Directory Domain Controllers in your
Dedicated environment or in your Cloud environment.

If you are planning to deploy Domain Controllers in the Cloud, and you
promote a Cloud Server to a Domain Controller, please make sure to
create a ticket and inform the RackConnect team about this change. You
will need to manually create a &ldquo;rackconnect&rdquo; user account on the Domain
and add this account to the &ldquo;Domain Admins&rdquo; Global Group. We will add
the &ldquo;DOMAIN\\rackconnect&rdquo; account to the RackConnect system instead of
&ldquo;rackconnect&rdquo; in order to get RackConnect to work with your Domain
Controller cloud server(s).

Additionally, Active Directory requires a large number of open ports to
function properly, so we highly recommended that you create RackConnect
Network Policies that allow full access between your Cloud and Dedicated
environments.

**IMPORTANT**: RackConnect Network Policies are limited to Port Ranges
of 100.  Please view the [Managing RackConnect Network
Policies](/how-to/managing-rackconnect-v20-network-policies)
article for further details.

**Note**: Connecting Cloud Servers to the Intensive Active Directory
Domains is not currently supported.

#### Can I have an additional private IP address on my RackConnected Cloud Servers for SSL routing?

Unfortunately our Cloud does not allow for additional IP addresses on
the private interface. The best work-around for hosting multiple SSL
sites would be to host each site on a separate Cloud Server, or utilize
PAT (Port Address Translation).

Please view the following article for further details on PAT: [Multiple
SSL Certificates on a Single RackConnected Cloud Server
(PAT)](/how-to/multiple-ssl-certificates-on-a-single-rackconnected-cloud-server-pat).

#### Can Cloud Load Balancers (CLB) be used with RackConnect?

Utilizing CLB can be a great solution. The key is to clearly understand
the use cases for this configuration. CLB works best when all servers to
be load balanced reside in the Cloud. If dedicated servers need to be
load balanced, or Cloud and Dedicated are to be load balanced together,
you should deploy RackConnect with an F5 load balancer. The firewall
used with RackConnect serves to further isolate and protect the
customers dedicated servers.

Also note that when using CLB with RackConnect, all internet traffic
comes and goes through the Cloud, and the customer will pay for all
outbound bandwidth at the standard CLB rate. This bandwidth is not
included in the &ldquo;included&rdquo; bandwidth that comes with each dedicated
server.

For further details, please view the article: [Using Cloud Load
Balancers with
RackConnect](/how-to/using-cloud-load-balancers-with-rackconnect)

#### Do pre-existing snapshots cause issues after an account is set up with RackConnect?

Snapshots taken of a server before the Cloud sccount was set up with
RackConnect should not pose a significant problem after the account is
set up with RackConnect. However, a problem can occur if the network
stack has been modified or iptables has been set to block all access
(which will block the RackConnect system from connecting). Specifically,
the snapshot must have a clean SSH configuration that permits root
login, with port 22 open in iptables, and accepts password
authentication.

#### Can I use First Generation Cloud Server customer images with Next Generation Cloud Servers?

On Friday Nov 2, 2012 Rackspace enabled our final set of images allowing
88% to 90% of our First Generation Servers to be eligible for a snapshot
migration to a Next Generation Server. Approximately 130,000 to 135,000
First Generation Cloud Servers can now easily make the transition over
to our Next Generation platform powered by OpenStack.

The snapshot migration feature allows a Rackspace customer to take a
snapshot of their eligible First Generation Cloud Server, and create a
new Next Generation Cloud Server from that snapshot. With a few button
clicks, a new Next Generation Cloud Server is up and running that is an
exact copy, data-wise, of their First Generation server. With this
option, customers will get a new Next Generation cloud server with a new
IP address, but will experience no downtime.

#### Can I migrate my first generation Cloud Servers to next generation Cloud Servers?

There will not be an automated migration process available upon launch,
but we anticipate that one will be made available in the coming months.

#### How do I retrieve the public IP adress for a Next Generation Cloud Server that has been recently provisioned?

You can view the public IP address of your RackConnect Cloud Server in
the following places:

-   In the RackConnect Management Interface of the
    [MyRackspace](https://my.rackspace.com/) portal, view the IP address
    on the Overview tab for the server.

<!-- -->

-   You can retrieve the public IP address through the Cloud Servers API
    by querying for Server Details. The field containing the RackConnect
    Public IP address is called *accessIPv4*. For details about using
    the API to retrieve server information, see the [Get Server
    Details](https://developer.rackspace.com/docs/cloud-servers/v2/developer-guide/#document-getting-started/create-server/get-server-details)
    section in the Cloud Servers v2 Developer Guide .

#### Can I use next generation Cloud Server Images to Create Cloud Servers in different regions?

It is not currently possible to use next generation Images (snapshots)
created in one region to spin up Cloud Servers in a different region. We
expect this functionality to be available in late 2013.

Due to the limitation above, if you would like to use generation Cloud
Server Images with RackConnect, please follow this process:

1.  Make sure to create a next generation Cloud Server in the same
    region as your RackConnect Configuration.
2.  Once the cloud server is deployed and configured as you would like,
    you can create an Image (snapshot) of it.
3.  You can now create new next generation Cloud Servers from this
    Image, as long as they are created in the same region your
    RackConnect Configuration is located.

**Note**: If you have existing next generation Images that were created
in a different region than where your RackConnect configuration is
located, then it will not be possible to use them with RackConnect until
the first half of 2014 (expected timeframe).

------------------------------------------------------------------------

### Security tools

#### Can I use Rackconnect as a firewall for my Cloud Servers?

Yes, you can.

By default the Cloud Servers are directly exposed to the Internet and
only the internal OS firewall is available for protection. RackConnect
may be deployed as a front-end dedicated firewall to provide a single
entry point for public traffic to all your cloud servers. In addition it
allows a single point to consolidate your firewall rules for all cloud
servers through the use of RackConnect Network Policies.

