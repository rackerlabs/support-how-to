---
permalink: about-the-rackspace-monitoring-agent/
audit_date: '2020-11-24'
title: About the Rackspace Monitoring Agent
type: article
created_date: '2012-11-13'
created_by: Susan Million
last_modified_date: '2020-11-24'
last_modified_by: Rose Morales
product: Rackspace Monitoring
product_url: rackspace-monitoring
---

The Rackspace Monitoring Agent allows you to monitor the internals
of your Cloud Server and other entities by running checks that are installed on your server
locally rather than launching checks from one or more of the Rackspace
data centers. Because the agent is installed locally, it is immediately
aware of any system resource changes to your Cloud Server. The agent
records any updated or changed information and forwards it to the
Rackspace Monitoring system.

The Rackspace Monitoring Agent is capable of monitoring the following
system information:

- Load Average
- Filesystem
- Memory
- CPU
- Network

### Using the Monitoring Agent

The first step to using the Monitoring Agent is to install it on your
Cloud Server. If you are a Rackspace Managed Cloud customer the agent is
automatically installed on all Cloud Servers. All other Rackspace
customers can learn about installing the agent on a Cloud Server by
reading [Installing the Monitoring Agent](/support/how-to/install-and-configure-the-rackspace-monitoring-agent/).

After the agent is installed on your Cloud Server, it immediately
provides CPU, Filesystem, and Memory metrics. You can manage the agent
using either the Cloud Control panel or the Monitoring API, which you
can learn about by reading the [Rackspace Monitoring API Developer Guide](https://docs.rackspace.com/docs/rackspace-monitoring/v1/).

### Live host statistics in the Cloud Control Panel

You can view the host statistics of a Cloud Server provided by the agent
on the Server Details page of the Cloud Control Panel:

{{<image src="ServerDetails_1.png" alt="" title="">}}

### Related Information

- [Install the Monitoring Agent](/support/how-to/install-and-configure-the-rackspace-monitoring-agent "Install the Monitoring Agent Manually")
- [Troubleshoot the Monitoring Agent](/support/how-to/troubleshooting-the-rackspace-monitoring-agent "Troubleshoot the Monitoring Agent")
