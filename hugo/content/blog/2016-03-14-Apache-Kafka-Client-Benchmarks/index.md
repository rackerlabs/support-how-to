---
layout: post
title: "Apache Kafka Client Benchmarks"
date: 2016-03-14
comments: false
author: Kaustav Haldar
published: true
categories:
    - Cloud monitoring
---

We have a large distributed system here at Rackspace, which we’re scaling and which currently processes 10 million metrics per minute. Part of the scaling effort required us to switch to using Apache Kafka for our message queues. We'll be looking at a few possible clients to explore our options and benchmarking their throughput. 

<!--more-->

We operate a monitoring system, which resides in 3 main Rackspace datacenters. We use a lightweight monitoring agent to keep track of things. The agent is written in Lua+luvit and currently resides on over 125,000 individual servers.

Our system already has a few different programming languages in it, so we figured it made sense to look at a few different clients. We have kafka wired up to our ingestors and have 64 partitions, three brokers, and snappy compression enabled.

## Node.js benchmarks

 First we ran benchmarks against the Node.js client, because a very large part of the system is written in it. The most popular kafka client for node.js is https://github.com/SOHU-Co/kafka-node.

We didn’t get the best results from it, and it averaged 6,000–8,000 messages per second. Using a node.js cluster module we could scale this up at the cost of CPU and memory overhead. We have a decent amount of memory on our servers and 12 CPU cores each.

With the SimpleConsumer from kafka-node and 1 worker per core, we managed to get about 70,000 messages per second. Using the HighLevelConsumer, we got about 40,000 messages per second.

### Source: https://gist.github.com/kaustavha/a7e96da03eb48df4d61d

## Kafka-pixy benchmarks

The Mailgun team at Rackspace also uses kafka and has written an excellent HTTP aggregating proxy. It translates kafka to simple HTTP get and put requests. Kafka-pixy is written in Go and uses Shopify’s Sarama kafka client library.

With the HTTP overhead on a single thread, this performed significantly worse, managing 700–800 messages per second. But it handles quite a few implementation details that need to be taken care of and provides a language agnostic interface to kafka.

### Source: https://gist.github.com/kaustavha/4c020dae6517b963fd05

## Logstash benchmarks

Almost satirical, but you can wire up logstash to kafka. We investigated this since our metrics storage database blueflood has a logstash input plugin. We wanted to see if this was a viable option, but it wasn’t, managing around 250 messages per second.

### Source: https://gist.github.com/kaustavha/bc3c7152b0c88bb22730

## Go benchmarks 

Go is a fairly new language that’s been rapidly gaining popularity, and one of the better kafka consumer implementations exist in this language. Built and opensourced by Shopify, it’s called Sarama. We got fairly decent throughput, with a single thread being able to handle 28k-30k messages per second.

### Source: https://gist.github.com/kaustavha/1759ff7c5e3e35c80f0f

## Java benchmarks

Last but not least, we got benchmarks using Java. Java performed better than any other library. After all, Kafka’s native API is java, so this is the only language where you’re not using a third-party library.

We managed to comfortably get between 40,000 to 50,000 messages per second. Perhaps the only library that could compare, or even beat this is the C++ library librdkafka, which has been cited by Confluent as being capable of 85,000 messages per second. We did not benchmark this ourselves, though.

### Source: https://github.com/tilogaat/HelloKafka

## Summary 

Node.js isn’t optimized for high throughput applications such as kafka. So if you need the high processing rates that come standard on kafka, perhaps Go, C++ or Java are your best friends. 

In the end we went with Go, because it provides a nice middle ground between developer time spent building our components and performance.

|  Client Type | Throughput |
| :------------ | :----------: |
|  Java        | 40,000 - 50,0000 |
|  Go          | 28,000 - 30,0000 |
|  Node        | 6,000 - 8,0000 |
|  Kafka-pixy  | 700 - 800 |
|  Logstash    | 250 |