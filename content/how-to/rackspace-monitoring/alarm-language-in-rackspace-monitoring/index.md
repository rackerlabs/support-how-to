---
permalink: alarm-language-in-rackspace-monitoring
audit_date: '2020-11-25'
title: Alarm language in Rackspace Monitoring
type: article
created_date: '2012-08-10'
created_by: Daniel Dispaltro
last_modified_date: '2020-11-25'
last_modified_by: Rose Morales
product: Rackspace Monitoring
product_url: rackspace-monitoring
---

Rackspace Monitoring provides a powerful [alarm language](https://docs.rackspace.com/docs/rackspace-monitoring/v1/developer-guide/#alarm-language)
that enables you to set thresholds and create complex alarms. By using Rackspace
Monitoring rather than a Nagios&reg; server, for example, you can do the following:

- Create expressive alarms that validate multiple criteria by using a
  JavaScript-like language rather than a JSON API. Following is an example alarm
  definition:

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

- Use solution patterns to help you create your own complex alarms. Use our API
  to keep up-to-date on these examples.

- Put developers in control by letting them build thresholds similar to how you
  create your application code.

- Test thresholds before you configure them. Use data from the [test check API operation](https://docs.rackspace.com/docs/rackspace-monitoring/v1/developer-guide/#testing-the-check)
  and feed that into the [test alarm operation](https://docs.rackspace.com/docs/rackspace-monitoring/v1/developer-guide/#test-an-alarm)
  to simulate an alerting scenario.

- Use multiple data center alert policies to seamlessly evaluate alarm criteria
  from multiple data centers. The following graph shows a check running in three
  monitoring zones. The yellow and red areas represent when an alarm is in
  `WARNING` and `CRITICAL`, respectively.

   {{<image alt="sample graph that shows a check running in three monitoring zones" src="alarm-language-monitoring-graph.png" title="sample graph that shows a check running in three monitoring zones">}}

- Send an alert to [different notification addresses depending on severity](https://docs.rackspace.com/docs/rackspace-monitoring/v1/developer-guide/#document-api-operations/notification-plans-operations).

- Reduce false alerts on network issues.

- Start monitoring faster and spend less system administration time ensuring that the
  server stays online.
