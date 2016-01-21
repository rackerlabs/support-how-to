---
node_id: 3571
title: Mapping of Amazon Web Services resources to Rackspace resources
type: article
created_date: '2013-07-01'
created_by: David Hendler
last_modified_date: '2016-01-08'
last_modified_by: Kelly Holcomb
product: Cloud Servers
product_url: cloud-servers
---

<span>This article is intended to help you map Amazon Web Services (AWS)
infrastructure as a service (IaaS) products to Rackspace
products.</span>

### Previous section

[Migrating to the Rackspace Cloud from Amazon Web
Services](/how-to/migrating-to-the-rackspace-cloud-from-amazon-web-services)



| AWS product            | Corresponding Rackspace product                                                                          |
|------------------------|----------------------------------------------------------------------------------------------------------|
| Amazon EC2             | **Cloud Servers** \[[product link](http://www.rackspace.com/cloud/servers)\]                             |
|                        | [Cloud Servers API](http://docs.rackspace.com/servers/api/v2/cs-devguide/content/ch_preface.html)        |
|                        | [Cloud Servers pricing](http://www.rackspace.com/cloud/load-balancing/pricing)                           |
| Elastic Load Balancing | **Cloud Load Balancers** \[[product link](http://www.rackspace.com/cloud/load-balancing)\]               |
|                        | [Cloud Load Balancers API](http://www.rackspace.com/cloud/load-balancing/api/)                           |
|                        | [Cloud Load Balancers pricing](http://www.rackspace.com/cloud/load-balancing/pricing)                    |
| Amazon EMR             | Rackspace Cloud Big Data Platform                                                                        |
| Amazon VPC             | Cloud Networks                                                                                           |
| Amazon Route 53        | Cloud DNS                                                                                                |
| AWS Direct Connect     | RackConnect                                                                                              |
| AWS Marketplace        | Cloud Tools Marketplace \[[link to Marketplace](https://marketplace.rackspace.com/home)\]                |
| Amazon S3              | **Cloud Files** \[[product link](http://www.rackspace.com/cloud/files)\]                                 |
|                        | [Cloud Files API](http://www.rackspace.com/cloud/files/api/)                                             |
|                        | [Cloud Files pricing](http://www.rackspace.com/cloud/files/pricing)                                      |
| Amazon Glacier         | Cloud Backup (with compression)                                                                          |
| Amazon EBS             | **Cloud Block Storage** (SSD available) \[[product link](http://www.rackspace.com/cloud/block-storage)\] |
|                        | [Cloud Block Storage API](http://docs.rackspace.com/cbs/api/v1.0/cbs-devguide/content/overview.html)     |
|                        | [Cloud Block Storage pricing](http://www.rackspace.com/cloud/block-storage/pricing)                      |
| AWS Import/Export      | Hard Drive Import/Export                                                                                 |
| AWS Storage Gateway    | Multiple Partner solutions available                                                                     |
| Amazon CloudFront      | **Rackspace CDN** \[[product link](http://www.rackspace.com/cloud/cdn-content-delivery-network)\]        |
|                        | [Rackspace CDN API](http://docs.rackspace.com/cdn/api/v1.0/cdn-devguide/content/Overview.html)           |
|                        | [Rackspace CDN pricing](http://www.rackspace.com/cloud/cdn-content-delivery-network)                     |
| Amazon RDS             | **Cloud Databases** \[[product link](http://www.rackspace.com/cloud/monitoring)\]                        |
|                        | [Cloud Databases API](http://docs.rackspace.com/cdb/api/v1.0/cdb-devguide/content/overview.html)         |
|                        | [Cloud Databases pricing](http://www.rackspace.com/cloud/databases/pricing)                              |
| Amazon DynamoDB        | Object Rocket (MongoDB - open)                                                                           |
| Amazon SES, SNS        | Mailgun                                                                                                  |
| Elastic Transcoder     | Partner solutions - encoding.com                                                                         |
| IAM & Mgmt Console     | Cloud Control Panel                                                                                      |
| AWS CloudWawtch        | **Cloud Monitoring** \[[product link](http://www.rackspace.com/cloud/monitoring)\]                       |
|                        | [Cloud Monitoring API](http://docs.rackspace.com/cm/api/v1.0/cm-devguide/content/overview.html)          |
|                        | [Cloud Monitoring pricing](http://www.rackspace.com/cloud/monitoring/pricing)                            |
| AWS Elastic Beanstalk  | Cloud Sites (.NET and PHP), Partner Solutions                                                            |
| AWS CloudFormation     | Deployments                                                                                              |
| CloudSearch & Redshift | Non Core - Partner                                                                                       |



### Mapping of EC2 instance types to Rackspace Cloud instance types

The following table maps Amazon EC2 instance types to equivalent
Rackspace Cloud instance types so that you can select an appropriate
instance size for your Rackspace Cloud Server.

EC2 instance type

Rackspace instance type

Micro:
613 MB RAM, up to 2 ECUs, EBS storage, 64 bit

Standard: 512 MB RAM, 20 GB HDD, 1 vCPU
1 GB RAM, 40 GB HDD, 1 vCPU
Performance: 1 GB RAM, 20 GB SSD, 1 vCPU

M1 Small:
1.7 GB RAM, 1 ECU, 160 GB local storage, 32 or 64 bit

Standard: 2 GB RAM, 80 GB HDD, 2 vCPUs
Performance: 2 GB RAM, 40 GB and 20 GB SSDs, 2 vCPU

M1 Medium:
3.75 GB RAM, 2 ECUs, 410 GB local storage, 32 or 64 bit

Standard: 4 GB RAM, 160 GB HDD, 2 vCPUs
Performance: 4 GB RAM, 40 GB and 40 GB SSDs, 4 vCPU

M1 Large:
7.5 GB RAM, 4 ECUs, 850 GB local storage, 64 bit

Standard: 8 GB RAM, 320 GB HDD, 4 vCPUs
Performance: 8 GB RAM, 40 GB and 80 GB SSDs, 8 vCPU

M1 Extra Large:
15 GB RAM, 8 ECUs, 1690 GB local storage, 64 bit

Standard: 15 GB RAM, 620 GB HDD, 6 vCPUs
Performance: 15 GB RAM, 40 GB and 150 GB SSDs, 4 vCPU

M3 Extra Large:
15 GB RAM, 13 ECUs, EBS storage, 64 bit

Standard: 15 GB RAM, 620 GB HDD, 6 vCPUs
Performance: 15 GB RAM, 40 GB and 150 GB SSDs, 4 vCPU

M3 Extra Double Large:
30 GB RAM, 26 ECUs, EBS storage, 64 bit

Standard: 30 GB RAM, 1200 GB HDD, 8 vCPUs
Performance: 30 GB RAM, 40 GB and 300 GB SSDs, 8 vCPU

High-Memory Extra Large:
17 GB RAM, 6.5 ECUs, 420 GB storage, 64 bit

Standard: 15 GB RAM, 620 GB HDD, 6 vCPUs
Performance: 15 GB RAM, 40 GB and 150 GB SSDs, 4 vCPU

High-Memory Double Extra Large:
34 GB RAM, 13 ECUs, 850 GB local storage, 64 bit

Standard: 30 GB RAM, 1200 GB HDD, 8 vCPUs
Performance: 30 GB RAM, 40 GB and 300 GB SSDs, 8 vCPU

####

### Fanatical Support

|                |                                                 |
|----------------|-------------------------------------------------|
| Rackspace link | <http://www.rackspace.com/whyrackspace/support> |



### Next steps

[High-level steps for migrating from Amazon Web
Services](/how-to/high-level-steps-for-migrating-from-amazon-web-services)

