---
permalink: rackspace-pdr-faq
title: Rackspace PDR FAQ
type: faq
audit_date: '2018-11-12'
created_date: '2018-10-11'
created_by: Nick Shobe
last_modified_date: '2018-11-12'
last_modified_by: Nick Shobe
product: Rackspace Proactive Detection & Response
product_url: rackspace-pdr
---

### General
{{<accordion title="What platforms does Rackspace Proactive Detection & Response (PDR) currently support?" col="in" href="accordion1">}}

Rackspace PDR currently supports:

- Rackspace Dedicated Servers
- Fanatical Amazon AWS
- Google Cloud Platform
- Fanatical Azure Cloud
{{</accordion>}}
{{<accordion title="What if I currently use some of the agents or tooling that Rackspace PDR uses?" col="in" href="accordion2">}}

If you currently use any of the same vendor solutions that we use to provide telemetry to our Security Operations Center, we will work with you to migrate or redeploy those agents into our environment.
{{</accordion>}}
{{<accordion title="Will you help me correctly deploy a Rackspace PDR compatible infrastructure?" col="in" href="accordion3">}}

Rackspace PDR's Linux&reg; and Windows&reg; engineering team will help guide you and your Rackspace support teams through the build and migration processes. We want to maximize your success early on to avoid common coverage and security issues later down the road, so if you have questions, open a ticket and we will address them as soon as possible. Also if your sales or support team is not sure if something is compatible with Rackspace PDR, we can perform an engineering review to help identify any possible incompatibilites.
{{</accordion>}}

### Agents & Telemetry

{{<accordion title="Do you ever see issues where agents impact host performance?" col="in" href="accordion4">}}

Occasionally, we do see instances where agents negatively impact host level performance. In those instances, we work with you and your support team to tailor agent rules and address the issues that might be negatively impacting a host. Of the issues that we see, most issues are on hosts with large amounts of logging, many (more than 100,000) descrete files, or high network load.
{{</accordion>}}
{{<accordion title="What if I think there's an issue being caused by an agent used for PDR?" col="in" href="accordion5">}}

If you believe that an agent managed by Rackspace PDR is causing an issue on your host, you should contact your support team. You might optionally stop the service for a few minutes to see whether the issues clear. However, keep in mind that while the agents are not running, your system is not adaquately protected. Thus, it is important then to continue to work with the your support teams and Rackspace PDR engineers to find a solution to the problem so that you can protect your systems.
{{</accordion>}}
{{<accordion title="Rackspace PDR keeps sending me requests stating that agents are not auto-deploying properly. What should I do to resolve this?" col="in" href="accordion6">}}
Rackspace PDR keeps sending me requests stating that agents are not auto-deploying properly. What should I do to resolve this?

Follow the platform guide for your deployment and reach out to a Rackspace PDR member. We are happy to help you figure out why the agents are failing to deploy in your environment.
{{</accordion>}}
{{<accordion title="I found a host or set of hosts that do not have agents on them. What should I do?" col="in" href="accordion7">}}
I found a host or set of hosts that do not have agents on them. What should I do?

Reach out to our Rackspace PDR team as soon as possible so that we can help you to identify the issue. There are many potential reasons why agents were not installed on a particular host, ranging from network to host incompatibilites. You can also follow the agent deployment steps for your platform.
{{</accordion>}}
{{<accordion title="I need to create a base or Golden image from a host that has Rackspace PDR agents. What should I do to prepare it?" col="in" href="accordion8">}}

It is important that images taken from hosts that have Rackspace PDR agents deployed be prepared for deployment before using them as base images. Follow the [Rackspace PDR imaging hosts](/support/how-to/rackspace-pdr-imaging/) guide to ensure that Golden images are properly prepared.
{{</accordion>}}
