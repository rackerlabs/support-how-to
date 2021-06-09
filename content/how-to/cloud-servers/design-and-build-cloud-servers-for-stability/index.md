---
permalink: design-and-build-cloud-servers-for-stability
audit_date: '2021-05-17'
title: Design and build Cloud Servers for stability
type: article
created_date: '2013-12-17'
created_by: Joseph Palumbo
last_modified_date: '2021-05-17'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

When mission-critical availability is necessary for your business, developing
a powerful application or a beautifully designed web interface is only part of
the job. The Support team at Rackspace developed the following best practices 
to keep your site highly available.

### Rackspace Monitoring and Cloud Backups

Even when using cutting-edge cloud technology, you have to
remember the basics. Learn how to use these two key features of
the Rackspace Cloud to help you monitor, report, and restore your data
in the cloud.

-   Learn more about [Rackspace Monitoring](/support/how-to/available-checks-for-rackspace-monitoring)
    and read the [Rackspace Monitoring FAQ](/support/how-to/rackspace-monitoring-faq).
-   Learn more about [Cloud Backup](/support/how-to/cloud-backup)
    and read the [Cloud Backup FAQ](/support/how-to/cloud-backup-faq).

In addition to the Rackspace Monitoring, consider exploring some of our
partners who specialize in cloud monitoring and reporting. For example,
[New Relic&reg;](https://newrelic.com/) offers a performance-management
solution that enables developers to diagnose and fix application performance
problems in real time.

### RAID configuration of your Cloud Block Storage volumes

Cloud Block Storage allows you a maximum of 14 volumes per cloud server
and 50 volumes per region. Although these volumes already
offer a tremendous amount of stability, you can configure them in a
Redundant Array of Independent Disks (RAID) for extra redundancy.

### Dynamic DNS and multiple configurations

Customers who are serious about uptime choose to duplicate their production
configuration in multiple locations for use in major failures. A
fast failover is possible when you use a Dynamic Domain Name Server (DDNS)
service that starts sending your traffic to a different Internet Protocol (IP)
address when it detects a failure in your primary configuration. This second IP
address can even be in a different region for geographic redundancy.

[Cedexis](https://www.cedexis.com/) offers multiple solutions to improve
performance and availability by load balancing between multiple cloud regions.

Through an application-aware global content delivery network (CDN) platform,
[Incapsula](https://www.incapsula.com/) provides any website and web
application with best-of-breed security, distributed denial of service (DDoS)
protection, and load balancing and failover solutions. You can use Incapsula
as a stand-alone service or as an integrated solution.

### Load Testing

We cannot say enough about the value of testing (and then retesting)
your application's infrastructure before putting it into production.
Load testing reveals potential failure points in the design of your
infrastructure and opportunities to optimize your code, which helps overall
stability.

Rackspace has the following partners who provide this service, and
Rackspace Support can help you analyze the results and make the
right recommendations.

-   [Soasta](https://www.soasta.com/)
-   [Apica](https://www.apicasystem.com)
-   [Load Impact](https://loadimpact.com/)
-   [LoadView&reg;](https://www.loadview-testing.com/)

### RackConnect

The Rackspace Hybrid Cloud provides benefits, including
solid stability under the heaviest of traffic. Learn more about how
RackConnect can help you build for and maintain the highest availability
possible.

For more information, read [How do I get started with RackConnect v2.0](/support/how-to/rackconnect-v20) and
[RackConnect v2.0 Best Practices](/support/how-to/rackconnect-v20-best-practices).

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact). 
