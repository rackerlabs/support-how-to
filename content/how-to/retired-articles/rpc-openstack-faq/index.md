---
permalink: rpc-openstack-faq
audit_date: '2017-04-26'
title: Rackspace Private Cloud powered by OpenStack FAQ
type: article
created_date: '2014-09-09'
created_by: Karin Levenstein
last_modified_date: '2021-05-10'
last_modified_by: Rose Morales
---

Rackspace Private Cloud powered by OpenStack delivers the agility and
efficiency of a public cloud combined with the enhanced security, control and
performance of a dedicated environment.  It can be deployed in your data center
or ours, is managed by our OpenStack experts and is backed by support that provides a Fanatical Experience&trade;. Rackspace Private Cloud gives you all the power of the cloud without the pain of running it, so you can focus on your core business.

This FAQ provides quick answers to general questions about Rackspace Private Cloud powered by OpenStack.

---------

### General
{{<accordion title="How does Rackspace Private Cloud support Rackspace's position as the #1 managed cloud company?" col="in" href="accordion1">}}

Rackspace Private Cloud supports our position as the #1 managed cloud company
by offering customers managed private cloud solutions in their data center or
ours.  Our team of OpenStack engineers operate our customers' private clouds so
they can focus on their core business and applications.
{{</accordion>}}
{{<accordion title="What new enhancements were delivered with the latest release of Rackspace Private Cloud?" col="in" href="accordion2">}}

See [Rackspace Private Cloud Powered by OpenStack](/support/how-to//rpc-openstack/)
for the latest release notes.
{{</accordion>}}
{{<accordion title="What support services are available for Rackspace Private Cloud?" col="in" href="accordion3">}}

Rackspace Private Cloud handles all operations of your private cloud environment, so that the environment just works when you need it. From initial design to production deployment, our support engineers proactively monitor and maintain the health of your private cloud by providing installation, configuration, patching, updating, troubleshooting, and capacity planning services, which are all part of your standard service contract.

You can also select to have a Dedicated OpenStack Engineer for your account for an additional fee. This engineer provides DevOps automation services to help you optimize your private cloud through automation.

More information is available at the [Rackspace Private Cloud OpenStack web page](https://www.rackspace.com/openstack/private).

{{</accordion>}}

{{<accordion title="What are Rackspace Private Cloud's main differentiators?" col="in" href="accordion4" hasImage="true">}}

<img class="fig-img" src="/support/how-to/rpc-openstack-faq/rpc-differentiators.png" alt="What differentiates Rackspace Private Cloud">

<p><strong>Stable and available</strong></p>

<p>We offer an industry leading 99.99% OpenStack API uptime guarantee, a reference architecture that uses Linux containers to provide in-place upgrades and independent scaling of each OpenStack service, and a cloud that is designed to scale to hundreds of nodes.</p>

<p><strong>Support that provides a Fanatical Experience&trade;</strong></p>

<p>We provide a dedicated account manager, an optional dedicated OpenStack Engineer service, a 15-minute live response time guarantee to any emergency ticket with Core support, and 24x7x365 access to our team of OpenStack experts.</p>

<p><strong>Automation</strong></p>

<p>Rackspace Private Cloud powered by OpenStack is deployed using Ansible software, supports OpenStack Orchestration (Heat), can be combined with our DevOps Automation Service to help automate a customer's process for deploying and scaling applications, and provides solution templates that enable customers to deploy production-ready application stacks in minutes.</p>

<p><strong>Deploy anywhere</strong></p>

<p>Deploy anywhere in the world.  You can host Rackspace Private Cloud in your data center, in our data center, in a colocation facility or in multiple locations.</p>

<p><strong>Expertise</strong></p>

<p>We manage one of the world's largest OpenStack powered clouds, are #1 in all-time code contributions to the OpenStack project and offer an extensive OpenStack training curriculum.</p>

<p><strong>Hybrid</strong></p>

<p>Add elasticity to your infrastructure with the capability to automatically add and remove public cloud resources as needed to support your private cloud workloads.</p>

{{</accordion>}}

{{<accordion title="Where can I deploy Rackspace Private Cloud?" col="in" href="accordion5">}}

You can deploy a Rackspace Private Cloud in your own data center, in a Rackspace
data center, in a colocation facility or across multiple locations.
{{</accordion>}}
{{<accordion title="Is Rackspace Private Cloud updated with each new OpenStack version release (i.e. Mikata, Newton, Ocata)?" col="in" href="accordion6">}}

Yes, and we also have minor releases throughout the year to introduce new features, fix bugs and provide security patches.

The one exception is the Ocata release. Rackspace made a deliberate decision not to release an Rackspace Private Cloud version of Ocata for our customers because the short cycle between the Newton and Ocata releases had a low impact in terms of feature sets.
{{</accordion>}}
{{<accordion title="Can I install Rackspace Private Cloud on virtual machines?" col="in" href="accordion7">}}

Rackspace strongly recommends that you install Rackspace Private Cloud on
physical hardware nodes running Ubuntu 16.04 for the latest Newton release. Installation on virtual platforms should be performed only for evaluation purposes.
{{</accordion>}}
{{<accordion title="Does Rackspace Private Cloud come with any images?" col="in" href="accordion8">}}

Currently, Rackspace Private Cloud software does not include any images. Users can create their own images and populate those images into Glance image repository for on-demand consumption. For more information about downloading and creating images, see the [OpenStack Virtual Machine Image Guide](https://docs.openstack.org/image-guide/content/).
{{</accordion>}}
{{<accordion title="Why does the node IP address need to have Internet access?" col="in" href="accordion9">}}

Rackspace Private Cloud software downloads Ubuntu operating system installation files as part of
the installation process to ensure that you have the most up-to-date operating
system that works with our software. If the node doesn't have Internet access,
the installation process fails.
{{</accordion>}}
{{<accordion title="Can customers test Rackspace Private Cloud before they buy it?" col="in" href="accordion10">}}

Rackspace has dedicated environments that are accessible to customers for
proof-of-concept testing. Contact the Rackspace Private Cloud sales team
at [rpcsales@rackspace.com](mailto:rpcsales@rackspace.com).
{{</accordion>}}
{{<accordion title="What devices are certified for Rackspace Private Cloud compute nodes?" col="in" href="accordion11">}}

All devices certified for Ubuntu Server 16.04 LTS are certified for Rackspace Private Cloud. Refer to the [Ubuntu operating system certified hardware page](https://www.ubuntu.com/certification/server/) for the full list.
{{</accordion>}}
{{<accordion title="Where can I get more technical information?" col="in" href="accordion12">}}

Get quick answers to common technical questions about Rackspace Private Cloud
in [the Rackspace Private Cloud v14 Technical FAQ](https://docs.rackspace.com/docs/private-cloud/rpc/v14/rpc-faq-external/).
{{</accordion>}}
{{<accordion title="Where can I learn more?" col="in" href="accordion13">}}

More information about Rackspace Private Cloud is available on the Rackspace
Private Cloud web site at
[https://www.rackspace.com/openstack/private](https://www.rackspace.com/openstack/private).
{{</accordion>}}
