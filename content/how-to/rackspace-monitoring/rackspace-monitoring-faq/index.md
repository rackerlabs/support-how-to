---
permalink: rackspace-monitoring-faq
audit_date: '2017-01-24'
title: Rackspace Monitoring FAQ
type: article
created_date: '2015-12-10'
created_by: Stephanie Fillmon
last_modified_date: '2019-01-29'
last_modified_by: Cat Lookabaugh
product: Rackspace Monitoring
product_url: rackspace-monitoring
---

### Getting started

{{<accordion title="What is Rackspace Monitoring?" col="in" href="accordion1">}}

Rackspace Monitoring is an API-driven cloud service built for infrastructure monitoring.
It provides a simple yet powerful feature set that allows flexibility in configuration and
execution. Rackspace Monitoring helps keep your applications up and running. Remote
monitoring tests connectivity from regional zones deployed throughout our global data
centers, and agent-based monitoring gathers information from inside each resource.

Rackspace Monitoring provides you with a set of tools that monitor, analyze and
report on the availability and performance of your websites, servers and other
cloud resources.
{{</accordion>}}
{{<accordion title="How do I set up Rackspace Monitoring?" col="in" href="accordion2">}}

Rackspace Monitoring is released through the cloud without need for
software installation on servers or computers. By eliminating the need
for installation, Rackspace can upgrade the monitoring service without
involving the customer. This process hides the complexity of the upgrade
and maintenance processes from the customer, giving them a simple and
reliable experience.
{{</accordion>}}
{{<accordion title="Where can I monitor my resources from?" col="in" href="accordion3">}}

There are six monitoring zones:

-   Blacksburg, VA (IAD)
-   Dallas-Fort Worth (DFW)
-   Chicago (ORD)
-   London (LON)
-   Hong Kong (HKG)
-   Sydney (SYD)

Using multiple monitoring zones eliminates the need for maintenance and upgrade
downtime, and ensures that your monitoring services remain uninterrupted even if a
data center failure occurs.
{{</accordion>}}
{{<accordion title="What are the various terms I need to know when using Rackspace Monitoring?" col="in" href="accordion4">}}

