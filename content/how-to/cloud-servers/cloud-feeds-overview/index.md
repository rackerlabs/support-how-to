---
permalink: cloud-feeds-overview
audit_date: '2020-07-14'
title: Cloud Feeds overview
type: article
created_date: '2014-07-30'
created_by: Ross Diaz
last_modified_date: '2020-07-14'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

Rackspace Cloud Feeds is a service that accepts and validates event notifications from other
Rackspace Cloud services and presents the data to you in a standardized way that is easy to
interpret.

### What is Cloud Feeds?

Modern complex computing environments generate large amounts of data related to system events,
security, and resources. For example, you might receive notifications to inform you that a server
has rebooted, detail a server's network bandwidth use, or respond to
a security condition such as a failed login attempt.

Managing the information driven by event notifications is problematic when the data sources use
different transmission formats and protocols. Gaining access to this information is further
complicated when working with virtualized cloud-based systems because infrastructure-level
event data might not be available to you. However, your ability to access, manage, and react to this
information can have a major impact on your mission-critical processes and applications.

That's where Cloud Feeds comes in.

The Cloud Feeds service accepts event notifications from other Rackspace Cloud services, validates
them, and makes the information available to you in a reliable, secure, and standardized way.
You can now enable critical business processes that rely on this information for the cloud, just as
you can in an on-premises computing environment. In addition, because Cloud Feeds uses the Atom
Publishing Protocol (RFC-5023) and Atom Syndication Formatted events (RFC-4287), you can access
notifications from multiple Rackspace Cloud services by using a single protocol and format.

### Access Cloud Feeds

Access Cloud Feeds events by using the simple Atom Publishing Protocol, which is HTTP-based.
You can use any of the following tools that can send HTTP requests and capture the output:

- [cURL, a command-line tool](https://curl.haxx.se/)
- [Mozilla Firefox REST client](https://addons.mozilla.org/en-US/firefox/addon/restclient/)
- [Chrome Poster](https://code.google.com/p/chrome-poster/)
- [RESTclient, a Java application used to test RESTful web
  services](https://code.google.com/p/rest-client/)

To retrieve events from a feed, send an HTTP `GET` request to the appropriate URL. The URL depends on
the **data center**, **feed name**, and your **tenant ID**. You need a valid **authentication token** to
make the request.

By default, the request retrieves the 25 most current events first. You can specify how many events to
retrieve, or modify search parameters to retrieve only events that match a certain criteria. The response
returns the results in Atom Syndication Format, which includes information to help you navigate the
list of events in the feed.

### Finding more information

If you want more information, such as a list of URLs, information about the feeds and events
available, how to determine your tenant ID and retrieve authentication tokens, and supported request
options, see the [Getting Started with Cloud
Feeds](https://docs.rackspace.com/docs/cloud-feeds/v1/developer-guide/#document-getting-started) and
the [Cloud Feeds Developer
Guide](https://docs.rackspace.com/docs/cloud-feeds/v1/developer-guide/#document-developer-guide).

### Getting help and providing feedback

If you have questions about Cloud Feeds, see the [Cloud Feeds FAQ](/support/how-to/cloud-feeds-faq).
