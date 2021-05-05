---
permalink: cloud-files-faq
audit_date:
title: Cloud Files - FAQs
type: article
created_date: '2015-12-03'
created_by: Rackspace Support
last_modified_date: '2018-10-24'
last_modified_by: Kate Dougherty
product: Cloud Files
product_url: cloud-files
---

### Getting Started

{{< accordion title="How can I get live support for Cloud Files?" col="in" href="accordion1" >}}

Support is available by email at
[cloudfiles@rackspace.com](mailto:support@rackspacecloud.com "mailto:support@rackspace.com")
Monday through Friday, 9AM to 5PM CST. Tech support will be happy to
answer any questions you have about Cloud Files, except for code related
issues. If you do have questions about design or coding please try our
forums or documentation.
{{< /accordion >}}

{{< accordion title="What is a container in Cloud Files?" col="in" href="accordion2" >}}

A container is a "storage compartment" for your data and provides a way
for you to organize that data. You can think of a Container as analogous
to a folder in Windows&reg; or a directory in UNIX&reg;. The primary difference
between a container and these other "file system" constructs is that
containers cannot be nested. You can have up to 500,000 Containers in
your account, but they only exist at the "top level" of your account and
containers cannot reside within other containers.

Containers scale to about one million objects before
performance degrades. Containers can only be removed from Cloud Files if
they do NOT contain any storage Objects. In other words, make sure the
container is empty before attempting to delete it.

{{< /accordion >}}

{{< accordion title="What are the naming requirements for Cloud Files objects and containers?" col="in" href="accordion3" >}}

The naming requirements for Cloud Files objects and containers (such as
illegal characters and name length limits) include:

-   Container names may not exceed 256 bytes and cannot contain a
    slash (/) character.
-   Object names may not exceed 1024 bytes, but they have no
    character restrictions.
-   Object and container names must be URL-encoded and UTF-8 encoded.
{{< /accordion >}}

{{< accordion title="How do I access Cloud Files?" col="in" href="accordion4" >}}

