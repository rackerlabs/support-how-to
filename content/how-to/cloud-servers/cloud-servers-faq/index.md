---
permalink: cloud-servers-faq
audit_date: '2020-11-05'
title: Cloud Servers FAQ
type: article
created_date: '2015-12-01'
created_by: Rackspace Support
last_modified_date: '2020-11-05'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

### Getting started

{{<accordion title="I want to install version x.y of software in Linux, but your system doesn't allow me to? How do I install it?" col="in" href="accordion1">}}

The repository for your operating system's package manager probably has an
older approved version. If so, you must remove that installation and then
compile the newer version yourself. Refer to the software vendor for instructions.
{{</accordion>}}
{{<accordion title="Will you help me install my software package?" col="in" href="accordion2">}}

It depends on your service level. For Managed Infrastructure Cloud
accounts, you are responsible for installing and maintaining all
software on your server. If your account has a Managed Operations service
level, Rackspace provides support for specific software and server configurations
on Cloud Servers. For more information about supported systems and third-party
packages, see [Linux Spheres of Support for Dedicated and Managed Operations](/support/how-to/linux-spheres-of-support-for-dedicated-and-managed-ops).
{{</accordion>}}
{{<accordion title="What programming languages or applications are supported?" col="in" href="accordion3">}}

You can configure all of our Cloud Servers as development stacks,
database servers, and web servers. Apache&reg;, Lighttpd&reg;, Mongrel&reg;, and Visual
Studio&reg; are some options.

You can use the programming language of your choice to interact with
Cloud Servers.
{{</accordion>}}
{{<accordion title="Do you host DNS?" col="in" href="accordion4">}}

Yes. The Cloud Control Panel has a DNS menu for maintaining domain records for
your Cloud Servers. For more information, see [Create DNS records for Cloud Servers with the Control Panel](/support/how-to/create-dns-records-for-cloud-servers-with-the-control-panel).
{{</accordion>}}
{{<accordion title="What are the DNS servers for my Cloud Server?" col="in" href="accordion5">}}

**ns.rackspace.com** and **ns2.rackspace.com**
{{</accordion>}}
{{<accordion title="How many domains can I host?" col="in" href="accordion6">}}

Because you are in control of everything on your server, there is no limit.
{{</accordion>}}
{{<accordion title="I'm kind of new to this. Will it be difficult?" col="in" href="accordion7">}}

The answer depends largely on your experience as a Systems Administrator
for Linux or Windows Server. Our Linux servers are full Linux
distributions with root-level access. Our Windows servers give you
Administrator access, and we built them with nothing but the default
applications on installation. We designed our Cloud Servers offering for customers who
want to start from scratch and tune a system for their own purposes.

