---
permalink: rackspace-auto-scale-control-panel-user-guide-introduction
audit_date: '2020-09-25'
title: Rackspace Auto Scale Control Panel User Guide - Introduction
type: article
created_date: '2013-11-18'
created_by: Maria Abrahms
last_modified_date: '2020-09-25'
last_modified_by: Rose Morales
product: Rackspace Autoscale
product_url: rackspace-auto-scale
---

Welcome to Rackspace Auto Scale, the easy way to scale your cloud resources up
or down in response to an increase or decrease in overall workload or based on your
defined thresholds.

### What you will learn

After reading this guide you will understand:

- Auto Scale core concepts
- Auto Scale options and how group configurations affect policy execution
- How to use Auto Scale control panel to create a scaling group and policies

### What you can do with Rackspace Auto Scale

You can use Rackspace Auto Scale to perform the following tasks:

- Create a policy to add more servers at a specific time on a recurring
  basis or just one time; use cron to set the schedule, or use a webhook to
  respond to an event and trigger a policy; and set a policy to scale back
  down
- Add and remove a specific number of servers or a percentage of your total
  resources
- Support your dedicated servers by adding - and removing - cloud servers based
  on a schedule

### Prerequisites

Before you can use Rackspace Auto Scale, you must have the following
prerequisites:

- A Rackspace cloud account. To sign up go to the [Rackspace Public Cloud signup
  page](https://cart.rackspace.com/cloud/).
- A server image or images with all needed applications and settings. You can
  create your images with the
  [API](https://docs.rackspace.com/docs/cloud-servers/v2/developer-guide/),
  through the Cloud Control Panel or use external applications such as Chef,
  Puppet, or Salt.
- *(Optional)* A load balancer. One is allowed per each group of 25
  server images. To create a load balancer with the API or the
  **Cloud Control Panel**, See the [Cloud Load Balancers Developer
  Guide](https://docs.rackspace.com/docs/cloud-load-balancers/v1/developer-guide/)
  for information about using the API.

### What's next

[Concepts](/support/how-to/rackspace-auto-scale-control-panel-user-guide-concepts).

### User Guide sections

- [Rackspace Auto Scale Control Panel User Guide - Introduction](/support/how-to/rackspace-auto-scale-control-panel-user-guide-introduction)
- [Rackspace Auto Scale Control Panel User Guide - Concepts](/support/how-to/rackspace-auto-scale-control-panel-user-guide-concepts)
- [Rackspace Auto Scale Control Panel User Guide - Create a scaling group](/support/how-to/rackspace-auto-scale-control-panel-user-guide-create-a-scaling-group)
- [Rackspace Auto Scale Control Panel User Guide - Create a scaling policy](/support/how-to/rackspace-auto-scale-control-panel-user-guide-create-a-scaling-policy)
