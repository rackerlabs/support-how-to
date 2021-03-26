---
permalink: why-choose-cloud-files/
audit_date: '2021-03-26'
title: Why choose Cloud Files? 
type: article
created_date: '2011-03-28'
created_by: Rackspace Support
last_modified_date: '2021-03-26'
last_modified_by: Carlos Arriaga
product: Cloud Files
product_url: cloud-files
---

There are several reasons to choose the Rackspace Technology [Cloud
Files](https://www.rackspace.com/cloud/files) service over similar services
available in the market:

- The simplicity of content delivery network (CDN) functionality
- Utility pricing &mdash;paying only for what you use, after you use it
- Multiple APIs for developers to choose from
- Fast and reliable performance
- World-class support

This article provides information about the benefits of using Cloud Files.

### Simplicity

Cloud Files is simple to use for developers and non-developers alike. You can get started
in as little as five minutes. You don't have to know how to code to use Cloud Files or a CDN.
Within minutes, you can sign up for Cloud Files, create a container, upload a file, and publish
that container's content through the CDN. The Cloud Files GUI is easy to navigate and use. The
Rackspace browser-based [Cloud Control Panel](https://login.rackspace.com/) enables you to easily
upload files and distribute them on a CDN without writing any code.

You can back all of the contents in a CDN without complex negotiations and details of updating
content for optimizing delivery. Given the complexity of the CDN, you might have to make a series
of choices, such as the number of servers to use before obtaining the service. After making the
choices, you must ensure that the usage bills are accurate. Cloud Files handles these issues for
you. CDNs have, in the past, been the prerogative of companies with more money, but Cloud Files
has changed that. For more information, see [How do I use Cloud Files and CDN?](/support/how-to/getting-started-with-cloud-files-and-cdn).

Cloud Files is a user- and developer-friendly service. Security mechanisms, described in more
detail in the [Security](/support/how-to/why-choose-cloud-files) section, are simple to use.
Third-party tools that further simplify the use of the storage service are available. Developers
can use language-specific application programming interfaces (APIs) to develop utilities or
applications. The APIs are easy to use and present you with examples to get started quickly.

### Affordability

Pricing for Cloud Files with CDN comprises the amount of total data that you have stored (per GB)
and the amount of bandwidth used to serve the data&mdash;outbound bandwidth only, charged per GB
to any edge location on the CDN around the globe. There are no *per request*"* fees for CDN. Find
the [current pricing for Cloud Files](https://www.rackspace.com/openstack/public/servers/pricing)
on our website.

### Flexibility

Cloud Files is a dynamically expanding storage system that we built on the pay-for-use principle.
You can use as much or little storage as necessary while paying only for the storage space you use.
There is no limit on total space use, and individual files can range in size from a few bytes to
extremely large. The GUI Control Panel enables you to check the storage space and bandwidth used. There
are no upfront fees or contracts, and you pay only for storage space and outgoing bandwidth used.

You don't need to use the API to share files. Non-developers can take advantage of a simple web interface
to quickly and easily upload data and enable CDN access. Using any third-party tool makes it even
more flexible for users of specific environments, such as macOS&reg;.

Developers can use the REST web service APIs and language-specific Software Development Kits (SDKs) in PHP,
Python, Java, Ruby, and C# .NET. The SDKs provide full support for managing content in Cloud Files,
publishing content over the CDN, and letting developers to work in the language they like best.

### Superior performance

Rackspace Technology has built networks with superior performance for years. The Akamai CDN capability
further improves the digital content distribution performance. In short, Akamai can bring data closer
to end-users and serve popular content faster.

### World-class support

With Cloud Files, world-class technical support is only a click away. Live support, with real people,
is available 24x7x365.

### Data redundancy

The Cloud Files storage system is highly available and fault-tolerant and achieves client data redundancy
by replicating three full copies on different storage nodes. It groups storage nodes in logical Zones within
Rackspace data centers and connects those zones to redundant Internet backbone providers with redundant power
supplies and generators. We engineered the system to be fully functional even in the event of a major service
disruption within a Datacenter. Content on the CDN provides an additional layer of data redundancy.

### Security

Cloud Files uses different measures to ensure that we keep your data safe. First, all traffic between clients
and the Cloud Files system uses SSL to establish a secure, encrypted communication channel. This ensures that
no third-party can intercept or read any data&mdash;usernames, passwords, or content. Users authenticate with
a valid Rackspace Cloud account username and API Access Key to get a session authentication token. They use
these authentication tokens to validate all operations against Cloud Files. Session tokens automatically expire
after 24 hours, forcing clients to resend their credentials.

The API Access Key is only available from within the Rackspace Technology Cloud Control Panel. Users must enter
a valid Rackspace Cloud account username and password to access the API Access Key or generate a new key. For
information about how to find your API key, see [View and reset your API key](/support/how-to/view-and-reset-your-api-key).

It is important to note that Cloud Files does not apply any transformations to data before storing it. This means
that Cloud Files *does not* store data in an encrypted form unless the client encrypts it before transmission.
This feature enables you to select the type and level of encryption best suited for your application.

When you delete storage objects from the Cloud Files system, the system permanently removes all copies of data within
a matter of minutes. Furthermore, it writes over the physical blocks making up the customer's data with zeroes before
that space is re-used for other customer data. In other words, after a delete request, you can't recover the data.
