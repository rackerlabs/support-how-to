---
permalink: what-is-the-cloud-and-its-products/
title: What is the Cloud and its products?
type: article
created_by: Coral Moore
created_date: 2021-04-08
last_modified_date: 
last_modified_by: 
audit_date:
product: General
product_url: general
---

# What is the Cloud + its products?
*For understanding what the Cloud is, and what Cloud products do on a basic level*

# What is the Cloud?
**Short answer:** Virtualisation with automation

**Long answer:**
Take a lot of computers/servers
Connect them all so that they make 1 HUGE computer.
Install some virtualisation software, and use that to section off pieces of that huge server.
Add some automation so that with the click of a button, you can siphon off how much you want, and very easily.
Done!

Like these modular storage cubbies. You can keep moving around the dividers in the middle to create different sized sections of the whole:
{{<image src="cloud.gif" alt="" title="">}}

**Public Cloud:** You can scale up and down, and only pay for what you use.
You're not stuck paying for a whole physical server, when you only use a bit of it.

**Dedicated Hosting:** Better for businesses who need more data security, as they aren't sharing their hardware with anyone.

**Private Cloud:** A way of having the best of both worlds!
Here you can have virtualisation installed on your own set of dedicated hardware.
So no sharing.

## Bonus reading
[Top 10 Cloud Computing Myths, Debunked](https://www.rackspace.com/library/cloud-computing-myths)

# [Cloud Products](https://docs.rackspace.com/support/how-to/#cloud-hosting)
## [Cloud Servers](https://docs.rackspace.com/support/how-to/cloud-servers)
Like a regular computer.
Often referred to as a machine, computer, system, instance, or node.
This can provide data storage, processing power etc, and can be installed with various applications.
> In **GCP** (Google Cloud Platform) the most common one is known as a '**Compute Engine**'
In **AWS** (Amazon Web Services) the most common one is known as an '**Amazon EC2**'
In **Azure** the most common ones are known as '**Virtual Machines**'
## [Cloud Databases](https://docs.rackspace.com/support/how-to/cloud-databases)
An organized collection of data.
Here you would store pure data like credit card information, product IDs, prices, lists of things etc.
You would not store more complex things like images, files, or documents.
If it helps, it's a little like Microsoft Excel where you only copy in the raw data to be stored/processed/retrieved later.
The most commonly used Windows database is SQL
The most commonly used Linux database is MySQL
> In **GCP** (Google Cloud Platform) the most common one is known as '**Cloud SQL**'
In **AWS** (Amazon Web Services) the most common one is known as '**Amazon RDS**'
In **Azure** the most common ones are known as '**Databases**'
## [Cloud Load Balancers](https://docs.rackspace.com/support/how-to/cloud-load-balancers)
Distribute workloads across multiple servers for HA (High Availability)

## [Cloud Monitoring](https://docs.rackspace.com/support/how-to/rackspace-monitoring)
Use continual monitoring to check for vital information like if your website is up, or how much memory your server is using.
Crucial for maintaining uptime, staying informed, and very likely to save you money.
> In **Rackspace** this is known as '**Rackspace Intelligence**'
In **AWS** (Amazon Web Services) the most common one is known as '**Amazon CloudWatch**'
In **Azure** the most common one is known as '**Azure Monitor**'
## [Cloud Files](https://docs.rackspace.com/support/how-to/cloud-files)
Online storage for files such as images.
Like uploading your files to OneDrive.
> In **GCP** (Google Cloud Platform) the most common one is known as '**Filestore**'
In **AWS** (Amazon Web Services) the most common one is known as an '**S3 Bucket**'
In **Azure** the most common one is known as '**File System**'
## [Cloud Block Storage](https://docs.rackspace.com/support/how-to/cloud-block-storage)
Extra disc space which you can plug in/mount on your server (like another hard drive or USB)
So if you resize your server, you are upgrading everything, which could improve performance (faster)
But if you add Block Storage, it's like only tacking on extra space (cheaper, easier)
> In **GCP** (Google Cloud Platform) the most common one is known as '**Persistent Disk**'
In **AWS** (Amazon Web Services) the most common one is known as an '**Amazon EBS**'
In **Azure** the most common ones are known as '**Storage**'
## [Cloud Backups](https://docs.rackspace.com/support/how-to/cloud-backup)
File based backup for the data on your server.
You can choose which files are backed up/retrieved

## [Cloud Images](https://docs.rackspace.com/support/how-to/cloud-images)
A copy of the entire state of a server, including the data, OS, and flavour.
More likely to fail as it includes a lot more data and settings.
When choosing between Cloud Backups and Images, recommended best practice is to do both!
> In **AWS** (Amazon Web Services) the most common one is known as an '**AMI**'
## [Cloud DNS](https://docs.rackspace.com/support/how-to/cloud-dns)
When setting up the DNS for a new web site/domain (eg. example.com), there are 2 main options:
1. The domain name vendor points the domain to Rackspace
    Rackspace Cloud DNS then points the domain to the Cloud Server
    So if you are constantly spinning Cloud Servers up/down, you would only need to adjust the Cloud DNS with Rackspace.
2. The domain name vendor points the domain directly to the Cloud Server
    This way you can cut out the middle man Rackspace Cloud DNS to keep things simple.

## [Cloud Orchestration](https://docs.rackspace.com/support/how-to/cloud-orchestration)
Manage groups of cloud resources and their software components as a single unit.
The [Cloud Control Paneltext](login.rackspace.com) has pre-built templates.

## [Cloud Queues](https://docs.rackspace.com/support/how-to/cloud-queues)
A middle layer where applications can post tasks to be run.

## [Cloud CDN](https://docs.rackspace.com/support/how-to/rackspace-cdn)
Content Delivery Network, where global edge servers are used to reduce web site latency
To make your web site load faster, there are extra servers in different countries which can store copies for faster local downloads.

++Breakdown of how it works:++
To speed things up, the first customer to load up a particular web site is slightly slower.
Their traffic makes the usual journey from their computer, through the internet, but DNS directs them to the CDN.
CDN companies have Edge Servers all over the world so there are lots to choose from.
As this is the first customer of the day, the Edge Server will say it has nothing, and send the data packet to the server like usual.
But on the way back with the web site data, the data packet has to drop off a copy with the Edge Server.
(represented by the blue and purple arrows in the picture below)

The next data packet looking for where to go, isn't directed straight to the server in the UK, but to the Edge Server in Australia where a copy was already left.
The original UK server meanwhile can kick back, relax, and not do a thing for the rest of the day!
(represented by the blue arrows in the picture below)
{{<image src="cdn.png" alt="" title="">}}

Having all subsequent traffic not have to leave the country can save a lot of time:
> [What is a CDN](https://www.rackspace.com/library/what-is-a-cdn)
'a one-second delay in the response of a web page can cause a 7 percent reduction in your conversions.
In business terms, this means that if an ecommerce site has revenues of $100,000 a day,
a one-second delay could potentially result in $2.5 million in lost sales every year.'
