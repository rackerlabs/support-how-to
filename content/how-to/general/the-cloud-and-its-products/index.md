---
permalink: the-cloud-and-its-products
audit_date:
title: The cloud and its products
type: article
created_by: Coral Moore
created_date: '2021-04-08'
last_modified_date: '2021-07-16'
last_modified_by: Ana Corpus
product: General
product_url: general
---

The cloud is the virtualisation and automation of IT resources. Many servers interconnect to make a huge computer. Virtualisation software running on the servers allow you to divide them into smaller virtual machines, and automation configured by using a web interface allows you to configure the virtual machine to meet your needs. You can create an entire solution within minutes and resize it on demand.

{{<image src="cloud.gif" alt="" title="">}}

The cloud is divided into public cloud, dedicated hosting and private cloud:

**Public cloud:** You can scale up and down, and only pay for what you use instead of buying a physical server.

**Dedicated hosting:** This option is better for businesses who need strong data security because they can use reserved physical servers.

**Private cloud:** your own hardware that resides in your facility that runs virtualisation software.
### Cloud products

Some common cloud products are:

**Cloud servers:** A cloud server is a virtual machine in the cloud. It is also referred as computer, system, instance, or node. It provides data storage, processing power, and runs applications.

Cloud servers from major vendors are: 

| Vendor | Product |
|--|--|
| AWS&reg; | Amazon EC2 |
| Microsoft&reg; Azure&trade;| Microsoft Virtual Machine |
| Google Cloud Platform&trade; (GCP)| Compute Engine |

**Cloud databases:** Databases collect data. You can store  credit card information, products, prices, lists, and so on. You don't store documents or images. A database resembles Microsoft Excel in the way that it stores data to retrieve later. The most common databases are Microsoft SQL and MySQL&reg;, which runs on Linux&reg; servers.

Cloud databases from major vendors are: 

| Vendor | Product |
|--|--|
| AWS | Amazon RDS |
| Microsoft| Azure Database |
| GCP| Cloud SQL |

**Cloud files:** They store images, videos, documents, similarly to Microsoft OneDrive.

Cloud files from major vendors are: 

| Vendor | Product |
|--|--|
| AWS | Amazon S3 |
| Microsoft| Azure Cloud File System |
| GCP| Cloud Storage |

**Cloud block storage:** It is an extra hard drive or USB device that you can plug to your server. Cloud block storage is a more flexible way to obtain extra space, as opposed to resizing and upgrading an on-premises server. 

Cloud block storage products from major vendors are: 

| Vendor | Product |
|--|--|
| AWS | Amazon EBS |
| Microsoft | Azure Storage |
| GCP | Persistent Disk |

**Cloud backups:** File-based backup of your server data. You can choose which files to back up and retrieve.

**Cloud Images:** It copies the entire state of a server, including the OS, data and flavour. This backup is designed to obtain an instant image of your server, so you should rely on cloud backups to preserve your data. Amazon AMI&reg; is an example of a cloud image service.

**Cloud Monitoring:** Use monitoring to check for information like if your website is running, or how much memory your server is using. Monitoring is crucial to maintain uptime, stay informed, and save you money.

Cloud monitoring from major vendors are: 

| Vendor | Product |
|--|--|
| AWS | Amazon Cloudwatch |
| Microsoft| Azure Monitor |
| Rackspace| Rackspace Intelligence |

**Cloud load balancer:** Distribute workloads across multiple servers for high availability (HA).

**Cloud DNS:** To configure the DNS for a new web site or domain, for example, **example.com**, the following options are available:

- The domain-name vendor points the domain to Rackspace.  Rackspace Cloud DNS then points the domain to the Cloud Server. So, if you are constantly spinning Cloud Servers up and down, adjust the Cloud DNS with Rackspace.

-  The domain-name vendor points the domain directly to the Cloud Server. This way you cut the middle man Rackspace Cloud DNS.

**Cloud Orchestration:** Manage groups of cloud resources and their software components as a single unit. The [Cloud Control Panel](login.rackspace.com) has pre-built templates.

**Cloud Queues:** A middle layer where applications post tasks to be run.

**Cloud CDN:** Content delivery network uses global edge servers to reduce web site latency. To make your website load faster, servers in different countries store copies for downloads within a region, which makes content available for the clients much faster.

When the first client tries to download content from a website, the request goes from their computer to the internet, and DNS directs the request to the edge server. The edge server doesn't have that content, so it sends the request to the webserver. See the purple arrows going from **CDN** to **Server** in the image.

The webserver sends the response back to the edge server, it keeps a local copy of the content, and sends the response back to the client. When other clients within that region request to download that content, the edge server sends them its local copy, and the webserver doesn't need to send the same content to that region. See the green arrows going from **CDN** to **Your Comp** in the image.

{{<image src="cdn.png" alt="" title="">}}

CDN saves a lot of time, a one-second delay in the   response of a web page can cause a 7% reduction in  your conversions. If an e-commerce site has daily revenues of \$100,000, a  one second delay could result in \$2.5 million in lost sales every year.
### Bonus reading

[Top 10 cloud computing myths, debunked](https://www.rackspace.com/library/cloud-computing-myths)

[Cloud products](https://docs.rackspace.com/support/how-to/#cloud-hosting)

[Cloud servers](https://docs.rackspace.com/support/how-to/cloud-servers)

[Cloud databases](https://docs.rackspace.com/support/how-to/cloud-databases)

[Cloud load balancers](https://docs.rackspace.com/support/how-to/cloud-load-balancers)

[Cloud monitoring](https://docs.rackspace.com/support/how-to/rackspace-monitoring)

[Cloud files](https://docs.rackspace.com/support/how-to/cloud-files)

[Cloud block storage](https://docs.rackspace.com/support/how-to/cloud-block-storage)

[Cloud backups](https://docs.rackspace.com/support/how-to/cloud-backup)

[Cloud images](https://docs.rackspace.com/support/how-to/cloud-images)

[Cloud DNS](https://docs.rackspace.com/support/how-to/cloud-dns)

[Cloud orchestration](https://docs.rackspace.com/support/how-to/cloud-orchestration)


[Cloud queues](https://docs.rackspace.com/support/how-to/cloud-queues)

[Cloud CDN](https://docs.rackspace.com/support/how-to/rackspace-cdn)

[What is a CDN](https://www.rackspace.com/library/what-is-a-cdn)

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