First you must make sure you have generated a valid API Access Key. Then
you can use either the Cloud Files user interface in the Rackspace [Cloud
Control Panel](https://login.rackspace.com/) or one of our programming
interfaces.

See [Cloud Files and CDN](/support/how-to/getting-started-with-cloud-files-and-cdn/) for more details.
{{< /accordion >}}

{{< accordion title="What does *eventual consistency* mean in Cloud Files?" col="in" href="accordion5" >}}

A key characteristic of Cloud Files is *eventual consistency*. In computing, the CAP (Consistency, Availability, and Partition Tolerance) theorem states that distributed systems cannot achieve consistency, availability, *and* network failure tolerance; they can achieve only two. For example, a system can be consistent (that is, all reads get the most current data) and handle network failures, but must sacrifice availability to do so. Or, a system can choose to handle network failures and have perfect availability, but must sacrifice consistency to do so. Distributed systems must always handle network failures, so they must choose to sacrifice either availability or consistency.

Storage systems become distributed as they grow. OpenStack Swift (the basis for the Rackspace Cloud Files service) sacrifices consistency for availability and network failure tolerance. This choice enables the system to scale to enormous levels and to provide massive uptime, but it also means that in certain scenarios some data might not be updated throughout the entire system. For example, a container listing might not be updated immediately after an object is written. OpenStack Swift queues the container listing update and allows the object write to succeed. This sort of consistency model is called *eventual consistency*.
{{< /accordion >}}

{{< accordion title="Where can I find Cloud Files documentation?" col="in" href="accordion6" >}}

-   [Cloud Files Developer Guide](https://docs.rackspace.com/docs/cloud-files/v1/developer-guide/)
-   [Cloud Files Getting Started Guide](https://docs.rackspace.com/docs/cloud-files/v1/developer-guide/#document-getting-started)

------------------------------------------------------------------------
{{< /accordion >}}

### Account Services

{{< accordion title="Can Cloud Files be used for my Cross-domain policy file?" col="in" href="accordion7" >}}

No. The Cloud Files CDN does not support exposing a custom
**crossdomain.xml** file, as this is a required file by the OpenStack Swift
project. OpenStack Swift uses this as a global configuration file for
the installation, and can not be modified for multiple tenants, such as
our Public Cloud.
{{< /accordion >}}

{{< accordion title="Is there a Cloud Files specific SLA?" col="in" href="accordion8" >}}

Please click here to view [The Rackspace Cloud Terms of Service](https://www.rackspace.com/cloud/legal/).

------------------------------------------------------------------------
{{< /accordion >}}

### Security
{{< accordion title="Why does uploading a file in the Cloud Control Panel set the Allow-Origin header on my container?" col="in" href="accordion9" >}}

When you upload a file in the Cloud Control Panel, an `Allow-Origin`
header is set on the container to support cross-origin resource sharing
(CORS). Browsers prevent AJAX requests between different domains by
default. Because the Cloud Files API and the Cloud Control Panel reside on
different domains, CORS must be enabled to support uploads directly to a
container. When the upload succeeds, the CORS headers are removed.

By allowing the browser to upload directly to the Cloud Files API,
maximum upload performance can be achieved.

Read more about CORS at
<https://en.wikipedia.org/wiki/Cross-origin_resource_sharing> .
{{< /accordion >}}

{{< accordion title="How do permissions work?" col="in" href="accordion10" >}}

There are no permissions or access controls around containers or objects
other than being split into separate accounts. Users must authenticate
with a valid user name and API Access Key, but once authenticated, they
can create or delete containers and objects only within that account.

At this time, there is no way to publicly access the objects stored in
Cloud Files unless that container is published to CDN. Each request to
Cloud Files must include a valid "storage token" in an HTTP header
transmitted over a HTTPS connection.

------------------------------------------------------------------------
{{< /accordion >}}

### Cloud Files Streaming

{{< accordion title="Why have we chosen to support specific players?" col="in" href="accordion11" >}}

Many Rackspace customers are not flash developers, but still want to use
a streaming offer. There are a few players that are dominating the
market, and we will plan to support each of them. Custom plugins are
required in order for Streaming delivery to work properly over the
Akamai network. As Akamai adds support for more players, our customers
will have access to them.
{{< /accordion >}}

{{< accordion title="Why are we not using RTMP?" col="in" href="accordion12" >}}

RTMP is probably the most popular delivery format today, but the market is quickly moving towards HTTP delivery for Streaming content. Following are just a few reasons the market is moving towards HTTP:

-   Accessibility - Many firewalls block RTMP and RTSP streaming
    protocols because corporations don't want users watching video
    at work. HTTP appears to be normal web traffic, meaning that videos
    served over HTTP are usually left open.
-   Startup times - Akamai sees a significant reduction in stream startup
    times on average for traffic served via HTTP.
-   Throughput (image quality) - With the HTTP network being larger than
    many other networks, Akamai is closer to the end user on their HTTP
    network meaning they get better throughput of data. that means
    customers will experience higher bit rates uninterrupted (and
    without buffering) and increase the end user's over all experience.
{{< /accordion >}}

{{< accordion title="Is this available internationally?" col="in" href="accordion13" >}}

Yes, this is available to both US and UK Cloud customers.

------------------------------------------------------------------------
{{< /accordion >}}

### Content Delivery Network
{{< accordion title="Does CDN management in Cloud Files support exposing a custom crossdomain.xml file?" col="in" href="accordion14" >}}

Cloud Files CDN does not support exposing a custom **crossdomain.xml** file
because this file is required by the OpenStack Swift project, on which
Cloud Files is based.

OpenStack Swift uses the **crossdomain.xml** file as a global configuration
file for installation. The file cannot be modified for multiple tenants,
such as our Rackspace Public Cloud.

For more information, see [Cross-domain Policy File](https://docs.openstack.org/developer/swift/crossdomain.html).

If your site requires a custom **crossdomain.xml** file, we suggest you take
a look at [Rackspace CDN](https://www.rackspace.com/cloud/cdn-content-delivery-network).
Rackspace CDN allows you to customize your configuration and define your
own origin web server.
{{< /accordion >}}

{{< accordion title="What is the TTL attribute in a Cloud Files container?" col="in" href="accordion15" >}}

When you create a container in Cloud Files and you make that container
public, the files within that container have a designated TTL. The TTL
is the time interval after which the CDN will reread the contents of the
container. For more information on how to mange the TTL attribute, see [Manage Time to Live (TTL) in a Cloud Files Container](/support/how-to/manage-ttl-in-a-cloud-files-container).
{{< /accordion >}}

{{< accordion title="What is the CDN?" col="in" href="accordion16" >}}

Using the Akamai content delivery network (CDN) service, Cloud Files brings you a powerful and easy way to publish content over a world-class industry leading CDN. For more information on how to use CDN with Cloud Files, see [Getting Started with Cloud Files and CDN](/support/how-to/getting-started-with-cloud-files-and-cdn).
{{< /accordion >}}

{{< accordion title="Who is Akamai?" col="in" href="accordion17" >}}

Akamai Technologies, Inc. is publicly traded: (NASDAQ: AKAM) company
founded in 1998. Akamai has a pervasive, highly-distributed cloud
optimization platform with over 73,000 servers in 70 countries within
nearly 1,000 networks.
{{< /accordion >}}

{{< accordion title="What will I experience when Akamai is implemented as my new CDN provider?" col="in" href="accordion18" >}}

Rackspace expects no customer impact during your transition to Akamai.
Once we flip the switch to have a customer's content served by Akamai,
Akamai will begin supporting both new URLs and all other existing CDN
provider URLs.

This means that CDN customers who currently have Limelight URLs coded
into their websites will continue to serve content using those URLs when
they are transitioned to Akamai, but they will be distributed over the
Akamai network. At this time, we do not have any plans to discontinue
the legacy URLs.

If a customer requests their URL (either in the Cloud Control Panel or through
API) for an object, they will be presented with a new Akamai URL. This
does not mean that old URLs are invalid. However, as Rackspace releases
new features like CNAME and SSL, customers will need to reference their
new Akamai URL instead of their legacy URL.
{{< /accordion >}}

{{< accordion title="Will customers have to change their code to use Akamai?" col="in" href="accordion19" >}}

No.
{{< /accordion >}}

{{< accordion title="Will customers have to do anything different in the Cloud Control Panel?" col="in" href="accordion20" >}}

No, as we add new features, we will educate our customers.
{{< /accordion >}}

{{< accordion title="Should customers anticipate any downtime during this implementation?" col="in" href="accordion20" >}}

No downtime is expected during the implementation of the Akamai
platform.
{{< /accordion >}}

{{< accordion title="Will the Cloud Files API be different?" col="in" href="accordion21" >}}

No, all customers facing API calls will remain the same.
{{< /accordion >}}

{{< accordion title="What are the benefits Of using a CDN?" col="in" href="accordion22" >}}

-   Higher capacity and scale- Strategically placed servers increase the
    network backbone capacity and number of concurrent users handled.
    For instance, when there is a 10 Mb/s network backbone and 100
    Mb/s central server capacity, only 10 Mb/s can be delivered. But
    when 10 servers are moved to 10 edge locations, total capacity can
    be 10*10 Mb/s.
-   Lower delivery costs - Strategically placed edge servers decrease
    the load on interconnects, public peers, private peers and
    backbones, freeing up capacity and lowering delivery costs. A CDN
    offloads traffic on a backbone network by redirecting traffic to
    edge servers.
-   Lower network latency and packet loss - End users experience less
    jitter and improved stream quality. CDN users can therefore deliver
    high definition content with high Quality of Service, low costs and
    low network load.
-   Higher Availability - CDNs dynamically distribute assets to
    strategically placed core, fallback and edge servers. CDNs may have
    automatic server availability sensing with instant user redirection.
    CDNs can thus offer 100% availability, even with large power,
    network or hardware outages.
-   Better Usage analytics - CDNs can give more control of asset
    delivery and network load. They can optimize capacity per customer,
    provide views of real-time load and statistics, reveal which assets
    are popular, show active regions and report exact viewing details to
    customers.

------------------------------------------------------------------------
{{< /accordion >}}

### File Transfers and File Sharing

{{< accordion title="Does Cloud Files support the transfer of large files?" col="in" href="accordion23" >}}

Yes, the Rackspace Cloud now supports the transfer and storage of larger
files. Following is a list of frequently asked questions about our large
file support.
{{< /accordion >}}

{{< accordion title="How does Rackspace support the upload of large files to Cloud Files?" col="in" href="accordion24" >}}

Although support for uploading content to Cloud Files through the Cloud
Control Panel is limited to files smaller than 5 GB, we can accommodate
the transfer of files larger than 5 GB by allowing you to segment your
files into multiple file segments.
{{< /accordion >}}

{{< accordion title="How large should my file segments be?" col="in" href="accordion25" >}}

Rackspace does not enforce any lower limits on the file size. File
segments cannot be larger than 5 GB, and we recommend not storing file
segments that are smaller than 100 MB.
{{< /accordion >}}

{{< accordion title="Can I serve my large files over the CDN?" col="in" href="accordion26" >}}

At this time, you cannot serve files larger than 10 GB from the CDN.
{{< /accordion >}}

{{< accordion title="Is there a simpler way to use this process?" col="in" href="accordion27" >}}

We have created a tool called Swift to make this process easier. Swift
segments your large file for you, creates a manifest file, and uploads
the segments accordingly. After it uploads the segments, Swift manages
the segments for you, deleting and updating them as needed. You can get
[information about the Swift Tool](https://docs.openstack.org/developer/swift/) and
[download](https://swiftstack.com/docs/integration/python-swiftclient.html)
the Swift tool.

{{< accordion title="When should I use the API instead of the Swift tool?" col="in" href="accordion28" >}}

If you are interested in developing against the Rackspace Large File
Support code to incorporate into your application, you should work
directly with the Cloud Files API. For more information, see [Use the API to manage large files](/support/how-to/use-the-api-to-manage-large-files).
{{< /accordion >}}

{{< accordion title="When should I use the Swift tool instead of the API, and what is the process?" col="in" href="accordion29" >}}

If you want to upload large files but do not want to incorporate our
code into an application, you might find it easier to use the [Swift tool](https://swiftstack.com/docs/integration/python-swiftclient.html) for
your uploads and management. For more information, see [Use Swift to manage large files](/support/how-to/use-swift-to-manage-large-files).
{{< /accordion >}}

{{< accordion title="What will the download experience be like?" col="in" href="accordion30" >}}

After files are segmented and uploaded with a manifest file, your large
file will be served as a single file, so the experience will mimic the
download or service of any other object retrieval.
{{< /accordion >}}

{{< accordion title="Do I have access to my file segments?" col="in" href="accordion31" >}}

Yes, you can edit your file segments just like any other object within
Cloud Files.
{{< /accordion >}}

{{< accordion title="How do I ensure that my files are linked correctly?" col="in" href="accordion32" >}}

Include your manifest file in your upload. You can change your file name
by editing this manifest file as well. We recommend using prefixing in
your file segments to easily map your manifest file to the portions of
your large file. For example, you could name your segments as follows:

        Myfavoritemovie-01
        Myfavoritemovie-02
        Myfavoritemovie-03
        ..etc..

In this case, you would point your manifest file to the prefix:
`Myfavoritemovie `.
{{< /accordion >}}

{{< accordion title="Can I use this feature from the Cloud Control Panel?" col="in" href="accordion33" >}}

At this time, Rackspace has not implemented this functionality into the
Rackspace Cloud Control Panel.

------------------------------------------------------------------------
{{< /accordion >}}

### Application Development
{{< accordion title="Where can I find Cloud File Developer Guides?" col="in" href="accordion34" >}}

Developer guides are available on the Rackspace API documentation site.
Documentation is available for the raw API and for language-specific
SDKs.

-   [Cloud Files API Getting Started Guide](https://docs.rackspace.com/docs/cloud-files/v1/developer-guide/#document-getting-started)
-   [Cloud Files Developers Guide](https://docs.rackspace.com/docs/cloud-files/v1/developer-guide/)
{{< /accordion >}}

{{< accordion title="Why does one of my Cloud Files scheduled tasks get terminated abruptly?" col="in" href="accordion35" >}}

The Rackspace Cloud system restricts the maximum execution time of any
one cron job to 15 minutes. Please make sure that your script is well
tested and can complete its intended job within this time frame.
{{< /accordion >}}