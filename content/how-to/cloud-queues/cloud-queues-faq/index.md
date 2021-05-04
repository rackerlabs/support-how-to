---
permalink: cloud-queues-faq
audit_date:
title: Cloud Queues FAQ
type: article
created_date: '2013-09-18'
created_by: Megan Meza
last_modified_date: '2016-05-02'
last_modified_by: Stephanie Fillmon
product: Cloud Queues
product_url: cloud-queues
---
{{<accordion title="Will Cloud Queues work with Hybrid or RackConnect?" col="in" href="accordion1">}}
Yes. Cloud Queues will offer both public and snet IP's, so as long as the dedicated network partition is set up to allow traffic to one of these targets, Cloud Queues can be accessed.
{{</accordion>}}
{{<accordion title="What does it cost to use Cloud Queues?" col="in" href="accordion2">}}

Please consult the [Cloud Queues](https://www.rackspace.com/cloud/queues/) product page on our website for the most current pricing.
{{</accordion>}}
{{<accordion title="What happens if a message is stuck in a queue? How can this be fixed?" col="in" href="accordion3">}}

Messages can't get stuck in a queue. After posting a message, the client will receive a resource URL which can be used to delete the message. Alternatively, the client can simply wait for the message to expire, at which point the service will automatically remove it. All messages have a "Time to Live" or TTL, which is configurable by the user.
{{</accordion>}}
{{<accordion title="Can a queue be migrated from one server to another server?" col="in" href="accordion4">}}

Each queue is associated with a single cloud account, and is not tied to any server in particular under that account. Queues cannot be migrated between cloud accounts.
{{</accordion>}}
{{<accordion title="Are there any limitations that Cloud Queues customers should be aware of?" col="in" href="accordion5">}}

Yes, messages cannot be larger than 256K (excluding white space), and a single request cannot contain more than 10 messages. If a single request has multiple messages, the sum of those messages (excluding white space) cannot exceed 256K.
{{</accordion>}}
{{<accordion title="What is the underlying message queuing system?" col="in" href="accordion6">}}

Cloud Queues is based on the OpenStack "Marconi" project and uses its own persistent, highly-available, document-based data store. Cloud Queues is not a wrapper around AMQP or other protocols.
{{</accordion>}}
{{<accordion title="How can I be assured my messages will not be lost?" col="in" href="accordion7">}}

Each message is replicated across three storage nodes, in memory, and also persisted to disk. Messages are not replicated across data centers (regions) at this time.
{{</accordion>}}
{{<accordion title="How is the product different from RabbitMQ?" col="in" href="accordion8">}}

Cloud Queues offers a simpler, HTTP-based API making it ideal for modern web application development. The service does not rely on, or even support persistent connections other than standard HTTP keep-alive, and so is more reliable when accessed through firewalls and across multiple network partitions (i.e., the Internet). The service is HA and durable, and requires absolutely no setup or maintenance on the part of the developer or system administrator.
{{</accordion>}}
{{<accordion title="Will we be able to enable some form of transaction logging that we can store to Cloud Files or other accessible storage?" col="in" href="accordion9">}}

This is on our roadmap.
{{</accordion>}}
{{<accordion title="What stats does the API return?" col="in" href="accordion10">}}

We currently only offer a few very basic per-queue stats but intend to develop additional stats for GA The stats currently offered include oldest message, newest message, number of claimed messages, number of unclaimed messages. However, it is easy to hook Graphite up to the `GetQueueStats` call to plot graphs on the amount of free and unclaimed messages.
{{</accordion>}}
{{<accordion title="What is the maximum amount of time a message can be stored?" col="in" href="accordion11">}}

14 days. The default message TTL will be set to 72 hours.
{{</accordion>}}
{{<accordion title="Is there be a max queue length to prevent queues from growing out of control?" col="in" href="accordion12">}}

There are no limits on the number of queues or the number of messages that a queue can contain.
{{</accordion>}}
{{<accordion title="Is there a limit of max requests per second for these API operations?" col="in" href="accordion13">}}

Yes, customers will be limited to 300 request per second per account. Please contact support if you need to exceed this limit.
{{</accordion>}}
{{<accordion title="What do I need to enter for the `X-Project-ID` field?" col="in" href="accordion14">}}

Project ID is the Tenant ID, and is the customer's account number.
{{</accordion>}}