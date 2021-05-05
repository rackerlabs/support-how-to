---
permalink: rackspace-auto-scale-glossary
audit_date: '2020-09-28'
title: Rackspace Auto Scale glossary
type: article
created_date: '2013-11-05'
created_by: Maria Abrahms
last_modified_date: '2020-09-28'
last_modified_by: Rose Morales
product: Rackspace Autoscale
product_url: rackspace-auto-scale
---

This article defines the following common Auto Scale terms:

### Agent

A monitoring daemon that resides on the server you are monitoring. The agent
gathers metrics based on agent checks and pushes them to Rackspace Monitoring.

### Agent token

An authentication token used to identify the agent when it communicates with
Rackspace Monitoring.

### Alarm

A mechanism that contains a set of rules that determine when a notification is
triggered.

### Authentication

The act or process of confirming the identity of a user or the truth of a claim.
The authentication service confirms that the user who claims to be making an incoming
request is actually the one making the request. The service does this by
validating a set of claims that the user makes. These claims are initially in
the form of a set of credentials. After initial confirmation based on
credentials, the authentication service issues a token to the user. When making
subsequent requests, the user can provide the token as evidence that the service
has already authenticated the user's identity.

### Check

A definition that explicitly specifies how you want to monitor an entity.

### Collector

Software that collects data from the monitoring zone. The collector maps
directly to an individual computer or a virtual machine.

### Convergence

The act of Auto Scale adding or removing enough servers to satisfy the needed
capacity.

### Convergence Delta

The change in the number of servers that the system makes when a scaling policy
is executed. For example, if the convergence delta is `2`, then the system adds two
servers. If it is `-10`, the system removes ten servers.

### Cooldown

See **Group cooldown** and **Policy cooldown**.

### Entity

A resource that you want to monitor. Some examples are a server, a website, or a
service.

### Flavor

A resource configuration for a server. Each flavor is a unique combination of
disk, memory, vCPUs, and network bandwidth.

### Group cooldown

The length of time that must pass before a scaling group can be scaled up or
down again. The cooldown prevents events from triggering a new policy execution
before server builds initiated by a previous policy execution complete.

### Health monitor

A configurable feature of each load balancer. A health monitor is used to
determine whether a back-end node is usable for processing a request. The load
balancing service currently supports active health monitoring.

### Image

A collection of files for a specific operating system (OS) that you use to
create or rebuild a server. Rackspace provides prebuilt images. You can also
create custom images from servers that you have launched. Use custom images
for data backups or as golden images for additional servers.

### Launch configuration

A configuration that contains the necessary details for adding and removing
servers from a scaling group in the Rackspace Auto Scale API. The
**launchConfiguration** object specifies whether you are creating a server or a
load balancer and the necessary details about the configuration.

### Load balancer

A logical device that belongs to a cloud account. You can use a load balancer to
distribute workloads between multiple back-end systems or services, based on the
configuration criteria.

### Node

A back-end device that provides a service on a specified IP and port.

### Notification

An informational message that is sent to one or more addresses when an alarm is
triggered.

### Policy cooldown

The length of time that must pass before a policy can be executed again. The
purpose is to allow for a fast scale-up and a slow-scale down of servers.

### Scaling

The process of adding or reducing capacity in response to changes in workload.

### Scaling group

A set of identical servers, and optionally a load balancer, that can scale up and
down in response to load, as defined by the scaling policy and bound by the
scaling-group configuration.

### Scaling policy

A policy that specifies how much capacity (that is, cloud servers) to add or
reduce. A schedule-based scaling policy also specifies when this should happen.
An event-based scaling policy relies on alerts that trigger webhooks.

### Session persistence

A feature of the load balancing service that attempts to force subsequent
connections to a service to be redirected to the same node as long as the node
is online.

### Server

A computer that provides explicit services to the client software running on its
system. A server is a virtual machine (VM) instance in the Cloud Servers
environment. To create a server, you must specify a name, flavor reference, and
image reference.

### Server image

See **Image**.

### Virtual IP

An Internet Protocol (IP) address that you configure on the load balancer.
Clients use the virtual IP to connect to a load balanced service.
Based on its configuration, the load balancer distributes incoming connections
to back-end nodes.

### Webhook

A URL that can activate a specific (scale-up or scale-down) policy for a scaling
group without requiring authentication.