See the [Concepts](https://docs.rackspace.com/docs/rackspace-monitoring/v1/getting-started/concepts/)
section in the Rackspace Monitoring Getting Started Guide.
{{</accordion>}}
{{<accordion title="How do I configure my monitoring system?" col="in" href="accordion5">}}

You can set up Rackspace Monitoring by configuring one or more checks that
monitor the internal performance of your cloud server (agent checks) as well
as the availability of your website from different points on the Internet
(remote service checks). Use these checks to ensure consistent improvement and
optimization of your application’s code and infrastructure as well as the
ability to maintain high availability for your customers.

Rackspace Monitoring is an API-based system, so you can
[start creating monitoring checks](/support/how-to/available-checks-for-rackspace-monitoring/)
by using the following methods:

-   [Cloud Control Panel](/support/how-to/creating-a-monitoring-check-using-the-cloud-control-panel/)
-   [raxmon command-line interface (CLI)](/support/how-to/getting-started-with-rackspace-monitoring-cli/)
-   [Rackspace Monitoring API](https://docs.rackspace.com/docs/rackspace-monitoring/v1/)

{{</accordion>}}
{{<accordion title="How will I receive an alert when my website is down?" col="in" href="accordion6">}}

The service currently supports email, Short Message Service (SMS), PagerDuty,
VictorOps&reg;, and webhook notifications. For more information, see the
[Notification types](https://docs.rackspace.com/docs/rackspace-monitoring/v1/api-reference/notification-type-operations/)
section in the Rackspace Monitoring API Reference.
{{</accordion>}}
{{<accordion title="What does Rackspace Monitoring actually monitor?" col="in" href="accordion7">}}

The service monitors anything with a Universal Resource Locator (URL) or an
Internet Protocol (IP) address that is not blocked by a firewall.
For more information, see the
[Checks](https://docs.rackspace.com/docs/rackspace-monitoring/v1/api-reference/check-operations/)
section in the Rackspace Monitoring API reference.
{{</accordion>}}
{{<accordion title="Why do I need Rackspace Monitoring?" col="in" href="accordion8">}}

As the complexity of your business increases with the number of products, customers,
and websites, the possibility that one or more of your resources will fail also increases.
Learning about a problem from your customers means that you've already lost business,
and your customers are already having a negative experience using your website or
application. Rackspace Monitoring prevents these types of problems from occurring
{{</accordion>}}

### Account services

{{<accordion title="Can I use a UK account as well as a US account?" col="in" href="accordion9">}}

Yes, you can use both US and UK accounts. This is a global system that
works with both identities. Use the identity server where your tenant
lives and pass that token and tenant ID to the Rackspace Monitoring
system.
{{</accordion>}}
{{<accordion title="What is high availability?" col="in" href="accordion10">}}

Because we provide monitoring as a service (MaaS) hosted in the cloud, we are able to keep that service up
and running without any downtime. Even if we take a region offline for an upgrade, or
lose a data center because of a localized disaster or event, Rackspace Monitoring
continues to monitor your resources and send you notifications.
{{</accordion>}}
{{<accordion title="How can I tell Rackspace about features I would like added or issues I discover while using Rackspace Monitoring?" col="in" href="accordion11">}}

File a ticket or contact your account team.
{{</accordion>}}
{{<accordion title="Does the service support SNMP traps?" col="in" href="accordion12">}}

At this time, Rackspace Monitoring does not support Simple Network Management
Protocol (SNMP) traps.
{{</accordion>}}
{{<accordion title="How is Rackspace Monitoring billed?" col="in" href="accordion13">}}

Rackspace Monitoring bills by hourly usage based on how many checks were running in
that hour, and how many monitoring zones were involved. Adjusting your usage is
quick and easy, and this flexibility can help reduce unnecessary costs.
{{</accordion>}}

### Notification plans

{{<accordion title="What is a notification plan?" col="in" href="accordion14">}}

A notification plan defines the actions that are performed when a certain status is
returned by the check. You may have multiple notification plans in your cloud account.
{{</accordion>}}
{{<accordion title="How are notifications used?" col="in" href="accordion15">}}

Each monitoring check can reference one notification plan. When an alarm for that
check triggers the critical state, the notification plan associated with the check is used.
{{</accordion>}}
{{<accordion title="What does the default notification plan, Technical Contracts - Email, do?" col="in" href="accordion16">}}

If you do not set up a custom notification plan, then email is sent to all of the technical
contacts on your account. If your account lists no technical contacts, then the primary
contact is emailed. You can view the list of contacts for your account on the
**User Management** page in the [Cloud Control Panel](https://login.rackspace.com).
{{</accordion>}}
{{<accordion title="What does the Rackspace Managed Notifications plan do?" col="in" href="accordion17">}}

Rackspace Managed Notifications creates a support ticket within your account.
This feature is available only to customers with a Managed Operations service level.
{{</accordion>}}
{{<accordion title="How do I set up a custom notification plan?" col="in" href="accordion18">}}

You can use the Rackspace Monitoring API. For instructions, see the
[Rackspace Getting Started Guide](https://docs.rackspace.com/docs/rackspace-monitoring/v1/getting-started/create-first-monitor/#creating-a-notification-plan).
{{</accordion>}}
{{<accordion title="Where can I find the API documentation for Rackspace Monitoring notification plans?" col="in" href="accordion19">}}

Information about Rackspace Monitoring [notification plans](https://docs.rackspace.com/docs/rackspace-monitoring/v1/api-reference/notification-plans-operations/)
is in the Rackspace Monitoring API Reference.
{{</accordion>}}


### General

{{<accordion title="Is there a discount for companies that need to monitor in bulk?" col="in" href="accordion20">}}

To create a custom service plan that covers your monitoring needs and fits your budget,
contact our sales department.
{{</accordion>}}
{{<accordion title="Can Managed Servers customers use Rackspace Monitoring?" col="in" href="accordion21">}}

Yes, but you need a Cloud account. You configure your own notifications, so alerts
might go only to you (the user). Rackers can’t respond to your alarms unless they are
included in the notifications.
{{</accordion>}}
{{<accordion title="Is this service available globally or only in the US only?" col="in" href="accordion22">}}

Rackspace Monitoring is a global product supported in both the US and the UK. Our UK
data center can process alerts on its own if the link between the US and UK goes offline,
and other data centers act as safety nets in case of localized data center failure. No
matter what, your monitoring service remains functional.
{{</accordion>}}
{{<accordion title="What is a monitoring zone?" col="in" href="accordion23">}}

A monitoring zone is the launch point of a check. You can launch
checks from multiple monitoring zones.
{{</accordion>}}
{{<accordion title="What is an alarm?" col="in" href="accordion24">}}

An alarm is a set of rules that determine what status is returned based
on the result of the check.
{{</accordion>}}
{{<accordion title="What mechanism does Rackspace use to check that the site content is reliably correct?" col="in" href="accordion25">}}

At this time, Rackspace doesn't use *synthetic transactions* (a simulated set of
actions). However, we do support checking the HTML of the response. We
follow redirects but don't check content within a frame or iframe.
{{</accordion>}}
{{<accordion title="What is a notification?" col="in" href="accordion26">}}

A notification defines how the customer wants to be contacted in the
case of a system failure.
{{</accordion>}}
{{<accordion title="How secure is the Rackspace Monitoring system?" col="in" href="accordion27">}}

The Rackspace Monitoring system is extremely secure. Before releasing
the product, an independent firm assessed the level of security of the
Rackspace Monitoring systems and API, and all reported issues have been
addressed.
{{</accordion>}}
{{<accordion title="What is a check?" col="in" href="accordion28">}}

A check specifies what aspect of the resource you want to monitor. To learn
more, see [Rackspace Monitoring checks and alarms](/support/how-to/rackspace-monitoring-checks-and-alarms/).
{{</accordion>}}
{{<accordion title="What is a remote service check?" col="in" href="accordion29">}}

Remote service checks monitor the availability of your website from different
points on the Internet.

The following list briefly describes the available remote service checks:

- **HTTP Check (Website)**: This check monitors the availability of your website
either by URL or by IP address and alerts you if the site becomes unavailable
for more than 30 seconds.

- **TCP Check (Port)**: This check monitors the response from a specific port
on your server to determine if the process that is bound to that port is running.

- **Ping Check (Server)**: Ping is a network utility that checks the
availability of a computer (node) on a network. If the node responds, the Ping
utility also measures how long it take for a small packet of information to
make a round trip from your computer to that remote system. This check monitors
the general responsiveness of your server on the network and alerts you if it
fails to respond.
{{</accordion>}}
{{<accordion title="What is an agent check?" col="in" href="accordion30">}}

You need to install a monitoring agent on your cloud server to use agent checks.
If you have a cloud account with a managed service level agreement, the build
process installs the monitoring agent for you as part of the build process. If
you have an infrastructure account, you need to install the agent manually.

After the agent is installed, you can see current and historical performance
information about a cloud server from it's **Details** screen. Agent checks
enable you to set specific thresholds that trigger notifications.

The following list briefly describes the available Agent Checks:

- **Memory Check**: Your server has a finite amount of memory. Running low on
memory negatively affects the performance of your entire server and might cause
it to be unresponsive. This check alerts you when your cloud server’s memory
utilization surpasses 80%, but you can change that value to meet your needs.

- **CPU Check**: By default, this check returns a warning when 90% of the CPU
is used and a critical warning when 95% of the CPU is used. You can configure
these thresholds to suit your needs.

- **Load Average (Linux&reg; Only)**: Unique to UNIX&reg; systems, a server’s
load average represents the average amount of system work (CPU, disk, memory,
and so on) that a computer has performed over a period of time. This alarm
triggers when your server becomes heavily loaded. By default, it returns a
warning when load average exceeds 1 times the number of vCPUs and a critical
warning when it exceeds 1.5 times the number of vCPUs.

- **Filesystem**: Your server needs a certain amount of free disk space to operate.
This check monitors your server’s disk utilization and alerts you when used
space reaches a set threshold on the default mount point. By default, it returns
a warning when the server reaches 80% of capacity and a critical warning when
the server reaches 90% of capacity.

- **Network**: Even if your server is operating properly, it does little good
if it cannot communicate over the network. This check monitors the rate at which
your server is sending and receiving data. It sends a warning or alert if either
rate drops below a value that you configure.
{{</accordion>}}
{{<accordion title="What is an entity?" col="in" href="accordion31">}}

An entity is the resource (for example, website or server) that you want to monitor
{{</accordion>}}
{{<accordion title="After I create a check, how do I know it works?" col="in" href="accordion32">}}

The service provides an on-demand simulation feature that you can use to test the
functionality of the monitoring system by simulating a normal operating situation.
{{</accordion>}}
{{<accordion title="How responsive is the system to change, especially in large numbers?" col="in" href="accordion33">}}

Scalability has been a priority from the beginning. Even if a customer adds thousands of
cloud servers in minutes, Rackspace Monitoring can instantly begin monitoring all of
them.
{{</accordion>}}
{{<accordion title="How does Rackspace Monitoring compare to open source solutions like Nagios?" col="in" href="accordion34">}}

Rackspace Monitoring is intended to replace these types of tools. Although Rackspace
Monitoring doesn’t offer all the features of Nagios&reg;, it is hosted as a service,
API driven, and built for the cloud. Rackspace Monitoring also provides geographically
redundant checks, which is generally difficult to get with any solution. Customers
can leverage our large data center footprint, incredible scalability, and our continuous
release feature. Future improvements to the service are released as they become
functional, so there is no need to wait for an upgrade package, and no need for downtime.
{{</accordion>}}
{{<accordion title="Can I request to retain alert log data for less than 60 days?" col="in" href="accordion35">}}

Not at this time.
{{</accordion>}}
{{<accordion title="How are email notifications sent? Do I need to worry they will end up in my spam folder?" col="in" href="accordion36">}}

Email notifications are sent via Mailgun. They ensure that email is sent properly and not
placed into spam folders.
{{</accordion>}}
{{<accordion title="Why separate out the concepts of checks and alarms?" col="in" href="accordion37">}}

To build a state-of-the-art monitoring platform, data collection should be separate from
the thresholds. On the CLI and API level, this is a more complex user experience, but it
provides the most flexibility. The UI simplifies the process for those users who don't
want to work with a CLI.
{{</accordion>}}
{{<accordion title="I've heard about alarm language. How does it work?" col="in" href="accordion38">}}

Building an API around thresholds can be cumbersome. So we decided to represent
thresholds in a JavaScript-like language. It gives you the ability to write some very
concise thresholds. For a list of examples, see [Best practices for creating alerts](https://docs.rackspace.com/docs/rackspace-monitoring/v1/tech-ref-info/alert-triggers-and-alarms/#best-practices-for-creating-alerts) in the
Rackspace Monitoring Technical Reference.
{{</accordion>}}
{{<accordion title="Is there a set of command-line tools to use with Rackspace Monitoring?" col="in" href="accordion39">}}

Yes. Check out the [Raxmon project](https://github.com/racker/rackspace-monitoring-cli).
It uses the Apache&reg; Libcloud framework for building a reliable API
implementation that functions well.

To avoid repeating the Raxmon installation on each new cloud server, install it on your workstation and not on your server.

**Note**: Raxmon requires Python 2.5, 2.6, or 2.7.
{{</accordion>}}
{{<accordion title="Is there a good tutorial for customers unfamiliar with monitoring in general?" col="in" href="accordion40">}}

Yes. Visit our [Rackspace Monitoring Getting Started Guide](https://docs.rackspace.com/docs/rackspace-monitoring/v1/getting-started/),
which can guide you through the steps in creating your Rackspace Monitoring setup from scratch.
{{</accordion>}}
{{<accordion title="Why would I want to monitor from multiple monitoring zones?" col="in" href="accordion41">}}

Monitoring from multiple monitoring zones allows you to monitor the experience of
customers from many locations, which is important for companies that do business in
more than one region. Consider that your website might be working fine in the western
United States, but users from the eastern half of the country are experiencing high load
times and unresponsive web pages. Monitoring from just a western data center would
report an OK status, but if you also monitor from an eastern data center, you are
alerted to this problem before it affects your customers.

If you're only monitoring from a single zone, and for some reason there is an error with
a check, you might get false notifications that your site has a problem, when in reality it
is working fine. Using multiple monitoring zones helps prevent false alarms by verifying
a system failure from multiple sources before alerting you. Or, you can have it send you
a message if even just one check returns a failure status.
{{</accordion>}}

### API

{{<accordion title="How can I see monitors for both your dedicated and cloud servers?" col="in" href="accordion42">}}

Through the API by using a check or through the Raxmon CLI. For more information, see the [Checks section](https://docs.rackspace.com/docs/rackspace-monitoring/v1/api-reference/check-operations/) of the API refrence.

{{</accordion>}}
{{<accordion title="Can I view historical metrics for monitoring checks?" col="in" href="accordion43">}}

You can access metrics for a check directly by using the [Rackspace Monitoring API](https://docs.rackspace.com/docs/rackspace-monitoring/v1/api-reference/metrics-operations/).
You can also access metrics by using the [Rackspace Intelligence portal](https://intelligence.rackspace.com/).
{{</accordion>}}
{{<accordion title="How do I submit commands through the Rackspace Monitoring API?" col="in" href="accordion44">}}

As with any commands you submit to your cloud resources through the API, you must first authenticate through the API for the commands to be correctly processed.

In the [Rackspace Monitoring Developer Guide](https://docs.rackspace.com/docs/rackspace-monitoring/v1/),
provides the detailed configuration options available with this service
offering and the necessary components to build functioning monitoring
checks.
{{</accordion>}}
{{<accordion title="Is there an API call or published URI to get all the collector IP addresses as with Cloudkick?" col="in" href="accordion45">}}

Listing monitoring zones gives you the CIDRs of the set of collectors in that zone.
{{</accordion>}}
