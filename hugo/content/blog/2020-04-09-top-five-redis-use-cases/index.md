---
layout: post
title: "Top five Redis use cases"
date: 2020-04-10
comments: true
author: Joe Engel
published: true
authorIsRacker: true
categories:
    - Database
canonical: https://www.objectrocket.com/blog/how-to/top-5-redis-use-cases/
metaTitle: "Top five Redis use cases"
metaDescription: "This post explains some of the most common Redis use cases and different
characteristics that influence these choices."
ogTitle: "Top five Redis use cases"
ogDescription: "This post explains some of the most common Redis use cases and different
characteristics that influence these choices."
---

*Originally published November 7, 2017 at ObjectRocket.com/blog.*

This post explains some of the most common Redis&trade; use cases and different
characteristics that influence these choices.

<!--more-->

![]({% asset_path 2020-04-09-top-five-redis-use-cases/Picture1.png %})

### 1. Session cache

One of the most apparent use cases for Redis is using it as a session cache. The
advantage of using Redis over other session stores, such as Memcached, is that
Redis offers persistence. While maintaining a cache isn’t typically
mission-critical with regards to consistency, most users might be upset if all
their cart sessions go away.

Luckily, with the steam Redis has picked up over the years, you can easily find
documentation on how to use Redis appropriately for session caching. Even
Magento&reg;, the well-known e-commerce platform, has a
[plug-in](https://github.com/colinmollenhour/Cm_RedisSession) for Redis.

### 2. Full-page cache

Outside of your basic session tokens, Redis provides a straightforward
Full-page cache (FPC) platform in which to operate. Consistency factors
here, too. Even across restarts of Redis instances, with disk persistence,
your users don’t see a decrease in speed for their page loads&mdash;a drastic
change from something similar to PHP native FPC.

Magento offers a plug-in to use Redis as a
[full page cache backend](https://github.com/colinmollenhour/Cm_Cache_Backend_Redis).

For WordPress&reg; users, Pantheon&trade; has an excellent plug-in,
[wp-redis](https://wordpress.org/plugins/wp-redis/), to help you achieve the
fastest page loads you’ve ever seen!

### 3. Queues

Taking advantage of the Redis in-memory storage engine to-do list and set operations
makes Redis a fantastic platform to use for a message queue. Interacting with
Redis as a queue should feel native to anyone used to using push/pop operations
with lists in programming languages such as Python&reg;.

If you do a Google search on **Redis queues**, you can see that there are
tons of open-source projects aimed at making Redis the backend utility for all
your queuing needs. Celery, for example, has a backend using Redis as a broker
that you can [check out](https://celery.readthedocs.io/en/latest/getting-started/brokers/redis.html).

### 4. Leaderboards and counting

Redis does a great job with increments and decrements because it’s in-memory. Sets
and sorted sets also make our lives easier when we do these kinds of operations.
Redis just so happens to offer both of these data structures. So to pull the top 10
users from a sorted set&mdash;we’ll call it “user_scores”&mdash;you can run the following code:

    ZRANGE user_scores 0 10

Of course, this assumes you’re ranking users on an incremental score. If you
wanted to return both the users and their score, you could run the following
code:

    ZRANGE user_scores 0 10 WITHSCORES

Agora Games has an [example, using Ruby](https://github.com/agoragames/leaderboard),
of a leaderboard using Redis as it’s datastore.

### 5. Publish-Subscribe

Redis has a Publish-Subscribe (Pub/Sub) feature. The use cases for Pub/Sub are boundless. I’ve seen
people use it for social network connections, for triggering scripts based on
Pub/Sub events, and even for a chat system built using Redis Pub/Sub!

Of all the features Redis provides, I feel like this one always gets the least
amount of love, even though it has so much to offer users.

<a class="cta red" id="cta" href="https://www.rackspace.com/data/dba-services">Learn more about Rackspace DBA Services.</a>

Visit [www.rackspace.com](https://www.rackspace.com) and click **Sales Chat**
to get started.

Use the Feedback tab to make any comments or ask questions.
