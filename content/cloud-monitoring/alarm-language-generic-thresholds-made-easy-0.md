---
node_id: 1947
title: Alarm Language - Generic Thresholds Made Easy
type: article
created_date: '2012-08-10'
created_by: Daniel Dispaltro
last_modified_date: '2016-01-21'
last_modified_by: Constanze Kratel
product: Cloud Monitoring
product_url: cloud-monitoring
---

It is not necessary to edit config files on a Nagios server. Rackspace
Monitoring lets you:

-   Set thresholds with an easy to use alarm language:

        if (metrics['code'] != "200") {
          return CRITICAL, "Bad HTTP Status: #{code}"
        }

-   Create expressive alarms that validate multiple criteria while
    maintaining an easy to use javascript-like interface:

        if (metric['duration'] > 2000) {
          return CRITICAL, "HTTP request took more than 2 seconds, it took #{duration} milliseconds."
        }
        if (metric['duration'] > 1000) {
          return WARNING, "HTTP request took more than 1 second, it took #{duration} milliseconds."
        }
        # Check for an empty body match
        if (metric['body_match'] == "") {
          return CRITICAL, "Body match missing"
        }
        return OK, "HTTP connection time is normal"

-   See the solution patterns in our best practices documentation and
    then easily create your own complex alarms. Our API makes it simple
    to keep up to date on these examples, [get more information
    here](http://docs.rackspace.com/cm/api/v1.0/cm-devguide/content/service-alarm-examples.html).
-   Put developers in control by letting them build thresholds similar
    to how you create your application code.
-   Test thresholds before you configure them. Use data from our [Test
    Check
    API](http://docs.rackspace.com/cm/api/v1.0/cm-devguide/content/service-checks.html#service-checks-test)
    and feed that into our [Test Alarm
    API](http://docs.rackspace.com/cm/api/v1.0/cm-devguide/content/service-alarms.html#service-alarms-test)
    to simulate an alerting scenario.
-   Use multiple data center alert policies to seamlessly evaluate alarm
    criteria from multiple datacenters:

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Alarm%20Visualization_0.png" width="717" height="262" />

*The graph above shows a check running in 3 monitoring zones. The yellow
and red areas represent when an alarm is in WARNING and CRITICAL
respectively.*

------------------------------------------------------------------------

### Key Takeaways

-   Don't run a DIY nagios server.
-   Our [flexible alerting
    language](http://docs.rackspace.com/cm/api/v1.0/cm-devguide/content/alerts-language.html)
    puts you in control, don&rsquo;t bother with an awkward JSON API for
    defining thresholds.
-   Supports dual stacks, both IPv4 and IPv6.
-   Send an alert to different [notification addresses depending on
    severity](http://docs.rackspace.com/cm/api/v1.0/cm-devguide/content/service-notification-plans.html).
-   Monitor your website from up to [5
    different locations.](http://docs.rackspace.com/cm/api/v1.0/cm-devguide/content/service-monitoring-zones.html)
    Set the policy you&rsquo;d like to execute on mixed results.
-   Reduce false alerts on network hiccups.
-   Start monitoring faster and spend less sysadmin time on making sure
    that server stays up.