If you are uncomfortable in the System Administrator role, we also offer a
[Managed Operations service level](https://www.rackspace.com/cloud).
{{</accordion>}}
{{<accordion title="What level of support comes with Cloud Servers?" col="in" href="accordion8">}}

We have two service levels: **Managed Infrastructure** and **Managed
Operations**.

At the Managed Infrastructure level, we support the
server hardware, data center environment, and Internet connectivity, but
we do not support the software installed on your server, including the
operating system and its configuration. When you provision a cloud
server, you get a server with unrestricted access. The Managed
Infrastructure support team does not help to install
software or troubleshoot any issues related to the installed software.
We have some articles in the Rackspace How-To covering the basic
installation of common applications.

The [Managed Operations service](/support/how-to/linux-spheres-of-support-for-dedicated-and-managed-ops)
level provides additional support on Cloud Servers, including monitoring,
operating system and application infrastructure-layer support, and
technical guidance.
{{</accordion>}}
{{<accordion title="What can I do with a Cloud Server?" col="in" href="accordion9">}}

The Rackspace Cloud Servers solution is a fully unrestricted Linux or Windows environment
with root or Administrator level access. If you can run an application or service from a traditional,
physical, dedicated-unmanaged operations server, you can run it from your Cloud Server.
{{</accordion>}}
{{<accordion title="Can I reinstall a different distribution or start over?" col="in" href="accordion10">}}

Yes! Select the **Rebuild** option in the Cloud Control Panel to select
a new distribution. However, be sure to back up your data first because this
process destroys any data on the server. The rebuild process does allow
you to save your IP address.
{{</accordion>}}
{{<accordion title="What if I mess up my Cloud Server?" col="in" href="accordion11">}}

You can [reboot your server](/support/how-to/reboot-your-server).
You can [restore from a backup](/support/how-to/create-an-image-of-a-server-and-restore-a-server-from-a-saved-image).
You can [boot into an emergency rescue mode](/support/how-to/rescue-mode)
and attempt to fix the problem. You have many options to recover from
mistakes, but the easiest is to keep regular backups and
[make a fresh backup](/support/how-to/best-practices-for-backing-up-your-data-cloud-block-storage-versus-cloud-backup)
before attempting any major configuration changes or installing
new software.
{{</accordion>}}

------------------------------------------------------------------------

### Account services

{{<accordion title="Are Rackspace Cloud Servers HIPAA compliant?" col="in" href="accordion12">}}

Rackspace cannot determine if a given customer is meeting their
obligations under the laws applicable to them. It remains our
customers' obligation to understand the laws applicable to their use of
the services and select appropriate services to meet those obligations.
We understand the needs of many of our customers in the healthcare
space to implement appropriate security measures to protect the
sensitive information they work with.

To help customers in the healthcare industry meet their compliance
requirements with regards to HIPAA, Rackspace offers a [Business Associate Agreement](https://www.rackspace.com/information/legal/hipaabaa) in all
of our dedicated hosting services segments, and we include it by
default in our agreements with customers for those services.
{{</accordion>}}
{{<accordion title="How do Cloud Servers prevent my data from potentially becoming visible when a server is deleted?" col="in" href="accordion13">}}

For your security, the Virtual Hard Drive (VHD) on the hypervisor is
deleted when you request a server deletion. After deletion, you cannot retrieve data
and do not have logical or direct access to the physical drive.
{{</accordion>}}
{{<accordion title="Can I read your SLA?" col="in" href="accordion14">}}

Yes. Go to [https://www.rackspace.com/information/legal/cloud/sla](https://www.rackspace.com/information/legal/cloud/sla).
{{</accordion>}}
{{<accordion title="How do I contact Support?" col="in" href="accordion15">}}

At Rackspace, our goal is to make the cloud easy for you to use. To meet
that goal, we have created many different ways for you to get the
support you need to get the most out of the cloud.

-   Your first stop should be [Rackspace How-To](/support/how-to/), which is the best
    source for articles and tutorials to help you get the precise
    answers you need.
-   Do you have a quick question that you can't find an answer for in the
    Rackspace How-To? As part of the Rackspace Fanatical Experience&trade;, open
    Chat and talk with our Support staff anytime, 24x7x365.
-   Do you have a specialized Service Request, or are you experiencing a
    problem with our service? Open a ticket. In the Rackspace
    [Cloud Control Panel](https://login.rackspace.com), select
    **Tickets > Create Ticket** to open a ticket directly with our support
    teams to report a problem or make a service request.
-   Call us 24x7x365 at 800 961 4454 (toll-free) or +1 512-361-4935 (international).
{{</accordion>}}

------------------------------------------------------------------------

### Server management

{{<accordion title="What do I enter in the Server Name field?" col="in" href="accordion16">}}

The information you enter in the **Server Name** field helps you
identify this server in the API and Cloud Control Panel. The name
you enter when you create a server is used as the server's hostname. If
you rename the server later, the name displays in the API, and
Cloud Control Panel is updated. However, the hostname on the computer
is not updated.
{{</accordion>}}
{{<accordion title="" col="in" href="accordion17">}}
Can I connect to a server by using the server name?

To connect to the server from outside of the server's local network, you
need to configure an `A` record in Cloud DNS. To access Cloud DNS, go to the
top navigation bar of the Cloud Control Panel and select **Networking >
Cloud DNS**.

For example, if you name your server **MyWebServer1.MyExampleDomain.com**,
you must add an `A` record for **MyWebServer1.MyExampleDomain.com**
to your DNS zone ([MyExampleDomain.com](https://myexampledomain.com/))
that points to the public IP address of the server. The information
you enter in the **Server Name** field helps you identify this server in
the API and [Cloud Control Panel](https://login.rackspace.com).
{{</accordion>}}
{{<accordion title="How do I set up reverse DNS setup for my server?" col="in" href="accordion18">}}

You can set up reverse DNS from the Cloud Control Panel. For instructions,
see [Create a reverse DNS record.](/support/how-to/create-a-reverse-dns-record)
{{</accordion>}}
{{<accordion title="What are PVHVM images?" col="in" href="accordion19">}}

PVHVM refers to the virtualization mode used by the hypervisor to run
the virtual machine (VM). PVHVM images are VM images that use
the PVHVM virtualization mode. In general, PVHVM offers better
performance than PV, especially for disk and network I/O, but it is not well
supported in Linux operating systems with a kernel version earlier than
2.6.36. The availability of PV and PVHVM images in the Rackspace Cloud
is determined by the effectiveness of each virtualization mode for that
particular operating system.

**Note**: Work-optimized servers (Compute, I/O, and Memory) require
PVHVM images. If you try to create a work-optimized server by using a
non-PVHVM image, the following error message is displayed:
`Image cannot be built with provided flavor`.

For more information about PVHVM, see [Choosing a virtualization mode (PV versus PVHVM)](/support/how-to/choosing-a-virtualization-mode-pv-versus-pvhvm).
{{</accordion>}}
{{<accordion title="Is there a throughput limit on my server's network interface card?" col="in" href="accordion20">}}

The amount of network throughput varies based on the flavor of the server.
For more information, see [the Pricing page in the main Rackspace website](https://www.rackspace.com/cloud/public-pricing/#cloud-servers).
{{</accordion>}}
{{<accordion title="Do you offer internal IP addresses?" col="in" href="accordion21">}}

Yes. Each server comes with an internal IP address that is used to
communicate between servers. The traffic that flows over this interface
(eth1) on your server is unmetered and is not billed. This network, also
known as ServiceNet, is an internal-only,
multitenant network connection within each Rackspace data center.
ServiceNet IP addresses are not accessible from the public Internet and are local
per data center. You can also deploy with Cloud Networks, which are single-tenant.
{{</accordion>}}
{{<accordion title="Can I buy extra public IP addresses?" col="in" href="accordion22">}}

Yes. For more information, see [Requesting Additional IPv4 Addresses for Cloud Servers](/support/how-to/requesting-additional-ipv4-addresses-for-cloud-servers).
{{</accordion>}}
{{<accordion title="I want to set up multiple servers from the same image. Can I do this?" col="in" href="accordion23">}}

As a Cloud Servers customer, you can create both on-demand
images and scheduled images of your Cloud Server. Because we store all server
images in your Cloud Files account, you can keep these images even after you delete the
server you used to create them. It also gives you the flexibility to create an unlimited
number of on-demand images of your server. YOu can use all Cloud Server images to create
new Cloud Servers or to restore an existing Cloud Server.
For details, see [Create an image of a server and restore a server from a saved image](/support/how-to/create-an-image-of-a-server-and-restore-a-server-from-a-saved-image).
{{</accordion>}}
{{<accordion title="Do you offer on-demand images (snapshots) and scheduled images and what are the prices?" col="in" href="accordion24">}}

You can create an image of any General Purpose Cloud Server, and you can
use this image to restore a server or clone a new one. You can create an
unlimited number of images on-demand, or you can schedule an automatic
daily or weekly image.

Images are compressed and stored on Rackspace Cloud Files at the
[current storage rates](https://www.rackspace.com/openstack/public/pricing).
Please also read this list of [snapshot limitations](/support/how-to/rackspace-cloud-essentials-cloud-server-image-limitations).

If you are using a virtual Cloud Server, see [Create an image of a server and restore a server from a saved image](/support/how-to/create-an-image-of-a-server-and-restore-a-server-from-a-saved-image)
for more information about the image options associated with virtual cloud
servers.
{{</accordion>}}
{{<accordion title="Can I use the GUI interface for my Linux Cloud Server?" col="in" href="accordion25">}}

Yes. For instructions on how to install VNC and X-Windows, see
[Install VNC on a Cloud Server](/support/how-to/vnc-install "VNC Install").
Note that using a GUI requires a large amount of bandwidth on your server.
{{</accordion>}}
{{<accordion title="Do you have a Control Panel?" col="in" href="accordion26">}}

Yes, the Rackspace [Cloud Control Panel](https://login.rackspace.com)
is a web-based management interface for restarting your Cloud Server,
starting support discussions, viewing stats, and scheduling snapshots.
To learn more about the Cloud Control Panel, see
[Introducing the Rackspace Cloud Control Panel](/support/how-to/introducing-the-rackspace-cloud-control-panel).
However, we do not offer a control panel like **Plesk** or **cPanel**. You're free to
install them on your Cloud Server. If you are installing cPanel, be
sure to install it on a clean (empty) server.
The use of Plesk or cPanel is not supported and strongly discouraged for customers under
the Managed Operations SLA because it interferes with our server administration.

Also, consider installing the free monitoring agent on your
server and using the [Rackspace Intelligence dashboard](https://intelligence.rackspace.com/),
which offers many of the same functions as a control panel.
{{</accordion>}}
{{<accordion title="Do you provide Console access?" col="in" href="accordion27">}}

Yes, via an HTML5 web terminal that you can access through the Cloud Control Panel. On the
details section for your server, click **Actions > Emergency Console**.

**Note**: Console access is via a secure HTTP connection, which is
a different connection from the traditional way to connect via SSH for
Linux or RDP for Windows. Console can be a useful troubleshooting tool
if your server is unresponsive or you have locked yourself out.
{{</accordion>}}
{{<accordion title="Can I reboot my server?" col="in" href="accordion28">}}

Yes. On the server details page for the server in the Cloud Control Panel,
select **Actions > Reboot**. Use this method if the server is unresponsive.
{{</accordion>}}
{{<accordion title="Am I billed if my server is powered off?" col="in" href="accordion29">}}

Yes. You are billed for the resources used on the host
while your server is in the **Active** status. When you create your server,
you get a dedicated amount of RAM and hard drive space.
As long as your server exists, no one else can use those
resources that have been allocated to you, which is why you are billed
per hour even while powered off. If you want to stop incurring
charges for a given server, you must delete that server in the control
panel.

If you want to stop paying for a server but still need to retain the
configurations, your best option is to
[create an image](/support/how-to/create-an-image-of-a-server-and-restore-a-server-from-a-saved-image)
of the server. The image, saved in Cloud Files and accessible in the Control Panel,
preserves the system configurations on your system disk. The
fee associated with Cloud Files storage is much less than the
cost of an active server. You must also save the data from your
data disk to Cloud Block Storage or Rackspace Cloud Backup to have
available on your next server. Then you are free to delete the
original server, knowing that you can provision a new server
by using the saved image of the old server and your saved data.

After you restore your server from the saved image, the primary difference
will be that your new server has a different IP address from the old
one. Putting the new server into production might require you to update
any associated DNS records to reflect the new IP address.
{{</accordion>}}
{{<accordion title="How do I power on my server after shutting it down?" col="in" href="accordion30">}}

Instructions are located in [Reboot a server](/support/how-to/reboot-a-server)
{{</accordion>}}
{{<accordion title="Which distributions do you offer?" col="in" href="accordion31">}}

To see the Linux distributions and Windows operating systems that we have
available, go to the Cloud Control Panel, click
**Select a Product > Rackspace Cloud**, **Servers > CloudServers**, and
then **Create Server**.
{{</accordion>}}
{{<accordion title="Can I upgrade my server later?" col="in" href="accordion32">}}
If you have a General Purpose server, you can change the size of your
data storage space in one of the following ways:

-   Increase available storage with Cloud Block Storage. For more
    information on Cloud Block Storage, see [Create and Attach a Cloud
    Block Storage Volume](/support/how-to/create-and-attach-a-cloud-block-storage-volume).
-   Migrate to a larger size server with more RAM, disk space,
    and vCPUs. For more information about resizing, see
    [Upgrade resources for General Purpose or I/O optimized Cloud Servers](/support/how-to/upgrading-resources-for-general-purpose-or-io-optimized-cloud-servers).
{{</accordion>}}
{{<accordion title="How many users go onto each host machine?" col="in" href="accordion33">}}

The number of customers on a Cloud Server host machine depends on the
size of the customers' servers and the type of operating system.
{{</accordion>}}
{{<accordion title="Can I buy extra storage?" col="in" href="accordion34">}}

The native storage allocation for a Cloud Server is based on the
Cloud Server flavor that you select, but you can add extra storage at
any time with our [Cloud Block Storage](https://www.rackspace.com/openstack/public/block-storage) service.
{{</accordion>}}
{{<accordion title="Can I install the Rackspace Private Cloud on virtual machines?" col="in" href="accordion35">}}

Rackspace strongly recommends that you install Rackspace Private Cloud
on physical hardware nodes. Only perform installation on virtual platforms for
evaluation purposes.
{{</accordion>}}
{{<accordion title="What is live migration?" col="in" href="accordion36">}}

Live migration consists of moving a virtual server from one host hypervisor
to another by using virtual memory streaming. A duplicate of the original virtual
server is created on another host, in real-time, from the disk contents, right
down to the last byte of RAM in use. When the process is ready, the original
virtual server is switched to the new one.

By using live migration means that, where possible, you can move your workloads
off of a host that needs to be patched and rebooted to a host that is already
updated. During live migration, most customers experience no downtime. A small
percentage might notice a brief pause in their workloads, but the result is
generally of low impact compared to a full reboot of a host and virtual server.
{{</accordion>}}

------------------------------------------------------------------------

### Performance
{{<accordion title="What is the difference between Standard, General Purpose, and work-optimized servers?" col="in" href="accordion37">}}
What is the difference between Standard, General Purpose, and work-optimized servers?

There are several noteworthy differences between Standard, General Purpose, and work-optimized Cloud Servers:

-   General Purpose servers use faster solid-state drives (SSD)
    than the standard spinning disk allocation for Standard servers.
-   Only work-optimized servers (I/O, Compute, or Memory flavors) can boot from Cloud Block Storage.
-   For both General Purpose and Standard servers, you can choose the size of your system disk (50 GB-1 TB),
    but the system disk is fixed for work-optimized servers.
-   Up to 240 GB of RAM is available on work-optimized servers (Memory flavor), whereas
    Standard servers provide up to 30 GB of RAM.
-   You can have up to 32 vCPUs running on work-optimized servers, compared to the
    maximum of 8 on the Standard Cloud Servers.
-   Maximum network throughput on Standard servers is 600 Mbps public and 1200 Mbps private network.
    Maximum network bandwidth on work-optimized servers is 5Gbps public and 10Gbps private network.

For more information about General Purpose servers, see [New features in General Purpose and work-optimized Cloud Servers](/support/how-to/new-features-in-general-purpose-and-work-optimized-cloud-servers).
{{</accordion>}}

------------------------------------------------------------------------

### Billing and account

{{<accordion title="Do you offer discounts for Cloud Servers?" col="in" href="accordion38">}}

Yes. We offer different types of discounts based on usage. For details, see
the [Cloud Servers discounts page](https://www.rackspace.com/cloud/servers/discounts/).
{{</accordion>}}

------------------------------------------------------------------------

### Security

{{<accordion title="Are Cloud Servers PCI-DSS compliant?" col="in" href="accordion39">}}
For information about PCI-DSS, see [Cloud Security Solutions](/support/how-to/are-cloud-servers-pci-dss-compliant).
For information about PCI-DSS for Rackspace Dedicated Hosting
services, see [Rackspace Compliance Assistance](https://www.rackspace.com/managed-security-services/compliance-assistance).
{{</accordion>}}
{{<accordion title="Can I run a firewall on my server?" col="in" href="accordion40">}}

Yes, and we encourage it! Each Linux server is capable of running
the Linux-standard firewall called iptables; some even have it
pre-configured. Other firewall systems have been tested on Cloud Servers
as well.
{{</accordion>}}
{{<accordion title="What are security groups?" col="in" href="accordion41">}}

Security groups are a named collection of network access rules
that enable Rackspace Public Cloud users the ability to specify the
types of traffic that may pass through, to, and from ports
(PublicNet and ServiceNet) on a Cloud Server instance. A security group is a
container for security group rules. After you launch an instance, you
can assign one or more security groups to ports on that instance.
Security groups act as a stateful firewall for your Cloud Server
instances.
{{</accordion>}}
{{<accordion title="What happens when a security group rule is added to a security group?" col="in" href="accordion42">}}

Traffic matching the security group rule is allowed to go through.
{{</accordion>}}
{{<accordion title="Can I apply security groups to ports on an instance at boot time?" col="in" href="accordion43">}}

No. Security groups can only be applied only after the instance is active.
{{</accordion>}}
{{<accordion title="Is there a default security group that gets applied to my instances?" col="in" href="accordion44">}}

No default security group is applied. You just create a Security Group and
apply it to the ports on an instance.
{{</accordion>}}
{{<accordion title="Are security groups supported for OnMetal users?" col="in" href="accordion45">}}

No. Security Groups are currently supported only for virtual cloud servers.
{{</accordion>}}
{{<accordion title="Will the security group feature be integrated and available to use via the Cloud Control Panel?" col="in" href="accordion46">}}

NO. Customers can use either the neutron client or the API to manage security groups.
{{</accordion>}}
{{<accordion title="Are security groups supported via the neutron client?" col="in" href="accordion47">}}

Yes. Users can provision security groups by using the neutron client.
{{</accordion>}}
{{<accordion title="Are security groups on Cloud Networks supported?" col="in" href="accordion48">}}

Yes. For additional information, see [Cloud Networks API Getting Started](https://docs.rackspace.com/docs/cloud-networks/v2/getting-started/concepts/#security-groups-and-rules-concepts).
{{</accordion>}}
{{<accordion title="Are Outbound Security Groups supported?" col="in" href="accordion49">}}

Yes. For additional information, see [Cloud Networks API Getting Started](https://docs.rackspace.com/docs/cloud-networks/v2/getting-started/concepts/#security-groups-and-rules-concepts).
{{</accordion>}}
{{<accordion title="Is the security group feature available to all Cloud users?" col="in" href="accordion50">}}

Security groups are supported only for Managed Infrastructure,
non-RackConnect customers.
{{</accordion>}}
{{<accordion title="Is the security group feature available to all Cloud users?" col="in" href="accordion51">}}

Security groups have Global Availability in all data centers.
{{</accordion>}}
{{<accordion title="What are the benefits of using security groups?" col="in" href="accordion52">}}

Before this feature was available, customers had to manage traffic
to and from their instances individually via, for example, iptables rules on
every instance (or perhaps use third-party tools), incurring significant management
overhead. Security groups make it possible to use a self-service API to define a
common set of rules and apply them to the neutron ports (Public/ServiceNet) on cloud
servers without needing to configure iptables rules on each server, thereby simplifying
administration of security policies.
{{</accordion>}}
{{<accordion title="Is there a limit to the number of security group rules per user?" col="in" href="accordion53">}}

During Limited Availability, there is an aggregate limit of 100 security group rules per user.
Contact Rackspace Support if you need this limit raised.
{{</accordion>}}
{{<accordion title="Is there a limit to the number of rules per security group?" col="in" href="accordion54">}}

There is a limit of 20 security group rules per security group.
Contact Rackspace Support if you need this limit raised.
{{</accordion>}}
{{<accordion title="How many security groups can I apply per port?" col="in" href="accordion55">}}

Up to 5 security groups are allowed per port. Contact Rackspace
Support if you need this limit raised.
{{</accordion>}}
{{<accordion title="Are security groups applied to instances?" col="in" href="accordion56">}}

We apply security groups to neutron ports (PublicNet and ServiceNet)
on Cloud Server instances.
{{</accordion>}}
{{<accordion title="Can I have a security group with no rules?" col="in" href="accordion57">}}

Yes. Such a security group denies or blocks all traffic.
{{</accordion>}}
{{<accordion title="What kinds of traffic can be matched by the security group rules?" col="in" href="accordion58">}}

Security groups match TCP, UDP, and ICMP traffic in addition to traffic from a
source IPv4 or IPv6 IP address or CIDR.
{{</accordion>}}
{{<accordion title="Is there any traffic that is permitted or allowed by default by security groups?" col="in" href="accordion59">}}

DNS responses from Rackspace Provider DNS servers (UDP source port 53 )
are allowed by default even if they are not explicitly allowed by a
security group.

TCP flags ACK and RST are also permitted by default.
{{</accordion>}}
{{<accordion title="What are the maximum limits for the Cloud Servers service?" col="in" href="accordion60">}}

The maximum limits are as follows:

| Limit Name              | Description                                                                                                                            | Value  |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------|--------|
| maxImageMeta            | The maximum number of metadata key-value pairs associated with a particular image.                                                     | 40     |
| maxPersonality          | The maximum number of file path/content pairs you can supply when building or rebuilding a server.                                      | 5      |
| maxPersonalitySize      | The maximum size, in bytes, for each personality file.                                                                                 | 1000   |
| maxServerMeta           | The maximum number of metadata key-value pairs associated with a particular server.                                                    | 40     |
| maxTotalCores           | This limit is disabled, so no limits exist on the total number of cores.                                                               | -1     |
| maxTotalInstances       | The maximum number of Cloud Servers that can exist in your account at any one time.                                                    | 100    |
| maxTotalPrivateNetworks | The maximum number of isolated networks that you can create. Set to 0 when Cloud Networks is disabled, 10 when Cloud Networks enabled. | 10     |
| maxTotalRAMSize         | The maximum total amount of RAM (MB) of all Cloud Servers in your account at any one time.                                             | 131072 |
{{</accordion>}}
{{<accordion title="When a Cloud Server is deleted how is the data removed from the host server?" col="in" href="accordion61">}}

Cloud Servers use VHD storage. When you delete a server, the systems ecurely and immediately
deletes the VHD file. You cannot recover a deleted server.
{{</accordion>}}

------------------------------------------------------------------------

### API

{{<accordion title="Where are your APIs?" col="in" href="accordion62">}}

You can find the documentation for the API for Cloud Servers and our other products
on the [Rackspace Developer Docs site](https://docs.rackspace.com/docs/).

Before you can start using our APIs, you need your API Key. You can
obtain your API key by following the instructions in
[View and reset your API key](/support/how-to/view-and-reset-your-api-key).
{{</accordion>}}
