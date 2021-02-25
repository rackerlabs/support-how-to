---
permalink: rackspace-intelligence-faq/
audit_date: '2021-02-25'
title: Rackspace Intelligence FAQ
type: article
created_date: '2015-05-15'
created_by: Constanze Kratel
last_modified_date: '2018-10-25'
last_modified_by: Rose Morales
product: Rackspace Intelligence
product_url: rackspace-intelligence
---

### Getting started

{{<accordion title="What is Rackspace Intelligence?" col="in" href="accordion1">}}
Rackspace Intelligence delivers an intuitive interface that gives you a
transparent view into the health of your infrastructure, along with
actionable insights to improve system performance and availability. It
provides a universal dashboard that enables you to obtain information
about any monitoring tools and entities regardless of your underlying
infrastructure. You can use it to configure monitoring on your entities,
such as servers and databases, and view their monitoring status. It also
provides visualizations that give you a view of the trends in your
resource use.
{{</accordion>}}

{{<accordion title="Who can use Rackspace Intelligence?" col="in" href="accordion12">}}
All Rackspace customers with a Cloud services account can use Rackspace
Intelligence.
{{</accordion>}}

{{<accordion title="How do I sign up for Rackspace Intelligence?" col="in" href="accordion3">}}
There is no separate sign-up process for Rackspace Intelligence. If you
have a Cloud services account, log in to
<https://intelligence.rackspace.com> using your Rackspace Cloud
credentials.
{{</accordion>}}

{{<accordion title="Can I use Rackspace Intelligence for both Cloud and Dedicated accounts?" col="in" href="accordion4">}}
Yes, both Cloud and Dedicated accounts have access to Rackspace Intelligence. For more information, see [Getting Started with Rackspace Intelligence for the cloud](/support/how-to/getting-started-with-rackspace-intelligence-for-the-cloud) and [Getting Started with Rackspace Intelligence for dedicated accounts](/support/how-to/getting-started-with-rackspace-intelligence-for-dedicated-accounts).
{{</accordion>}}

{{<accordion title="What are the benefits of using Rackspace Intelligence?" col="in" href="accordion5">}}
With this set of visualization and analytics tools, you no longer have
to set up, maintain, or pay for an additional set of tools.
Additionally, the intuitive dashboard enables collaboration with Support
Rackers.
{{</accordion>}}

{{<accordion title="How do I access Rackspace Intelligence?" col="in" href="accordion6">}}
Go to
[https://intelligence.rackspace.com](https://intelligence.rackspace.com)
and log in by providing the username and password for your Rackspace
Cloud account.

Alternatively, if you already logged in to the [Cloud Control
Panel](https://login.rackspace.com), you can click the **Servers**
menu and then click **Rackspace Intelligence**. A new browser tab
displays the Rackspace Intelligence portal.
{{</accordion>}}

{{<accordion title="How much does Rackspace Intelligence cost?" col="in" href="accordion7">}}

Rackspace Intelligence is available at no charge for Rackspace customers
with a Cloud services account.
{{</accordion>}}

{{<accordion title="Is there an API for Rackspace Intelligence?" col="in" href="accordion8">}}
Rackspace Intelligence currently does not expose an API. However, you can build many
monitoring-related features, such as creating and editing checks
and alarms, by using the
[Rackspace Monitoring API](https://docs.rackspace.com/docs/rackspace-monitoring/v1/).
{{</accordion>}}

------------------------------------------------------------------------

### Account services

{{<accordion title="Are any features of Rackspace Intelligence limited to specific service levels?" col="in" href="accordion9">}}
All the features in Rackspace Intelligence are available to all service
levels (Managed Infrastructure and Managed Operations) for all Cloud
customers.
{{</accordion>}}

{{<accordion title="How can I provide feedback about Rackspace Intelligence?" col="in" href="accordion10">}}
If you want to suggest features to add to Rackspace Intelligence, or if
you discover any issues, click the **Support** link at the top of the
[Rackspace Intelligence Portal](https://intelligence.rackspace.com/).
{{</accordion>}}

------------------------------------------------------------------------

### Features

{{<accordion title="What is an entity?" col="in" href="accordion11">}}
An *entity* is a resource (for example, a website or server) that you
want to monitor.
{{</accordion>}}

{{<accordion title="Do I need to create entities manually to monitor them?" col="in" href="accordion12">}}
Rackspace Intelligence automatically creates entities for all of your
Rackspace cloud servers and databases. If you want to monitor other
systems, you must manually create entities for them.
{{</accordion>}}

{{<accordion title="What is a check?" col="in" href="accordion13">}}
A *check* specifies the aspect of the resource that you want to monitor.
{{</accordion>}}

{{<accordion title="What is an alarm?" col="in" href="accordion14">}}
An *alarm* is a set of rules that determine what status is returned
based on the result of the check.
{{</accordion>}}

{{<accordion title="Why are the concepts of checks and alarms separate?" col="in" href="accordion15">}}
We wanted to build a state-of-the-art monitoring platform, which
requires that data collection be separate from thresholds.
{{</accordion>}}

{{<accordion title="What is a notification?" col="in" href="accordion16">}}
A *notification* defines how the system should contact the customer in
case of a system failure.
{{</accordion>}}

{{<accordion title="What is a notification plan?" col="in" href="accordion1">}}
A *notification plan* specifies a set of actions that the system performs when
the check returns a certain status.
{{</accordion>}}
