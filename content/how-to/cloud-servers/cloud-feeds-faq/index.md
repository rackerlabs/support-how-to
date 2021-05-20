---
permalink: cloud-feeds-faq
audit_date: '2021-05-20'
title: Cloud Feeds FAQ
type: article
created_date: '2014-07-31'
created_by: David Hendler
last_modified_date: '2021-05-20'
last_modified_by: Ana Corpus
product: Cloud Servers
product_url: cloud-servers
---

Get quick answers to common questions about the Rackspace Cloud
Feeds service.
{{<accordion title="Who can use Cloud Feeds?" col="in" href="accordion1">}}

All Rackspace customers with a Cloud services account can use Cloud
Feeds.
{{</accordion>}}
{{<accordion title="How much does Cloud Feeds cost?" col="in" href="accordion2">}}

Cloud Feeds is available at no charge.
{{</accordion>}}
{{<accordion title="How do I grant access to Cloud Feeds?" col="in" href="accordion3">}}

For information about how to add Cloud Feeds to individual users on your
Cloud account, see [Cloud Feeds overview](/support/how-to/cloud-feeds-overview).
{{</accordion>}}
{{<accordion title="What can I use Cloud Feeds for?" col="in" href="accordion4">}}

Cloud Feeds has limited functionality and event notifications.

The following table shows the kind of information, in the form of
events, that you can receive for various Rackspace Cloud services.

| Service                        | Feed name          | Events                                              |
|--------------------------------|--------------------|-----------------------------------------------------|
| Cloud Backup                   | /backup/events     | Bandwidth Usage, License Usage, Storage Usage       |
| Cloud Big Data                 | /bigdata/events    | Hadoop Cluster Usage                                |
| Cloud Block Storage            | /cbs/events        | Volume Usage                                        |
| Cloud Databases                | /dbaas/events      | Database Memory and Disk Usage                      |
| Cloud DNS                      | /dns/events        | Domain Create and Delete Events                     |
| Cloud Files                    | /files/events      | Bandwidth Usage, Storage Usage                      |
| Identity                       | /identity/events   | User Status Events                                  |
| Cloud Load Balancers           | /lbaas/events      | Load Balancer, Usage System, Status Events          |
| Cloud Monitoring               | /monitoring/events | Monitoring Usage                                    |
| Cloud Queues                   | /queues/events     | Bandwidth Usage, System Usage                       |
| Cloud Servers.                 | /servers/events    | Bandwidth Usage, Server Usage, System Status Events |

We store event notifications for up to three days so they can be
retrieved when convenient and publish them in XML format. At this
time, most events are related to usage, with few system and security
events.
{{</accordion>}}
{{<accordion title="Where is Cloud Feeds available?" col="in" href="accordion6">}}

Cloud Feeds is available in the following regions:

-   Chicago (ORD)
-   Dallas-Fort Worth (DFW)
-   Hong Kong (HKG)
-   London (LON)
-   Northern Virginia (IAD)
-   Sydney (SYD)
{{</accordion>}}
{{<accordion title="What are the Terms of Service?" col="in" href="accordion8">}}

During the Early Access period, the Cloud Feeds Terms of Service are
available at <https://www.rackspace.com/information/legal/testterms>.
When the Early Access Program is over, the Terms of Service reverts
to the standard Cloud Terms of Service.
{{</accordion>}}
