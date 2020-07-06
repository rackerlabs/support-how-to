---
layout: post
title: "Top five Elasticsearch use cases"
date: 2020-05-18
comments: true
author: Steve Croce
published: true
authorIsRacker: true
authorAvatar: 'https://gravatar.com/avatar/56d03e2d0f853cff39c129cab3761d49'
bio: "As Senior Product Manager for the ObjectRocket Database-as-a-Service
offering and Head of User Experience for ObjectRocket, Steve oversees the
day-to-day planning, development, and optimization of ObjectRocket-supported
database technologies, clouds, and features. A product manager by day, he still
likes to embrace his engineer roots by night and develop with Elasticsearch,
SQL, Kubernetes, and web application stacks. He's spoken at
KubeCon + CloudNativeCon, OpenStack summit, Percona Live, and various Rackspace
events."
categories:
    - Database
canonical: https://www.objectrocket.com/blog/elasticsearch/top-elasticsearch-use-cases/
metaTitle: "Top five Elasticsearch use cases"
metaDescription: "At ObjectRocket, we've offered hosted Elasticsearch on our platform for a while now. We see clear trends among our customers and how they're using the product."
ogTitle: "Top five Elasticsearch use cases"
ogDescription: "At ObjectRocket, we've offered hosted Elasticsearch on our platform for a while now. We see clear trends among our customers and how they're using the product."
---

*Originally published on May 16, 2017, at ObjectRocket.com/blog.*

Other than "you know, for searching," the uses of Elasticsearch&reg; continue to grow and
change over time. At ObjectRocket, we've offered
[hosted Elasticsearch](https://www.objectrocket.com/managed-elasticsearch/) on our platform
for a while now. We see clear trends among our customers and how they're using the product.
In this post, we share the top five ElasticSearch use cases that we see on the
ObjectRocket platform.

<!--more-->

![](Picture1.png)

### #1 – Logging and log analysis

For anyone familiar with Elasticsearch, this one should be no surprise. The ecosystem
built up around Elasticsearch has made it one of the most straightforward tools to
implement and scale logging solutions. Many users on our platform have taken advantage
of this functionality to add logging to their primary use case. From 
[Beats](https://www.elastic.co/beats/) to [Logstash&reg;](https://www.elastic.co/logstash)
to [Ingest Nodes](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html),
Elasticsearch gives you plenty of options for grabbing data wherever it
lives and indexing it. From there, tools like [Kibana&reg;](https://www.elastic.co/kibana)
give you the ability to create rich dashboards and analysis. Another tool,
[Curator](https://www.elastic.co/guide/en/elasticsearch/client/curator/5.8/index.html),
allows you to put the retention period on autopilot.

### #2 – Scraping and combining public data

Like log data, the Elastic Stack has plenty of tools to grab and index remote data
easily. Also, like most document stores, the lack of a strict schema gives Elasticsearch
the flexibility to take in multiple different sources of data and still keep it all
manageable and searchable. A cool example of this that you can check out is our 
[Twitter connector](https://docs.objectrocket.com/twitter_to_elasticsearch.html?_ga=2.133731274.593289780.1589200458-1838016293.1580152479).
It allows you to set up hashtags to watch on Twitter and then grab all tweets with those
hashtags and analyze them in Kibana. We built that product on core Elastic Stack components
and added some additional pieces to help it scale.

### #3 – Full-text search

It's also no surprise that full-text search, as the core capability of Elasticsearch, is
high on this list. The surprising part is the applications of this among our customer set,
which go well beyond traditional Enterprise search or E-commerce. From fraud detection and
security to collaboration and beyond, our users find that the Elasticsearch search capabilities
are powerful and flexible and include many tools to make searching easier. Elasticsearch has
a query Domain Specific Language (DSL) and built-in capabilities for auto-complete
"Did you mean" responses, and more.

### #4 – Event data and metrics

Elasticsearch also operates really well on time-series data like metrics and application
events. This feature is another area where the huge Beats ecosystem allows you to grab data
for common applications easily. Whatever technologies you use, there's a good chance that
Elasticsearch has the components to grab metrics and events out of the box&mdash;in the rare
case that it can't, adding that capability is easy.

### #5 – Visualizing data

With tons of charting options, a tile service for geo-data, and TimeLion for time-series
data, Kibana is an amazingly powerful and easy to use visualization tool. Kibana has a
visual component to handle every use case that we've shared in this post. After you're
comfortable with the various data ingest tools, you'll find that Elasticsearch + Kibana
is your go-to tool for visualizing data that you're trying to wrap your head around.

### Conclusion

Though that's not every use case, those are the heavy-hitters we see on our service.
Elasticsearch and the rest of the Elastic Stack have proven to be extremely versatile.
As you can see, you can integrate Elasticsearch into what you're doing today and gain extra
insight in a variety of ways. That, to me, is the coolest part of Elasticsearch&mdash;the
ability to enhance the technologies you're already using rather than just add another
database to store your data.

<a class="cta purple" id="cta" href="https://www.rackspace.com/data/dba-services">Learn more about Rackspace DBA Services.</a>

Visit [www.rackspace.com](https://www.rackspace.com) and click **Sales Chat**
to get started.

Use the Feedback tab to make any comments or ask questions.
